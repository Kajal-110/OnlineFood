import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { Cart } from '../shared/models/cart';
import { cartitem } from '../shared/models/cartitem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  Cart!:Cart;
  constructor(private cartService: CartService) {
    this.setCart();
   }

  ngOnInit(): void {
  }
  setCart(){
    this.Cart=this.cartService.getCart();
  }
  removeFromCart(cartitem:cartitem){
    this.cartService.removeFromCart(cartitem.food.id);
    this.setCart();
  }
  changeQuantity(cartitem:cartitem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartitem.food.id,quantity);
    this.setCart();
  }

}
