import { CreateStoreDto, UpdateStoreDto } from '../dto/Store.dto';
import { Category } from '../entities/Category.entity';
import { User } from '../entities/User.entity';
import { Store } from '../entities/Store.entity';
import { Image } from '../entities/Image.entity';

export interface IStore {
  id: number;
  owner: User;
  category: Category;
  name: string;
  slogan: string;
  logo: Image;
  images: Image[];
  description: string;
  instagram: string;
  whatsapp: string;
  location: string;
  services: string;
  updatedAt: Date;
  createdAt: Date;
}

export interface IStoreService {
  getAll(): Promise<Store[]>;
  getOneById(id: number): Promise<Store>;
  create(storeDto: CreateStoreDto): Promise<Store>;
  update(id: number, update: UpdateStoreDto): Promise<Store>;
  delete(id: number): Promise<Store>;
}
