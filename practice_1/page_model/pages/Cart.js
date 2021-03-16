import { Selector } from 'testcafe'
import { ITEMNAME } from '../data/Constans'
class Cart{
    constructor(){
        this.yourCart       = Selector('.subheader')
        this.cartList       = Selector('.cart_list')
        this.cartItem       = Selector('.cart_item')
        this.checkOutButton = Selector('.checkout_button')
        this.itemName       = Selector('.inventory_item_name')
    }

    async setItemName(){
        ITEMNAME.ITEM.NAME = await Selector('.inventory_item_name').innerText;
    }
}

export default new Cart()