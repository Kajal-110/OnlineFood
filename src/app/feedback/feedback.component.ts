import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FeedbackService } from '../feedback.service';
import { IFeedback } from '../ifeedback';

@Inject(FeedbackService)
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  submitted = false;
  FeedbackService: any;

  customerName:FormControl = new FormControl();
  customerComment:FormControl=new FormControl("");
  customerEmail:FormControl=new FormControl("");

  constructor(private feedbackServices:FeedbackService) { }

  ngOnInit(): void {

  }

   
  saveData(){
    let customer: IFeedback={
      id: 0,
      name: this.customerName.value,
      comment: this.customerComment.value,
      email: this.customerEmail.value
      
    };
    console.log(customer);
    this.feedbackServices.addCustomer(customer);
    alert("Customer added succesfully");
    
  }
  
}
