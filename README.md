# modular-micro-frontend-dashboard-113379-113388

---

## SonarQube Code Quality Analysis

SonarQube can be used for automated code quality and static analysis for this project.

### Config Setup

A default `sonar-project.properties` file is provided at the project root.  
Replace the `sonar.projectKey`, `sonar.organization`, and `sonar.host.url` with your SonarQube or SonarCloud details before running analysis.

### Running SonarQube Locally

1. [Install SonarQube Scanner](https://docs.sonarqube.org/latest/analysis/scan/sonarscanner/)
2. Authenticate (if required) and set up your [Sonar token](https://sonarcloud.io/account/security/).
3. Run the following command from the project root:

   ```sh
   npx sonar-scanner
   # or if installed globally:
   sonar-scanner
   ```

4. View results on your SonarQube/SonarCloud dashboard.

### Best Practices

- Always update `sonar-project.properties` with your actual values.
- Adapt `sonar.sources` and coverage paths as your frontend grows.
- For CI integration, add your SonarQube step _after_ running tests/coverage.

For more details, see the [SonarQube documentation](https://docs.sonarqube.org/latest/).

---