import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { UserI } from '../../../shared/models/user.interface';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isdisable:boolean
  login1Form: FormGroup;

  constructor(private authSvc: AuthService, private route: Router,private fb: FormBuilder,private toastr: ToastrService) {}

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  

  ngOnInit() {
    this.login1Form = this.fb.group({
      password: ["", Validators.required],
      email: ["",Validators.required]
    });
    this.isdisable=false
  }

  
  onLogin(form: UserI) {
    this.authSvc
      .loginByEmail(form)
      .then(res => {
        console.log('Successfully', res);
        this.route.navigate(['/']);
      })
      .catch(err => {console.log('Error', err)
      this.toastr.error('sorry theres a problem. please try again!');});
      
  }
}