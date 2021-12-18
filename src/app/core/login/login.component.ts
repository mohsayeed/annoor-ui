import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/features/dashboard/dashboard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private dashboardService:DashboardService) { }

  ngOnInit(): void {
    this.dashboardService
    .test()
    ?.subscribe((result: any) => {
      console.log(result)
    });

const signUpButton :any= document.getElementById('signUp');
const signInButton:any = document.getElementById('signIn');
const container:any = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

  }
 

}
