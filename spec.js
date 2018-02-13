var helper = require('./helper')

describe('Main Page : login/register', function() {
//
//   it('should have a title', function() {
//     browser.get(browser.params.url);
//
//     var title = 'Etsy.com | Shop for anything from creative people everywhere';
//
//     expect(browser.getTitle()).toEqual(title);
// });
// it('should sign in and verify pwd error appear', function() {
//   browser.get(browser.params.url);
//
//   var signInButton = element(by.id('sign-in'));
//   var signInForm = element(by.id('signin-button'));
//
//   var usernameField = element(by.id('username-existing'));
//   var userPasswordField = element(by.id('password-existing'));
//
//   var passwordExistingError = element(by.id('password-existing-error'));
//
//   signInButton.click();
//   helper.waitUntilReady(usernameField);
//   usernameField.sendKeys('test@test.com');
//   helper.waitUntilReady(userPasswordField);
//   userPasswordField.sendKeys('password');
//   signInForm.click();
//   helper.waitUntilReady(passwordExistingError);
//   //var passwordExistingError =passwordExistingError.getText();
//   expect(passwordExistingError.getText()).toBe('Password wad incorrect.');
// });

it('should register a new user', function(){
  browser.get(browser.params.url);

  var registerButtonMainPage = element(by.id('register'));
  var firstNameField = element(by.id('first-name'));
  var lastNameField = element(by.id('last-name'));
  var emailField = element(by.id('email'));
  var passwordField = element(by.id('password'));
  var passwordConfirmField = element(by.id('password-repeats'));

  var usernameRegisterField = element(by.id('username'));
  var etsyfinds = element(by.id('etsy_finds'));
  var registerButtonPopup = element(by.id('register_button'));

helper.waitUntilReady(firstNameField);
firstNameField.sendKeys('QA');

helper.waitUntilReady(lastNameField);
lastNameField.sendKeys('Automation');

helper.waitUntilReady(emailField);
emailField.sendKeys('test@test.com');

helper.waitUntilReady(passwordField);
passwordField.sendKeys('password');

helper.waitUntilReady(passwordConfirmField);
passwordConfirmField.sendKeys('password');

helper.waitUntilReady(usernameRegisterField);
usernameRegisterField.sendKeys('qa_test');

helper.waitUntilReady(etsyfinds);
etsyfinds.click();

helper.waitUntilReady(registerButtonPopup);



































  registerButtonMainPage.click();
});

























});
