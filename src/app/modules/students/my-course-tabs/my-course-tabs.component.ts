import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my-course-tabs',
  templateUrl: './my-course-tabs.component.html',
  styleUrls: ['./my-course-tabs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MyCourseTabsComponent implements OnInit {

  @ViewChild('tabGroup') tabGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
