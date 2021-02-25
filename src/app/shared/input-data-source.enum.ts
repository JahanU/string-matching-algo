export enum InputDataSourceEnum {
    // 1
    DNA = `
ATGTTTCGCATCACCAACATTGAGTTTCTTCCCGAATACCGACAAAAGGAGTCCAGGGAA
TTTCTTTCAGTGTCACGGACTGTGCAGCAAGTGATAAACCTGGTTTATACAACATCTGCC
TTCTCCAAATTTTATGAGCAGTCTGTTGTTGCAGATGTCAGCAACAACAAAGGCGGCCTC
CTTGTCCACTTTTGGATTGTTTTTGTCATGCCACGTGCCAAAGGCCACATCTTCTGTGAA
GACTGTGTTGCCGCCATCTTGAAGGACTCCATCCAGACAAGCATCATAAACCGGACCTCT
GTGGGGAGCTTGCAGGGACTGGCTGTGGACATGGACTCTGTGGTACTAAATGAAGTCCTG
GGGCTGACTCTCATTGTCTGGATTGACTGA`,
    DNA_NEEDLE = 'ATG',

    // 
    //
    // 2
    STORY_NEEDLE = 'Anna',
    STORY = `
"Well, Prince, so Genoa and Lucca are now just family estates of the
Buonapartes. But I warn you, if you don't tell me that this means war,
if you still try to defend the infamies and horrors perpetrated by
that Antichrist- I really believe he is Antichrist- I will have
nothing more to do with you and you are no longer my friend, no longer
my 'faithful slave,' as you call yourself! But how do you do? I see
I have frightened you- sit down and tell me all the news."

It was in July, 1805, and the speaker was the well-known Anna
Pavlovna Scherer, maid of honor and favorite of the Empress Marya
Fedorovna. With these words she greeted Prince Vasili Kuragin, a man
of high rank and importance, who was the first to arrive at her
reception. Anna Pavlovna had had a cough for some days. She was, as
she said, suffering from la grippe; grippe being then a new word in
St. Petersburg, used only by the elite.
    `,
    //
    //
    // 3
    BIBLE_NEEDLE = 'God',
    BIBLE = `
In the beginning God created the heaven and the earth. And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters. 
And God said, Let there be light: and there was light. 
And God saw the light, that it was good: and God divided the light from the darkness. 
And God called the light Day, and the darkness he called Night. And the evening and the morning were the first day. 
And God said, Let there be a firmament in the midst of the waters, and let it divide the waters from the waters. 
And God made the firmament, and divided the waters which were under the firmament from the waters which were above the firmament: and it was so. 
And God called the firmament Heaven. And the evening and the morning were the second day. 
And God said, Let the waters under the heaven be gathered together unto one place, and let the dry land appear: and it was so. 
And God called the dry land Earth; and the gathering together of the waters called he Seas: and God saw that it was good. 
And God said, Let the earth bring forth grass, the herb yielding seed, and the fruit tree yielding fruit after his kind, whose seed is in itself, upon the earth: and it was so. 
And the earth brought forth grass, and herb yielding seed after his kind, and the tree yielding fruit, whose seed was in itself, after his kind: and God saw that it was good. 
And the evening and the morning were the third day. 
And God said, Let there be lights in the firmament of the heaven to divide the day from the night; and let them be for signs, and for seasons, and for days, and years: 
And let them be for lights in the firmament of the heaven to give light upon the earth: and it was so. 
And God made two great lights; the greater light to rule the day, and the lesser light to rule the night: he made the stars also. 
And God set them in the firmament of the heaven to give light upon the earth, 
And to rule over the day and over the night, and to divide the light from the darkness: and God saw that it was good. 
And the evening and the morning were the fourth day. 
And God said, Let the waters bring forth abundantly the moving creature that hath life, and fowl that may fly above the earth in the open firmament of heaven. 
And God created great whales, and every living creature that moveth, which the waters brought forth abundantly, after their kind, and every winged fowl after his kind: and God saw that it was good. 
    `,
    // 
    // 
    // 4
    STOCKS = `
AAPL	APPLE COMPUTER INC 	NASDAQ
AAPTF	ANGLO AMERICAN PLATI 	BB
AAPTY	ANGLO AMERICAN PLATI 	BB
AAPXX	AMERICAN AADVANTAGE MONEY MARKE 	NASDAQ
AAR	AMR CORP 7.875 PINES 	NYSE
AARBX	AIM REAL ESTATE FD CL B SHS 	NASDAQ
AARW	AARO BROADBND WRLSS COMM 	BB
AASAY	APASCO SA DE CV A SH 	BB
AASBX	AMERICAN AADVANTAGE SHORT-TERM  	NASDAQ
AASCX	AAL MID CAP STOCK FUND 	NASDAQ
AASGF	APASCO SA DE CV SHS 	BB
AASI	ADVANCED AERO&STRUC CL A 	BB
AASIU	ADVANCED AERO & STRUC UN 	BB
AASIW	ADVANCED AERO & STRUC WT 	BB
AASIZ	ADVANCED AERO & STRU WTB 	BB
AASMX	AAL SMALL CAP STOCK FUND (THE) 	NASDAQ
AASP	ALL-AMERICAN SPORTPK INC 	BB
AASPX	AMERICAN AADVANTAGE S&P INDEX F 	NASDAQ
AASR	ASCENT ASSURANCE 	BB
AASRW	ASCENT ASRNCE WTS04 	BB
AASTF	ALSTOM SA 	BB
AASUF	ASATSU DK INC ORD 	BB
AASVX	AMERICAN AADVANTAGE SMALL CAP V 	NASDAQ
AASXX	AM SKANDIA ADVISOR FDS INC ASAF 	NASDAQ
`,
    STOCKS_NEEDLE = 'NASDAQ',
    // 
    // 
    // 5
    MOVIE_HEROES = `
Ali: An American Hero (2000)/Boen, Earl/Cassidy, Martin/Coddette, Marc/Curtis-Hall, Vondie/Danon, Leslie/Doty, David/Ernest, King/Fargas, Antonio/Ferrero, Martin/Gerber, Jay/Gethers, Amani/Kain, Khalil/Lala, Joe/Marotta, Rich/Meeks, Aaron/Morton, Joe/Pugsley, Don/Ramsey, David/Smallwood, Vivian/Smith, Ebonie/Stevens, Joy/Ward, James Kevin/Washington, Jascha/Williams III, Clarence/Williams III, Joe
Almost a Heroine (1916)/Melville, Rose
Almost Heroes (1998)/Aguilar, George/Anderson, Scott/Andersson, Kris/Arquette, Lewis/Barbuscia, Lisa/Barrera, David/Camp, Hamilton/Clemenson, Christian/Cover, Franklin/Cranshaw, Patrick/Cruz, Gregory Norman/Daydoge, Billy/DeKay, Tim/Del Sherman, Barry/Dunn, Kevin/Farley, Chris/Farley, John/Hart, Gordon/Hinkley, Brent/Hopkins, T. Dan/Joss, Jonathan/Lacopo, Jay/Lake, Don/Levy, Eugene/Lindgren, Axel/Packer, David/Passer, Daniel/Perry, Matthew/Porter, Steven M./Salsedo, Frank/Sellon-Wright, Keith/Shearer, Harry/Tittor, Robert/Williamson, Scott/Woodbine, Bokeem
America: A Tribute to Heroes (2001)/Ali, Muhammad/Berry, Halle/Bon Jovi, Jon/Bono/Borland, Wes/Brenneman, Amy/Campbell, Mike/Carey, Mariah/Carrey, Jim/Clayton, Adam/Clooney, George/Crow, Sheryl/Cruise, Tom/Cruz, Penélope/Cusack, John/De Niro, Robert/DeVito, Danny/Del Toro, Benicio/Diaz, Cameron/Dion, Céline/Durst, Fred/Eastwood, Clint/Epstein, Howie/Field, Sally/Flockhart, Calista/Franz, Dennis/Garcia, Andy/Goldberg, Whoopi/Gooding Jr., Cuba/Grammer, Kelsey/Hanks, Tom/Hawn, Goldie/Hayek, Salma/Hill, Faith/Iglesias, Enrique/Jagger, Mick/Jean, Wyclef/Joel, Billy/Kaczmarek, Jane/Keaton, Michael/Keys, Alicia/Liu, Lucy/Matthews, Dave/McCready, Mike/McEntire, Reba/Mullen Jr., Larry/Myers, Mike/Nelson, Willie/Nicholson, Jack/O'Brien, Conan/Pacino, Al/Parker, Sarah Jessica/Petty, Tom/Pitt, Brad/Roberts, Julia/Rock, Chris/Romano, Ray/Russell, Kurt/Ryan, Meg/Rzeznik, Johnny/Sambora, Richie/Sandler, Adam/Shaffer, Paul/Simon, Paul/Smith, Will/Smits, Jimmy/Springsteen, Bruce/Stallone, Sylvester/Stiller, Ben/Sting/Taylor, Christine/The Edge/Vedder, Eddie/Wahlberg, Mark/Ward, Sela/Williams, Robin/Wonder, Stevie/Woods, James/Young, Neil
American Hero (1997)/Thomas, Patrick
American Hero: The Michael Jordan Story (1998)/Nowack, Johan-Carl
Andy Plays Hero (1914)/Clark, Andy
`,
MOVIE_NEEDLE = 'Hero'
}
