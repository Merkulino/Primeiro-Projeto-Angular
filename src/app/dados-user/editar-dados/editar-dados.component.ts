import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User, UserService } from 'src/app/shared/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-dados',
  templateUrl: './editar-dados.component.html',
  styleUrls: ['./editar-dados.component.css']
})
export class EditarDadosComponent implements OnInit {

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
      user: [null, Validators.required],
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, Validators.required],
      senha2: [null, Validators.required] 
    })
  }

  onSubmit(){

    //Get VALUE from forms 
    let userName = this.formulario.get('user')?.value
    let nome = this.formulario.get('nome')?.value
    let emailUser = this.formulario.get('email')?.value
    let senhaUser = this.formulario.get('senha')?.value
    let senha2User = this.formulario.get('senha2')?.value

    //Simple password validation
    if(senhaUser != null && senhaUser === senha2User ){

      let valueSubmit = Object.assign({}, this.formulario.value);

      this.http.post('https://httpbin.org/post', JSON.stringify(valueSubmit ))
      .subscribe(dados => {
        console.log(dados)

      //Using subject to update parent class value
      let userData: User = {
        username: userName,
        nome: nome,
        email: emailUser,
        senha: senhaUser
      }
      this.userService.sub.next(userData);

      //Updating Service data
      this.userService.user(userName);
      this.userService.setNome(nome);
      this.userService.setEmail(emailUser);
      this.userService.setSenha(senhaUser);

      //route to parent class
      this.router.navigate(['/userData']);
      })
    }else{
        alert('Senhas não coincidem');
    };
  }

  //reactive forms validation
  verify(campo:string) {
    return !this.formulario.get(campo)?.valid && !!this.formulario.get(campo)?.touched;
  }

}
