import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpService } from '@core/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent implements OnInit {
  title = 'frontend';
  private http = inject(HttpService);
  ngOnInit(): void {
    this.http.get('/hui').subscribe((v) => v);
  }
}
