import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { FrontappliSharedModule } from 'app/shared';
import {
  BtsComponent,
  BtsDetailComponent,
  BtsUpdateComponent,
  BtsDeletePopupComponent,
  BtsDeleteDialogComponent,
  btsRoute,
  btsPopupRoute
} from './';

const ENTITY_STATES = [...btsRoute, ...btsPopupRoute];

@NgModule({
  imports: [FrontappliSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [BtsComponent, BtsDetailComponent, BtsUpdateComponent, BtsDeleteDialogComponent, BtsDeletePopupComponent],
  entryComponents: [BtsComponent, BtsUpdateComponent, BtsDeleteDialogComponent, BtsDeletePopupComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FrontappliBtsModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
