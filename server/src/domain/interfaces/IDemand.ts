import { CreateDemandDto } from '../dto/Demand.dto';
import { Demand } from '../entities/Demand.entity';
import { IUser } from './IUser';

export interface IDemand extends Omit<IUser, 'refreshToken' | 'updatedAt'> {
  cpf: string;
  store: string;
  createdAt: Date;
}

export interface IDemandService {
  getAll(): Promise<Demand[]>;
  create(demandDto: CreateDemandDto): Promise<Demand>;
  getOneById(id: number): Promise<Demand>;
  authorizate(id: number): Promise<any>;
  reject(id: number): Promise<any>;
}
