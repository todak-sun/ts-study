import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cat' })
export class Post {
  @PrimaryGeneratedColumn({ name: 'post_id' })
  id: number;

  @Column({name: 'title'})
  title: string;
}
