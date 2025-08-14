import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Bottom } from "./bottom/bottom";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Bottom, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'startFramework';
}
