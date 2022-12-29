import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { CentsToDollarsPipe } from './cents-to-dollars.pipe';
import { SafeHtmlPipe } from './safe-html.pipe';
import { ZenConfirmModal } from './zen-confirm/zen-confirm-modal.service';
import { ZenConfirmComponent } from './zen-confirm/zen-confirm.component';
import { ZenLoadingComponent } from './zen-loading/zen-loading.component';
import { ZenSnackbarError } from './zen-snackbar-error/zen-snackbar-error.service';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
  declarations: [ZenConfirmComponent, ZenLoadingComponent, CentsToDollarsPipe, SafeHtmlPipe],
  exports: [ZenConfirmComponent, ZenLoadingComponent, CentsToDollarsPipe, SafeHtmlPipe],
  providers: [ZenConfirmModal, ZenSnackbarError],
})
export class ZenComponentsModule {}
