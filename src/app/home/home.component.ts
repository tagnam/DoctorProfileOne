import { Component } from '@angular/core';
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    // NgModule,
    // BrowserModule,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  bannerImg01="assets/images/banneriamage_2.jpg";
  bannerImg02="assets/images/bannerImage_1.jpg";
  bannerHeading='Healthcare for Your Family’s Health';
  bannerText='Emergency service with international standard'

ServiceData: any[] =[
  
  { ServiceImg:"assets/images/service_1.jpg", ServiceHeading:"Dental Service", ServiceText:"Get quality medicines that are officially certified for you."},
  { ServiceImg:"assets/images/service_2.jpg", ServiceHeading:"Primary Care", ServiceText:"Get quality medicines that are officially certified for you."},
  { ServiceImg:"assets/images/service_3.jpg", ServiceHeading:"Vaccination", ServiceText:"Get quality medicines that are officially certified for you."},
  { ServiceImg:"", ServiceHeading:"Emergency Service", ServiceText:"Call our accident & emergency department to get the fastest & closest first aid you need."}

]

TrustHeading="Medical Clinic that you can trust"
TrustText="Getting an accurate diagnosis can be one of the most impactful experiences that you can have — especially if you’ve been in search of that answer for a while. We can help you get there."

TrustList:any[]=[
  {TrustHeading:"24 Hour Healthcare Services",TrustText:"We are committed to your health and well-being, offering the very latest in comprehensive evidence-based care."},
  {TrustHeading:"International Standards",TrustText:"We are committed to your health and well-being, offering the very latest in comprehensive evidence-based care."},
  {TrustHeading:"Center of Excellence",TrustText:"Center of Excellence We are committed to your health and well-being, offering the very latest in comprehensive evidence-based care."}
]

CounterContent:any[]=[
{ CounterIcon:"bi bi-hand-thumbs-up", CounterNum:"20+", CounterText:"Years Of Experience"},
{ CounterIcon:"bi bi-hand-thumbs-up", CounterNum:"8,450 +", CounterText:"Happy Patients"},
{ CounterIcon:"bi bi-hand-thumbs-up", CounterNum:" 1,250 +", CounterText:"Doctors and Staff"},
{ CounterIcon:"bi bi-hand-thumbs-up", CounterNum:"425 +", CounterText:"Hospital Rooms"}
]



ServiceMainHeading="We Provide Best Healthcare Services "
ServiceMainText="Getting an accurate diagnosis can be one of the most impactful experiences that you can have."

ServiceSection:any[]=[
      {ServiceTitel:"24 Hour Healthcare Services", ServiceText:"We are committed to your health and well-being, offering the very latest in comprehensive evidence-based care"},
      {ServiceTitel:"24 Hour Healthcare Services", ServiceText:"We are committed to your health and well-being, offering the very latest in comprehensive evidence-based care"},
      {ServiceTitel:"24 Hour Healthcare Services", ServiceText:"We are committed to your health and well-being, offering the very latest in comprehensive evidence-based care"},
      {ServiceTitel:"24 Hour Healthcare Services", ServiceText:"We are committed to your health and well-being, offering the very latest in comprehensive evidence-based care"}
]


AccordionMainHeading="Find the right Medication for you"
AccordionText="Getting an accurate diagnosis can be one of the most impactful experiences that you can have. We can help you get there."


// AccordionData:any[]=[
//     {accordionTitel:"We Have The Medical Specialists", accordionText:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."},
//     {accordionTitel:"We Have The Medical Specialists", accordionText:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."},
//     {accordionTitel:"We Have The Medical Specialists", accordionText:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."},

// ]



ApointMainHeading="Make Appointment"
ApointText="Getting an accurate diagnosis can be one of the most impactful experiences that you can have — especially if you’ve been in search of that answer for a while. We can help you get there"

client:any[]=[
  {image:"assets/images/logo1.png"},
  {image:"assets/images/logo2.png"},
  {image:"assets/images/logo3.png"},
  {image:"assets/images/logo4.png"},
]
TrustLeftImg="assets/images/femail01.png"
TrustRightImg="assets/images/femail02.png"





}
