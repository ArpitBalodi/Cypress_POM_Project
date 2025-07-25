class registerPage {

    weblocators = {
        firstName: '#input-firstname',
        lastName: '#input-lastname',
        email: '#input-email',
        telephone: '#input-telephone',
        password: '#input-password',
        passwordConfirm: '#input-confirm',
        subscribe: 'input[name="newsletter"]',
        policyCheckbox: 'input[type="checkbox"]',
        continue: '.btn.btn-primary'
    }

    openURL() {
        cy.visit(Cypress.env('URL'));
        cy.get('body').highlightAndScreenshot('1_openURL','register');
        cy.wait(500);
    }

    enterFirstName(FName) {
        cy.get(this.weblocators.firstName)
            .should('be.visible')
            .type(FName)
            .then($el => {
                cy.wrap($el).highlightAndScreenshot('2_enterFirstName','register');
            });
    }

    enterLastName(LName) {
        cy.get(this.weblocators.lastName)
            .should('be.visible')
            .type(LName)
            .then($el => {
                cy.wrap($el).highlightAndScreenshot('3_enterLastName','register');
            });
        cy.wait(500);
    }

    enterEmail(email) {
        cy.get(this.weblocators.email)
            .should('be.visible')
            .type(email)
            .then($el => {
                cy.wrap($el).highlightAndScreenshot('4_enterEmail','register');
            });
    }

    enterTelephone(phoneNo) {
        cy.get(this.weblocators.telephone)
            .should('be.visible')
            .type(phoneNo)
            .then($el => {
                cy.wrap($el).highlightAndScreenshot('5_enterTelephone','register');
            });
    }

    enterPassword(password) {
        cy.get(this.weblocators.password)
            .should('be.visible')
            .type(password)
            .then($el => {
                cy.wrap($el).highlightAndScreenshot('6_enterPassword','register');
            });

        cy.get(this.weblocators.passwordConfirm)
            .should('be.visible')
            .type(password)
            .then($el => {
                cy.wrap($el).highlightAndScreenshot('7_enterPasswordConfirm','register');
            });
    }

    subscribeOption() {
        cy.get(this.weblocators.subscribe)
            .should('be.visible')
            .check("1")
            .then($el => {
                cy.wrap($el).highlightAndScreenshot('8_subscribeOption','register');
            });
    }

    selectCheckBox() {
        cy.get(this.weblocators.policyCheckbox)
            .should('be.visible')
            .check()
            .then($el => {
                cy.wrap($el).highlightAndScreenshot('9_selectCheckbox','register');
            });
    }

    clickOnContinue() {
        cy.get(this.weblocators.continue)
            .should('be.visible')
            .click()
            .then($el => {
                cy.wrap($el).highlightAndScreenshot('10_clickOnContinue','register');
            })

    }

    verifyFirstNameError() {
        cy.get(this.weblocators.firstName)
            .parent() // ensure correct scope
            .find('.text-danger')
            .should('exist')
            .and('be.visible')
            .and('contain', 'First Name must be between 1 and 32 characters!')
            .then($el => {
                cy.wrap($el).highlightAndScreenshot('error_firstName','register');
            });
    }

    verifyLastNameError() {
        cy.get(this.weblocators.lastName)
            .parent()
            .find('.text-danger')
            .should('exist')
            .and('be.visible')
            .and('contain', 'Last Name must be between 1 and 32 characters!')
            .then($el => {
                cy.wrap($el).highlightAndScreenshot('error_lastName','register');
            });
    }

    verifyEmailError() {
        cy.get(this.weblocators.email)
            .parent()
            .find('.text-danger')
            .should('exist')
            .and('be.visible')
            .and('contain', 'E-Mail Address does not appear to be valid!')
            .then($el => {
                cy.wrap($el).highlightAndScreenshot('error_email','register');
            });
    }

    verifyTelephoneError() {
        cy.get(this.weblocators.telephone)
            .parent()
            .find('.text-danger')
            .should('exist')
            .and('be.visible')
            .and('contain', 'Telephone must be between 3 and 32 characters!')
            .then($el => {
                cy.wrap($el).highlightAndScreenshot('error_telephone','register');
            });
    }

    verifyPasswordError() {
        cy.get(this.weblocators.password)
            .parent()
            .find('.text-danger')
            .should('exist')
            .and('be.visible')
            .and('contain', 'Password must be between 4 and 20 characters!')
            .then($el => {
                cy.wrap($el).highlightAndScreenshot('error_password','register');
            });
    }
    verifyPasswordError() {
        cy.get(this.weblocators.password)
            .siblings('.text-danger')
            .should('be.visible')
            .and('contain', 'Password must be between 4 and 20 characters!')
            .highlightAndScreenshot('error_password','register');
    }
}

export default registerPage;
