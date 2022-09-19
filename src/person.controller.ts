import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { PersonDto } from './domain/dto/person.dto';
import { Person } from './domain/person';
import { Person as PersonModel, PersonDocument } from './schema/person.schema';

@Controller('person')
export class PersonController {
  constructor(@InjectModel(PersonModel.name) private personModel: Model<PersonDocument>) {}

  @Get()
  @HttpCode(200)
  getList(): Person[] {
    return [
      {
        firstName: 'Antoni',
        lastName: 'Macierewicz',
        age: 70,
        dateJoined: new Date('1990-02-04'),
        isTrustedByKarakan: true,
        address: {
          street: 'Sezamkowa',
          houseNumber: '69',
          postalCode: '00-999',
          city: 'Warszawa'
        }
      }
    ];
  }

  @Post()
  @HttpCode(201)
  createPerson(@Body() personDto: PersonDto): Promise<PersonModel> {
    const createdPerson = new this.personModel(personDto);

    return createdPerson.save();
  }
}
