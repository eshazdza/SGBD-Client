import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EnumService } from './services/enum.service';
import { ArrayLengthPipe } from './pipes/arrayLength.pipe';
import { IsArrayPipe } from './pipes/isArray.pipe';
import { TypeOfPipe } from './pipes/typeof.pipe';
import { StorageService } from './services/storage.service';

const services = [
    EnumService,
    StorageService,
];

const components = [
    ArrayLengthPipe,
    IsArrayPipe,
    TypeOfPipe,
];

@NgModule({
    declarations: [
        components
    ],
    imports: [
        RouterModule,
        CommonModule,
    ],
    exports: [
        ...components,
        RouterModule,
        CommonModule,
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
