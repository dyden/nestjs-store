import { IsEmail, IsNotEmpty, IsNumber, IsPositive,IsString, IsUrl } from "class-validator";
import { PartialType,ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDTO{
    @IsString()
    @IsNotEmpty()
    @ApiProperty({description:"Name of customer"})
    readonly name:string;
    @IsString()
    @IsEmail()   
    @IsNotEmpty() 
    @ApiProperty({description:"Email of customer"})
    readonly email:string;
    @IsString()
    @IsNotEmpty()
    @ApiProperty({description:"Gender of customer"})
    readonly gender:string;
    @IsString()
    @IsUrl()
    @IsNotEmpty()
    @ApiProperty({description:"Photo of customer"})
    readonly photo:string;
    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    @ApiProperty({description:"Age of customer"})
    readonly age:number;
}
export class UpdateCustomerDTO  extends PartialType(CreateCustomerDTO) {}
   
