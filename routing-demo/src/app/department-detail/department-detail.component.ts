import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';


@Component({
  selector: 'app-department-detail',
  template: `<h4>You selected department with id = {{departmentId}} </h4>  
  <p>
    <button (click)="showOverview()">Overview</button>
    <button (click)="showContact()">Contact</button>
  </p>
  <router-outlet></router-outlet>
  <button class="btn" (click)="goPrev()">Prev</button>
  <button class="btn" (click)="goNext()">Next</button>
  <div><button (click)="gotoDepartments()"> Back</button></div>`,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'))
    // this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.departmentId= id;
    });
  }

  goPrev(){
    let prevId = this.departmentId - 1;
    this.router.navigate(['/departments', prevId ]);
  }
  
  goNext(){
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments',nextId]);
  }

  gotoDepartments(){
    let selectedId = this.departmentId ? this.departmentId : null;
    // this.router.navigate(['/departments',{id:selectedId}]);
    this.router.navigate(['../',{id:selectedId}],{relativeTo:this.route});
  }

  showOverview(){
    this.router.navigate( ['overview'],{relativeTo: this.route});
  }
  showContact(){
    this.router.navigate( ['contact'],{relativeTo: this.route});
  }
}
