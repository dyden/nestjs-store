import { IsString, IsUrl, IsNotEmpty } from 'class-validator';
import { PartialType,ApiProperty} from '@nestjs/swagger';

export class CreateBrandDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({description:"Name of brand"})
  readonly name: string;

  @IsUrl()
  @IsNotEmpty()
  @ApiProperty({description:"Image of brand"})
  readonly image: string;

}

export class UpdateBrandDTO extends PartialType(CreateBrandDTO) {}