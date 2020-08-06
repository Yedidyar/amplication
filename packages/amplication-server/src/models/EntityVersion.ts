import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity } from '../models/Entity'; // eslint-disable-line import/no-cycle
import { EntityField } from '../models/EntityField'; // eslint-disable-line import/no-cycle
import { Commit } from '../models/Commit'; // eslint-disable-line import/no-cycle

@ObjectType({
  isAbstract: true,
  description: undefined
})
export class EntityVersion {
  @Field(() => String, {
    nullable: false,
    description: undefined
  })
  id!: string;

  @Field(() => Date, {
    nullable: false,
    description: undefined
  })
  createdAt!: Date;

  @Field(() => Date, {
    nullable: false,
    description: undefined
  })
  updatedAt!: Date;

  entity?: Entity;

  @Field(() => Int, {
    nullable: false,
    description: undefined
  })
  versionNumber!: number;

  @Field(() => Commit, {
    nullable: false,
    description: undefined
  })
  commit?: Commit;

  entityFields?: EntityField[] | null;
}
