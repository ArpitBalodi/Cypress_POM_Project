import LoginPage from "../../pages/loginPage"; 
const loginObj = new LoginPage(); 

import loginData from '../../fixtures/loginData.json';

describe('User Login', () => {

  // Run before each test
  beforeEach(() => {
    loginObj.visitLoginPage();
  });

  it('Verify Login with Valid Credentials', () => {
    loginObj.enterEmail(loginData.validEmail);
    loginObj.enterPassword(loginData.password);
    loginObj.clickOnLogin();
  });

  it('Verify Login with Invalid Credentials', () => {
    loginObj.enterEmail(loginData.inValidEmail);
    loginObj.enterPassword(loginData.incorrectPassword);
    loginObj.clickOnLogin();
  });

  it('Verify Login with Empty Fields', () => {
    loginObj.clickOnLogin();
    loginObj.emptyFieldWarning();
  });

  it('Verify Login with Valid Email and Invalid Password', () => {
    loginObj.enterEmail(loginData.validEmail);
    loginObj.enterPassword(loginData.incorrectPassword);
    loginObj.clickOnLogin();
    loginObj.incorrectEmailorPassWarning();
  });

});
