import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from 'src/entities/contact.entity';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
    
  ) {}

    async readAll(userId: number): Promise<Contact[]> {
      return this.contactRepository.find({ where: { contactId: userId } });
    }

    async create(contact: Contact, userId: number): Promise<Contact> {
      contact.contactId = userId;
      return await this.contactRepository.save(contact);
    }
  async update(contact: Contact): Promise<void> {
    await this.contactRepository.update(contact.id, contact);
  }

  async delete(id: number): Promise<void> {
    await this.contactRepository.delete(id);
  }
  async findAll(){
    return await this.contactRepository.find(
    {
      relations:{
        user:true,
      }
    }
    );
  }
}
