import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateProductDTO, UpdateProductDTO } from 'src/products/dtos/product.dto';

import { Product } from 'src/products/entities/product.entity';


@Injectable()
export class ProductsService {
    /***********************************************************
    *                      CONSTRUCTOR                         *
    ************************************************************/
    constructor(@InjectRepository(Product) private productRepo:Repository<Product> ) {}


    /***********************************************************
    *                   FIND ALL PRODUCTS                      *
    ************************************************************/
    async findAll():Promise<Product[]>{
        return await this.productRepo.find();
        
    }

    /***********************************************************
    *                   FIND PRODUCT BYD ID                    *
    ************************************************************/
    async findOne(id:number):Promise<Product>{  
        //FOUND PRODUCT
        const product = await this.productRepo.findOne({where:{id}});
        if(!product){
            throw new NotFoundException(`Product ${id} not found`);
        }
        return product;
    }
    /***********************************************************
    *                   CREATE NEW PRODUCT                     *
    ************************************************************/
    async create(data:CreateProductDTO){
        const product =this.productRepo.create(data);
        await this.productRepo.save(product);
    }
    /***********************************************************
    *                   UPDATE PRODUCT BY ID                   *
    ************************************************************/
    async update(id:number,data:UpdateProductDTO){
        const product = await this.productRepo.findOne({where:{id}});
        this.productRepo.merge(product,data); 
        await this.productRepo.save(product);
    }
    /***********************************************************
    *                   DELETE PRODUCT BY ID                   *
    ************************************************************/
    async delete(id:number){
        await this.productRepo.delete(id);
    }

}
