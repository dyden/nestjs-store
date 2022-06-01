import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


import { CreateCategoryDTO, UpdateCategoryDTO } from 'src/products/dtos/category.dto';

import { Category } from 'src/products/entities/category.entity';

@Injectable()
export class CategoriesService {
  /***********************************************************
  *                      CONSTRUCTOR                         *
  ************************************************************/
  constructor(@InjectRepository(Category) private categoryRepo:Repository<Category> ) {}

  /***********************************************************
  *                   FIND ALL CATEGORIES                    *
  ************************************************************/
  findAll():Promise<Category[]>{
    return this.categoryRepo.find();
  }

  /***********************************************************
  *                   FIND CATEGORY BY ID                    *
  ************************************************************/
  async findOne(id: number):Promise<Category> {
    //FOUND PRODUCT
    const category = await this.categoryRepo.findOne({where:{id}});
    if(!category){
        throw new NotFoundException(`Category ${id} not found`);
    }
    return category;
   
  }
  /***********************************************************
  *                   CREATE NEW CATEGORY                    *
  ************************************************************/
  async create(data: CreateCategoryDTO) {
    const category = this.categoryRepo.create(data);
    return await this.categoryRepo.save(category);
    
  }

  async update(id: number, changes: UpdateCategoryDTO) {
    const category = await this.categoryRepo.findOne({where:{id}});
    this.categoryRepo.merge(category, changes);
    await this.categoryRepo.save(category);
    
  }
 /***********************************************************
  *                   DELETE CATEGORY BY ID                 *
  ************************************************************/
  async remove(id: number) {
    await this.categoryRepo.delete(id); 
  }
}