import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {UIControlsModule} from '@solenopsys/uimatrix-controls';
import {DeclaredService} from "@solenopsys/uimatrix-utils";

const components:any = [

];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    RouterModule,
    UIControlsModule,
  ],
  providers: [],
  exports: [
  ]
})
export class UIEditorCodeModule {
  constructor(private ds: DeclaredService) {
    ds.addComps("@solenopsys/uimatrix-editor-code", components)
  }
}
