import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { SearchComponent } from './search/search.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TagsComponent } from './tags/tags.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './about-us/about-us.component';

// import { Contact-UsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    CartPageComponent,
    FoodpageComponent,
    FeedbackComponent,
    AboutUsComponent,
    // ContactUsComponent,
    ServicesComponent,
    ContactUsComponent
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxStarRatingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
