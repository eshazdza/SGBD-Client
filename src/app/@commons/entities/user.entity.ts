import { InscriptionEntity } from './inscription.entity';

export class UserEntity {
    id: string | null | undefined;
    firstname: string | null | undefined;
    lastname: string | null | undefined;
    email: string | null | undefined;
    password: string | null | undefined;
    confirmPassword: string | null | undefined;
    inscriptionList: InscriptionEntity[] | undefined;
    user: any;
    role: any;
}
