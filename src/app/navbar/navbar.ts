import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  isTop: boolean = true;
  @HostListener('window:scroll', [])
  onwindowScroll() {
    if( window.scrollY <= 0)
      this.isTop = true
    else
      this.isTop = false;
  }
}
