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
    let item = element.all(by.css('.star span')).first();

    console.log('logg: ' + item);

    item.click();
  }

  prefferedExist() {
    let item = element(by.css('.preffered')).element(by.css('.star'));

    if(item) {
      return true;
    } 

    return false;
  }

}
