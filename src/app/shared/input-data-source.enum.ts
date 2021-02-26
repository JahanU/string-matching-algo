export enum InputDataSourceEnum {
    // 0
    INPUT_STACK = '',
    INPUT_NEEDLE = '',

    // 1
    DNA_STACK = `ATGTTTCGCATCACCAACATTGAGTTTCTTCCCGAATACCGACAAAAGGAGTCCAGGGAA
TTTCTTTCAGTGTCACGGACTGTGCAGCAAGTGATAAACCTGGTTTATACAACATCTGCC
TTCTCCAAATTTTATGAGCAGTCTGTTGTTGCAGATGTCAGCAACAACAAAGGCGGCCTC
CTTGTCCACTTTTGGATTGTTTTTGTCATGCCACGTGCCAAAGGCCACATCTTCTGTGAA
GACTGTGTTGCCGCCATCTTGAAGGACTCCATCCAGACAAGCATCATAAACCGGACCTCT
GTGGGGAGCTTGCAGGGACTGGCTGTGGACATGGACTCTGTGGTACTAAATGAAGTCCTG
GGGCTGACTCTCATTGTCTGGATTGACTGA`,
    DNA_NEEDLE = 'ATG',

    // 2
    STORY_STACK = `
"Well, Prince, so Genoa and Lucca are now just family estates of the
Buonapartes. But I warn you, if you don't tell me that this means war,
if you still try to defend the infamies and horrors perpetrated by
that Antichrist- I really believe he is Antichrist- I will have
nothing more to do with you and you are no longer my friend, no longer
my 'faithful slave,' as you call yourself! But how do you do? I see
I have frightened you- sit down and tell me all the news."
    `,
    STORY_NEEDLE = 'Antichrist',

    // 3
    BIBLE_STACK = `
In the beginning God created the heaven and the earth. 
And the earth was without form, and void; 
and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters. 
And God said, Let there be light: and there was light. 
And God saw the light, that it was good: and God divided the light from the darkness. 
And God called the light Day, and the darkness he called Night. And the evening and the morning were the first day. 
And God said, Let there be a firmament in the midst of the waters, and let it divide the waters from the waters. 
And God made the firmament, and divided the waters which were under the firmament from the waters which were above the firmament: and it was so. 
And God called the firmament Heaven. And the evening and the morning were the second day.`,
    BIBLE_NEEDLE = 'God',

    // 4
    STOCKS_STACK = `
AAPL	APPLE COMPUTER INC 	NASDAQ
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
`,
    STOCKS_NEEDLE = 'NASDAQ',
 
    // 5
    MOVIES_STACK = `
Ali: An American Hero (2000)/Boen, Earl/Cassidy, Martin/Coddette, Marc/Curtis-Hall,
Vondie/Danon, Leslie/Doty, David/Ernest, King/Fargas, Antonio/Ferrero, Martin/Gerber, 
Jay/Gethers, Amani/Kain, Khalil/Lala, Joe/Marotta, Rich/Meeks, Aaron/Morton, Joe/Pugsley, 
Don/Ramsey, David/Smallwood, Vivian/Smith, Ebonie/Stevens, Joy/Ward, James Kevin/Washington,
Jascha/Williams III, Clarence/Williams III, Joe Almost a Heroine (1916)/Melville, Rose
Almost Heroes (1998)/Aguilar, George/Anderson, Scott/Andersson, Kris/Arquette, Lewis/Barbuscia, 
Lisa/Barrera, David/Camp, Hamilton/Clemenson, Christian/Cover, Franklin/Cranshaw, Patrick/Cruz,
`,
    MOVIES_NEEDLE = 'Hero'
}
