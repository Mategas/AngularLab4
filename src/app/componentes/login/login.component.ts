import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  private usuario : string = '';
  private pass : string = '';

  public Entrar = function(){
    console.log(this.usuario + ', ' + this.pass);
  }

  ngOnInit() {

    
  }

}
