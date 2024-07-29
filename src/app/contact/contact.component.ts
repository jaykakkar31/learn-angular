import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor() { }

  contactForm = new FormGroup({
    senderName: new FormControl('',Validators.required),
    senderEmail: new FormControl('',Validators.required),
    senderMessage: new FormControl('',Validators.required)
  })
  // senderNameControl = new FormControl('')
  // senderEmailControl = new FormControl('')
  // senderMessageControl = new FormControl('')
  submitForm() {
    // if (this.senderEmailControl.dirty) {
      console.log("CALWELD----------",this.contactForm.value);

    //   alert("Email field is changed")
    // }
  }
}
