import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Foods } from 'src/app/shared/models/food';
import { Tags } from 'src/app/shared/models/tag';


@Injectable({
  providedIn: 'root'
})
export class FoodService {
  static getAll: any;
  getFoodByTag(params: Params): Foods {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  getFoodById(id:number):Foods{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag:string) :Foods[]{
    return tag == "All" ? this.getAll() : this.getAll().filter(food =>food.tags?.includes(tag));
  }


  getAllTag():Tags[]{
    return[
      { name:'All', count:14 },
      { name:'Aloo matar', count:4 },
      { name:'pizza', count:0},
      { name:'Lunch', count:10 },
      { name:'Burger', count:14 },
      { name:'Fry', count:11 },
      { name:'Burger', count:6 },
      { name:'Soup', count:1 },
      { name:'paneer', count:8 },
     
    ];
  }

  
  getAll():Foods[]{
    return[
      {
        id:1,
        name:'Aloo mater',
        cookTime:'30-40',
        price:30,
        favorite:true,
        origin:['indian'],
        star:4,
        imageUrl:'../assets//aloo matar1.png',
        tags:['FastFood','pizza','lunch'],

      },
      {
        id:2,
        name:'Burger',
        cookTime:'30-40',
        price:50,
        favorite:false,
        origin:['indian'],
        star:4,
        imageUrl:'../assets/image/burger.jpg',
        tags:['FastFood','pizza','lunch'],
      },
      {
        id:3,
        name:'Biryani',
        cookTime:'30-40',
        price:50,
        favorite:true,
        origin:['indian'],
        star:4,
        imageUrl:'../assets/image/biryani.png',
        tags:['FastFood','pizza','lunch'],
      },
      {
        id:4,
        name:'Chicken Manchurian',
        cookTime:'30-40',
        price:80,
        favorite:true,
        origin:['indian',],
        star:4,
        imageUrl:'../assets/image/chicken manchurian.png',
        tags:['FastFood','lunch'],
      },
      {
        id:5,
        name:'Nonveg Noodles',
        cookTime:'30-40',
        price:100,
        favorite:false,
        origin:['indian'],
        star:4,
        imageUrl:'../assets/image/nonveg noodles1.png',
        tags:['FastFood','pizza','lunch'],
      },
      {
        id:6,
        name:'Kurkuri Bhindi',
        cookTime:'30-40',
        price:50,
        favorite:true,
        origin:['indian'],
        star:4,
        imageUrl:'../assets/image/kurkuri bhindi.png',
        tags:['FastFood','pizza','lunch'],
      },
      {
        id:7,
        name:'Gajar Halwa',
        cookTime:'30-40',
        price:150,
        favorite:true,
        origin:['indian'],
        star:5,
        imageUrl:'../assets/image/gajar.png',
        tags:['FastFood','pizza','lunch'],
      },
      {
        id:8,
        name:'Dhokla',
        cookTime:'30-40',
        price:50,
        favorite:false,
        origin:['indian'],
        star:4,
        imageUrl:'../assets/image/dhokla.png',
        tags:['pizza','lunch'],
      },
      {
        id:9,
        name:'Noodles',
        cookTime:'30-40',
        price:50,
        favorite:false,
        origin:['indian'],
        star:5,
        imageUrl: '../assets/image/noodles.png',
        tags:['FastFood','pizza',],
      },
      {
        id:10,
        name:'Dosa',
        cookTime:'30-40',
        price:50,
        favorite:true,
        origin:['indian'],
        star:4,
        imageUrl:'../assets/image/dosa.png',
        tags:['pizza','lunch'],
      },
      {
        id:11,
        name:'Pav Bhaji',
        cookTime:'10-15',
        price:50,
        favorite:false,
        origin:['indian'],
        star:4,
        imageUrl:'../assets/image/pav.png',
        tags:['FastFood','lunch'],
      },
      {
        id:12,
        name:'Chapati',
        cookTime:'10-20',
        price:50,
        favorite:true,
        origin:['indian'],
        star:4,
        imageUrl:'../assets/image/chapati.png',
        tags:['FastFood','pizza','lunch'],
      },
      {
        id:13,
        name:'Ras-Malai',
        cookTime:'50-60',
        price:150,
        favorite:false,
        origin:['indian'],
        star:5,
        imageUrl:'../assets/image/ras-malai1.png',
        tags:['FastFood','pizza','lunch'],
      },
      {
        id:14,
        name:'Veg Manchurian',
        cookTime:'30-40',
        price:50,
        favorite:false,
        origin:['indian','US'],
        star:4,
        imageUrl:'../assets/image/veg manchurian.png',
        tags:['FastFood','pizza','lunch'],
      },
      {
        id:15,
        name:'Paneer',
        cookTime:'30-40',
        price:80,
        favorite:true,
        origin:['indian'],
        star:5,
        imageUrl:'../assets/image/paneer.png',
        tags:['FastFood','pizza','lunch'],
      },
      
      
    ];
  }
}
