// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) => {
    cy.visit('')
    cy.get('#input-email').type(email)
    cy.get('#input-password').type(password)
    cy.get('input.btn.btn-primary').click()
})


Cypress.Commands.add('highlightAndScreenshot', { prevSubject: true }, (subject, screenshotName, folder = 'default') => {
  return cy.wrap(subject).then($el => {
    const width = $el.outerWidth();
    const height = $el.outerHeight();

    if (width < 1 || height < 1) {
      Cypress.log({
        name: 'highlightAndScreenshot',
        message: ` Skipped '${screenshotName}' - element has no size (width: ${width}, height: ${height})`,
      });
      return cy.wrap(subject);
    }

    $el.css('outline', '2px solid red');
    const footer = Cypress.$('footer');
    footer.css('display', 'none');

    return cy.wait(200).then(() => {
      cy.get('body').screenshot(`${folder}/${screenshotName}`);
    }).then(() => {
      footer.css('display', '');
      $el.css('outline', '');
    });
  });
});
