import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../models/project';
import { allProjects } from '../../data/projects';
import { ProjectCard } from "../../components/project-card/project-card";

@Component({
  selector: 'app-home',
  imports: [ProjectCard, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  projects: Project[] = allProjects.slice(0, 3);

  moreCard: Project = {
    title: 'Ver más proyectos',
    description: 'Explora el listado completo con todos mis proyectos y tecnologías.',
    tags: ['Portafolio'],
    link: '/projects',
  };


}
