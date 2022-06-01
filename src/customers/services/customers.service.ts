import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';


import { CreateCustomerDTO,UpdateCustomerDTO } from 'src/customers/dtos/customers.dto';
import { Customer } from 'src/customers/entities/customer.entity';
import { Repository } from 'typeorm/repository/Repository';


@Injectable()
export class CustomersService {      
    /***********************************************************
    *                      CONSTUCTOR                          *
    ************************************************************/
    constructor(@InjectRepository(Customer) private customerRepo:Repository<Customer> ) {}

    /***********************************************************
    *                   FIND ALL CUSTOMERS                       *
    ************************************************************/
    async findOne():Promise<Customer[]> {
         return await this.customerRepo.find()
    }
    /***********************************************************
    *                   FIND CUSTOMER BYD ID                    *
    ************************************************************/
    async findById(id: number): Promise<Customer> {
        //FOUND PRODUCT
        const customer = await this.customerRepo.findOne({where:{id}});
        if (!customer) {
            throw new NotFoundException(`Customer ${id} not found`);
        }
        return customer;
    }
    /***********************************************************
    *                   CREATE NEW PRODUCT                     *
    ************************************************************/
    async create(data: CreateCustomerDTO) {
        const customer=this.customerRepo.create(data);
        await this.customerRepo.save(customer);
    }
    /***********************************************************
    *                 UPDATE CUSTOMER BY ID                      *
    ************************************************************/
    async update(id: number, data: UpdateCustomerDTO){
        const customer = await this.customerRepo.findOne({where:{id}});
        this.customerRepo.merge(customer,data); 
        await this.customerRepo.save(customer);
    }
    /***********************************************************
    *                   DELETE PRODUCT BY ID                   *
    ************************************************************/
    delete(id: number) {
        this.customerRepo.delete(id);
    }



}