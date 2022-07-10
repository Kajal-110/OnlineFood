import { Injectable } from '@angular/core';
import { IFeedback } from './ifeedback';
import { HttpClient} from '@angular/common/http'
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {


  constructor(private httpclient:HttpClient) { }

  // addFeedback(data:IFeedback){
  //   this.HttpClient.post("https://localhost:44318/api/FEEDBACKS",data,
  //   {
  //     Headers:{"Access-Control-Allow-Origin":"*"}
    
  //  }
  addCustomer(data :IFeedback )
  {
    this.httpclient.post<IFeedback>("https://localhost:44318/api/FEEDBACKS",data,{
      headers : {
        "Access-Control-Allow-Origin" : "*"
       
      }
     
    }).subscribe(data=>{console.log("Done")});
   
   
}
 
 

}
