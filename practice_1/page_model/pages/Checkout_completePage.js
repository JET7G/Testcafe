import { Selector } from 'testcafe'
class Checkout_completePage{
    constructor(){
        this.subheaderTitle = Selector('.subheader')
    }
}

export default new Checkout_completePage()