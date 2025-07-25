import registerPage from "../../pages/registerPage";
const registerObj = new registerPage();
import registerData from '../../fixtures/registerData.json';

describe('User Registration', () => {

    beforeEach(() => {
        registerObj.openURL();  // Reusable setup
    });

    it('Verify User Registration with valid credentials', () => {
        registerObj.enterFirstName(registerData.firstName);  
        registerObj.enterLastName(registerData.lastName);
        registerObj.enterEmail(registerData.email);
        registerObj.enterTelephone(registerData.telephone);
        registerObj.enterPassword(registerData.password);
        registerObj.subscribeOption();
        registerObj.selectCheckBox();
        registerObj.clickOnContinue();
    });

    it('Verify User Registration with Empty Fields', () => {
        registerObj.clickOnContinue();
        registerObj.verifyFirstNameError();
        registerObj.verifyLastNameError();
        registerObj.verifyEmailError();
        registerObj.verifyTelephoneError();
        registerObj.verifyPasswordError();
    });

});
