import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArrayUnitComponent } from './components/array-unit/array-unit.component';
import { EventEmitorsComponent } from './components/event-emitors/event-emitors.component';
import { SetupTearDownComponent } from './components/setup-tear-down/setup-tear-down.component';

const routes: Routes = [
  {path: 'array-unit', component:ArrayUnitComponent},
  {path: 'setup-down', component:SetupTearDownComponent},
  {path: 'event-emitor', component:EventEmitorsComponent},    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
