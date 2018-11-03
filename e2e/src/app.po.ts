import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-chat nav span')).getText();
  }

  getSubmitButtonRight(){
    return element.all(by.css('.btn_submit_message')).first();
  }

  setRigthFieldText(value){
    return element.all(by.css('.input_message')).first().sendKeys(value);
  }

  getMessageInDiscussionBlockRight(){
    return element.all(by.css('.blk_messages > div > div > div.col-8')).first().getText();
  }
}
