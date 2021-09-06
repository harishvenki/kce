import { Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


export interface PracticeQuiz {
  topicName: string,
  action: string,
  status: string,
  marks: string,
  submission: string
}

@Component({
  selector: 'app-practice-quiz',
  templateUrl: './practice-quiz.component.html',
  styleUrls: ['./practice-quiz.component.scss']
})
export class PracticeQuizComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['sNo','topicName', 'action', 'status', 'marks', 'submission'];

  constructor() { }

  ngOnInit(): void {
  }

  ELEMENT_DATA: PracticeQuiz[] = [
    {topicName: "Python", status: "In Progress", action: "Done", marks: "100/100", submission: "Done"},
  ];
  dataSource = new MatTableDataSource<PracticeQuiz>(this.ELEMENT_DATA);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  solve(element){
    console.log(element);
  }
}
