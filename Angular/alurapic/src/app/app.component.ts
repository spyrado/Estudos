import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
    ) {}
    
    ngOnInit(): void {
      this.router.events
        .subscribe(event => console.log(event));
      // .pipe(filter(event => event instanceof NavigationEnd))
      // .pipe(map(() => this.activatedRoute))
      
    }
}
