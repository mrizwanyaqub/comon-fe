import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from '@angular/flex-layout';

import {SlideshowModule} from 'ng-simple-slideshow';

import { ColorComponent, ColorsComponent, ProductComponent, LoaderComponent } from "./components";

@NgModule({
  declarations: [
    ColorComponent,
    ColorsComponent,
    ProductComponent,
    LoaderComponent
  ],
  exports: [
    ColorComponent,
    ColorsComponent,
    ProductComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    SlideshowModule
  ]
})
export class AtWidgetsModule {
}
