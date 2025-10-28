import { Component } from '@angular/core';
import { MatCard } from "@angular/material/card";
import { MatIcon } from "@angular/material/icon";
import { MaterialModule } from '../../share/material.module';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-services',
  imports: [MatCard, MatIcon,NgFor],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
services = [
    {
      icon: 'language',
      title: 'Web Development',
      description:
        'Modern, responsive, and SEO-optimized websites crafted using Angular, .NET, and cloud technologies.'
    },
    {
      icon: 'smartphone',
      title: 'Mobile App Development',
      description:
        'Cross-platform apps with pixel-perfect UI and robust backend integration for iOS and Android.'
    },
    {
      icon: 'cloud',
      title: 'Cloud & DevOps',
      description:
        'End-to-end cloud deployment, CI/CD pipelines, and scalable infrastructures for enterprises.'
    },
    {
      icon: 'security',
      title: 'Cybersecurity Solutions',
      description:
        'Secure your business with advanced encryption, risk assessment, and real-time threat monitoring.'
    },
    {
      icon: 'brush',
      title: 'UI/UX Design',
      description:
        'Create beautiful and intuitive designs with human-centered approaches and stunning visuals.'
    },
    {
      icon: 'auto_awesome',
      title: 'AI & Automation',
      description:
        'Leverage AI-driven automation tools to enhance efficiency, analytics, and decision-making.'
    }
  ];
}
