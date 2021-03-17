import { UserEntity } from './user.entity';
import { RoleEntity } from './role.entity';

export class InscriptionEntity {
    user: UserEntity | undefined;
    role: RoleEntity | undefined;
}
