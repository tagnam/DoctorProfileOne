import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css'
})
export class DoctorComponent {
  title="Our Specialist Doctors"
  text="Getting an accurate diagnosis can be one of the most impactful experiences that you can have."


doctorCard:any[]=[
  {
    image:"assets/images/Doctor1.png",
    title:"Dr. Steven Curl",
    text:"We are committed to your health and well-being, offering the very latest in comprehensive evidence-based care.",
    department:"General Doctor"
  },
  {
    image:"assets/images/Doctor2.png",
    title:"Dr. Steven Curl",
    text:"We are committed to your health and well-being, offering the very latest in comprehensive evidence-based care.",
    department:"General Doctor"
  },
  {
    image:"assets/images/Doctor3.png",
    title:"Dr. Steven Curl",
    text:"We are committed to your health and well-being, offering the very latest in comprehensive evidence-based care.",
    department:"General Doctor"
  },
  {
    image:"assets/images/Doctor4.png",
    title:"Dr. Steven Curl",
    text:"We are committed to your health and well-being, offering the very latest in comprehensive evidence-based care.",
    department:"General Doctor"
  },
  {
    image:"assets/images/Doctor5.png",
    title:"Dr. Steven Curl",
    text:"We are committed to your health and well-being, offering the very latest in comprehensive evidence-based care.",
    department:"General Doctor"
  },
  {
    image:"assets/images/Doctor6.png",
    title:"Dr. Steven Curl",
    text:"We are committed to your health and well-being, offering the very latest in comprehensive evidence-based care.",
    department:"General Doctor"
  }


]


client:any[]=[
  {image:"assets/images/logo1.png"},
  {image:"assets/images/logo2.png"},
  {image:"assets/images/logo3.png"},
  {image:"assets/images/logo4.png"},
]

}
