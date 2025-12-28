import { Component } from '@angular/core';
import { Project } from '../../models/project';
import { allProjects } from '../../data/projects';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

  projects: Project[] = allProjects;

}
