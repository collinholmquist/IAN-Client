import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userForm: FormGroup;

  roles: Array<string> = [
    'Student',
    'Teacher'
  ];

 // user: User = {
 //   role: '',
 //   name: '',
 //   password: ''
//};

  constructor(private formBuilder: FormBuilder) { 

    this.userForm = this.formBuilder.group({
    
    role: [''],
    name: [''],
    password: ['']


     // 'role': [this.user.role, [Validators.required]],
     // 'name': [this.user.name,[Validators.required]],
     // 'password': [this.user.password,[Validators.required]]
   });
  }

  onSubmit() {
    console.log(this.userForm.value)
  }


  ngOnInit() {
  }

}
