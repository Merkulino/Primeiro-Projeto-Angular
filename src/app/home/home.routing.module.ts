import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home.component';

const userRoutes = [
    {path: '', component: HomeComponent,
    children: [
        {path: 'child', component: ChildComponent}
    ]},
    
]

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})
export class HomeRoutingModule{}