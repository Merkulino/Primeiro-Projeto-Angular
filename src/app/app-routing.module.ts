import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [ 
    {path: '', loadChildren:() => import('./home/home.module').then(m => m.HomeModule)},
    {path: 'login', component: LoginComponent},
    {path: 'userData', loadChildren:() => import('./dados-user/user/user.module').then(m => m.UserModule)},
    {path: '**', component: NotFoundPageComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
