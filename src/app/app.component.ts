import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'visualising String Matching Algorithms';

  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'author', content: 'Jahan Ulhaque, Jahanu, Jahan, Ulhaque' },
      {name: 'keywords', content: 'visualising String Matching Algorithms, Angular, visualising, visualizing, string, matching, algorithms, KMP, Knuth-morris-pratt, Naive, Brute force, Rabin-Karp, Boyer-Moore, searching'},
      {name: 'description', content: 'Visualising string matching algorithms, such as Naive Search/Brute Force, KMP, DFA, Rabin-Karp, and Boyer-Moore on a wide vareity of datesets '},
      {name: 'site_name', content: 'visualising String Matching Algorithms' },

      {name: 'og:author', content: 'Jahan Ulhaque, Jahanu, Jahan, Ulhaque' },
      {name: 'og:keywords', content: 'visualising String Matching Algorithms, Angular, visualising, visualizing, string, matching, algorithms, KMP, Knuth-morris-pratt, Naive, Brute force, Rabin-Karp, Boyer-Moore, searching'},
      {name: 'og:description', content: 'Visualising string matching algorithms, such as Naive Search/Brute Force, KMP, DFA, Rabin-Karp, and Boyer-Moore on a wide vareity of datesets '},
      {name: 'og:site_name', content: 'visualising String Matching Algorithms' },

    ]);
    
   }

}

