import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import {User} from "./user.model";


@Entity()
export class Courses {
  @PrimaryGeneratedColumn()
    id!: number;
  @Column()
    nameCourse!: string;
    
  @Column()
    photoCourse!: string; 

  @Column()
    videosCourse!: string;

  @Column()
    price!: string;

  @Column()
    descriprionCourse!: string;

  @Column()
    sinews!: string;
    
  @ManyToMany(() => User)
  @JoinTable()
    users!: User[];
}
