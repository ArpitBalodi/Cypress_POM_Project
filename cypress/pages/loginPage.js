class LoginPage {

  weblocators = {
    email: "#input-email",
    password: "#input-password",
    login: "input[type='submit']",
    emptyFieldError: "div.alert.alert-danger.alert-dismissible",
    incorrectInfo: "div.alert.alert-danger.alert-dismissible"
  }

  visitLoginPage() {
    cy.visit('/index.php?route=account/login')
      .then(() => {
        cy.get('body').highlightAndScreenshot('LoginPage', 'login');
      });
  }

  enterEmail(Email) {
    cy.get(this.weblocators.email)
      .should('be.visible')
      .type(Email)
      .then($el => {
        cy.wrap($el).highlightAndScreenshot('EnterEmail', 'login');
      });
  }

  enterPassword(Password) {
    cy.get(this.weblocators.password)
      .should('be.visible')
      .type(Password)
      .then($el => {
        cy.wrap($el).highlightAndScreenshot('EnterPassword', 'login');
      });
  }

  clickOnLogin() {
    cy.get(this.weblocators.login)
      .should('be.visible')
      .click()
      .then($el => {
        cy.wrap($el).highlightAndScreenshot('LoginButton', 'register');
      });
  }

  emptyFieldWarning() {
    cy.get(this.weblocators.emptyFieldError)
      .should('be.visible')
      .and('contain', 'Warning')
      .then($el => {
        cy.wrap($el).highlightAndScreenshot('EmptyFieldWarning', 'login');
      });

  }

  incorrectEmailorPassWarning() {
    cy.get(this.weblocators.incorrectInfo)
      .should('be.visible')
      .and('contain', ' Warning: No match for E-Mail Address and/or Password.')
      .then($el => {
        cy.wrap($el).highlightAndScreenshot('incoorectInfo', 'login');
      });
  }
}

export default LoginPage; 
