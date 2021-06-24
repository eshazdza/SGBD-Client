import { UserEntity } from './user.entity';
import { RoleEntity } from './role.entity';
import { CoursEntity } from './cours.entity';

export class InscriptionEntity {
    id: number | undefined;
    user?: UserEntity | undefined;
    role?: RoleEntity | undefined;
    classe?: CoursEntity | undefined;
}
