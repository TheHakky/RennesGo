import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return browser.getTitle() as Promise<string>;
  }

  getLoginBtnText() {
    return element((by.css('#loginBtn'))).getText() as Promise<string>;
  }

  checkTheBox() {
    element((by.css('#checkbox'))).click();
  }

  typeUsernameAndPassword(username: string, password: string) {
    element((by.css('input[type=text]'))).sendKeys(username);
    element((by.css('input[type=password]'))).sendKeys(password);
  }

  clickLoginBtn() {
    element((by.css('#loginBtn'))).click();
  }

  getDisplayedUsername() {
    return element(by.css('#username')).getText() as Promise<string>;
  }

  FindStarAndClick() {
    const item = element.all(by.css('.star span')).first();
    item.click();
  }

  prefferedExist() {
    return element(by.css('.star .span')).isPresent();
  }

  clickLogoutBtn() {
    element(by.css('#logoutBtn')).click();
  }

  checkIfUsernameDisplayed() {
    return element(by.css('#username')).isPresent();
  }

}
