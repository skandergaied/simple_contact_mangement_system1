import { ContactDto } from 'src/contact/contact.dto';
export class CreateUserDto {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    contacts: ContactDto[];
  }