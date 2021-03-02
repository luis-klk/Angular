import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CiclosComponent } from './components/ciclos/ciclos.component';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { RepetidoPipe } from './pipes/repetido.pipe';
import { DetallecicloComponent } from './components/detalleciclo/detalleciclo.component';
import { AsignaturaComponent } from './components/asignatura/asignatura.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    CiclosComponent,
    AsignaturasComponent,
    RepetidoPipe,
    DetallecicloComponent,
    AsignaturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
