import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: `comments` })
export class CommentEntity {
  @PrimaryGeneratedColumn({ name: `id` })
  id: number;

  @Column({ name: `content` })
  content: string;

  @Column({ name: `post_id` })
  postId: number;
}
