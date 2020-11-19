
import { ProjectInt } from '../model/Project.model';
import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../project.service';
import { map, share} from 'rxjs/operators';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects : ProjectInt []
  isDefault : boolean;

  constructor(private projectService: ProjectService) {

  }
  ngOnInit(){

    this.projectService.getProjects()
    .subscribe(projects => this.projects = projects);

}

  projects$ = this.projectService.getProjects().pipe(share());



  showAll(){
    this.projects$
      .subscribe(response => this.projects = response);

  }




  filterProjLessThenThree(){

  this.projects$.pipe(
  map(projects => projects.filter(project => project.id > 5)))
  .subscribe(response => this.projects = response);


  }

  filterProjBeetwenThreeAndFive(){

    this.projects$.pipe(
      map(projects => projects.filter(project => project.id >= 3 && project.id < 5))
     ).subscribe(response => this.projects = response);
    }



  filterProjBeetwenOneAndThree(){

    this.projects$.pipe(
    map(projects => projects.filter(project => project.id >= 1 && project.id < 3)))
    .subscribe(response => this.projects = response);


  }

  filterProjEquealOne(){

    this.projects$.pipe(
    map(projects => projects.filter(project => project.id  == 1)))
    .subscribe(response => this.projects = response);


  }
}
