import { IsBoolean, IsDate, IsNumber, IsOptional, IsString, Matches, MaxLength, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class AddressDto {
    @IsString()
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

class PersonUpdateDto {
    @IsString()
    @MaxLength(30)
    @IsOptional()
    firstName?: string;

    @IsString()
    @MaxLength(60)
    @IsOptional()
    lastName?: string;

    @IsNumber()
    @IsOptional()
    age?: number;

    @IsOptional()
    @IsDate()
    dateJoined?: Date;

    @IsBoolean()
    @IsOptional()
    isTrustedByKarakan?: boolean;

    @ValidateNested()
    @IsOptional()
    @Type(() => AddressDto)
    address?: AddressDto;
}

export { PersonUpdateDto };