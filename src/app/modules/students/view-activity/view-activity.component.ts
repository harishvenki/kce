import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface ViewActivity {
  activityName: string,
  activityType: string,
  activityUrl: string,
  activityRemarks: string,
  startDate: string,
  endDate: string,
  status: string,
  tutorRemarks: string,
  action: string
}

@Component({
  selector: 'app-view-activity',
  templateUrl: './view-activity.component.html',
  styleUrls: ['./view-activity.component.scss']
})

export class ViewActivityComponent implements OnInit {
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['sNo','activityName', 'activityType', 'activityUrl', 'activityRemarks', 'startDate','endDate','status','tutorRemarks','action'];
  
  constructor() { }
  company = [];
  selected: any;
  

  ELEMENT_DATA: ViewActivity[] = [
    {activityName: "Yugam", activityType: 'Coding challenge', activityUrl: "https://yugam.com", startDate: '21/12/2021',endDate: '21/12/2021', status: "Completed",tutorRemarks: "Good", activityRemarks: "good", action: "Done"},
  ];
  dataSource = new MatTableDataSource<ViewActivity>(this.ELEMENT_DATA);
  
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  onSelect(event){}

}
