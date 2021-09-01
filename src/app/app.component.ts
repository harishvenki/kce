import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'endless';
  showHead: boolean;

  constructor(
    public router: Router
  ){
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/auth/login') {
          this.showHead = false;
        } else {
          // console.log("NU")
          this.showHead = true;
        }
      }
    });
  }

  ngOnInit(){
  }
}

