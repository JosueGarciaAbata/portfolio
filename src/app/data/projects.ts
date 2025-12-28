import { Project } from '../models/project';

export const allProjects: Project[] = [
  {
    year: 2025,
    title: 'Sistema de Gestión Hospitalaria',
    subtitle: 'Microservicios, despliegue en Azure',
    description:
      'Arquitectura de microservicios con Spring Cloud, Eureka, Gateway, Docker y Azure.',
    tags: ['Java', 'Spring Boot', 'Spring Cloud', 'Docker', 'Azure'],
    github: 'https://github.com/JosueGarciaAbata/hospital-management-system',
    image: '/assets/projects/hospital.png',
  },
  {
    year: 2025,
    title: 'Sistema de gestión y moderación de publicaciones',
    subtitle: 'CI/CD con Jenkins',
    description:
      'Backend con Spring Boot, APIs REST y pipelines CI/CD usando Jenkins y Docker.',
    tags: ['Java', 'Spring Boot', 'Jenkins', 'CI/CD', 'Docker'],
    github: 'https://github.com/JosueGarciaAbata/martketplace_link_jenkins',
    image: '/assets/projects/marketplace.png',
  },
  {
    year: 2025,
    title: 'Sistema de Gestión de Combustibles',
    subtitle: 'Sistemas Distribuidos',
    description:
      'Sistema distribuido orientado a la detección de problemas y situaciones límite en el consumo de combustible, como sobreuso o inconsistencias.',
    tags: ['Java', 'Spring Boot', 'Sistemas Distribuidos'],
    github: 'https://github.com/DavidJosueP2/Distributed-Gasoline-System',
    image: '/assets/projects/fuel.png',
  },
  {
    year: 2025,
    title: 'Sistema Bancario',
    subtitle: 'Roles, cuentas, depósitos/retiros/transferencias',
    description: 'Gestión de cuentas bancarias con operaciones básicas y roles.',
    tags: ['Java', 'Spring Boot', 'Maven', 'SQL (Diseño de BD)'],
    github: 'https://github.com/JosueGarciaAbata/bank-system',
    image: '/assets/projects/fuel.png',
  },
  {
    year: 2025,
    title: 'Aplicación de Estudiantes con RBAC',
    subtitle: 'Control de acceso basado en roles (RBAC)',
    description: 'Aplicación académica con control de acceso por roles.',
    tags: ['Java', 'Spring Boot', 'RBAC'],
    github: 'https://github.com/JosueGarciaAbata/rbac-student-app',
  },
  {
    year: 2025,
    title: 'Arquitectura Limpia',
    subtitle: 'Patrones de arquitectura, estructura en capas',
    description: 'Implementación de principios de arquitectura limpia.',
    tags: ['Java', 'Spring Boot', 'Arquitectura Limpia'],
    github: 'https://github.com/JosueGarciaAbata/clean-architecture',
  },
  {
    year: 2025,
    title: 'Dominio Común',
    subtitle: 'Modelos de dominio compartidos / componentes reutilizables',
    description: 'Librería compartida de modelos de dominio.',
    tags: ['Java', 'Dominio', 'Librería Compartida'],
    github: 'https://github.com/JosueGarciaAbata/common-domain',
  },
  {
    year: 2025,
    title: 'Proyecto Ágil',
    subtitle: 'Proyecto web académico (trabajo iterativo/ágil)',
    description: 'Proyecto académico con enfoque ágil.',
    tags: ['PHP', 'JavaScript', 'HTML/CSS'],
    github: 'https://github.com/JosueGarciaAbata/agiles-proyecto',
  },
  {
    year: 2024,
    title: 'Proyecto MDS',
    subtitle: 'Proyecto web + script SQL incluido',
    description: 'Proyecto web con SQL incluido.',
    tags: ['JavaScript', 'PHP', 'SQL', 'HTML/CSS'],
    github: 'https://github.com/JosueGarciaAbata/proyecto-mds',
  },
];
