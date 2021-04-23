import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Visualizing String Matching Algorithms';

  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'author', content: 'Jahan Ulhaque, Jahanu, Jahan, Ulhaque' },
      {name: 'keywords', content: 'visualizing String Matching Algorithms, Angular, visualizing, visualizing, string, matching, algorithms, KMP, Knuth-morris-pratt, Naive, Brute force, Rabin-Karp, Boyer-Moore, searching'},
      {name: 'description', content: 'Visualizing string matching algorithms, such as Naive Search/Brute Force, KMP, DFA, Rabin-Karp, and Boyer-Moore on a wide vareity of datesets '},
      {name: 'site_name', content: 'visualizing String Matching Algorithms' },

      {name: 'og:author', content: 'Jahan Ulhaque, Jahanu, Jahan, Ulhaque' },
      {name: 'og:keywords', content: 'visualizing String Matching Algorithms, Angular, visualizing, visualizing, string, matching, algorithms, KMP, Knuth-morris-pratt, Naive, Brute force, Rabin-Karp, Boyer-Moore, searching'},
      {name: 'og:description', content: 'visualizing string matching algorithms, such as Naive Search/Brute Force, KMP, DFA, Rabin-Karp, and Boyer-Moore on a wide vareity of datesets '},
      {name: 'og:site_name', content: 'visualizing String Matching Algorithms' },

    ]);
    
   }

}

