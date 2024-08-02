import { Entity, Column, PrimaryGeneratedColumn,ManyToOne,JoinColumn } from 'typeorm';
import { User } from "src/user/user.entity";
@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  title: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column({name:'contact_id'})
    contactId: number;
    

    @ManyToOne(type => User, (user) => user.contacts ,{cascade:true})
    @JoinColumn({ name: 'contact_id' })
    user: User;
}