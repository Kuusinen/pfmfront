import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path:'categories', component: CategoriesComponent},
  {path:'homepage', component: HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
