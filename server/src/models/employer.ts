import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Employer{
    @PrimaryGeneratedColumn()
    idEmployer : number;
    @Column()
   employerName : string;
    @Column()
    employerPassword : string;
    @Column()
    address : string;
    @Column()
    description :number;
    @Column()
    staffNumber: string;
    @Column()
    brand : string;
}
