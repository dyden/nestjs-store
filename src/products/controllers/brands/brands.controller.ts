import {Controller,Get,Param,Post,Body,Put,Delete,ParseIntPipe} from '@nestjs/common';
import { CreateBrandDTO, UpdateBrandDTO } from 'src/products/dtos/brand.dto';
import { BrandsService } from 'src/products/services/brands/brands.service';
import {ApiTags} from '@nestjs/swagger';
    
  @Controller('brands')
  @ApiTags('Brands')
  export class BrandsController {
    /***********************************************************
    *                      CONSTRUCTOR                          *
    ************************************************************/
    constructor(private brandsService: BrandsService) {}
    /***********************************************************
    *                    GET ALL BRANDS                        *
    ************************************************************/
    @Get('/getAll')
    getAll() {
      return this.brandsService.findAll();
    }
    /***********************************************************
    *                    FIND BRAND BY ID                      *
    ************************************************************/
    @Get('/find/:id')
    findById(@Param('id', ParseIntPipe) id: number) {
      return this.brandsService.findOne(id);
    }
    /***********************************************************
    *                   CREATE NEW BRAND                       *
    ************************************************************/
    @Post('/create')
    create(@Body() payload: CreateBrandDTO) {
      return this.brandsService.create(payload);
    }
    /***********************************************************
    *                    EDIT BRAND BY ID                       *
    ************************************************************/
    @Put('/update/:id')
    update(
      @Param('id', ParseIntPipe) id: number,
      @Body() payload: UpdateBrandDTO,
    ) {
      return this.brandsService.update(id, payload);
    }
    /***********************************************************
    *                     DELETE BRAND BY ID                    *
    ************************************************************/
  
    @Delete('/delete/:id')
    delete(@Param('id', ParseIntPipe) id: number) {
      return this.brandsService.remove(+id);
    }
  }