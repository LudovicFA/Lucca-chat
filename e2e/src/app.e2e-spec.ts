import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display navBar Title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Chat application');
  });

  it('should fill input text with content and disabled submit button', () => {
    expect(page.getSubmitButtonRight().getAttribute('disabled')).toEqual('true');
    page.setRigthFieldText("Bonjour");
    browser.sleep(1000);
    expect(page.getSubmitButtonRight().getAttribute('disabled')).toEqual(null);
    page.getSubmitButtonRight().click();
    browser.sleep(1000);
    expect(page.getSubmitButtonRight().getAttribute('disabled')).toEqual('true');
  });

  it('should display the message in the discussion zone', () => {
    page.navigateTo();
    page.setRigthFieldText("Bonjour !!");
    browser.sleep(1000);
    page.getSubmitButtonRight().click();
    expect(page.getMessageInDiscussionBlockRight()).toEqual('Bonjour !!');
  });
  
});
