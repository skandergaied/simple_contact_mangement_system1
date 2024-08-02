import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthGuard } from './auth/auth/auth.guard';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { Contact } from './entities/contact.entity';
import { ContactsModule } from './contact/contacts.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'iskander',
      password: 'mohamed',
      database: 'nestngdb',
      entities: [Contact,User],
      synchronize: true,
    })
    ,
    ContactsModule,
    AuthModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService, AuthGuard],
})
export class AppModule { }