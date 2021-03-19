import { InscriptionEntity } from './inscription.entity';
import { TestEntity } from './test.entity';

export class TestResultEntity {
    id: string | undefined;
    inscription: InscriptionEntity | undefined;
    points: string | undefined;
    present: boolean | undefined;
    test: TestEntity | undefined;
}
