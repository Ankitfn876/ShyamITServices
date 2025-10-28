import { Component, ElementRef } from '@angular/core';
import { MaterialModule } from "../../share/material.module";
import { MatCardContent } from "@angular/material/card";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MaterialModule, MatCardContent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 constructor(private el: ElementRef) {}
  ngAfterViewInit() {
    const sections = this.el.nativeElement.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section: HTMLElement) => observer.observe(section));
  }
}
