import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from '../dto/create-project.dto';
import { UpdateProjectDto } from '../dto/update-project.dto';
import { ProjectsRepository } from '../repositories/project.repository';
import { Project } from '@prisma/client';

@Injectable()
export class ProjectsService {
  constructor(private readonly projectsRepository: ProjectsRepository) {}

  async create(createProjectDto: CreateProjectDto): Promise<number> {
    return await this.projectsRepository.create(createProjectDto);
  }

  async findAll(): Promise<Project[]> {
    return await this.projectsRepository.findAll();
  }

  async findOne(id: number): Promise<Project | null> {
    return await this.projectsRepository.findOne(id);
  }

  async update(
    id: number,
    updateProjectDto: UpdateProjectDto,
  ): Promise<Project> {
    return await this.projectsRepository.update(id, updateProjectDto);
  }

  async remove(id: number): Promise<Project> {
    return await this.projectsRepository.remove(id);
  }
}
