import {Page} from '@playwright/test';

export class CheckoutConfirmationPage {

    readonly page: Page;

    constructor(page: Page){
        this.page = page
    }

    async backHomeButton() {
        await this.page.locator('xpath = //*[@id="back-to-products"]').click();
    };

    async verifyOrderSuccessMessage() {
        await this.page.locator('xpath = //*[@id="back-to-products"]', {hasText: 'Thank you for your order!'}).isVisible();
    };

}