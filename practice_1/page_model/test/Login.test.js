import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import Cart from '../pages/Cart'
import Checkout_step_onePage from '../pages/Ckeckout_step_onePage'
import Checkout_step_twoPage from '../pages/Checkout_step_twoPage'
import Checkout_completePage from '../pages/Checkout_completePage'
import { CREDENTIALS, USERINFORMATION, ITEMNAME } from '../data/Constans'

fixture('Front End Automation Testing')
    .page `https://www.saucedemo.com/`

/* 1 */
test('1- User can login usin valid credentials', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)

    await t.expect(ProductsPage.pageTitle.exists).ok()
})

/* 2 */
test('2- User can not login usin invalid credentials', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)

    await t.expect(LoginPage.errorMessage.exists).ok()
})

/* 3 */
test('3- Logout from product´s page', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.click(ProductsPage.menuButton)
        .click(ProductsPage.logoutLink)

    await t.expect(LoginPage.loginLogo.exists).ok()
})

/* 4 */
test('4- Navigate to the shopping cart', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await ProductsPage.goToCart()

    await t.expect(Cart.yourCart.exists).ok()
})

/* 5 */
test('5- Add a single item to the shopping cart', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.click(ProductsPage.addToCart)
    await ProductsPage.goToCart()

    await t.expect(Cart.cartList.exists).ok()
})

/* 6 */
test('6- Add a multiple items to the shopping cart', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.click(ProductsPage.addToCart)
        .click(ProductsPage.addToCart)
    await ProductsPage.goToCart()

    await t.expect(Cart.cartList.exists).ok()
        .expect(Cart.cartItem.exists).ok()
        .expect(Cart.cartItem.exists).ok()
})

/* 7 */
test('7- Continue with missing mail information', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await ProductsPage.goToCart()
    await t.click(Cart.checkOutButton)
    await Checkout_step_onePage.fillUserInformation_1(USERINFORMATION.USER.FIRSNAME, USERINFORMATION.USER.LASTNAME)

    await t.expect(Checkout_step_onePage.errorMessage.exists).ok()
})

/* 8 */
test('8- Fill user´s information', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await ProductsPage.goToCart()
    await t.click(Cart.checkOutButton)
    await Checkout_step_onePage.fillUserInformationComplete(USERINFORMATION.USER.FIRSNAME, USERINFORMATION.USER.LASTNAME, USERINFORMATION.USER.ZIPCODE)

    await t.expect(Checkout_step_twoPage.subheaderTitle.innerText).eql('Checkout: Overview')
})

/* 9 */
test('9- Final order items', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.click(ProductsPage.addToCart)
    await ProductsPage.goToCart()
    await Cart.setItemName()
    await t.click(Cart.checkOutButton)
    await Checkout_step_onePage.fillUserInformationComplete(USERINFORMATION.USER.FIRSNAME, USERINFORMATION.USER.LASTNAME, USERINFORMATION.USER.ZIPCODE)

    await t.expect(Checkout_step_twoPage.nameItem.innerText).eql(ITEMNAME.ITEM.NAME)
})

/* 10 */
test('10- Complete a purchase', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.click(ProductsPage.addToCart)
        .click(ProductsPage.addToCart)
    await ProductsPage.goToCart()
    await Cart.setItemName()
    await t.click(Cart.checkOutButton)
    await Checkout_step_onePage.fillUserInformationComplete(USERINFORMATION.USER.FIRSNAME, USERINFORMATION.USER.LASTNAME, USERINFORMATION.USER.ZIPCODE)
    await t.click(Checkout_step_twoPage.finishButton)

    await t.expect(Checkout_completePage.subheaderTitle.innerText).eql('Finish')
})