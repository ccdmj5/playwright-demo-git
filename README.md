![Playwright Tests](https://github.com/ccdmj5/playwright-demo-git/actions/workflows/playwright.yml/badge.svg)

# Playwright Demo — Login Test Automation

E2E test automation suite for [Practice Test Automation](https://practicetestautomation.com/practice/) built with Playwright + TypeScript, using Page Object Model (POM), data-driven testing, and GitHub Actions CI/CD.

## 🧪 What's tested

**Login functionality** — positive and negative scenarios:

| Scenario | Type | Expected result |
|---|---|---|
| Valid credentials | Positive | Redirects to success page |
| Invalid username | Negative | Error message displayed |
| Invalid password | Negative | Error message displayed |
| Empty fields | Negative | Validation error displayed |

## 🏗️ Project structure

```
├── pages/
│   └── LoginPage.ts        # Page Object Model for login page
├── tests/
│   └── login.spec.ts       # Test cases (positive & negative)
├── test-data/
│   └── loginData.ts        # Data-driven test inputs
├── .github/
│   └── workflows/
│       └── playwright.yml  # CI/CD pipeline
└── playwright.config.ts
```

## ⚙️ Key features

- **Page Object Model (POM)** — selectors and actions decoupled from test logic
- **Data-driven testing** — multiple input sets from external test data file
- **Assertions with `expect`** — positive and negative validations
- **Cross-browser** — runs on Chromium, Firefox, and WebKit
- **CI/CD** — GitHub Actions runs the full suite on every push

## 🚀 Run locally

```bash
# Install dependencies
npm ci

# Install browsers
npx playwright install

# Run all tests
npx playwright test

# Run with UI mode
npx playwright test --ui

# View HTML report
npx playwright show-report
```

## 🛠️ Tech stack

- [Playwright](https://playwright.dev/)
- TypeScript
- GitHub Actions