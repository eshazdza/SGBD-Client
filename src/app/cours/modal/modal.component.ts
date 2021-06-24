import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TestEntity } from '../../@commons/entities/test.entity';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { CoursService } from '../../@commons/services/cours.service';
import { CoursEntity } from "../../@commons/entities/cours.entity";
import { TestService } from "../../@commons/services/test.service";

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

    @Input() courId: string | undefined;

    @Output() interroSave = new EventEmitter<TestEntity>();

    formGroup: FormGroup | undefined;
    cours: CoursEntity | undefined;

    constructor(
        private activeModal: NgbActiveModal,
        private coursService: CoursService,
        private testService: TestService,
    ) {
    }

    ngOnInit(): void {
        this.formGroup = new FormGroup({
            interroDateControle: new FormControl('')
        });
        if (this.courId) {
            from(this.coursService.getById(this.courId)).subscribe((cours) => {
                    if (cours) {
                        this.cours = cours;
                    }
                }
            );
        }
    }

    onCloseClicked(): void {
        this.activeModal.close(status);
    }

    onSaveClicked(): void {
        const newInterro = new TestEntity();
        newInterro.classe = {uid: this.courId};
        newInterro.date = new Date(this.formGroup?.get('interroDateControle')?.value);
        console.log(newInterro);
        from(this.testService.post(newInterro)).subscribe((interro) => {
            console.log(interro);
        });
        this.activeModal.close();
    }

}
