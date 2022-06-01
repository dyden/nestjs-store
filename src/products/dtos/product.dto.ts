import { IsNumber, IsPositive, IsString, IsUrl } from "class-validator";
import { PartialType,ApiProperty} from '@nestjs/swagger';

export class CreateProductDTO{  
    @IsString()
    @ApiProperty({description:"Name of product"})
    readonly name:string;
    
    @IsString()
    @ApiProperty({description:"Description of product"})
    readonly description:string;
    
    @IsString()
    @IsUrl()
    @ApiProperty({description:"Image of product"})
    readonly image:string;
    
    @IsNumber()
    @IsPositive()
    @ApiProperty({description:"Price of product"})
    readonly price:number;
    
    @IsNumber()
    @IsPositive()
    @ApiProperty({description:"Stock of product"})
    readonly stock:number;
    
}
export class UpdateProductDTO extends PartialType(CreateProductDTO) {}