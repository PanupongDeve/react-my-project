import { projectMockRepository } from './project-mock.repository';
import { utilsHelpers } from '../../helpers';

class ProjectRepository {
    constructor() {
        this.projectRepository = projectMockRepository;
    }


    getProjects() {
        return this.projectRepository.getProjects();
    }

    getProjectsForUI() {
        let projects = this.getProjects();
        return utilsHelpers.changeFormatArray(projects);
    }
}

export const projectRepository = new ProjectRepository();