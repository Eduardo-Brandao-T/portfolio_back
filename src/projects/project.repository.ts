import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { Project } from '@prisma/client';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(project: CreateProjectDto): Promise<number> {
    return await this.prismaService.project
      .create({
        data: project,
      })
      .then((createdProject) => createdProject.id);
  }

  async findAll(): Promise<Project[]> {
    return await this.prismaService.project.findMany();
  }

  async findOne(id: number): Promise<Project | null> {
    return await this.prismaService.project.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateDto: UpdateProjectDto): Promise<Project> {
    return await this.prismaService.project.update({
      where: { id },
      data: updateDto,
    });
  }

  async remove(id: number): Promise<Project> {
    return await this.prismaService.project.delete({
      where: { id },
    });
  }
}
