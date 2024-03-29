import {
  CreateComunicateDto,
  UpdateComunicateDto,
} from '../dto/Comunicate.dto';
import { Comunicate } from '../entities/Comunicate.entity';

export interface IComunicate {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
}

export interface IComunicateService {
  getAll(): Promise<Comunicate[]>;
  getOneById(id: number): Promise<Comunicate>;
  create(comunicateDto: CreateComunicateDto): Promise<Comunicate>;
  update(id: number, update: UpdateComunicateDto): Promise<Comunicate>;
  delete(id: number): Promise<Comunicate>;
}
