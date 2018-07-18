import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {IEmployee} from './employee';
import {IEmpresa} from './empresa';
import {throwError as observableThrowError, Observable } from 'rxjs';
// import 'rxjs/add/operator/catch';
import { catchError } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class EmployeeService {
public employees = [
    {"id": 1,"name": "Andrew", "age": 30},
    {"id": 2,"name": "Brandon", "age": 25},
    {"id": 3,"name": "Christina", "age": 26},
    {"id": 4,"name": "Elena", "age": 28},
  ]
  //21
  private _url:string= "/assets/data/employees.json";
  private _url2:string= "http://localhost:8000/pruebas/index.php";
  constructor(private http: HttpClient) { }

  getEmployees():Observable<IEmployee[]>{
    // return this.employees;
    return this.http.get<IEmployee[]>(this._url);
  }

  getEmpresas():Observable<IEmpresa[]>{
    // return this.employees;
    return this.http.get<IEmpresa[]>(this._url2).pipe( 
      catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error");
  }
}
