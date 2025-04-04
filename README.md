# 📦 Cypress E2E Test Suite for Hiredly Staging

This project contains end-to-end (E2E) UI tests for the Hiredly staging site using Cypress. It covers user flows like login, job search, job application, and resume upload.

---

## 🗂 Project Structure

```
cypress/
├── e2e/                           # Test script documentation is in the QA Drive!
├── fixtures/
│   └── resume.pdf                 # Dummy test resume
├── support/
│   ├── commands.js                # All custom Cypress commands
│   └── e2e.js                     # Global config (e.g. intercepts, overrides)
cypress.config.js                  # Cypress configuration (viewport, timeouts, etc.)
```

---

## 🧪 Tests Coverage

| Feature              | Covered In                | Notes                              |
|---------------------|---------------------------|------------------------------------|
| Login               | `login.cy.js`             | Using `cy.login()` command         |
| Invalid Login       | `invalidLogin.cy.js`      | Checks error message               |
| Job Search          | `jobApplication.cy.js`    | Search by keyword                  |
| Filter by Location  | `jobApplication.cy.js`    | Currently filtering for KL         |
| Apply to Job        | `jobApplication.cy.js`    | Visits job URL & clicks apply      |
| Resume Upload (HP)  | `resumeUpload.cy.js`      | Uploads from homepage              |
| Resume Upload (Profile) | `resumeUpload.cy.js` | Uploads from user profile          |

---

## 🧠 Custom Commands

All reusable actions are abstracted into `commands.js`. Examples:

```js
cy.login(email, password)
cy.search("marketing")
cy.applyJob()
cy.uploadResumeHP(name, email, password)
```

To add more, edit `cypress/support/commands.js`.

---

## 🧹 Maintenance Tips

- ✅ Keep test data generic (e.g. `testj18@gmail.com`)
- ✅ Prefer commands over hardcoded steps
- ✅ Use stable attributes (e.g. `data-testid`)
- ✅ Document new flows with clear file names

---

## 📎 Notes

- Tracking scripts like **Clarity** are blocked in `e2e.js` to prevent noise.
- Resume PDF is a dummy file stored in `/fixtures`.
- Avoid committing real credentials or PII.

---

## 👩‍💻 New Intern Setup

1. Clone the repo
2. `npm install`
3. Run Cypress UI (`npx cypress open`)
4. Explore tests under `cypress/e2e`
5. Refer to `commands.js` to reuse login/search/etc.
6. You’re good to go!

---

Need help writing your first test? Refer to the Cypress Handbook in the QA Drive! 