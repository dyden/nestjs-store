import { Controller,Get,Query,Param, Post, Body, Put, Delete, HttpStatus,HttpCode} from '@nestjs/common'
import { ParseIntPipe } from 'src/common/parse-int.pipe';
import { CreateProductDTO, UpdateProductDTO } from 'src/products/dtos/product.dto';
import { ProductsService } from 'src/products/services/products/products.service';
import {ApiTags} from '@nestjs/swagger';

@Controller('products')
@ApiTags('Products')
export class ProductsController {
    /***********************************************************
    *                      CONSTRUCTOR                          *
    ************************************************************/
    constructor(private productService:ProductsService){}

    /***********************************************************
    *                   GET ALL PRODUCTS                        *
    ************************************************************/
    @Get('/getAll')
    async findAll(@Query('limit') limit = 100,@Query('offset') offset = 0,@Query('brand') brand:string){
    
       return await this.productService.findAll();
    }

    /***********************************************************
    *                   FIND PRODUCT BY ID                     *
    ************************************************************/
    @Get('/find/:id')
    findById(@Param('id',ParseIntPipe) id:number){
        return this.productService.findOne(id);
    }
    /***********************************************************
    *                   CREATE NEW PRODUCT                     *
    ************************************************************/
    @Post('/create')
    create(@Body() payload:CreateProductDTO){
        return this.productService.create(payload);
    }
    /***********************************************************
    *                   CREATE NEW PRODUCT                     *
    ************************************************************/
    @Put('/update/:id')
    update(@Param('id',ParseIntPipe) id:number,@Body() payload:UpdateProductDTO){
        return this.productService.update(id,payload);
    }
    /***********************************************************
    *                   DELETE PRODUCT BY ID                   *
    ************************************************************/
    @Delete('/delete/:id')
    delete(@Param('id',ParseIntPipe) id:number){
        return this.productService.delete(id);
    }     
}

