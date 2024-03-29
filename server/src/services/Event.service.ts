import {
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEventDto, UpdateEventDto } from '../domain/dto/Event.dto';
import { Event } from '../domain/entities/Event.entity';
import { IEventService } from '../domain/interfaces/IEvent';
import { Repository } from 'typeorm';

@Injectable()
export class EventService implements IEventService {
  constructor(@InjectRepository(Event) private eventRepo: Repository<Event>) {}

  private readonly logger = new Logger(EventService.name);

  async getAll(): Promise<Event[]> {
    this.logger.log(`Get all events.`);

    return await this.eventRepo.find();
  }

  async getOneById(id: number): Promise<Event> {
    this.logger.log(`Get a specific event ${id}.`);
    const event = await this.eventRepo.findOneBy({ id });
    if (!event) {
      throw new NotFoundException(`Evento ${id} não encontrado!`);
    }

    return event;
  }

  async create(eventDto: CreateEventDto): Promise<Event> {
    this.logger.log(`Creating a event.`);
    const event = await this.eventRepo.findOne({
      where: [{ name: eventDto.name }],
    });
    if (event) {
      throw new ConflictException(`Esta Evento já existe!`);
    }
    const newEvent = this.eventRepo.create(eventDto);

    return await this.eventRepo.save(newEvent);
  }

  async update(id: number, update: UpdateEventDto): Promise<Event> {
    this.logger.log(`Get the event of id ${id}.`);
    const event = this.getOneById(id);
    if (!event) {
      throw new NotFoundException(`Evento ${id} não encontrado!`);
    }
    await this.eventRepo.update({ id }, { ...update });

    return await this.eventRepo.findOneBy({ id });
  }

  async delete(id: number): Promise<Event> {
    this.logger.log(`Deleting Event ${id}.`);
    const event = this.getOneById(id);
    if (!event) {
      throw new NotFoundException(`Evento ${id} não encontrado!`);
    }
    await this.eventRepo.delete({ id });

    return event;
  }
}
