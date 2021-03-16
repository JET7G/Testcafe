import { Selector, t } from 'testcafe'
class Checkout_step_onePage{
    constructor(){
        this.firstnameFild  = Selector('#first-name')
        this.lastnameFild   = Selector('#last-name')
        this.zipcodeFild    = Selector('#postal-code')
        this.continueButton = Selector('.cart_button')
        this.errorMessage   = Selector('.error-button')
    }

    async fillUserInformation_1(firsname, lastname){
        await t.typeText(this.firstnameFild, firsname, {paste:true})
               .typeText(this.lastnameFild, lastname, {paste:true})
               .click(this.continueButton)
    }

    async fillUserInformationComplete(firsname, lastname, zipcode){
        await t.typeText(this.firstnameFild, firsname, {paste:true})
               .typeText(this.lastnameFild, lastname, {paste:true})
               .typeText(this.zipcodeFild, zipcode, {paste:true})
               .click(this.continueButton)
    }

}

export default new Checkout_step_onePage()