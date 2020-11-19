import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProjectService } from './project.service';


describe('ProjectService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [ProjectService]
  }));

   it('should be created', () => {
    const service: ProjectService = TestBed.get(ProjectService);
    expect(service).toBeTruthy();
   });

   it('should have getData function', () => {
    const service: ProjectService = TestBed.get(ProjectService);
    expect(service.getProjects).toBeTruthy();
   });

});
