import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
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
import { DFAComponent } from './algorithm-visualizer/dfa/dfa.component';
import { BMComponent } from './algorithm-visualizer/bm/bm.component';
import { AllAlgorithmsComponent } from './algorithm-visualizer/all-algorithms/all-algorithms.component';
import { RkComponent } from './algorithm-visualizer/rk/rk.component';
import { KmpComponent } from './algorithm-visualizer/kmp/kmp.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

const routes: Routes = [
  { path: '', component: AlgorithmVisualizerComponent },
  // { path: '', redirectTo: '/algorithm', pathMatch: 'full' },
]

@NgModule({
  declarations: [AppComponent, AlgorithmVisualizerComponent, NaiveComponent, DFAComponent, BMComponent, AllAlgorithmsComponent, RkComponent, KmpComponent],
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
    MatCardModule,
    HighlightModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
        }
      }
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
