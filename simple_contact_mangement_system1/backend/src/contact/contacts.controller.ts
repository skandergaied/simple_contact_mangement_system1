import { Controller, Get, Post, Put, Delete, Body, Param ,UseGuards,Request,} from '@nestjs/common';
import { ContactService } from './contact.service';
import { Contact } from 'src/entities/contact.entity';
import { AuthGuard,PayloadRequest  } from 'src/auth/auth/auth.guard';

@Controller('contacts')
export class ContactsController {
  constructor(private contactService: ContactService) {}

      @Get()
       @UseGuards(AuthGuard)
      async read(@Request() req: PayloadRequest): Promise<Contact[]> {
        
        console.log('mamamiya');
        const userId = req.user.id; 
        console.log(userId);
        return this.contactService.readAll(userId);
      }
    

  @Post('create')
   @UseGuards(AuthGuard)
  async create(@Body() contact: Contact, @Request() req: PayloadRequest): Promise<Contact> {
    return this.contactService.create(contact, req.user.id);
  }

  @Put(':id/update')
   @UseGuards(AuthGuard)
  async update(@Param('id') id: number, @Body() contact: Contact): Promise<void> {
    contact.id = id;
    return this.contactService.update(contact);
  }

  @Delete(':id/delete')
   @UseGuards(AuthGuard)
  async delete(@Param('id') id: number): Promise<void> {
    return this.contactService.delete(id);
  }
}