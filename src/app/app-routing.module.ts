import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  { path:'',component:HomeComponent},
  { path:'search/:searchItem',component:HomeComponent},
  { path :'tag/:tags',component:HomeComponent},
  { path :'food/:id',component:FoodpageComponent},
  { path :'cart-page',component:CartPageComponent},
  { path: 'feedback',component:FeedbackComponent},
  { path:'add-feedback',component:FeedbackComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path:'contact-us',component:ContactUsComponent},
  { path:'services',component:ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
