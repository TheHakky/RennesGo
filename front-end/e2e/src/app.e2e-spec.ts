import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App: ', () => {
  let page: AppPage;
  // let mock;

  beforeEach(() => {
    page = new AppPage();
  });
/*
  beforeEach(() => {
    mock = require('protractor-http-mock');

    mock([
      {
        request: {
          path: 'go/user/new',
          method: 'POST'
        },
        response: {
          data: {
            username: 'somebody'
          }
        }
      },
      {
        request: {
          path: 'go/login',
          method: 'POST'
        },
        response: {
          data: {
            username: 'somebody'
          }
        }
      },
      {
        request: {
          path: 'go/profile/get',
          method: 'GET'
        },
        response: {
          data: {
            prefLines: [],
            username: 'somebody'
          }
        }
      },
      {
        request: {
          path: 'go/logout',
          method: 'GET'
        },
        response: {
          data: {
            username: 'somebody'
          }
        }
      }
    ]);
  });
*/
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

  /*
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
  */

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
