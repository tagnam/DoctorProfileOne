import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  bannerImg01="assets/images/banneriamage_2.jpg";
  bannerImg02="assets/images/bannerImage_1.jpg";
  bannerHeading='Healthcare for Your Family’s Health';
  bannerText='Emergency service with international standard'


ServiceData:any =[
  
  { ServiceImg:"assets/images/service_1.jpg", ServiceHeading:"Dental Service", ServiceText:"Get quality medicines that are officially certified for you."},
  { ServiceImg:"assets/images/service_2.jpg", ServiceHeading:"Primary Care", ServiceText:"Get quality medicines that are officially certified for you."},
  { ServiceImg:"assets/images/service_3.jpg", ServiceHeading:"Vaccination", ServiceText:"Get quality medicines that are officially certified for you."},
  { ServiceImg:"", ServiceHeading:"Emergency Service", ServiceText:"Call our accident & emergency department to get the fastest & closest first aid you need."}

]







}
