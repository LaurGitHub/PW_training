import {Locator, Page} from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;

    constructor(page: Page){
        this.page = page
        this.usernameField = page.getByPlaceholder('Username');
        this.passwordField = page.getByRole('textbox', {name: 'password'});
        this.loginButton = page.locator('xpath = /html/body/div/div/div[2]/div[1]/div/div/form/input');
    }

    async performLogin() {
        await this.usernameField.fill('standard_user');
        await this.passwordField.fill('secret_sauce');
        await this.loginButton.click();
    };

}