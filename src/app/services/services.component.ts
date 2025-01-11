import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  ServiceMainHeading="We Provide Best Healthcare Services "
  ServiceMainText="Getting an accurate diagnosis can be one of the most impactful experiences that you can have."
  
  ServiceSection:any[]=[
        {ServiceTitel:"24 Hour Healthcare Services", ServiceText:"We are committed to your health and well-being, offering the very latest in comprehensive evidence-based care"},
        {ServiceTitel:"24 Hour Healthcare Services", ServiceText:"We are committed to your health and well-being, offering the very latest in comprehensive evidence-based care"},
        {ServiceTitel:"24 Hour Healthcare Services", ServiceText:"We are committed to your health and well-being, offering the very latest in comprehensive evidence-based care"},
        {ServiceTitel:"24 Hour Healthcare Services", ServiceText:"We are committed to your health and well-being, offering the very latest in comprehensive evidence-based care"},
        {ServiceTitel:"24 Hour Healthcare Services", ServiceText:"We are committed to your health and well-being, offering the very latest in comprehensive evidence-based care"},
        {ServiceTitel:"24 Hour Healthcare Services", ServiceText:"We are committed to your health and well-being, offering the very latest in comprehensive evidence-based care"}
  ]


  client:any[]=[
    {image:"assets/images/logo1.png"},
    {image:"assets/images/logo2.png"},
    {image:"assets/images/logo3.png"},
    {image:"assets/images/logo4.png"},
  ]


  Leftimage="assets/images/femail01.png"

}
