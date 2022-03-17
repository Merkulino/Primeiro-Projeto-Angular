import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface User {
  nome: string
  username: string 
  senha: string 
  email: string 
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userEmitter = new EventEmitter<string>();
  mailEmiter  = new EventEmitter<string>();
  senhaEmitter= new EventEmitter<string>();
  nomeEmitter = new EventEmitter<string>();

  sub = new Subject<User>();

  nome: string = '';
  username: string = "Username";
  senha: string = 'SENHA';
  email: string = '';

  constructor() { }

  //Getters and Setters
  getUsername(){
    return this.username;
  };
  
  user(nome: string){
      this.username = nome;
  };

  getNome(){
    return this.nome;
  };

  setNome(userNome:string){
    this.nome = userNome;
  };

  getSenha(){
    return this.senha;
  };
  
  setSenha(senhaUser: string){
      this.senha = senhaUser;
  };

  getEmail(){
    return this.email;
  };
  
  setEmail(emailUser: string){
      this.email = emailUser;
  };
}

  
