import {Page} from '@playwright/test';

export class CheckoutOverviewPage {

    readonly page: Page;

    constructor(page: Page){
        this.page = page
    }

    async clickFinishButton() {
        await this.page.locator('xpath = //*[@id="finish"]').click();
    };

    async clickCancelButton() {
        await this.page.locator('xpath = //*[@id="cancel"]').click();
    };

}