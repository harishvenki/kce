import { Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface Assesments {
  topicName: string,
  details: string,
  status: string,
  marks: string,
  submission: string
}

@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.scss']
})
export class AssessmentsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['sNo','topicName', 'details', 'status', 'marks', 'submission'];

  constructor() { }

  ngOnInit(): void {
  }

  ELEMENT_DATA: Assesments[] = [
    {topicName: "Python", status: "In Progress", details: "Done", marks: "100/100", submission: "Done"},
  ];
  dataSource = new MatTableDataSource<Assesments>(this.ELEMENT_DATA);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
