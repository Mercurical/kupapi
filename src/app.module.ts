import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Person, PersonSchema } from './schema/person.schema';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/test'), MongooseModule.forFeature([{ name: Person.name, schema: PersonSchema }])],
  controllers: [PersonController],
  providers: [AppService],
})
export class AppModule {}
