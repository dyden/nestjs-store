import {Controller,Get,Param,Post,Body,Put,Delete,ParseIntPipe,} from '@nestjs/common';
import { CreateCategoryDTO, UpdateCategoryDTO } from 'src/products/dtos/category.dto';
import { CategoriesService } from 'src/products/services/categories/categories.service';
import {ApiTags} from '@nestjs/swagger';

  
  @Controller('categories')
  @ApiTags('Categories')
  export class CategoriesController {
    /***********************************************************
    *                      CONSTRUCTOR                          *
    ************************************************************/
    constructor(private categoriesService: CategoriesService) {}
  
    /***********************************************************
    *                      GET ALL CATEGORIES                   *
    ************************************************************/
    @Get('/getAll')
    getAll() {
      return this.categoriesService.findAll();
    }
    
    /***********************************************************
    *                     FIND CATEGORIE BY ID                 *
    ************************************************************/
    @Get('find/:id')
    get(@Param('id', ParseIntPipe) id: number) {
      return this.categoriesService.findOne(id);
    }
    /***********************************************************
    *                  CREATE NEW CATEGORIE                    *
    ************************************************************/
    @Post('/create')
    create(@Body() payload: CreateCategoryDTO) {
      return this.categoriesService.create(payload);
    }

    /***********************************************************
    *                      EDIT CATEGORY                       *
    ************************************************************/
    @Put('/update/:id')
    update(
      @Param('id', ParseIntPipe) id: number,
      @Body() payload: UpdateCategoryDTO,
    ) {
      return this.categoriesService.update(id, payload);
    }
    /***********************************************************
    *                  DELET CATEGORIE BY ID                   *
    ************************************************************/
    @Delete('/delete/:id')
    remove(@Param('id', ParseIntPipe) id: number) {
      return this.categoriesService.remove(+id);
    }
  }