import {Page} from '@playwright/test';

export class ProductDetailsPage {

    readonly page: Page;
    constructor(page: Page){
        this.page = page
    }

    async addProductToCart() {
        await this.page.locator('xpath = //*[@id="add-to-cart"]').click();
    };
    async removeProductFromCart() {
        await this.page.locator('xpath = //*[@id="remove"]').click();
    };

}