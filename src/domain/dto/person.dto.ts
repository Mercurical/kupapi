import { IsBoolean, IsDate, IsNumber, IsOptional, IsString, Matches, MaxLength, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class AddressDto {
    @IsString()
    @MaxLength(40)
    street: string;

    @IsString()
    @MaxLength(10)
    houseNumber: string;

    @IsString()
    @Matches(/^\d{2}-\d{3}$/)
    postalCode: string;

    @IsString()
    @MaxLength(40)
    city: string;
}

class PersonDto {
    @IsString()
    @MaxLength(30)
    firstName: string;

    @IsString()
    @MaxLength(60)
    lastName: string;

    @IsNumber()
    age: number;

    @IsOptional()
    @IsDate()
    dateJoined?: Date;

    @IsBoolean()
    isTrustedByKarakan: boolean;

    @ValidateNested()
    @Type(() => AddressDto)
    address: AddressDto;
}

export { PersonDto };