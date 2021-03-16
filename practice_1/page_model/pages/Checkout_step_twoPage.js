import { Selector } from 'testcafe'
class Checkout_step_twoPage{
    constructor(){
        this.subheaderTitle = Selector('.subheader')
        this.finishButton   = Selector('.cart_button')
        this.nameItem       = Selector('.inventory_item_name')
    }
}

export default new Checkout_step_twoPage()