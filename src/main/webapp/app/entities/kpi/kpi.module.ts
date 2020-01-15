import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { FrontappliSharedModule } from 'app/shared';
import {
  KpiComponent,
  KpiDetailComponent,
  KpiUpdateComponent,
  KpiDeletePopupComponent,
  KpiDeleteDialogComponent,
  kpiRoute,
  kpiPopupRoute
} from './';

const ENTITY_STATES = [...kpiRoute, ...kpiPopupRoute];

@NgModule({
  imports: [FrontappliSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [KpiComponent, KpiDetailComponent, KpiUpdateComponent, KpiDeleteDialogComponent, KpiDeletePopupComponent],
  entryComponents: [KpiComponent, KpiUpdateComponent, KpiDeleteDialogComponent, KpiDeletePopupComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FrontappliKpiModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
