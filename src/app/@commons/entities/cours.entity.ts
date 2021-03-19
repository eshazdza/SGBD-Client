import { InscriptionEntity } from './inscription.entity';
import { UserEntity } from './user.entity';

export class CoursEntity {
    uuid: string | undefined;
    id: string | undefined;
    name: string | undefined;
    dateBegin: Date | undefined;
    dateEnd: Date | undefined;
    currentFlag: boolean | undefined;
    teacher: UserEntity | undefined;
    userList: InscriptionEntity[] | undefined;
}
