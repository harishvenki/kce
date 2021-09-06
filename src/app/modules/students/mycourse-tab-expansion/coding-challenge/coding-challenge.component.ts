import { Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface CodingChallenge {
  topicName: string,
  action: string,
  status: string,
  marks: string,
  submission: string
}

@Component({
  selector: 'app-coding-challenge',
  templateUrl: './coding-challenge.component.html',
  styleUrls: ['./coding-challenge.component.scss']
})
export class CodingChallengeComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['sNo','topicName', 'action', 'status', 'marks', 'submission'];

  constructor() { }

  ngOnInit(): void {
  }

  ELEMENT_DATA: CodingChallenge[] = [
    {topicName: "Python", status: "In Progress", action: "Done", marks: "100/100", submission: "Done"},
  ];
  dataSource = new MatTableDataSource<CodingChallenge>(this.ELEMENT_DATA);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  solve(element) {
    
  }

}
