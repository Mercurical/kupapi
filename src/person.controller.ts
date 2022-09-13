import { Controller, Get, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';
import { Person } from './domain/person';

@Controller('person')
export class PersonController {
  constructor(private readonly appService: AppService) {}

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
}
