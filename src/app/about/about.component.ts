import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  CounterContent:any[]=[
    { CounterIcon:"bi bi-hand-thumbs-up", CounterNum:"20+", CounterText:"Years Of Experience"},
    { CounterIcon:"bi bi-hand-thumbs-up", CounterNum:"8,450 +", CounterText:"Happy Patients"},
    { CounterIcon:"bi bi-hand-thumbs-up", CounterNum:" 1,250 +", CounterText:"Doctors and Staff"},
    { CounterIcon:"bi bi-hand-thumbs-up", CounterNum:"425 +", CounterText:"Hospital Rooms"}
    ]


    
TrustHeading="Medical Clinic that you can trust"
TrustText="Getting an accurate diagnosis can be one of the most impactful experiences that you can have — especially if you’ve been in search of that answer for a while. We can help you get there."

TrustLeftImg="assets/images/Mail.png"

TrustList:any[]=[
  {TrustHeading:"24 Hour Healthcare Services",TrustText:"We are committed to your health and well-being, offering the very latest in comprehensive evidence-based care."},
  {TrustHeading:"International Standards",TrustText:"We are committed to your health and well-being, offering the very latest in comprehensive evidence-based care."},
  {TrustHeading:"Center of Excellence",TrustText:"Center of Excellence We are committed to your health and well-being, offering the very latest in comprehensive evidence-based care."}
]

  blogHeading="We Take Care Your Health Seriously"
  blogText="Getting an accurate diagnosis can be one of the most impactful experiences that you can have."

blogCard:any[]=[

{image:"assets/images/Medics-1.png", title:'Emergency Treatment', text:'24-hour medical center also doctor service available on calls. Emergency Treatment for everyone.'},
{image:"assets/images/Medics-2.png", title:'International Standards', text:'We are committed to serve best service with well experienced doctor. Get health services with the best facilities.'},
{image:"assets/images/Medics-3.jpg", title:'Best Medical Specialties', text:'Our medical doctors are ready to treat your acute and chronic illnesses. Providing qualified primary medical care.'}

]





}
