export function getNames(){
    return {
    "word": {
        "patterns": [
            "2:{ept}",
            // one-syllable words
            "3:{word.1sylword}",
            // two-syllable words
            "28:{word.2sylword}",
            "2:{word.3sylword}"
        ],
        "1sylword": [
            "{ept.initialfinalsyl}"
        ],
        "2sylword": [
            "{ept.initialsyl}{ept.finalsyllable}"
        ],
        "3sylword":[
            "{ept.initialsyl}{ept.syllable}{ept.finalsyllable}",
            "{ept.initialsylcoda}{ept.innersylvc}{ept.finalsyllable}",
            "{ept.initialsylnocoda}{ept.innersylcvc}{ept.finalsyllable}",
            "{ept.initialsylnocoda}{ept.innersylcv}{ept.finalsyllable}",
            "{ept.initialsylcoda}{ept.nucleus}{ept.finalsyllable}"
        ],
        "1or2sylword": [
            "{ept.initialsyl}{ept.finalsyllable}",
            "{ept.initialfinalsyl}"
        ]
    },
    "ept": { // English Phonotactics
        "patterns": [
            "2:{ept.initialfinalsyl}",
            "28:{ept.initialsyl}{ept.finalsyllable}",
            "1:{ept.initialsyl}{ept.syllable}{ept.finalsyllable}|{ept.initialsylcoda}{ept.innersylvc}{ept.finalsyllable}|{ept.initialsylnocoda}{ept.innersylcvc}{ept.finalsyllable}|{ept.initialsylnocoda}{ept.innersylcv}{ept.finalsyllable}|{ept.initialsylcoda}{ept.nucleus}{ept.finalsyllable}",
            "1:{ept.initialsyl}{ept.syllable}'{ept.finalsyllable}|{ept.initialsyl}'{ept.syllable}{ept.finalsyllable}|{ept.initialsyl}'{ept.syllable}'{ept.finalsyllable}|{ept.initialsyl}-{ept.syllable} {ept.finalsyllable}|{ept.initialsyl} {ept.syllable}-{ept.finalsyllable}|{ept.initialsyl}{ept.syllable}{ept.finalsyllable}|{ept.initialsyl} {ept.syllable}{ept.finalsyllable}|{ept.initialsyl}{ept.syllable} {ept.finalsyllable}|{ept.initialsyl} {ept.syllable} {ept.finalsyllable}|{ept.initialsyl}-{ept.syllable}-{ept.finalsyllable}"
        ],
        "initialfinalsyl": [
            "2:{ept.onset}{ept.nucleus}{ept.finalcoda}",
            "2:{ept.initialnucleus}{ept.finalcoda}",
            "{ept.onset}{ept.nucleus}"
        ],
        "initialsylcoda":[
            "{ept.onset}{ept.nucleus}{ept.coda}",
            "{ept.initialnucleus}{ept.coda}"
        ],
        "initialsylnocoda":[
            "{ept.onset}{ept.nucleus}"
        ],
        "initialsyl": [
            "4:{ept.initialsylcoda}",
            "{ept.initialsylnocoda}"
        ],
        "innersylcv":["{ept.noninitialonset}{ept.nucleus}"],
        "innersylcvc":["{ept.noninitialonset}{ept.nucleus}{ept.coda}"],
        "innersylvc":["{ept.nucleus}{ept.coda}"],
        "syllable": [
            "4:{ept.innersylcv}",
            "10:{ept.nucleus}",
            "1:{ept.innersylcvc}",
            "1:{ept.innersylvc}"
        ],
        "finalsyllable": [
            "3:{ept.nucleus}{ept.finalcoda}",
            "{ept.noninitialonset}{ept.nucleus}{ept.finalcoda}",
            "{ept.noninitialonset}{ept.nucleus}"
        ],
        "onset": [
            "178:{ept.initialconsonant}",
            "50:{ept.initialplosiveplusapproximant}", //{ept.plosive}{ept.approximantnoty}",
            "7:qu|qu",
            "3:kw",
            "10:{ept.voicelessfricativewithouts}{ept.approximantnoty}",
            "3:sl",
            "2:sw",
            "1:vw",
            "5:s{ept.fortisplosive}",
            "5:s{ept.nasalnotng}",
            "2:s{ept.fsound}",
            "2:s{ept.fortisplosive}r",
            "1:sp{ept.lateralapproximant}",
            "1:squ|skw",
            "1:squ",
            "s{ept.fortisplosive}w",
            //"5:s{ept.fortisplosive}{ept.approximantnoty}", 
            "sph",
            "1:x"
        ],
        "noninitialonset": [
            "85:{ept.onset}",
            "zh|s|s|j|g|s{ept.voicelessfricativewithouts}" //ž|
        ],
        "nucleus": [
            "{ept.vowelsound}"
        ],
        "initialnucleus": [
            "{ept.initialvowelsound}"
        ],
        "coda": [
            "128:{ept.nasal}|{ept.plosive}|{ept.affricate}|{ept.voicedfricative}|{ept.voicelessfricative}|{ept.lateralapproximant}",
            "1:{ept.lateralapproximant}{ept.plosive}|{ept.lateralapproximant}{ept.affricate}|{ept.lateralapproximant}{ept.voicedfricative|ept.voicelessfricative}",
            "4:{ept.organicnasalplosive}|{ept.organicnasalaffricate}",
            "3:{ept.nasal}{ept.voicelessfricative}|{ept.nasal}{ept.voicedfricativewithoutv}",
            "3:{ept.voicelessfricativewithoutth}{ept.fortisplosive}",
            //"2:fth",
            "4:{ept.twovoicelessstops}",
            "1:{ept.fortisplosive}{ept.voicelessfricative}|x",
            "1:{ept.lateralapproximant}{ept.twovoicelessstops}|{ept.lateralapproximant}{ept.plosive}s|{ept.lateralapproximant}{ept.plosive}z",
            //"3:{ept.organicnasalplosiveplusstop}|{ept.organicnasalplosive}{ept.voicelessfricative}",
            "1:x",
            "1:xt|xt|xt|kst|ckst"
        ],
        "finalcoda": [
            "100:{ept.nasal}|{ept.finalplosive}",
            "34:{ept.finalaffricate}|{ept.finalvoicedfricative}|{ept.finalvoicelessfricative}|{ept.lateralapproximant}",
            "1:{ept.nasal}s|{ept.finalplosive}s|{ept.lateralapproximant}s",
            "3:{ept.lateralapproximant}{ept.finalplosive}|{ept.lateralapproximant}{ept.finalaffricate}|{ept.lateralapproximant}{ept.voicedfricative|ept.voicelessfricative}|{ept.lateralapproximant}{ept.nasalnotng}",
            "1:{ept.lateralapproximant}{ept.finalplosive}s|{ept.lateralapproximant}{ept.nasalnotng}s",
            "4:{ept.organicnasalplosive}|{ept.finalorganicnasalaffricate}",
            "1:{ept.organicnasalplosive}s",
            "3:{ept.nasal}{ept.finalvoicelessfricative}|{ept.nasal}{ept.voicedfricativewithoutv}",
            "3:{ept.voicelessfricativewithoutth}{ept.finalfortisplosive}",
            "1:{ept.voicelessfricativewithoutth}{ept.finalfortisplosive}s",
            // "1:fth","1:fths",
            "4:{ept.twovoicelessstops}",
            "1:{ept.twovoicelessstops}s",
            "1:{ept.finalfortisplosive}{ept.voicelessfricative}|x",
            "1:{ept.lateralapproximant}{ept.twovoicelessstops}|lfth|fth|fths",
            // "1:{ept.lateralapproximant}{ept.twovoicelessstops}s",
            "3:{ept.organicnasalplosiveplusstop}|{ept.organicnasalplosive}{ept.finalvoicelessfricative}",
            "1:{ept.organicnasalplosiveplusstop}s|{ept.organicnasalplosiveplusstop}z",
            "1:x",
            "1:xt|xt|xt|xt|kst|kst|cst"
        ],
        "initialplosiveplusapproximant": [
            "4:pl",
            "4:bl",
            "6:kl|cl",
            "2:gl",
            "6:br",
            "20:tr",
            "12:dr",
            "9:kr|cr",
            "4:gr",
            "6:tw",
            "3:dw",
            "gw",
            "1:kw|ku|cu|qu|qu",
            "1:qu",
            "1:pw"
        ],
        "twovoicelessstops": [
            "pt",
            "kt|ct"
        ],
        "initialconsonant": [
            "9:{ept.nasalnotng}",
            "27:{ept.plosive}",
            "{ept.affricate}",
            "16:{ept.fricative}",
            "14:{ept.approximant}",
            "1:{ept.fricative}|x"
        ],
        "consonant": [
            "10:{ept.nasal}",
            "25:{ept.plosive}",
            "{ept.affricate}",
            "14:{ept.fricative}",
            "12:{ept.approximant}"
        ],
        "nasalnotng": [
            "2:m",
            "7:n"
        ], // excluding ng
        "nasal": [
            "9:{ept.nasalnotng}",
            "ng"
        ],
        "plosive": [
            "10:{ept.fortisplosive}",
            "7:{ept.lenisplosive}"
        ],
        "fortisplosive": [
            "2:p",
            "6:t",
            "2:k",
            "1:k|c"
        ],
        "finalplosive": [
            "10:{ept.finalfortisplosive}",
            "7:{ept.lenisplosive}"
        ],
        "finalfortisplosive": [
            "20:p",
            "60:t",
            "20:k",
            "10:k|ck",
            "2:pp",
            "6:tt",
            "3:cc|kk"
        ],
        "lenisplosive": [
            "2:b",
            "4:d",
            "g"
        ],
        "organicnasalplosiveplusstop": [
            "mpt",
            "nkt|nct",
            "ngt"
        ],
        "organicnasalplosive": [
            "mp",
            "nd",
            "nt",
            "nk|nk|nc"
        ], //mb excluded because you can't end a syllable with it
        "finalorganicnasalaffricate": [
            "nch|nch|nch|ntch",
            "ndge|nge|nge|nge|nj",
            "nsh|nsh|nsh|nche"
        ],
        "organicnasalaffricate": [
            "nch|nch|ntch|nt|nt|nt",
            "nj|nj|ng",
            "nsh|ns|ns"
        ],
        "organicnasalaffricateplosivefricative": [
            "mpt",
            "mps",
            "ndth",
            "nkt|nct", // ngkt
            "nks|nx|nx|nx", // ngkts
            "nkth|nkth|ngth" // ngkth
        ], ///mpt/, /mps/, /ndθ/, /ŋkt/, /ŋks/, /ŋkθ/
        "fricative": [
            "8:{ept.voicelessfricative}",
            "8:{ept.voicedfricative}",
            "h"
        ],
        "voicelessfricativeorv": [
            "v",
            "8:{ept.voicelessfricative}"
        ],
        "voicelessfricativewithouts": [
            "2:{ept.fsound}",
            "th"
        ],
        "voicelessfricativewithoutth": [
            "5:s",
            "sh",
            "2:f"
        ],
        "finalvoicelessfricativewithouts": [
            "2:{ept.finalfsound}",
            "th"
        ],
        "voiclessfricativewithoutf": [
            "5:s",
            "sh",
            "th"
        ],
        "finalvoiclessfricativewithoutf": [
            "4:s",
            "1:ss",
            "sh",
            "th"
        ],
        "voicelessfricative": [
            "2:{ept.voicelessfricativewithouts}",
            "5:s",
            "sh"
        ],
        "finalvoicelessfricative": [
            "2:{ept.finalvoicelessfricativewithouts}",
            "3:s",
            "2:ss",
            "ce",
            "sh"
        ],
        "finalvoicedfricative": [
            "4:ve",
            "5:the",
            "th",
            //"ð",
            "6:s|z|z|ze"
        ],
        "voicedfricativewithoutv": [
            "6:th",
            //"ð",
            "6:s|z",
            "zh" //|ž
        ],
        "voicedfricative": [
            "2:v",
            "6:{ept.voicedfricativewithoutv}"
        ],
        "lateralapproximant": [
            "l"
        ],
        "approximantnoty": [
            "5:{ept.lateralapproximant}",
            "9:r",
            "1:w"
        ], // excluding y
        "approximant": [
            "13:{ept.approximantnoty}",
            "y"
        ],
        "affricate": [
            "ch",
            "j"
        ],
        "finalaffricate": [
            "6:ch|ch|tch",
            "3:dge|ge",
            "2:j",
            "1:jj"
        ],
        "fsound": [
            "18:f",
            "1:ph"
        ],
        "finalfsound": [
            "7:f",
            "1:ff",
            "2:ph"
        ],
        "initialvowelsound": [
            "16:u",
            "u", //"ŭ", // u as in cut - ʌ 10.84%, ʌ / 1.74%
            "20:i", // i as in pit - ɪ 6.28%
            "12:ea|ee",
            "e",//"ē",
            "2:y|ea|ea|ea|ea|ee", // ee as in see - i 3.33%
            "12:e",
            "e",//"ĕ", // e as in dress - ɛ 3.11%
            "12:o",
            //"ô",
            "2:a|o|o|o|o|o|au|aw|a", // o as in cot, au as in caught (cot-caught merger to keep things simple) - ɑ 1.94% ɔ 1.53%
            "14:a",
            //"ă", // a as in cat - æ 2.51%
            "7:er",
            // "ər",
            "er|ur|ur", // er as in cur - ɝ 2.51%
            "6:u|oo",
            "eu|u|u|oo|oo", // oo as in soon - u 1.93%
            "4:ae","2:a",
            //"ā",
            "ey|ay|a|a|a|a|ei", // ei as in lay - eɪ 1.61%
            //"ī",
            "7:i|i|ai",
            "1:y", // ai as in lie - aɪ 1.55%
            "5:o",
            //"ō", // o as in code - oʊ 1.21%
            "ou|ow|ow|ou|au", // ow as in cow - aʊ 0.51%
            "oi|oi|oy", // oi as in coil - ɔɪ 0.10%
            "6:ar",
            //"är",
            "ar|ar|ar", // ar as in car
            "2:or", // or as in lore
            // "ēr",
            "4:ir|ir|ear|eer",
            "1:ier|yr", // eer as in leer
            //"ār",
            "ar|aer|air|ayr|air", // ar as in lair
            // "u̇r",
            "ur|ur|ur|oor|oor|oor|eur" // oor as in lure
        ],
        "vowelsound": [
            "27:u",
            //"ŭ", // u as in cut - ʌ 10.84%, ʌ / 1.74%
            "26:i", // i as in pit - ɪ 6.28%
            "15:i|ie|ea|ee|y",
            //"ē", // ee as in see - i 3.33%
            "13:e",
            //"ĕ", // e as in dress - ɛ 3.11%
            "12:o",
            //"ô",
            "2:a|o|o|o|au|aw|o", // o as in cot, au as in caught (cot-caught merger to keep things simple) - ɑ 1.94% ɔ 1.53%
            "9:a",
            //"ă", // a as in cat - æ 2.51%
            "6:er",
            // "ər",
            "er|ur", // er as in cur - ɝ 2.51%
            "6:u|oo",
            "eu|u|u|oo|oo", // oo as in soon - u 1.93%
            "6:ae", // "ā",
            "ey|ay|a|ei|ai|a", // ei as in lay - eɪ 1.61%
            "4:y",// "ī",
            "4:i|i|ai|i", // ai as in lie - aɪ 1.55%
            "5:o","oe",
            //"ō", // o as in code - oʊ 1.21%
            "ou|ow|au", // ow as in cow - aʊ 0.51%
            "oi", // oi as in coil - ɔɪ 0.10%
            "7:ar", // är as in car
            "3:or", // or as in lore
            "5:ir|ir|ir|ear|eer|ier", // ēr eer as in leer
            "ar|aer|air|air|ayr", // ār ar as in lair
            "ur|ur|ur|oor|oor|oor|eur" // u̇r oor as in lure
        ]
    },
    "human": {
        "patterns": [
            "{human.firstname} {human.lastname}{human.suffix}"
        ],
        "suffix": [
            "1: jr",
            "1: sr",
            "100: "
        ],        
        "firstname": [
            "{system.mythologicalname}",
            "16:{human.malefirstname}",
            "16:{human.femalefirstname}",
            "{human.popularuslastname}"
        ],
        "ftravellername":[
            "{ship.butterfly}",
            "Adela",
            "Adorania",
            "Aella",
            "Afira",
            "Antiama",
            "Anya",
            "Arabella",
            "Arbellatra",
            "Avaraja",
            "Birgitte",
            "Caranda",
            "Cassir",
            "Catharine",
            "Charmian",
            "Ciencia",
            "Deliphine",
            "Elizabeth",
            "Emdiri",
            "Estelle",
            "Fierana",
            "Fiorella",
            "Francine",
            "Ilethian",
            "Imalda",
            "Iolanthe",
            "Iphegenia",
            "Isis",
            "Jacqueline",
            "Karyn",
            "Kirgashii",   
            "Lydia",   
            "2:Marava",
            "Marcia",
            "3:Margaret",
            "Marian",
            "Miraii",
            "Nicholle",
            "Paula",
            "Porfiria",
            "Seldrian",
            "Shiga",
            "Sintentirutho",
            "Susaan",
            "Tukera",
            "Yetrina"
        ],
        "mtravellername":[
            "{ship.butterfly}",
            "Alasdair",
            "Alberich",
            "Aledon",
            "Anedon",
            "Anguistus",
            "Chonadon",
            "3:Cleon",
            "Constantus",
            "Donald",
            "Dray",
            "Dresden",
            "Dulinor",
            "Garmukir",
            "Gavin",
            "George",
            "Glazdon",
            "Gustus",
            "Horvath",
            "Ishuggi",
            "Ivan",
            "Jerome",
            "Joseph",
            "Kieran",
            "Koktso",
            "Lucan",
            "3:Martin",
            "Mazun",
            "Merlin",
            "Nicolai",
            "Norbert",
            "Norris",
            "Olav",
            "Paulo",
            "Raegis",
            "Ramon",
            "Roland",
            "Soegz",
            "Steros",
            "Strephon",
            "Styryx",
            "Tauribi",
            "Tomolin",
            "Tomutov",
            "Tranian",
            "Ushari",
            "Usuti",
            "Varian",
            "Zhakirov"
        ],
        "malefirstname":[
            "48:{human.mtravellername}",
            "Aaron","Abe","Abel","Abraham","Abram","Abriel","Ace","Achilles","Adam","Adan","Addison","Ade","Aden","Adnan","Adonis","Adrian","Adriel","Ahmad","Ahmed","Aidan","Aiden","Ainsley","Ajay","Al","Alain","Alan","Alaric","Alastair","Albany","Albert","Alberto","Albie","Alden","Aldo","Aldric","Aldrin","Alec","Alejandro","Alen","Alesandro","Alex","Alexander","Alexis","Alfie","Alfonse","Alfonso","Alfred","Alfredo","Ali","Alistair","Allan","Allen","Alonzo","Aloysius","Alphonso","Alton","Alvin","Amari","Amir","Amit","Amos","Anand","Anderson","Andre","Andreas","Andres","Andrew","Andy","Angel","Angelo","Angus","Ansel","Anson","Anthony","Anton","Antonio","Antony","Aran","Archer","Archie","Ari","Aristotle","Arjun","Arlo","Arman","Armando","Arnold","Arran","Arrie","Art","Arthur","Arturo","Arun","Arwin","Asa","Asad","Ash","Ashby","Asher","Ashley","Ashton","Ashwin","Aspen","Aston","Aswin","Athan","Atticus","Aubrey","Auden","Audwin","August","Augustus","Austen","Austin","Aven","Avery","Axel","Ayaan","Ayden",
            "Bailey","Barack","Barclay","Barnaby","Barney","Barrett","Barron","Barry","Bart","Bartholomew","Basil","Bastian","Baxter","Bay","Baylor","Bear","Beau","Beckett","Bellamy","Ben","Benedict","Benjamin","Benji","Benjy","Bennett","Bennie","Benny","Benson","Bentley","Bently","Bernard","Bernardo","Bernie","Bert","Bertram","Bev","Bevan","Bill","Billy","Bjorn","Bladen","Blain","Blaine","Blair","Blaise","Blake","Blaze","Blue","Bob","Bobby","Bodie","Bogdan","Boris","Boston","Bowen","Brad","Braden","Bradford","Bradley","Bradwin","Brady","Braeden","Bram","Branden","Brandon","Brantley","Braxton","Bray","Brayan","Brayden","Braydon","Braylon","Breck","Brendan","Brenden","Brendon","Brennan","Brennon","Brent","Brentley","Brenton","Bret","Brett","Brevin","Brevyn","Brian","Brice","Bridie","Brie","Brighton","Brinley","Brock","Brod","Brodie","Brody","Brogan","Bronson","Brooke","Brooks","Bruce","Bruno","Bryan","Bryant","Bryce","Bryden","Brydon","Bryn","Bryon","Bryson","Buck","Buddy","Burt","Burton","Buster","Butch","Byron",
            "Cadby","Cade","Caden","Cael","Caelan","Cai","Caiden","Cain","Caius","Cal","Cale","Caleb","Calhoun","Callan","Callen","Callum","Calvin","Cam","Camden","Cameron","Campbell","Carey","Carl","Carlisle","Carlos","Carlton","Carsen","Carson","Carsten","Carter","Cary","Casey","Cash","Cason","Casper","Cassius","Castiel","Castor","Cathal","Cato","Cavan","Cayden","Caydon","Cayson","Cedric","Cesar","Chad","Chance","Chandler","Channing","Charles","Charley","Charlie","Charlton","Chas","Chase","Chaz","Che","Chesney","Chevy","Chip","Chris","Christian","Christopher","Chryssipus","Chuck","Cian","Ciaran","Cillian","Clancy","Clarence","Clark","Claude","Clay","Clayton","Clement","Cletus","Cliff","Clifford","Clifton","Clint","Clinton","Clive","Clyde","Cody","Cohen","Colby","Cole","Colin","Collin","Colm","Colt","Colton","Conan","Conner","Connor","Conor","Conrad","Constantine","Cooper","Corbin","Corey","Cormac","Cornelius","Cory","Craig","Cristian","Cristobal","Crosby","Cruz","Cullen","Curt","Curtis","Cuthbert","Cyril",
            "Dacey","Daire","Dakota","Dale","Dalen","Dallas","Dalton","Damian","Damien","Damon","Dan","Dana","Dane","Daniel","Danny","Dante","Dara","Daragh","Darcy","Daren","Darian","Darin","Dario","Darius","Darnell","Darragh","Darrel","Darren","Darrin","Darryl","Darryn","Darwin","Dash","Dashawn","Dave","David","Davin","Davion","Davis","Dawson","Dax","Daxon","Daxter","Daxton","Dayton","Deacon","Dean","Deandre","Declan","Deepak","Delbert","Demetrius","Denis","Dennis","Denny","Denver","Denzel","Deon","Derek","Dermot","Derrick","Deshaun","Deshawn","Desmond","Dev","Devin","Devlin","Devon","Devyn","Dewayne","Dewey","Diarmuid","Dick","Dicky","Diego","Digby","Dilan","Dillon","Dimitri","Dinesh","Dino","Dion","Dirk","Django","Dmitri","Dominic","Dominick","Don","Donald","Donnie","Donovan","Dorian","Douglas","Doyle","Drake","Drew","Duane","Dudley","Duke","Duncan","Dustin","Dwayne","Dwight","Dylan",
            "Eamon","Earl","Earnest","Eason","Easton","Ed","Eddie","Eddy","Edgar","Edison","Edmund","Edouard","Edric","Edsel","Eduardo","Edward","Edwardo","Edwin","Efrain","Efren","Egan","Egon","Eli","Elijah","Eliot","Elisha","Ellington","Elliot","Elliott","Ellis","Elmer","Elmo","Elon","Elton","Elvis","Elwyn","Emerson","Emery","Emet","Emil","Emiliano","Emilio","Emlyn","Emmanuel","Emmerson","Emmet","Emmett","Enoch","Enrique","Enzo","Eoghan","Eoin","Epictetus","Epicurus","Eric","Erick","Erik","Ernest","Ernesto","Ernie","Errol","Ervin","Erwin","Esteban","Ethan","Ethen","Euan","Eugene","Eustace","Evan","Evangelos","Evelyn","Ewan","Ezekiel","Ezio","Ezra",
            "Fabian","Faisal","Farley","Febian","Felipe","Felix","Fergal","Fergus","Fernand","Fernando","Fidel","Finbar","Finlay","Finley","Finn","Finnian","Finnigan","Fionn","Fletcher","Florian","Floyd","Flynn","Ford","Forest","Forrest","Foster","Fox","Francesco","Francis","Frank","Frankie","Franklin","Franklyn","Fraser","Fred","Freddie","Freddy","Frederick","Fredrick","Fritz",
            "Gabe","Gabriel","Gael","Gaelan","Gale","Galen","Gannon","Gareth","Garman","Garrett","Garrison","Garry","Garth","Gary","Gaston","Gavin","Gene","Geoff","Geoffrey","George","Geraint","Gerald","Gerard","Gerardo","Germain","Gerry","Gian","Gibson","Gideon","Gil","Gilbert","Gilberto","Giles","Gino","Giorgio","Giovanni","Glen","Glenn","Glyndwr","Glynn","Godfrey","Godric","Godwin","Gonzalo","Gordon","Grady","Graeme","Graham","Granger","Grant","Grayson","Greg","Gregg","Gregor","Gregory","Grey","Greyson","Griffin","Guillermo","Gunnar","Gunner","Gus","Gustav","Gustavo","Guy",
            "Haden","Haiden","Hal","Hamish","Han","Hank","Hans","Harlan","Harley","Harold","Harris","Harrison","Harry","Harvey","Hassan","Hayes","Heath","Hector","Hendrik","Hendrix","Henley","Henri","Henry","Hercules|Herakles","Herman","Heston","Hilary","Holden","Homer","Horace","Horatio","Hubert","Hudson","Hugh","Hugo","Humberto","Humphrey","Hunter","Huw","Hywel",
            "Iain","Ian","Ianto","Ibrahim","Idris","Ieuan","Iggy","Ignacio","Igor","Ike","Imran","Indiana","Inigo","Ira","Irvin","Irving","Irwin","Isaac","Isaiah","Isaias","Ishmael","Isiah","Isidore","Ismael","Israel","Issac","Ivan","Ivor",
            "Jace","Jack","Jackson","Jacob","Jacoby","Jacques","Jaden","Jadon","Jagger","Jago","Jaiden","Jaime","Jak","Jakob","Jalen","Jamal","James","Jameson","Jamison","Jan","Jared","Jaret","Jariel","Jarod","Jarrett","Jarrod","Jarvis","Jase","Jason","Jasper","Javid","Javier","Javon","Jax","Jaxon","Jaxson","Jay","Jayce","Jayden","Jaydon","Jaylen","Jaylin","Jaylon","Jayson","Jeb","Jebediah","Jed","Jedediah","Jediah","Jedidiah","Jeff","Jefferson","Jeffery","Jeffrey","Jeffry","Jensen","Jenson","Jerald","Jeremiah","Jeremy","Jericho","Jermaine","Jerome","Jerry","Jersey","Jesse","Jessie","Jesus","Jethro","Jevan","Jim","Jimmie","Jimmy","Joachim","Joaquin","Jock","Jody","Joe","Joel","Johan","John","Johnathan","Johnathon","Johnnie","Johnny","Jon","Jonah","Jonas","Jonathan","Jonathon","Jonty","Jordan","Jordon","Jordy","Jorge","Jose","Joseph","Josephus","Joshua","Josiah","Joss","Josue","Jovan","Juan","Judas","Jude","Julian","Julio","Julius","Justice","Justin",
            "Kade","Kaden","Kai","Kaiden","Kaine","Kale","Kaleb","Kameron","Kane","Karl","Karson","Karsten","Kash","Kayden","Kayle","Kaylen","Kayson","Kean","Keanu","Keaton","Kedrick","Keegan","Keenan","Keith","Kellan","Kellen","Kellin","Kelly","Kelvin","Ken","Kendall","Kendrick","Kennedy","Kenneth","Kenny","Kent","Kerry","Kevin","Khalid","Khalil","Kian","Kiefer","Kieran","Kieron","Killian","Kim","Kingsley","Kingston","Kip","Kiran","Kirby","Kirk","Kit","Klaus","Klay","Knox","Kobe","Koby","Kolby","Kris","Krish","Kristian","Kristoff","Kristopher","Kurt","Kurtis","Kyan","Kye","Kylar","Kyle","Kylen","Kyrin","Kyron",
            "Lacey","Lachlan","Lake","Lamar","Lamont","Lance","Landen","Landon","Landyn","Lane","Langdon","Larry","Lars","Laurence","Laurie","Layne","Layton","Leaf","Leandro","Lebron","Ledger","Lee","Leigh","Leighton","Leland","Len","Lennie","Lennon","Lennox","Lenny","Leo","Leon","Leonard","Leonardo","Leonel","Leopold","Leroy","Les","Leslie","Lester","Leuan","Lev","Leven","Levi","Levy","Lewis","Lex","Leyton","Liam","Lief","Lincoln","Linden","Link","Linus","Lionel","Llewelyn","Lloyd","Lochlan","Logan","Loki","London","Lonnie","Lorcan","Loren","Lorenzo","Loris","Lou","Louie","Lowell","Luca","Lucas","Lucian","Luciano","Luigi","Luis","Lukas","Luke","Luther","Lyle","Lyndon","Lynn","Lysander",
            "Mack","Maddox","Magnus","Maison","Malachi","Malakai","Malcolm","Malik","Malloy","Manny","Manuel","Marc","Marcel","Marco","Marcos","Marcus","Marik","Mario","Mark","Marley","Marlon","Marquis","Marshall","Martin","Marty","Martyn","Marvin","Mason","Massimo","Mat","Mateo","Mathew","Matt","Matthew","Matthias","Maurice","Mauricio","Max","Maxim","Maximilian","Maximus","Maxwell","Mehdi","Mehtab","Mekhi","Mel","Melvin","Merick","Mervin","Mervyn","Micah","Michael","Micheal","Mick","Mickey","Miguel","Mike","Mikey","Milan","Miles","Miller","Milo","Milton","Misha","Mitch","Mitchell","Mitt","Moe","Mohamed","Mohammad","Mohammed","Moises","Monte","Montgomery","Monty","Mordecai","Morgan","Morris","Moses","Muhammad","Murphy","Murray","Musonius","Myles","Mylo","Myron",
            "Nash","Nasir","Nate","Nath","Nathan","Nathanael","Nathaniel","Neal","Ned","Nehemiah","Neil","Nelson","Nero","Nesbit","Neville","Nevin","Niall","Nicholas","Nick","Nickolas","Nicky","Nico","Nicolas","Nigel","Nihal","Nik","Niklaus","Nikolai","Nikolas","Nile","Nils","Noah","Noe","Noel","Nolan","Norbert","Norman","Nyle",
            "Oakes","Oakley","Octavio","Oisin","Olaf","Oli","Oliver","Ollie","Olly","Omar","Oran","Orlando","Orson","Oscar","Oswald","Otis","Otto","Owain","Owen","Ozzie","Ozzy",
            "Pablo","Paco","Paddy","Padraig","Palmer","Paolo","Parker","Pascal","Pat","Patrick","Paul","Paxton","Payton","Pearce","Pedro","Percy","Perry","Petar","Pete","Peter","Peyton","Phebian","Philip","Philippe","Phillip","Phineas","Phoenix","Pierce","Piers","Pip","Plato","Porter","Poul","Prakash","Preston","Prince","Princeton",
            "Quentin","Quincy","Quinlan","Quinn","Quinton","Quintrell",
            "Rafael","Rafferty","Raheem","Rahul","Raiden","Raj","Rajesh","Ralph","Ram","Ramon","Ramsey","Randal","Randall","Randolph","Randy","Raoul","Raphael","Rashad","Rashan","Rashid","Raul","Ravi","Ray","Raylan","Raymond","Reece","Reed","Reef","Reese","Reggie","Reginald","Rehan","Reid","Remco","Remington","Remy","Ren","Rene","Reuben","Rex","Reynaldo","Reza","Rhett","Rhydian","Rhys","Rian","Ricardo","Rich","Richard","Rick","Rico","Rider","Rik","Riker","Riley","Rio","Riordan","River","Roan","Rob","Robert","Roberto","Robin","Rocco","Rock","Rocky","Rod","Roddy","Roderick","Rodger","Rodney","Rodolfo","Rodrigo","Rogelio","Roger","Rohan","Roland","Rolando","Roman","Romeo","Ron","Ronald","Ronan","Ronnie","Ronny","Roosevelt","Roscoe","Ross","Rowan","Roy","Royce","Ruairi","Ruben","Rubin","Rudolph","Rudy","Rufus","Rupert","Russ","Russell","Rusty","Ryan","Ryder","Ryker","Rylan","Ryland","Ryle","Ryley",
            "Sacha","Said","Salman","Salvador","Salvatore","Sam","Samir","Sammy","Samson","Sandeep","Sandy","Sanjay","Santiago","Sasha","Sawyer","Scot","Scott","Scottie","Scotty","Seamus","Seb","Sebastian","Sebastien","Sebestian","Seneca","Sergio","Seth","Shadrach","Shane","Shannon","Shaun","Shawn","Shay","Shayne","Shea","Sheldon","Shelton","Sherlock","Sherman","Sherwin","Shiloh","Sid","Sidney","Silas","Simeon","Simon","Simplicius","Sky","Skylar","Skyler","Slade","Socrates","Sol","Solomon","Sonny","Soren","Spencer","Spike","Stacey","Stacy","Stan","Stanley","Stefan","Stephan","Stephen","Sterling","Steven","Stevie","Stewart","Stone","Storm","Struan","Stuart","Sufyan","Sullivan","Sven","Sylvester",
            "Tam","Tanner","Tariq","Tarquin","Tate","Taylor","Teague","Ted","Teddy","Teo","Terence","Terrance","Terrell","Terrence","Terry","Tevin","Tex","Thad","Thaddeus","Theo","Theodore","Theon","Theophilus","Thomas","Thor","Tiago","Tiberius","Tiernan","Tiger","Tim","Timmy","Timothy","Tito","Titus","Tobias","Tobin","Toby","Tod","Todd","Tom","Tomas","Tommie","Tommy","Tony","Torin","Toryn","Trace","Tracey","Tracy","Travis","Tray","Tremaine","Trent","Trenton","Trevon","Trevor","Trey","Tristan","Tristen","Triston","Troy","Truman","Tucker","Turner","Ty","Tylan","Tyler","Tyrese","Tyson",
            "Ulrich","Ulysses","Umar","Uriah","Uriel","Usama",
            "Valentin","Valentine","Valentino","Van","Vance","Vasco","Vaughn","Vernon","Victor","Vidal","Vihan","Vijay","Vikram","Vince","Vincent","Vinnie","Virgil","Vishal","Vivian","Vlad","Vladimir",
            "Wade","Walker","Wallace","Wally","Walter","Warren","Waylon","Wayne","Wendell","Wes","Wesley","Westin","Weston","Wilbert","Wilbur","Wiley","Wilfred","Wilhelm","Will","Willam","Willard","Willem","William","Willie","Willis","Wilson","Winston","Wolf","Wolfgang","Woody","Wyatt",
            "Xander","Xavier","Xerxes",
            "Yahir","Yardley","Yehudi","Yestin","York","Yusuf","Yves",
            "Zac","Zach","Zachariah","Zachary","Zachery","Zack","Zackary","Zackery","Zaiden","Zain","Zaine","Zak","Zane","Zayden","Zayn","Zayne","Zeb","Zebulon","Zed","Zeke","Zeno","Zeph","Ziggy","Zion","Zoltan","Zyle"
        ],
        "femalefirstname":[
            "45:{human.ftravellername}",
            "Abbey","Abbi","Abbie","Abby","Abi","Abigail","Abrianna","Abrielle","Aby","Acacia","Ada","Adalia","Adalyn","Addie","Addilyn","Addison","Adelaide","Adele","Adelene","Adelia","Adelina","Adeline","Adelynn","Adreanna","Adriana","Adrianna","Adrianne","Adrienne","Agatha","Aggie","Agnes","Aida","Aileen","Ailsa","Aine","Ainsleigh","Aisha","Aisling","Aislinn","Aislynn","Alaina","Alana","Alanis","Alanna","Alannah","Alaska","Alayah","Alayna","Alba","Albany","Alberta","Aleah","Alecia","Aleisha","Alejandra","Alena","Alessandra","Alessia","Alex","Alexa","Alexandra","Alexandria","Alexia","Alexis","Alexus","Ali","Alia","Alice","Alicia","Alina","Alisha","Alison","Alissa","Alivia","Aliyah","Aliza","Alize","Alka","Allie","Allison","Ally","Allyson","Alma","Alondra","Alya","Alycia","Alyson","Alyssa","Alyssia","Amalia","Amanda","Amani","Amara","Amari","Amaris","Amaryllis","Amaya","Amber","Amberly","Amelia","Amelie","America","Amethyst","Amie","Amina","Amirah","Amity","Amy","Amya","Ana","Anabel","Anabelle","Anahi","Anais","Anastasia","Andie","Andromeda","Angel","Angela","Angelia","Angelina","Angeline","Angelique","Angie","Anika","Anisa","Anissa","Anita","Aniya","Aniyah","Anjali","Ann","Anna","Annabel","Annabella","Annabelle","Annabeth","Annalisa","Annalise","Annamaria","Anne","Anneke","Annette","Annie","Annika","Annmarie","Anthea","Antoinette","Antonia","Anuja","Anusha","Anushka","Anya","Aoibhe","Aoibheann","Aoife","Aphrodite","Apple","April","Aqua","Arabella","Arabelle","Arden","Aria","Ariadne","Ariana","Arianna","Arianne","Ariel","Arielle","Arisha","Arleen","Arlene","Arlette","Artemis","Arwen","Arya","Asha","Ashanti","Ashlee","Ashleigh","Ashley","Ashlie","Ashlyn","Ashlynn","Ashton","Asia","Asma","Aspen","Athalia","Athena","Atlanta","Aubreanna","Aubree","Aubrey","Audra","Audrey","Audriana","Audrina","Augustina","Aurelia","Aurora","Autumn","Ava","Avaline","Avalon","Avery","Avia","Avril","Aya","Ayana","Ayesha","Ayisha","Ayla","Azalea","Azaria","Azariah",
            "Bailey","Barbara","Barbie","Bay","Baylee","Bea","Beatrice","Beatrix","Becca","Beccy","Becky","Belinda","Bella","Bellatrix","Belle","Benita","Bernadette","Bernice","Beryl","Bess","Beth","Bethanie","Bethany","Betsy","Bettina","Betty","Bev","Beverly","Beyonce","Bianca","Billie","Blair","Blaire","Blake","Blakely","Blanche","Blaze","Blessing","Bliss","Bloom","Blossom","Blythe","Bobbi","Bobbie","Bobby","Bonita","Bonnie","Bonquesha","Braelyn","Brandi","Brandy","Brea","Breanna","Bree","Breeze","Brenda","Brenna","Bria","Briana","Brianna","Brianne","Briar","Bridget","Bridgette","Bridie","Briella","Brielle","Brigid","Briley","Brinley","Briony","Brisa","Bristol","Britney","Britt","Brittany","Brittney","Brodie","Brogan","Bronagh","Bronte","Bronwen","Bronwyn","Brook","Brooke","Brooklyn","Brooklynn","Bryanna","Brylee","Bryn","Brynlee","Brynn","Bryony","Bunty",
            "Cadence","Cailin","Caitlan","Caitlin","Caitlyn","Caleigh","Cali","Calista","Callie","Calliope","Callista","Calypso","Cambria","Cameron","Cami","Camila","Camilla","Camille","Campbell","Camry","Camryn","Candace","Candice","Candis","Candy","Caoimhe","Caprice","Cara","Carenza","Carina","Caris","Carissa","Carla","Carlene","Carley","Carlie","Carly","Carlynn","Carmel","Carmela","Carol","Carolina","Caroline","Carolyn","Carrie","Carys","Casey","Cassandra","Cassia","Cassidy","Cassie","Cassiopeia","Catalina","Cate","Caterina","Cathalina","Cathleen","Cathy","Catlin","Catrina","Catriona","Cayla","Ceanna","Cece","Cecelia","Cecilia","Cecily","Celeste","Celestia","Celestine","Celia","Celina","Celine","Celise","Ceri","Cerise","Cerys","Chanel","Chanelle","Chantal","Charis","Charissa","Charity","Charla","Charlene","Charlette","Charley","Charlie","Charlize","Charlotte","Charmaine","Chastity","Chelsea","Chelsey","Chenai","Chenille","Cher","Cheri","Cherie","Cherry","Cheryl","Cheyanne","Cheyenne","Chiara","Chloe","Chole","Chris","Chrissy","Christa","Christabel","Christal","Christen","Christi","Christiana","Christiane","Christie","Christina","Christine","Christy","Chrysanthemum","Chrystal","Ciara","Cici","Ciel","Cierra","Cindy","Clair","Claire","Clara","Clarabelle","Clare","Clarice","Claris","Clarissa","Clarisse","Clarity","Clary","Claudette","Claudia","Claudine","Clea","Clemence","Clementine","Cleo","Cleopatra","Clodagh","Cloe","Clotilde","Clover","Colette","Colleen","Connie","Constance","Cora","Coral","Coralie","Coraline","Cordelia","Cori","Corina","Corinne","Cornelia","Corra","Cosette","Courtney","Cressida","Cristal","Cristina","Crystal","Cynthia",
            "Dagmar","Daina","Daisy","Dakota","Damaris","Dana","Danette","Dani","Danica","Daniela","Daniella","Danielle","Danika","Daphne","Dara","Darby","Darcey","Darcie","Darcy","Daria","Darlene","Dasia","Davida","Davina","Dawn","Dayle","Dayna","Daysha","Deana","Deandra","Deann","Deanna","Deanne","Deb","Debbie","Debby","Debora","Deborah","Debra","Dede","Dee","Deedee","Deena","Deidre","Deirdre","Deja","Delaney","Delany","Delia","Delilah","Delina","Della","Delores","Delphine","Demetria","Demi","Dena","Denice","Denise","Denny","Desiree","Destinee","Destiny","Diamond","Diana","Diane","Dianna","Dianne","Dilys","Dina","Dinah","Dionne","Dior","Dixie","Dolly","Dolores","Dominique","Donna","Dora","Doreen","Doris","Dorla","Dot","Dottie","Drew","Dulce","Dusty","Dympna",
            "Eabha","Echo","Eden","Edie","Edith","Edna","Effie","Eileen","Eilidh","Eimear","Elaina","Elaine","Elana","Eleanor","Electra","Elektra","Elen","Elena","Eliana","Elicia","Elida","Elina","Elinor","Elisa","Elise","Eliza","Elizabeth","Elle","Ellen","Ellery","Ellie","Ellis","Elly","Elodie","Eloise","Elora","Elouise","Elsie","Elspeth","Elva","Elvina","Elysia","Elyza","Emanuela","Ember","Emelda","Emely","Emer","Emerald","Emerson","Emi","Emilee","Emilia","Emilie","Emily","Emma","Emmaline","Emmalyn","Emmanuelle","Emmeline","Emmie","Emmy","Enya","Erica","Erika","Erin","Eris","Ernestine","Eryn","Esmay","Esme","Esparanza","Esperanza","Estee","Estelle","Ester","Esther","Estrella","Ethel","Eudora","Eugenie","Eunice","Eva","Evaline","Evangeline","Eve","Evelin","Evelina","Evelyn","Everly","Evie","Evita","Fabrizia","Fanny","Farah","Fatima","Fawn",
            "Fay","Felicia","Felicity","Fern","Fernanda","Ffion","Fia","Fifi","Fiona","Fleur","Flick","Flo","Flora","Florence","Fran","Frances","Francesca","Francine","Francoise","Frankie","Freda","Freya","Frida",
            "Gabby","Gabriela","Gabriella","Gabrielle","Gail","Garnet","Gaynor","Geena","Gemma","Gena","Genesis","Genevieve","Genna","Georgette","Georgia","Georgina","Geraldine","Germaine","Gert","Gertrude","Gia","Gianna","Gigi","Gilda","Gillian","Gina","Ginnie","Ginny","Giovanna","Giselle","Gisselle","Gladys","Glenda","Glenys","Gloria","Glynis","Golda","Goldie","Grace","Gracelyn","Gracie","Grainne","Greta","Gretchen","Griselda","Guadalupe","Guinevere","Gwen","Gwendolyn","Gwyneth",
            "Habiba","Hadley","Hailee","Hailey","Haleigh","Haley","Halle","Hanna","Harley","Harmony","Harriet","Hattie","Haven","Hayden","Haylee","Hayley","Hazel","Hazeline","Heather","Heaven","Heidi","Helen","Helene","Helga","Helina","Henrietta","Hepsiba","Hera","Hermine","Hermione","Hester","Hetty","Hilary","Hilda","Hildegard","Hollie","Holly","Honesty","Honey","Honor","Honour","Hope","Hortense",
            "Ianthe","Ida","Ila","Ilene","Iliana","Ilona","Ilse","Imani","Imelda","Immy","Imogen","India","Indie","Indigo","Indira","Ines","Ingrid","Iona","Ira","Irena","Irene","Irma","Isa","Isabel","Isabell","Isabella","Isabelle","Isadora","Isha","Isidora","Isis","Isla","Isobel","Isolde","Itzel","Ivana","Ivy","Iyanna","Izabella","Izidora","Izzie","Izzy",
            "Jacinda","Jacinta","Jacquelyn","Jada","Jade","Jaden","Jadyn","Jaelynn","Jaida","Jaime","Jamie","Jamiya","Jan","Jana","Janae","Jancis","Jane","Janelle","Janet","Janette","Janice","Janie","Janine","Janis","Janiya","January","Jaqueline","Jasmin","Jasmine","Jaya","Jayda","Jayden","Jayla","Jaylene","Jaylinn","Jaylynn","Jayne","Jazlyn","Jazmin","Jazmine","Jean","Jeanette","Jeanine","Jeanna","Jeanne","Jeannette","Jeannie","Jemima","Jemma","Jen","Jena","Jenelle","Jenessa","Jenna","Jennette","Jenni","Jennifer","Jenny","Jensen","Jeri","Jerri","Jess","Jessa","Jessie","Jet","Jewel","Jill","Jillian","Jo","Joann","Joanna","Joanne","Jocelyn","Jodie","Jody","Joelle","Johanna","Jojo","Jolie","Joni","Jordan","Jordana","Jordyn","Jorja","Josephine","Josie","Journey","Joy","Joya","Joyce","Juanita","Jude","Judy","Jules","Julia","Juliana","Julianna","Julianne","Julie","Julienne","Juliet","Juliette","Julissa","July","June","Juno","Justice","Justina","Justine",
            "Kacey","Kadence","Kaelyn","Kaidence","Kailey","Kaitlin","Kaitlyn","Kaitlynn","Kalea","Kaleigh","Kali","Kalia","Kalista","Kaliyah","Kallie","Kamala","Kamryn","Kara","Karen","Kari","Karin","Karina","Karissa","Karla","Karlee","Karly","Karolina","Karyn","Kasey","Kassandra","Kassidy","Kat","Katara","Katarina","Kate","Katelyn","Katelynn","Katerina","Katharine","Katherine","Kathryn","Kathy","Katie","Katlyn","Katniss","Katrina","Katy","Katya","Kay","Kaye","Kayla","Kaylee","Kayley","Kaylie","Kaylin","Keana","Keara","Keeley","Keely","Keira","Keisha","Kelis","Kelley","Kelli","Kellie","Kelly","Kelsey","Kelsie","Kendall","Kendra","Kenna","Kennedy","Kera","Keri","Kerian","Kerri","Kerry","Kia","Kiana","Kiara","Kiersten","Kiki","Kiley","Kim","Kimberlee","Kimberley","Kimberly","Kimbriella","Kinley","Kinsey","Kinsley","Kira","Kirsten","Kirstin","Kirsty","Kit","Kitty","Kizzy","Kloe","Kora","Kori","Kourtney","Kris","Krista","Kristen","Kristi","Kristie","Kristin","Kristina","Kristine","Kristy","Krystal","Kya","Kyla","Kylee","Kyleigh","Kylie","Kyra",
            "Lacey","Lacie","Lacy","Ladonna","Laila","Lainey","Lakyn","Lala","Lana","Laney","Lara","Larissa","Lark","Latoya","Laura","Laurel","Lauren","Laurie","Lauryn","Lavana","Lavender","Lea","Leah","Leann","Leanna","Leda","Lee","Leela","Leena","Leigh","Leilani","Lela","Lena","Lenora","Lenore","Leona","Leonie","Leonora","Leora","Lesley","Leslie","Lesly","Letitia","Lettie","Lexi","Lexia","Lexie","Lexis","Lia","Liah","Liana","Lianne","Libby","Liberty","Lidia","Liesl","Lila","Lilac","Lilah","Lili","Lilian","Liliana","Lilita","Lilith","Lillia","Lillie","Lilly","Lily","Linda","Lindsay","Lindsey","Lindy","Lisa","Lisette","Liv","Livia","Livvy","Liza","Lizbeth","Lizette","Lizzie","Lizzy","Lois","Lola","Lolita","London","Lora","Loran","Lorelei","Loren","Loretta","Lori","Lorie","Lorna","Lorraine","Lorri","Lorrie","Lottie","Lou","Louella","Louisa","Louise","Luann","Lucia","Luciana","Lucie","Lucille","Lucinda","Lucky","Lucy","Luisa","Lulu","Luna","Luz","Lydia","Lyla","Lyndsey","Lynette","Lynn","Lynne","Lynnette","Lynsey","Lyra","Lyric",
            "Mabel","Macey","Macie","Mackenzie","Macy","Madalyn","Maddie","Maddison","Maddy","Madeleine","Madeline","Madelyn","Madison","Madisyn","Madonna","Madyson","Mae","Maeve","Magda","Magdalena","Magdalene","Maggie","Maia","Maire","Mairead","Maisie","Maisy","Maja","Makayla","Makenzie","Malia","Malinda","Mallory","Malory","Mandy","Manuela","Mara","Marcela","Marcelle","Marcia","Marcie","Marcy","Margaret","Margarita","Margaux","Margie","Margo","Margot","Margret","Maria","Mariah","Mariam","Mariana","Marianna","Marianne","Maribel","Marie","Mariela","Mariella","Marilyn","Marina","Marion","Maris","Marisa","Marisol","Marissa","Maritza","Marjorie","Marlee","Marlena","Marlene","Marley","Marsha","Martha","Martina","Mary","Maryam","Maryann","Marybeth","Maryjane","Masie","Mathilde","Matilda","Mattie","Maude","Maura","Mavis","Maxime","Maya","Maybell","Mckayla","Mckenna","Mckenzie","Mea","Meagan","Meera","Meg","Megan","Meghan","Mei","Mel","Melanie","Melinda","Melissa","Melody","Mercedes","Mercy","Meredith","Merida","Merissa","Mia","Michaela","Michelle","Mika","Mikaela","Mikayla","Mikhaela","Mildred","Milena","Miley","Millicent","Millie","Milly","Mimi","Mina","Mindy","Minerva","Minnie","Mira","Mirabel","Mirabelle","Miracle","Miranda","Miriam","Mirielle","Missie","Mitzi","Modesty","Moira","Mollie","Molly","Mona","Monica","Monika","Monique","Montana","Montserrat","Morgan","Morgana","Moya","Muriel","Mya","Myfanwy","Myla","Myra","Myrna","Myrtle",
            "Nadene","Nadia","Nala","Nana","Nancy","Nanette","Naomi","Natalia","Natalie","Natasha","Naya","Nayeli","Nell","Nellie","Nelly","Nena","Nerissa","Nessa","Nevaeh","Neve","Nia","Niamh","Nichola","Nichole","Nicki","Nicky","Nicolette","Nieve","Nikita","Nikki","Nila","Nina","Nisha","Nishka","Nita","Noella","Noemi","Nola","Nora","Norah","Noreen","Nova","Nyla","Oasis","Ocean","Octavia","Odalis","Odalys","Odele","Odelia","Odette","Olga","Olive","Olivia","Oona","Opal","Ophelia","Oprah","Oriana","Orianna","Orla","Orlaith","Page","Paige","Paisley","Pam","Pamela","Pandora","Pansy","Paola","Patience","Patrice","Patricia","Patti","Patty","Paula","Paulette","Paulina","Pauline","Payton","Peace","Pearl","Peggy","Penelope","Penny","Perla","Perrie","Persephone","Petra","Petunia","Peyton","Phillipa","Philomena","Phoebe","Phoenix","Phyllis","Piper","Pippa","Pixie","Polly","Pollyanna","Poppy","Portia","Precious","Presley","Preslie","Primrose","Princess","Priscilla","Priya","Prudence","Prue",
            "Queenie","Quiana","Quinn",
            "Rabia","Rachael","Rachel","Rachelle","Rae","Raegan","Raelyn","Raina","Raine","Ramona","Ramsha","Randi","Rani","Rania","Raquel","Raven","Raya","Rayna","Rayne","Reagan","Reanna","Reanne","Rebecca","Rebekah","Regan","Regina","Reilly","Reina","Remi","Rena","Renae","Renata","Rene","Renee","Renesmee","Reyna","Rhea","Rhian","Rhianna","Rhiannon","Rhoda","Rhona","Rhonda","Ria","Rianna","Richelle","Rihanna","Rikki","Riley","Rina","Rita","River","Riya","Roanne","Roberta","Robin","Robyn","Rochelle","Rocio","Roisin","Rolanda","Ronda","Roni","Rosa","Rosalie","Rosalina","Rosalind","Rosalinda","Rosalynn","Rosanna","Rose","Roseanne","Rosella","Roselle","Rosemarie","Rosemary","Rosetta","Rosie","Rosy","Rowena","Roxana","Roxanne","Roxie","Roxy","Rozlynn","Ruby","Rue","Ruth","Ruthie","Ryanne","Rydel","Rylee","Ryleigh","Rylie",
            "Sabina","Sabine","Sable","Sabrina","Sade","Sadhbh","Sadie","Saffron","Safire","Safiya","Sahara","Saige","Saira","Sally","Salma","Salome","Sam","Samantha","Samara","Samia","Samira","Sammie","Sammy","Sandy","Sania","Saoirse","Sara","Sarah","Sarina","Sariya","Sasha","Saskia","Savanna","Savannah","Scarlet","Scarlett","Sebastianne","Selah","Selena","Selene","Selina","Selma","Senuri","September","Seren","Serena","Serenity","Shamira","Shana","Shania","Shannon","Shari","Sharon","Shary","Shauna","Shawn","Shawna","Shawnette","Shayla","Shayna","Shea","Sheba","Sheena","Sheila","Shelby","Shelia","Shelley","Shelly","Sheri","Sheridan","Sherri","Sherrie","Sherry","Sheryl","Shirley","Shivani","Shona","Shonagh","Shreya","Shyann","Shyla","Sian","Sidney","Sienna","Sierra","Simone","Simran","Sindy","Sinead","Siobhan","Sky","Skye","Skylar","Skyler","Sloane","Snow","Sofia","Sofie","Sondra","Sonia","Sonja","Sonya","Sophie","Sophy","Sorrel","Spring","Stacey","Staci","Stacie","Stacy","Star","Starla","Stefanie","Stella","Steph","Stephanie","Sue","Sugar","Suki","Summer","Susanna","Susannah","Susanne","Susie","Sutton","Suzanna","Suzanne","Suzette","Suzie","Suzy","Sydney","Sylvia","Sylvie",
            "Tabatha","Tabitha","Tagan","Tahlia","Tailynn","Tala","Talia","Talitha","Taliyah","Tallulah","Tamara","Tamera","Tami","Tamia","Tamika","Tammi","Tammie","Tammy","Tamra","Tamsin","Tania","Tanisha","Tanya","Tara","Taryn","Tasha","Tasmin","Tatiana","Tatum","Tawana","Taya","Tayah","Tayla","Taylah","Tayler","Taylor","Teagan","Teegan","Tegan","Teigan","Tenille","Teresa","Teri","Terri","Terrie","Terry","Tessa","Thalia","Thea","Theodora","Theresa","Therese","Thomasina","Tia","Tiana","Tiara","Tiegan","Tiffany","Tilly","Tina","Tisha","Toni","Tonia","Tonya","Tora","Tori","Tracey","Traci","Tracie","Tracy","Tricia","Trina","Trinity","Trisha","Trista","Trixie","Trixy","Trudy","Tula","Tulip","Tyra",
            "Ulrica","Uma","Una","Ursula",
            "Valeria","Valerie","Valery","Vanessa","Veda","Velma","Venetia","Venus","Vera","Verity","Veronica","Vicki","Vickie","Vicky","Victoria","Vienna","Viola","Violet","Violetta","Virginia","Virginie","Vivian","Vivien","Vivienne",
            "Wallis","Wanda","Waverley","Wendi","Wendy","Whitney","Wilhelmina","Willa","Willow","Wilma","Winifred","Winnie","Winnifred","Winona","Winter","Wynne",
            "Xandra","Xandria","Xaviera","Xia","Ximena","Xochil","Xochitl",
            "Yadina","Yasmin","Yasmina","Yazmin","Yelena","Yesenia","Yessica","Yolanda","Ysabel","Yula","Yulissa","Yvaine","Yvette","Yvonne",
            "Zada","Zahra","Zaira","Zakia","Zali","Zara","Zaria","Zaya","Zayla","Zelda","Zelida","Zelina","Zena","Zendaya","Zia","Zina","Zita","Ziva","Zoe","Zoey","Zola","Zora","Zoya","Zuri"
        ],
        "lastname": [
            "100:{human.popularuslastname}",
            "bin {human.firstname}|ben {human.firstname}|bin {human.popularuslastname}|ben {human.popularuslastname}",
            "von {human.firstname}|von {human.popularuslastname}",
            "{system.realplace}|von {system.realplace}|de {system.realplace}",
            "2:{human.combinedlastname}",
            "2:{human.firstname}son|{human.firstname}sen",
            "{human.lastnamesuffix}|{human.lastnameprefix}",
            "{human.firstname}",
            "{system.pastoral}",
            "{ship.butterfly}"
        ],
        "combinedlastname":[
            "{human.lastnameprefix}<!0>{human.lastnamesuffix}",
        ],
        "lastnameprefix": [
            "bal|cal|dal|fal|gal|hal|jal|kal|mal|nal|pal|tal|val|wal",
            "bat|cat|dat|gat|hat|jat|kat|mat|nat|pat|rat|sat|vat|wat",
            "bar|car|dar|far|gar|har|jar|mar|nar|par|tar|var|war",
            "ban|can|dan|fan|gan|han|jan|kan|man|nan|pan|tan|van|wan",
            "bam|cam|dam|fam|gam|ham|jam|kam|nam|pam|tam|vam|wam",
            "apple",
            "ather",
            "bab",
            "baert",
            "bax",
            "blake",
            "brant",
            "bul",
            "burg|berg",
            "butter",
            "chap",
            "chide",
            "clipp",
            "cole",
            "corn",
            "craw",
            "cunning",
            "danz",
            "dun",
            "east",
            "eddle",
            "eisen",
            "ell",
            "emer",
            "ep",
            "erd",
            "fors",
            "fuersten",
            "gold",
            "gor",
            "groat",
            "grun",
            "gyde",
            "hael",
            "hard",
            "hender",
            "hersh",
            "hoe",
            "hoff",
            "hollings",
            "jorgen",
            "jong",
            "keif",
            "knud",
            "kor",
            "kling",
            "laid",
            "lime",
            "livings",
            "love",
            "lud",
            "lund",
            "mat",
            "meit",
            "memme",
            "mil",
            "mittel",
            "nichol",
            "oak",
            "oster",
            "peter",
            "pitt",
            "put",
            "robin",
            "selis",
            "silver",
            "stanis",
            "stell",
            "stil",
            "stre",
            "strom",
            "tace",
            "tan",
            "thorn",
            "tour",
            "vorste",
            "water",
            "way",
            "weis",
            "wood",
            "wyn"
        ],
        "lastnamesuffix": [
            "baugh",
            "barger",
            "barth",
            "beck",
            "beker",
            "berg",
            "berger",
            "bloedt",
            "boom",
            "bright",
            "burn",
            "cock",
            "craft",
            "croft",
            "detzke",
            "dorf",
            "field",
            "finger",
            "ford",
            "frisch",
            "ham",
            "house",
            "inger",
            "inski",
            "killer",
            "kin",
            "lace",
            "law",
            "lein",
            "lief",
            "ling",
            "lock",
            "losky|lawski",
            "lund",
            "macher",
            "man",
            "mann",
            "manski",
            "meier",
            "mer",
            "more",
            "myer",
            "nam|num",
            "ner",
            "quist",
            "ren",
            "schein",
            "sen",
            "sheimer",
            "smith",
            "son",
            "stadt",
            "staff",
            "stein",
            "ster",
            "sworth",
            "tag",
            "thorn|thron",
            "2:ton",
            "treser",
            "uszak",
            "veld",
            "vick",
            "ville",
            "wald",
            "wall|well",
            "wig",
            "wick",
            "win",
            "wisch",
            "worth",
            "yard"
        ],
        "popularuslastname":[
            "Abbott","Acevedo","Acosta","Adams","Adkins","Aguilar","Aguirre","Albert","Alexander","Alford","Allen","Allison","Alston","Alvarado","Alvarez","Anderson","Andrews","Anthony","Armstrong","Arnold","Ashley","Atkins","Atkinson","Austin","Avery","Avila","Ayala","Ayers",
            "Bailey","Baird","Baker","Baldwin","Ball","Ballard","Banks","Banta","Barber","Barker","Barlow","Barnes","Barnett","Barr","Barrera","Barrett","Barron","Barry","Bartlett","Barton","Bass","Bates","Battle","Bauer","Baxter","Beach","Bean","Beard","Beasley","Beck","Becker","Bell","Bender","Benjamin","Bennett","Benson","Bentley","Benton","Berg","Berger","Bernard","Berry","Best","Bird","Bishop","Black","Blackburn","Blackwell","Blair","Blake","Blanchard","Blankenship","Blevins","Bolton","Bond","Bonner","Booker","Boone","Booth","Bowen","Bowers","Bowman","Boyd","Boyer","Boyle","Bradford","Bradley","Bradshaw","Brady","Branch","Bray","Brennan","Brewer","Bridges","Briggs","Bright","Britt","Brock","Brooks","Brown","Browning","Bruce","Bryan","Bryant","Buchanan","Buck","Buckley","Buckner","Bullock","Burch","Burgess","Burke","Burks","Burnett","Burns","Burris","Burt","Burton","Bush","Butler","Byers","Byrd",
            "Cabrera","Cain","Calderon","Caldwell","Calhoun","Callahan","Calvert","Camacho","Cameron","Campbell","Campos","Cannon","Cantrell","Cantu","Cardenas","Carey","Carlson","Carney","Carpenter","Carr","Carrillo","Carroll","Carson","Carter","Carver","Case","Casey","Cash","Castaneda","Castillo","Castro","Cervantes","Chambers","Chan","Chandler","Chaney","Chang","Chapman","Charles","Chase","Chavez","Chen","Cherry","Christensen","Christian","Church","Clark","Clarke","Clay","Clayton","Clements","Clemons","Cleveland","Cline","Cobb","Cochran","Coffey","Cohen","Cole","Coleman","Collier","Collins","Colon","Combs","Compton","Conley","Conner","Conrad","Contreras","Conway","Cook","Cooke","Cooley","Cooper","Copeland","Cortez","Cote","Cotton","Cox","Craft","Craig","Crane","Crawford","Crosby","Cross","Crump","Cruz","Cummings","Cunningham","Curry","Curtis",
            "Dahlen","Dahlgren","Dale","Dalton","Daniel","Daniels","Daugherty","Davenport","David","Davidson","Davis","Dawson","Day","Dean","Decker","Dejesus","Delacruz","Delaney","Deleon","Delgado","Dennis","Dias|Diaz","Dickerson","Dickson","Dillard","Dillon","Dixon","Dodson","Dominguez","Donaldson","Donovan","Dorsey","Dotson","Douglas","Downs","Doyle","Drake","Dudley","Duffy","Duke","Duncan","Dunlap","Dunn","Duran","Durham","Dvorak","Dyer",
            "Eaton","Edwards","Elliott","Ellis","Ellison","Emerson","England","English","Erickson","Espinoza","Estes","Estrada","Evans","Everett","Ewing",
            "Fallberg","Farley","Farmer","Farrell","Faulkner","Ferguson","Fernandez","Ferrell","Ficino","Fields","Figueroa","Finch","Finley","Fischer","Fisher","Fitzgerald","Fitzpatrick","Fleming","Fletcher","Flores","Flowers","Floyd","Flynn","Foley","Fontanella","Forbes","Ford","Foreman","Foster","Fowler","Fox","Francis","Franco","Frank","Franklin","Franks","Frazier","Frederick","Freeman","French","Frost","Fry","Frye","Fuentes","Fuller","Fulton",
            "Gaines","Gallagher","Gallegos","Galloway","Gamble","Garcia","Gardner","Garner","Garrett","Garrison","Garza","Gates","Gay","Gentry","George","Geronimi","Gibbs","Gibrat","Gibson","Gilbert","Giles","Gill","Gillespie","Gilliam","Gilmore","Glass","Glenn","Glover","Goff","Golden","Gomez","Gonzales","Gonzalez","Good","Goodman","Goodwin","Gordon","Gossin","Gould","Graham","Grant","Graves","Gray","Green","Greene","Greer","Gregory","Griffin","Griffith","Grimes","Gross","Guerra","Guerrero","Guthrie","Gutierrez","Guy","Guzman",
            "Hahn","Hale","Haley","Hall","Hamilton","Hammond","Hampton","Hancock","Haney","Hansen","Hanson","Hardin","Harding","Hardy","Harmon","Harper","Harrell","Harrington","Harris","Harrison","Hart","Hartman","Harvey","Hatfield","Hawkins","Hayden","Hayes","Haynes","Hays","Head","Heath","Hebert","Helmuth","Henderson","Hendricks","Hendrix","Henry","Hensley","Henson","Herman","Hernandez","Herrera","Herring","Hess","Hester","Hewitt","Hibler","Hickman","Hicks","Higgins","Hill","Hines","Hinton","Hobbs","Hodge","Hodges","Hoffman","Hogan","Holcomb","Holden","Holder","Holland","Holloway","Holman","Holmes","Holmquist","Holt","Hood","Hooper","Hoover","Hopkins","Hopper","Horn","Horne","Horton","House","Houston","Howard","Howe","Howell","Hubbard","Huber","Hudson","Huff","Huffman","Hughes","Hull","Humphrey","Hunt","Hunter","Hurley","Hurst","Hutchinson","Hyde",
            "Ingram","Irwin",
            "Jackson","Jacobs","Jacobson","James","Jarvis","Jefferson","Jenkins","Jennings","Jensen","Jimenez","Johns","Johnson","Johnston","Jones","Jordan","Joseph","Joyce","Joyner","Juarez","Justice",
            "Kanagy","Kane","Kahl","Kaufman","Keith","Keller","Kelley","Kelly","Kemmer","Kemp|Kemper","Kennedy","Kent","Kerr","Key","Kidd","Kim","King","Kinney","Kirby","Kirk","Kirkland","Klein","Kline","Knapp","Knight","Knowles","Knox","Koch","Kramer",
            "Lamb","Lambert","Lancaster","Landry","Lane","Lang","Langley","Lanham","Lara","Larsen","Larson","Lawrence","Lawson","Le","Leach","Leblanc","Lee","Leon","Leonard","Lester","Lestina","Levine","Levy","Lewis","Lindsay","Lindsey","Little","Livingston","Lloyd","Logan","Long","Lopez","Lott","Love","Lowe","Lowery","Lucas","Luna","Luske|Lusk","Lynch","Lynn","Lyons",
            "Macdonald","Macias","Mack","Madden","Maddox","Maldonado","Malone","Mann","Manning","Marks","Marquez","Marsh","Marshall","Martin","Martinez","Mason","Massey","Mathews","Mathis","Matthews","Maxwell","May","Mayer","Maynard","Mayo","Mays","Mcbride","Mccall","Mccarthy","Mccarty","Mcclain","Mcclure","Mcconnell","Mccormick","Mccoy","Mccray","Mccullough","Mcdaniel","Mcdonald","Mcdowell","Mcfadden","Mcfarland","Mcgee","Mcgowan","Mcguire","Mcintosh","Mcintyre","Mckay","Mckee","Mckenzie","Mckinney","Mcknight","Mclaughlin","Mclean","Mcleod","Mcmahon","Mcmillan","Mcneil","Mcpherson","Meadows","Medina","Mejia","Melendez","Melton","Mendez","Mendoza","Mercado","Mercer","Merrill","Merritt","Meyer","Meyers","Michael","Middleton","Miles","Miller","Mills","Miranda","Mitchell","Molina","Monroe","Montgomery","Montoya","Moody","Moon","Mooney","Moore","Morales","Moran","Moreno","Morgan","Morin","Morris","Morrison","Morrow","Morse","Morton","Moses","Mosley","Moss","Mueller","Mullen","Mullins","Munoz","Murphy","Murray","Myers",
            "Nash","Navarro","Neal","Nelson","Nerbovig","Newman","Newton","Nguyen","Nichols","Nicholson","Nielsen","Nieves","Nixon","Noble","Noel","Nolan","Nordberg","Norman","Norris","Norton","Nunez",
            "Obrien","Ochoa","Oconnor","Odom","Odonnell","Oliphant","Oliver","Olsen","Olson","Oneal","Oneil","Oneill","Orr","Ortega","Ortiz","Osborn","Osborne","Owen","Owens",
            "Pace","Pacheco","Padilla","Page","Paliwoda","Palmer","Park","Parker","Parks","Parrish","Parsons","Pate","Patel","Patrick","Patterson","Patton","Paul","Payne","Pearson","Peck","Pena","Penner","Pennington","Perez","Perkins","Perrault","Perry","Peters","Petersen","Peterson","Petty","Phelps","Phillips","Pickett","Pico","Pierce","Pittman","Pitts","Pletho","Pollard","Poole","Pope","Porter","Potter","Potts","Powell","Powers","Pratt","Preston","Price","Prince","Pruitt","Puckett","Pugh",
            "Quinn",
            "Ramirez","Ramos","Ramsey","Randall","Randolph","Rasmussen","Ratliff","Ravenscroft|Ravensberger","Ray","Raymond","Reed","Reese","Reeves","Reid","Reilly","Reitherman","Reyes","Reynolds","Rhodes","Rice","Rich","Richard","Richards","Richardson","Richmond","Riddle","Riggs","Riley","Rinaldi","Rios","Rivas","Rivera","Rivers","Rizzo","Roach","Robbins","Roberson","Roberts","Robertson","Robinson","Robles","Rocha","Rodgers","Rodriguez","Rodriquez","Rogers","Rojas","Rollins","Roman","Romero|Romersa","Rosa","Rosales","Rosario","Rose","Ross","Roth","Rowe","Rowland","Roy","Ruiz","Rush","Russell","Russo","Rutledge","Ryan",
            "Salas","Salazar","Salinas","Sampson","Sanchez","Sanders","Sandoval","Sanford","Santana","Santiago","Santos","Sargent","Saunders","Savage","Sawyer","Schmidt","Schneider","Schroeder","Schuiten","Schultz","Schwartz","Scott","Sears","Selders|Sellers","Serrano","Sexton","Shaffer","Shannon","Sharp","Sharpe","Shaw","Shelton","Shepard|Shepherd|Sheppard","Sherman","Sherwood","Shields","Short","Silva","Simmons","Simon","Simpson","Sims","Sinclair","Singleton","Skinner","Slater","Sloan","Small","Smith","Snider","Snow","Snyder","Solis","Solomon","Sosa","Soto","Sparks","Spears","Spence","Spencer","Stafford","Stanley","Stanton","Stark","Steele","Stein","Stephens","Stephenson","Stevens","Stevenson","Stewart","Stokes","Stone","Stout","Strickland","Strong","Stuart","Suarez","Sullivan","Summers","Sutton","Swanson","Sweeney","Sweet","Sykes",
            "Takamoto","Talley","Tanner","Tate","Taylor","Terrell","Terry","Thomas","Thompson|Tompson","Thornton","Tillman","Todd","Toombs","Torres","Townsend","Tran","Travis","Trevino","Trujillo","Tucker","Turner","Tyler","Tyson",
            "Underwood",
            "Valdez","Valencia","Valentine","Valenzuela","Vance","Vang","Vargas","Vasquez","Vaughan","Vaughn","Vazquez","Vega","Velasquez","Velazquez","Velez","Villarreal","Vincent","Vinson","Vreeland",
            "Wade","Wadsworth","Wagner","Walker","Wall","Wallace","Waller","Walls","Walsh","Walter","Walters","Walton","Ward","Ware","Warner","Warren","Washington","Waters","Watkins","Watson","Watts","Weaver","Webb","Weber","Webster","Weeks","Weiss","Welch","Wells","West","Wetzler","Wheeler","Whitaker","White","Whitehead","Whitfield","Whitley","Whitney","Wiggins","Wilcox","Wilder","Wiley","Wilkerson","Wilkins","Wilkinson","William","Williams","Williamson","Willis","Wilson","Winters","Wise","Witt","Witmer","Wolf","Wolfe","Wong","Wood","Woodard","Woods","Woodward","Wooten","Workman","Wright","Wyatt","Wynn",
            "Xenia",
            "Yang","Yates","York","Young","Younquist",
            "Zamora","Zimmerman"
        ]
    },
    "aslan": {
        "patterns":[
            "2:{aslan.1sylword}",
            "16:{aslan.2sylword}",
            "9:{aslan.3sylword}",
            "4:{aslan.4sylword}",
            "2:{aslan.5sylword}"
            //,"1:{aslan.6sylword}"
        ],
        "1sylword":[
            //"3:{aslan.v}",
            "3:{aslan.cv}",
            "2:{aslan.vc}",
            "2:{aslan.cvc}"
        ],
        "2sylword":[
            "9:{aslan.v}<!0>{aslan.v}",
            "9:{aslan.v}{aslan.cv}",
            "6:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}",
            "6:{aslan.v}{aslan.cvc}",
            "9:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}",
            "9:{aslan.cv}{aslan.cv}",
            "6:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}",
            "6:{aslan.cv}}{aslan.cvc}",
            "6:{aslan.vc}{aslan.v}",
            "6:{aslan.cvc}{aslan.v}",
            "4:{aslan.vc}{aslan.vc}",
            "4:{aslan.cvc}{aslan.vc}"
        ],
        "4sylword":[
            "81:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}<!2>{aslan.v}",
            "81:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}{aslan.cv}",
            "54:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}<!2>{aslan.vowel}{aslan.finalconsonant}",
            "54:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}<!2>{aslan.cvc}",
            "81:{aslan.v}<!0>{aslan.v}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}",
            "81:{aslan.v}<!0>{aslan.v}{aslan.cv}{aslan.cv}",
            "54:{aslan.v}<!0>{aslan.v}{aslan.initialconsonant}{aslan.v}<!3>{aslan.vowel}{aslan.finalconsonant}",
            "54:{aslan.v}<!0>{aslan.v}{aslan.cv}{aslan.cvc}",
            "54:{aslan.v}<!0>{aslan.v}<!1>{aslan.vowel}{aslan.finalconsonant}{aslan.v}",
            "36:{aslan.v}<!0>{aslan.v}<!1>{aslan.vowel}{aslan.finalconsonant}{aslan.vc}",
            "54:{aslan.v}<!0>{aslan.v}<!1>{aslan.cvc}{aslan.v}",
            "36:{aslan.v}<!0>{aslan.v}<!1>{aslan.cvc}{aslan.vc}",
            // 81: v cv vv
            "81:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}",
            // 81: v cv v cv
            "81:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.cv}",
            // 54: v cv v vc
            "54:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}",
            // 54: v cv v cvc
            "54:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.cvc}",
            // 81: v cv cv v
            "81:{aslan.v}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}",
            // 81: v cv cv cv
            "81:{aslan.v}{aslan.cv}{aslan.cv}{aslan.cv}",
            // 54: v cv cv vc
            "54:{aslan.v}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}",
            // 54: v cv cv cvc
            "54:{aslan.v}{aslan.cv}{aslan.cvc}",
            // 54: v cv vc v
            "54:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // 36: v cv vc vc
            "36:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // 54: v cv cvc v
            "54:{aslan.v}{aslan.cv}{aslan.cvc}{aslan.v}", 
            // 36: v cv cvc vc
            "36:{aslan.v}{aslan.cv}{aslan.cvc}{aslan.vc}",
            // 54: v vc v v
            "54:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.v}<!3>{aslan.v}",
            // 54: v vc v cv
            "54:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cv}", 
            // 36: v vc v vc
            "36:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}", 
            // 36: v vc v cvc
            "36:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cvc}",
            // 36: v vc vc v
            "36:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.v}",
            // 24: v vc vc vc
            "24:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.vc}",
            // 54: v cvc v v
            "54:{aslan.v}{aslan.cvc}{aslan.v}<!2>{aslan.v}",
            // 54: v cvc v cv
            "54:{aslan.v}{aslan.cvc}{aslan.v}{aslan.cv}", 
            // 36: v cvc v vc
            "36:{aslan.v}{aslan.cvc}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}",
            // 36: v cvc v cvc
            "36:{aslan.v}{aslan.cvc}{aslan.v}{aslan.cvc}",
            // 36: v cvc vc v
            "36:{aslan.v}{aslan.cvc}{aslan.vc}{aslan.v}",
            // 24: v cvc vc vc
            "24:{aslan.v}{aslan.cvc}{aslan.vc}{aslan.vc}",
            // 81: cv v v v
            "81:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}<!3>{aslan.v}",
            // 81: cv v v cv
            "81:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.cv}",
            // 54: cv v v vc
            "54:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}",
            // 54: cv v v cvc
            "54:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.cvc}",
            // 81: cv v cv v
            "81:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}",
            // 81: cv v cv cv
            "81:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.cv}{aslan.cv}",
            // 54: cv v cv vc
            "54:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // 54: cv v cv cvc
            "54:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.cv}{aslan.cvc}",
            // 54: cv v vc v
            "54:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // 36: cv v vc vc
            "36:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // 54: cv v cvc v
            "54:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.cvc}{aslan.v}",
            // 36: cv v cvc vc
            "36:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.cvc}{aslan.vc}",
            // 81: cv cv v v
            "81:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}",
            // 81: cv cv v cv
            "81:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.cv}",
            // 54: cv cv v vc
            "54:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}",
            // 54: cv cv v cvc
            "54:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.cvc}",
            // 81: cv cv cv v
            "81:{aslan.cv}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}",
            // 81: cv cv cv cv
            "81:{aslan.cv}{aslan.cv}{aslan.cv}{aslan.cv}",
            // 54: cv cv cv vc
            "54:{aslan.cv}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}",
            // 54: cv cv cv cvc
            "54:{aslan.cv}{aslan.cv}{aslan.cv}{aslan.cvc}",
            // 54: cv cv vc v
            "54:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            //  36: cv cv vc vc
            "36:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // 54: cv cv cvc v
            "54:{aslan.cv}{aslan.cv}{aslan.cvc}{aslan.v}",
            // 36: cv cv cvc vc
            "36:{aslan.cv}{aslan.cv}{aslan.cvc}{aslan.vc}",
            // 54: cv vc v v
            "54:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}<!4>{aslan.v}",
            // 36: cv vc v cv
            "36:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cv}",
            // 36: cv vc v cvc
            "36:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cvc}",
            // 36: cv vc vc v
            "36:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.v}",
            // 24: cv vc vc vc
            "24:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.vc}",
            // 54: cv cvc v v
            "54:{aslan.cv}{aslan.cvc}{aslan.v}<!2>{aslan.v}",
            // 54: cv cvc v cv
            "54:{aslan.cv}{aslan.cvc}{aslan.v}{aslan.cv}",
            // 36: cv cvc v vc
            "36:{aslan.cv}{aslan.cvc}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}",
            // 36: cv cvc v cvc
            "36:{aslan.cv}{aslan.cvc}{aslan.v}{aslan.cvc}",
            // 36: cv cvc vc v
            "36:{aslan.cv}{aslan.cvc}{aslan.vc}{aslan.v}", 
            // 24: cv cvc vc vc
            "24:{aslan.cv}{aslan.cvc}{aslan.vc}{aslan.vc}",
            // 54: vc v v v
            "54:{aslan.vc}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}",
            // 54: vc v v cv
            "54:{aslan.vc}{aslan.v}<!1>{aslan.v}{aslan.cv}",
            // 36: vc v v vc
            "36:{aslan.vc}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}",
            // 36: vc v v cvc
            "36:{aslan.vc}{aslan.v}<!1>{aslan.v}{aslan.cvc}",
            // 54: vc v cv v
            "54:{aslan.vc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}",
            // 54: vc v cv cv
            "54:{aslan.vc}{aslan.v}{aslan.cv}{aslan.cv}",
            // 36: vc v cv vc
            "36:{aslan.vc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}",
            // 36: vc v cv cvc
            "36:{aslan.vc}{aslan.v}{aslan.cv}{aslan.cvc}",
            // 36: vc v vc v
            "36:{aslan.vc}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // 24: vc v vc vc
            "24:{aslan.vc}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // 36: vc v cvc v
            "36:{aslan.vc}{aslan.v}{aslan.cvc}{aslan.v}",
            // 24: vc v cvc vc
            "24:{aslan.vc}{aslan.v}{aslan.cvc}{aslan.vc}",
            // 36: vc vc v v
            "36:{aslan.vc}{aslan.vc}{aslan.v}<!2>{aslan.v}",
            // 36: vc vc v cv
            "36:{aslan.vc}{aslan.vc}{aslan.v}{aslan.cv}",
            // 24: vc vc v vc
            "24:{aslan.vc}{aslan.vc}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}",
            // 24: vc vc v cvc
            "24:{aslan.vc}{aslan.vc}{aslan.v}{aslan.cvc}",
            // 24: vc vc vc v
            "24:{aslan.vc}{aslan.vc}{aslan.vc}{aslan.v}",
            // 16: vc vc vc vc
            "16:{aslan.vc}{aslan.vc}{aslan.vc}{aslan.vc}",
            // 54: cvc v v v
            "54:{aslan.cvc}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}",
            // 54: cvc v v cv
            "54:{aslan.cvc}{aslan.v}<!1>{aslan.v}{aslan.cv}",
            // 36: cvc v v vc
            "36:{aslan.cvc}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}",
            // 36: cvc v v cvc
            "36:{aslan.cvc}{aslan.v}<!1>{aslan.v}{aslan.cvc}",
            // 54: cvc v cv v
            "54:{aslan.cvc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}",
            // 54: cvc v cv cv
            "54:{aslan.cvc}{aslan.v}{aslan.cv}{aslan.cv}",
            // 36: cvc v cv vc
            "36:{aslan.cvc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}",
            // 36: cvc v cv cvc
            "36:{aslan.cvc}{aslan.v}{aslan.cv}{aslan.cvc}",
            // 36: cvc v vc v
            "36:{aslan.cvc}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // 24: cvc v vc vc
            "24:{aslan.cvc}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // 36: cvc v cvc v
            "36:{aslan.cvc}{aslan.v}{aslan.cvc}{aslan.v}",
            // 24: cvc v cvc vc
            "24:{aslan.cvc}{aslan.v}{aslan.cvc}{aslan.vc}",
            // 36: cvc vc v v
            "36:{aslan.cvc}{aslan.vc}{aslan.v}<!2>{aslan.v}",
            // 36: cvc vc v cv
            "36:{aslan.cvc}{aslan.vc}{aslan.v}{aslan.cv}",
            // 24: cvc vc v vc
            "24:{aslan.cvc}{aslan.vc}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}",
            // 24: cvc vc v cvc
            "24:{aslan.cvc}{aslan.vc}{aslan.v}{aslan.cvc}",
            // 24: cvc vc vc v
            "24:{aslan.cvc}{aslan.vc}{aslan.vc}{aslan.v}",
            // 16: cvc vc vc vc
            "16:{aslan.cvc}{aslan.vc}{aslan.vc}{aslan.vc}"
        ],
        "3sylword":[
            // 27: v v v
            "27:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}",
            // 27: v v cv
            "27:{aslan.v}<!0>{aslan.v}{aslan.cv}",
            // 18: v v vc
            "18:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}",
            // 18: v v cvc
            "18:{aslan.v}<!0>{aslan.v}{aslan.cvc}",
            // 27: v cv v
            "27:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}",
            // 27: v cv cv
            "27:{aslan.v}{aslan.cv}{aslan.cv}",
            // 18: v cv vc
            "18:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}",
            // 18: v cv cvc
            "18:{aslan.v}{aslan.cv}{aslan.cvc}",
            // 18: v vc v
            "18:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // 12: v vc vc
            "12:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // 18: v cvc v
            "18:{aslan.v}{aslan.cvc}{aslan.v}",
            // 12: v cvc vc
            "12:{aslan.v}{aslan.cvc}{aslan.vc}",
            // 27: cv v v
            "27:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}",
            // 27: cv v cv
            "27:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.cv}",
            // 18: cv v vc
            "18:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}",
            // 18: cv v cvc
            "18:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.cvc}",
            // 27: cv cv v
            "27:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}",
            // 27: cv cv cv
            "27:{aslan.cv}{aslan.cv}{aslan.cv}",
            // 18: cv cv vc
            "18:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}",
            // 18: cv cv cvc
            "18:{aslan.cv}{aslan.cv}{aslan.cvc}",
            // 18: cv vc v
            "18:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // 12: cv vc vc
            "12:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // 18: cv cvc v
            "18:{aslan.cv}{aslan.cvc}{aslan.v}",
            // 12: cv cvc vc
            "12:{aslan.cv}{aslan.cvc}{aslan.vc}",
            // 18: vc v v
            "18:{aslan.vc}{aslan.v}<!1>{aslan.v}",
            // 18: vc v cv
            "18:{aslan.vc}{aslan.v}{aslan.cv}",
            // 12: vc v vc
            "12:{aslan.vc}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}",
            // 12: vc v cvc
            "12:{aslan.vc}{aslan.v}{aslan.cvc}",
            // 12: vc vc v
            "12:{aslan.vc}{aslan.vc}{aslan.v}",
            // 8: vc vc vc
            "8:{aslan.vc}{aslan.vc}{aslan.vc}",
            // 18: cvc v v
            "18:{aslan.cvc}{aslan.v}<!1>{aslan.v}",
            // 18: cvc v cv
            "18:{aslan.cvc}{aslan.v}{aslan.cv}",
            // 12: cvc v vc
            "12:{aslan.cvc}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}",
            // 12: cvc v cvc
            "12:{aslan.cvc}{aslan.v}{aslan.cvc}",
            // 12: cvc vc v
            "12:{aslan.cvc}{aslan.vc}{aslan.v}",
            // 8: cvc vc vc
            "8:{aslan.cvc}{aslan.vc}{aslan.vc}"
        ],        
        "5sylword":[
            // 243: v v v v v
            "243:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}<!2>{aslan.v}<!3>{aslan.v}",
            // 243: v v v v cv
            "243:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.cv}",
            // 162: v v v v vc
            "162:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}",
            // 162: v v v v cvc
            "162:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.cvc}",
            // 243: v v v cv v
            "243:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}",
            // 243: v v v cv cv
            "243:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}{aslan.cv}{aslan.cv}",
            // 162: v v v cv vc
            "162:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // 162: v v v cv cvc
            "162:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}{aslan.cv}{aslan.cvc}",
            // 162: v v v vc v
            "162:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // 108: v v v vc vc
            "108:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // 162: v v v cvc v
            "162:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}{aslan.cvc}{aslan.v}",
            // 108: v v v cvc vc
            "108:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}{aslan.cvc}{aslan.vc}",
            // 243: v v cv v v
            "243:{aslan.v}<!0>{aslan.v}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}<!4>{aslan.v}",
            // 243: v v cv v cv
            "243:{aslan.v}<!0>{aslan.v}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.cv}",
            // 162: v v cv v vc
            "162:{aslan.v}<!0>{aslan.v}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // 162: v v cv v cvc
            "162:{aslan.v}<!0>{aslan.v}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.cvc}",
            // 243: v v cv cv v
            "243:{aslan.v}<!0>{aslan.v}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}",
            // 243: v v cv cv cv
            "243:{aslan.v}<!0>{aslan.v}{aslan.cv}{aslan.cv}{aslan.cv}",
            // 162: v v cv cv vc
            "162:{aslan.v}<!0>{aslan.v}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // 162: v v cv cv cvc
            "162:{aslan.v}<!0>{aslan.v}{aslan.cv}{aslan.cv}{aslan.cvc}",
            // 162: v v cv vc v
            "162:{aslan.v}<!0>{aslan.v}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}{aslan.v}", 
            // 108: v v cv vc vc
            "108:{aslan.v}<!0>{aslan.v}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // 162: v v cv cvc v
            "162:{aslan.v}<!0>{aslan.v}{aslan.cv}{aslan.cvc}{aslan.v}",
            // 108: v v cv cvc vc
            "108:{aslan.v}<!0>{aslan.v}{aslan.cv}{aslan.cvc}{aslan.vc}",
            // 162: v v vc v v
            "162:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}<!4>{aslan.v}",
            // 162: v v vc v cv
            "162:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cv}",
            // 108: v v vc v vc
            "108:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // 108: v v vc v cvc
            "108:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cvc}",
            // 108: v v vc vc v
            "108:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.v}",
            // 72: v v vc vc vc
            "72:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.vc}",
            // 162: v v cvc v v
            "162:{aslan.v}<!0>{aslan.v}{aslan.cvc}{aslan.v}<!3>{aslan.v}",
            // 162: v v cvc v cv
            "162:{aslan.v}<!0>{aslan.v}{aslan.cvc}{aslan.v}<!3>{aslan.v}{aslan.cv}",
            // 108: v v cvc v vc
            "108:{aslan.v}<!0>{aslan.v}{aslan.cvc}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}",
            // 108: v v cvc v cvc
            "108:{aslan.v}<!0>{aslan.v}{aslan.cvc}{aslan.v}{aslan.cvc}",
            // 108: v v cvc vc v
            "108:{aslan.v}<!0>{aslan.v}{aslan.cvc}{aslan.vc}{aslan.v}",
            // 72: v v cvc vc vc
            "72:{aslan.v}<!0>{aslan.v}{aslan.cvc}{aslan.vc}{aslan.vc}",
            // 243: v cv v v v
            "243:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}<!4>{aslan.v}",
            // 243: v cv v v cv
            "243:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.cv}",
            // 162: v cv v v vc
            "162:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // 162: v cv v v cvc
            "162:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.cvc}",
            // 243: v cv v cv v
            "243:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.initialconsonant}{aslan.v}<!5>{aslan.v}",
            // 243: v cv v cv cv
            "243:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.cv}{aslan.cv}",
            // 162: v cv v cv vc
            "162:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.initialconsonant}{aslan.v}<!5>{aslan.v}{aslan.finalconsonant}",
            // 162: v cv v cv cvc
            "162:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.cv}{aslan.cvc}",
            // 162: v cv v vc v
            "162:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // 108: v cv v vc vc
            "108:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // 162: v cv v cvc v
            "162:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.cvc}{aslan.v}",
            // 108: v cv v cvc vc
            "108:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.cvc}{aslan.vc}",
            // 243: v cv cv v v
            "243:{aslan.v}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}<!4>{aslan.v}",
            // 243: v cv cv v cv
            "243:{aslan.v}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.cv}",
            // 162: v cv cv v vc
            "162:{aslan.v}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // 162: v cv cv v cvc
            "162:{aslan.v}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.cvc}",
            // v cv cv cv v
            "243:{aslan.v}{aslan.cv}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}",
            // 243: v cv cv cv cv
            "243:{aslan.v}{aslan.cv}{aslan.cv}{aslan.cv}{aslan.cv}",
            // 162: v cv cv cv vc
            "162:{aslan.v}{aslan.cv}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // 162: v cv cv cv cvc
            "162:{aslan.v}{aslan.cv}{aslan.cv}{aslan.cv}{aslan.cvc}",
            // 162: v cv cv vc v
            "162:{aslan.v}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // 108: v cv cv vc vc
            "108:{aslan.v}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // 162: v cv cv cvc v
            "162:{aslan.v}{aslan.cv}{aslan.cv}{aslan.cvc}{aslan.v}",
            // 108: v cv cv cvc vc
            "108:{aslan.v}{aslan.cv}{aslan.cv}{aslan.cvc}{aslan.vc}",
            // 162: v cv vc v v
            "162:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}<!5>{aslan.v}",
            // 162: v cv vc v cv
            "162:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cv}",
            // 108: v cv vc v vc
            "108:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}<!5>{aslan.v}{aslan.finalconsonant}",
            // 108: v cv vc v cvc
            "108:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cvc}",
            // 108: v cv vc vc v
            "108:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.v}",
            // 72: v cv vc vc vc
            "72:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.vc}", 
            // 162: v cv cvc v v
            "162:{aslan.v}{aslan.cv}{aslan.cvc}{aslan.v}<!3>{aslan.v}",
            // 162: v cv cvc v cv
            "162:{aslan.v}{aslan.cv}{aslan.cvc}{aslan.v}{aslan.cv}",
            // 108: v cv cvc v vc
            "108:{aslan.v}{aslan.cv}{aslan.cvc}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}",
            // 108: v cv cvc v cvc
            "108:{aslan.v}{aslan.cv}{aslan.cvc}{aslan.v}{aslan.cvc}",
            // 108: v cv cvc vc v
            "108:{aslan.v}{aslan.cv}{aslan.cvc}{aslan.vc}{aslan.v}",
            // 72: v cv cvc vc vc
            "72:{aslan.v}{aslan.cv}{aslan.cvc}{aslan.vc}{aslan.vc}",
            // 162: v vc v v v
            "162:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.v}<!3>{aslan.v}<!4>{aslan.v}",
            // 162: v vc v v cv
            "162:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.v}<!3>{aslan.v}{aslan.cv}",
            // 108: v vc v v vc
            "108:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.v}<!3>{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // 108: v vc v v cvc
            "108:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.v}<!3>{aslan.v}{aslan.cvc}",
            // 162: v vc v cv v
            "162:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.initialconsonant}{aslan.v}<!5>{aslan.v}",
            // 162: v vc v cv cv
            "162:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cv}{aslan.cv}",
            // 108: v vc v cv vc
            "108:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.initialconsonant}{aslan.v}<!5>{aslan.v}{aslan.finalconsonant}",
            // 108: v vc v cv cvc
            "108:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cv}{aslan.cvc}",
            // 108: v vc v vc v
            "108:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // 72: v vc v vc vc
            "72:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // 108: v vc v cvc v
            "108:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cvc}{aslan.v}",
            // 72: v vc v cvc vc
            "72:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cvc}{aslan.vc}",
            // 108: v vc vc v v
            "108:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.v}<!4>{aslan.v}",
            // 108: v vc vc v cv
            "108:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.v}{aslan.cv}",
            // 72: v vc vc v vc
            "72:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // 72: v vc vc v cvc
            "72:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.v}{aslan.cvc}",
            // 72: v vc vc vc v
            "72:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.vc}{aslan.v}",
            // 48: v vc vc vc vc
            "48:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.vc}{aslan.vc}",
            // 162: v cvc v v v
            "162:{aslan.v}{aslan.cvc}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}",
            // 162: v cvc v v cv
            "162:{aslan.v}{aslan.cvc}{aslan.v}<!2>{aslan.v}{aslan.cv}",
            // 108: v cvc v v vc
            "108:{aslan.v}{aslan.cvc}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}",
            // 162: v cvc v cv v
            "162:{aslan.v}{aslan.cvc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}",
            // 162: v cvc v cv cv
            "162:{aslan.v}{aslan.cvc}{aslan.v}{aslan.cv}{aslan.cv}",
            // 108: v cvc v cv vc
            "108:{aslan.v}{aslan.cvc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // 108: v cvc v cv cvc
            "108:{aslan.v}{aslan.cvc}{aslan.v}{aslan.cv}{aslan.cvc}",
            // 108: v cvc v vc v
            "108:{aslan.v}{aslan.cvc}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // 72: v cvc v vc vc
            "72:{aslan.v}{aslan.cvc}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // 108: v cvc v cvc v
            "108:{aslan.v}{aslan.cvc}{aslan.v}{aslan.cvc}{aslan.v}",
            // 72: v cvc v cvc vc
            "72:{aslan.v}{aslan.cvc}{aslan.v}{aslan.cvc}{aslan.vc}",
            // 108: v cvc vc v v
            "108:{aslan.v}{aslan.cvc}{aslan.vc}{aslan.v}<!3>{aslan.v}",
            // 108: v cvc vc v cv
            "108:{aslan.v}{aslan.cvc}{aslan.vc}{aslan.v}{aslan.cv}",
            // 72: v cvc vc v vc
            "72:{aslan.v}{aslan.cvc}{aslan.vc}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}",
            // 72: v cvc vc v cvc
            "72:{aslan.v}{aslan.cvc}{aslan.vc}{aslan.v}{aslan.cvc}",
            // 72: v cvc vc vc v
            "72:{aslan.v}{aslan.cvc}{aslan.vc}{aslan.vc}{aslan.v}",
            // 48: v cvc vc vc vc
            "48:{aslan.v}{aslan.cvc}{aslan.vc}{aslan.vc}{aslan.vc}",
            // 243: cv v v v v
            "243:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}<!3>{aslan.v}<!4>{aslan.v}",
            // 243: cv v v v cv
            "243:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.cv}",
            // 162: cv v v v vc
            "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}<!3>{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // 162: cv v v v cvc
            "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.cvc}",
            // 243: cv v v cv v
            "243:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.initialconsonant}{aslan.v}<!5>{aslan.v}",
            // 243: cv v v cv cv
            "243:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.cv}{aslan.cv}",
            // 162: cv v v cv vc
            "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.initialconsonant}{aslan.v}<!5>{aslan.v}{aslan.finalconsonant}",
            // 162: cv v v cv cvc
            "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.cv}{aslan.cvc}",
            // 162: cv v v vc v
            "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // 108: cv v v vc vc
            "108:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // 162: cv v v cvc v
            "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.cvc}{aslan.v}",
            // 108: cv v v cvc vc
            "108:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.cvc}{aslan.vc}",
            // 243: cv v cv v v
            "243:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}<!5>{aslan.v}",
            // 243: cv v cv v cv
            "243:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}{aslan.cv}",
            // 162: cv v cv v vc
            "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}<!5>{aslan.v}{aslan.finalconsonant}",
            // 162: cv v cv v cvc
            "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}{aslan.cvc}",
            // 243: cv v cv cv v
            "243:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!5>{aslan.v}",
            // 243: cv v cv cv cv
            "243:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.cv}{aslan.cv}{aslan.cv}",
            // 162: cv v cv cv vc
            "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!5>{aslan.v}{aslan.finalconsonant}",
            // 162: cv v cv cv cvc
            "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.cv}{aslan.cv}{aslan.cvc}",
            // 162: cv v cv vc v
            "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // 108: cv v cv vc vc
            "108:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // 162: cv v cv cvc v
            "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.cv}{aslan.cvc}{aslan.v}",
            // 108: cv v cv cvc vc
            "108:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.cv}{aslan.cvc}{aslan.vc}",
            // 162: cv v vc v v
            "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}<!5>{aslan.v}",
            // 162: cv v vc v cv
            "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cv}",
            // 108: cv v vc v vc
            "108:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}<!5>{aslan.v}{aslan.finalconsonant}",
            // 108: cv v vc v cvc
            "108:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cvc}",
            // 108: cv v vc vc v
            "108:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.v}",
            // 72: cv v vc vc vc
            "72:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.vc}", 
            // 162: cv v cvc v v
            "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.cvc}{aslan.initialconsonant}{aslan.v}<!5>{aslan.v}",
            // 162: cv v cvc v cv
            "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.cvc}{aslan.v}<!4>{aslan.v}{aslan.cv}",
            // 108: cv v cvc v vc
            "108:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.cvc}{aslan.initialconsonant}{aslan.v}<!5>{aslan.v}{aslan.finalconsonant}",
            // 108: cv v cvc v cvc
            "108:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.cvc}{aslan.v}{aslan.cvc}",
            // 108: cv v cvc vc v
            "108:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.cvc}{aslan.vc}{aslan.v}",
            // 72: cv v cvc vc vc
            "72:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.cvc}{aslan.vc}{aslan.vc}",
            // 243: cv cv v v v
            "243:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}<!4>{aslan.v}",
            // 243: cv cv v v cv
            "243:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.cv}",
            // 162: cv cv v v vc
            "162:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // 162: cv cv v v cvc
            "162:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.cvc}",
            // 243: cv cv v cv v
            "243:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.initialconsonant}{aslan.v}<!5>{aslan.v}",
            // 243: cv cv v cv cv
            "243:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.cv}{aslan.cv}",
            // 162: cv cv v cv vc
            "162:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.initialconsonant}{aslan.v}<!5>{aslan.v}{aslan.finalconsonant}",
            // 162: cv cv v cv cvc
            "162:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.cv}{aslan.cvc}",
            // 162: cv cv v vc v
            "162:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // 108: cv cv v vc vc
            "108:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // 162: cv cv v cvc v
            "162:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.cvc}{aslan.v}",
            // 108: cv cv v cvc vc
            "108:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.cvc}{aslan.vc}",
            // 243: cv cv cv v v
            "243:{aslan.cv}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}<!4>{aslan.v}",
            // 243: cv cv cv v cv
            "243:{aslan.cv}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.cv}",
            // 162: cv cv cv v vc
            "162:{aslan.cv}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // 162: cv cv cv v cvc
            "162:{aslan.cv}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.cvc}",
            // 243: cv cv cv cv v
            "243:{aslan.cv}{aslan.cv}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}",
            // 243: cv cv cv cv cv
            "243:{aslan.cv}{aslan.cv}{aslan.cv}{aslan.cv}",
            // 162: cv cv cv cv vc
            "162:{aslan.cv}{aslan.cv}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // 162: cv cv cv cv cvc
            "162:{aslan.cv}{aslan.cv}{aslan.cv}{aslan.cvc}",
            // 162: cv cv cv vc v
            "162:{aslan.cv}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // 108: cv cv cv vc vc
            "108:{aslan.cv}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // 162: cv cv cv cvc v
            "162:{aslan.cv}{aslan.cv}{aslan.cv}{aslan.cvc}{aslan.v}", 
            // 108: cv cv cv cvc vc
            "108:{aslan.cv}{aslan.cv}{aslan.cv}{aslan.cvc}{aslan.vc}",
            // 162: cv cv vc v v
            "162:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}<!5>{aslan.v}",
            // 162: cv cv vc v cv
            "162:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cv}",
            // 108: cv cv vc v vc
            "108:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}<!5>{aslan.v}{aslan.finalconsonant}",
            // 108: cv cv vc v cvc
            "108:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cvc}",
            // 108: cv cv vc vc v
            "108:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.v}",
            // 72: cv cv vc vc vc
            "72:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.vc}",
            // 162: cv cv cvc v v
            "162:{aslan.cv}{aslan.cv}{aslan.cvc}{aslan.v}<!3>{aslan.v}",
            // 162: cv cv cvc v cv
            "162:{aslan.cv}{aslan.cv}{aslan.cvc}{aslan.v}{aslan.cv}",
            // 108: cv cv cvc v vc
            "108:{aslan.cv}{aslan.cv}{aslan.cvc}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}",
            // 108: cv cv cvc v cvc
            "108:{aslan.cv}{aslan.cv}{aslan.cvc}{aslan.v}{aslan.cvc}",
            // 108: cv cv cvc vc v
            "108:{aslan.cv}{aslan.cv}{aslan.cvc}{aslan.vc}{aslan.v}",
            // 72: cv cv cvc vc vc
            "72:{aslan.cv}{aslan.cv}{aslan.cvc}{aslan.vc}{aslan.vc}",
            // 162: cv vc v v v
            "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}<!4>{aslan.v}<!5>{aslan.v}",
            // 162: cv vc v v cv
            "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}<!4>{aslan.v}{aslan.cv}",
            // 108: cv vc v v vc
            "108:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}<!4>{aslan.v}<!5>{aslan.v}{aslan.finalconsonant}",
            // 108: cv vc v v cvc
            "108:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}<!4>{aslan.v}{aslan.cvc}",
            // 162: cv vc v cv v
            "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.initialconsonant}{aslan.v}<!6>{aslan.v}",
            // 162: cv vc v cv cv
            "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cv}{aslan.cv}",
            // 108: cv vc v cv vc
            "108:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.initialconsonant}{aslan.v}<!6>{aslan.v}{aslan.finalconsonant}",
            // 108: cv vc v cv cvc
            "108:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cv}{aslan.cvc}",
            // 108: cv vc v vc v
            "108:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // 72: cv vc v vc vc
            "72:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // 108: cv vc v cvc v
            "108:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cvc}{aslan.v}",
            // 72: cv vc v cvc vc
            "72:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cvc}{aslan.vc}",
            // 108: cv vc vc v v
            "108:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.v}<!5>{aslan.v}",
            // 108: cv vc vc v cv
            "108:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.v}{aslan.cv}",
            // 72: cv vc vc v vc
            "72:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.v}<!5>{aslan.v}{aslan.finalconsonant}",
            // 72: cv vc vc v cvc
            "72:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.v}{aslan.cvc}",
            // 72: cv vc vc vc v
            "72:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.vc}{aslan.v}",
            // 48: cv vc vc vc vc
            "48:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.vc}{aslan.vc}",
            // 162: cv cvc v v v
            "162:{aslan.cv}{aslan.cvc}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}",
            // 162: cv cvc v v cv
            "162:{aslan.cv}{aslan.cvc}{aslan.v}<!2>{aslan.v}{aslan.cv}",
            // 108: cv cvc v v vc
            "108:{aslan.cv}{aslan.cvc}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}",
            // 108: cv cvc v v cvc
            "108:{aslan.cv}{aslan.cvc}{aslan.v}<!2>{aslan.v}{aslan.cvc}",
            // 162: cv cvc v cv v
            "162:{aslan.cv}{aslan.cvc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}",
            // 162: cv cvc v cv cv
            "162:{aslan.cv}{aslan.cvc}{aslan.v}{aslan.cv}{aslan.cv}",
            // 108: cv cvc v cv vc
            "108:{aslan.cv}{aslan.cvc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // 108: cv cvc v cv cvc
            "108:{aslan.cv}{aslan.cvc}{aslan.v}{aslan.cv}{aslan.cvc}",
            // 108: cv cvc v vc v
            "108:{aslan.cv}{aslan.cvc}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}", 
            // 72: cv cvc v vc vc
            "72:{aslan.cv}{aslan.cvc}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // 108: cv cvc v cvc v
            "108:{aslan.cv}{aslan.cvc}{aslan.v}{aslan.cvc}{aslan.v}",
            // 72: cv cvc v cvc vc
            "72:{aslan.cv}{aslan.cvc}{aslan.v}{aslan.cvc}{aslan.vc}",
            // 108: cv cvc vc v v
            "108:{aslan.cv}{aslan.cvc}{aslan.vc}{aslan.v}<!3>{aslan.v}",
            // 108: cv cvc vc v cv
            "108:{aslan.cv}{aslan.cvc}{aslan.vc}{aslan.v}{aslan.cv}",
            // cv cvc vc v vc
            "72:{aslan.cv}{aslan.cvc}{aslan.vc}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}",
            // 72: cv cvc vc v cvc
            "72:{aslan.cv}{aslan.cvc}{aslan.vc}{aslan.v}{aslan.cvc}",
            // 72: cv cvc vc vc v
            "72:{aslan.cv}{aslan.cvc}{aslan.vc}{aslan.vc}{aslan.v}",
            // 48: cv cvc vc vc vc
            "48:{aslan.cv}{aslan.cvc}{aslan.vc}{aslan.vc}{aslan.vc}",
            // 162: vc v v v v
            "162:{aslan.vc}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}<!3>{aslan.v}",
            // 162: vc v v v cv
            "162:{aslan.vc}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.cv}",
            // 108: vc v v v vc
            "108:{aslan.vc}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}",
            // 108: vc v v v cvc
            "108:{aslan.vc}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.cvc}",
            // 162: vc v v cv v
            "162:{aslan.vc}{aslan.v}<!1>{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}",
            // 162: vc v v cv cv
            "162:{aslan.vc}{aslan.v}<!1>{aslan.v}{aslan.cv}{aslan.cv}",
            // 108: vc v v cv vc
            "108:{aslan.vc}{aslan.v}<!1>{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // 108: vc v v cv cvc
            "108:{aslan.vc}{aslan.v}<!1>{aslan.v}{aslan.cv}{aslan.cvc}",
            // 108: vc v v vc v
            "108:{aslan.vc}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // 72: vc v v vc vc
            "72:{aslan.vc}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // 108: vc v v cvc v
            "108:{aslan.vc}{aslan.v}<!1>{aslan.v}{aslan.cvc}{aslan.v}",
            // 72: vc v v cvc vc
            "72:{aslan.vc}{aslan.v}<!1>{aslan.v}{aslan.cvc}{aslan.vc}",
            // 162: vc v cv v v
            "162:{aslan.vc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}<!4>{aslan.v}",
            // 162: vc v cv v cv
            "162:{aslan.vc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.cv}",
            // 108: vc v cv v vc
            "108:{aslan.vc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // 108: vc v cv v cvc
            "108:{aslan.vc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.cvc}",
            // 162: vc v cv cv v
            "162:{aslan.vc}{aslan.v}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}",
            // 162: vc v cv cv cv
            "162:{aslan.vc}{aslan.v}{aslan.cv}{aslan.cv}",
            // 108: vc v cv cv vc
            "108:{aslan.vc}{aslan.v}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // 108: vc v cv cv cvc
            "108:{aslan.vc}{aslan.v}{aslan.cv}{aslan.cvc}",
            // 108: vc v cv vc v
            "108:{aslan.vc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // 72: vc v cv vc vc
            "72:{aslan.vc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // 108: vc v cv cvc v
            "108:{aslan.vc}{aslan.v}{aslan.cv}{aslan.cvc}{aslan.v}",
            // 72: vc v cv cvc vc
            "72:{aslan.vc}{aslan.v}{aslan.cv}{aslan.cvc}{aslan.vc}",
            // 108: vc v vc v v
            "108:{aslan.vc}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}<!4>{aslan.v}",
            // 108: vc v vc v cv
            "108:{aslan.vc}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cv}",
            // 72: vc v vc v vc
            "72:{aslan.vc}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // 72: vc v vc v cvc
            "72:{aslan.vc}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cvc}",
            // 72: vc v vc vc v
            "72:{aslan.vc}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.v}",
            // 48: vc v vc vc vc
            "48:{aslan.vc}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.vc}",
            // 108: vc v cvc v v
            "108:{aslan.vc}{aslan.v}{aslan.cvc}{aslan.v}<!3>{aslan.v}",
            // 108: vc v cvc v cv
            "108:{aslan.vc}{aslan.v}{aslan.cvc}{aslan.v}{aslan.cv}", 
            // 72: vc v cvc v vc
            "72:{aslan.vc}{aslan.v}{aslan.cvc}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}",
            // 72: vc v cvc v cvc
            "72:{aslan.vc}{aslan.v}{aslan.cvc}{aslan.v}{aslan.cvc}",
            // 72: vc v cvc vc v
            "72:{aslan.vc}{aslan.v}{aslan.cvc}{aslan.vc}{aslan.v}",
            // 48: vc v cvc vc vc
            "48:{aslan.vc}{aslan.v}{aslan.cvc}{aslan.vc}{aslan.vc}",
            // 108: vc vc v v v
            "108:{aslan.vc}{aslan.vc}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}",
            // 108: vc vc v v cv
            "108:{aslan.vc}{aslan.vc}{aslan.v}<!2>{aslan.v}{aslan.cv}",
            // 72: vc vc v v vc
            "72:{aslan.vc}{aslan.vc}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}",
            // 72: vc vc v v cvc
            "72:{aslan.vc}{aslan.vc}{aslan.v}<!2>{aslan.v}{aslan.cvc}",
            // 108: vc vc v cv v
            "108:{aslan.vc}{aslan.vc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}",
            // 108: vc vc v cv cv 
            "108:{aslan.vc}{aslan.vc}{aslan.v}{aslan.cv}{aslan.cv}",
            // 72: vc vc v cv vc
            "72:{aslan.vc}{aslan.vc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // 72: vc vc v cv cvc
            "72:{aslan.vc}{aslan.vc}{aslan.v}{aslan.cv}{aslan.cvc}",
            // 72: vc vc v vc v
            "72:{aslan.vc}{aslan.vc}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // 48: vc vc v vc vc
            "48:{aslan.vc}{aslan.vc}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // 72: vc vc v cvc v
            "72:{aslan.vc}{aslan.vc}{aslan.v}{aslan.cvc}{aslan.v}",
            // 48: vc vc v cvc vc
            "48:{aslan.vc}{aslan.vc}{aslan.v}{aslan.cvc}{aslan.vc}",
            // 72: vc vc vc v v
            "72:{aslan.vc}{aslan.vc}{aslan.vc}{aslan.v}<!3>{aslan.v}",
            // 72: vc vc vc v cv
            "72:{aslan.vc}{aslan.vc}{aslan.vc}{aslan.v}{aslan.cv}",
            // 48: vc vc vc v vc
            "48:{aslan.vc}{aslan.vc}{aslan.vc}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}",
            // 48: vc vc vc v cvc
            "48:{aslan.vc}{aslan.vc}{aslan.vc}{aslan.v}{aslan.cvc}",
            // 48: vc vc vc vc v
            "48:{aslan.vc}{aslan.vc}{aslan.vc}{aslan.vc}{aslan.v}",
            // 32: vc vc vc vc vc
            "32:{aslan.vc}{aslan.vc}{aslan.vc}{aslan.vc}",
            // 162: cvc v v v v
            "162:{aslan.cvc}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}<!3>{aslan.v}",
            // 162: cvc v v v cv
            "162:{aslan.cvc}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.cv}",
            // 108: cvc v v v vc
            "108:{aslan.cvc}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}",
            // 108: cvc v v v cvc
            "108:{aslan.cvc}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.cvc}",
            // 162: cvc v v cv v
            "162:{aslan.cvc}{aslan.v}<!1>{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}",
            // 162: cvc v v cv cv
            "162:{aslan.cvc}{aslan.v}<!1>{aslan.v}{aslan.cv}{aslan.cv}",
            // 108: cvc v v cv vc
            "108:{aslan.cvc}{aslan.v}<!1>{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // 108: cvc v v cv cvc
            "108:{aslan.cvc}{aslan.v}<!1>{aslan.v}{aslan.cv}{aslan.cvc}",
            // 108: cvc v v vc v
            "108:{aslan.cvc}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // 72: cvc v v vc vc
            "72:{aslan.cvc}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // 108: cvc v v cvc v
            "108:{aslan.cvc}{aslan.v}<!1>{aslan.v}{aslan.cvc}{aslan.v}",
            // 72: cvc v v cvc vc
            "72:{aslan.cvc}{aslan.v}<!1>{aslan.v}{aslan.cvc}{aslan.vc}",
            // 162: cvc v cv v v
            "162:{aslan.cvc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}<!4>{aslan.v}",
            // 162: cvc v cv v cv
            "162:{aslan.cvc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.cv}",
            // 108: cvc v cv v vc
            "108:{aslan.cvc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // 108: cvc v cv v cvc
            "108:{aslan.cvc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.cvc}",
            // 162: cvc v cv cv v
            "162:{aslan.cvc}{aslan.v}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}",
            // 162: cvc v cv cv cv
            "162:{aslan.cvc}{aslan.v}{aslan.cv}{aslan.cv}",
            // 108: cvc v cv cv vc
            "108:{aslan.cvc}{aslan.v}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // 108: cvc v cv cv cvc
            "108:{aslan.cvc}{aslan.v}{aslan.cv}{aslan.cvc}",
            // 108: cvc v cv vc v
            "108:{aslan.cvc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // 72: cvc v cv vc vc
            "72:{aslan.cvc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // 108: cvc v cv cvc v
            "108:{aslan.cvc}{aslan.v}{aslan.cv}{aslan.cvc}{aslan.v}",
            // 72: cvc v cv cvc vc
            "72:{aslan.cvc}{aslan.v}{aslan.cv}{aslan.cvc}{aslan.vc}",
            // 108: cvc v vc v v
            "108:{aslan.cvc}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}<!4>{aslan.v}",
            // 108: cvc v vc v cv
            "108:{aslan.cvc}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cv}",
            // 72: cvc v vc v vc
            "72:{aslan.cvc}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // 72: cvc v vc v cvc
            "72:{aslan.cvc}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cvc}",
            // 72: cvc v vc vc v
            "72:{aslan.cvc}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.v}",
            // 48: cvc v vc vc vc
            "48:{aslan.cvc}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.vc}",
            // 108: cvc v cvc v v
            "108:{aslan.cvc}{aslan.v}{aslan.cvc}{aslan.v}<!3>{aslan.v}",
            // 108: cvc v cvc v cv
            "108:{aslan.cvc}{aslan.v}{aslan.cvc}{aslan.v}{aslan.cv}",
            // 72: cvc v cvc v vc
            "72:{aslan.cvc}{aslan.v}{aslan.cvc}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}",
            // 72: cvc v cvc v cvc
            "72:{aslan.cvc}{aslan.v}{aslan.cvc}{aslan.v}{aslan.cvc}",
            // 72: cvc v cvc vc v
            "72:{aslan.cvc}{aslan.v}{aslan.cvc}{aslan.vc}{aslan.v}",
            // 48: cvc v cvc vc vc
            "48:{aslan.cvc}{aslan.v}{aslan.cvc}{aslan.vc}{aslan.vc}",
            // 108: cvc vc v v v
            "108:{aslan.cvc}{aslan.vc}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}",
            // 108: cvc vc v v cv
            "108:{aslan.cvc}{aslan.vc}{aslan.v}<!2>{aslan.v}{aslan.cv}",
            // 72: cvc vc v v vc
            "72:{aslan.cvc}{aslan.vc}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}",
            // 72: cvc vc v v cvc
            "72:{aslan.cvc}{aslan.vc}{aslan.v}<!2>{aslan.v}{aslan.cvc}",
            // 108: cvc vc v cv v       
            "108:{aslan.cvc}{aslan.vc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}",
            // 108: cvc vc v cv cv
            "108:{aslan.cvc}{aslan.vc}{aslan.v}{aslan.cv}{aslan.cv}",
            // 72: cvc vc v cv vc
            "72:{aslan.cvc}{aslan.vc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // 72: cvc vc v cv cvc
            "72:{aslan.cvc}{aslan.vc}{aslan.v}{aslan.cvc}{aslan.cvc}",
            // 72: cvc vc v vc v
            "72:{aslan.cvc}{aslan.vc}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // 48: cvc vc v vc vc
            "48:{aslan.cvc}{aslan.vc}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // 72: cvc vc v cvc v
            "72:{aslan.cvc}{aslan.vc}{aslan.v}{aslan.cvc}{aslan.v}",
            // 48: cvc vc v cvc vc
            "48:{aslan.cvc}{aslan.vc}{aslan.v}{aslan.cvc}{aslan.vc}",
            // 72: cvc vc vc v v
            "72:{aslan.cvc}{aslan.vc}{aslan.vc}{aslan.v}<!3>{aslan.v}",
            // 72: cvc vc vc v cv
            "72:{aslan.cvc}{aslan.vc}{aslan.vc}{aslan.v}{aslan.cv}",
            // 48: cvc vc vc v vc
            "48:{aslan.cvc}{aslan.vc}{aslan.vc}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}",
            // 48: cvc vc vc v cvc
            "48:{aslan.cvc}{aslan.vc}{aslan.vc}{aslan.v}{aslan.cvc}",
            // 48: cvc vc vc vc v
            "48:{aslan.cvc}{aslan.vc}{aslan.vc}{aslan.vc}{aslan.v}",
            // 32: cvc vc vc vc vc
            "32:{aslan.cvc}{aslan.vc}{aslan.vc}{aslan.vc}{aslan.vc}"            
        ],
        "6sylword":["{aslan.syllable}{aslan.syllable}{aslan.syllable}{aslan.syllable}{aslan.syllable}{aslan.syllable}"],
        "v6":[
            // 243: v v v v v v
            "243:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}<!2>{aslan.v}<!3>{aslan.v}<!4>{aslan.v}",
            // 243: v v v v v cv
            "243:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.cv}",          
            // 162: v v v v v vc
            "162:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}<!2>{aslan.v}<!3>{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // 162: v v v v v cvc
            "162:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.cvc}", 
            // 243: v v v v cv v
            "243:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.cv}<!3>{aslan.v}",
            // 243: v v v v cv cv
            "243:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.cv}{aslan.cv}",            
            // 162: v v v v cv vc
            "162:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.initialConsonant}{aslan.v}<!5>{aslan.v}{aslan.finalconsonant}",
            // 162: v v v v cv cvc
            "162:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.cv}{aslan.cvc}",
            // 162: v v v v vc v
            "162:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // 108: v v v v vc vc
            "108:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // 162: v v v v cvc v
            "162:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.cvc}{aslan.v}",
            // 108: v v v v cvc vc
            "108:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.cvc}{aslan.vc}",
            // 243: v v v cv v v
            "243:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}{aslan.initialConsonant}{aslan.v}<!4>{aslan.v}<!5>{aslan.v}",
            // 243: v v v cv v cv
            "243:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}{aslan.initialConsonant}{aslan.v}<!4>{aslan.v}{aslan.cv}",
            // 162: v v v cv v vc
            "162:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}{aslan.initialConsonant}{aslan.v}<!4>{aslan.v}<!5>{aslan.v}{aslan.finalconsonant}",
            // 162: v v v cv v cvc
            "162:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}{aslan.initialConsonant}{aslan.v}<!4>{aslan.v}{aslan.cvc}",
            // 243: v v v cv cv v
            "243:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}{aslan.cv}{aslan.initialConsonant}{aslan.v}<!5>{aslan.v}",
            // 243: v v v cv cv cv
            "243:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}{aslan.cv}{aslan.cv}{aslan.cv}",
            // 162: v v v cv cv vc
            "162:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}{aslan.cv}{aslan.initialConsonant}{aslan.v}<!5>{aslan.v}{aslan.finalconsonant}",
            // 162: v v v cv cv cvc
            "162:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}{aslan.cv}{aslan.cv}{aslan.cvc}",
            // 162: v v v cv vc v
            "162:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // 108: v v v cv vc vc
            "108:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // 162: v v v cv cvc v
            "162:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}{aslan.cv}{aslan.cvc}{aslan.v}",
            // 108: v v v cv cvc vc
            "108:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}{aslan.cv}{aslan.cvc}{aslan.vc}",
            // 162: v v v vc v v
            "162:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}<!5>{aslan.v}",
            // 162: v v v vc v cv
            "162:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cv}",
            // 108: v v v vc v vc
            "108:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}<!5>{aslan.v}{aslan.finalconsonant}",
            // 108: v v v vc v cvc
            "108:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cvc}",
            // 108: v v v vc cv v
            "108:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.initialConsonant}{aslan.v}<6>{aslan.v}",
            // 108: v v v vc vc v
            "108:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.v}",
            // 72: v v v vc vc vc
            "72:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.vc}",
            // 162: v v v cvc v v
            "162:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}{aslan.cvc}{aslan.v}<!4>{aslan.v}",
            // 162: v v v cvc v cv
            "162:{aslan.v}<!0>{aslan.v}<!1>{aslan.v}{aslan.cvc}{aslan.v}<!4>{aslan.v}{aslan.cv}"
            // // 162: v v cvc v cv
            // "162:{aslan.v}<!0>{aslan.v}{aslan.cvc}{aslan.v}<!3>{aslan.v}{aslan.cv}",
            // // 108: v v cvc v vc
            // "108:{aslan.v}<!0>{aslan.v}{aslan.cvc}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}",
            // // 108: v v cvc v cvc
            // "108:{aslan.v}<!0>{aslan.v}{aslan.cvc}{aslan.v}{aslan.cvc}",
            // // 108: v v cvc vc v
            // "108:{aslan.v}<!0>{aslan.v}{aslan.cvc}{aslan.vc}{aslan.v}",
            // // 72: v v cvc vc vc
            // "72:{aslan.v}<!0>{aslan.v}{aslan.cvc}{aslan.vc}{aslan.vc}",
            // // 243: v cv v v v
            // "243:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}<!4>{aslan.v}",
            // // 243: v cv v v cv
            // "243:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.cv}",
            // // 162: v cv v v vc
            // "162:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // // 162: v cv v v cvc
            // "162:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.cvc}",
            // // 243: v cv v cv v
            // "243:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.initialconsonant}{aslan.v}<!5>{aslan.v}",
            // // 243: v cv v cv cv
            // "243:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.cv}{aslan.cv}",
            // // 162: v cv v cv vc
            // "162:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.initialconsonant}{aslan.v}<!5>{aslan.v}{aslan.finalconsonant}",
            // // 162: v cv v cv cvc
            // "162:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.cv}{aslan.cvc}",
            // // 162: v cv v vc v
            // "162:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // // 108: v cv v vc vc
            // "108:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // // 162: v cv v cvc v
            // "162:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.cvc}{aslan.v}",
            // // 108: v cv v cvc vc
            // "108:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.cvc}{aslan.vc}",
            // // 243: v cv cv v v
            // "243:{aslan.v}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}<!4>{aslan.v}",
            // // 243: v cv cv v cv
            // "243:{aslan.v}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.cv}",
            // // 162: v cv cv v vc
            // "162:{aslan.v}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // // 162: v cv cv v cvc
            // "162:{aslan.v}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.cvc}",
            // // v cv cv cv v
            // "243:{aslan.v}{aslan.cv}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}",
            // // 243: v cv cv cv cv
            // "243:{aslan.v}{aslan.cv}{aslan.cv}{aslan.cv}{aslan.cv}",
            // // 162: v cv cv cv vc
            // "162:{aslan.v}{aslan.cv}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // // 162: v cv cv cv cvc
            // "162:{aslan.v}{aslan.cv}{aslan.cv}{aslan.cv}{aslan.cvc}",
            // // 162: v cv cv vc v
            // "162:{aslan.v}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // // 108: v cv cv vc vc
            // "108:{aslan.v}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // // 162: v cv cv cvc v
            // "162:{aslan.v}{aslan.cv}{aslan.cv}{aslan.cvc}{aslan.v}",
            // // 108: v cv cv cvc vc
            // "108:{aslan.v}{aslan.cv}{aslan.cv}{aslan.cvc}{aslan.vc}",
            // // 162: v cv vc v v
            // "162:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}<!5>{aslan.v}",
            // // 162: v cv vc v cv
            // "162:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cv}",
            // // 108: v cv vc v vc
            // "108:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}<!5>{aslan.v}{aslan.finalconsonant}",
            // // 108: v cv vc v cvc
            // "108:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cvc}",
            // // 108: v cv vc vc v
            // "108:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.v}",
            // // 72: v cv vc vc vc
            // "72:{aslan.v}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.vc}", 
            // // 162: v cv cvc v v
            // "162:{aslan.v}{aslan.cv}{aslan.cvc}{aslan.v}<!3>{aslan.v}",
            // // 162: v cv cvc v cv
            // "162:{aslan.v}{aslan.cv}{aslan.cvc}{aslan.v}{aslan.cv}",
            // // 108: v cv cvc v vc
            // "108:{aslan.v}{aslan.cv}{aslan.cvc}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}",
            // // 108: v cv cvc v cvc
            // "108:{aslan.v}{aslan.cv}{aslan.cvc}{aslan.v}{aslan.cvc}",
            // // 108: v cv cvc vc v
            // "108:{aslan.v}{aslan.cv}{aslan.cvc}{aslan.vc}{aslan.v}",
            // // 72: v cv cvc vc vc
            // "72:{aslan.v}{aslan.cv}{aslan.cvc}{aslan.vc}{aslan.vc}",
            // // 162: v vc v v v
            // "162:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.v}<!3>{aslan.v}<!4>{aslan.v}",
            // // 162: v vc v v cv
            // "162:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.v}<!3>{aslan.v}{aslan.cv}",
            // // 108: v vc v v vc
            // "108:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.v}<!3>{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // // 108: v vc v v cvc
            // "108:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.v}<!3>{aslan.v}{aslan.cvc}",
            // // 162: v vc v cv v
            // "162:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.initialconsonant}{aslan.v}<!5>{aslan.v}",
            // // 162: v vc v cv cv
            // "162:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cv}{aslan.cv}",
            // // 108: v vc v cv vc
            // "108:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.initialconsonant}{aslan.v}<!5>{aslan.v}{aslan.finalconsonant}",
            // // 108: v vc v cv cvc
            // "108:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cv}{aslan.cvc}",
            // // 108: v vc v vc v
            // "108:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // // 72: v vc v vc vc
            // "72:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // // 108: v vc v cvc v
            // "108:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cvc}{aslan.v}",
            // // 72: v vc v cvc vc
            // "72:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cvc}{aslan.vc}",
            // // 108: v vc vc v v
            // "108:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.v}<!4>{aslan.v}",
            // // 108: v vc vc v cv
            // "108:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.v}{aslan.cv}",
            // // 72: v vc vc v vc
            // "72:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // // 72: v vc vc v cvc
            // "72:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.v}{aslan.cvc}",
            // // 72: v vc vc vc v
            // "72:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.vc}{aslan.v}",
            // // 48: v vc vc vc vc
            // "48:{aslan.v}<!0>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.vc}{aslan.vc}",
            // // 162: v cvc v v v
            // "162:{aslan.v}{aslan.cvc}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}",
            // // 162: v cvc v v cv
            // "162:{aslan.v}{aslan.cvc}{aslan.v}<!2>{aslan.v}{aslan.cv}",
            // // 108: v cvc v v vc
            // "108:{aslan.v}{aslan.cvc}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}",
            // // 162: v cvc v cv v
            // "162:{aslan.v}{aslan.cvc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}",
            // // 162: v cvc v cv cv
            // "162:{aslan.v}{aslan.cvc}{aslan.v}{aslan.cv}{aslan.cv}",
            // // 108: v cvc v cv vc
            // "108:{aslan.v}{aslan.cvc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // // 108: v cvc v cv cvc
            // "108:{aslan.v}{aslan.cvc}{aslan.v}{aslan.cv}{aslan.cvc}",
            // // 108: v cvc v vc v
            // "108:{aslan.v}{aslan.cvc}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // // 72: v cvc v vc vc
            // "72:{aslan.v}{aslan.cvc}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // // 108: v cvc v cvc v
            // "108:{aslan.v}{aslan.cvc}{aslan.v}{aslan.cvc}{aslan.v}",
            // // 72: v cvc v cvc vc
            // "72:{aslan.v}{aslan.cvc}{aslan.v}{aslan.cvc}{aslan.vc}",
            // // 108: v cvc vc v v
            // "108:{aslan.v}{aslan.cvc}{aslan.vc}{aslan.v}<!3>{aslan.v}",
            // // 108: v cvc vc v cv
            // "108:{aslan.v}{aslan.cvc}{aslan.vc}{aslan.v}{aslan.cv}",
            // // 72: v cvc vc v vc
            // "72:{aslan.v}{aslan.cvc}{aslan.vc}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}",
            // // 72: v cvc vc v cvc
            // "72:{aslan.v}{aslan.cvc}{aslan.vc}{aslan.v}{aslan.cvc}",
            // // 72: v cvc vc vc v
            // "72:{aslan.v}{aslan.cvc}{aslan.vc}{aslan.vc}{aslan.v}",
            // // 48: v cvc vc vc vc
            // "48:{aslan.v}{aslan.cvc}{aslan.vc}{aslan.vc}{aslan.vc}",
            // // 243: cv v v v v
            // "243:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}<!3>{aslan.v}<!4>{aslan.v}",
            // // 243: cv v v v cv
            // "243:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.cv}",
            // // 162: cv v v v vc
            // "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}<!3>{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // // 162: cv v v v cvc
            // "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.cvc}",
            // // 243: cv v v cv v
            // "243:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.initialconsonant}{aslan.v}<!5>{aslan.v}",
            // // 243: cv v v cv cv
            // "243:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.cv}{aslan.cv}",
            // // 162: cv v v cv vc
            // "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.initialconsonant}{aslan.v}<!5>{aslan.v}{aslan.finalconsonant}",
            // // 162: cv v v cv cvc
            // "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.cv}{aslan.cvc}",
            // // 162: cv v v vc v
            // "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // // 108: cv v v vc vc
            // "108:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // // 162: cv v v cvc v
            // "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.cvc}{aslan.v}",
            // // 108: cv v v cvc vc
            // "108:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.cvc}{aslan.vc}",
            // // 243: cv v cv v v
            // "243:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}<!5>{aslan.v}",
            // // 243: cv v cv v cv
            // "243:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}{aslan.cv}",
            // // 162: cv v cv v vc
            // "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}<!5>{aslan.v}{aslan.finalconsonant}",
            // // 162: cv v cv v cvc
            // "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}{aslan.cvc}",
            // // 243: cv v cv cv v
            // "243:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!5>{aslan.v}",
            // // 243: cv v cv cv cv
            // "243:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.cv}{aslan.cv}{aslan.cv}",
            // // 162: cv v cv cv vc
            // "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!5>{aslan.v}{aslan.finalconsonant}",
            // // 162: cv v cv cv cvc
            // "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.cv}{aslan.cv}{aslan.cvc}",
            // // 162: cv v cv vc v
            // "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // // 108: cv v cv vc vc
            // "108:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // // 162: cv v cv cvc v
            // "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.cv}{aslan.cvc}{aslan.v}",
            // // 108: cv v cv cvc vc
            // "108:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.cv}{aslan.cvc}{aslan.vc}",
            // // 162: cv v vc v v
            // "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}<!5>{aslan.v}",
            // // 162: cv v vc v cv
            // "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cv}",
            // // 108: cv v vc v vc
            // "108:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}<!5>{aslan.v}{aslan.finalconsonant}",
            // // 108: cv v vc v cvc
            // "108:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cvc}",
            // // 108: cv v vc vc v
            // "108:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.v}",
            // // 72: cv v vc vc vc
            // "72:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.vc}", 
            // // 162: cv v cvc v v
            // "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.cvc}{aslan.initialconsonant}{aslan.v}<!5>{aslan.v}",
            // // 162: cv v cvc v cv
            // "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.cvc}{aslan.v}<!4>{aslan.v}{aslan.cv}",
            // // 108: cv v cvc v vc
            // "108:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.cvc}{aslan.initialconsonant}{aslan.v}<!5>{aslan.v}{aslan.finalconsonant}",
            // // 108: cv v cvc v cvc
            // "108:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.cvc}{aslan.v}{aslan.cvc}",
            // // 108: cv v cvc vc v
            // "108:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.cvc}{aslan.vc}{aslan.v}",
            // // 72: cv v cvc vc vc
            // "72:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.cvc}{aslan.vc}{aslan.vc}",
            // // 243: cv cv v v v
            // "243:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}<!4>{aslan.v}",
            // // 243: cv cv v v cv
            // "243:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.cv}",
            // // 162: cv cv v v vc
            // "162:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // // 162: cv cv v v cvc
            // "162:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.cvc}",
            // // 243: cv cv v cv v
            // "243:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.initialconsonant}{aslan.v}<!5>{aslan.v}",
            // // 243: cv cv v cv cv
            // "243:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.cv}{aslan.cv}",
            // // 162: cv cv v cv vc
            // "162:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.initialconsonant}{aslan.v}<!5>{aslan.v}{aslan.finalconsonant}",
            // // 162: cv cv v cv cvc
            // "162:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.cv}{aslan.cvc}",
            // // 162: cv cv v vc v
            // "162:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // // 108: cv cv v vc vc
            // "108:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // // 162: cv cv v cvc v
            // "162:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.cvc}{aslan.v}",
            // // 108: cv cv v cvc vc
            // "108:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.cvc}{aslan.vc}",
            // // 243: cv cv cv v v
            // "243:{aslan.cv}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}<!4>{aslan.v}",
            // // 243: cv cv cv v cv
            // "243:{aslan.cv}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.cv}",
            // // 162: cv cv cv v vc
            // "162:{aslan.cv}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // // 162: cv cv cv v cvc
            // "162:{aslan.cv}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.cvc}",
            // // 243: cv cv cv cv v
            // "243:{aslan.cv}{aslan.cv}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}",
            // // 243: cv cv cv cv cv
            // "243:{aslan.cv}{aslan.cv}{aslan.cv}{aslan.cv}",
            // // 162: cv cv cv cv vc
            // "162:{aslan.cv}{aslan.cv}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // // 162: cv cv cv cv cvc
            // "162:{aslan.cv}{aslan.cv}{aslan.cv}{aslan.cvc}",
            // // 162: cv cv cv vc v
            // "162:{aslan.cv}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // // 108: cv cv cv vc vc
            // "108:{aslan.cv}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // // 162: cv cv cv cvc v
            // "162:{aslan.cv}{aslan.cv}{aslan.cv}{aslan.cvc}{aslan.v}", 
            // // 108: cv cv cv cvc vc
            // "108:{aslan.cv}{aslan.cv}{aslan.cv}{aslan.cvc}{aslan.vc}",
            // // 162: cv cv vc v v
            // "162:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}<!5>{aslan.v}",
            // // 162: cv cv vc v cv
            // "162:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cv}",
            // // 108: cv cv vc v vc
            // "108:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}<!5>{aslan.v}{aslan.finalconsonant}",
            // // 108: cv cv vc v cvc
            // "108:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cvc}",
            // // 108: cv cv vc vc v
            // "108:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.v}",
            // // 72: cv cv vc vc vc
            // "72:{aslan.cv}{aslan.initialconsonant}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.vc}",
            // // 162: cv cv cvc v v
            // "162:{aslan.cv}{aslan.cv}{aslan.cvc}{aslan.v}<!3>{aslan.v}",
            // // 162: cv cv cvc v cv
            // "162:{aslan.cv}{aslan.cv}{aslan.cvc}{aslan.v}{aslan.cv}",
            // // 108: cv cv cvc v vc
            // "108:{aslan.cv}{aslan.cv}{aslan.cvc}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}",
            // // 108: cv cv cvc v cvc
            // "108:{aslan.cv}{aslan.cv}{aslan.cvc}{aslan.v}{aslan.cvc}",
            // // 108: cv cv cvc vc v
            // "108:{aslan.cv}{aslan.cv}{aslan.cvc}{aslan.vc}{aslan.v}",
            // // 72: cv cv cvc vc vc
            // "72:{aslan.cv}{aslan.cv}{aslan.cvc}{aslan.vc}{aslan.vc}",
            // // 162: cv vc v v v
            // "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}<!4>{aslan.v}<!5>{aslan.v}",
            // // 162: cv vc v v cv
            // "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}<!4>{aslan.v}{aslan.cv}",
            // // 108: cv vc v v vc
            // "108:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}<!4>{aslan.v}<!5>{aslan.v}{aslan.finalconsonant}",
            // // 108: cv vc v v cvc
            // "108:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}<!4>{aslan.v}{aslan.cvc}",
            // // 162: cv vc v cv v
            // "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.initialconsonant}{aslan.v}<!6>{aslan.v}",
            // // 162: cv vc v cv cv
            // "162:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cv}{aslan.cv}",
            // // 108: cv vc v cv vc
            // "108:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.initialconsonant}{aslan.v}<!6>{aslan.v}{aslan.finalconsonant}",
            // // 108: cv vc v cv cvc
            // "108:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cv}{aslan.cvc}",
            // // 108: cv vc v vc v
            // "108:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // // 72: cv vc v vc vc
            // "72:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // // 108: cv vc v cvc v
            // "108:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cvc}{aslan.v}",
            // // 72: cv vc v cvc vc
            // "72:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cvc}{aslan.vc}",
            // // 108: cv vc vc v v
            // "108:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.v}<!5>{aslan.v}",
            // // 108: cv vc vc v cv
            // "108:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.v}{aslan.cv}",
            // // 72: cv vc vc v vc
            // "72:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.v}<!5>{aslan.v}{aslan.finalconsonant}",
            // // 72: cv vc vc v cvc
            // "72:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.v}{aslan.cvc}",
            // // 72: cv vc vc vc v
            // "72:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.vc}{aslan.v}",
            // // 48: cv vc vc vc vc
            // "48:{aslan.initialconsonant}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.vc}{aslan.vc}",
            // // 162: cv cvc v v v
            // "162:{aslan.cv}{aslan.cvc}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}",
            // // 162: cv cvc v v cv
            // "162:{aslan.cv}{aslan.cvc}{aslan.v}<!2>{aslan.v}{aslan.cv}",
            // // 108: cv cvc v v vc
            // "108:{aslan.cv}{aslan.cvc}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}",
            // // 108: cv cvc v v cvc
            // "108:{aslan.cv}{aslan.cvc}{aslan.v}<!2>{aslan.v}{aslan.cvc}",
            // // 162: cv cvc v cv v
            // "162:{aslan.cv}{aslan.cvc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}",
            // // 162: cv cvc v cv cv
            // "162:{aslan.cv}{aslan.cvc}{aslan.v}{aslan.cv}{aslan.cv}",
            // // 108: cv cvc v cv vc
            // "108:{aslan.cv}{aslan.cvc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // // 108: cv cvc v cv cvc
            // "108:{aslan.cv}{aslan.cvc}{aslan.v}{aslan.cv}{aslan.cvc}",
            // // 108: cv cvc v vc v
            // "108:{aslan.cv}{aslan.cvc}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}", 
            // // 72: cv cvc v vc vc
            // "72:{aslan.cv}{aslan.cvc}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // // 108: cv cvc v cvc v
            // "108:{aslan.cv}{aslan.cvc}{aslan.v}{aslan.cvc}{aslan.v}",
            // // 72: cv cvc v cvc vc
            // "72:{aslan.cv}{aslan.cvc}{aslan.v}{aslan.cvc}{aslan.vc}",
            // // 108: cv cvc vc v v
            // "108:{aslan.cv}{aslan.cvc}{aslan.vc}{aslan.v}<!3>{aslan.v}",
            // // 108: cv cvc vc v cv
            // "108:{aslan.cv}{aslan.cvc}{aslan.vc}{aslan.v}{aslan.cv}",
            // // cv cvc vc v vc
            // "72:{aslan.cv}{aslan.cvc}{aslan.vc}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}",
            // // 72: cv cvc vc v cvc
            // "72:{aslan.cv}{aslan.cvc}{aslan.vc}{aslan.v}{aslan.cvc}",
            // // 72: cv cvc vc vc v
            // "72:{aslan.cv}{aslan.cvc}{aslan.vc}{aslan.vc}{aslan.v}",
            // // 48: cv cvc vc vc vc
            // "48:{aslan.cv}{aslan.cvc}{aslan.vc}{aslan.vc}{aslan.vc}",
            // // 162: vc v v v v
            // "162:{aslan.vc}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}<!3>{aslan.v}",
            // // 162: vc v v v cv
            // "162:{aslan.vc}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.cv}",
            // // 108: vc v v v vc
            // "108:{aslan.vc}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}",
            // // 108: vc v v v cvc
            // "108:{aslan.vc}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.cvc}",
            // // 162: vc v v cv v
            // "162:{aslan.vc}{aslan.v}<!1>{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}",
            // // 162: vc v v cv cv
            // "162:{aslan.vc}{aslan.v}<!1>{aslan.v}{aslan.cv}{aslan.cv}",
            // // 108: vc v v cv vc
            // "108:{aslan.vc}{aslan.v}<!1>{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // // 108: vc v v cv cvc
            // "108:{aslan.vc}{aslan.v}<!1>{aslan.v}{aslan.cv}{aslan.cvc}",
            // // 108: vc v v vc v
            // "108:{aslan.vc}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // // 72: vc v v vc vc
            // "72:{aslan.vc}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // // 108: vc v v cvc v
            // "108:{aslan.vc}{aslan.v}<!1>{aslan.v}{aslan.cvc}{aslan.v}",
            // // 72: vc v v cvc vc
            // "72:{aslan.vc}{aslan.v}<!1>{aslan.v}{aslan.cvc}{aslan.vc}",
            // // 162: vc v cv v v
            // "162:{aslan.vc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}<!4>{aslan.v}",
            // // 162: vc v cv v cv
            // "162:{aslan.vc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.cv}",
            // // 108: vc v cv v vc
            // "108:{aslan.vc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // // 108: vc v cv v cvc
            // "108:{aslan.vc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.cvc}",
            // // 162: vc v cv cv v
            // "162:{aslan.vc}{aslan.v}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}",
            // // 162: vc v cv cv cv
            // "162:{aslan.vc}{aslan.v}{aslan.cv}{aslan.cv}",
            // // 108: vc v cv cv vc
            // "108:{aslan.vc}{aslan.v}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // // 108: vc v cv cv cvc
            // "108:{aslan.vc}{aslan.v}{aslan.cv}{aslan.cvc}",
            // // 108: vc v cv vc v
            // "108:{aslan.vc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // // 72: vc v cv vc vc
            // "72:{aslan.vc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // // 108: vc v cv cvc v
            // "108:{aslan.vc}{aslan.v}{aslan.cv}{aslan.cvc}{aslan.v}",
            // // 72: vc v cv cvc vc
            // "72:{aslan.vc}{aslan.v}{aslan.cv}{aslan.cvc}{aslan.vc}",
            // // 108: vc v vc v v
            // "108:{aslan.vc}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}<!4>{aslan.v}",
            // // 108: vc v vc v cv
            // "108:{aslan.vc}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cv}",
            // // 72: vc v vc v vc
            // "72:{aslan.vc}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // // 72: vc v vc v cvc
            // "72:{aslan.vc}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cvc}",
            // // 72: vc v vc vc v
            // "72:{aslan.vc}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.v}",
            // // 48: vc v vc vc vc
            // "48:{aslan.vc}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.vc}",
            // // 108: vc v cvc v v
            // "108:{aslan.vc}{aslan.v}{aslan.cvc}{aslan.v}<!3>{aslan.v}",
            // // 108: vc v cvc v cv
            // "108:{aslan.vc}{aslan.v}{aslan.cvc}{aslan.v}{aslan.cv}", 
            // // 72: vc v cvc v vc
            // "72:{aslan.vc}{aslan.v}{aslan.cvc}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}",
            // // 72: vc v cvc v cvc
            // "72:{aslan.vc}{aslan.v}{aslan.cvc}{aslan.v}{aslan.cvc}",
            // // 72: vc v cvc vc v
            // "72:{aslan.vc}{aslan.v}{aslan.cvc}{aslan.vc}{aslan.v}",
            // // 48: vc v cvc vc vc
            // "48:{aslan.vc}{aslan.v}{aslan.cvc}{aslan.vc}{aslan.vc}",
            // // 108: vc vc v v v
            // "108:{aslan.vc}{aslan.vc}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}",
            // // 108: vc vc v v cv
            // "108:{aslan.vc}{aslan.vc}{aslan.v}<!2>{aslan.v}{aslan.cv}",
            // // 72: vc vc v v vc
            // "72:{aslan.vc}{aslan.vc}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}",
            // // 72: vc vc v v cvc
            // "72:{aslan.vc}{aslan.vc}{aslan.v}<!2>{aslan.v}{aslan.cvc}",
            // // 108: vc vc v cv v
            // "108:{aslan.vc}{aslan.vc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}",
            // // 108: vc vc v cv cv 
            // "108:{aslan.vc}{aslan.vc}{aslan.v}{aslan.cv}{aslan.cv}",
            // // 72: vc vc v cv vc
            // "72:{aslan.vc}{aslan.vc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // // 72: vc vc v cv cvc
            // "72:{aslan.vc}{aslan.vc}{aslan.v}{aslan.cv}{aslan.cvc}",
            // // 72: vc vc v vc v
            // "72:{aslan.vc}{aslan.vc}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // // 48: vc vc v vc vc
            // "48:{aslan.vc}{aslan.vc}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // // 72: vc vc v cvc v
            // "72:{aslan.vc}{aslan.vc}{aslan.v}{aslan.cvc}{aslan.v}",
            // // 48: vc vc v cvc vc
            // "48:{aslan.vc}{aslan.vc}{aslan.v}{aslan.cvc}{aslan.vc}",
            // // 72: vc vc vc v v
            // "72:{aslan.vc}{aslan.vc}{aslan.vc}{aslan.v}<!3>{aslan.v}",
            // // 72: vc vc vc v cv
            // "72:{aslan.vc}{aslan.vc}{aslan.vc}{aslan.v}{aslan.cv}",
            // // 48: vc vc vc v vc
            // "48:{aslan.vc}{aslan.vc}{aslan.vc}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}",
            // // 48: vc vc vc v cvc
            // "48:{aslan.vc}{aslan.vc}{aslan.vc}{aslan.v}{aslan.cvc}",
            // // 48: vc vc vc vc v
            // "48:{aslan.vc}{aslan.vc}{aslan.vc}{aslan.vc}{aslan.v}",
            // // 32: vc vc vc vc vc
            // "32:{aslan.vc}{aslan.vc}{aslan.vc}{aslan.vc}",
            // // 162: cvc v v v v
            // "162:{aslan.cvc}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}<!3>{aslan.v}",
            // // 162: cvc v v v cv
            // "162:{aslan.cvc}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.cv}",
            // // 108: cvc v v v vc
            // "108:{aslan.cvc}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}",
            // // 108: cvc v v v cvc
            // "108:{aslan.cvc}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.cvc}",
            // // 162: cvc v v cv v
            // "162:{aslan.cvc}{aslan.v}<!1>{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}",
            // // 162: cvc v v cv cv
            // "162:{aslan.cvc}{aslan.v}<!1>{aslan.v}{aslan.cv}{aslan.cv}",
            // // 108: cvc v v cv vc
            // "108:{aslan.cvc}{aslan.v}<!1>{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // // 108: cvc v v cv cvc
            // "108:{aslan.cvc}{aslan.v}<!1>{aslan.v}{aslan.cv}{aslan.cvc}",
            // // 108: cvc v v vc v
            // "108:{aslan.cvc}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // // 72: cvc v v vc vc
            // "72:{aslan.cvc}{aslan.v}<!1>{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // // 108: cvc v v cvc v
            // "108:{aslan.cvc}{aslan.v}<!1>{aslan.v}{aslan.cvc}{aslan.v}",
            // // 72: cvc v v cvc vc
            // "72:{aslan.cvc}{aslan.v}<!1>{aslan.v}{aslan.cvc}{aslan.vc}",
            // // 162: cvc v cv v v
            // "162:{aslan.cvc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}<!4>{aslan.v}",
            // // 162: cvc v cv v cv
            // "162:{aslan.cvc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.cv}",
            // // 108: cvc v cv v vc
            // "108:{aslan.cvc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // // 108: cvc v cv v cvc
            // "108:{aslan.cvc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.cvc}",
            // // 162: cvc v cv cv v
            // "162:{aslan.cvc}{aslan.v}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}",
            // // 162: cvc v cv cv cv
            // "162:{aslan.cvc}{aslan.v}{aslan.cv}{aslan.cv}",
            // // 108: cvc v cv cv vc
            // "108:{aslan.cvc}{aslan.v}{aslan.cv}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // // 108: cvc v cv cv cvc
            // "108:{aslan.cvc}{aslan.v}{aslan.cv}{aslan.cvc}",
            // // 108: cvc v cv vc v
            // "108:{aslan.cvc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // // 72: cvc v cv vc vc
            // "72:{aslan.cvc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // // 108: cvc v cv cvc v
            // "108:{aslan.cvc}{aslan.v}{aslan.cv}{aslan.cvc}{aslan.v}",
            // // 72: cvc v cv cvc vc
            // "72:{aslan.cvc}{aslan.v}{aslan.cv}{aslan.cvc}{aslan.vc}",
            // // 108: cvc v vc v v
            // "108:{aslan.cvc}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}<!4>{aslan.v}",
            // // 108: cvc v vc v cv
            // "108:{aslan.cvc}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cv}",
            // // 72: cvc v vc v vc
            // "72:{aslan.cvc}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // // 72: cvc v vc v cvc
            // "72:{aslan.cvc}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.v}{aslan.cvc}",
            // // 72: cvc v vc vc v
            // "72:{aslan.cvc}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.v}",
            // // 48: cvc v vc vc vc
            // "48:{aslan.cvc}{aslan.v}<!1>{aslan.v}{aslan.finalconsonant}{aslan.vc}{aslan.vc}",
            // // 108: cvc v cvc v v
            // "108:{aslan.cvc}{aslan.v}{aslan.cvc}{aslan.v}<!3>{aslan.v}",
            // // 108: cvc v cvc v cv
            // "108:{aslan.cvc}{aslan.v}{aslan.cvc}{aslan.v}{aslan.cv}",
            // // 72: cvc v cvc v vc
            // "72:{aslan.cvc}{aslan.v}{aslan.cvc}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}",
            // // 72: cvc v cvc v cvc
            // "72:{aslan.cvc}{aslan.v}{aslan.cvc}{aslan.v}{aslan.cvc}",
            // // 72: cvc v cvc vc v
            // "72:{aslan.cvc}{aslan.v}{aslan.cvc}{aslan.vc}{aslan.v}",
            // // 48: cvc v cvc vc vc
            // "48:{aslan.cvc}{aslan.v}{aslan.cvc}{aslan.vc}{aslan.vc}",
            // // 108: cvc vc v v v
            // "108:{aslan.cvc}{aslan.vc}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}",
            // // 108: cvc vc v v cv
            // "108:{aslan.cvc}{aslan.vc}{aslan.v}<!2>{aslan.v}{aslan.cv}",
            // // 72: cvc vc v v vc
            // "72:{aslan.cvc}{aslan.vc}{aslan.v}<!2>{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}",
            // // 72: cvc vc v v cvc
            // "72:{aslan.cvc}{aslan.vc}{aslan.v}<!2>{aslan.v}{aslan.cvc}",
            // // 108: cvc vc v cv v       
            // "108:{aslan.cvc}{aslan.vc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}",
            // // 108: cvc vc v cv cv
            // "108:{aslan.cvc}{aslan.vc}{aslan.v}{aslan.cv}{aslan.cv}",
            // // 72: cvc vc v cv vc
            // "72:{aslan.cvc}{aslan.vc}{aslan.v}{aslan.initialconsonant}{aslan.v}<!4>{aslan.v}{aslan.finalconsonant}",
            // // 72: cvc vc v cv cvc
            // "72:{aslan.cvc}{aslan.vc}{aslan.v}{aslan.cvc}{aslan.cvc}",
            // // 72: cvc vc v vc v
            // "72:{aslan.cvc}{aslan.vc}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.v}",
            // // 48: cvc vc v vc vc
            // "48:{aslan.cvc}{aslan.vc}{aslan.v}<!2>{aslan.v}{aslan.finalconsonant}{aslan.vc}",
            // // 72: cvc vc v cvc v
            // "72:{aslan.cvc}{aslan.vc}{aslan.v}{aslan.cvc}{aslan.v}",
            // // 48: cvc vc v cvc vc
            // "48:{aslan.cvc}{aslan.vc}{aslan.v}{aslan.cvc}{aslan.vc}",
            // // 72: cvc vc vc v v
            // "72:{aslan.cvc}{aslan.vc}{aslan.vc}{aslan.v}<!3>{aslan.v}",
            // // 72: cvc vc vc v cv
            // "72:{aslan.cvc}{aslan.vc}{aslan.vc}{aslan.v}{aslan.cv}",
            // // 48: cvc vc vc v vc
            // "48:{aslan.cvc}{aslan.vc}{aslan.vc}{aslan.v}<!3>{aslan.v}{aslan.finalconsonant}",
            // // 48: cvc vc vc v cvc
            // "48:{aslan.cvc}{aslan.vc}{aslan.vc}{aslan.v}{aslan.cvc}",
            // // 48: cvc vc vc vc v
            // "48:{aslan.cvc}{aslan.vc}{aslan.vc}{aslan.vc}{aslan.v}",
            // // 32: cvc vc vc vc vc
            // "32:{aslan.cvc}{aslan.vc}{aslan.vc}{aslan.vc}{aslan.vc}"     
        ],
        "syllable":[
            "3:{aslan.v}",
            "3:{aslan.cv}",
            "2:{aslan.vc}",
            "2:{aslan.cvc}"
        ],
        "v":[
            "{aslan.vowel}"
        ],
        "cv":[
            "{aslan.initialconsonant}{aslan.vowel}"
        ],
        "vc":[
            "{aslan.vowel}{aslan.finalconsonant}"
        ],
        "cvc":[
            "{aslan.initialconsonant}{aslan.vowel}{aslan.finalconsonant}"
        ],
        "vowel":[
            "10:a",
            "3:ai",
            "2:ao",
            "1:au",
            "6:e",
            "6:ea",
            "2:ei",
            "4:i",
            "3:iy",
            "2:o",
            "1:oa",
            "2:oi",
            "1:ou",
            "1:u",
            "1:ua",
            "1:ui",
            "2:ya",
            "1:yu"
        ],
        "initialconsonant":[
            "5:f",
            "4:ft",
            "7:h",
            "2:hf",
            "5:hk",
            "3:hl",
            "3:hr",
            "5:ht",
            "2:hw",
            "7:k",
            "6:kh",
            "4:kht",
            "4:kt",
            "2:l",
            "3:r",
            "4:s",
            "3:st",
            "8:t",
            "2:tl",
            "2:tr",
            "6:w"
        ],
        "finalconsonant":[
            "10:h",
            "4:kh",
            "7:l",
            "3:lr",
            "5:r",
            "4:rl",
            "5:s",
            "6:w",
            "3:'"
        ]
    },
    "animal":{
        "patterns":[
            "20:{animal.basepattern}",
            "2:{animal.basepattern} ({animal.color} morph)",
            "1:{animal.fake}",
        ],
        "basepattern":[
            "{animal.modifier?}{animal.shape}{animal.part}",
            "{animal.modifier?}{animal.pattern?}{animal.shape}{animal.part}",
            "2:{animal.modifier?}{animal.adjective} {animal.noun}",
            "{animal.nonpatternadj} <!0>{animal.pattern?}{animal.noun}"
        ],
        "fake":[
            "false {animal.basepattern}",
            "2:{animal.basepattern} mimic"
        ],
        "noun":[
            "{word}",
            "{ship.fearsomecritter}",
            "{system.mythologicalfigure}",
            "{animal.shape}{animal.part}",
            "{animal.realcritter}-<!0>{animal.realcritter}",
            "{animal.solid}{animal.solinteractor}",
            "{animal.solidmaterial}{animal.burrower}",
            "{animal.liquid}{animal.liqinteractor}|{animal.liquidmaterial}{animal.liqinhabitor}",
            "3:{animal.terrain} {animal.terraininteractor}",
            "mega{animal.realcritter}|micro{animal.realcritter}",
            "{animal.realcritter}oid|meta{animal.realcritter}|nova{animal.realcritter}|xeno{animal.realcritter}",
            "pseudo{animal.realcritter}|{animal.numprefix}{animal.realcritter}"
        ],
        "numprefix":[
            "mono",
            "bi",
            "tri",
            "quadri",
            "penta",
            "hexa",
            "septi",
            "octo",
            "nona",
            "deca"
        ],
        "terrain":[
            "alpine",
            "bank",
            "beach",
            "bog",
            "brook",
            "bush",
            "canyon",
            "cave",
            "cliff",
            "creek",
            "desert",
            "dune",
            "forest",
            "glacier",
            "hill",
            "ice",
            "jungle",
            "marsh",
            "mountain",
            "night",
            "plain",
            "prairie",
            "river",
            "savannah",
            "snow",
            "steppe",
            "swamp",
            "taiga",
            "tundra",
            "valley",
            "wood",
        ],
        "terraininteractor":[
            "{animal.mover}",
            "{animal.noiser}",
            "{animal.inhabitor}",           
            "hunter",            
            "pouncer",            
            "stalker",           
            "trapper",
        ],
        "mover":[
            "bounder",
            "climber",
            "crawler",
            "creeper",
            "darter",
            "grazer",
            "loper",
            "racer",
            "runner",
            "shambler",
            "shuffler",
            "sprinter",
            "strider",
        ],
        "noiser":[
            "cackler",
            "crier",
            "howler",
            "giggler",
            "laugher",
            "moaner",
            "mourner",
            "roarer",
            "screamer",
            "whisperer",
        ],
        "liquid":[
            "{animal.liquidplantpart}",
            "{animal.liquidmaterial}",
            "{animal.liquidanimalpart}",
        ],
        "liquidplantpart":[
            "juice",
            "nectar",
            "sap",
        ],
        "liquidanimalpart":[
            "blood",
            "milk",
            "lymph",
            "mucus"
        ],
        "liquidmaterial":[
            "muck",
            "oil",
            "silt",
            "slime",
            "sludge",
            "slush",
            "tar"
        ],
        "liqinteractor":[
            "3:{animal.drinker}",
            "{animal.otherinteractor}"
        ],
        "inhabitor":[
            "basker",
            "dweller",
            "lurker",
            "prowler"
        ],
        "liqinhabitor":[
            "floater",
            "slosher",
            "squelcher",
            "2:wader",
            "2:wallower",
            "{animal.inhabitor}"
        ],
        "drinker":[
            "drinker",
            "guzzler",
            "slurper",
            "sucker",
            "swallower"
        ],
        "solinteractor":[
            "{animal.scraper}",
            "{animal.muncher}",
        ],
        "solid":[
            "{animal.solidplantpart}",
            "{animal.solidmaterial}"
        ],
        "scraper":[
            "scraper",
            "scratcher",
            "shredder"
        ],
        "muncher":[
            "chewer",
            "cruncher",
            "eater",
            "muncher",
            "swallower",
            "{animal.otherinteractor}"
        ],
        "burrower":[
            "burrower",
            "tunneler",
            "digger",
            "rooter",
            "shoveler",
            "scooper"
        ],
        "otherinteractor":[
            "collector",
            "gatherer",
            "licker",
            "mover",
            "shaper",
            "sniffer",
            "stealer",
            "weaver",
            "taster"
        ],
        "solidmaterial":[
            "clay",
            "dirt",
            "dust",
            "earth",
            "ice",
            "mud",
            "rock",
            "soil",
            "stone",
            "tundra"
        ],
        "solidplantpart":[
            "bark",
            "bloom",
            "blossom",
            "branch",
            "bud",
            "flower",
            "leaf",
            "petal",
            "root",
            "stalk",
            "stump",
            "thorn",
            "twig",
            "vine",
        ],
        "realcritter":[
            "aardvark",
            "addax",
            "alligator",
            "anaconda",
            "antelope",
            "ant",
            "armadillo",
            "badger",
            "bat",
            "bear",
            "bee",
            "beetle",
            "bird",
            "bison",
            "bittern",
            "boa",
            "boar",
            "bug",
            "butterfly",
            "buzzard",
            "caiman",
            "camel",
            "caribou",
            "cat",
            "centipede",
            "cheetah",
            "chicken",
            "chimpanzee",
            "chinchilla",
            "chipmunk",
            "cicada",
            "civet",
            "cobra",
            "cormorant",
            "crake",
            "corvid",
            "cow",
            "coyote",
            "crab",
            "crayfish",
            "crocodile",
            "crow",
            "cuckoo",
            "curlew",
            "deer",
            "dingo",
            "dog",
            "dolphin",
            "dove",
            "dragon",
            "dromedary",
            "duck",
            "eagle",
            "eel",
            "egret",
            "elephant",
            "elk",
            "emu",
            "falcon",
            "fennec",
            "finch",
            "fish",
            "fowl",
            "fly",
            "fox",
            "frog",
            "gazelle",
            "gecko",
            "gemsbok",
            "gerenuk",
            "gharial",
            "gibbon",
            "giraffe",
            "gnat",
            "goat",
            "goose",
            "gorilla",
            "grebe",
            "gull",
            "hamster",
            "hare",
            "hawk",
            "heron",
            "hippo",
            "hog",
            "hoopoe",
            "hornet",
            "horse",
            "hound",
            "hyena",
            "ibex",
            "ibis",
            "impala",
            "iguana",
            "jackal",
            "jaguar",
            "jay",
            "kangaroo",
            "kestrel",
            "kinkajou",
            "kite",
            "kitten",
            "koala",
            "kookaburra",
            "lemming",
            "lemur",
            "leopard",
            "limpkin",
            "lion",
            "lizard",
            "llama",
            "locust",
            "loris",
            "lynx",
            "macaw",
            "mamba",
            "manatee",
            "mantis",
            "markhor",
            "marten",
            "mayfly",
            "meerkat",
            "millipede",
            "mockingbird",
            "4:monkey",
            "mole",
            "moose",
            "moth",
            "mouse",
            "newt",
            "ocelot",
            "okapi",
            "opossum",
            "orangutan",
            "orca",
            "oryx",
            "osprey",
            "ostrich",
            "otter",
            "4:owl",
            "4:ox",
            "panda",
            "panther",
            "3:parrot",
            "partridge",
            "peacock",
            "peccary",
            "pelican",
            "penguin",
            "petrel",
            "pheasant",
            "piranha",
            "polecat",
            "porcupine",
            "porpoise",
            "4:pig",
            "platypus",
            "plover",
            "puffin",
            "puma",
            "rabbit",
            "racoon",
            "2:rat",
            "ratel",
            "rattlesnake",
            "raven",
            "ray",
            "rhino",
            "seal",
            "2:serpent",
            "serval",
            "2:shark",
            "sheep",
            "shrew",
            "shrike",
            "sloth",
            "snake",
            "4:spider",
            "squirrel",
            "stork",
            "swallow",
            "swift",
            "tapir",
            "tarantula",
            "tern",
            "thrush",
            "4:tiger",
            "4:toad",
            "tortoise",
            "toucan",
            "trout",
            "tuatara",
            "turkey",
            "4:turtle",
            "vole",
            "vulture",
            "wallaby",
            "warbler",
            "wasp",
            "weasel",
            "weevil",
            "whale",
            "whimbrel",
            "wildebeest",
            "willet",
            "4:wolf",
            "wolverine",
            "wombat",
            "worm",
            "yak",
            "zebra"
        ],
        "modifier?":[
            "","{animal.modifier} "
        ],
        "modifier":[
            "common",
            "dire",
            "giant",
            "great",
            "2:greater",
            "2:lesser",
            "miniature",
            "pygmy",
            "2:{human.lastname}'s",
            "{word}",
            "least",
            "little"
        ],
        "pattern?":[
            "","{animal.patterned} "
        ],
        "patterned":[
            "{animal.pattern}",
            "{animal.partpattern}-{animal.parted|animal.parted2}",
            "{animal.partpattern}-{animal.parted2}"
        ],
        "nonpatternadj":[
            "{animal.gerund}",
            "{animal.peltadj}",
            "{animal.solitaryadj}",
            "{animal.communaladj}"
        ],
        "adjective":[
            "{animal.shape}-{animal.parted}",
            "{animal.color}-{animal.parted|animal.parted2}",
            "{animal.color} {animal.patterned}",
            "{animal.patterned}",
            "{animal.gerund}",
            "{animal.peltadj}",
            "{animal.color|animal.gemcolor}",
            "{animal.solitaryadj}",
            "{animal.communaladj}",
            "{animal.numprefix}pedal"
        ],
        "solitaryadj":[
            "hermit",
            "lonely|lonesome",
            "solitary",
        ],
        "communaladj":[
            "communal",
            "flocking",
            "gregarious",
            "social",
            "swarming"
        ],
        "peltadj":[
            "blubbery",
            "downy",
            "fuzzy",
            "hairy",
            "long-haired",
            "marbled",
            "naked",
            "wooly",
            "scaly",
            "shaggy",
            "silky",
            "snowy",
            "spiny"
        ],
        "gerund":[
            "burrowing",
            "creeping",
            "cackling",
            "chittering",
            "flying",
            "gliding",
            "grinning",
            "howling",
            "laughing",
            "lumbering",
            "purring",
            "screaming",
            "shrieking",
            "smiling",
            "skulking",
            "weeping",
            "whistling",
        ],
        "pattern":[
            "freckled",
            "piebald|pied",
            "iridescent",
            "roseate",
            "ruddy",
            "scaly",
            "shaggy",
            "speckled",
            "spectacled",
            "spined",
            "spotted",
            "striped",
            "tawny",
            "warty"
        ],
        "partpattern":[
            "2:{animal.color}",
            "1:{animal.gemcolor}|diamond",
            "{animal.gemcolor}",
            "barrel",
            "buff",
            "bump",
            "flabby",
            "ripple",
            "rough",
            "ruddy",
            "smooth",
            "speckle",
            "stripe",
        ],
        "color":[
                "Black|Ebony",
                "Brown|Tan|Copper",
                "Gray|Silver",
                "Red|Scarlet|Crimson|Pink|Rose|Ruby",
                "Orange|Fiery",
                "Yellow|Golden|Amber",
                "Green|Veridian|Emerald",
                "Blue|Cyan|Cerulean|Azure",
                "Indigo",
                "Violet|Purple|Lavender",
                "White|Ivory"
        ],
        "gemcolor":[
            "amber",
            "bronze",
            "copper",
            "crystal",
            "emerald",
            "golden",
            "ivory",
            "marble",
            "obsidian|onyx",
            "ruby",
            "sapphire",
            "silver"
        ],
        "shape":[
            "axe",
            "barrel",
            "bow",
            "broad",
            "club",
            "crescent",
            "diamond",
            "fan",
            "flat",
            "fork",
            "globe",
            "hammer",
            "heart",
            "hook",
            "hump",
            "iron",
            "large",
            "long",
            "needle",
            "pin",
            "prickle",
            "prong",
            "razor",
            "sabre",
            "saw",
            "short",
            "small",
            "spade",
            "spear",
            "spiral",
            "spoon",
            "stump",
            "sword",
            "thorn",
            "wire"
        ],
        "part":[
            "back",
            "beak",
            "bill",
            "claw",
            "fang",
            "hoof",
            "horn",
            "mouth",
            "nose",
            "snout",
            "tail",
            "tooth",
            "tongue",
            "tusk",
            "wing"
        ],
        "parted":[
            "backed",
            "beaked",
            "clawed",
            "fanged",
            "finned",
            "horned",
            "mouthed",
            "nosed",
            "plumed",
            "snouted",
            "tailed",
            "toothed",
            "tongued",
            "tusked",
            "wattled",
            "winged"
        ],
        "parted2":[
            "capped",
            "coated",
            "chested",
            "crested",
            "crowned",
            "footed",
            "finned",
            "gilled",
            "eyed",
            "haunched",
            "hoofed",
            "legged",
            "maned",
            "pawed",
            "plumed",
            "rumped",
            "shouldered",
            "throated",
            "wattled",
            "winged",
            "withered"       
        ]
    },
    "ship":{
        "patterns":[
            "200:{ship.nopun}",
            "2:{ship.yacht}", "{ship.yacht} {ship.numeral}"
        ],
        "noble":[
            "{ship.mnoble}","{ship.fnoble}"
        ],
        "neutraltitle":[
            "admiral",
            "brigadier",
            "captain",
            "colonel",
            "coronel",
            "commander",
            "commodore",
            "director",
            "general",
            "governor",
            "president",
            "regent"
        ],
        "mnoble":[
            "Sir",
            "Lord",
            "Baronet",
            "Baron",
            "Marquis",
            "Margrave",
            "Viscount",
            "Count",
            "Duke",
            "Archduke",
            "Emperor",
            "Prince",
            "Grand Prince",
            "King",
            "{ship.neutraltitle}"
        ],
        "fnoble":[
            "Lady",
            "Dame",
            "Baronetess",
            "Baroness",
            "Marchioness|Marquesa",
            "Margravine",
            "Viscountess",
            "Countess|Contessa",
            "Duchess",
            "Archduchess",
            "Empress",
            "Princess",
            "Grand Princess",
            "Queen",
            "Dowager",
            "{ship.neutraltitle}"
        ],
        "nopun":[
            "9:{word}","{word} {ship.numeral}",
            "2:{word.2sylword}","{word.2sylword} {ship.numeral}",
            "4:{ship.color} {word.2sylword|human.lastname|ship.noble}","{ship.color} {word.2sylword|human.lastname|ship.noble} {ship.numeral}",
            "6:{aslan}","{aslan} {ship.numeral}",
            "10:{human}","{human} {ship.numeral}",
            "4:{human.lastname}",
            "2:{ship.noncoloradjective}|{ship.bigadjective}","{ship.noncoloradjective} {ship.numeral}|{ship.bigadjective} {ship.numeral}",
            "9:{human.firstname}'s {ship.noun|ship.noun|system.noun}|{human.lastname}'s {ship.noun|ship.noun|system.noun}",
            "6:{ship.nature|ship.vicevirtue|ship.bigidea|ship.person}'s <!0>{ship.noun}","{ship.nature|ship.vicevirtue|ship.bigidea|ship.person}'s <!0>{ship.noun} {ship.numeral}",
            "6:{human.femalefirstname}", "{human.femalefirstname} {ship.numeral}",
            "3:Pride of {system}|{ship.virtue} of {system}",
            "2:{ship.noun} of <!0>{system.mythologicalname|human.lastname|human.firstname|ship.noun}|{system.mythologicalname|human.lastname|human.firstname|ship.noun}'s <!0>{ship.noun}",
            "1:{ship.adjective} {ship.noun} of <!1>{system.mythologicalname|human.lastname|human.firstname|ship.noun}|{system.mythologicalname|human.lastname|human.firstname|ship.noun}'s {ship.adjective} <!0>{ship.noun}",
            "6:{system.mythologicalfigure}", "{system.mythologicalfigure} {ship.numeral}",
            "4:{ship.adjective} {system.mythologicalfigure}","{ship.adjective} {system.mythologicalfigure} {ship.numeral}",
            "16:{system.mythologicalname}", "{system.mythologicalname} {ship.numeral}",
            "16:{ship.animal}","{ship.animal} {ship.numeral}",
            "4:{ship.natureadjective} {ship.nature}|{ship.bigadjective|ship.gerund} {ship.nature}",
            "5:{ship.adjective} {ship.animal}","{ship.adjective} {ship.animal} {ship.numeral}",
            "4:{ship.gerund} {ship.animal}","{ship.gerund} {ship.animal} {ship.numeral}",
            "2:{ship.spaceword} {ship.animal}","{ship.spaceword} {ship.animal} {ship.numeral}",
            "2:{ship.spaceword} {system.mythologicalfigure}","{ship.spaceword} {system.mythologicalfigure} {ship.numeral}",
            "4:{ship.gerund|ship.adjective} {ship.noun}","{ship.gerund|ship.adjective} {ship.noun} {ship.numeral}",
            "6:{ship.bigadjective} {ship.bigidea}","{ship.bigadjective} {ship.bigidea} {ship.numeral}",
            "4:{ship.adjective|ship.gerund} {ship.person}|The {ship.adjective|ship.gerund} {ship.person}","{ship.adjective|ship.gerund} {ship.person} {ship.numeral}",
            "9:{ship.bigadjective|ship.bigidea|ship.person}","{ship.bigadjective|ship.bigidea|ship.person} {ship.numeral}",
            "12:{ship.navalname}","{ship.navalname} {ship.numeral}", 
            "8:{ship.combo}","{ship.combo} {ship.numeral}",
            "3:{system.realplace}","{system.realplace} {ship.numeral}",
            "4:{ship.mnoble} {human.malefirstname}|{ship.mnoble} {human.malefirstname}|{ship.mnoble} {human.malefirstname} {system.numeral}",
            "4:{ship.fnoble} {human.femalefirstname}|{ship.fnoble} {human.femalefirstname}|{ship.fnoble} {human.femalefirstname} {system.numeral}",
            "4:{ship.noble} {human.lastname}",
            "1:{ship.noble} {word}",
            "1:{ship.butterfly}"
        ],
        "navalname":[
            "{ship.royalnavy}",
            "Ambush",
            "Anelace",
            "Arbalest",
            "Archer",
            "Argosy",
            "Artful",
            "Astute",
            "Ballista",
            "Bardiche",
            "Beagle",
            "Biter",
            "Blazer",
            "Charger",
            "Commodore",
            "Concord",
            "Constellation",
            "Constitution",
            "Copernicus",
            "Corseque",
            "Cutlass",
            "Dagger",
            "Daring",
            "Dasher",
            "Dauntless",
            "Diamond",
            "Dragon",
            "Defender",
            "Demeter",
            "Dragon",
            "Echo",
            "Endeavor",
            "Enterprise",
            "Excalibur",
            "Excelsior",
            "Express",
            "Exploit",
            "Explorer",
            "Falchion",
            "Falcon",
            "Glaive",
            "Golet",
            "Guavana",
            "Guisarme",
            "Guitarro",
            "Halberd",
            "Hammerhead",
            "Hardhead",
            "Hawk",
            "Hawkbill",
            "Heart of Gold",
            "Hercules",
            "Hood",
            "Hornet",
            "Hunt",
            "Icarus",
            "Icefish",
            "Incredulous",
            "Independence",
            "Jallao",
            "Javelin",
            "Jupiter",
            "Katana",
            "Kete",
            "Korolev",
            "Kraken",
            "Lagarto",
            "Lamprey",
            "Lancer",
            "Lizardfish",
            "Loggerhead",
            "Loki",
            "Longshot",
            "Longsword",
            "Macabi",
            "Mangonel",
            "Mapiro",
            "Menhaden",
            "Mero",
            "Monitor",
            "Moonshadow",
            "Morningstar",
            "Nautilus",
            "Nighthawk",
            "Odyssey",
            "Olympic",
            "Osiris",
            "Pandora",
            "Pendragon",
            "Peto",
            "Phoenix",
            "Pogy",
            "Pollaxe",
            "Pompon",
            "Protector",
            "Proteus",
            "Puffer",
            "Puncher",
            "Pursuer",
            "Raider",
            "Ranger",
            "Rapier",
            "Rasher",
            "Raton",
            "Ray",
            "Redfin",
            "Relief",
            "Robalo",
            "Rock",
            "Sabre",
            "Scimitar",
            "Shuriken",
            "Skylark",
            "Smiter",
            "Star Devil",
            "Streaker",
            "Talent",
            "Tracker",
            "Trenchant",
            "Trumpeter",
            "Triumph",
            "Turtle",
            "Vanguard",
            "Vengeance",
            "Vesuvius",
            "Victoria",
            "Victorious",
            "Victory",
            "Vigilant",
            "Wasp",
            "Zarathustra",
            "Zeus",
            "200:{system.mythologicalname}",
            "50:{system.mythologicalfigure}", 
            "15:{ship.bigidea}",
            "15:{ship.virtue}",
            "15:{ship.bigadjective}",
            "25:{ship.bigadjective} {ship.bigidea}",
            "{ship.butterfly}"
        ],
        "royalnavy":[
            "2:{ship.royalnavya}",
            "2:{ship.royalnavyb}",
            "3:{ship.royalnavyc}",
            "2:{ship.royalnavyd}",
            "{ship.royalnavye}",
            "{ship.royalnavyf}",
            "2:{ship.royalnavyg}",
            "{ship.royalnavyh}",
            "{ship.royalnavyi}",
            "{ship.royalnavyj}",
            "{ship.royalnavyk}",
            "{ship.royalnavyl}",
            "2:{ship.royalnavym}",
            "{ship.royalnavyn}",
            "{ship.royalnavyo}",
            "2:{ship.royalnavyp}",
            "{ship.royalnavyq}",
            "{ship.royalnavyr}",
            "2:{ship.royalnavys}",
            "{ship.royalnavyt}",
            "{ship.royalnavyu}",
            "{ship.royalnavyv}",
            "{ship.royalnavyw}",
            "{ship.royalnavyxyz}",
        ],
        "royalnavya":[
            "abbotsham","abdiel","abeille","abelard","abelia","abercrombie","aberdare","aberdeen","aberford","aberfoyle","abergavenny","abigail","abingdon","abundance","aboukir","abraham","abrams offering","abyssinia","acacia","acadia","acanthus","acasta","ace","acertif","achates","acheron","achilles","aconite","acorn","actaeon|acteon","actif","active","activity","acute","adam and eve","adamant","adda","adder","adelaide","adept","adjutant","admirable","admiral","admiralty","adonis","adur","advantage","advantagia","adventure","adventure galley","adventure prize","adventuress","adversary","advice","advice prize","adviser","aegusa","aeneas","aeolus","aetna","affleck","affray","africa","africaine","afridi","afrikander","agamemnon","agate","agatha","aggressor","agile","agincourt","aglaia","aid","aigle","amiable","aimwell","ainthorpe","aire","airedale","aisne","ajax","ajdaha","akbar","akers","alaart","alacrity","aladdin","almaein","alaric","alarm","alaunia","albacore","alban","albany","albatross","albemarle","albert","alberta","albion","albrighton","albuera","albury","alca","alcantara","alcaston","alceste","alcestis","alcide","alcmene","aldborough","aldenham","alderney","aldgate","aldington","alecto","alert","alerte","alexander","alexandra","alexandre","alexandria","alfred","alfreda","alfriston","algerine","algiers","alice","alisma","alkmaar","allart","allegiance","allepin","alliance","alligator","allington castle","almanzora","alnwick castle","alonzo","alouette","alphea","alpheus","alresford","alsatian","alsey","altais","altham","alton","alton castle","alverton","alvinia","alynbank","alyssum","amalthaea","amaranthe","amaranthus","amaryllis","amazon","ambassador","amberley castle","amberwitch","ambleside","amboyna","ambrose","ambuscade","ambush","ameer","amelia","america","amersham","amerton","amethyst","amfitrite","amitie","amity","amokura","ampere","amphion","amphitrite","amsterdam","amy","anacreon","anaconda","anchorite","anchusa","andania","andes","andrew","andromache","andromeda","anemone","angel","angelica","angler","anglesea","anglesey","anglia","angora","anguilla","anking","ann|anna|anne","anne gallant","anne galley","anne royal","annet","anson","answer","ant","antaeus","antagonist","antares","antelope","anthony","antigua","antrim","antwerp","anzac","anzio","apelles","aphis","aphrodite","apollo","appleby castle","appledore","appleton","approach","aquarius","aquilon","arab","arabis","arachne","aragonite","arawa","araxes","arbella","arbiter","arbroath",
            "arbuthnot","arbutus","arcadian","arc-en-ciel","archer","arcturus","ard patrick","ardent","ardrossan","arethusa|arethuse","argenta","argo","argon","argonaut","argosy","argus","argyll","ariadne","ariel","aries","ariguani","ark royal","arlingham","armada","armadale castle","armeria","armide","arms of holland","arms of horn","arms of rotterdam","arms of terver","arno","arnprior","aro","arpha","arras","arrernte","arrogant","arrogante","arromanches","arrow","arrowhead","artemis","artful","artifex","artigo","artois","arun","arundel","arve princen","ascension","ascot","asgard","ashanti","ashburton","asheldham","ashton","asia","asp","asperity","asphodel","assam","assault","assaye","assiduous","assistance","assistant","association","assurance","astarte","aster","astraea|astrea","astree","astronomer","asturias","astute","atalanta|atalante","atheling","atheleney","athene","athenian|athenien|athenienne","atherstone","athlete","atholl","atlantis","atlas","attack","attacker","attentive","aubrietia","aukland","audacieux","audacious","audacity","augusta","auguste","augustine","augustus","auricula","auriga","aurochs","aurora","aurore","ausonia","austere","australia","autumn","aveley","avenger","aventurier","avernus","avon","avon vale","awake","awe","axford","aydon castle","aylmer","ayrshire","azalea","azov","aztec"
        ],
        "royalnavyb":[
            "Babet","Bacchante","Bacchus","Bachaquero","Badger","Badminton","Badora","Badsworth","Bagshot","Bahama","Bahamas","Bala","Baleine","Balfour","Balgay","Ballahoo","Ballahou","Ballarat","Ballinderry","Balm","Balsam","Baltic","Baltimore","Bamborough Castle","Ban Whatt Hin","Banbury","Banchory","Banff","Bangor","Banka","Bann","Banshee","Banterer","Bantry","Bantum","Barbadoes","Barbadoes Merchant","Barbados","Barbara","Barbara Robertson","Barbette","Barbuda","Barcross","Barfleur","Barham","Bark of Bullen","Bark of Murlesse","Barle","Barlight","Barnard Castle","Barnstaple","Barnwell Castle","Barossa","Barracouta","Barrington","Barrosa","Basilisk","Basing","Bassingham","Bastion","Bat","Batavia","Bath","Bathgate","Bathurst","Batman","Battle","Battleaxe","Battler","Bayano","Bayfield","Bayonet","Bayntun","Bazely","Beachampton","Beachy Head","Beacon","Beagle","Bear","Beatrice","Beatty","Beaufort","Beaulieu","Beauly","Beauly Firth","Beaumaris","Beaumont","Beaver","Beaver Prize","Beccles","Beckford","Beckwith","Bedale","Bedford","Bedford Galley","Bedham","Bedouin","Bee","Beehive","Beelzebub","Beeston Castle","Begonia","Begum","Belem","Belette","Belfast","Belize","Belle Isle","Belle Poule","Belleisle","Bellerophon","Belliqueux","Bellisarius","Bellona","Bellwort","Belmont","Belton","Belvidera","Belvoir","Belzebub","Ben Lomond","Ben Meidie","Ben Nevis","Benbow","Bend Or","Bendigo","Bengal","Benjamin","Benjamin & Ann","Ben-my-Chree","Bentinck","Bentley","Berberis","Berbice","Bere Castle","Beresford","Bergamot","Bergere","Berkeley","Berkeley Castle","Bermuda","Berry","Berry Head","Berwick","Beryl","Beschermer","Betony","Betty","Beverley","Bevington","Bezan","Bhamo","Biarritz","Bicester","Bickerton","Bickington","Biddeford","Bideford","Bienfaisant","Bigbury Bay","Bihar","Bildeston","Bilsthorpe","Bird","Birdham","Birkenhead","Birmingham","Bisham","Biter","Bittern","Bittersweet","Black","Black Bear","Black Bull","Black Dog","Black Eagle","Black Joke","Black Posthorse","Black Prince","Black Spread-Eagle","Black Swan","Blackburn","Blackcock","Blackfly","Blackmore","Blackmore Ketch","Blackmore Lady","Blackmorevale","Blackpool","Blackwall","Blackwater","Blackwood","Blade","Blake","Blakeney","Blanche","Blandford","Blankney","Blast","Blaxton","Blaze","Blazer","Blean","Bleasdale","Blencathra","Blenheim","Blessing","Blickling","Bligh","Blonde","Bloodhound","Bloom","Blosse Lynch","Blossom","Bluebell",
            "Blyth","Boadicea","Bodenham","Bodiam Castle","Bold","Bolebroke","Bolton","Bolton Castle","Bombay","Bombay Castle","Boomerang","Bonaventure","Bonavoila","Bonetta","Bonita","Bonito","Bonne Citoyenne","Bootle","Borage","Borde","Border","Borealis","Boreas","Boreham","Borer","Borodino","Boscawen","Bossington","Boston","Bostonian","Botha","Bottisham","Bouclier","Boulogne","Boulston","Bouncer","Bountiful","Bounty","Bourbonnaise","Bourdelais","Bowes Castle","Boxer","Boyne","Braak","Braave","Bradfield","Bradford","Braemar Castle","Braid","Braithwaite","Brakel","Bramber Castle","Bramble","Bramham","Branlebas","Brantingham","Brave","Brave Borderer","Brave Swordsman","Bravo","Brayford","Brazen","Bream","Brearley","Brecon","Breconshire","Breda","Brenchley","Brereton","Brev Drageren","Brevdrageren","Briar","Bridgewater","Bridgnorth Castle","Bridlington","Bridport","Brigadier","Brigandine","Brigantine","Brigham","Brighton","Brighton Belle","Brighton Queen","Brilliant","Brilliant Prize","Brinkley","Brinton","Briseis","Brisk","Brissenden","Bristol","Britannia","Britannic","Britomart","Briton","Brixham","Broederschap","Broadley","Broadsword","Broadwater","Broadway","Brock","Brocklesby","Broke","Brolga","Bronington","Broom","Broome","Broomley","Brothers","Brough Castle","Bruce","Bruiser","Bruizer","Brune","Brunswick","Brutus","Bryansford","Bryony","Bucephalus","Buchan Ness","Buck","Buckie","Buckingham","Bucklesham","Buddleia","Bude","Buffalo","Bugloss","Bull","Bull dog","Bulldog","Bullen","Bullfinch","Bullfrog","Bullhead","Bullrush","Bulolo","Bulrush","Bulwark","Burchett","Burdock","Burford","Burges","Burghead Bay","Burgonet","Burley","Burlington","Burnaston","Burnet","Burnham","Burnie","Burslem","Burton","Burwell","Bury","Buss","Bustard","Bustler","Busy","Buttercup","Butterfly","Buttington","Buttress","Buxton","Buzzard","Byard","Byron"
        ],
        "royalnavyc":[
            "Ca Ira","Cabot","Cacafogo","Cachalot","Caddisfly","Cadiz","Cadmus","Caduceus","Caerleon","Caesar","Caesarea","Caicos","Cairns","Cairo","Caistor Castle","Calabash","Calanthe","Calcutta","Caldecot Castle","Calder","Caldwell","Caledon","Caledonia","Calendula","Calgarian","California","Calista","Calliope","Calpe","Calshot Castle","Calton","Calypso","Calyx","Cam","Camberford","Camberley","Cambria","Cambrian","Cambridge","Cambridgeshire","Camel","Cameleon","Camelion","Camellia","Cameron","Cameronia","Camilla","Camito","Campania","Campanula","Campbell","Campbeltown","Campeador","Camperdown","Camphaan","Campion","Canada","Canceaux","Candytuft","Canning","Canopus","Canso","Canterburg","Canterbury","Canterbury Castle","Canton","Cap St Jacques","Cape Argona","Cape Chelyuskin","Cape Comorin","Cape Finisterre","Cape Howe","Cape Passaro","Cape Sable","Cape Siretoko","Cape Spartel","Cape Warwick","Cape Wrath","Capel","Capelin","Capetown","Caprice","Capricornus","Captain","Captivity","Caradoc","Caraquet","Carcass","Cardiff","Cardigan Bay","Cardingham","Careful","Carew Castle","Carhampton","Caribbean","Carisbrook Castle","Carisbrooke Castle","Carlisle","Carlotta","Carmania","Carmen","Carnarvon","Carnarvon Bay","Carnarvon Castle","Carnatic","Carnation","Carolina","Caroline","Caronia","Carrere","Carrick","Carrier","Carrigaline","Carrigan Head","Carron","Carronade","Carry On","Carstairs","Carthage","Cartier","Carysfort","Cashel","Cassandra","Cassius","Castilian","Castle","Castle Harbour","Castlereagh","Castleton","Castor","Cat","Catania","Caterham","Cathay","Catherine","Cato","Caton","Catterick","Cattistock","Caunton","Cauvery","Cavalier","Cavan","Cavendish","Cavina","Cawsand Bay","Cawsand","Cayenne","Cayman","Cayton Wyke","Ceanothus","Cedric","Celandine","Celebes","Celerity","Celia","Celt","Celtic","Censeur","Censor","Centaur","Centurion","Cephalus","Cerbere","Cerberus","Ceres","Cerf","Cesar","Cessnock","Ceto","Ceylon","Chailey","Chakdina","Chakla","Challenger","Chameleon","Chamois","Champion","Chance","Changuinola","Chantala","Chanticleer","Chaplet","Charde","Charger","Charity","Charles","Charles Boyes","Charles and Henry","Charles Galley","Charlestown","Charlock","Charlotte","Charon","Charwell","Charybdis","Chaser","Chasseur","Chatham","Chatham Double","Chatham Hulk","Chatham Prize","Chatsgrove","Chawton","Cheam","Chediston","Cheerful","Cheerly","Chelmer","Chelmsford","Chelsea","Chelsham",
            "Cheltenham","Chengteh","Chepstow Castle","Chepstow","Chequers","Cheriton","Cherokee","Cherub","Charwell","Cherwell","Chesapeake","Cheshire","Chester","Chester Castle","Chesterfield","Chestnut","Cheviot","Chevreuil","Chevron","Chichester","Chiddingfold","Chieftain","Chilcompton","Childers","Childs Play","Chillingham","Chilton","China","Chippeway","Chitral","Chivalrous","Cholmondeley","Christ","Christchurch Castle","Christian","Christine Rose","Christopher","Christopher Spayne","Christopher Wren","Chrysanthemum","Chub","Chubb","Church","Churchill","Cicala","Cicero","Cilicia","Circassia","Circassian","Circe","Citadel","City of Belfast","City of Durban","City of Edinburgh","City of London","City of Rochester","Clacton","Clan MacNaughton","Clara","Clarbeston","Clare","Clare Castle","Clarence","Clarkia","Claudia","Claverhouse","Clavering Castle","Claymore","Cleethorpes","Clematis","Clementina","Cleopatra","Cleveland","Clifton","Clinker","Clinton","Clio","Clitheroe Castle","Clive","Clonmel","Clorinde","Clove Tree","Clovelly","Cloughton Wyke","Clover","Clown","Clun Castle","Clyde","Clydebank","Cobbers","Cobham","Cobra","Cochin","Cochrane","Cockade","Cockatrice","Cockburn","Cockchafer","Cocker","Cocksedge","Codrington","Colchester","Colchester Castle","Colibri","Colleen","Collingwood","Collinson","Colne","Colombe","Colombo","Colossus","Coltsfoot","Columbella","Columbia","Columbine","Colwyn","Combatant","Combustion","Comeet","Comet","Comfrey","Commandant Domine","Commandant Duboc","Commander Holbrook","Commerce de Marseille","Commonwealth","Comorin","Comus","Conception","Concord","Concorde","Condor","Confederate","Confiance","Conflagration","Conflict","Confounder","Congo","Coniston","Conn","Conquerant","Conquerante","Conqueror","Conquest","Conquestador","Conquistador","Consort","Constance","Constant","Constant John","Constant Reformation","Constant Warwick","Constitution","Contender","Content","Contest","Convert","Convertine","Convolvulus","Convulsion","Conway","Cook","Cooke","Coote","Copenhagen","Coquette","Coquille","Corbrae","Corburn","Cordelia","Coreopsis","Corfe Castle","Corfield","Corfu","Coriander","Corinthian","Cormorant","Cornel","Cornelia","Cornelian","Cornet Castle","Cornflower","Cornwall","Cornwallis","Coromandel","Coronado","Coronation","Corso","Corunna","Corycia","Cosby","Cossack","Cotillion","Cotswold","Cottesmore","Cotton","Coucy","Counterguard","Countess of Carinthia","Countess of Hopetoun",
            "Countess of Scarborough","Courageous","Courageux","Courbet","Coureur","Coureuse","Courier","Courser","Coventry","Covina","Cowdray","Cowes Castle","Cowling Castle","Cowper","Cowslip","Craccher","Crache-Feu","Cracker","Cradley","Crafty","Craigie","Crane","Cranefly","Cranham","Cranstoun","Crash","Craufurd","Crediton","Creole","Crescent","Cressy","Crested Eagle","Crestflower","Cretan","Criccieth Castle","Crichton","Cricket","Crispin","Crocodile","Crocus","Crofton","Cromarty","Cromer","Cromer Castle","Cromwell","Croome","Crossbow","Crow","Crown","Crown Malago","Crown Prize","Croxton","Crozier","Croziers","Cruelle","Cruiser","Cruizer","Crusader","Crystal","Cuba","Cubitt","Cuckmere","Cuckoo","Cuffley","Cullin Sound","Culloden","Culver","Culverin","Cumberland","Cupar","Cupid","Curacoa","Curieux","Curlew","Curragh","Curzon","Cutlass","Cutter","Cuttle","Cuxton","Cyane","Cybele","Cyclamen","Cyclops","Cydnus","Cygnet","Cymric","Cynthia","Cyrene","Cyrus","Czarevitch"
        ],
        "royalnavyd":[
            "Dacres","Daedalus","Daffodil","Dagger","Dahlia","Dainty","Daisy","Dakins","Dalhousie","Dalrymple","Dalswinton","Dame de Grace","Damerham","Dampier","Danae","Daneman","Dangereuse","Daniel","Dannemark","Danube","Daphne","Dapper","Daring","Darlaston","Darsham","Dart","Dartington","Dartmoor","Dartmouth","Dasher","Date Tree","Dauntless","Dauphin Royal","Davenham","David","Dawlish","De Ruyter","Deal Castle","Deale Castle","Deale","Deane","Decade","Decibel","Decouverte","Decoy","Dedaigneuse","Dee","Deepwater","Defence","Defender","Defiance","Dego","Delaware","Delft","Delhi","Delight","Deliverance","Delphinen","Delphinium","Delta","Demerara","Demir Hisar","Demon","Denbigh Castle","Dennis","Dependence","Deptford","Deptford Prize","Deptford Transport","Derby","Derby Haven","Derbyshire","Derg","Derrington","Dervish","Derwent","Desford","Desire","Desiree","Despatch","Desperante","Desperate","Destiny","Destruction","Determinee","Detroit","Deux Amis","Deux Freres","Devanha","Devastation","Deveron","Devizes Castle","Devonia","Devonshire","Dexterous","Dextrous","Dhyfe Castle","Diable à Quatre","Diadem","Diamond","Diana","Diane","Dianella","Dianthus","Dictator","Dido","Didon","Dieppe","Digby","Diligence","Diligent","Diligente","Dilston","Dingley","Diomede","Dipper","Director","Dirk","Discoverer","Discovery","Disdain","Dispatch","Dittany","Dittisham","Diver","Dixmunde","Dodman Point","Dodo","Dogstar","Dolphin","Dolphins Prize","Dolwen","Domett","Dominica","Dominion","Don","Doncaster","Donegal","Donovan","Doon","Dordrecht","Doris","Dorking","Dornoch","Dorothea","Dorset","Dorsetshire","Doterel","Dotter","Douglas","Dove","Dover","Dover Castle","Dover Prize","Dovey","Dowgate","Downham","Downley","Dragon","Dragon Prize","Dragonfly","Drake","Dreadful","Dreadnought","Dreadnought Prize","Driver","Drochterland","Dromedary","Dromio","Droxford","Drudge","Druid","Drury","Dryad","Dubford","Dublin","Dublin Castle","Duc d'Aquitaine","Duc de Chartres","Duc de la Vauginon","Duc d'Estissac","Duchess","Duchess of Cornwall","Duchess of Cumberland","Duchess of Devonshire","Duchess of Fife","Duchess of Montrose","Duchess of Norfolk","Duchess of Richmond","Duchess of Rothesay","Duchess of York","Duckworth","Duddon","Dudley Castle","Due Repulse","Duff","Dufferin","Dufton","Duguay-Trouin","Duke","Duke of Albany","Duke of Argyll","Duke of Clarence","Duke of Cornwall",
            "Duke of Edinburgh","Duke of Kent","Duke of Lancaster","Duke of Rothesay","Duke of Wellington","Duke of York","Duke William","Dullisk Cove","Dulverton","Dumbarton","Dumbarton Castle","Dumbleton","Dunbar","Duncan","Duncansby Head","Dundalk","Dundas","Dundee","Dundrum Bay","Dunedin","Dunera","Dungeness","Dunira","Dunkerton","Dunkirk","Dunkirk Prize","Dunluce Castle","Dunmore","Dunnottar Castle","Dunoon","Dunster Castle","Dunvegan Castle","Dunwich","Duplex","Duquesne","Durban","Durham","Dursley Galley","Durweston","Dusky Queen","Duthies","Dwarf"
        ],
        "royalnavye":[
            "Eagle","Eagle Shallop","Eaglet","Earl","Earl of Chatham","Earl of Denbigh","Earl of Egmont","Earl of Halifax","Earl of Inchquin","Earl of Loudon","Earl of Northampton","Earl of Peterborough","Earl Roberts","Earnest","Eastbourne","Easton","Eastway","Ebani","Echo","Eclair","Eclipse","Edderton","Eden","Edgar","Edgeley","Edinburgh","Edlingham","Edward","Edward and Eve","Effingham","Egeria","Eggesford","Eglantine","Eglinton","Egmont","Egremont","Egremont Castle","Egret","Egyptienne","Eideren","Ekins","El Corso","El Nil","El Vivo","Eleanor","Electra","Elephant","Elf","Elfin","Elfreda","Elgin","Elias","Eling","Elizabeth","Elizabeth & Sarah","Elizabeth Bonaventure","Elizabeth Jonas","Elk","Ellinor","Ellinore","Elphinstone","Elsenham","Eltham","Elven","Embleton","Emerald","Emersham","Emilia","Emilien","Emily","Emperor","Emperor of India","Empire","Empire Anvil","Empire Arquebus","Empire Audacity","Empire Battleaxe","Empire Broadsword","Empire Cedric","Empire Celtic","Empire Comfort","Empire Crossbow","Empire Cutlass","Empire Cymric","Empire Dace","Empire Gauntlet","Empire Halberd","Empire Javelin","Empire Lance","Empire Mace","Empire Peacemaker","Empire Rapier","Empire Rest","Empire Shelter","Empire Spearhead","Empress","Empress Mary","Empress of Asia","Empress of Britain","Empress of France","Empress of India","Empress of Japan","Empress of Russia","Empress Queen","Ems","Emsworth","Emulous","Enard Bay","Enchantress","Encounter","Endeavour","Endeavour Bark","Endeavour Transport","Endurance","Endymion","Engadine","Engageante","England","Englishman","Enterprise","Enterprize","Entreprenante","Epervier","Ephira","Ephraim","Epinal","Epreuve","Epsom","Erebus","Erica","Eridanus","Eridge","Erin","Erne","Errant","Eruption","Escapade","Escort","Esk","Eskdale","Eskimo","Esperance","Esperance Bay","Esperanza","Espiegle","Espion","Espoir","Essequibo","Essex","Essex Prize","Essex Queen","Essington","Esther","Estridge","Etchingham","Ethalion","Etna","Etrusco","Ettrick","Eugenie","Euphrates","Euphrosyne","Europa","Eurotas","Eurus","Euryalus","Eurydice","Eustatia","Evadne","Evenlode","Everingham","Example","Excalibur","Excellent","Exchange","Exe","Exertion","Exerton","Exeter","Exmoor","Exmouth","Expedition","Experiment","Exploit","Explorer","Explosion","Express","Extravagant","Eyderen","Eyebright"
        ],
        "royalnavyf":[
            "Fagons","Fair Rhodian","Fair Rosamond","Fairfax","Fairfield","Fairlight","Fairplay","Fairy","Fairy Queen","Faislane","Faith","Faithful","Fal","Falcon","Falcon Flyboat","Falcon in the Fetterlock","Falcon of the Tower","Falkland","Falkland Prize","Falmouth","Fama","Fame","Fancy","Fandango","Fanfan","Fanny","Fantome","Fara Numa","Fareham","Farndale","Farnham Castle","Farragut","Fastnet","Faulknor","Faversham","Favorite","Favourite","Fawkner","Fawn","Fearless","Felicidade","Felicite","Felicity","Felix","Felixstowe","Fellowship","Felmersham","Fencer","Fenella","Fennel","Fenton","Fermoy","Fernie","Feroze","Ferret","Ferreter","Fertile Vale","Fervent","Feversham","Fidelity","Fidget","Fierce","Fife","Fife Ness","Fifi","Fighter","Fiji","Filey","Finch","Findhorn","Finisterre","Finwhale","Fiona","Fireball","Firebrand","Firedrake","Firefly","Firequeen","Firm","Firme","Fisgard","Fisher Boy","Fisher Girl","Fishguard","Fiskerton","Fittleton","Fitzroy","Flambeau","Flamborough","Flamborough Head","Flamborough Prize","Flame","Flamer","Flamingo","Flash","Flax","Fleche","Fleetwood","Fleur de la Mer","Fleur de Lys","Flewende Fische","Flight","Flinders","Flint","Flint Castle","Flintham","Flirt","Flockton","Flora","Florentina","Florida","Floriston","Florizel","Flotta","Flower de Luce","Fly","Flying Fish","Flying Fox","Flying Greyhound","Foam","Foley","Folkeston","Folkestone","Force","Ford","Forerunner","Fordham","Foresight","Forester","Forfar","Formidable","Forres","Fort Dee","Fort Diamond","Fort Royal","Fort York","Forte","Forth","Fortitude","Fortituud","Fortune","Fortune Prize","Fortunée","Forward","Fotheringay Castle","Foudre","Foudroyant","Fougueux","Fountain","Fowey","Fox","Foxglove","Foxhound","Foyle","Foylebank","Franchise","Francis","Franklin","Fraserburgh","Fratton","Frederick","Frederick William","Frederickstein","Frederickswaern","Freesia","French Ruby","French Victory","Frere","Frettenham","Freya","Friendship","Friezland","Fritham","Fritillary","Frobisher","Frog","Frolic","Frome","Fubbs","Fuerte","Fuh Wo","Fulmar","Fulminate","Furieuse","Furious","Furnace","Fury","Fuze","Fyen","Fylla"
        ],
        "royalnavyg":[
            "Gabbard","Gabriel","Gabriel Harfleur","Gabriel Royal","Gaddesden","Gadfly","Gadwell","Gael","Gaiete","Gaillarda","Gaillardia","Gainsborough","Gala","Galatea","Galathee","Galgo","Galicia","Gallant","Gallarita","Gallion","Galliot","Galteemore","Gambia","Gamston","Ganges","Gannet","Ganymede","Gardenia","Gardiner","Garland","Garlies","Garnet","Garry","Garth","Gaspee","Gatwick","Gaul","Gauntlet","Gavinton","Gavotte","Gawler","Gay Archer","Gay Bombardier","Gay Bowman","Gay Bruiser","Gay Carabineer","Gay Cavalier","Gay Centurion","Gay Dragoon","Gay Fencer","Gay Forester","Gayundah","Gazelle","Gelykneid","General Abercrombie","General Brackenbury","General Craufurd","General Elles","General Elliot","General Grant","General Monk","General Platt","General Wolfe","Genereux","Genista","Genoa","Gentian","Gentille","George","Georgeham","Georgetown","Georgiana","Geraldton","Geranium","Germaine","Germoon Prize","Gerrans Bay","Geyser","Ghurka","Giang Bee","Gibraltar","Gibraltar Prize","Gier","Gifford","Gift","Gift Minor","Giles","Gilia","Gilliflower","Gipsy","Girdle Ness","Girl Helen","Girl Mary","Gironde","Gladiator","Gladiolus","Glaisdale","Glamorgan","Glasgow","Glasserton","Glassford","Glatton","Gleaner","Glenarm","Glenearn","Glengyle","Glenmore","Glenroy","Glentham","Gloaming","Globe","Gloire","Glommen","Glorieux","Gloriosa","Glorioso","Glorious","Glory","Gloucester","Gloucestershire","Glowworm","Gloxinia","Gluckstadt","Gnat","Go Ahead","Goathland","Godetia","Goelan","Gold Coast","Golden Falcon","Golden Fleece","Golden Horse","Golden Lion","Golden Rose","Goldfinch","Goliath","Good Design","Good Fortune","Good Hope","Good Intent","Good Will","Goodall","Goodgrace","Goodson","Goodwin","Goodwood","Goole","Gordon","Gore","Goree","Gorey Castle","Gorgon","Gorleston","Goshawk","Gosport","Gossamer","Goulburn","Gould","Gown Hill","Gozo","Grace Dieu","Grace of God","Grace","Gracie Fields","Grafton","Gramont","Grampian","Grampus","Grana","Granado","Grand Turk","Grandmistress","Grangermouth","Granicus","Grantham","Graph","Grappler","Grasshopper","Gravelines","Grayfly","Grays","Great Barbara","Great Bark","Great Elizabeth","Great Galley","Great Harry","Great Nicholas","Great Pinnace","Great Zabra","Greatford","Grecian","Green Linnet","Greenfish","Greenfly","Greenock","Greenwich","Greetham","Grenada","Grenade","Grenado","Grenville","Gretna","Grey Fox","Grey Wolf","Greyfly","Greyhond","Greyhound","Griffin","Griffon",
            "Grimsby","Grindall","Grinder","Griper","Grive","Grouper","Grove","Growler","Guachapin","Guadeloupe","Guardian","Guardland","Guardsman","Guelderland","Guepe","Guernsey","Guerriere","Guilder De Ruyter","Guildford Castle","Guildford","Guillemot","Guinea","Guinevere","Gulland","Gulnare","Gurkha","Guysborough"
        ],
        "royalnavyh":[
            "Haddock","Hadleigh Castle","Haerlem","Halberd","Halcyon","Haldon","Half Moon","Halifax","Halladale","Halsham","Halstarr","Halstead","Hamadryad","Hambledon","Hampshire","Hampton Court","Handmaid","Handy","Hannam","Hannibal","Happy","Happy Entrance","Happy Ladd","Happy Return","Hardi","Hardinge","Hardy","Hare","Harebell","Harfruen","Hargood","Harland","Harlech","Harlequin","Harman","Harold","Harp","Harpenden","Harpham","Harpy","Harrier","Harriot","Harrow","Hart","Hartland","Hartland Point","Hartlepool","Harvester","Harwich","Hastings","Hasty","Hatherleigh","Haughty","Havannah","Havant","Havelock","Haversham","Havick","Havock","Hawk","Hawke","Hawkins","Hawthorn","Haydon","Hayling","Hazard Prize","Hazard","Hazardous","Hazel","Hazleton","Heart of Oak","Heartsease","Hearty","Heather","Hebe","Hecate","Hecla","Hector","Hedingham Castle","Heir Apparent","Helder","Helderenberg","Heldin","Helena","Helford","Helicon","Heliotrope","Helmsdale","Helmsley Castle","Helverson","Hemlock","Henrietta","Henrietta Maria","Henry","Henry Galley","Henry Grace à Dieu","Henry of Hampton","Henry Prize","Hepatica","Herald","Hercules","Hereward","Hermes","Hermione","Herne Bay","Hero","Heroine","Heron","Hesper","Hesperus","Hestor","Heureux","Hever Castle","Hexham","Hexton","Heythrop","Hibernia","Hibiscus","Hickleton","Highburton","Highflyer","Highlander","Highway","Hilary","Hildersham","Himalaya","Hinchinbrook","Hind","Hindostan","Hindustan","Hinksford","Hippomenes","Hirondelle","Hobart","Hodgeston","Hogue","Holcombe","Holderness","Holdernesse","Holighost","Holigost Spayne","Holigost","Holland","Holland 1","Holland 2","Holland 3","Holland 4","Holland 5","Hollesley Bay","Holly","Hollyhock","Holm Sound","Holmes","Holstein","Honesty","Honeysuckle","Hong Kong","Hong Lam","Hood","Hope","Hope Prize","Hopewell","Hoptown","Horatio","Hornby","Hornet","Hornpipe","Horseman","Horsleydown","Hoste","Hostile","Hotham","Hotspur","Houghton","Hound","House de Swyte","Hoverfly","Hovingham","Howe","Howett","Howitzer","Hubberston","Hugh Lindsay","Hugh Rose","Hughes","Hulvul","Humber","Hunter","Huntley","Huron","Hurricane","Hursley","Hurst","Hurst Castle","Hurworth","Hussar","Hyacinth","Hyaena","Hyderabad","Hydra","Hydrangea","Hygeia","Hyperion","Hythe"
        ],
        "royalnavyi":[
            "Ibis","Icarus","Icicle","Ickford","Ignition","Ildefonso","Ilex","Ilfracombe","Illustrious","Ilmington","Ilston","Imaum","Immortalite","Imogen","Imogene","Imperial","Imperieuse","Impeteux","Impey","Implacable","Impregnable","Impulsive","Incendiary","Inconstant","Increase","Indefatigable","Independencia","India","Indian","Indignant","Indomitable","Indus","Industry","Infanta Don Carlos","Infanta","Infernal","Inflexible","Inglefield","Inglesham","Inglis","Ingonish","Inman","Insolent","Inspector","Instow","Integrity","Intelligence","Intelligent","Intrepid","Invention","Invermoriston","Inverness","Inverlyon","Investigator","Inveterate","Invicta","Invincible","Iolaire","Iphigenia","Ipswich","Iris","Iron Duke","Iroquois","Irresistible","Irvine","Irwell","Isabella","Isham","Isinglass","Isis","Iskra","Islay","Isle of Guernsey","Isle of May","Isle of Thanet","Isle of Wight","Islip","Ister","Itchen","Ithuriel","Ivanhoe","Iveston","Ivy"
        ],
        "royalnavyj":[
            "Jack","Jack Tar","Jackal","Jackdaw","Jackton","Jaguar","Jahde","Jalouse","Jamaica","James","James & Eliza","James Galley","James Watt","Jane","Janissary","Janus","Jaseur","Jasmine","Jason","Jasper","Java","Javelin","Jed","Jellicoe","Jemmy","Jennet","Jennet Pyrwin","Jeremiah","Jerfalcon","Jersey","Jersey Hulk","Jervis","Jervis Bay","Jessamine","Jesus","Jesus & Mary","Jesus of Lübeck","Jewel","John","John & Alexander","John & Martha","John & Peter","John & Sarah","John Ballinger","John Baptist","John Ebbs","John Evangelist","John of Dublin","John of Greenwich","Johnson","Jolly","Jonquil","Joseph","Joseph Straker","Josiah","Joyful","Jubilant","Julia","Julian","Juliet","Julius","Jumna","Junella","Juniper","Juno","Junon","Jupiter","Juste","Justitia","Jutland",
        ],
        "royalnavyk":[
            "Kale","Kalgoorlie","Kampar","Kandahar","Kangaroo","Karakatta","Karanja","Karrakatta","Kashmir","Katherine","Katherine Bark","Katherine Breton","Katherine Fortileza","Katherine Galley","Katoomba","Keats","Kedleston","Keith","Kelana","Kellett","Kellington","Kelly","Kelvin","Kemerton","Kempenfelt","Kempthorne","Kempton","Kendal","Kenilworth Castle","Kennet","Kennington","Kennymore","Kent","Kentish","Kenya","Keppel","Keren","Kertch","Keryado","Kestrel","Kew","Khartoum","Khedive","Kiawo","Kilbane","Kilbarchan","Kilbeggan","Kilberry","Kilbirnie","Kilbrachan","Kilbride","Kilbrittain","Kilburn","Kilby","Kilcar","Kilcavan","Kilchattan","Kilchreest","Kilchrenan","Kilchvan","Kilclare","Kilcolgan","Kilconnan","Kilconnel","Kilcoole","Kilcornie","Kilcot","Kilcreggan","Killcullen","Kilcurrig","Kildale","Kildarton","Kildary","Kildavin","Kildimo","Kildonan Castle","Kildorough","Kildorry","Kildpart","Kildress","Kildwick","Kilfenora","Kilfinny","Kilfree","Kilfullert","Kilgarvan","Kilglass","Kilgobnet","Kilgowan","Kilham","Kilhampton","Kilkee","Kilkeel","Kilkenny","Kilkenzie","Kilkerrin","Kilkhampton","Killadoon","Killaloo","Killane","Killarney","Killary","Killegan","Killegar","Killena","Killerig","Killiecrankie","Killeney","Killour","Killowen","Killybegs","Killygordon","Kilmacrennan","Kilmaine","Kilmalcolm","Kilmallock","Kilmanahan","Kilmarnock","Kilmartin","Kilmead","Kilmelford","Kilmersdon","Kilmington","Kilmore","Kilmorey","Kilmuckridge","Kilmun","Kimberley","Kincardine","King Alfred","King David","King Edward","King George","King Henry","King of Prussia","King Orry","King Sol","Kingcup","Kingfish","Kingfisher","Kingham","Kingsale","Kingsford","Kingsmill","Kingston","Kingston Alalite","Kingston Beryl","Kingston Cairngorm","Kingston Cornelian","Kingston Galena","Kingston Onyx","Kingston Sapphire","Kingussie","Kinnairds Head","Kinross","Kinsale","Kinsha","Kipling","Kirkliston","Kistna","Kitchen","Kite","Kittiwake","Knaresborough Castle","Knight of Malta","Knole","Kopanes","Kos XXII","Kos XXIII","Krakowiak","Kronprincen","Kronprincessen","Kudat","Kujawiak","Kung Wo"
        ],
        "royalnavyl":[
            "La Capricieuse","La Chieftain","La Combatante","La Cordeliere","La Flore","La Hulloise","La Loire","La Malbai","La Malouine","La Melpomene","La Moqueuse","L'Abondance","Labuan","Laburnum","Lacedaemonian","Lachine","Lachlan","Lachute","Ladas","Ladava","Lady Canning","Lady Elsa","Lady Falkland","Lady Hogarth","Lady Lilian","Lady Loch","Lady Madeleine","Lady Nelson","Lady Philomena","Lady Prevost","Lady Shirley","Lady Slater","Lady Somers","Lady Taylor","Ladybird","Lae","Laertes","Laforey","Lagan","L'Aglaia","Laird's Isle","Lal","Laleston","Lalmourn","Lamerton","Lamport","Lanark","Lancaster","Lancaster Castle","Lance","Landguard","Landrail","Land Tortoise","Langport","Lantau","Lanton","Lapwing","Largo Bay","Largs","Lark","Larke","Larkspur","Larne","Lasalle","Lasham","Lassoo","Latona","Latrobe","Lauderdale","Launceston","Launceston Castle","Laura","Laurel","Laurestinus","Lauzon","Lavender","Laverock","Lavinia","Lawford","Lawrence","Lawson","Laymoor","Le Havre","Le Robecque","Le Triomphant","Leamington","Leander","Leaside","Leda","Ledbury","Ledsham","Lee","Leeds Castle","Leeds","Leeuwin","Legere","Legion","L'Egyptienne","Leicester","Leighton","Leith","Lennox","Lenox","Leocadia","Leonidas","Leopard","Leopard's Whelp","Lethbridge","L'Etoile","Letterston","Levant","Leven","Leveret","Leverton","Leviathan","Levis","Lewes","Lewiston","Leyden","L'Hercule","Li Wo","Liberty","Lichfield","Lichfield Prize","Licorne","Liddesdale","Liffey","Ligaera","HMS Ligonier","Lightfoot","Lightning","Lilac","Lily","Limbourne","L'Impassable","Linaria","Lincoln","L'Incomprise","Lindisfarne","Lindsey","Ling","Linganbar","Lingfield","Linnet","Lion","Lioness","Lion's Whelp","Lisburne","Lismore","Liston","Listowel","Lithgow","Little Belt","Little Charity","Little London","Little Unicorn","Little Victory","Littleham","Lively","Liverpool","Lizard","Llandaff","Llandudno","Llewellyn","Lobelia",
            "Loch Achanault","Loch Achray","Loch Affric","Loch Alvie","Loch Ard","Loch Arkaig","Loch Arklet","Loch Arnish","Loch Assynt","Loch Awe","Loch Badcall","Loch Boisdale","Loch Bracadale","Loch Carloway","Loch Caroy","Loch Carron","Loch Clunie","Loch Coulside","Loch Craggie","Loch Cree","Loch Creran","Loch Doine","Loch Doon","Loch Dunvegan","Loch Earn","Loch Eck","Loch Eil","Loch Enock","Loch Ericht","Loch Erisort","Loch Eye","Loch Eynort","Loch Fada","Loch Fannich","Loch Fionn","Loch Frisa","Loch Fyne","Loch Garasdale","Loch Garve","Loch Glashan","Loch Glendhu","Loch Goil","Loch Gorm","Loch Griam","Loch Harport","Loch Harray","Loch Heilen","Loch Hourne","Loch Inchard","Loch Insh","Loch Katrine","Loch Ken","Loch Kilbirnie","Loch Killin","Loch Killisport","Loch Kirbister","Loch Kirkaig","Loch Kishorn","Loch Knockie","Loch Laro","Loch Laxford","Loch Linfern","Loch Linnhe","Loch Lomond","Loch Lubnaig","Loch Lurgain","Loch Lydoch","Loch Lyon","Loch Maberry","Loch Maddy","Loch Minnick","Loch Mochrum","Loch More","Loch Morlich","Loch Muick","Loch Nell","Loch Odairn","Loch Ossain","Loch Quoich","Loch Roan","Loch Ronald","Loch Ruthven","Loch Ryan","Loch Scamdale","Loch Scavaig","Loch Scridain","Loch Seaforth","Loch Sheallag","Loch Sheil","Loch Shin","Loch Skaig","Loch Skerrow","Loch Stemster","Loch Stenness","Loch Striven","Loch Sunart","Loch Swannay","Loch Swin","Loch Tanna","Loch Tarbert","Loch Tilt","Loch Torridon","Loch Tralaig","Loch Tummel","Loch Urigill","Loch Vanavie","Loch Vennachar","Loch Veyatie","Loch Watten","Lochinvar","Lochy","Lockeport","Locust","Lofoten","London","Londonderry","Longbow","Longbranch","Longford","Longueuil","Lonsdale","Looe","Lookout","Loosestrife","Lord Clive","Lord Eldon","Lord Howe","Lord Melville","Lord Mulgrave","Lord Nelson","Lord Nuffield","Lord Raglan","Lord Roberts","Lord Warden","Loring","Lossie","Lothian","Lotus","Louis","Louisa","Louisburg","Loup Cervier","Louvain","Love and Friendship","Lowestoffe","Lowestoffe Prize","Lowestoft","Loyal","Loyal Chancellor","Loyal Example","Loyal Exploit","Loyal Explorer","Loyal Express","Loyal London","Loyal Watcher","Loyalist","Loyalty","Luce Bay","Lucia","Lucifer","Ludham","Ludlow","Ludlow Castle","Lullington","Lulworth","Lunenburg","Lupin","Lurcher","Lusitania","Lutin","Lutine","Lychnis","Lydd","Lydiard","Lydney","Lyemun","Lyme","Lyme Regis","Lynn","Lynx","Lyon","Lyra","Lys","Lysander"
        ],
        "royalnavym":[
            "Macassa","Macduff","Macedonian","Machine","Mackay","Mackerel","Madagascar","Maddiston","Madras","Maeander","Maenad","Maesterland","Magdala","Magdalen","Magic","Magician","Magicienne","Magnanime","Magnet","Magnificent","Magpie","Mahonesa","Mahratta","Maida","Maiden Castle","Maidstone","Majestic","Makassar","Malabar","Malacca","Malaga Merchant","Malaya","Malcolm","Malham","Malice","Mallard","Malling Castle","Mallow","Malmesbury Castle","Maloja","Malplaquet","Malta","Malvern","Mamaduke","Mameluke","Manchester","Mandarin","Mandate","Mandrake","Manela","Manica","Manilla","Manly","Manners","Mansfield","Mantis","Manxman","Maori","Maplin","Marathon","Marazion","Marengo","Margaret","Margate","Margett","Marguerite","Maria de Loreto","Maria Prize","Maria Sancta","Maria Sandwich","Maria Spayne","Maria","Mariana","Marianne","Marie Antoinette","Marigold","Mariner","Marjoram","Marksman","Marlborough","Marlingford","Marlion","Marlow","Marmion","Marne","Maroon","Marquise de Seignelay","Mars","Marshal Ney","Marshal Soult","Marsouin","Marston Moor","Martah & Mary","Martial","Martin Garcia","Martin","Marvel","Mary","Mary & John","Mary Ann","Mary Antrim","Mary Breton","Mary Flyboat","Mary Fortune","Mary Galley","Mary George","Mary Gloria","Mary Grace","Mary Guildford","Mary Hamboro","Mary Hampton","Mary Imperial","Mary James","Mary Norwell","Mary Odierne","Mary of Rouen","Mary Prize","Mary Rose","Mary Thomas","Mary Willoughby","Maryanee","Maryborough","Maryport","Maryton","Mashona","Mason","Mastiff","Matabele","Matane","Matapan","Matchless","Mathias","Matilda","Matthew","Mauritius","Mavourneen","Mawdelyn","Maxton","May Frere","Mayflower","Mayfly","Mayford","Mazurka","Meadowsweet","Mecklenburgh","Meda","Medea","Medee","Mediator","Medina","Mediterranean","Medora","Medusa","Medway","Medway Prize","Meeanne","Megaera","Miermen","Melampe","Melampus","Melbreak","Meleager","Melita","Melpomene","Melton","Melville","Memnon","Menace","Menai","Mendip","Menelaus","Menestheus","Mentor","Meon","Mercure","Mercurius","Mercury","Meredith","Merhonour","Merlin","Mermaid","Merope","Merry Hampton","Mersey","Mersham","Messenger","Messina","Meteor","Meteorite","Meynell","Michael","Mickleham","Middlesbrough","Middleton","Midge","Mignonette","Mignonne","Milan","Milbrook","Mileham","Milfoil","Milford","Milne","Mimi","Mimico","Mimosa","Minas","Minden","Mindful","Minehead","Miner",
            "Minerva","Minerve","Mingan","Minion","Minnikin","Minorca","Minoru","Minos","Minotaur","Minstrel","Minto","Minuet","Minx","Miramichi","Miranda","Mischief","Misoa","Mississauga","Mistletoe","Mistley","Mistral","Mitchell","Moa","Modbury","Moderate","Modeste","Mohawk","Moira","Monaghan","Monarca","Monarch","Mona's Isle","Monck","Monck Prize","Mondara","Mondovi","Mongoose","Monitor","Monkey","Monkshood","Monkton","Monmouth Castle","Monmouth","Monow","Monowai","Mons","Monsieur","Mont Blanc","Montagu","Montbretia","Montego Bay","Montford","Montgomery","Montreal","Montrose","Montserrat","Mooltan","Moon","Moorhen","Moorsom","Moray Firth","Mordaunt","Morecambe Bay","Moresby","Morgiana","Morne Fortunee","Morning Star","Moro","Morpeth Castle","Morris Dance","Morris","Mortar","Mosambique","Moselle","Moslem","Mosquito","Mosquidobit","Moth","Moucheron","Mounsey","Mount Edgcumbe","Mounts Bay","Mourne","Moy","Moyola","Mulette","Mulgrave","Mull","Mull of Galloway","Mull of Kintyre","Mull of Oa","Mullett","Mullion Cove","Mullion","Munlochy","Munster","Muros","Murray","Musette","Musk","Muskerry","Musket","Musketeer","Mosquidobit","Musquito","Mustico","Mutine","Myngs","Myosotis","Myrmidon","Myrtle","Mystic"
        ],
        "royalnavyn":[
            "Naas","Nabob","Nadder","Nadur","Naiad","Nailsea","Nairana","Namur","Nancy","Nankin","Nantwich","Napier","Narbada","Narbrough","Narcissus","Narvik","Narwhal","Naseby","Nassau","Nasturtium","Natal","Nathaniell","Nautilus","Navarino","Navy Board","Navy Transport","Navy","Nazareth","Nearque","Necker","Ned Elvin","Negresse","Negro","Nelson","Nemesis","Nene","Nepal","Nepaulin","Nepean","Nepeta","Neptune","Nerbudda","Nereide","Nereus","Nerissa","Nesbitt","Ness","Nessus","Nestor","Netley","Nettle","Nettlham","New Adventure","New Betsey","New Zealand","Newark","Newash","Newbark","Newbury","Newcastle","Newfoundland","Newhaven","Newmarket","Newport","Newquay","Newton","Neza","Niagara","Nicator","Nicholas Reede","Nicholas","Nicodemus","Niement","Nieuport","Nigella","Niger","Nigeria","Nighthawk","Nightingale","Nijaden","Nilam","Nile","Nimble","Nimrod","Niobe","Nipigon","Nisus","Nith","Nitrocris","Nizam","Noble","Nomad","Nonpareil","Nonsuch","Noranda","Nordland","Norfolk","Norge","Norham Castle","Norman","Norseman","Norsyd","North","North Bay","North Star","Northampton","Northella","Northern Rover","Northesk","Northolt","Northrepps","Northumbria","Northumberland","Northway","Norwich","Norwich Castle","Nottingham","Nottingham Prize","Nova Scotia","Nox","Nubian","Nuestra Senora del Rosario","Nugent","Nunney Castle","Nurton","Nusa","Nyaden","Nyasaland","Nymph","Nymphe","Nymphen"
        ],
        "royalnavyo":[
            "Oak","Oakham Castle","Oakington","Oakley","Obdurate","Obedient","Oberon","Observateur","Observer","Ocean","Oceanic","Oceanway","Ocelot","Ockham","Octavia","Odiham","Odin","Odzani","Offa","Ogre","Oiseau","Okehampton","Old Francis","Old James","Old Lawrence","Old President","Old Roebuck","Old Success","Old Truelove","Old Warwick","Olive Branch","Olympia","Olympus","Omdurman","Onondaga","Onslaught","Onslow","Ontario","Onyx","Opal","Ophelia","Opossum","Opportune","Oracle","Orange","Orange Tree","Orangeville","Orby","Orcadia","Orchis","Oreste","Orestes","Orford","Orford Ness","Orford Prize","Oriana","Oribi","Oriflamme","Orilla","Oriole","Orion","Orissa","Orkan","Orkney","Orlando","Orlionoch","Ormonde","Ornen","Oronoque","Orontes","Oroonoko","Orpheus","Orquijo","Ortenzia","Orwell","Oryx","Osborne","Osiris","Osprey","Ossington","Ossory","Ostend","Ostrich","Oswald","Oswego","Oswestry Castle","Otranto","Otter","Otus","Oudenarde","Oulston","Oundle","Ouragan","Ouse","Overton","Overyssel","Owen","Owen Glendower","Owl","Owners Adventure","Owners Goodwill","Owners Love","Oxford","Oxford Castle","Oxlip"
        ],
        "royalnavyp":[
            "Pacific","Packahunta","Packington","Pactolus","Padstow","Padstow Bay","Pagham","Pakenham","Paladin","Palinurus","Pallas","Palliser","Palm Tree","Palma","Palomares","Paluma","Pandora","Pandour","Pangbourne","Panglima","Pansy","Pantaloon","Panther","Papillon","Papua","Paradox","Paragon","Paramour","Parapet","Paris","Parker","Parkes","Parret","Parrot","Parrsboro","Parry Sound","Parthian","Partridge","Pasley","Pat Barton","Pathan","Pathfinder","Patrician","Patrick","Patriot","Patrol","Patroller","Patton","Paul","Paulina","Pauncey","Paz","PC42","PC43","PC44","PC51","PC55","PC56","PC60","PC61","PC62","PC63","PC65","PC66","PC67","PC68","PC69","PC70","PC71","PC72","PC73","PC74","Peace","Peacock","Peard","Pearl","Pearl Prize","Pearlen","Pedro","Pegase","Pegasus","Peggy","Pegwell Bay","Pelargonium","Pelican","Pelican Prize","Pellew","Pelorus","Pelter","Pembroke","Pembroke Castle","Pembroke Prize","Penang","Pendennis","Pendennis Castle","Penelope","Penetang","Penguin","Penlee Point","Penn","Pennywort","Pentstemon","Penston","Penylan","Penzance","Peony","Pera","Perdrix","Peregrine","Peregrine Galley","Peregrine Prize","Perim","Periwinkle","Perlen","Persephone","Perseus","Perseverance","Persian","Persimmon","Persistent","Pert","Perth","Peruvian","Pesaquid","Pet","Petard","Peter Pomegranate","Peter","Peterborough","Peterel","Peterell","Peterhead","Peterman","Petersfield","Petersham","Petite Victoire","Petrel","Petrolla","Petulant","Petunia","Pevensey Castle","Peyton","Phaeton","Pheasant","Philip","Philip & Mary","Phillimore","Philoctetes","Philomel","Phipps","Phlegethon","Phlox","Phoebe","Phoenix","Phosphorus","Pickle","Picotee","Picton","Pictou","Piemontaise","Piercer","Pigeon","Pigmy","Pigot","Pike","Pilchard","Pilford","Pilot","Pilote","Pimpernel","Pincher","Pineham","Pink","Pinner","Pintail","Pioneer","Piorun","Pique","Pirie","Pirouette","Pitcairn","Pitt","Pittington","Placentia","Planet","Plantagenet","Plassy","Platy Prize","Platypus","Plessisville","Plover","Plucky","Plumper","Plumpton","Pluto","Plym","Plymouth","Plymouth Prize","Plymouth Transport","Pocahontas","Pochard","Podargus","Poictiers","Pointe Claire","Polacca","Polar Circle","Polaris","Polecat","Pollington","Pollux","Polperro","Polruan","Polsham","Polyanthus","Polyphemus","Pomona","Pomone","Pompee","Pondicherry","Pontypool","Poole","Popham","Popinjay","Poppy","Porcupine","Porgey","Porlock","Porlock Bay","Porpoise",
            "Port Antonio","Port Arthur","Port Colborne","Port d'Espagne","Port Hope","Port Mahon","Port Morant","Port Royal","Port Wespagne","Portage","Portchester Castle","Portcullis","Porthleven","Portia","Portisham","Portland","Portland Bill","Portland Prize","Porto","Portreath","Portsmouth","Portsmouth Prize","Portsmouth Shallop","Portway","Poseidon","Post","Postboy","Postillion","Potentilla","Poulette","Poulmic","Pouncer","Poundmaker","Powderham","Powerful","Pozarica","Premier","Prescott","President","Prestatyn","Preston","Prestonian","Prevention","Prevost","Prevoyante","Primrose","Primula","Prince","Prince Albert","Prince Arthur","Prince Augustus Frederick","Prince Charles","Prince Consort","Prince de Neuchatel","Prince Edward","Prince Eugene","Prince Frederick","Prince George","Prince Henry","Prince Leopold","Prince of Orange","Prince of Wales","Prince Regent","Prince Royal","Prince Rupert","Prince William","Princess","Princess Alice","Princess Amelia","Princess Anne","Princess Augusta","Princess Carolina","Princess Caroline","Princess Charlotte","Princess Ena","Princess Irene","Princess Iris","Princess Louisa","Princess Margaret","Princess Maria","Princess Mary","Princess of Orange","Princess Royal","Princess Sophia Frederica","Princessa","Princesse","Prins Albert","Prinses Astrid","Prinses Beatrix","Privet","Prize","Procris","Proctor","Prodigal","Progresso","Prohibition","Project","Prometheus","Prompt Prize","Prompt","Prompte","Proselyte","Proserpine","Prosperity","Prospero","Prosperous","Protea","Protector","Proteus","Prothee","Providence","Providence Prize","Provo","Prowse","Prudent","Prudente","Psyche","Puck","Puckeridge","Puffin","Puissant","Pulham","Pultusk","Puma","Pumba","Puncher","Puncheston","Punjab","Punjabi","Punjaub","Puntoone","Pursuer","Puttenham","Pyl","Pylades","Pyramus","Pyrrhus","Pytchley","Python"
        ],
        "royalnavyq":[
            "Quadra","Quadrant","Quadrille","Quail","Quainton","Quaker","Qualicum","Quality","Quantock","Quebec","Queen","Queen Charlotte","Queen Elizabeth","Queen Emma","Queen Mab","Queen Mary","Queen of Kent","Queenborough","Quentin","Quesnel","Quest","Quiberon","Quickmatch","Quilliam","Quinte","Quittance","Quorn"
        ],
        "royalnavyr":[
            "Raby Castle","Racehorse","Racer","Rachel","Rackham","Racoon","Radiant","Radstock","Raglan","Raider","Rainbow","Raisonnable","Rajah","Rajputana","Raleigh","Rambler","Ramillies","Rampisham","Ramsey","Ranchi","Ranee","Ranelagh","Ranger","Ranpura","Rapid","Rapide","Raposa","Rattle","Rattler","Rattlesnake","Ravager","Raven","Rawalpindi","Rayleigh Castle","Reading","Ready","Reaper","Rebecca","Reclaim","Recovery","Recruit","Red Lion","Redbreast","Redbridge","Redcar","Redgauntlet","Redmill","Redoubt","Redoubtable","Redpole","Reedham","Regent","Regulus","Reindeer","Relentless","Reliance","Renard","Renascent","Rendlesham","Renegade","Renommee","Renonculus","Renown","Republican","Repulse","Research","Reserve","Resistance","Resolue","Resolute","Resolution","Resource","Restoration","Restless","Retalick","Retribution","Retriever","Reunion","Revenge","Révolutionnaire","Reward","Reyna","Reynard","Rhin","Rhododendron","Rhona","Rhyl","Ribble","Richmond","Rifleman","Rigorous","Rinaldo","Ringarooma","Ringdove","Riou","Ripley","Riplingham","Rippon","Rippon's Prize","Rising Castle","Riviera","Rivoli","Rob Roy","Roberts","Robin","Robust","Roc","Rochester","Rochester Prize","Rochfort","Rocket","Rockingham","Rockrose","Rocksand","Rockwood","Rodney","Roebuck","Roedean","Rolla","Rolls Royce","Roman","Romney","Romola","Romula","Romulus","Rook","Rooke","Rorqual","Rosalind","Rosamund","Rosario","Rosaura","Rose","Rosebay","Rosebush","Rosemary","Ross","Rother","Rotherham","Rothesay","Rover","Rowena","Rowley","Roxborough","Roxburgh","Royal Adelaide","Royal Albert","Royal Alfred","Royal Anne","Royal Anne Galley","Royal Arthur","Royal Charles","Royal Charlotte","Royal Eagle","Royal George","Royal James","Royal Katherine","Royal Marine[1]","Royal Oak","Royal Prince","Royal Scotsman","Royal Sovereign","Royal Ulsterman","Royal William","Royalist","Ruby","Ruby Prize","Rugby","Ruler","Rupert","Rupert's Prize","Rushen Castle","Russell","Rutherford","Rye","Ryde"
        ],
        "royalnavys":[
            "Sabine","Sable","Sabre","Sabrina","Sacrett","Safari","Safeguard","Safety","Saga","Sahib","Saint Christopher","Saint Lucia","Saint Patrick","Saint Pierre","Saladin","Salamine","Salamander","Saldanha","Salisbury","Salmon","Saltash","Salveda","Salvia","Salvonia","Samarang","Samphire","Sampson","Samson","San Antonio","San Domingo","San Josef","San Juan","San Miguel","San Nicolas","Sandfly","Sandown","Sandwich","Sanguine","Sans Pareil","Santa Dorothea","Santa Margarita","Santa Maria","Santa Monica","Sapphire","Sapphire's Prize","Sappho","Saracen","Sarawak","Sardine","Sardonyx","Sarkoy","Sarpedon","Sartine","Satellite","Saturn","Satyr","Saumarez","Savage","Saxifrage","Saxlingham","Scarab","Scarborough","Sceptre","Scimitar","Scipio","Scipion","Scorcher","Scorpion","Scotsman","Scotstoun","Scott","Scourge","Scout","Scylla","Scythe","Scythian","Sea Devil","Sea Nymph","Sea Rider","Sea Rover","Sea Scout","Seabear","Seadog","Seafire","Seaflower","Seaford","Seaforth","Seagull","Seahawk","Seahorse","Seal","Sealark","Sealion","Seamew","Searcher","Seawolf","Security","Seine","Selby","Selene","Selkirk","Senator","Senegal","Seneschal","Sennen","Sentinel","Sepoy","Seraph","Serapis","Serene","Seringapatam","Serpent","Sesame","Sesostris","Setter","Seven Sisters","Seven Stars","Sevenoaks","Severn","Seychelles","Seymour","Shah","Shakespeare","Shalford","Shalimar","Shamrock","Shannon","Shark","Sharke","Sharpshooter","Shearwater","Sheerness","Sheffield","Sheldrake","Shelanagig","Shemara","Shepperton","Shikari","Shipham","Shoreham","Shoreham Prize","Shrewsbury","Shrewsbury Castle","Shrivenham","Shropshire","Sibyl","Sickle","Sidlesham","Sidon","Sikh","Silvio","Simbang","Simoom","Simoon","Sir Andrew Mitchell","Sir Edward Hughes","Sir Francis Drake","Sir Galahad","Sir Henry Lawrence","Sir John Moore","Sir Thomas Picton","Sirdar","Siren","Sirene","Sirius","Siskin","Skate","Skilful","Skipjack","Skirmisher","Skylark","Sladen","Slaney","Sleuth","Sligo","Slinger","Slothany","Sluys","Smilax","Smiter","Snaefell","Snake","Snap","Snapdragon","Snapper","Snipe","Snowberry","Snowdrop","Snowflake","Snowshoe","Sobieski","Solebay","Solent","Solitaire","Somali","Somaliland","Somerset","Somme","Sophia","Sophie","Sorceress","Southampton","Southdown","Southern Prince","Southsea Castle","Southwold","Sovereign","Sovereign of the Seas","Spanker","Sparham","Spark","Sparkler","Sparrow","Sparrowhawk","Spartan","Spartiate","Speaker","Speaker's Prize","Spear","Spearfish",
            "Spearhead","Speedwell","Speedwell Prize","Speedy","Spence","Spencer","Spenser","Spey","Sphinx","Sphynx","Spider","Spikenard","Spindrift","Spiraea","Spirit","Spiteful","Spitfire","Splendid","Sportive","Sportsman","Spragee","Sprightly","Springbank","Springbok","Springer","Spur","Spy","Squirrel","St Albans","St Albans Prize","St Andrew","St Anne","St Apollo","St Austell Bay","St Brides Bay","St Christopher","St Christopher's","St David","St Erth","St Fermin","St Fiorenzo","St Florentine","St George","St. Helena","St. Helier","St Jacob","St James","St Jean d'Acre","St John","St John Prize","St Joseph","St. Kitts","St Lawrence","St Lucia","St Mary","St. Mary's","St Michael","St Vincent","St. Zeno","Stag","Stalker","Stalwart","Standard","Stanley","Star","Starr","Starfish","Starling","Start Bay","Starwort","Stately","Statesman","Statice","Staunch","Stayner","Steadfast","Steady","Stedham","Sterlet","Sterling","Stevenstone","Stirling Castle","Stockham","Stoic","Stonecrop","Stonehenge","Stork","Storm","Stormcloud","Stour","Strafford","Stratagem","Strathella","Strenuous","Striker","Stromboli","Strombolo","Strongbow","Stronghold","Stuart","Stubborn","Stubbington","Sturdy","Sturgeon","Stygian","Styx","Subtle","Success","Success Hulk","Suffolk","Sulham","Sulphur","Sultan","Sultana","Sunderland","Sundew","Sunfish","Sunflower","Sun Prize","Superb","Superbe","Superieure","Supply","Supreme","Surf","Surinam","Surly","Surprise","Surprize","Surveillante","Sussex","Sutherland","Sutlej","Suva","Swaggerer","Swale","Swallow","Swallow Prize","Swan","Swann","Sweetbriar","Swift","Swiftsure","Swindon","Swinger","Swordfish","Swordsman","Sybille","Sycamore","Syeren","Sylph","Sylvia","Syren","Syrtis"
        ],
        "royalnavyt":[
            "Tabard","Taciturn","Tactician","Taff","Taiaroa","Tain","Taku","Talavera","Talbot","Talent","Talisman","Tally-Ho","Talybont","Tamar","Tamarisk","Tamworth Castle","Tanatside","Tancred","Tang","Tanganyika","Tantalus","Tantivy","Tapageur","Tapir","Tara","Tarlton","Tarn","Tarpon","Tartan","Tartar","Tartar's Prize","Tartarus","Tasman","Tasmania","Tattoo","Taunton","Tauranga","Taurus","Tavistock","Tavy","Tay","Tay and Tyne","Teazer","Tedworth","Tees","Telegraph","Telemachus","Teme","Temeraire","Tempest","Templar","Temple","Tenacious","Tenacity","Tenby","Tenedos","Teredo","Termagant","Tern","Terpsichore","Terrapin","Terrible","Terror","Test","Tetcott","Tetrarch","Teviot","Teviot Bank","Thais","Thakeham","Thalia","Thames","Thane","Thanet","Thatcham","Theban","The Hinde","Theodocia","Thermopylae","Theseus","Thetis","Thisbe","Thistle","Thor","Thorn","Thornborough","Thornham","Thorough","Thracian","Thrasher","Thrush","Thruster","Thule","Thunder","Thunderbolt","Thunderer","Thyme","Tiara","Tibenham","Tickler","Tiger","Tiger Bay","Tiger Prize","Tiger Snake","Tiger Whelp","Tigre","Tigress","Tigris","Tilbury","Tintagel","Tintagel Castle","Tipperary","Tiptoe","Tirade","Tireless","Titania","Tithonus","Tiverton","Tobago","Tobruk","Token","Tomahawk","Tonbridge","Tonbridge Castle","Tongham","Tonnant","Toowoomba","Topaze","Torbay","Torch","Toreador","Tormentor","Tornado","Toronto","Torquay","Torrent","Torrid","Torride","Torridge","Torrington","Tortoise","Tortola","Totem","Totland","Totnes","Tourmaline","Tourterelle","Toutou","Tower","Towey","Towser","Towy","Towzer","Tracker","Tradewind","Trafalgar","Trailer","Tralee","Transfer","Transit","Transporter","Transylvania","Trave","Traveller","Tredagh","Trelandvean","Trelawney","Tremadoc Bay","Tremendous","Trenchant","Trent","Trepassey","Tresham","Trespasser","Triad","Trial","Tribune","Tricord","Trident","Trillium","Trimmer","Trincomalee","Trinculo","Trinidad","Tristram","Triton","Triumph","Trojan","Trollope","Tromp","Trompeuse","Tronda","Trooper","Trouncer","Troubridge","Truant","Truculent","Truelove","Trump","Trumpeter","Truncheon","Truro","Trustful","Trusty","Tryall","Trydent","Tryphon","Tryton","Tryton Prize","Tudor","Tulip","Tumult","Tuna","Turbulent","Turpin","Turquoise","Tuscan","Tutankhamen","Tweed","Twickenham","Tyger","Tyler","Tyne","Tynedale","Tynwald","Tyrant","Tyrian"
        ],
        "royalnavyu":[
            "Ufton","Uganda","Ulex","Ulleswater","Ulster","Ulster Monarch","Ulster Queen","Ultimatum","Ultor","Ulysses","Umbra","Umpire","Una","Unbeaten","Unbending","Unbridled","Unbroken","Undaunted","Undine","Unicorn","Unicorn Prize","Union","Unique","Unison","Unite","United","Unity","Universal","Unrivalled","Unruffled","Unruly","Unseen","Unshaken","Unsparing","Unswerving","Untamed","Untiring","Upas","Upholder","Uppingham","Upright","Uproar","Upshot","Upstart","Upton","Upward","Urania","Uranie","Urchin","Ure","Urge","Urgent","Ursa","Ursula","Urtica","Usk","Usurper","Uther","Utile","Utmost","Utopia","Utrecht"
        ],
        "royalnavyv":[
            "Vagabond","Valentine","Valeur","Valhalla","Valiant","Valkyrie","Valorous","Vampire","Vancouver","Vandal","Vandyck","Vanessa","Vanguard","Vanity","Vanneau","Vanoc","Vanquisher","Vansittart","Varangian","Variable","Varne","Vascama","Vautour","Vectis","Vega","Vehement","Velox","Vendetta","Venerable","Venetia","Vengeance","Vengeful","Vengeur","Venom","Venomous","Venturer","Venturous","Venus","Verbena","Verdun","Verity","Vernon","Veronica","Versatile","Verulam","Vervain","Vesper","Vesta","Vestal","Vesuve","Vesuvius","Vetch","Veteran","Viceroy","Victor","Victor Emmanuel","Victoria","Victorious","Victory","Vidette","Vienna","Vigilant","Vigilante","Vigo","Viking","Ville de Paris","Vimiera","Vimy","Vincejo","Vindex","Vindictive","Vineyard","Violent","Violet","Viper","Vipere","Virago","Virginia","Virginian","Virginie","Virulent","Viscount","Visenda","Vitality","Vittoria","Vivacious","Vivid","Vivien","Vivo","Vixen","Volador","Volage","Volcano","Voltaire","Volunteer","Vortex","Vortigern","Vox","Voyager","Vulcan","Vulture",
        ],
        "royalnavyw":[
            "Wager","Wagtail","Wahine","Waitemata","Wakeful","Waldegrave","Walker","Walkerton","Wallace","Wallaroo","Wallflower","Walmer Castle","Walney","Walpole","Walrus","Warmingham","Wanderer","Warren Hastings","Warrior","Warspite","Warwick","Wasp","Wasperton","Wassenaar","Watchful","Watchman","Watchmoor","Waterhen","Waterloo","Waterwitch","Wave","Waveney","Wear","Weazel","Weazle","Welcome","Welfare","Welland","Wellesley","Wellington","Welshman","Wem","Wennington","Wensleydale","Weser","Wessex","West Florida","Westcott","Western Isles","Westminster","Wexford","Wexham","Weybourne","Weymouth","Wheatland","Whelp","Whimbrel","Whippingham","Whirlwind","Whitaker","Whitby","Whitehall","Whitehaven","Whitesand Bay","Whiting","Whitley","Whitshed","Whitton","Widemouth Bay","Widgeon","Widnes","Wigtown Bay","Wickieston","Wilberforce","Wild Boar","Wild Goose","Wild Swan","Wildfire","Wilhelmina","William & Mary","Willowherb","Wilton","Winchelsea","Winchester","Windflower","Windsor","Windsor Castle","Wintringham","Wishart","Wistaria","Wiston","Witch","Witherington","Wivenhoe","Wivern","Wizard","Woldingham","Wolf","Wolfe","Wolfhound","Wolsey","Wolverine","Wolverton","Woodbridge Haven","Woodcock","Woodlark","Woodpecker","Woodruff","Woolaston","Woolf","Woolston","Woolvesey Castle","Woolwich","Woolwich Transport","Worcester","Worcester Prize","Worthing","Wotton","Wrangler","Wren","Wrenn","Wrentham","Wrestler","Wryneck","Wulastock","Wyandra","Wye","Wyvern"
        ],
        "royalnavyxyz":[
            "Xenophon",
            "yarmouth","yarnton","yaxham","yealmpton","yeoman","yeovil","york","york castle","young hebe","young hoblin","young king","young lady","young lion","young prince","young shish","young spragge","ypres",
            "zambesi","zanzibar","zealandia","zealand","zealous","zebra","zeebrugge","zenith","zenobia","zephyr","zest","zetland","zingarella","zinnia","zodiac","zubian","zulu","zylpha"
        ],
        "yacht":[
            "A Freight Not",
            "Aboat Time",
            "Anchoragement",
            "Barge Right In",
            "Barging About",
            "Barging In",
            "Better Safe Than Starry",
            "Buoys and Galleys",
            "Call The Dock",
            "Cargo Vroom",
            "Comet Me, Bro",
            "Constellation Prize",
            "Crewed Joke",
            "Docked and Loaded",
            "Drive Envy",
            "Drivin' Me Nuts|Drivin' Me Crazy",
            "Gift Horse",
            "Goin' Broke",
            "Going to Hull",
            "Life's a Gas Giant",
            "Livin' Space",
            "Freight Fest",
            "Fried Beacon",
            "Hangar On",
            "Happy Berth Day",
            "Happy Landings",
            "Harbor No Grudges",
            "Hull in a Handbasket",
            "Hulled Up",
            "I Needed The Space",
            "I Shipped Myself",
            "In Decent Sea",
            "Jump Right In",
            "Jumpin' Jehosaphat",
            "Kids' Inheritance",
            "Launch Break",
            "Love You Moor",
            "Lunar Tick",
            "Moor Often Than Not",
            "No Port of It",
            "Orbituary",
            "Out Of This World",
            "Over The Moon",
            "Passing Wind",
            "Pier Pressure",
            "Quay to My Heart",
            "Retirement Plan",
            "Rocket To Sleep",
            "Schooner or Later",
            "See You In Hull",
            "Ship For Brains",
            "Shipfaced",
            "Shore Thing",
            "Space to Breathe",
            "Stellar Decision",
            "Stellar Life Choice|Stellar Life Choices",
            "Tanks For The Memories",
            "Tanks To You",
            "Thanks A Yacht",
            "Totally Tanked",
            "Tugging Your Heartstrings",
            "Wharf Air",
            "Yeah Buoy"
        ],
        "numeral": [
            "3:1|I",
            "8:2|II",
            "6:3|III",
            "5:4|IV",
            "4:5|V",
            "3:6|VI",
            "2:7|VII",
            "1:8|VIII",
            "1:9|IX",
            "1:10|X",
            "1:11|12|13|XI|XII|XIII",
            "1:14|15|16|17|18|19|20|XIV|XV|XVI|XVII|XVIII|XIX|XX"
        ],
        "color":[
            "3:amber",
            "amethyst",
            "aqua|aquamarine",
            "4:azure",
            "beige",
            "5:black",
            "blonde",
            "5:blue",
            "2:brown",
            "3:bronze",
            "carmine",
            "carnelian",
            "celadon",
            "cerise",
            "3:cerulean",
            "cinereous",
            "citrine",
            "cobalt",
            "3:copper",
            "coquelicot",
            "coral",
            "cordovan",
            "4:crimson",
            "cyan",
            "drab",
            "3:ebony",
            "3:emerald",
            "fulvous",
            "fuschia",
            "gamboge",
            "glaucous",
            "gold",
            "3:gray",
            "4:green",
            "gunmetal",
            "heliotrope",
            "3:indigo",
            "3:ivory",
            "jonquil",
            "lavender",
            "lilac",
            "magenta",
            "3:maroon",
            "mauve",
            "neon",
            "nickel",
            "ochre",
            "olive|olivine",
            "opal",
            "orange",
            "pearl",
            "periwinkle",
            "persimmon",
            "pewter",
            "piebald|pied",
            "pink",
            "puce",
            "3:purple",
            "quicksilver",
            "raspberry",
            "5:red",
            "ruby",
            "rufous",
            "russet",
            "rusty",
            "saffron",
            "sapphire",
            "satin",
            "3:scarlet",
            "sepia",
            "sienna",
            "silver",
            "sinopia",
            "slate",
            "smoky",
            "snowy",
            "steel",
            "tan",
            "taupe",
            "tawny",
            "teal",
            "tourmaline",
            "turquoise",
            "ultramarine",
            "umber",
            "vanilla",
            "vermilion",
            "3:violet",
            "viridian",
            "4:white",
            "3:yellow",
            "zaffre"
        ],
        "noncoloradjective":[
            "adventurous",
            "affluent",
            "amorous",
            "athletic",
            "astute",
            "audacious",
            "auspicious",
            "beautiful",
            "blessed",
            "blissful",
            "blithe",
            "bloody",
            "bold",
            "brave",
            "brawny",
            "brilliant",
            "burly",
            "canny",
            "careful",
            "cautious",
            "cheerful",
            "courageous",
            "daring",
            "dauntless",
            "determined",
            "eager",
            "empyrean",
            "enormous",
            "errant",
            "expedient",
            "expeditious",
            "exultant",
            "faithful",
            "fat",
            "favored",
            "fearless",
            "fearsome",
            "felicitous",
            "fertile",
            "fleet",
            "fortunate",
            "friendly",
            "frugal",
            "fruitful",
            "gallant",
            "gleeful",
            "grateful",
            "gratified",
            "greedy",
            "gruntled",
            "handsome",
            "happy",
            "harmonious",
            "helpful",
            "heroic",
            "hungry",
            "incredible",
            "incredulous",
            "industrious",
            "intrepid",
            "jocular",
            "jolly",
            "jovial",
            "joyful",
            "judicious",
            "lazy",
            "livid",
            "loving",
            "lucky",
            "luminous",
            "merry",
            "muscular",
            "nimble",
            "nubile",
            "patient",
            "peaceful",
            "plucky",
            "powerful",
            "productive",
            "propitious",
            "prosperous",
            "proud",
            "prudent",
            "radiant",
            "rugged",
            "sagacious",
            "sage",
            "sensible",
            "shrewd",
            "sinewy",
            "speedy",
            "spirited",
            "stalwart",
            "stealthy",
            "stout",
            "strapping",
            "strong",
            "sturdy",
            "successful",
            "swift",
            "tasteful",
            "tenacious",
            "thirsty",
            "thrifty",
            "tipsy",
            "tired",
            "titanic",
            "tranquil",
            "triumphant",
            "vagrant",
            "valorous",
            "vicious",
            "vigorous",
            "wary",
            "watchful",
            "wealthy",
            "wise",
            "zealous"
        ],
        "adjective":[
            "15:{ship.color}",
            "3:{ship.bigadjective}",
            "118:{ship.noncoloradjective}"
        ],
        "gerund": [
            "ascending",
            "blazing",
            "blossoming",
            "burning",
            "captivating",
            "conquering",
            "dazzling",
            "flaming",
            "flickering",
            "flourishing",
            "flying",
            "gleaming",
            "gliding",
            "glistening",
            "glittering",
            "grinning",
            "laughing",
            "murmuring",
            "prospering",
            "roaring",
            "roaming",
            "screaming",
            "shining",
            "slumbering",
            "smiling",
            "soaring",
            "sparkling",
            "thriving",
            "wandering",
            "wheeling",
            "whirling",
            "whispering",
            "winning",
            "vanquishing",
            "yawning"
        ],
        "spaceword":[
            "aether",
            "astral",
            "celestial",
            "cosmic",
            "empyrean",
            "galactic",
            "interstellar",
            "meteor",
            "moon",
            "nebula",
            "night",
            "rift",
            "rimward",
            "sky",
            "solar",
            "space",
            "spinward",
            "star",
            "stellar",
            "vacc",
            "void"
        ],
        "fearsomecritter":[
            "achlis",
            "agropelter",
            "axehandle",
            "bonnacon",
            "boofum",
            "digmaul",
            "dungavenhooter",
            "galoot",
            "gillygaloo",
            "goofus",
            "gyascutus",
            "glawackus",
            "gwinter",
            "gumberoo",
            "hidebehind",
            "hodag",
            "hugag",
            "hunkus",
            "jackalope",
            "lodsilungur",
            "prock",
            "snallygaster",
            "splintercat",
            "squonk",
            "teakettler",
            "wampahoofus",
            "wampus",
            "whimpus"
        ],
        "animal":[
            "2:{ship.fearsomecritter}",
            "10:{ship.realcritter}",
            "10:{ship.travcritter}",
            "1:{ship.butterfly}"
        ],
        "travcritter":[
            "arrow slasher",
            "anola",
            "basa",
            "beaker|beaked monkey",
            "blinder",
            "bush runner",
            "carthus",
            //"chamax",
            "chraenta",
            "daka",
            "daghadasi",
            "elyosa",
            "erakruul",
            "floater",
            "gasbag",
            "gazaal",
            "grapplepede",
            "groat",
            "grubber",
            "gruut",
            "ixtlil",
            "lii-rat",
            "kian",
            "nashu",
            "nibbon",
            "nightsleek",
            "nokhopii worm",
            "nushilii",
            "ostu",
            "poisson-fue",
            "remex muta",
            "rock pouncer",
            "ruuta",
            "sea sifter",
            "sea slasher",
            "slasher",
            "snohl",
            "snowcat",
            "square manta",
            "ssazhenta",
            "takai lizard",
            "thakak",
            "thanic chaser",
            "tkighir",
            "tluugir",
            "trapper",
            "tree kraken",
            "tree rat",
            "tumblespider",
            "walston"
        ],
        "butterfly":[
            "abantiades",
            "acuta",
            "aedisima",
            "aegrus",
            "aenetus",
            "aenigmatinea",
            "agathiphaga",
            "aglossata",
            "agrionympha",
            "ahamus",
            "allura",
            "alphus",
            "altenai",
            "alticola",
            "anomoses",
            "aoraia",
            "aphenges",
            "aplatissa",
            "apoplania",
            "armatus",
            "armillata",
            "aspina",
            "astiptica",
            "atrox",
            "aureopterix",
            "aurifex",
            "aurimaculata",
            "aurulenta",
            "aurifer",
            "autumnata",
            "beltista",
            "bimaculata",
            "bipectilus",
            "blanchardina",
            "bordaia|bordaja",
            "broma",
            "brunnea",
            "buettneria",
            "byrsa",
            "calada",
            "capeneri",
            "carna",
            "castillanus",
            "catapterix",
            "charagia|choragia",
            "chisimana",
            "chrysoptera",
            "cibyra",
            "cocama",
            "coronta",
            "cretata",
            "crocatus",
            "cuprifer",
            "dalaca",
            "delicatula",
            "determinata",
            "digitata",
            "dinodes",
            "dioxycanus",
            "ditrysia",
            "druceiella",
            "dulcis",
            "electrocrania",
            "endoclyta",
            "ensyii",
            "epimartyria",
            "eriocrania|eriocranida|eriocranites",
            "eudalaca",
            "eugyna",
            "eurata",
            "eximia",
            "exoporia",
            "falcata",
            "fallax",
            "flavida",
            "forkalus",
            "fumosa",
            "furcata",
            "furva",
            "fusca|fuscalis",
            "fusilella",
            "gelidus",
            "giganteus",
            "glossata",
            "gorgopis|gorcopis",
            "gorina|goryna",
            "gracilis",
            "gracilirami",
            "grisescens",
            "hamadelpha",
            "hamatus",
            "hecticus|hecta",
            "heloxycanus",
            "hepialiscus",
            "hepialus",
            "herbuloti",
            "herdus",
            "hespera|hesperia",
            "hildae",
            "hopponis",
            "incanus",
            "indicata",
            "inornata",
            "insularis",
            "intervallata",
            "intricata",
            "janeus",
            "jeana",
            "karnka",
            "kuranishii",
            "lagopus",
            "latirami",
            "latistria",
            "leto",
            "leucochiton",
            "libania",
            "lobata",
            "lophocorona",
            "lupulina",
            "luteus",
            "macropis",
            "magnus",
            "magua",
            "maquensis",
            "melanora",
            "metellus",
            "michaelis",
            "micropterix",
            "minanus",
            "minos",
            "mirabilis",
            "mnesarchaea|mnesarchella",
            "moesta",
            "montanus",
            "monticola",
            "munona",
            "murinus",
            "napialus",
            "nebulosus",
            "neocrania",
            "neotheora|neotheorida",
            "nevina",
            "niphadias",
            "nodus",
            "novigannus",
            "nubifer",
            "nuptialis",
            "ocellatus",
            "oenetes",
            "ombraloma",
            "oncopera|onchoptera",
            "ogygioses",
            "oreas|oreades",
            "oreobolae",
            "orthocosma",
            "oxycanus",
            "palpifer",
            "palpiphorus|palpiphora",
            "paradoxa",
            "pediasia",
            "pellicia",
            "perditus",
            "perforata",
            "perkeo",
            "perplexus",
            "paracosma",
            "paramartyria",
            "paropus",
            "parva",
            "pelagia",
            "perfuscus",
            "phaelaena",
            "pharmacis",
            "phassodes",
            "phassus",
            "phialuse",
            "pholidota",
            "pica",
            "poeticus",
            "poltrona",
            "porina",
            "prosopus",
            "prytanes",
            "phymatopus",
            "pulcher",
            "pyrenaicus",
            "raapi",
            "regius",
            "remota",
            "rhodaula",
            "rivula",
            "robiginosa",
            "robinsoni",
            "rosaceus",
            "roseala",
            "roseus",
            "rustica",
            "rufescens",
            "rufivena",
            "sabatinca",
            "salasi",
            "salsettensis",
            "salvazi",
            "scripta",
            "serangota",
            "serratus",
            "sibelae",
            "signata",
            "signifer",
            "sirpus",
            "senex",
            "sericatus",
            "sladeni",
            "sordida",
            "squamicornia",
            "sthenopis|stenopis",
            "stigmatica",
            "subrimosa",
            "subvaria",
            "sylvanus",
            "synempora",
            "taranu",
            "tasmantrix",
            "tegulatus",
            "terea",
            "tesselatus",
            "tesselloides",
            "thasus",
            "theora",
            "thermodes",
            "thisbe",
            "thitarodes",
            "thule",
            "tindalei",
            "topeza",
            "trictena",
            "triodia",
            "tripunctata",
            "trojesa",
            "tunetanus",
            "umbrifera",
            "umbrinas",
            "unifascia",
            "unimacula",
            "vansoni",
            "vaporalis",
            "variabilis",
            "venosus",
            "verresi",
            "vibicata",
            "vindex",
            "vitiensis",
            "virescens",
            "viridis",
            "vulcanica",
            "vulgaris",
            "wiseana",
            "xenoctenis",
            "xytrops",
            "yungas",
            "yushuensis",
            "zaliensis",
            "zadoiensis",
            "zelotypia",
            "zenophassus",
            "zischkai"
        ],
        "realcritter":[
            "aardvark",
            "addax",
            "alligator",
            "anaconda",
            "antelope",
            "ant",
            "armadillo",
            "badger",
            "2:bat",
            "bear",
            "2:bee|bumblebee",
            "beetle",
            "2:bird",
            "bison",
            "2:bittern",
            "boa",
            "boar",
            "bug",
            "2:butterfly",
            "2:buzzard",
            "caiman",
            "camel",
            "capybara",
            "2:caracal",
            "cardinal",
            "caribou",
            "cat",
            "centipede",
            "cheetah",
            "chicken",
            "chimpanzee",
            "chinchilla",
            "chipmunk",
            "2:cicada",
            "civet",
            "cobra",
            "copperhead",
            "2:cormorant",
            "2:corncrake",
            "2:corvid",
            "cow",
            "coyote",
            "crab",
            "crayfish",
            "crocodile",
            "2:crow",
            "2:crossbill",
            "2:cuckoo",
            "2:curlew",
            "deer",
            "dingo",
            "dog",
            "dolphin",
            "dormouse",
            "2:dove",
            "2:dragonfly",
            "dromedary",
            "2:duck",
            "earthworm",
            "3:eagle",
            "eel",
            "2:egret",
            "elephant",
            "elk",
            "emu",
            "2:falcon",
            "fennec",
            "2:finch",
            "fish",
            "2:flamingo",
            "2:fowl",
            "2:fly",
            "2:flycatcher",
            "fox",
            "frog",
            "2:frogmouth",
            "gazelle",
            "gecko",
            "gemsbok",
            "gerenuk",
            "gharial",
            "gibbon",
            "giraffe",
            "gnat",
            "gnatcatcher",
            "goat",
            "2:goose",
            "gorilla",
            "2:grackle",
            "2:grasshopper",
            "2:grebe",
            "2:grosbeak",
            "2:gull",
            "hamster",
            "hare",
            "harvestman",
            "3:hawk",
            "hedgehog",
            "2:heron",
            "hippopotamus",
            "hog",
            "2:hoopoe",
            "2:hornbill",
            "2:hornet",
            "horse",
            "hound",
            "2:huntsman",
            "hyena",
            "ibex",
            "2:ibis",
            "impala",
            "iguana",
            "jackal",
            "jaguar",
            "2:jay",
            "jellyfish",
            "kangaroo",
            "2:kestrel",
            "2:kingfisher",
            "kinkajou",
            "2:kite",
            "kitten",
            "koala",
            "2:kookaburra",
            "lemming",
            "lemur",
            "2:leopard",
            "limpkin",
            "lion|lioness",
            "lizard",
            "llama",
            "2:locust",
            "loris",
            "lynx",
            "2:macaw",
            "mamba",
            "manatee",
            "mantis",
            "markhor",
            "marten",
            "2:mayfly",
            "meerkat",
            "millipede",
            "2:mockingbird",
            "monkey",
            "mole",
            "moose",
            "2:moth",
            "mouse",
            "newt",
            "ocelot",
            "okapi",
            "opossum",
            "orangutan",
            "orca",
            "oryx",
            "2:osprey",
            "ostrich",
            "otter",
            "2:owl",
            "ox",
            "panda",
            "panther",
            "2:parrot",
            "2:partridge",
            "2:peacock|peahen|peafowl",
            "peccary",
            "2:pelican",
            "penguin",
            "2:petrel",
            "2:pheasant",
            "piranha",
            "polecat",
            "porcupine",
            "porpoise",
            "pig",
            "platypus",
            "2:plover",
            "2:puffin",
            "puma",
            "rabbit",
            "racoon",
            "rat",
            "ratel",
            "rattlesnake",
            "2:raven",
            "ray",
            "rhinoceros",
            "seahorse",
            "seal",
            "serpent",
            "serval",
            "shark",
            "2:shearwater",
            "sheep|ram|ewe",
            "shrew",
            "2:shrike",
            "2:skylark",
            "sloth",
            "snake",
            "spider",
            "squirrel",
            "2:stork",
            "2:swallow",
            "2:swift",
            "2:swiftlet",
            "tapir",
            "tarantula",
            "2:tern",
            "2:thrush",
            "tiger|tigress",
            "toad",
            "tortoise",
            "2:toucan",
            "trout",
            "tuatara",
            "turkey",
            "turtle",
            "vole",
            "2:vulture",
            "wallaby",
            "2:warbler",
            "2:wasp",
            "weasel",
            "weevil",
            "whale",
            "2:whimbrel",
            "wildebeest",
            "2:willet",
            "wolf",
            "wolverine",
            "wombat",
            "worm",
            "2:wryneck",
            "yak",
            "zebra"
        ],
        "bigadjective":[
            "astounding",
            "boundless",
            "brilliant",
            "ceaseless",
            "colossal",
            "continuous",
            "cosmic",
            "endless",
            "enormous",
            "epic",
            "eternal",
            "faithful",
            "fantastic",
            "expeditious",
            "extraordinary",
            "galactic",
            "glorious",
            "grand",
            "heroic",
            "humble",
            "independent",
            "inexorable",
            "incredible",
            "infinite",
            "limitless",
            "luminous",
            "magnificent",
            "meritorious",
            "mighty",
            "monumental",
            "perfect",
            "relentless",
            "reliable",
            "resplendent",
            "sacred",
            "stupendous",
            "supreme",
            "tenacious",
            "thrilling",
            "tireless",
            "titanic",
            "tremendous",
            "trustworthy",
            "unending",
            "undying",
            "unstoppable",
            "vast",
            "vivid",
            "wondrous",
            "zealous"
        ],
        "bigidea":[
            "accord",
            "advancement",
            "adventure",
            "ambition",
            "beauty",
            "benevolence",
            "bounty",
            "challenge",
            "concord|concordance|concordat",
            "crusade",
            "dedication",
            "determination",
            "devotion",
            "diligence",
            "discovery",
            "endeavor",
            "endurance",
            "enterprise",
            "exodus",
            "expedition",
            "frenzy",
            "fury",
            "glory",
            "grandeur",
            "harmony",
            "honor",
            "independence",
            "industry",
            "innovation",
            "justice",
            "knowledge",
            "labor",
            "majesty",
            "marvel",
            "perfection",
            "perseverance",
            "persistence",
            "phenomenon",
            "purpose",
            "pursuit",
            "quest",
            "reform",
            "refulgence",
            "resolve",
            "rigor",
            "song",
            "splendor",
            "struggle",
            "supremacy",
            "symphony",
            "treasure",
            "tribute",
            "revelation",
            "vengeance",
            "venture",
            "victory",
            "voyage",
            "wisdom"
        ],
        "person":[
            "adventurer",
            "broker",
            "crusader",
            "drifter",
            "explorer",
            "harbinger",
            "hauler",
            "hunter|huntress",
            "investigator",
            "listener",
            "marketeer",
            "merchant",
            "merchantman",
            "observer",
            "operator",
            "patron",
            "pioneer",
            "prospector",
            "protector",
            "rider",
            "savant",
            "scout",
            "scryer",
            "seeker",
            "speculator",
            "surveyor",
            "trader",
            "troubleshooter",
            "venturer",
            "voyager",
            "wanderer",
            "warden|wadress",
            "watcher"
        ],
        "stellarnoun":[
            "cloud",
            "meteor",
            "moon",
            "star",
            "comet"
        ],
        "memorial":[
            "burden",
            "charge",
            "commission",
            "covenant",
            "desire",
            "dream",
            "duty",
            "end",
            "endeavor",
            "enterprise",
            "fantasy",
            "folly",
            "gambit",
            "gamble",
            "hope",
            "legacy",
            "luck",
            "memory",
            "memorial",
            "miracle",
            "mission",
            "oath",
            "pledge",
            "project",
            "promise",
            "ransom",
            "reach",
            "undertaking",
            "vow",
            "wish"
        ],
        "transport":[
            "barge",
            "bark|barque",
            "boat",
            "brig|brigantine",
            "bus",
            "caravel",
            "carrier",
            "clipper",
            "cruiser",
            "cutter",
            "flash",
            "freighter",
            "hauler",
            "jumper",
            "ketch",
            "liner",
            "packet",
            "racer",
            "ride",
            "rig",
            "runner",
            "schooner",
            "ship",
            "skiff",
            "skipper",
            "sloop",
            "trader",
            "transport",
            "wagon",
            "yacht",
            "yawl"
        ],
        "vicevirtue":[
            "{ship.vice}",
            "2:{ship.virtue}"
        ],
        "vice":[
            "anger",
            "apathy",
            "bias",
            "envy",
            "fallacy",
            "fear",
            "fury",
            "greed",
            "gluttony",
            "hate",
            "hunger",
            "indolence",
            "indulgence",
            "jealousy",
            "lust",
            "pain",
            "pleasure",
            "prejudice",
            "pride",
            "rage",
            "shame",
            "temper",
            "vanity",
            "wrath"
        ],
        "virtue":[
            "ambition",
            "beauty",
            "charity",
            "chastity",
            "compassion",
            "confidence",
            "courage",
            "diligence",
            "fairness",
            "faith",
            "fortitude",
            "goodness",
            "grace",
            "honor",
            "humility",
            "independence",
            "industry",
            "insight",
            "liberty",
            "joy",
            "justice",
            "kindness",
            "knowledge",
            "love",
            "magnificence",
            "magnanimity",
            "moderation|sobriety",
            "modesty",
            "objectivity",
            "patience",
            "perseverance",
            "prudence",
            "reliability",
            "righteousness",
            "safety",
            "strength",
            "temperance",
            "truth|truthfulness",
            "vigor",
            "virtue",
            "vitality",
            "wisdom",
            "wit|wittiness"
        ],
        "natureadjective":[
            "{ship.color}",
            "blazing",
            "brilliant",
            "burning",
            "cold",
            "dazzling",
            "flaming",
            "flickering",
            "foggy",
            "frosty",
            "frozen",
            "gleaming",
            "glistening",
            "glittering",
            "golden",
            "hoary",
            "icy",
            "lambent",
            "luminous",
            "murmuring",
            "nascent",
            "nuturing",
            "radiant",
            "shining",
            "silent",
            "silver|silvery",
            "sparkling",
            "sweet",
            "vivid",
            "warm",
            "whispering",
            "wild"
        ],
        "nature":[
            "aurora",
            "breeze",
            "dawn",
            "diamond",
            "ember",
            "finity",
            "fire",
            "frost",
            "glow",
            "ignition",
            "infinity",
            "lantern",
            "light",
            "morning",
            "wind",
            "reception",
            "spark",
            "storm",
            "streak"
        ],
        "noun":[
            "{ship.person}",
            "{ship.stellarnoun}",
            "{ship.transport}",
            "2:{ship.memorial}",
            "2:{ship.vicevirtue}",
            "{ship.nature}",
            "2:{ship.bigidea}",
            "{ship.animal}"
        ],
        "combo":[
            "{ship.combo1}{ship.combo2}"
        ],
        "combo1":[
            "belt",
            "cloud",
            "credit",
            "day",
            "dust",
            "drought",
            "feast",
            "fire",
            "flood",
            "fun",
            "gold",
            "horizon",
            "iron",
            "lady|man",
            "lane",
            "light",
            "love",
            "king|queen",
            "moon",
            "night",
            "pain",
            "party",
            "peace",
            "rock",
            "sea",
            "sky",
            "star",
            "sun",
            "thrill",
            "tide",
            "void",
            "wealth"
        ],
        "combo2":[
            "bringer",
            "burner",
            "chaser",
            "crawler",
            "crosser",
            "digger",
            "eater",
            "ender",
            "farer",
            "finder",
            "hopper",
            "harvester",
            "hunter",
            "jumper",
            "keeper",
            "killer",
            "maker",
            "racer",
            "runner",
            "screamer",
            "seeker",
            "skipper",
            "slayer",
            "starter",
            "stopper"
        ]
    },
    "system": {
        "patterns": [
            "180:{word}",
            "54:{system.latinized}",
            "5:{system.latinized} {system.greekletter}|{system.greekletter} {system.latinized}|{system.latinized} {system.numeraldesignation}|{system.latinized} {system.relativeimportance}|{system.relativeimportanceprefix} {system.latinized}", 
            "7:{word} {system.numeraldesignation}",
            "10:{word} {word}",
            "7:{word} {system.greekletter}|{word} {system.greekletter}|{system.greekletter} {word}",
            "10:{word} {system.relativeimportance}|{word} {system.relativeimportance}|{system.relativeimportanceprefix} {word}",
            "22:{word}'s {system.noun}",
            "4:{system.mythologicalname}",
            "4:{ship.navalname}",
            "14:{system.systemwithoutinventedwords}",
            "5:{system.pastoral}",
            "16:{system.propernounprefix} {word}",
            "1:{system.propernounprefix} {word}'s",
            "9:{system.noun} of {word}",
            "8:The {system.celestialbody} of {word}|{word}'s {system.celestialbody}",
            "8:{system.settlement|system.noun|system.bodypart|system.landmark|system.mythologicalfigure|system.feeling} of {word}|{word}'s {system.settlement|system.noun|system.feeling|system.bodypart|system.landmark}",
            "5:{word}'s {system.celestialbody|system.settlement|system.noun|system.feeling|system.bodypart|system.landmark}",
            "5:{word} {system.settlement}",
            "3:{human.firstname|human.lastname}'s {system.noun}",
            "3:{human.firstname|human.lastname}'s {system.celestialbody|system.settlement|system.noun|system.feeling|system.bodypart|system.landmark|system.mythologicalfigure}|{system.celestialbody|system.settlement|system.noun|system.feeling|system.bodypart|system.landmark|system.mythologicalfigure} of {human.firstname}",
            "1:{word|word|human.firstname|human.lastname}'s {system.adjective} {system.noun}|The {system.adjective} {system.noun} of {word|word|human.firstname|human.lastname}|{word|word|human.firstname|human.lastname}'s {system.noun} of {system.feeling|system.material}",
            "2:{system.adjective} {word|word|system.latinized}",
            "1:{system.noun} of {word} the {system.mythologicalfigure}|The {system.celestialbody} of {word} the {system.mythologicalfigure}|{system.settlement|system.noun|system.bodypart|system.landmark|system.feeling} of {word} the {system.mythologicalfigure}",
            //"1:{system.noun} of {system.mythologicalfigure} {word}|{system.mythologicalfigure} {word}'s {system.noun}|{system.celestialbody} of {system.mythologicalfigure} {word}|{system.mythologicalfigure} {word}'s {system.celestialbody}|{system.mythologicalfigure} {word}'s {system.settlement|system.noun|system.bodypart|system.landmark|system.feeling}|{system.settlement|system.noun|system.bodypart|system.landmark|system.feeling} of {system.mythologicalfigure} {word}",
            "1:{aslan}"
        ],
        "systemwithoutinventedwords":[
            // nouns
            "50:{system.noun} of {system.feeling|system.material}",
            "30:The {system.mythologicalfigure}'s {system.noun}|{system.mythologicalfigure}'s {system.noun}",
            "15:{system.noun} of the {system.mythologicalfigure}",
            "2:{system.mythologicalfigure}'s {system.adjective} {system.noun}|The {system.mythologicalfigure}'s {system.adjective} {system.noun}",
            "2:{system.noun|system.noun|system.noun|system.celestialbody|system.celestialbody|system.settlement|system.landmark} of the {system.adjective} {system.mythologicalfigure}",
            "2:The {system.mythologicalfigure}'s {system.noun} of {system.feeling}|{system.mythologicalfigure}'s {system.noun} of {system.feeling}",

            // adjectives
            "4:{system.adjective} {system.landmark|system.settlement|system.noun|system.noun}",
            "4:{ship.bigadjective} {ship.bigidea}",
            "1:The {system.adjective} {system.landmark|system.settlement|system.material|system.noun|system.noun|system.celestialbody}|{system.landmark|system.settlement|system.celestialbody} of the {system.adjective} {system.noun}",
            "1:{system.adjective}{system.landmark|system.settlement|system.material|system.noun}",

            // settlements
            "4:{system.settlement} of {system.feeling|system.material}",
            "4:{system.feeling|system.material|system.adjective} {system.settlement}|{system.feeling|system.material|system.adjective}{system.settlement}",
            "3:{system.propernounprefix} {system.feeling|system.feeling|system.landmark}",
            "2:{system.propernounprefix} {system.adjective}{system.landmark}",
            "4:The {system.mythologicalfigure}'s {system.settlement}|{system.mythologicalfigure}'s {system.settlement}",
            "4:{system.settlement} of the {system.mythologicalfigure}",
            "1:{system.landmark}{system.settlement}|{system.landmark} {system.settlement}",
            "1:{system.technology}{system.settlement}|{system.technology} {system.settlement}",

            // celestial bodies
            "3:The {system.celestialbody} of {system.feeling|system.material}",
            "3:{system.feeling|system.material|system.adjective} {system.celestialbody}",
            "1:{system.feeling|system.material|system.adjective}{system.celestialbody}",
            "6:{system.celestialbody}{system.noun}",
            "3:The {system.mythologicalfigure}'s {system.celestialbody}|{system.mythologicalfigure}'s {system.celestialbody}",
            "3:The {system.celestialbody} of the {system.mythologicalfigure}",

            // landmarks
            "3:{system.landmark} of {system.feeling|system.material}",
            "3:{system.feeling|system.material|system.adjective|system.technology} {system.landmark}",
            "1:{system.feeling|system.material|system.adjective|system.technology}{system.landmark}",
            "3:The {system.mythologicalfigure}'s {system.landmark}|{system.mythologicalfigure}'s {system.landmark}",
            "3:{system.landmark} of the {system.mythologicalfigure}",

            // body parts
            "4:{system.bodypart} of {system.feeling|system.material}",
            "2:{system.material|system.adjective} {system.bodypart}",
            "2:{system.feeling|system.material|system.adjective}{system.celestialbody}",
            "4:The {system.mythologicalfigure}'s {system.bodypart}|{system.mythologicalfigure}'s {system.bodypart}",
            "4:{system.bodypart} of the {system.mythologicalfigure}",
            "1:The {system.mythologicalfigure}'s {system.adjective} {system.bodypart}|{system.mythologicalfigure}'s {system.adjective} {system.bodypart}",

            // mythological figures
            "4:{system.mythologicalfigure} of {system.feeling|system.material}",
            "2:{system.adjective} {system.mythologicalfigure}|The {system.adjective} {system.mythologicalfigure}",
            //"1:{system.mythologicalfigure} {system.numeraldesignation}|{system.mythologicalfigure} {system.relativeimportance}|{system.relativeimportanceprefix} {system.mythologicalfigure}",
            
            // Mononames
            "12:{system.noun}|{system.settlement}|{system.feeling}|{system.material}|{system.mythologicalfigure}|{system.landmark}|{system.bodypart}",
            "5:The {system.noun|system.settlement|system.mythologicalfigure|system.landmark|system.bodypart}", 
            "15:{system.mythologicalname}",
            "30:{system.mythologicalname}'s {ship.vicevirtue|system.noun|ship.memorial}|{ship.vicevirtue|system.noun|ship.memorial} of {system.mythologicalname}",
            "9:{ship.navalname|system.feeling|ship.vicevirtue}",
            "3:{system.propernounprefix} {system.mythologicalname|ship.navalname|human.lastname|system.feeling}",
            "5:{human.popularuslastname}",
            "3:{human.popularuslastname|system.realplace|system.historicalname}",
            "1:{ship.butterfly}",
            "175:{system.pastoral}", 
            "1:{system.technology}{system.pastoral2}",
            "3:{system.mythplace}|{system.propernounprefix|system.relativeimportanceprefix} {system.mythplace}|{system.mythplace} {system.relativeimportance}"
        ],
        "latinized":[
            "8:{word.1sylword}ia",
            "8:{word.1sylword}ius|{word.1sylword}ios",
            "8:{word.1sylword}us|{word.1sylword}os",
            "6:{word.1sylword}ian",
            "4:{word.1sylword}is",
            "4:{word.1sylword}ion|{word.1sylword}on",
            "4:{word.1sylword}onia",
            "2:{word.1sylword}onius",
            "2:{word.1sylword}io",
            "2:{word.1sylword}ium|{word.1sylword}eum",
            "2:{word.1sylword}usia|{word.1sylword}osia",
            "2:{word.1sylword}usian|{word.1sylword}usion|{word.1sylword}usium|{word.1sylword}usius",
            "3:{word.2sylword}ia",
            "3:{word.2sylword}ius|{word.2sylword}ios",
            "3:{word.2sylword}us|{word.2sylword}os",
            "2:{word.2sylword}ian",
            "1:{word.2sylword}is",
            "1:{word.2sylword}ion|{word.2sylword}on",
            "1:{word.2sylword}onia",
            "1:{word.2sylword}onius|{word.2sylword}io|{word.2sylword}ium|{word.2sylword}eum",
            "1:{word.2sylword}usia|{word.2sylword}osia|{word.2sylword}usian|{word.2sylword}usion|{word.2sylword}usium|{word.2sylword}usius"
        ],
        "relativeimportanceprefix": [
            "grand|minor",
            "high|lower",
            "3:greater|great",
            "3:lesser",
            "1:primary|secondary",
            "big|little",
            "maximus|minimus",
            "new"
        ],
        "relativeimportance": [
            "3:major",
            "3:minor",
            "2:prime",
            "primus",
            "secundus",
            "tertius",
            "2:superior",
            "2:inferior",
            "supreme|minor",
            "maximus",
            "minimus",
            "nova"
        ],
        "mythologicalfigure": [
            "4:abomination",
            "3:admiral|captain|commodore|pilot",
            "2:alchemist",
            "4:angel",
            "1:apostate",
            "3:arachnid",
            "3:archer",
            "2:banshee",
            "2:barbarian",
            "1:baron|baroness",
            "2:basilisk",
            "4:behemoth",
            "4:bear",
            "5:beast",
            "2:beggar",
            "3:belter",
            "2:blackguard",
            "2:bugbear",
            "3:centaur",
            "1:centipede",
            "1:charlatan",
            "1:child",
            "3:chimera",
            "3:colossus",
            "1:count|countess",
            "2:cyclops",
            "1:dastard|poltroon|recreant",
            "2:deity",
            "4:demon",
            "4:devil",
            "2:djinn|jinn|genie",
            "5:dragon",
            "2:drake",
            "1:dreamer",
            "1:druid",
            "2:dryad",
            "1:duke|duchess",
            "4:eagle|falcon|peregrine|kestrel",
            "2:elemental",
            "3:emperor|empress",
            "2:fairy",
            "2:faun",
            "3:fiend",
            "1:fish",
            "3:fox|coyote",
            "1:ghost",
            "1:ghoul",
            "3:giant",
            "2:gnome",
            "2:goblin",
            "2:god",
            "2:golem",
            "2:gorgon",
            "3:griffin",
            "2:guardian",
            "2:hag",
            "2:harpy",
            "1:hart",
            "3:hellhound",
            "2:hero",
            "2:horse",
            "4:hound",
            "2:hulder",
            "1:hunter",
            "3:hydra",
            "2:kelpie|selkie",
            "2:king|queen",
            "2:knight",
            "4:kraken",
            "1:lamia",
            "2:leopard|panther",
            "1:leprechaun",
            "5:leviathan",
            "3:lindworm",
            "3:lion",
            "2:lover",
            "2:magician",
            "3:mammoth",
            "1:mandrake",
            "1:mantis",
            "2:manticore",
            "2:mariner",
            "2:medusa",
            "2:mercenary",
            "3:merchant",
            "2:mermaid",
            "1:merman|merfolk",
            "2:minotaur",
            "5:monster",
            "3:monstrosity",
            "2:murderer|murderess",
            "2:naga",
            "1:navigator|navigatrix",
            "2:noble",
            "2:nomad",
            "2:nymph|undine",
            "3:ogre",
            "2:pathfinder",
            "1:peasant",
            "3:pegasus",
            "3:phoenix",
            "2:pilgrim",
            "5:pirate",
            "2:pixie|sprite",
            "3:precursor|progenitor",
            "1:priest|priestess",
            "3:prophet",
            "1:psychopomp",
            "5:reaper",
            "2:reptile|lizard",
            "2:roc",
            "2:rogue",
            "4:salamander",
            "1:saint",
            "2:satyr",
            "2:savior",
            "2:scoundrel",
            "1:scout",
            "1:scryer",
            "1:sculptor",
            "3:serpent",
            "2:shark",
            "3:siren",
            "2:snake|adder|asp|cobra|viper",
            "1:soldier",
            "2:sorceror|sorceress",
            "3:sphinx",
            "2:spider",
            "3:spirit",
            "1:squid",
            "1:stag",
            "2:sylph|sylphid",
            "2:tiger",
            "4:titan",
            "2:toad|tortoise",
            "2:traitor|defector|betrayer|turncoat|backstabber",
            "2:traveller",
            "2:troll",
            "3:tyrant",
            "3:unicorn",
            "2:vagabond",
            "2:vagrant",
            "2:valkyrie",
            "3:vampire",
            "1:veteran",
            "2:vulture",
            "2:wanderer",
            "2:warlock",
            "2:warlord",
            "2:warrior",
            "2:wayfinder",
            "2:werewolf",
            "1:whale",
            "1:wight",
            "2:witch",
            "2:wizard",
            "3:wolf",
            "4:worm",
            "2:wyvern",
            "2:yeti"
        ],
        "historicalname":[
            "Agrippa",
            "Albertus",
            "Ammonius",
            "Antipater",
            "Antisthenes",
            "Aristotle",
            "Atticus",
            "Averroes",
            "Avicenna",
            "Augustus",
            "Aurelius",
            "Bruno",
            "Brutus",
            "Cardano",
            "Cato",
            "Caesar",
            "Charnock",
            "Cicero",
            "Cleanthes",
            "Confucius",
            "Copernicus",
            "Cornelius",
            "Cornutus",
            "Chrysippus",
            "Diodotus",
            "Diogenes",
            "Engel",
            "Enoch",
            "Empedocles",
            "Epicurus",
            "Epictetus",
            "Eusebius",
            "Fabius",
            "Faust|Faustus",
            "Flamel",
            "Ficino",
            "Hadot",
            "Harkness",
            "Hartlieb",
            "Heraclitus",
            "Herodotus",
            "Homer",
            "Honorius",
            "Horace",
            "Hypatia",
            "Iamblichus",
            "Kant",
            "Kepler",
            "Khunrath",
            "Kratippos",
            "Lazarus",
            "Lazzarelli",
            "Lucan",
            "Lucian",
            "Marlowe",
            "Midas",
            "Mirandola",
            "Montesquieu",
            "Musonius",
            "Napoleon",
            "Nostradamus",
            "Olympiodorus",
            "Origen",
            "Panaetius",
            "Parmenides",
            "Paracelsus",
            "Petrarch",
            "Philo",
            "Pico",
            "Plato",
            "Plotinus",
            "Plutarch",
            "Porphyry",
            "Porta",
            "Posidonius",
            "Proclus",
            "Ptolemy",
            "Pythagoras",
            "Rosenkreuz",
            "Reuchlin",
            "Seneca",
            "Shakespeare",
            "Shackelford",
            "Simplicius",
            "Spinoza",
            "Socrates",
            "Solomon",
            "Sopater",
            "Sulla",
            "Terentia",
            "Trithemius",
            "Tullia",
            "Turiel",
            "Valentine",
            "Virgil",
            "Voltaire",
            "Weyer",
            "Zeno",
            "Zoroaster",
            "Zosimos"
        ],
        "mythologicalname":[
            "{system.historicalname}",
            "Abramelin",
            "Acheron",
            "Achilles",
            "Achlys",
            "Adrasteia",
            "Aeolus",
            "Aequitas",
            "Aerecura",
            "Aeternitas",
            "Aether",
            "Agaliarept",
            "Aion",
            "Ajax",
            "Alectrona",
            "Alerion",
            "Alernus|Elernus|Helernus",
            "Alpheus",
            "Amenhotep",
            "Ammit",
            "Amphisbaena|Amphivena",
            "Amun",
            "Amunet",
            "Ananke",
            "Anat",
            "Andromeda",
            "Antevorta",
            "Anubis",
            "Anuket",
            "Apep",
            "Apis",
            "Aphrodite",
            "Apollo",
            "Aquilo",
            "Ares",
            "Arethusa",
            "Argonaut",
            "Argus",
            "Arachne",
            "Ariadne",
            "Arisataeus",
            "Arke",
            "Artemis",
            "Asphodelus",
            "Astaroth",
            "Asteria",
            "Astraeus|Astraeos",
            "Athena",
            "Atlas",
            "Atropos",
            "Attis",
            "Aura",
            "Aurora",
            "Auster",
            "Averruncus",
            "Baal",
            "Bacchante",
            "Bacchus",
            "Bastet",
            "Beelzebub",
            "Bellerophon",
            "Bellona",
            "Bennu",
            "Boreas",
            "Bubona",
            "Cacus",
            "Caelus",
            "Caladrius",
            "Carmentis",
            "Carna",
            "Castor",
            "Catoblepas",
            "Caurus|Corus",
            "Cerastes",
            "Ceres",
            "Chaos",
            "Charon",
            "Charybdis",
            "Chloris",
            "Chronos",
            "Clementia",
            "Cleopatra",
            "Coeus",
            "Comus",
            "Concordia",
            "Consus",
            "Corymbus",
            "Crius",
            "Cronus",
            "Cybele",
            "Damia",
            "Damysus",
            "Danae",
            "Decima",
            "Deimos",
            "Demeter",
            "Devera",
            "Diana",
            "Dido",
            "Diomede",
            "Dione",
            "Dionysus",
            "Dipsa",
            "Dolos",
            "Dynamene",
            "Dyonysus",
            "Echeneis",
            "Egeria",
            "Eirene",
            "Eleos",
            "Elpis",
            "Empanda",
            "Enceladus",
            "Enchiridion",
            "Endymion",
            "Eos",
            "Eosphorus",
            "Epimetheus",
            "Epiphron",
            "Epona",
            "Erebos|Erebus",
            "Eris",
            "Eridanos",
            "Eros",
            "Ersa",
            "Eucleia",
            "Eulabeia",
            "Eunomia",
            "Eurus",
            "Euryalus",
            "Euthenia",
            "Favionus",
            "Februus",
            "Felicitas",
            "Feronia",
            "Fontus",
            "Fornax",
            "Fortuna",
            "Fulgora",
            "Gaia",
            "Galatea",
            "Galdrabók",
            "Galene",
            "Gelos",
            "Hades",
            "Hardedef",
            "Harmachis",
            "Harmonia",
            "Hathor",
            "Heimarmene",
            "Helios",
            "Hemera",
            "Hephaestus",
            "Hera",
            "Herakles|Hercules",
            "Hercinia",
            "Hermes",
            "Hermione",
            "Hesperus",
            "Hestia",
            "Himeros",
            "Honos",
            "Hora",
            "Horkos",
            "Horus",
            "Hyperion",
            "Hypnos",
            "Iapetus",
            "Ichneumon",
            "Imhotep",
            "Inuus",
            "Invidia",
            "Iris",
            "Ishtar",
            "Isis",
            "Iuppiter",
            "Jaculus",
            "Janus",
            "Jove|Jovis",
            "Juno",
            "Justitia",
            "Juturna",
            "Juventas",
            "Kakia",
            "Keres",
            "Kokytos",
            "Kratos",
            "Krotos",
            "Kybalion",
            "Lares",
            "Larunda",
            "Latona",
            "Laverna",
            "Leander",
            "Lelantos",
            "Lethe",
            "Leto",
            "Leucrota|Crocotta",
            "Liber|Libera",
            "Lotis",
            "Lucifer",
            "Lucina",
            "Lympha",
            "Lyssa",
            "Maat",
            "Macaria",
            "Mafdet",
            "Mania",
            "Mantus",
            "Martineta",
            "Meditrina",
            "Medusa",
            "Mellonia",
            "Memnon",
            "Menhit",
            "Menoetius",
            "Mephitis",
            "Mercurius",
            "Methe",
            "Metis",
            "Minerva",
            "Mithras",
            "Mnemosyne",
            "Momus",
            "Moneta",
            "Mors|Morta",
            "Muscaliet",
            "Naiad",
            "Nebiros",
            "Nefertem",
            "Nemesis",
            "Nephele",
            "Neptunus",
            "Nerio",
            "Nesoi",
            "Neverita",
            "Nike",
            "Nomos",
            "Nona",
            "Nortia",
            "Notus",
            "Nox",
            "Nyx",
            "Oceanus",
            "Opis",
            "Orcus",
            "Orion",
            "Orpheus",
            "Osiris",
            "Ourea",
            "Ouroboros",
            "Palatua",
            "Pallas",
            "Pandia",
            "Parandrus",
            "Pax",
            "Pegasus",
            "Peitho",
            "Penelope",
            "Penthus",
            "Pepromene",
            "Peridexion",
            "Persephone",
            "Perses",
            "Perseus",
            "Phaenon",
            "Phaethon",
            "Phanes",
            "Philotes",
            "Phobos",
            "Phoebe",
            "Phorcys",
            "Phlegethon",
            "Picatrix",
            "Picumnus|Pilumnus",
            "Pistis",
            "Polemos",
            "Pomona",
            "Ponos",
            "Pontus",
            "Poros",
            "Porphyrion",
            "Portunus",
            "Poseidon",
            "Pothos",
            "Priapus",
            "Prometheus",
            "Proserpina",
            "Proteus",
            "Providentia",
            "Pta",
            "Ptah-hotep",
            "Pudicitia",
            "Pyroeis",
            "Quirinus",
            "Reshep",
            "Robigo|Robigus",
            "Rhea",
            "Rumina",
            "Sabazios",
            "Salacia",
            "Salus",
            "Sancus",
            "Sangarius",
            "Satanachia",
            "Scamander",
            "Scintharus",
            "Scitalis",
            "Scylla",
            "Securitas",
            "Selene",
            "Serapis",
            "Serket",
            "Seshat",
            "Shai",
            "Shesmetet",
            "Silenus",
            "Silvanus",
            "Sirius",
            "Skeiron",
            "Sobek",
            "Somnus",
            "Sophrosyne",
            "Sors|Spes",
            "Sospita",
            "Soter",
            "Stilbon",
            "Styx",
            "Suadela",
            "Summanus",
            "Talasius",
            "Talos",
            "Tartarus",
            "Tatenen",
            "Taweret",
            "Telete",
            "Tellus|Tellurus",
            "Terminus",
            "Tethys",
            "Thalassa",
            "Thanatos",
            "Thaumas",
            "Theia",
            "Themis",
            "Theseus",
            "Thetis",
            "Thoas",
            "Thoth",
            "Thrasos",
            "Tinia",
            "Tranquilitas",
            "Triteia",
            "Triton",
            "Tyche",
            "Typhon",
            "Vacuna",
            "Vediovis|Vedius|Vejovis|Vejove",
            "Venelia",
            "Veritas",
            "Vertumnus",
            "Vesta",
            "Victoria",
            "Virbius",
            "Volturnus",
            "Voluptas",
            "Vortumnus",
            "Vulcanus",
            "Wepset",
            "Zagreus",
            "Zelos",
            "Zephyrus"
        ],
        "celestialbody": [
            "asteroid",
            "aurora",
            "ball",
            "belt",
            "blaze",
            "boulder",
            "bulk",
            "cloud",
            "cluster",
            "comet",
            "disc",
            "dwarf",
            "flare",
            "fragment",
            "giant",
            "globe",
            "halo",
            "mass",
            "megalith",
            "2:moon",
            "moonlet",
            "mote",
            "nebula",
            "2:orb",
            "penumbra",
            "pebble",
            "5:planet",
            "3:point",
            "remnant",
            "3:ring",
            "ringlet",
            "3:rock",
            "satellite",
            "shard",
            "2:spall",
            "2:sphere",
            "splinter",
            "4:star",
            "sun",
            "1:system",
            "umbra",
            "vacuum",
            "void",
            "well",
            "11:world"
        ],
        "adjective":[
            "amber",
            "ancient",
            "august",
            "battered",
            "beautiful",
            "beloved",
            "big|little",
            "2:black",
            "blessed",
            "blinding",
            "3:bloody",
            "2:blue",
            "bountiful",
            "brave",
            "2:bright",
            "broken",
            "2:brown",
            "burning",
            "central",
            "calm",
            "clamorous",
            "clear",
            "cold",
            "colorful",
            "crystal|crystalline",
            "cursed",
            "2:dark",
            "dazzling",
            "deadly",
            "derelict",
            "distant",
            "electric|electrifying",
            "empty",
            "enchanting",
            "endless",
            "ersatz",
            "evil",
            "fading",
            "fair",
            "fearful",
            "fearsome",
            "fierce",
            "fiery|flaming",
            "flickering",
            "floating",
            "flying|soaring",
            "foggy",
            "forgotten",
            "forsaken",
            "fractured",
            "free",
            "frigid",
            "2:golden",
            "good",
            "gleeful",
            "glorious",
            "glimmering",
            "glistening|glittering",
            "gossamer",
            "grand",
            "great",
            "4:green",
            "happy|glad",
            "hated",
            "heavy",
            "high",
            "hollow",
            "holy",
            "hot",
            "hypnotic",
            "icy",
            "immortal|undying",
            "ineffable",
            "infinite",
            "iron",
            "joyful|joyous",
            "laughing",
            "looming",
            "lost",
            "luminous",
            "mad",
            "mesmerizing",
            "miraculous",
            "modest",
            "molten",
            "murderous",
            "mute",
            "mystical|mystic",
            "nebulous",
            "noisome",
            "2:orange",
            "2:pleasant",
            "poisonous",
            "precious",
            "pristine",
            "proud",
            "2:purple|violet",
            "quiet",
            "ragged",
            "raging",
            "raucous",
            "4:red",
            "righteous",
            "roaring",
            "rusty|rusted",
            "ruthful",
            "ruthless",
            "sacred",
            "serene",
            "shadowy",
            "shattered",
            "shifting",
            "shimmering",
            "simmering",
            "silent|noiseless",
            "silvery|silver",
            "sinister",
            "sparkling",
            "still",
            "succulent",
            "tattered",
            "tender",
            "terrible",
            "thrilling",
            "thundering",
            "tinsel",
            "toxic",
            "tranquil",
            "treacherous",
            "tumultuous|turbulent",
            "undying",
            "unstoppable",
            "velvet",
            "warm",
            "2:whispering",
            "3:white",
            "wild",
            "windy",
            "wise",
            "wonderful|wondrous",
            "wooden",
            "1:yellow"
        ],
        "propernounprefix":[
            "10:camp",
            "east",
            "12:fort",
            "mount",
            "north",
            "10:old|new",
            "3:new",
            "30:port",
            "18:point",
            "2:saint|st.",
            "south",
            "west"
        ],
        "settlement": [
            "2:anchorage",
            "arsenal",
            "barracks",
            "bastion",
            "2:base",
            "benefice",
            "bunker",
            "camp",
            "cantonment",
            "castle",
            "castellany",
            "colony",
            "convent",
            "corner",
            "court",
            "crossing",
            "depot",
            "demesne",
            "encampment",
            "estate",
            "exchange",
            "farm|farmstead|farmstead|farmyard",
            "facility",
            "fief|fiefdom",
            "fishery",
            "ford",
            "3:fort",
            "fortress",
            "freehold",
            "frontier",
            "garrison",
            "gate",
            "gateway",
            "grange",
            "harbor",
            "harbor",
            "hermitage",
            "hideout",
            "hold|holding",
            "homestead",
            "icehouse",
            "junction",
            "keep",
            "laboratory",
            "leasehold",
            "lodge",
            "lodgement",
            "main",
            "manor",
            "market|marketplace",
            "mine",
            "monastery",
            "2:moorage",
            "2:mooring",
            "observatory",
            "3:outpost",
            "pact",
            "pasture",
            "plantation",
            "4:port",
            "3:post",
            "precaria|precarium|precario",
            "prison",
            "proving ground",
            "quarters",
            "refuge",
            "repository",
            "resort",
            "ranch",
            "sanctuary",
            "settlement",
            "shelter",
            "shrine",
            "spread",
            "4:station",
            "steading",
            "temple",
            "terminal",
            "territory",
            "tribute",
            "trust",
            "villa",
            "warren",
            "waypoint",
            "2:waystation",
            "yard"
        ],
        "technology":[
            "aluminum|aluminium",
            "atomic|atom",
            "broadcast",
            "cannon",
            "collector",
            "computer",
            "cryogenic",
            "crystaliron",
            "data",
            "electro|electric",
            "electronic|electron",
            "exotic",
            "fission",
            "fusion",
            "gravity|gravitic",
            "jump",
            "laser",
            "magnet|magnetic",
            "matrix",
            "memory",
            "meson",
            "mortar",
            "musket",
            "neutrino",
            "organic",
            "ortillery",
            "photon|photonic",
            "plasma",
            "positronic|positron",
            "power",
            "proton",
            "radar",
            "radiation",
            "reflec",
            "remote",
            "rifle",
            "rocket",
            "scanner",
            "synthetic",
            "titanium",
            "tranmission|transmitter|transceiver",
            "transit",
            "transport|transportation",
            "wafer",
            "wire"
        ],
        "pastoral":[ "{system.pastoral1}<!0>{system.pastoral2}"],
        "pastoral1":[
            "anchor",
            "amber",
            "arbor",
            "arch",
            "august",
            "autumn",
            "azure",
            "bay",
            "black",
            "blue",
            "bone",
            "bramble",
            "brass",
            "bronze",
            "brown",
            "briar",
            "brick",
            "bridge",
            "bright",
            "canyon",
            "castle",
            "cedar",
            "cold",
            "copper",
            "clay",
            "clear",
            "cloud",
            "comet",
            "coral",
            "2:crater",
            "crystal",
            "dark",
            "dart",
            "day",
            "dead",
            "deep",
            "diamond",
            "dire",
            "down",
            "dome",
            "dredge",
            "dune",
            "dust",
            "elm",
            "emerald",
            "ether",
            "even",
            "evening",
            "fair",
            "fire",
            "flag",
            "flame",
            "fog",
            "fox",
            "free",
            "frost",
            "frozen",
            "golden",
            "glass",
            "glen",
            "granite",
            "grey",
            "green",
            "grim|grims",
            "harbor",
            "hart|heart",
            "haven",
            "high",
            "hill",
            "ice",
            "iron",
            "key",
            "ledge",
            "lake",
            "larch",
            "light",
            "little",
            "long",
            "low",
            "lumber|timber",
            "lunar",
            "metal",
            "middle",
            "mire",
            "moon",
            "morning",
            "moss",
            "mourn",
            "mud",
            "nickel",
            "night",
            "nova",
            "oak|oaken",
            "pearl",
            "pebble",
            "pine",
            "prairie",
            "ramble",
            "raven",
            "red",
            "ridge",
            "rift",
            "ring",
            "river",
            "2:rock",
            "rose",
            "ruby",
            "rust",
            "sage",
            "sandy|sand",
            "scrap",
            "silver",
            "silt",
            "shadow",
            "sky",
            "slate",
            "spring",
            "solar",
            "star",
            "steel",
            "still",
            "stone|stony",
            "summer",
            "sun|sunny",
            "tangle",
            "tower",
            "tin",
            "valley",
            "void",
            "villa",
            "vista",
            "well",
            "white",
            "willow",
            "wind",
            "winter",
            "wood",
            "{system.pastoral1}|yellow"
        ],
        "pastoral2":[
            "2:acre",
            "2:beach",
            "2:bend",
            "2:bluff",
            "2:borne",
            "2:borough|burrow",
            "1:branch",
            "2:bridge",
            "2:brook",
            "2:burn",
            "2:bury",
            "2:castle",
            "1:chasm",
            "2:cliff|cliff|cliffe",
            "2:court",
            "2:cove",
            "2:crest",
            "2:croft",
            "1:cross",
            "2:dale|dale|dell",
            "2:deep",
            "2:dome",
            "1:door",
            "2:edge",
            "2:fair|faire|fare",
            "2:fall|falls",
            "2:fell",
            "2:fen",
            "1:fetter",
            "2:field",
            "2:fire",
            "2:flame",
            "1:flats",
            "1:flight",
            "1:floor",
            "1:fog",
            "2:ford",
            "1:frost",
            "1:garth",
            "2:gate",
            "2:glen",
            "2:glow",
            "1:grass",
            "2:grave",
            "1:ground",
            "2:grove",
            "2:guard",
            "2:gulf",
            "2:hall",
            "2:ham",
            "2:haven",
            "2:head",
            "1:herm",
            "2:hill",
            "2:harbor",
            "1:harvest",
            "1:haven",
            "2:hold",
            "1:hole",
            "2:holm",
            "2:home",
            "2:hook",
            "2:horn",
            "2:house",
            "1:hurst",
            "2:keep",
            "1:key",
            "2:land",
            "2:lawn",
            "1:lea",
            "2:leaf",
            "2:ledge",
            "2:light",
            "2:march",
            "2:mead",
            "2:mill",
            "1:mine",
            "2:mire",
            "2:moon",
            "2:moor|more",
            "2:moss",
            "2:mount|mont",
            "2:mouth",
            "1:pass",
            "1:path",
            "2:peak",
            "1:pit",
            "2:point",
            "1:pole",
            "2:pool",
            "3:port",
            "2:post",
            "2:pyre",
            "1:quarry",
            "1:rapids",
            "2:reef",
            "2:ridge",
            "2:rift",
            "2:rim",
            "2:ring",
            "2:rock",
            "2:run",
            "1:sea",
            "1:shaft",
            "2:shade|shadow",
            "1:shear",
            "1:shire",
            "1:shore",
            "2:side",
            "2:sink",
            "2:spall",
            "2:spire",
            "2:spring|springs",
            "2:star",
            "2:stead",
            "2:stone",
            "1:strand",
            "1:straw",
            "2:sward",
            "1:tangle",
            "1:thrall",
            "2:tide",
            "2:tomb",
            "2:tower",
            "1:trail",
            "1:trough",
            "2:vale",
            "2:vault",
            "2:veldt|veld",
            "2:vein",
            "1:villa",
            "3:view",
            "1:vine",
            "2:vista",
            "1:watch",
            "2:water",
            "1:way",
            "3:well",
            "1:wheel",
            "1:wick",
            "2:wood|wood|wold",
            "2:works",
            "1:yard"
        ],
        "realplace":[
            "alaiedon", // Michigan
            "albion", // New York
            "alcova", // Wyoming
            "almira", // Washington
            "amalga", // Utah
            "amargosa", // Nevada
            "amidon", // North Dakota
            "amity", // Arkansas
            "ardoch", // North Dakota
            "artesia", // New Mexico
            "arvada", // Wyoming
            "ashaway", // Rhode Island
            "attica", // 
            "aurora", // Colorado
            "bangor", // Maine
            "benzonia", // Michigan
            "bolivar", // New york et al
            "bowman", // South Carolina
            "braden", // Tennessee
            "brigantine", // New Jersey
            "brocket", // North Dakota
            "brodnax", // Virginia
            "broussard", // Louisiana
            "brundage", // Texas
            "buford", // Georgia
            "calabash", // North Carolina
            "canova", // South Dakota
            "ceresco", // Nebraska
            "chattaroy", // West Virginia
            "cheyenne", // Wyoming
            "colfax", // Michigan, North Dakota
            "cordova", // Alaska, Nebraska
            "coventry", // Rhode Island
            "cresbard", // South Dakota
            "croydon", // New Hampshire
            "cynthiana", // Kentucky
            "dauphin", // Pennsylvania
            "devore", // Indiana
            "demarest", // New Hampshire
            "dendron", // Virginia
            "despard", // Wes Virginia
            "dongola", // Illinois
            "doniphan", // Nebraska
            "doyle", // Tennessee
            "drummond", // Montana
            "dunkirk", // New York
            "durant", // Mississippi
            "echelon", // New Jersey
            "edroy", // Texas
            "ellithorpe", // Connecticut
            "elmira", // Michigan
            "elsinore", // Utah
            "embden", // Maine 
            "emporia|emporium", // Kansas
            "etowah", // Tennessee
            "eupora", // Mississippi
            "exeter", // Maine et al
            "fabius", // New York
            "fairfax", // Virginia
            "fernley", // Nevada
            "folsom", // New Mexico
            "fontana", // Kansas
            "fredonia", // North Dakota
            "forward", // Pennsylvania
            "fostoria", // Iowa
            "galion", // Ohio
            "gallatin", // Tennessee
            "gardena", // North Dakota
            "garland", //
            "ghent", // New York
            "gilead", // Michigan
            "glenarden", // Maryland
            "goshen", // Connecticut
            "gretna", // Louisiana, Nebraska
            "groton", // Vermont
            "guthrie", // Kentucky
            "harbine", // Nebraska
            "haight", // Michigan
            "helmetta", // New Jersey
            "helvetia", // West Virginia
            "hematite", // Michigan
            "herlong", // California
            "honaker", // Virginia
            "horicon", // New York, Wisconsin
            "hourglass", // Delaware
            "hunlock", // Pennsylvania
            "iatan", // Missouri
            "idamay", // West Virginia
            "ingalls", // Oklahoma
            "interlaken", // New Jersey
            "irena", // Missouri
            "irvona", // Pennsylvania
            "isola", // Mississippi
            "ivor", // Virginia
            "jaffrey", // New Hampshire
            "jessup", // Pennsylvania
            "juneau", // Alaska
            "juniata", // Pennsylvania
            "juntura", // Oregon
            "karnak", // Illinois
            "kenmare", // North Dakota
            "kepuhi", // Hawaii
            "kilmarnock", // Virginia
            "kimball", // Tennessee
            "kinard", // Florida
            "kincaid", // West Virginia
            "kinzua", // Oregon
            "knox", // New York
            "koosharem", // Utah
            "kremmling", // Colorado
            "lambert", // Mississippi
            "lamont", // Florida
            "lansing", // Michigan
            "laurel", // Montana
            "lavina", // Montana
            "lignite", // North Dakota
            "ligonier", // Pennsylvania
            "lipscombe", // Texas
            "lothair", // Georgia
            "lucama", // North Carlonia
            "lyndon", // Vermont
            "manteo", // North Carolina
            "matlock", // Kentucky
            "mattox", // Florida
            "mendon", // Vermont
            "meridian", // Oklahoma
            "metairie", // Louisiana
            "metaline", // Washington
            "metamora", // Ohio
            "merced", // California
            "miramar", // Florida
            "mogadore", // Ohio
            "mondovi", // Wisconsin
            "montour", // New York
            "nanticoke", // New York, Pennsylvania
            "napavine", // Washington
            "nashoba", // Oklahoma
            "navassa", // North Carolina
            "naylor", // Missouri
            "niangua", // Missouri
            "nibley", // Utah
            "niskayuna", // New York
            "novinger", // Missouri
            "noxen", // Pennsylvania
            "noxapater", // Mississippi
            "nutley", // New Jersey
            "odessa", // Minnesota et al
            "okoboji", // Iowa
            "olyphant", // Pennsylvania
            "oradell", // New Jersey
            "orofino", // Idaho
            "orovada", // Nevada
            "ossipee", // North Carolina
            "ostrander", // Minnesota
            "owasso", // Oklahoma
            "pahala", // Hawaii
            "palmyra", // Wisconsin
            "paxtang", // Pennsylvania
            "peletier", // North Carolina
            "pelion", // South Carolina
            "pepperell", // Massachusetts
            "peshtigo", // Wisconsin
            "petros", // Oklahoma
            "pickens", // Mississippi
            "pierre", // South Dakota
            "pocatello", // Idaho
            "primghar", // Iowa
            "quinlan", // Oklahoma
            "rathdrum", // Idaho
            "raphine", // Virginia
            "ravinia", // South Dakota
            "reliance", // Wyoming
            "renovo", // Pennsylvania
            "revere", // Massachusetts
            "rhinebeck", // New York
            "ridgely", // Maryland
            "ronan", // Montana
            "rosalia", // Washington
            "ruidoso", // New Mexico
            "ryder", // North Dakota
            "salem", // 
            "saluda", // North Carolina
            "satsuma", // Alabama
            "screven", // Georgia
            "sedona", // Arizona
            "seward", // Pennsylvania
            "shenango", // Pennsylvania
            "sitka", // Alaska
            "slocum", // Pennsylvania
            "smyrna", // South Carolina
            "sonora", // California
            "strathcona", // Minnesota
            "taconite", // Minnesota
            "tangier", // Oklahoma
            "teresita", // Oklahoma
            "Thayne", // Wyoming
            "tioga", // Pennsylvania
            "tonopah", // Nevada
            "trappe", // Maryland
            "trempealeau", // Wisconsin
            "trimble", // Ohio
            "turlock", // California
            "tyronza", // Arkansas
            "ukiah", // Oregon
            "ulmer", // South Carolina
            "umatilla", // Oregon
            "umbarger", // Texas
            "urbana", // Illinois, New York
            "ursine|ursina", // Nevada/Penn
            "utica", // Mississippi et al
            "valier", // Montana
            "vardaman", // Mississippi
            "venango", // Pennsylvania
            "venedocia", // Ohio
            "venturia", // North Dakota
            "verdigre|verdigris", // Nebraska/Oklahoma
            "vernon", // Delaware
            "vesta", // Minnesota
            "virden", // New Mexico
            "waverly", // Nebraska
            "weatherly", // Pennsylvania
            "wetonka", // South Dakota
            "whately", // Massachusetts
            "waldorf", // Minnesota
            "walhalla", // North Dakota, South Carolina
            "wailuku", // Hawaii
            "whitaker", // Indiana et al
            "wildorado", // Texas
            "wykoff", // Minnesota
            "Xenia", // Ohio
            "yacolt", // Washington
            "yarmouth", // Massachusetts
            "yarnaby", // Oklahoma
            "yeadon", // Pennsylvania
            "yemassee", // South Carolina
            "yoder", //
            "yoncalla", // Oregon
            "yuma", // Arizona
            "zaneis", // Oklahoma
            "zebulon", // North Carolina
            "zena", // Oregon et al
            "zillah", // Washington
            "zoar", // Ohio
            "zumbrota", // Minnesota
            "zumwalkt" // Oregon

        ],
        "mythplace":[
            "aaru",
            "arcadia|arcady",
            "asphodel",
            "eden",
            "elysium",
            "firdaus",
            "fólkvangr",
            "gehenna",
            "goloka",
            "hades",
            "heaven",
            "jahannam",
            "jannah",
            "mictlan",
            "naraka",
            "niflhel",
            "nirvana",
            "oblivion",
            "paradise",
            "sheol",
            "summerland",
            "svarga",
            "tartarus",
            "tian",
            "utopia",
            "valhalla",
            "yalu",
            "yomi"
        ],
        "feeling": [ // not necessarily emotions, fits the patterns "tower of [feeling]" or "Someone's [feeling]"
            "accomplishment",
            "achievement",
            "apex",
            "arrogance",
            "assault",
            "atonement",
            "awe",
            "bliss",
            "brilliance",
            "chaos",
            "compassion",
            "compromise",
            "comraderie|fellowship|friendship",
            "concord|concordia",
            "condolence",
            "consolation",
            "confusion",
            "contentment",
            "death",
            "delight",
            "defense",
            "defiance",
            "desolation",
            "despair|desperation",
            "destiny",
            "destitution",
            "disappointment",
            "dismay",
            "disquiet",
            "doom",
            "duty",
            "failure",
            "faith|faithfulness",
            "falsehood",
            "fear",
            "folly",
            "fortune",
            "freedom",
            "genius",
            "glory",
            "grace",
            "grandeur",
            "gratification",
            "gratitude",
            "grief",
            "happiness",
            "harmony",
            "havoc",
            "hazard",
            "hope",
            "horror",
            "independence",
            "infatuation",
            "innocence",
            "joy",
            "justice",
            "love",
            "luck",
            "lust",
            "madness",
            "mirth",
            "misery",
            "misfortune",
            "ignorance",
            "innocence",
            "insight",
            "judgment",
            "obedience",
            "opportunity",
            "panic",
            "passion",
            "peace",
            "perfection",
            "pity",
            "pleasure",
            "prosperity",
            "protection",
            "pride",
            "rapture",
            "rebellion",
            "recompense",
            "regret",
            "rejection",
            "relief",
            "reprisal",
            "resistance",
            "retribution",
            "revenge",
            "ruination",
            "ruth",
            "sadness",
            "satisfaction",
            "serenity",
            "simplicity",
            "sin",
            "solace",
            "sorrow",
            "stupidity",
            "stupor",
            "success",
            "surprise",
            "temperance",
            "terror",
            "torpor",
            "tranquility",
            "treachery",
            "truth",
            "vengeance",
            "villainy",
            "welcome",
            "wisdom",
            "worry"
        ],
        "greekletter": [
            "3:alpha",
            "3:beta",
            "3:gamma",
            "3:delta",
            "3:epsilon",
            "2:zeta",
            "2:eta",
            "2:theta",
            "2:iota",
            "2:kappa",
            "2:lambda",
            "mu",
            "nu",
            "xi",
            "2:omicron",
            "pi",
            "rho",
            "2:sigma",
            "2:tau",
            "upsilon",
            "phi",
            "chi",
            "psi",
            "2:omega"
        ],
        "letter":[
            "10:a|b|c|d",
            "3:e|f|g|h",
            "2:i|j|k|l|m",
            "1:n|o|p|q|r|t|u|v|w|x|y|z"
        ],
        "numeraldesignation":[
            "25:{system.numeral}",
            "1:{system.numeral}{system.letter}"
        ],
        "numeral": [
            "2:I",
            "4:II",
            "5:III",
            "5:IV",
            "4:V",
            "4:VI",
            "3:VII",
            "3:VIII",
            "3:IX",
            "2:X",
            "1:XI|XII|XIII",
            "1:XIV|XV|XVI|XVII|XVIII|XIX|XX"
        ],
        "landmark": [
            "abyss",
            "badland",
            "bay",
            "bog",
            "brook",
            "caldera",
            "canyon",
            "cascade",
            "cave",
            "cavern",
            "chasm",
            "coast",
            "cove",
            "cliff",
            "cloud",
            "clump",
            "crag",
            "2:crater",
            "crest",
            "crevasse",
            "dale",
            "depth",
            "desert",
            "dune",
            "2:expanse",
            "fault",
            "fen",
            "2:field",
            "flats",
            "forest",
            "geyser",
            "glacier",
            "glade",
            "gorge",
            "grove",
            "grassland",
            "gully",
            "gulf",
            "headwater|headwaters",
            "heath",
            "hollow",
            "island",
            "isle",
            "jungle",
            "lagoon",
            "lake",
            "ledge",
            "marsh",
            "meadow",
            "mesa",
            "mire",
            "moor",
            "morass",
            "mountain",
            "mudflat",
            "oasis",
            "ocean",
            "2:passage",
            "peak",
            "pit",
            "2:point",
            "pond",
            "pool",
            "plateau",
            "prairie",
            "quagmire",
            "realm",
            "2:reef",
            "ridge",
            "2:rift",
            "savanna",
            "scree",
            "sea",
            "2:shoal",
            "shore",
            "spring",
            "sinkhole",
            "steppe",
            "stream",
            "swale",
            "swamp",
            "taiga",
            "trench",
            "tundra",
            "tunnel",
            "valley",
            "wasteland",
            "waters",
            "whirlpool",
            "woodland",
            "woods"
        ],
        "bodypart": [
            "appendage",
            "artery",
            "backbone",
            "beak",
            "bosom",
            "brain",
            "breath",
            "claw",
            "corpse",
            "end",
            "4:eye",
            "face",
            "fang",
            "feather",
            "finger",
            "hand",
            "head",
            "2:heart",
            "hide",
            "incisor",
            "jaw",
            "jawbone",
            "limb",
            "mandible",
            "mantle",
            "mind",
            "3:maw",
            "3:mouth",
            "paw",
            "scale",
            "shell",
            "shoulder",
            "2:skull",
            "spine",
            "stinger",
            "tail",
            "talon",
            "tentacle",
            "thumb",
            "throat",
            "tongue",
            "3:tooth",
            "tusk",
            "2:vein",
            "wing",
            "womb"
        ],
        "material": [
            "air",
            "alabaster",
            "amethyst",
            "blood",
            "bone",
            "brass",
            "bronze",
            "chalk",
            "chrome",
            "2:clay",
            "copper",
            "coral",
            "cotton",
            "cream",
            "crystal",
            "diamond",
            "dirt",
            "dust",
            "earth",
            "emerald",
            "energy",
            "ether|aether",
            "fire",
            "flesh",
            "flint",
            "foam",
            "fog",
            "gas",
            "glass",
            "gold",
            "granite",
            "gravel",
            "gravity",
            "hail",
            "5:ice",
            "3:iron",
            "jade",
            "lava",
            "lead",
            "magma",
            "marble",
            "metal",
            "mist",
            "muck",
            "mud",
            "nickel",
            "oak",
            "obsidian",
            "oil",
            "opal",
            "plasma",
            "quartz",
            "rock",
            "rubble",
            "ruby",
            "rum",
            "rust",
            "sand",
            "sandstone",
            "salt",
            "sapphire",
            "soil",
            "silica",
            "silver",
            "slate",
            "slime|sludge",
            "smog",
            "smoke",
            "snow",
            "steel",
            "stone",
            "sulphur",
            "timber",
            "tin",
            "titanium",
            "vacuum",
            "water",
            "wax",
            "wind",
            "wood"
        ],
        "noun": [ // fits the patterns of "The Devil's [noun]" and "[noun] of [feeling]"
            "aberration",    
            "accident",
            "altar",
            "anchorage",
            "angel",
            "answer",
            "argosy",
            "armor",
            "arrow",
            "asylum",
            "avatar",
            "axe",
            "battlefield",
            "2:beach|beachhead",
            "blade",
            "blunder",
            "bolthole",
            "bonfire",
            "bounty",
            "branch",
            "brother|sister",
            "cache",
            "cacophony",
            "cage",
            "calling",
            "canopy",
            "carbuncle",
            "carousel",
            "cataclysm|catastrophe|disaster",
            "catacomb",
            "chain",
            "chalice",
            "challenge",
            "challenger",
            "chariot",
            "chapel",
            "chisel",
            "citadel",
            "cluster",
            "coffin",
            "concord",
            "cradle",
            "crown",
            "crucible",
            "curtain",
            "dagger",
            "danger",
            "debris|detritus",
            "den",
            "discovery",
            "domain",
            "dominion",
            "doorway",
            "dream",
            "echo",
            "egg",
            "end",
            "endeavor",
            "engine",
            "enigma",
            "error",
            "escape",
            "exodus",
            "2:fall",
            "fane",
            "fastness",
            "ferry",
            "2:fire",
            "firmament",
            "flame",
            "flight",
            "2:folly",
            "foresight",
            "2:forge",
            "fortune",
            "fulfillment",
            "furnace",
            "gambit",
            "2:garden",
            "gateway",
            "gauntlet",
            "gem",
            "genesis",
            "ghost",
            "glove",
            "glyph",
            "grotto",
            "grimoire",
            "grip",
            "granary",
            "grasp",
            "graveyard",
            "harbor",
            "harvest",
            "haven",
            "heartland",
            "helmet",
            "hermitage",
            "hideaway",
            "hideout",
            "hive",
            "hoard",
            "home",
            "hurricane",
            "kaleidoscope",
            "kettle",
            "kitchen",
            "inferno",
            "inn",
            "jackpot",
            "jewel",
            "labyrinth",
            "4:landing",
            "lantern",
            "lair",
            "2:light",
            "lode",
            "lookout",
            "madhouse",
            "maelstrom",
            "martyry",
            "masterpiece",
            "mausoleum",
            "maze",
            "mine",
            "minefield",
            "mirror",
            "mishap",
            "mistake",
            "monolith",
            "monument",
            "morgue",
            "mystery",
            "2:nest",
            "net",
            "nexus",
            "nightmare",
            "nook",
            "noose",
            "nursery",
            "oasis",
            "omen",
            "orchard",
            "palace",
            "2:paradise|paradise|valhalla|elysium|nirvana|eden|arcadia|heaven",
            "paradox",
            "passage",
            "pearl",
            "phantom",
            "pilgrimage",
            "pillar",
            "playground|playland",
            "playpen",
            "podium",
            "prayer",
            "prism",
            "prison",
            "prophecy",
            "prospect",
            "puzzle",
            "quake",
            "quest",
            "question|query",
            "rampart",
            "2:ransom",
            "reach",
            "redoubt",
            "2:refuge",
            "relic|reliquary",
            "remnant",
            "repository",
            "reserve",
            "residence",
            "resort",
            "retreat",
            "revelation",
            "reward",
            "riddle",
            "ruins",
            "2:rune",
            "2:salvage",
            "sanctuary",
            "2:sanctum",
            "scryer",
            "seat",
            "secret",
            "2:shadow",
            "shelter",
            "shield",
            "shrine",
            "sigil",
            "skeleton",
            "sledge",
            "spark",
            "spear",
            "spectre|specter",
            "stash",
            "stockyard",
            "storehouse",
            "storm",
            "2:sword",
            "talisman",
            "temple",
            "tendril",
            "threshold",
            "2:throne",
            "tomb",
            "torch",
            "2:tower",
            "tragedy",
            "trap",
            "treasure",
            "treasury",
            "tree",
            "trove",
            "tsunami",
            "utopia",
            "veil",
            "view",
            "vision",
            "wall",
            "watchtower",
            "wealth",
            "web|tangle",
            "wellspring",
            "window",
            "wish",
            "workshop",
            "wraith",
            "wreckage"
        ]
    }
};
}