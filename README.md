# Student template

## Purpose of this repository

This is a project template for students participating in Software Testing course
at Tampere University.

The repository only contains the source code that is under testing, `package.json` skeleton
and LICENSE file.

Source code folder contains a separate license file that must **NOT** be removed under any circumstances!
Removing this license file directly violates terms and conditions of the software under testing.
Individuals who remove or modify the license file will also carry the consequences.


# Student additions:
How to run:

1. Install dependencies

npm install --save-dev mocha chai mochawesome c8

2. Run all unit tests

npx mocha

or

npm test

3. Generate coverage report

npm run coverage

4. Generate Mochawesome HTML report

npm run report

5. View coverage results

Coverage summary is shown in the terminal.
Detailed coverage data is generated to:

coverage/

6. View Mochawesome report

Open:

mochawesome-report/mochawesome.html

in a web browser.

7. Continuous Integration

All tests and coverage checks run automatically through GitHub Actions on every push and pull request.

8. Coveralls

Coverage reports are automatically uploaded to Coveralls from the GitHub Actions workflow.

Project stack:
- Mocha (test framework)
- Chai (assertions)
- Mochawesome (HTML reports)
- c8 (code coverage)
- GitHub Actions (CI)
- Coveralls (coverage reporting)

Tried to run tests with only the 10 functions in src folder, but dependencies made this impossible, returned all functions to src folder. These are filtered in package.json, so they wont be causing unintended filler on coveralls.
