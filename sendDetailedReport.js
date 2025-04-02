const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

// configure the email transporter (Gmail example, replace with your credentials)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'cypresstestshiredly@gmail.com',
    pass: 'Cypress123!'
  }
});

// Path to the mochawesome JSON report
const reportPath = path.join(__dirname, 'cypress/reports/mochawesome-report.json');

// Read the mochawesome JSON report
fs.readFile(reportPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the report:', err);
    return;
  }

  // Parse the JSON data
  const report = JSON.parse(data);

  // Extract summary data
  const totalTests = report.stats.tests;
  const passedTests = report.stats.passes;
  const failedTests = report.stats.failures;

  // Extract names of failed test suites
  const failingTests = report.results
    .filter(suite => suite.stats.failures > 0)
    .map(suite => suite.spec);

  // Create a detailed summary
  const summary = `
    Below is a summary of the tests ran. I hope this email makes it. 
    
    Test Summary:
    --------------
    Total Tests: ${totalTests}
    Passed: ${passedTests}
    Failed: ${failedTests}

    Failing Test Suites:
    ---------------------
    ${failingTests.length > 0 ? failingTests.join('\n') : 'None'}
  `;

  // Email options
  const mailOptions = {
    from: 'cypresstestshiredly@gmail.com',
    to: 'jyllian.kok@hiredly.com',
    subject: 'Cypress Test Detailed Report',
    text: summary,
  };

  // Send the email with the detailed summary
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
});
