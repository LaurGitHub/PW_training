import {Page} from '@playwright/test';
import {CartPage} from "./cartPage";

export class ProductsPage {

    readonly page: Page;
    constructor(page: Page){
        this.page = page
    }

    async performLogin() {
        await this.page.getByPlaceholder('Username').fill('standard_user');
        await this.page.getByRole('textbox', {name: 'password'}).fill('secret_sauce');
        await this.page.locator('xpath = /html/body/div/div/div[2]/div[1]/div/div/form/input').click();
    };

    async addProduct() {
        await this.page.getByPlaceholder('Sauce Labs Bolt T-Shirt').fill('Test Product');
    };

    async navigateToCartPage() {
        await this.page.locator('xpath = //*[@id="shopping_cart_container"]/a').click();
        // return const cartPage = new CartPage(page);
    };

}