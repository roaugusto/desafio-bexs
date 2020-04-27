import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Question from './Question';

@Entity('answers')
class Answer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  text: string;

  @Column()
  user: string;

  @Column('int')
  likes: number;

  @Column()
  questionId: string;

  @ManyToOne(() => Question)
  @JoinColumn({ name: 'questionId' })
  question: Question;

  @Column('time with time zone')
  createdAt: Date;

  @Column('time with time zone')
  updatedAt: Date;
}

export default Answer;
