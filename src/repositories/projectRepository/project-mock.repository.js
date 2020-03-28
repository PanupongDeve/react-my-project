import { projects } from '../../dataSource/mock/projects'

class ProjectMockRepository {

    getProjects() {
        return projects;
    }
}


export const projectMockRepository = new ProjectMockRepository();