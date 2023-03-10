import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {UIControlsModule} from '@solenopsys/ui-controls';
import {DeclaredService} from "@solenopsys/ui-utils";
import {CodeAreaComponent} from "./code-area/code-area.component";
import {FormsModule} from "@angular/forms";
import {MonacoEditorModule, NgxMonacoEditorConfig} from "ngx-monaco-editor-v2";

const components:any = [
  CodeAreaComponent
];
export function onMonacoLoad() {
  console.log('MONACO START');
 // console.log('MONACO OK', (window as any).monaco);
  // (window as any).monaco.languages.typescript.typescriptDefaults.addExtraLib('export function drawPins() {\n' +
  //     '    console.log(\'OK\');\n' +
  //     '}\n');
}

const monacoConfig: NgxMonacoEditorConfig = {
  baseUrl: 'assets',
  defaultOptions: {scrollBeyondLastLine: false},
  onMonacoLoad
};


@NgModule({
  declarations: components,
  imports: [

    CommonModule,
    RouterModule,
    UIControlsModule,
    FormsModule,
    MonacoEditorModule.forRoot(monacoConfig),
  ],
  providers: [],
  exports: [
  ]
})
export class UICodeEditorModule {
  constructor(private ds: DeclaredService) {
    ds.addComps("@solenopsys/ui-editor-code", components)
  }
}
