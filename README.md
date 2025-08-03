# Azure Function CI/CD Pipeline - Assignment 3

## Author: Preethi Jakhar

This project demonstrates how to deploy a Node.js-based Azure Function using Jenkins CI/CD pipeline.

### Folder Structure

- `function/index.js`: Azure Function code
- `function/function.json`: HTTP trigger bindings
- `tests/function.test.js`: Unit tests using Jest + Supertest
- `Jenkinsfile`: Jenkins Pipeline (Build → Test → Deploy)
- `package.json`: NPM project config and test setup

### Pipeline Stages

- **Build**: Installs dependencies
- **Test**: Runs 3 test cases (response content, 200 status, non-empty body)
- **Deploy**: Uses Azure CLI to deploy function (fails if Azure credentials not set)
