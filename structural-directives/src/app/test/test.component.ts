import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public displayName = true;
  public color = "blue";
  public colors = ['red','blue', 'green','yellow']

  @Input() public parentData;
  // @Input('parentData') public nombre;
  @Output() public childEvent = new EventEmitter();
  //16 Pipes
  public name = "Eduardo Jmz";
  public message = "Welcome to home";
  public person = {
    "firstName":"John",
    "lastName": "Doe"
  }
  public date= new Date();
  //21
  public empresas=[];
  
  constructor(private _employeeService: EmployeeService ) { }

  ngOnInit() {
     this. _employeeService.getEmpresas()
      .subscribe(data=>this.empresas=data);
  }

   fireEvent(){
     this.childEvent.emit('Hey Lalo');
   }
}
