import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { Foods } from '../shared/models/food';
import { cartitem } from 'src/app/shared/models/cartitem';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart =new Cart();

  addToCart(food:Foods) :void{
    let cartitem1= this.cart.items.find(item => item.food.id === food.id);
    if(cartitem1){
      this.changeQuantity(food.id,cartitem1.quantity +1);
      return;
    }
  this.cart.items.push(new cartitem(food));
  }

  removeFromCart(foodId:number):void{
    this.cart.items = this.cart.items.filter(item =>item.food.id !=foodId);
  }

  changeQuantity(quantity:number,foodId:number){
    let cartitem = this.cart.items.find(item =>item.food.id === foodId);
    if(!cartitem) return;
    cartitem.quantity = quantity;
    }
  getCart():Cart{
     return this.cart;
  }

  constructor() { }
}