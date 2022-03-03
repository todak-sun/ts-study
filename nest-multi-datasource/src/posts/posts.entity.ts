import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: `posts` })
export class PostsEntity {
  @PrimaryGeneratedColumn({ name: `id` })
  id: number;

  @Column({ name: `title` })
  title: string;

  @Column({ name: `content` })
  content: string;

  @Column({ name: `created_at` })
  createdAt: Date;
}
