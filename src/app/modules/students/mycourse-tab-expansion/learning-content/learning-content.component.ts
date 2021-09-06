import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-learning-content',
  templateUrl: './learning-content.component.html',
  styleUrls: ['./learning-content.component.scss']
})
export class LearningContentComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }
  panelData = [];
  step = 0;


  ngOnInit(): void {
    this.panelData = [
      {
        id: 0,
        source: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/xGpHfFf18Ns"),
        title: "Angular Tutorial",
        description: "Angular Full Course in 5 Hours"
      },
      {
        id: 1,
        source: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/35EQXmHKZYs"),
        title: "Spring boot Tutorial",
        description: "Spring boot Course in 3 Hours"
      }
    ];
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }


  
}
