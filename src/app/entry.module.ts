import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {RouterModule, Routes} from '@angular/router';
import {TABLE_PAGE} from "@solenopsys/ui-templates";
import {FormsModule} from "@angular/forms";


const routes: Routes = [
  TABLE_PAGE(':table'),
];

export const PROVIDERS_CONF = [
]

export const IMPORTS_CONF = [
  BrowserModule,
  RouterModule.forChild(routes),
  FormsModule,
]

@NgModule({
  declarations: [],
  imports: [
    ...IMPORTS_CONF
  ],
  providers: [...PROVIDERS_CONF],
  
})
export class RemoteEntryModule {}
