import {PrimaryGeneratedColumn,Column, Entity} from 'typeorm'

@Entity()
export class Customer{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'varchar',length:255,nullable:false})
    name:string;
    
    @Column({type:'text',nullable:false})
    email:string;
    
    @Column({type:'varchar',length:10,nullable:false})
    gender:string;
    
    @Column({type:'varchar',length:255})
    photo:string;

    @Column({type:'int'})
    age:number;
}