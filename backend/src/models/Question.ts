import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import Answer from './Answer';

@Entity('questions')
class Question {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  text: string;

  @Column()
  user: string;

  @Column('int')
  likes: number;

  @Column('time with time zone')
  createdAt: Date;

  @Column('time with time zone')
  updatedAt: Date;

  @OneToMany(type => Answer, answer => answer.question)
  answers: Answer[];
}

export default Question;
