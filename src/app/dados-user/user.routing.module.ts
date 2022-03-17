import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { DadosUserComponent } from './dados-user.component';
import { EditarDadosComponent } from './editar-dados/editar-dados.component';

const userRoutes = [
    {path: '', component: DadosUserComponent,
    children: [
        {path: 'edit', component: EditarDadosComponent}
    ]},
    
]

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})
export class UserRoutingModule{}