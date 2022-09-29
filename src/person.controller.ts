import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Body, Controller, Delete, Get, HttpCode, Param, Post, Patch } from '@nestjs/common';
import { PersonDto } from './domain/dto/person.dto';
import { Person as PersonModel, PersonDocument } from './schema/person.schema';
import { PersonUpdateDto } from './domain/dto/personUpdate.dto';

@Controller('person')
export class PersonController {
  constructor(@InjectModel(PersonModel.name) private personModel: Model<PersonDocument>) {}

  @Get()
  @HttpCode(200)
  getList(): Promise<PersonModel[]>  {
    return this.personModel.find().exec();
  }

  @Get("cos")
  @HttpCode(200)
  getById(@Param() params: {id: string}): Promise<PersonModel>  {
    return this.personModel.findById(params.id).exec();
  }

  @Delete(":id")
  @HttpCode(200)
  deleteById(@Param() params: {id: string}): Promise<PersonModel>  {
    return this.personModel.findByIdAndRemove(params.id).exec();
  }

  @Patch(":id")
  @HttpCode(200)
  updateById(@Param() params: {id: string}, @Body() personUpdateDto: PersonUpdateDto) {
    return this.personModel.findByIdAndUpdate(params.id, personUpdateDto, { new: true }).exec();
  }

  @Post()
  @HttpCode(201)
  createPerson(@Body() personDto: PersonDto): Promise<PersonModel> {
    const createdPerson = new this.personModel(personDto);

    return createdPerson.save();
  }
}
