

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAnimeComponent } from './pages/all-anime/all-anime.component';
import { FilterComponent } from './pages/filter/filter.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent
},
{path:'all',component:AllAnimeComponent
},
{path:'filter',component:FilterComponent},
{path:'filter/:id',component:FilterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
