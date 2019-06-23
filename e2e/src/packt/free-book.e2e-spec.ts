import { browser, by, element, protractor } from 'protractor';

describe('workspace-project App', () => {


  beforeEach(async () => {
    await browser.waitForAngularEnabled(false);
  });

  it('should display welcome message', async () => {
    const usernameValue = 'xxx';
    const passwordValue = 'xxx';


    await browser.get('https://www.packtpub.com/free-learning');

    let signInSignButton = element(by.css('a[class=signed-out]'));
    if (!signInSignButton) {
      signInSignButton = element(by.css('a[class=account]'));
    }

    await browser.wait(protractor.ExpectedConditions.visibilityOf(signInSignButton));
    await signInSignButton.click();
    const signInLoginPageButton = element(by.buttonText('Log in'));

    await browser.wait(protractor.ExpectedConditions.elementToBeClickable(signInLoginPageButton));

    const email = element(by.css('input[name=email]'));
    const password = element(by.css('input[name=password]'));
    await email.sendKeys(usernameValue);
    await browser.sleep(500);
    await password.sendKeys(passwordValue);
    await browser.sleep(500);
    await signInLoginPageButton.click();


    await browser.sleep(10000);

    const claimButton = element(by.id('fl-claim-btn'));
    await browser.wait(protractor.ExpectedConditions.elementToBeClickable(claimButton));
    await browser.sleep(2000);
    await claimButton.click();

    await browser.sleep(1000 * 60 * 3); // 3 min
    await browser.close();

  });
});
