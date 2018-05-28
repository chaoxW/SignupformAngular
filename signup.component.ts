import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsernameaValidators } from './username.validator';


@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  form = new FormGroup({
    username: new FormControl('',
    [Validators.required,
    Validators.minLength(3),
    UsernameaValidators.cannotContainSpace]),
    
    password: new FormControl('',Validators.required)
  })

  get username(){
    return this.form.get('username');
  }

  get password(){
    return this.form.get('password');
  }

}
