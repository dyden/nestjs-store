import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BrandsController } from './controllers/brands/brands.controller';
import { ProductsController } from './controllers/products/products.controller';
import { CategoriesController } from './controllers/categories/categories.controller';

import { BrandsService } from './services/brands/brands.service';
import { CategoriesService } from './services/categories/categories.service';
import { ProductsService } from './services/products/products.service';

import { Product } from './entities/product.entity';
import { Brand } from './entities/brand.entity';
import { Category } from './entities/category.entity';
@Module({
    imports: [TypeOrmModule.forFeature([Product,Brand,Category])],
    controllers: [ProductsController, BrandsController, CategoriesController],
    providers: [ProductsService, BrandsService,CategoriesService],
    exports:[ProductsService]
})
export class ProductsModule {}
