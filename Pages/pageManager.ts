import {Page, expect} from '@playwright/test';
import {LoginPage} from './loginPage';
import {ProductsPage} from "./productsPage";
import {ProductDetailsPage} from "./productDetailsPage";
import {CartPage} from "./cartPage";
import {CheckoutYourInfoPage} from "./checkoutYourInfoPage";
import {CheckoutOverviewPage} from "./checkoutOverviewPage";
import {CheckoutConfirmationPage} from "./checkoutConfirmationPage";

export class PageManager {

    private readonly page: Page;
    private readonly loginPage: LoginPage;
    private readonly productsPage: ProductsPage;
    private readonly productDetailsPage: ProductDetailsPage;
    private readonly cartPage: CartPage;
    private readonly checkoutYourInfoPage: CheckoutYourInfoPage;
    private readonly checkoutOverviewPage: CheckoutOverviewPage;
    private readonly checkoutConfirmationPage: CheckoutConfirmationPage;

    constructor(page: Page){
        this.page = page
        this.loginPage = new LoginPage(this.page);
        this.productsPage = new ProductsPage(this.page);
        this.productDetailsPage = new ProductDetailsPage(this.page);
        this.cartPage = new CartPage(this.page)
        this.checkoutYourInfoPage = new CheckoutYourInfoPage(this.page);
        this.checkoutOverviewPage = new CheckoutOverviewPage(this.page);
        this.checkoutConfirmationPage = new CheckoutConfirmationPage(this.page);
    }

    onLoginPage(){
        return this.loginPage;
    }
    onProductsPage(){
        return this.productsPage;
    }
    onProductDetailsPage(){
        return this.productDetailsPage;
    }
    onCartPage(){
        return this.cartPage;
    }
    onCheckoutYourInfoPage(){
        return this.checkoutYourInfoPage;
    }
    onCheckoutOverviewPage(){
        return this.checkoutOverviewPage;
    }
    onCheckoutConfirmationPage(){
        return this.checkoutConfirmationPage;
    }

}