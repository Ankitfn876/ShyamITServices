import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatCard } from "@angular/material/card";

@Component({
  selector: 'app-portfolio',
  imports: [MatCard, NgFor],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  projects = [
    {
      title: 'Smart Attendance Solutions',
      description: 'An Attendance Management System is a digital solution designed to streamline and automate the process of tracking employee attendance.',
      image: 'https://ankitfn876.github.io/ADMSUI/assets/images/home/Atn_2.png',
      link: 'https://ankitfn876.github.io/ADMSUI/'
    },
    {
      title: 'Mobile App',
      description: 'Employees can log their attendance by checking in and out using their mobile devices.',
      image: 'https://ankitfn876.github.io/ADMSUI/assets/images/banner/03_chat/phone_1.png'
    },
    {
      title: 'ABS School',
      description: 'At ABS School, our vision is to create a nurturing and inspiring learning environment where every child discovers their true potential.',
      image: 'https://ankitfn876.github.io/AbsSchool/assets/images/AbsSchool.png',
      link: 'https://ankitfn876.github.io/AbsSchool/home'
    }// },
    // {
    //   title: 'Cloud Analytics Portal',
    //   description: 'A modern data visualization dashboard for enterprises.',
    //   image: 'https://ankitfn876.github.io/ADMSUI/assets/images/banner/03_chat/phone_1.png'
    // }
  ];
}
