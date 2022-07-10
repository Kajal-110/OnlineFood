import { Foods } from "./food";



// export class cartItem{
//     constructor(food:Foods){
//         this.food=food;

//     }
//     food:Foods;
//     quantity:number=1;
//     get price():number{
//         return this.food.price * this.quantity;
//     }
// }

//import { Foods } from "./food";

export class cartitem{
    constructor(food:Foods){
                this.food=food;
             }
             food:Foods;
             quantity:number=1;
             get price():number{
                 return this.food.price * this.quantity;
             }
}
