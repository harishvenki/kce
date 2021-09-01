import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  carouselData: any;
  ngOnInit(): void {
    this.carouselData = {
      heading: "Contests and Events",
      slides: [
        {
          image: "assets/images/desktop.jpg",
          text1: "Digital innovation hackathon",
          text2: "From 01 August 2021 - 11.55 PM",
          text3: "To 05 September 2021 - 11.55 PM",
          buttonText: "View More",
          buttonLink: "dummy data" 
        },
        {
          image: "assets/images/desktop.jpg",
          text1: "Digital innovation hackathon",
          text2: "From 01 August 2021 - 11.55 PM",
          text3: "To 05 September 2021 - 11.55 PM",
          buttonText: "View More",
          buttonLink: "dummy data" 
        },
        {
          image: "assets/images/desktop.jpg",
          text1: "Digital innovation hackathon",
          text2: "From 01 August 2021 - 11.55 PM",
          text3: "To 05 September 2021 - 11.55 PM",
          buttonText: "View More",
          buttonLink: "dummy data" 
        }
      ]
    };
  }

}
