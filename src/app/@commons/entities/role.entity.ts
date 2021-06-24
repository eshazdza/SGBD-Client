import { RoleType } from '../enums/roleType';

export class RoleEntity {
    id: string | undefined;
    description: string | undefined;
    roleType: RoleType | undefined;
}
