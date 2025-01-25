import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule, NgFor} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  http = inject(HttpClient);
  title = 'DatingApp';
  users: any;

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/users').subscribe({ // 999999% of the time it always complets so we dont need to unsubscribe after the subscribe, but in general its correct way in order to not consume the memory of the user
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Request Has Completed')
    })
  }
}
