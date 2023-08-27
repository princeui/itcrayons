import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  contactForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.contactForm = fb.group({
      'name': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'phone': ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      'message': ['', Validators.required]  
    });
  }

  get f(){
    return this.contactForm.controls;
  }

  onSubmit():void {
    alert(this.contactForm.valid);
  }

}
