import {XsModule, XsModuleType} from "@solenopsys/fl-globals";
import {RemoteEntryModule} from "./app/entry.module";

export * from './lib/ui-editor.module';


export const ENTRY:XsModule<RemoteEntryModule> ={
    module: RemoteEntryModule,
    type: XsModuleType.PLATFORM,
};
