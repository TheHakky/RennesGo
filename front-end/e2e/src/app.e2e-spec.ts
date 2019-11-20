import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App: ', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  
  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Rennesgo');
  });

  it('button text should change to "Create account" when I check the check box', () => {

    // default value
    expect(page.getLoginBtnText()).toEqual('Log-in');

    // check the checkbox
    page.checkTheBox();

    // assert that the text of the button has changed to 'Create account'
    expect(page.getLoginBtnText()).toEqual('Create account');

    // uncheck the checkbox
    page.checkTheBox();

    // assert that the text of the button has changed to 'Log-in'
    expect(page.getLoginBtnText()).toEqual('Log-in');

  });

  it('should be able to create account and log in', () => {

    // type account cridentials
    page.typeUsernameAndPassword('somebody', 'somebody');

    // check the checkbox
    page.checkTheBox();

    // create account
    page.clickLoginBtn();

    // verify the login is done
    expect(page.getDisplayedUsername()).toEqual('somebody');

  });

  it('should be able to mark a line as prefferd', () => {

    // find an element star anc click it
    page.FindStarAndClick();

    browser.sleep(10000);

    // check that its added to prefferd lines
    expect(page.prefferedExist()).toBeTruthy();

    browser.sleep(5000);

  });
 
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
/*
  afterEach(() => {
    mock.teardown();
  });
*/
});
