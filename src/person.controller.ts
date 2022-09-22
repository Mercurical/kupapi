import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { PersonDto } from './domain/dto/person.dto';
import { Person } from './domain/person';
import { Person as PersonModel, PersonDocument } from './schema/person.schema';

@Controller('person')
export class PersonController {
  constructor(@InjectModel(PersonModel.name) private personModel: Model<PersonDocument>) {}

  @Get()
  @HttpCode(200)
  getList(): Promise<PersonModel[]>  {
    return this.personModel.find().exec();
  }

  @Get(":id")
  @HttpCode(200)
  getById(@Param() params: {id: string}): Promise<PersonModel>  {
    return this.personModel.findById(params.id).exec();
  }

  @Delete(":id")
  @HttpCode(200)
  DeleteById(@Param() params: {id: string}): Promise<PersonModel>  {
    return this.personModel.findByIdAndRemove(params.id).exec();
  }

  @Post(":id")
  @HttpCode(200)
  UpdateById(@Param() params: {id: string}): Promise<PersonModel> {
    return this.personModel.findById(params.id).update(
      {
        isTrustedByKarakan: false,
      },
      {
        itTrusedByKarakan: true,
      }
      ).exec();
  }

  @Post()
  @HttpCode(201)
  createPerson(@Body() personDto: PersonDto): Promise<PersonModel> {
    const createdPerson = new this.personModel(personDto);

    return createdPerson.save();
  }
}
