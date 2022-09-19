
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PersonDocument = Person & Document;

@Schema({versionKey: false})
export class Person {
    @Prop({ required: true })
    firstName: string;

    @Prop({ required: true })
    lastName: string;

    @Prop({ required: true })
    age: number;

    @Prop()
    dateJoined?: Date;

    @Prop({ required: true })
    isTrustedByKarakan: boolean;
}

export const PersonSchema = SchemaFactory.createForClass(Person);
