import { User } from 'src/app/shared/user.service';
import { Component, OnInit} from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-dados-user',
  templateUrl: './dados-user.component.html',
  styleUrls: ['./dados-user.component.css']
})
export class DadosUserComponent implements OnInit {

   username: string = ' !No Username data ';
   nomeUser: string = '!No Name data';
   senha: string = '**************';
   email: string = '!No Email data';

   senhaRevelada: boolean =  false;
   verSenhaTxt: string = "Ver Senha";

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    //Get userData from Service
    this.username = this.userService.getUsername();
    this.nomeUser = this.userService.getNome();
    this.email = this.userService.getEmail();

    //Data from child route (editar-dados)
    //Update value getting data from Subject
    this.userService.sub.subscribe(
      (dados:User) => {
        this.username = dados.username,
        this.nomeUser = dados.nome,
        this.email = dados.email
      }
    )
  }

  verSenha(){
    
    if(!this.senhaRevelada){
      this.senha = this.userService.getSenha();
      this.senhaRevelada = true;
      this.verSenhaTxt = "Esconder Senha";
    }else{
      this.senha = "**************";
      this.senhaRevelada = false;
      this.verSenhaTxt = "Ver Senha";
    }
  }

}
