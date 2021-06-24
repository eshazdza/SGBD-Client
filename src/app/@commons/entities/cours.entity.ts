import { InscriptionEntity } from './inscription.entity';
import { UserEntity } from './user.entity';
import { TestEntity } from './test.entity';

export class CoursEntity {
    uid: string | undefined;
    id?: string | undefined;
    name?: string | undefined;
    dateBegin?: Date | undefined;
    dateEnd?: Date | undefined;
    currentFlag?: boolean | undefined;
    teacher?: UserEntity | undefined;
    userList?: InscriptionEntity[] | undefined;
    testList?: TestEntity[] | undefined;
}
