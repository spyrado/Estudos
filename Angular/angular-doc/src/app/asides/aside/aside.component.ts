import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit{
  
  options: FormGroup;
  configs: Object;

  @ViewChild('tollbarRef') tollbarRef: ElementRef<HTMLElement>;
  
  constructor(
    private fb: FormBuilder,
    ) {
      this.options = this.fb.group({
        bottom: 0,
        fixed: false,
        top: 0
      });
    }
    
    ngOnInit(): void {
      console.log(this.tollbarRef);
    }
    ngAfterViewInit(): void {
      //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
      //Add 'implements AfterViewInit' to the class.
      console.log(this.tollbarRef.nativeElement.clientHeight);
      
    }
    configuracoesSideBar(){
      this.configs = {
        bottom: 0,
        fixed: true,
        top: 0
      }
    }

  
}
