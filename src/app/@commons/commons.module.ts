import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EnumService } from './services/enum.service';
import { ArrayLengthPipe } from './pipes/arrayLength.pipe';
import { IsArrayPipe } from './pipes/isArray.pipe';
import { TypeOfPipe } from './pipes/typeof.pipe';
import { StorageService } from './services/storage.service';
import { NavbarComponent } from './ui-components/navbar/navbar.component';
import { SidenavComponent } from './ui-components/sidenav/sidenav.component';
import { AuthService } from './services/auth.service';
import { FormService } from './ui-components/form/service/form.service';
import { FormComponent } from './ui-components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExcludeSubmitPipePipe } from './ui-components/form/pipes/excludeSubmitPipe.pipe';
import { OnlySubmitPipe } from './ui-components/form/pipes/onlySubmit.pipe';
import { FormInputComponent } from './ui-components/form/form-input/form-input.component';
import { FormReviewComponent } from './ui-components/form/form-review/form-review.component';

const services = [
    EnumService,
    StorageService,
    AuthService,
    FormService,
];

const components = [
    ArrayLengthPipe,
    IsArrayPipe,
    TypeOfPipe,
    NavbarComponent,
    SidenavComponent,
    FormComponent,
    FormInputComponent,
    FormReviewComponent,
    ExcludeSubmitPipePipe,
    OnlySubmitPipe,
];

@NgModule({
    declarations: [
        components
    ],
    imports: [
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    exports: [
        ...components,
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        FormComponent
    ]
})
export class CommonsModule {
    public static forRoot(): ModuleWithProviders<any> {
        return {
            ngModule: CommonsModule,
            providers: [
                ...services,
            ]
        };
    }
}
