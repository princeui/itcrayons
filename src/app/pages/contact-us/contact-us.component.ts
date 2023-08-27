import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { LoaderService } from 'src/app/services/loader.service';
import { EmailService } from '../../services/email.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  contactForm: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder, private emailservice: EmailService, private loaderservice: LoaderService) { 
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
    //alert(this.contactForm.valid);
    this.loaderservice.isLoading.next(true);
    this.emailservice.sendMessage(this.contactForm.value).subscribe(
      data => {
        console.log(data);
        this.loaderservice.isLoading.next(false);
      },
      err => {
        console.log(err); 
        this.loaderservice.isLoading.next(false);
      }
    );
  }
}
