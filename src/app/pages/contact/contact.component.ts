import { Component } from '@angular/core';
import { MatCard } from "@angular/material/card";
import { MaterialModule } from "../../share/material.module";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  imports: [MatCard, MaterialModule,MatFormFieldModule,MatInputModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
 contact = {
    name: '',
    email: '',
    message: ''
  };
  emailid='sandeepvishwakarma321994@gmail.com';
  mobile='99195976603';
constructor(){}
ValidateEmail(email: string): boolean {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
  }
  onSubmit() {
   if(this.contact.name=='')
   {
    Swal.fire({
      title: 'warning!',
      text: 'Enter Full Name.',
      icon: 'warning',
      confirmButtonText: 'Ok'
    });
    return;
   }
   if(this.contact.email=='')
   {
    Swal.fire({
      title: 'warning!',
      text: 'Enter Email Id.',
      icon: 'warning',
      confirmButtonText: 'Ok'
    });
    return;
   }
   if(!this.ValidateEmail(this.contact.email))
   {
    Swal.fire({
      title: 'warning!',
      text: 'Enter valid Email Id.',
      icon: 'warning',
      confirmButtonText: 'Ok'
    });
    return;
   }
    Swal.fire({
      title: 'success!',
      text: 'Thank you for contacting Shyam IT Services! We will get back to you soon.',
      icon: 'success',
      confirmButtonText: 'Ok'
    });
    this.contact.name='';
    this.contact.email='';

  }
}
