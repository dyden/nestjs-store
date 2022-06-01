import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


import { Brand } from 'src/products/entities/brand.entity';
import { CreateBrandDTO, UpdateBrandDTO } from 'src/products/dtos/brand.dto';

@Injectable()
export class BrandsService {
  /***********************************************************
  *                      CONSTRUCTOR                         *
  ************************************************************/
   constructor(@InjectRepository(Brand) private brandRepo:Repository<Brand> ) {}

   /***********************************************************
   *                   FIND ALL CATEGORIES                    *
   ************************************************************/
   findAll():Promise<Brand[]>{
     return this.brandRepo.find();
   }
 
   /***********************************************************
   *                   FIND BRAND BY ID                       *
   ************************************************************/
   async findOne(id: number):Promise<Brand> {
     //FOUND PRODUCT
     const brand = await this.brandRepo.findOne({where:{id}});
     if(!brand){
         throw new NotFoundException(`Brand ${id} not found`);
     }
     return brand;
    
   }
   /***********************************************************
   *                   CREATE NEW BRAND                       *
   ************************************************************/
   async create(data: CreateBrandDTO) {
     const brand = this.brandRepo.create(data);
     return await this.brandRepo.save(brand);
     
   }
 
   async update(id: number, changes: UpdateBrandDTO) {
     const brand = await this.brandRepo.findOne({where:{id}});
     this.brandRepo.merge(brand, changes);
     await this.brandRepo.save(brand);
     
   }
  /***********************************************************
   *                   DELETE BRAND BY ID                     *
   ************************************************************/
   async remove(id: number) {
     await this.brandRepo.delete(id); 
   }
}