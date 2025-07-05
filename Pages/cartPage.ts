import {Page} from '@playwright/test';

export class CartPage {

    readonly page: Page;
    constructor(page: Page){
        this.page = page
    }

    async checkoutProduct() {
        await this.page.locator('xpath = //*[@id="checkout"]').click();
    };

}