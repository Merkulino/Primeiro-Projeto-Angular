import { User } from 'src/app/shared/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {

    //getting data from html 
    this.formulario = this.formBuilder.group({
      user : [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, Validators.required]

    })

  }

  onSubmit(){
    
    let valueSubmit = Object.assign({}, this.formulario.value);
    
    this.http.post('https://httpbin.org/post', JSON.stringify(valueSubmit ))
    .subscribe(dados => {
      console.log(dados)
      
      //Get VALUE from forms
      let userName = this.formulario.get('user')?.value;
      let emailUser =this.formulario.get('email')?.value;
      let senhaUser = this.formulario.get('senha')?.value;

      //Add data on subject in UserService
      let userData: User = {
        username: userName,
        nome: 'ADD NAME',
        email: emailUser,
        senha: senhaUser
      }
      this.userService.sub.next(userData);

      //Updating Service data
      this.userService.user(userName);
      this.userService.setEmail(emailUser);
      this.userService.setSenha(senhaUser);

      //home route
      this.router.navigate(['/']);
    });

  }
  
  //reactive forms validation
  verify(campo:string) {
    return !this.formulario.get(campo)?.valid && !!this.formulario.get(campo)?.touched;
  }


}
