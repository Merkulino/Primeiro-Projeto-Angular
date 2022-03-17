import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  childComp: boolean = false;

  constructor(private router: Router) { }

  openComponent(){

    if(!this.childComp){
      this.childComp = true;
      this.router.navigate(['/child']);
    }else{
      this.childComp = false;
      this.router.navigate(['/']);
    }
  }

}
