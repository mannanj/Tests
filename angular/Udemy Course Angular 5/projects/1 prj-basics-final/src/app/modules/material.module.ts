import { NgModule } from '@angular/core';

// Material
import {
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatSelectModule,
    MatDialogModule,
    MatRadioModule
} from '@angular/material';

import { MatExpansionModule } from '@angular/material/expansion';

// Others
import { CdkTableModule } from '@angular/cdk/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';

@NgModule({
    imports: [
        CdkTableModule,
        MatTableModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatSortModule,
        MatSelectModule,
        MatDialogModule,
        MatRadioModule,
        MatListModule,
        MatExpansionModule
    ],
    exports: [
        CdkTableModule,
        MatTableModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatSortModule,
        MatSelectModule,
        MatDialogModule,
        MatRadioModule,
        MatListModule,
        MatExpansionModule
    ]
})
export class MaterialModule { }
