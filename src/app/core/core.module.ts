import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SliderbarComponent } from './sliderbar/sliderbar.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module'
import {MatIconRegistry} from '@angular/material/icon'
import {DomSanitizer} from '@angular/platform-browser'
import {loadSvgReource}  from '../util/svg.util'
@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    HeaderComponent,
    SliderbarComponent,
    FooterComponent,
  ],
  exports: [
    HeaderComponent,
    SliderbarComponent,
    FooterComponent
  ]
})
export class CoreModule { 
  constructor(
    ir:MatIconRegistry,ds:DomSanitizer
  ){
    loadSvgReource(ir,ds)
  }
}
