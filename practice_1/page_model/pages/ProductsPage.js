import { Selector, t } from 'testcafe'
class ProductsPage{
    constructor(){
        this.pageTitle    = Selector('.product_label')
        this.menuButton   = Selector('#react-burger-menu-btn')
        this.logoutLink   = Selector('#logout_sidebar_link')
        this.shoppingCart = Selector('.shopping_cart_link')
        this.addToCart    = Selector('.btn_primary')
    }

    async goToCart(){
        await t.click(this.shoppingCart)
    }
}

export default new ProductsPage()