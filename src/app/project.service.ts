import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectInt } from './model/Project.model';


import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  private pathurl : string = "/assets/project-data.json";


    constructor (private http: HttpClient){

    }
    getProjects(): Observable<ProjectInt[]>{
      return this.http.get<ProjectInt[]>(this.pathurl)



    }



}
