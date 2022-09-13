import { Component, OnInit } from '@angular/core';
import {ApiService} from "../providers/api.service";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formUsuario = this.formBuilder.group({
    username:['', Validators.required],
    password:['', Validators.required]
  });

  constructor(
    private apiService:ApiService,
    private formBuilder:FormBuilder,
    private router:Router,
    private api:ApiService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.apiService.login(this.formUsuario.value)
      .subscribe(data => {
        if(data != undefined){
          console.log(data)
          this.api.crear_header_token(data.token);
          this.router.navigate(['/inicio'])
        }
        else
          this.router.navigate(['/login'])
        }
      )
  }
}
