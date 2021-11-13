import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users!:FormGroup;
  hide=true;
    formErors:any;
      form: any = {
       
          username: null,
          password: null
      };
      isSuccessful = false;
      isSignUpFailed = false;
      errorMessage = '';
      submitted = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
onSubmit(){
  this.router.navigate(['login']);
  
}
}
