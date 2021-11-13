import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/model/User';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users!:FormGroup;
  hide=true;
  user!: User;
    formErors:any;
      form: any = {
       
          username: null,
          password: null
      };
      isSuccessful = false;
      isSignUpFailed = false;
      errorMessage = '';
      submitted = false;
  constructor(private router:Router, private userService: UserService) { }

  ngOnInit(): void {
  }
onSubmit(){
  const {username, password} = this.form;
  this.user = {
    UserName: this.form.username,
    Password: this.form.password
  }
  this.userService.CreateUser(this.user).subscribe((data) => {
    console.log(data);
  });
  this.router.navigate(['login']);
}
}
