import { ConflictException, Injectable, Logger, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateEventDto } from "application/dto/Event/createEvent.dto";
import { Repository } from "typeorm";
import { Event } from "domain/models/Event.entity";

@Injectable()
export class EventUseCases {
  constructor(@InjectRepository(Event) private eventRepository: Repository<Event>) {}

  private readonly logger = new Logger(EventUseCases.name);

  // Pega todos os eventos
  async getAllEvents(): Promise<Event[]> {
    this.logger.log("Get all events");

    return this.eventRepository.find()
  }

  // Pega um pelo id
  async getEventById(id: number): Promise<Event> {
    this.logger.log(`Get a event by id: ${id}`);

    const event = await this.eventRepository.findOneBy({ id });
    if (!event) {
      throw new NotFoundException(`Evento de id: ${id} não existe!`);
    }
    return event;
  }

  // Cria um evento novo
  async createEvent(eventDto: CreateEventDto): Promise<Event> {
    this.logger.log(`Creating an event`);

    const existingEvent = await this.eventRepository.findOneBy({ name: eventDto.name });
    if (existingEvent) {
      throw new ConflictException(`Um evento de nome: ${eventDto.name} já existe!`)
    }
    const event = this.eventRepository.create(eventDto);
    await this.eventRepository.save(event);

    return event;
  }

  // Deleta um evento pelo id
  async deleteEvent(id: number): Promise<Event> {
    this.logger.log(`Deleting event of id: ${id}`);

    const event = await this.getEventById(id);
    await this.eventRepository.delete({ id });

    return event;
  }
}