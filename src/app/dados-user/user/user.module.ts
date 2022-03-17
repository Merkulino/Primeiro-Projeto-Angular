import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DadosUserComponent } from '../dados-user.component';
import { EditarDadosComponent } from '../editar-dados/editar-dados.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from '../user.routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    DadosUserComponent,
    EditarDadosComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    
  ]
})
export class UserModule { }
