import { DropdownModule } from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { AllAnimeComponent } from './pages/all-anime/all-anime.component';
import { HomeComponent } from './pages/home/home.component';
import { FilterComponent } from './pages/filter/filter.component';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    AllAnimeComponent,
    HomeComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    FormsModule,
    AutoCompleteModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
