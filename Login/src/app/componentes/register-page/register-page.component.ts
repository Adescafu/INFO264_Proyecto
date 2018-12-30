import { Component, OnInit } from '@angular/core';

import{ AuthService } from '../../servicios/auth.service';
 
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

  onSubmitAddUsser(){
    this.authService.registrarusuarior(this.email, this.password)
    .then((res)=>{
      console.log('Good bien !!');
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    });


  }

}
