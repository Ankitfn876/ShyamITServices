import { Component, HostListener } from '@angular/core';
import { MaterialModule } from "../material.module";
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MaterialModule,NgIf,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
isMobileMenuOpen = false;
  isScrolled = false;
  toggleMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
   // Detect scroll position
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50; // add shadow after 50px scroll
  }
}
