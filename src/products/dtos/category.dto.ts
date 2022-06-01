import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType,ApiProperty} from '@nestjs/swagger';

export class CreateCategoryDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({description:"Name of Category"})
  readonly name: string;
}

export class UpdateCategoryDTO extends PartialType(CreateCategoryDTO) {}