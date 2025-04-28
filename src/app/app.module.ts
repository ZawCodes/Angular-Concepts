import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignalsComponentComponent } from './signals-component/signals-component.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';

@NgModule({
  declarations: [
    AppComponent,
    SignalsComponentComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent,
    ViewChildComponent,
    ContentChildComponent,
    DependencyInjectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
