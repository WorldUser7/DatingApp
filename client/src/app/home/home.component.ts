import { Component, inject, OnInit } from '@angular/core';
import { RegisterComponent } from "../register/register.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  http = inject(HttpClient);
  registerMode = false;
  users: any;

  ngOnInit(): void{
    this.getUsers();
  }

  registerToggle(){
    this.registerMode = !this.registerMode
  }

  cancelRegisterMode(event: boolean){
    this.registerMode = event;
  }

  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe({ // 999999% of the time it always complets so we dont need to unsubscribe after the subscribe, but in general its correct way in order to not consume the memory of the user
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Request Has Completed')
    })
  }
}
