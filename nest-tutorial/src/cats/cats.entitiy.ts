import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cat' })
export class CatsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  age: number;

  @Column({ length: 50 })
  name: string;

  @Column()
  owner: string;
}
