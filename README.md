# Assignment 3 – Azure Function CI/CD Pipeline with Jenkins

**Student Name:** Preethi Jakhar  
**Course:** PROG8860 – CI/CD  
**Instructor:** Aagam Jhaveri  
**Submission Date:** August 2025

---

## 📌 Overview

This project demonstrates how to set up a Continuous Integration and Continuous Deployment (CI/CD) pipeline using **Jenkins** for an Azure Function. The function is a simple "Hello, World!" app triggered by HTTP, and the pipeline automates the build, test, and deployment stages.

---

## ⚙️ Tech Stack

- **Jenkins** – Automates CI/CD pipeline  
- **Azure Functions** – Serverless function runtime  
- **Node.js** – JavaScript runtime for the function  
- **Jest** – Testing framework  
- **GitHub** – Source code repository  

---

## 🧩 Project Structure

```
Assignment3/
├── function/
│   ├── index.js              # Azure Function logic
│   └── function.json         # HTTP trigger binding
├── tests/
│   └── function.test.js      # Unit tests using Jest
├── Jenkinsfile               # CI/CD pipeline definition
├── package.json              # Node dependencies + test script
└── function.zip              # Function deployment package
```

---

## 🚀 Jenkins Pipeline Flow

The pipeline runs in three main stages:

1. **Build**
   - Clones the GitHub repo
   - Installs NPM dependencies

2. **Test**
   - Executes unit tests using Jest

3. **Deploy**
   - Uses Azure CLI to deploy `function.zip` to the Azure Function App

---

## 📝 Setup Instructions

### 1. Prerequisites

- Azure Function App already deployed
- Jenkins installed on local machine
- Azure Service Principal created
- Required Jenkins plugins installed (Git, Pipeline)

### 2. Environment Variables in Jenkins

Set these in **Manage Jenkins → Credentials → Global**:

| Variable | Description |
|----------|-------------|
| `AZURE_CLIENT_ID` | From Azure SP |
| `AZURE_CLIENT_SECRET` | From Azure SP |
| `AZURE_TENANT_ID` | From AAD |
| `RESOURCE_GROUP` | Azure RG name |
| `FUNCTION_APP_NAME` | Function App name |

---

## ✅ Running Locally (Optional)

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run tests:
   ```bash
   npm test
   ```

---

## 📸 Screenshots Included

- Jenkins Dashboard
- Console output of successful job run
- Test results (local and CI)
- Function output in browser
- Job pipeline view