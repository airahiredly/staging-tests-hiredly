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

## 👩‍💻 Setup for QA Team

1. Clone the repo
2. `npm install`
3. Run Cypress UI (`npx cypress open`)
4. Explore tests under `cypress/e2e`
5. Refer to `commands.js` to reuse login/search/etc.
6. You’re good to go!

---

Need help writing your first test? Refer to the Cypress Handbook in the QA Drive! 

Last Updated April 2025 by Jyllian Kok E-Lyse
