import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  enrolledOn: string;
  courseName: string;
  myProgress: number;
  status: string;
  target: number;
}


@Component({
  selector: 'app-course-status',
  templateUrl: './course-status.component.html',
  styleUrls: ['./course-status.component.scss']
})
export class CourseStatusComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['sNo','courseName', 'enrolledOn', 'myProgress', 'target', 'status'];
  

  current: number = 27;
  max: number = 100;
  stroke: number = 7;
  radius: number = 40;
  semicircle: boolean = false;
  rounded: boolean = true;
  responsive: boolean = false;
  clockwise: boolean = true;
  color: string = '#0099ff';
  background: string = '#eaeaea';
  duration: number = 800;
  animation: string = 'easeOutCubic';
  animationDelay: number = 800;
  gradient: boolean = false;
  realCurrent: number = 0;

  ELEMENT_DATA: PeriodicElement[] = [
    {courseName: "Python", enrolledOn: '21/12/2021', myProgress: 70, status: 'In Progress', target: 60},
    {courseName: "Java", enrolledOn: '21/12/2021', myProgress: 70,  status: 'In Progress', target: 60},
    {courseName: "Angular", enrolledOn: '21/12/2021', myProgress: 70,  status: 'In Progress',target: 60},
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  getOverlayStyle() {
    const isSemi = this.semicircle;
    const transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

    return {
      top: isSemi ? 'auto' : '50%',
      bottom: isSemi ? '5%' : 'auto',
      left: '50%',
      transform,
      'font-size': this.radius / 3.5 + 'px',
    };
  }

}



