import { Controller,Get,Query,Param, Post, Body, Put, Delete} from '@nestjs/common'
import { ParseIntPipe } from 'src/common/parse-int.pipe';
import { CreateCustomerDTO, UpdateCustomerDTO } from 'src/customers/dtos/customers.dto'
import { CustomersService } from 'src/customers/services/customers.service';
import {ApiTags} from '@nestjs/swagger';


@Controller('customers')
@ApiTags('Customers')
export class CustomersController {
    /***********************************************************
    *                      CONSTRUCTOR                          *
    ************************************************************/
    constructor(private customerService:CustomersService){}
    /***********************************************************
    *                   GET ALL CUSTOMERS                        *
    ************************************************************/
    @Get('/getAll')
    getAll(@Query('limit') limit = 100,@Query('offset') offset = 0){
       return this.customerService.findOne();
    }

    /***********************************************************
    *                   FIND CUSTOMER BY ID                      *
    ************************************************************/
    @Get('/find/:id')
    findById(@Param('id',ParseIntPipe) id:number){
        return this.customerService.findById(id);
    }
    /***********************************************************
    *                   CREATE NEW CUSTOMER                     *
    ************************************************************/
    @Post('/create')
    create(@Body() payload:CreateCustomerDTO){
        return this.customerService.create(payload);
    }
    /***********************************************************
    *                   CREATE NEW CUSTOMER                     *
    ************************************************************/
    @Put('/update/:id')
    update(@Param('id',ParseIntPipe) id:number,@Body() payload:UpdateCustomerDTO){
        return this.customerService.update(id,payload);
    }
    /***********************************************************
    *                   DELETE CUSTOMER BY ID                   *
    ************************************************************/
    @Delete('/delete/:id')
    delete(@Param('id',ParseIntPipe) id:number){
        return this.customerService.delete(id);
    }
 
}
