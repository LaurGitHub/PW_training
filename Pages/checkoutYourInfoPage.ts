import {Page} from '@playwright/test';

export class CheckoutYourInfoPage {

    readonly page: Page;

    constructor(page: Page){
        this.page = page
    }

    async fillInInfo() {
        await this.page.getByPlaceholder('First Name').fill('standard');
        await this.page.getByPlaceholder('Last Name').fill('user');
        await this.page.getByPlaceholder('Zip/Postal Code').fill('1234');
    };

    async clickContinueButton() {
        await this.page.locator('xpath = //*[@id="continue"]').click();
    };

}