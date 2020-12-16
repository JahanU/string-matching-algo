import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlgorithmVisualizerComponent } from './algorithm-visualizer/algorithm-visualizer.component';
import { MatSelectModule } from '@angular/material/select';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MatSliderModule } from '@angular/material/slider';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { NaiveComponent } from './algorithm-visualizer/naive/naive.component';

const routes: Routes = [
  { path: 'algorithm', component: AlgorithmVisualizerComponent },
  { path: '', redirectTo: '/algorithm', pathMatch: 'full' },
]

@NgModule({
  declarations: [AppComponent, AlgorithmVisualizerComponent, NaiveComponent],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatSliderModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
