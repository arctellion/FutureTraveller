import { getRollerFromSeed } from "./rnd.js";
import { human } from "./character/human.js";
import { ENUM_CHARACTERISTICS } from "./character/species.js";
import {CLASS_SPECIES} from "./character/species.js";
import { SoldierSkills, StarshipSkills, ENUM_SKILLS, ENUM_SKILLS as MasterSkills, Knowledges as KnowledgeSpecialties, ArtSkills, TradeSkills } from "./character/skills.js";
import { getDialog, dialogCallback, pickOption, pickSkill } from "./character/dialog.js";
import { ENUM_CAREERS, getCCs, citizenLifeJob, CareerSkillTables } from "./character/careers.js";

export function createCharacter(roller, species){
    if(typeof roller === "undefined"){
        roller = getRollerFromSeed();
    }
    
    if(typeof species === "undefined"){
        species = human;
    }
    var name = "J. Doe";
    var majors = [], minors = [], history = [];
    var nativeLanguage = "Anglic";
    var languageReceipts = 0; var edu_waivers = 0; var awards = [];
    var sanity = 0;
   var defaultSkills = [
        MasterSkills.Actor, MasterSkills.Artist, MasterSkills.Athlete, 
        MasterSkills.Author, MasterSkills.Comms, MasterSkills.Computer, 
        MasterSkills.Driver, MasterSkills.Fighter, MasterSkills.Mechanic, 
        MasterSkills.Steward, MasterSkills.VaccSuit];
    var skills = {};
    for(var i = 0, len = defaultSkills.length; i < len; i++){
        skills[defaultSkills[i]] = {"Skill":0,"Knowledge":{}};
    }
    var gunner = MasterSkills.Gunner;
    skills[gunner] = {"Skill":-1,"Knowledge":{"Turrets":0}}; // Turrets (but not Gunner) is also a default skill
    var lang = {}; lang[nativeLanguage] = 0;
    skills[MasterSkills.Language] = {"Skill":-1,"Knowledge":lang};
    var genderRoll = roller.d6(2), casteRoll = roller.d6(2);
    var genderKey = species.GenderTable[genderRoll.result-2];
    var gender = species.Genders[genderKey];
    var casteKey = species.CasteTable[casteRoll.result-2];
    var caste = species.Castes[casteKey];
    var age = 0, isForcedGrowthClone = false;
    var statRollResults = rollStats();
    var careers = [], CCs = [];
    var job = {skill:undefined,knowledge:undefined}, hobby = {skill:undefined,knowledge:undefined}, lastCitLifeReceipt = undefined
    var characteristics = statRollResults.characteristics, genetics = statRollResults.genetics;
    function rollStats(){
        var statRolls = [
            roller.d6(species.Characteristics[0].nD + gender.Characteristics[0].nD + caste.Characteristics[0].nD),
            roller.d6(species.Characteristics[1].nD + gender.Characteristics[1].nD + caste.Characteristics[1].nD),
            roller.d6(species.Characteristics[2].nD + gender.Characteristics[2].nD + caste.Characteristics[2].nD),
            roller.d6(species.Characteristics[3].nD + gender.Characteristics[3].nD + caste.Characteristics[3].nD),
            roller.d6(species.Characteristics[4].nD + gender.Characteristics[4].nD + caste.Characteristics[4].nD),
            roller.d6(species.Characteristics[5].nD + gender.Characteristics[5].nD + caste.Characteristics[5].nD),
            roller.d6(2) // sanity
        ];
        var characteristics = [
            {name:species.Characteristics[0].name,value:statRolls[0].result + gender.Characteristics[0].Mod + caste.Characteristics[0].Mod},
            {name:species.Characteristics[1].name,value:statRolls[1].result + gender.Characteristics[1].Mod + caste.Characteristics[1].Mod},
            {name:species.Characteristics[2].name,value:statRolls[2].result + gender.Characteristics[2].Mod + caste.Characteristics[2].Mod},
            {name:species.Characteristics[3].name,value:statRolls[3].result + gender.Characteristics[3].Mod + caste.Characteristics[3].Mod},
            {name:species.Characteristics[4].name,value:statRolls[4].result + gender.Characteristics[4].Mod + caste.Characteristics[4].Mod},
            {name:species.Characteristics[5].name,value:statRolls[5].result + gender.Characteristics[5].Mod + caste.Characteristics[5].Mod},
        ], genetics = [
            statRolls[0].rolls[0],
            statRolls[1].rolls[0],
            statRolls[2].rolls[0],
            statRolls[3].rolls[0],
        ];
        sanity = statRolls[6].result;
        languageReceipts = 0;
        if(species.Characteristics[4].name == ENUM_CHARACTERISTICS.INS){ genetics.push(statRolls[4].rolls[0]);}
        skills[MasterSkills.Language].Knowledge[nativeLanguage] = 0;
        edu_waivers = 0; //characteristics[5].value-edu_waivers; 
        return {statRolls, characteristics, genetics}
    }
    
    function initStats(stats, geneticValues){
       characteristics = [
            {name:species.Characteristics[0].name,value:stats[0]},
            {name:species.Characteristics[1].name,value:stats[1]},
            {name:species.Characteristics[2].name,value:stats[2]},
            {name:species.Characteristics[3].name,value:stats[3]},
            {name:species.Characteristics[4].name,value:stats[4]},
            {name:species.Characteristics[5].name,value:stats[5]}
        ];
        sanity = roller.d6(2).result;
        languageReceipts = 0;
        edu_waivers = 0;
        genetics = geneticValues.slice(0,4);
        skills[MasterSkills.Language].Knowledge[nativeLanguage] = 0;
        if(species.Characteristics[4].name === ENUM_CHARACTERISTICS.INS){ genetics.push(geneticValues[4]);}
        record("Initial UPP: "+ characteristics[0].value + "," +  characteristics[1].value + "," + characteristics[2].value + "," + 
            characteristics[3].value + "," + characteristics[4].value + "," + characteristics[5].value
        );
    }
    function getCharacteristics(){
        return characteristics;
    }
    function record(message){
        history.push("Age " + age+ ": " + message);
    }
    function rollStatsFromGenes(genes){
        var gene_statRolls = [];
        genetics = [];
        for(var i = 0, len = genes.length; i < len; i++){
            if(typeof genes[i] === "undefined" || genes[i] === "Random"){
                gene_statRolls.push(roller.d6(species.Characteristics[i].nD + gender.Characteristics[i].nD + caste.Characteristics[i].nD));
                
            }else{
                genes[i] = +(genes[i]);
                var temp = roller.d6(species.Characteristics[i].nD + gender.Characteristics[i].nD + caste.Characteristics[i].nD - 1);
                temp.result += genes[i]; temp.rolls = [genes[i]].concat(temp.rolls);
                gene_statRolls.push(temp);
            }
            if( i < 4 || species.Characteristics[i] === ENUM_CHARACTERISTICS.INS){
                genetics.push(gene_statRolls[i].rolls[0])
            }
        }
        for(;i<6; i++){
            gene_statRolls.push(roller.d6(species.Characteristics[i].nD + gender.Characteristics[i].nD + caste.Characteristics[i].nD))
            if( i < 4 || species.Characteristics[i] === ENUM_CHARACTERISTICS.INS){
                genetics.push(gene_statRolls[i].rolls[0])
            }
        }
        var gene_characteristics = [
            {name:species.Characteristics[0].name,value:gene_statRolls[0].result + gender.Characteristics[0].Mod + caste.Characteristics[0].Mod},
            {name:species.Characteristics[1].name,value:gene_statRolls[1].result + gender.Characteristics[1].Mod + caste.Characteristics[1].Mod},
            {name:species.Characteristics[2].name,value:gene_statRolls[2].result + gender.Characteristics[2].Mod + caste.Characteristics[2].Mod},
            {name:species.Characteristics[3].name,value:gene_statRolls[3].result + gender.Characteristics[3].Mod + caste.Characteristics[3].Mod},
            {name:species.Characteristics[4].name,value:gene_statRolls[4].result + gender.Characteristics[4].Mod + caste.Characteristics[4].Mod},
            {name:species.Characteristics[5].name,value:gene_statRolls[5].result + gender.Characteristics[5].Mod + caste.Characteristics[5].Mod},
        ];
        for(var i = 0, len = gene_characteristics.length; i < len; i++){
            characteristics[i].value = gene_characteristics[i].value
            characteristics[i].name = gene_characteristics[i].name
        }
        skills[MasterSkills.Language].Knowledge[nativeLanguage] = 0;
        edu_waivers = 0;//characteristics[5].value;
        record("Initial UPP: "+ characteristics[0].value + "," +  characteristics[1].value + "," + characteristics[2].value + "," + 
            characteristics[3].value + "," + characteristics[4].value + "," + characteristics[5].value
        );
    }
    function addMajor(skill,knowledge){
        var hasAlready = false;
        for(var i = 0, len = majors.length; i < len; i++){
            if(majors[i].skill === skill){
                if(typeof knowledge == "undefined"){
                    if(typeof majors[i].knowledge == "undefined"){ hasAlready = true }
                }else{
                    if(typeof majors[i].knowledge !== "undefined" && majors[i].knowledge === knowledge){
                        hasAlready = true;
                    }
                }
            }
        }
        if(!hasAlready){
            majors.push({skill:skill,knowledge:knowledge});
           record("Gained " + skill + (typeof knowledge == "undefined" ? "" : " ("+ knowledge+")") + " as a Major.")
        }
    }
    function addMinor(skill,knowledge){
        var hasAlready = false;
        for(var i = 0, len = minors.length; i < len; i++){
            if(minors[i].skill === skill){
                if(typeof knowledge == "undefined"){
                    if(typeof minors[i].knowledge == "undefined"){ hasAlready = true }
                }else{
                    if(typeof minors[i].knowledge !== "undefined" && minors[i].knowledge === knowledge){
                        hasAlready = true;
                    }
                }
            }
        }
        if(!hasAlready){
            minors.push({skill:skill,knowledge:knowledge});
           record("Gained " + skill + (typeof knowledge == "undefined" ? "" : " ("+ knowledge+")") + " as a Minor.")
        }
    }
    function gainSkill(skill){
        if(typeof skills[skill] != "undefined"){
            if(skills[skill].Skill >= 0){
                if(skills[skill].Skill = 15){
                }else{
                    skills[skill].Skill += 1;
                }
            }else{
                skills[skill].Skill = 1;
            }
        }else{
            skills[skill] = {Skill:1,Knowledge:{}}
        }
    }
    function gainKnowledge(skill,knowledge){
        if(typeof skills[skill] != "undefined"){
            if(skills[skill].Knowledge[knowledge] >= 0 ){
                skills[skill].Knowledge[knowledge] += 1;
            }else{
                skills[skill].Knowledge[knowledge] = 1;
            }
        }else{
            skills[skill] = {Skill:0,Knowledge:{}}
            skills[skill].Knowledge[knowledge] = 1;
        }
    }
    function gainSkillOrKnowledge(skill,knowledge,isEducation,premark){
        var remarks = (typeof premark == "undefined" ? "" : (premark + " "));
        if(typeof skill !== "undefined" && skill == ENUM_SKILLS.Language){
            remarks += gainLanguage(knowledge, isEducation);
        }else{
        if(typeof knowledge == "undefined" || knowledge == "undefined"){ // if no knowledge specified, just increase skill
            if(typeof skills[skill] != "undefined"){
                if(skills[skill].Skill >= 0){
                    if(skills[skill].Skill < 15){
                        skills[skill].Skill += 1;
                        remarks += "Gained " + skill + "-" + skills[skill].Skill + ". ";
                    }else{
                        remarks += skill+" was not increased as it is already at maximum level.";
                    }
                }else{
                    skills[skill].Skill = 1;
                    remarks += "Gained " + skill + "-" + skills[skill].Skill + ". ";
                }
            }else{
                skills[skill] = {Skill:1,Knowledge:{}};
                remarks += "Gained " + skill + "-" + skills[skill].Skill + ". ";
            }
        }else{
            if(typeof skills[skill] == "undefined"){ // if we don't have this skill at all, gain the knowledge
                var k = {}; k[knowledge] = 1;
                skills[skill] = {Skill:-1,Knowledge:k};
                remarks += "Gained " + skill + "("+knowledge + ")-" + skills[skill].Knowledge[knowledge] + ". ";
            }else if(isEducation || skill === ENUM_SKILLS.Science || skill === "World" || skill == "Career"){ // if this is during education, only increase K
                if(skill == ENUM_SKILLS.Language && isEducation){ // Language gains are doubled during Education and not limited to 6
                    if(skills[skill].Knowledge[knowledge]){
                        skills[skill].Knowledge[knowledge] += 2;
                        remarks += "Gained " + skill + "("+knowledge + ")-" + skills[skill].Knowledge[knowledge] + ". ";
                    }else{
                        skills[skill].Knowledge[knowledge] = 2;
                        remarks += "Gained " + skill + "("+knowledge + ")-" + skills[skill].Knowledge[knowledge] + ". ";
                    }
                }else if(skills[skill].Knowledge[knowledge]){  // if we already have the knowledge
                    if(skills[skill].Knowledge[knowledge] < 6){ // and we haven't reached the cap
                        skills[skill].Knowledge[knowledge] += 1; // increase it by 1
                        remarks += "Gained " + skill + "("+knowledge + ")-" + skills[skill].Knowledge[knowledge] + ". ";
                    }else if( skill === ENUM_SKILLS.Science){ // if we have reached the cap and it's a science, gain a specialty instead
                        var spec_counter = 0;
                        var specialty_name = knowledge;
                        while(skills[skill].Knowledge[specialty_name] && skills[skill].Knowledge[specialty_name] === 6){
                            spec_counter += 1;
                            specialty_name = knowledge + " Specialty " + spec_counter;
                        }
                        if(skills[skill].Knowledge[specialty_name]){
                            skills[skill].Knowledge[specialty_name] += 1;
                            remarks += "Gained " + skill + "("+specialty_name + ")-" + skills[skill].Knowledge[specialty_name] + ". ";
                        }else{
                            skills[skill].Knowledge[specialty_name] = 1;
                            remarks += "Gained " + skill + "("+specialty_name + ")-" + skills[skill].Knowledge[specialty_name] + ". ";
                        }
                    }else{
                        remarks += knowledge+" was not increased as it is already at maximum level.";
                    }
                }else{
                    skills[skill].Knowledge[knowledge] = 1; // if we don't have the knowledge, gain a rank
                    remarks += "Gained " + skill + "("+knowledge + ")-" + skills[skill].Knowledge[knowledge] + ". ";
                }
            }else{ // we have the base skill, check the knowledge count to see if we can increase S or only K
                var kcount = 0;
                var ks = skills[skill].Knowledge;
                for(var key in ks){
                    var level = skills[skill].Knowledge[key];
                    kcount += level;
                }
                
                // increase knowledge
                if(typeof skills[skill].Knowledge[knowledge] == "undefined"){
                    skills[skill].Knowledge[knowledge] = 1;
                    remarks += "Gained " + skill + "("+knowledge + ")-" + skills[skill].Knowledge[knowledge] + ". ";
                }else if(skills[skill].Knowledge[knowledge] < 6){
                    skills[skill].Knowledge[knowledge] += 1;
                    remarks += "Gained " + skill + "("+knowledge + ")-" + skills[skill].Knowledge[knowledge] + ". ";
                }else{
                    if(kcount >= 2 && skills[skill].Skill < 15){
                        // increase skill
                        if(skills[skill].Skill <= 0){ 
                            skills[skill].Skill = 1;
                            remarks += "Gained " + skill + "-" + skills[skill].Skill + ". ";
                        }else{
                            skills[skill].Skill += 1;
                            remarks += "Gained " + skill + "-" + skills[skill].Skill + ". ";
                        }
                    }else{
                        remarks += knowledge+" was not increased as it is already at maximum level.";
                    }
                }
            }
        }
    }
       record(remarks);
        return remarks;
    }
    function gainSkillsFromHomeworldTradeCodes(codes, callback, index, notes){
        var codeArray = typeof codes == "string" ? codes.split(" ") : codes;
        if(codes == "" && typeof index == "undefined"){ notes = "No skills received from homeworld.";record(notes);}
        if(typeof index === "undefined"){ index = 0;}
        if(typeof notes === "undefined"){ notes = "";}
        if(index === codeArray.length || codeArray.length === 0 || (codeArray.length == 1 && codeArray[0] == "")){
            return function(){
                callback(notes);
            };
        }else{
            var promptfunc = () => {};
            var code = codeArray[index];
            var skill = "";
            var note = code + " trade code on homeworld provides ";
            switch(code){
                case "Ag": promptfunc = gainSkillWithPromptForKnowledge; skill = ENUM_SKILLS.Animals; note += skill; break;
                case "As": promptfunc = gainSkillWithPromptForKnowledge; skill = ENUM_SKILLS.ZeroG; note += skill; break;
                case "Co": promptfunc = gainSkillWithPromptForKnowledge; skill = ENUM_SKILLS.HostileEnviron; note += skill; break;
                case "Cp": promptfunc = gainSkillWithPromptForKnowledge; skill = ENUM_SKILLS.Admin; note += skill; break;
                case "Cs": promptfunc = gainSkillWithPromptForKnowledge; skill = ENUM_SKILLS.Bureaucrat; note += skill; break;
                case "Cx": promptfunc = gainSkillWithPromptForKnowledge; skill = ENUM_SKILLS.Language; note += skill; break;
                case "Da": promptfunc = gainSkillWithPromptForKnowledge; skill = ENUM_SKILLS.Fighter; note += skill; break;
                case "De": promptfunc = gainSkillWithPromptForKnowledge; skill = ENUM_SKILLS.Survival; note += skill; break;
                case "Ds": promptfunc = gainSkillWithPromptForKnowledge; skill = [ENUM_SKILLS.VaccSuit,ENUM_SKILLS.ZeroG]; note+=skill.join(", "); break;
                case "Fa": promptfunc = gainSkillWithPromptForKnowledge; skill = ENUM_SKILLS.Animals; note += skill; break;
                case "Fl": promptfunc = gainSkillWithPromptForKnowledge; skill = ENUM_SKILLS.HostileEnviron; note += skill; break;
                case "Fr": promptfunc = gainSkillWithPromptForKnowledge; skill = ENUM_SKILLS.HostileEnviron; note += skill; break;
                case "Ga": promptfunc = gainSkillWithPromptForKnowledge; skill = ENUM_SKILLS.Trader; note += skill; break;
                case "He": promptfunc = gainSkillWithPromptForKnowledge; skill = ENUM_SKILLS.HostileEnviron; note += skill; break;
                case "Hi": promptfunc = gainSkillWithPromptForKnowledge; skill = ENUM_SKILLS.Streetwise; note += skill; break;
                case "Ho": promptfunc = gainSkillWithPromptForKnowledge; skill = ENUM_SKILLS.HostileEnviron; note += skill; break;
                case "Ic": promptfunc = gainSkillWithPromptForKnowledge; skill = ENUM_SKILLS.VaccSuit; note += skill; break;
                case "In": promptfunc = gainSkillWithPromptForCategory; skill = "TRADE"; note += "a skilled trade"; break;
                case "Lo": promptfunc = gainSkillWithPromptForKnowledge; skill = ENUM_SKILLS.Flyer; note += skill; break;
                case "Na": promptfunc = gainSkillWithPromptForKnowledge; skill = ENUM_SKILLS.Survey; note += skill; break;
                case "Ni": promptfunc = gainSkillWithPromptForKnowledge; skill = ENUM_SKILLS.Driver; note += skill; break;
                case "Oc": promptfunc = gainSkillWithPromptForKnowledge; skill = ENUM_SKILLS.HighG; note += skill; break;
                case "Pa": promptfunc = gainSkillWithPromptForKnowledge; skill = ENUM_SKILLS.Trader; note += skill; break;
                case "Pi": promptfunc = gainSkillWithPromptForKnowledge; skill = ENUM_SKILLS.JOT; note += skill; break;
                case "Po": promptfunc = gainSkillWithPromptForKnowledge; skill = ENUM_SKILLS.Steward; note += skill; break;
                case "Pr": promptfunc = gainSkillWithPromptForKnowledge; skill = ENUM_SKILLS.Craftsman; note += skill; break;
                case "Ri": promptfunc = gainSkillWithPromptForCategory; skill = "ART"; note += "an art skill";break;
                case "Tr": promptfunc = gainSkillWithPromptForKnowledge; skill = ENUM_SKILLS.Survival; note += skill; break;
                case "Tu": promptfunc = gainSkillWithPromptForKnowledge; skill = ENUM_SKILLS.Survival; note += skill; break;
                case "Tu": promptfunc = gainSkillWithPromptForKnowledge; skill = ENUM_SKILLS.Driver; note += skill; break;
                case "Va": promptfunc = gainSkillWithPromptForKnowledge; skill = ENUM_SKILLS.VaccSuit; note += skill; break;
                case "Wa": promptfunc = gainSkillWithPromptForKnowledge; skill = ENUM_SKILLS.Seafarer; note += skill; break;
                default: note += "no skills"; promptfunc = (n,s,next,ns)=>{ record(n); next(); }; break; 
            }
            note += ".";
            notes += note + "<br/>";
            var nextMethod = gainSkillsFromHomeworldTradeCodes(codeArray, callback, index + 1, notes);
            return function(){
                var text = promptfunc(note, skill, nextMethod, notes);
                notes += text;
            }
        }
    }
    function gainSkillWithPromptForCategory(prompt,skillCategory,callback){
        switch(skillCategory.toUpperCase()){
            case "ART": 
            pickOption(ArtSkills,prompt + " Choose an Art skill.",function(x){proceed(x);},true);
            break;
            case "TRADE": 
            pickOption(TradeSkills,prompt + " Choose a skilled Trade.",function(x){proceed(x);},true);
            break;
            case "SHIP":
                case "STARSHIP": 
                pickOption(StarshipSkillsSkills,prompt + " Choose a Starship Skill.",function(x){proceed(x);},true);
                break;
                case "SOLDIER": 
                pickOption(SoldierSkillsSkills,prompt + " Choose a Soldier Skill.",function(x){proceed(x);},true);
            break;
        }
        function proceed(chosenSkill){
            gainSkillWithPromptForKnowledge(prompt,chosenSkill,callback);
        }
    }
    function canGainBaseSkill(skill){
        var canIncrease = false;
        if(typeof skills[skill] == "undefined"){
            canIncrease = false;
        }else{
            var kcount = 0;
            var ks = skills[skill].Knowledge;
            for(var key in ks){
                var level = skills[skill].Knowledge[key];
                kcount += level;
            }
            if(kcount >= 2 && skills[skill].Skill < 15){
                canIncrease = true;
            }
        }
        return canIncrease
    }
    function gainSkillWithPromptForKnowledge(prompt,skill,callback){
        if(typeof skill !== "string" && skill.length == 2){
                gainSkillWithPromptForKnowledge(prompt,skill[0],function(x){
                    gainSkillWithPromptForKnowledge(prompt,skill[1],callback);
                });
            
        }else{
            if(KnowledgeSpecialties[skill]){
                var specialties = KnowledgeSpecialties[skill];
                if(canGainBaseSkill(skill)){
                    specialties = ["<!>Increase " + skill + " skill"].concat(specialties);
                }
                pickOption(specialties,prompt + " Choose a specialized "+skill+" knowledge.",function(x){ proceed(x); },true)
            }else{proceed(undefined);}
            function proceed(chosenKnowledge){
                var remarks = gainSkillOrKnowledge(skill,chosenKnowledge,false, prompt);
                callback(prompt + " " + remarks);
            }
        }
        
    }
    function gainLanguage(language,isEducation){
        var remarks = "";
        if(isEducation){
            if(skills[ENUM_SKILLS.Language].Knowledge[language]){
                var currentLevel = skills[ENUM_SKILLS.Language].Knowledge[language];
                if(language === getNativeLanguage()){
                    currentLevel = getNativeLanguageLevel();
                }
                if(currentLevel < 14){
                    skills[ENUM_SKILLS.Language].Knowledge[language] += 2;
                    remarks = "Gained Language(" + language + ")-" + skills[ENUM_SKILLS.Language].Knowledge[language];
                }else if(currentLevel == 14){
                    skills[ENUM_SKILLS.Language].Knowledge[language] += 1;
                    remarks = "Gained Language(" + language + ")-" + skills[ENUM_SKILLS.Language].Knowledge[language];
                }else if(currentLevel >= 15){
                    remarks = "Language(" + language + ") cannot be increased further."
                }
            }else{
                skills[ENUM_SKILLS.Language].Knowledge[language] = 2;
                remarks = "Gained Language(" + language + ")-" + skills[ENUM_SKILLS.Language].Knowledge[language];
            }
        }else{
            if(language === nativeLanguage){
                remarks += "Cannot increase native language except through education.";
            }else{
                var nativeLanguageLevel = getNativeLanguageLevel();
                languageReceipts += 1;
                if(skills[ENUM_SKILLS.Language].Knowledge[language] && skills[ENUM_SKILLS.Language].Knowledge[language] < nativeLanguageLevel){
                    skills[ENUM_SKILLS.Language].Knowledge[language] +=1;
                    remarks = "Gained Language(" + language + ")-" + skills[ENUM_SKILLS.Language].Knowledge[language];
                }else if(skills[ENUM_SKILLS.Language].Knowledge[language] && skills[ENUM_SKILLS.Language].Knowledge[language]>= nativeLanguageLevel){
                    remarks = "Language("+language+") cannot be increased further.";
                }else{
                    skills[ENUM_SKILLS.Language].Knowledge[language] = nativeLanguageLevel-languageReceipts;
                    remarks = "Gained Language(" + language + ")-" + skills[ENUM_SKILLS.Language].Knowledge[language];
                }
            }
        }
        //record(remarks);
        return remarks;
    }
    function getNativeLanguageLevel(){
        var nativeLanguageSkill = characteristics[3].value;
        if(species.Characteristics[4].name == ENUM_CHARACTERISTICS.EDU && characteristics[4].value > characteristics[3].value){
            nativeLanguageSkill = characteristics[4].value;
        }
        nativeLanguageSkill += skills[MasterSkills.Language].Knowledge[nativeLanguage];
        nativeLanguageSkill = Math.min(nativeLanguageSkill,15);
        return nativeLanguageSkill;
    }
    function ED5(){
        var remarks = "";
        if(characteristics[4].name != ENUM_CHARACTERISTICS.EDU){
            remarks += "Character is ineligible for the ED5 program due to having " + characteristics[4].name + " instead of " + ENUM_CHARACTERISTICS.EDU+". ";
        }else if(characteristics[4].value >= 5){
            remarks += "Character is ineligible for the ED5 program due to having Education 5+.";
        }else{
            remarks += "ED5 Program to raise Edu from " + characteristics[4].value + " ";
            var result = checkCharacteristic(ENUM_CHARACTERISTICS.INT,2,0);
            if(result.success){ 
                characteristics[4].value = 5; 
                remarks += "to 5 succeeded! ";
            }else{
               remarks += "failed. ";
            }
            remarks += result.remarks;
        }
        record(remarks);
        
        return remarks;
    }
    function promptEducationWaiver(note){
        if(typeof note === "undefined"){ note = "";}else{ note += " "}
        var remarks = "";
        var success = false;
        if(characteristics[5].value - edu_waivers >= 2){
            var useWaiver = confirm(note + "Do you want to try to use an education waiver? (Current waiver value="+(characteristics[5].value - edu_waivers)+")");
            if(useWaiver){
                var result = check(characteristics[5].value - edu_waivers,2,0,"Education Waiver vs " + (characteristics[5].value - edu_waivers))
                edu_waivers += 1;
                success = result.success;
                remarks += result.remarks;
               record(note + remarks);
            }else{
                success = false;
                remarks = " Declined to try using an education waiver. ";
               record(note + remarks);
            }
        }else{
            success = false;
            remarks = " No education waivers available. ";
        }
        
        return {success:success,remarks:note + " " + remarks};
    }
    function TradeSchool(MajorSkill,MajorKnowledge){
        var newLine = "_";
        var remarks = "Trade School: " + newLine;
        if(characteristics[4].name != ENUM_CHARACTERISTICS.INS){
            var tryTradeSchool = true;
            if(characteristics[4].value < 5 || characteristics[4].name === ENUM_CHARACTERISTICS.TRA){
                tryTradeSchool = false;
                var waiverResult = promptEducationWaiver("Insufficient EDU to attend Trade School.");
                //history.push(waiverResult.remarks);
                remarks += waiverResult.remarks + newLine;
                tryTradeSchool = waiverResult.success;
            }
            if(tryTradeSchool){
                remarks += "Trade School Application: ";
                var applyResult = checkCharacteristic(ENUM_CHARACTERISTICS.INT,2,0);
                remarks +=  applyResult.remarks + newLine;
                
                if(! applyResult.success){ 
                    var applyWaiverResult = promptEducationWaiver("Failed Trade School application.");
                    remarks += applyWaiverResult.remarks + newLine;
                    applyResult.success = applyWaiverResult.success;
                }
                if(applyResult.success){
                    var intScore = characteristics[3].value;
                    var eduScore = characteristics[4].value; if(characteristics[4].name == ENUM_CHARACTERISTICS.TRA){ eduScore = eduScore/2;}
                    var passResult = checkCharacteristic(intScore > eduScore ? ENUM_CHARACTERISTICS.INT : ENUM_CHARACTERISTICS.EDU,2,0);
                    remarks += "Trade School Pass/Fail: " + passResult.remarks + newLine;
                    record("Trade School Pass/Fail: " + passResult.remarks);
                    if(passResult.success){
                        gainSkillOrKnowledge(MajorSkill,MajorKnowledge,true,"Attended trade school.");
                        remarks += gainSkillOrKnowledge(MajorSkill,MajorKnowledge,true,"Attended trade school.") + newLine;
                        addMajor(MajorSkill,MajorKnowledge);
                    }
                    remarks += advanceAge(1);
                }else{
                    remarks += advanceAge(1);
                }
            }
        }else{
            remarks = "Character is ineligible for Trade School due to having " + characteristics[4].name + " instead of " + ENUM_CHARACTERISTICS.EDU+". ";
            record(remarks);
        }
        return remarks;
    }
    function TrainingCourse(MajorSkill,MajorKnowledge){
        var newLine = "_";
        var remarks = "Training Course: " + newLine;
        if(characteristics[4].name != ENUM_CHARACTERISTICS.INS){
            var tryTradeSchool = true;
            if((characteristics[4].value < 5 && characteristics[4].name === ENUM_CHARACTERISTICS.TRA) || 
                (characteristics[4].value/2 < 5 && characteristics[4].name === ENUM_CHARACTERISTICS.EDU)){
                tryTradeSchool = false;
                var waiverResult = promptEducationWaiver("Insufficient TRA to attend Training Course.");
                //history.push(waiverResult.remarks);
                remarks += waiverResult.remarks + newLine;
                tryTradeSchool = waiverResult.success;
            }
            if(tryTradeSchool){
                remarks += "Training Course Application: ";
                var applyResult = checkCharacteristic(ENUM_CHARACTERISTICS.INT,2,0);
                remarks +=  applyResult.remarks + newLine;
                if(! applyResult.success){ 
                    var applyWaiverResult = promptEducationWaiver("Failed Training Course application.");
                    remarks += applyWaiverResult.remarks + newLine;
                    applyResult.success = applyWaiverResult.success;
                }
                if(applyResult.success){
                    var passResult = checkCharacteristic(ENUM_CHARACTERISTICS.TRA,2,0);
                    remarks += "Training Course Pass/Fail: " + passResult.remarks + newLine;
                    record("Training Course Pass/Fail: " + passResult.remarks);
                    if(passResult.success){
                        gainSkillOrKnowledge(MajorSkill,MajorKnowledge,true,"Attended Training Course.");
                        remarks += gainSkillOrKnowledge(MajorSkill,MajorKnowledge,true,"Attended Training Course.") + newLine;
                        addMajor(MajorSkill,MajorKnowledge);
                    }
                    remarks += advanceAge(1);
                }else{
                    remarks += advanceAge(1);
                }
            }
        }else{
            remarks = "Character is ineligible for Training Course due to having " + characteristics[4].name + " instead of " + ENUM_CHARACTERISTICS.TRA+". ";
            record(remarks);
        }
        return remarks;
    }
    function Apprenticeship(skill,knowledge){
        var newLine = "_";
        var remarks = "";
        if(age > species.getFirstYearOfStage(3)){
            remarks += "Character ineligible for apprenticeship due to having passed the age of apprenticeship ("+species.getFirstYearOfStage(3)+").";
            record(remarks);
        }else{
            var result = checkCharacteristic(ENUM_CHARACTERISTICS.TRA,2,0);
            remarks = "Apprenticeship: " + result.remarks;
            record(remarks);
            if(result.success){
                gainSkillOrKnowledge(skill,knowledge,true,"Apprenticeship.");
                gainSkillOrKnowledge(skill,knowledge,true,"Apprenticeship.");
                gainSkillOrKnowledge(skill,knowledge,true,"Apprenticeship.");
                remarks += gainSkillOrKnowledge(skill,knowledge,true,"Apprenticeship.");
            }
        }
        return remarks;
    }
    function College(MajorSkill, MajorKnowledge, MinorSkill, MinorKnowledge, log){
        var result = "College:_"+BAProgram(MajorSkill, MajorKnowledge, MinorSkill, MinorKnowledge, 5, 8, true, log, false, "College");    
        return result;
    }
    function University(MajorSkill, MajorKnowledge, MinorSkill, MinorKnowledge, log){
        var result = "University:_" +BAProgram(MajorSkill, MajorKnowledge, MinorSkill, MinorKnowledge, 7, 9, true, log, false, "University");
        return result;
    }
    function MilitaryAcademy(MajorSkill, MajorKnowledge, MinorSkill, MinorKnowledge, log){
        return ServiceAcademy(MajorSkill, MajorKnowledge, MinorSkill, MinorKnowledge, "Army", log);
    }
    function NavalAcademy(MajorSkill, MajorKnowledge, MinorSkill, MinorKnowledge, log){
        return ServiceAcademy(MajorSkill, MajorKnowledge, MinorSkill, MinorKnowledge, "Navy", log);
    }
    function ServiceAcademy(MajorSkill, MajorKnowledge, MinorSkill, MinorKnowledge, branch, log){
        return branch + " Academy:_" + BAProgram(MajorSkill, MajorKnowledge, MinorSkill, MinorKnowledge, 6, 8, false, log, branch, "Academy");
    }
    function BAProgram(MajorSkill, MajorKnowledge, MinorSkill, MinorKnowledge, MinStartEdu, MinEndEdu, offerOTC, log, commissionOnSuccess, programName){
        var newLine = "_";
        var remarks = "", notFlunked = false;
        if(characteristics[4].name != ENUM_CHARACTERISTICS.INS){
            var tryBAProgram = true;
            if(characteristics[4].value < MinStartEdu || characteristics[4].name === ENUM_CHARACTERISTICS.TRA){
                tryBAProgram = false;
                var waiverResult = promptEducationWaiver("Insufficient EDU to attend "+programName+" program.");
                remarks += waiverResult.remarks + newLine;
                tryBAProgram = waiverResult.success;
            }
            if(tryBAProgram){
                remarks += "BA Program Application: ";
                var intScore = characteristics[3].value;
                var eduScore = characteristics[4].value; if(characteristics[4].name == ENUM_CHARACTERISTICS.TRA){ eduScore = eduScore/2;}
                var applyResult = checkCharacteristic(intScore > eduScore ? ENUM_CHARACTERISTICS.INT : ENUM_CHARACTERISTICS.EDU,2,0);
                record(programName + " Application: " + applyResult.remarks);
                remarks +=  applyResult.remarks + newLine;
                if(! applyResult.success){ 
                    var applyWaiverResult = promptEducationWaiver("Failed program application.");
                    remarks += applyWaiverResult.remarks + newLine;
                    applyResult.success = applyWaiverResult.success;
                }
                if(applyResult.success){
                   record("Admitted to " + programName + " BA program.");
                    var armyCommission = false, navyCommission = false;

                    notFlunked = true;
                    var secondGain = false;
                    for(var i = 1; i <= 4 && notFlunked; i++){
                        var passResult = checkCharacteristic(intScore > eduScore ? ENUM_CHARACTERISTICS.INT : ENUM_CHARACTERISTICS.EDU,2,0);
                        remarks += "Year " + i +" Pass/Fail: " + passResult.remarks + newLine;
                       record(programName + " Year " + i +" Pass/Fail: " + passResult.remarks);
                        if(passResult.success){                          
                            if(secondGain){
                                addMinor(MinorSkill,MinorKnowledge);
                                remarks += gainSkillOrKnowledge(MinorSkill,MinorKnowledge,true,"(Minor)") + newLine;
                            }
                            secondGain = !secondGain;
                            addMajor(MajorSkill,MajorKnowledge);
                            remarks += gainSkillOrKnowledge(MajorSkill,MajorKnowledge,true,"(Major)") + newLine;
                        }else{
                            var passWaiverResult = promptEducationWaiver("Failed to pass year " + i+".");
                            remarks += passWaiverResult.remarks + newLine;
                            if(passWaiverResult.success){
                                notFlunked = true;
                            }else{ 
                                notFlunked = false;
                            }
                        }
                        remarks += advanceAge(1) + newLine;
                    }
                    if(notFlunked){
                        
                        addMajor(MajorSkill,MajorKnowledge);
                        addMinor(MinorSkill,MinorKnowledge);
                        
                        var honorsResult = checkCharacteristic(intScore > eduScore ? ENUM_CHARACTERISTICS.INT : ENUM_CHARACTERISTICS.EDU,2,0);
                        remarks += "Honors program? " + honorsResult.remarks + newLine;
                        if(honorsResult.success){
                            remarks += gainSkillOrKnowledge(MajorSkill,MajorKnowledge,true,"Graduated with Honors.") + newLine;
                        }else{
                            var honorsWaiverResult = promptEducationWaiver("Failed to achieve Honors BA.");
                            remarks += honorsWaiverResult.remarks + newLine;
                            honorsResult.success = honorsWaiverResult.success;
                        }
                        if(honorsResult.success){
                            remarks += "Attained Honors BA" + newLine; awards.push("Honors BA");
                        }else{
                            remarks += "Attained BA" + newLine; awards.push("BA");
                        }
                        var finalStatBoost = function(){
                            var remarks = "";
                            if(characteristics[4].name === ENUM_CHARACTERISTICS.EDU){
                                if(characteristics[4].value < MinEndEdu){
                                    characteristics[4].value = MinEndEdu;
                                    remarks += ENUM_CHARACTERISTICS.EDU + " increased to " + characteristics[4].value +". " + newLine;
                                   record("Graduated from " + programName + " program. " + ENUM_CHARACTERISTICS.EDU + " increased to " + characteristics[4].value)
                                }else{
                                    remarks += gainCharacteristic(ENUM_CHARACTERISTICS.EDU,1)+". " + newLine;
                                }
                            }
                            log(remarks);
                        };
                        if(offerOTC){
                            
                            var options = [];
                            options.push("None");
                            if(awards.indexOf("Army Officer1") === -1){ options.push("OTC");}
                            if(awards.indexOf("Navy Officer1") === -1 || awards.indexOf("Marine Officer1")){ options.push("NOTC");}
                            pickOption(options,"Do you wish to join OTC (Army) or NOTC (Navy)?",
                            function(choice){
                                var otc = false, notc = false, further_remarks = "";
                                if(choice === false){ choice = "None";}
                                switch(choice){
                                    case "OTC": otc = true; break;
                                    case "NOTC":  notc = true; break;
                                    case "None":
                                    default:
                                    break;
                                }
                                if(otc || notc){
                                    further_remarks += "Volunteered for " + choice +": ";
                                    var otcResult = checkCharacteristic(intScore > eduScore ? ENUM_CHARACTERISTICS.INT : ENUM_CHARACTERISTICS.EDU,2,0);
                                    record("Volunteered for " + choice+". " + otcResult.remarks);
                                    further_remarks += otcResult.remarks + newLine;
                                    if(!otcResult.success){
                                        var otcWaiverResult = promptEducationWaiver("Failed " + choice + " training course.");
                                        further_remarks += otcWaiverResult.remarks + newLine;
                                        otcResult.success = otcWaiverResult.success;
                                        if(otcResult.success){
                                            if(choice === "OTC"){
                                                armyCommission = true;
                                            }else{
                                                navyCommission = true;
                                            }
                                        }
                                    }else{
                                        var otc_skill_list = []
                                        if(otc){
                                            armyCommission = true;
                                            otc_skill_list = SoldierSkills;
                                        }else if(notc){
                                            navyCommission = true;
                                            otc_skill_list = StarshipSkills;
                                        }
                                        pickOption(otc_skill_list,"Please choose a " + (otc ? "Soldier" : "Starship") + " skill.",
                                            function(new_skill){
                                                var even_further_remarks = "";
                                                if(KnowledgeSpecialties[new_skill]){
                                                    pickOption(KnowledgeSpecialties[new_skill],"Please choose a knowledge from this list.",function(new_knowledge){
                                                        log(gainSkillOrKnowledge(new_skill,new_knowledge,true, "("+choice + ")"));
                                                        if(navyCommission){ 
                                                            pickOption(["Navy","Marine"],"Choose a service.",function(service_choice){
                                                            awards.push(service_choice + " Officer1");
                                                            awards.push(service_choice + " Reserves");
                                                        record("Earned " + service_choice + " Commission ("+service_choice+" Officer1).");
                                                            log("Earned " + service_choice + " Commission ("+service_choice+" Officer1).");
                                                            },true);
                                                        }
                                                    },true);
                                                }else{
                                                    if(navyCommission){ 
                                                        pickOption(["Navy","Marine"],"Choose a service.",function(service_choice){
                                                        awards.push(service_choice + " Officer1");
                                                        awards.push(service_choice + " Reserves");
                                                    record("Earned " + service_choice + " Commission ("+service_choice+" Officer1).")
                                                        log("Earned " + service_choice + " Commission ("+service_choice+" Officer1).");
                                                        },true);
                                                    }
                                                    even_further_remarks += gainSkillOrKnowledge(new_skill,undefined,true,"("+choice +")") + newLine;
                                                    log(even_further_remarks);
                                                }
                                            },true);
                                    }
                                    if(armyCommission){ 
                                        awards.push("Army Officer1");
                                        awards.push("Army Reserves");
                                        further_remarks += "Earned Army commission (Army Officer1).";
                                       record("Earned Army commission (Army Officer1).");
                                    }
                                    
                                    log(further_remarks);
                                }else{
                                    further_remarks += "Declined to volunteer for OTC/NOTC.";
                                    log(further_remarks);
                                }
                                finalStatBoost();
                            },true);
                            
                        }else{
                            finalStatBoost();
                        }
                        if(commissionOnSuccess){
                            if(commissionOnSuccess === "Army"){
                                    awards.push("Army Officer1");
                                    awards.push("Army Reserves");
                                    remarks += "Earned Army commission (Army Officer1).";
                                    record("Earned Army commission (Army Officer1).");
                            }else if(commissionOnSuccess === "Navy"){ 
                                pickOption(["Navy","Marine"],"Choose a service.",function(service_choice){
                                    awards.push(service_choice + " Officer1");
                                    awards.push(service_choice + " Reserves");
                                    record("Earned " + service_choice + " Commission ("+service_choice+" Officer1).");
                                    log("Earned " + service_choice + " Commission ("+service_choice+" Officer1).");
                                });
                            }
                        }
                    }
                    
                }else{
                    remarks += advanceAge(1);
                }
            }
        }else{
            remarks = "Character is ineligible for higher education due to having " + characteristics[4].name + " instead of " + ENUM_CHARACTERISTICS.EDU+". ";
            record(remarks);
        }
        return remarks;
    }
    function Masters(MajorSkill,MajorKnowledge,MinorSkill,MinorKnowledge){
        var remarks = "", newLine = "_", notFlunked = false;
        var hasBA = awards.indexOf("BA") >= 0 || awards.indexOf("Honors BA") >= 0;
        if(!hasBA){
            remarks += "Character is ineligible for MA program without having earned a BA.";
            record(remarks);
        }else{
            remarks += "MA Program Application: ";
            var intScore = characteristics[3].value;
            var eduScore = characteristics[4].value; if(characteristics[4].name == ENUM_CHARACTERISTICS.TRA){ eduScore = eduScore/2;}
            var applyResult = checkCharacteristic(intScore > eduScore ? ENUM_CHARACTERISTICS.INT : ENUM_CHARACTERISTICS.EDU,2,0);
            record("Masters program application: " + applyResult.remarks);
            remarks +=  applyResult.remarks + newLine;
            if(! applyResult.success){ 
                var applyWaiverResult = promptEducationWaiver("Failed program application.");
                remarks += applyWaiverResult.remarks + newLine;
                applyResult.success = applyWaiverResult.success;
            }
            if(applyResult.success){
                record("Admitted to Masters program.");
                notFlunked = true;
                var secondGain = false;
                for(var i = 1; i <= 2 && notFlunked; i++){
                    var passResult = checkCharacteristic(intScore > eduScore ? ENUM_CHARACTERISTICS.INT : ENUM_CHARACTERISTICS.EDU,2,0);
                    remarks += "Year " + i +" Pass/Fail: " + passResult.remarks + newLine;
                    if(passResult.success){                          
                        if(secondGain){
                            remarks += gainSkillOrKnowledge(MinorSkill,MinorKnowledge,true) + newLine;
                            addMinor(MinorSkill,MinorKnowledge);
                        }
                        secondGain = !secondGain;
                        addMajor(MajorSkill,MajorKnowledge);
                        remarks += gainSkillOrKnowledge(MajorSkill,MajorKnowledge,true) + newLine;
                    }else{
                        var passWaiverResult = promptEducationWaiver("Failed to pass year " + i+".");
                        remarks += passWaiverResult.remarks + newLine;
                        if(passWaiverResult.success){
                            notFlunked = true;
                        }else{ 
                            notFlunked = false;
                        }
                    }
                    remarks += advanceAge(1) + newLine;
                }
                if(notFlunked){
                    addMajor(MajorSkill, MajorKnowledge);
                    addMinor(MinorSkill,MinorKnowledge);
                    var honorsResult = checkCharacteristic(intScore > eduScore ? ENUM_CHARACTERISTICS.INT : ENUM_CHARACTERISTICS.EDU,2,0);
                    remarks += "Honors program? " + honorsResult.remarks + newLine;
                    if(honorsResult.success){
                        remarks += gainSkillOrKnowledge(MajorSkill,MajorKnowledge,true,"Graduated with Honors.") + newLine;
                    }else{
                        var honorsWaiverResult = promptEducationWaiver("Failed to achieve Honors MA.");
                        remarks += honorsWaiverResult.remarks + newLine;
                        honorsResult.success = honorsWaiverResult.success;
                    }
                    if(honorsResult.success){
                        remarks += "Attained Honors MA" + newLine;; awards.push("Honors MA");
                    }else{
                        remarks += "Attained MA" + newLine;; awards.push("MA");
                    }
                    if(characteristics[4].name === ENUM_CHARACTERISTICS.EDU){
                        if(characteristics[4].value < 9){
                            characteristics[4].value = 9;
                            remarks += ENUM_CHARACTERISTICS.EDU + " increased to " + characteristics[4].value;
                        }else{
                            remarks += gainCharacteristic(ENUM_CHARACTERISTICS.EDU,1);
                        }
                    }
                }
            }
        }
        return remarks;
    }
    function Professors(MajorSkill,MajorKnowledge,MinorSkill,MinorKnowledge){
        var remarks = "", newLine = "_", notFlunked = false;
        var hasBA = awards.indexOf("MA") >= 0 || awards.indexOf("Honors MA") >= 0;
        if(!hasBA){
            remarks += "Character is ineligible for Professor program without having earned an MA.";
            record(remarks);
        }else{
            remarks += "Professor Program Application: ";
            var intScore = characteristics[3].value;
            var eduScore = characteristics[4].value; if(characteristics[4].name == ENUM_CHARACTERISTICS.TRA){ eduScore = eduScore/2;}
            var applyResult = checkCharacteristic(intScore > eduScore ? ENUM_CHARACTERISTICS.INT : ENUM_CHARACTERISTICS.EDU,2,0);
            record("Professor Application: " + applyResult.remarks);
            remarks +=  applyResult.remarks + newLine;
            if(! applyResult.success){ 
                var applyWaiverResult = promptEducationWaiver("Failed program application.");
                remarks += applyWaiverResult.remarks + newLine;
                applyResult.success = applyWaiverResult.success;
            }
            if(applyResult.success){
                record("Admitted to Professors program.");
                notFlunked = true;
                var secondGain = false;
                for(var i = 1; i <= 2 && notFlunked; i++){
                    var passResult = checkCharacteristic(intScore > eduScore ? ENUM_CHARACTERISTICS.INT : ENUM_CHARACTERISTICS.EDU,2,0);
                    remarks += "Year " + i +" Pass/Fail: " + passResult.remarks + newLine;
                    if(passResult.success){                          
                        if(secondGain){
                            remarks += gainSkillOrKnowledge(MinorSkill,MinorKnowledge,true) + newLine;
                            addMinor(MinorSkill,MinorKnowledge);
                        }
                        secondGain = !secondGain;
                        addMajor(MajorSkill,MajorKnowledge);
                        remarks += gainSkillOrKnowledge(MajorSkill,MajorKnowledge,true) + newLine;
                    }else{
                        var passWaiverResult = promptEducationWaiver("Failed to pass year " + i+".");
                        remarks += passWaiverResult.remarks + newLine;
                        if(passWaiverResult.success){
                            notFlunked = true;
                        }else{ 
                            notFlunked = false;
                        }
                    }
                    remarks += advanceAge(1) + newLine;
                }
                if(notFlunked){
                    addMajor(MajorSkill,MajorKnowledge);
                    addMinor(MinorSkill,MinorKnowledge);
                    var honorsResult = checkCharacteristic(intScore > eduScore ? ENUM_CHARACTERISTICS.INT : ENUM_CHARACTERISTICS.EDU,2,0);
                    remarks += "Honors program? " + honorsResult.remarks + newLine;
                    if(honorsResult.success){
                        remarks += gainSkillOrKnowledge(MajorSkill,MajorKnowledge,true,"Graduated with Honors.") + newLine;
                    }else{
                        var honorsWaiverResult = promptEducationWaiver("Failed to achieve Honors Professorship.");
                        remarks += honorsWaiverResult.remarks + newLine;
                        honorsResult.success = honorsWaiverResult.success;
                    }
                    if(honorsResult.success){
                        remarks += "Attained Honors Professorship" + newLine;; awards.push("Honors Professor");
                    }else{
                        remarks += "Attained Professorship" + newLine;; awards.push("Professor");
                    }
                    if(characteristics[4].name === ENUM_CHARACTERISTICS.EDU){
                        if(characteristics[4].value < 12){
                            characteristics[4].value = 12;
                            remarks += ENUM_CHARACTERISTICS.EDU + " increased to " + characteristics[4].value;
                        }else{
                            remarks += gainCharacteristic(ENUM_CHARACTERISTICS.EDU,1);
                        }
                    }
                }
            }
        }
        return remarks;
    }
    function MedicalSchool(MajorSkill){
        if(typeof MajorSkill === "undefined"){ MajorSkill = ENUM_SKILLS.Medic}
        var remarks = "", newLine = "_", notFlunked = false;
        var qualifies = true;
        var hasBA = awards.indexOf("Honors BA") >= 0;
        if(!hasBA){
            qualifies = false;
            if(awards.indexOf("BA") >= 0){
                var qualifyWaiverResult = promptEducationWaiver("Character does not have an Honors BA.");
                remarks += qualifyWaiverResult.remarks + newLine;
                qualifies = qualifyWaiverResult.success;
            }else{
                remarks += "Character is ineligible for Medical School program without having earned an Honors BA.";
            }
            record(remarks);
        }
        if(qualifies){
            remarks += "Medical School Program Application: ";
            var intScore = characteristics[3].value;
            var eduScore = characteristics[4].value; if(characteristics[4].name == ENUM_CHARACTERISTICS.TRA){ eduScore = eduScore/2;}
            var applyResult = checkCharacteristic(intScore > eduScore ? ENUM_CHARACTERISTICS.INT : ENUM_CHARACTERISTICS.EDU,2,0);
            remarks +=  applyResult.remarks + newLine;
            record("Med School Application: " + applyResult.remarks);
            if(! applyResult.success){ 
                var applyWaiverResult = promptEducationWaiver("Failed program application.");
                remarks += applyWaiverResult.remarks + newLine;
                applyResult.success = applyWaiverResult.success;
            }
            if(applyResult.success){
                record("Admitted to Medical School.");
                notFlunked = true;
                for(var i = 1; i <= 4 && notFlunked; i++){
                    var passResult = checkCharacteristic(intScore > eduScore ? ENUM_CHARACTERISTICS.INT : ENUM_CHARACTERISTICS.EDU,2,0);
                    remarks += "Year " + i +" Pass/Fail: " + passResult.remarks + newLine;
                    record("Med School Year " + i +" Pass/Fail: " + passResult.remarks);
                    if(passResult.success){                          
                        remarks += gainSkillOrKnowledge(MajorSkill,undefined,true) + newLine;
                        addMajor(MajorSkill);
                    }else{
                        var passWaiverResult = promptEducationWaiver("Failed to pass year " + i+".");
                        remarks += passWaiverResult.remarks + newLine;
                        if(passWaiverResult.success){
                            notFlunked = true;
                        }else{ 
                            notFlunked = false;
                        }
                    }
                    remarks += advanceAge(1) + newLine;
                }
                if(notFlunked){
                    addMajor(MajorSkill);
                    var honorsResult = checkCharacteristic(intScore > eduScore ? ENUM_CHARACTERISTICS.INT : ENUM_CHARACTERISTICS.EDU,2,0);
                    remarks += "Honors program? " + honorsResult.remarks + newLine;
                    if(honorsResult.success){
                        remarks += gainSkillOrKnowledge(MajorSkill,undefined,true,"Graduated with Honors.") + newLine;
                    }else{
                        var honorsWaiverResult = promptEducationWaiver("Failed to achieve Honors Doctor degree.");
                        remarks += honorsWaiverResult.remarks + newLine;
                        honorsResult.success = honorsWaiverResult.success;
                    }
                    if(honorsResult.success){
                        remarks += "Attained Honors Doctor" + newLine;; awards.push("Honors Doctor");
                    }else{
                        remarks += "Attained Doctor" + newLine; awards.push("Doctor");
                    }
                    if(characteristics[4].name === ENUM_CHARACTERISTICS.EDU){
                        if(characteristics[4].value < 10){
                            characteristics[4].value = 10;
                            remarks += ENUM_CHARACTERISTICS.EDU + " increased to " + characteristics[4].value;
                        }else{
                            remarks += gainCharacteristic(ENUM_CHARACTERISTICS.EDU,1);
                        }
                    }
                }
            }else{
                remarks += advanceAge(1) + newLine;
            }
        }
        return remarks;
    }
    function LawSchool(MajorSkill){
        if(typeof MajorSkill === "undefined"){ MajorSkill = ENUM_SKILLS.Advocate}
        var remarks = "", newLine = "_", notFlunked = false;
        var qualifies = true;
        var hasBA = awards.indexOf("Honors BA") >= 0;
        if(!hasBA){
            qualifies = false;
            if(awards.indexOf("BA") >= 0){
                var qualifyWaiverResult = promptEducationWaiver("Character does not have an Honors BA.");
                remarks += qualifyWaiverResult.remarks + newLine;
                qualifies = qualifyWaiverResult.success;
            }else{
                remarks += "Character is ineligible for Law School program without having earned an Honors BA.";
            }
            record(remarks);
        }
        if(qualifies){
            remarks += "Law School Program Application: ";
            var intScore = characteristics[3].value;
            var eduScore = characteristics[4].value; if(characteristics[4].name == ENUM_CHARACTERISTICS.TRA){ eduScore = eduScore/2;}
            var applyResult = checkCharacteristic(intScore > eduScore ? ENUM_CHARACTERISTICS.INT : ENUM_CHARACTERISTICS.EDU,2,0);
            remarks +=  applyResult.remarks + newLine;
            record("Law School Application: " + applyResult.remarks);
            if(! applyResult.success){ 
                var applyWaiverResult = promptEducationWaiver("Failed program application.");
                remarks += applyWaiverResult.remarks + newLine;
                applyResult.success = applyWaiverResult.success;
            }
            if(applyResult.success){
                notFlunked = true;
                record("Admitted to Law School.");
                for(var i = 1; i <= 2 && notFlunked; i++){
                    var passResult = checkCharacteristic(intScore > eduScore ? ENUM_CHARACTERISTICS.INT : ENUM_CHARACTERISTICS.EDU,2,0);
                    remarks += "Year " + i +" Pass/Fail: " + passResult.remarks + newLine;
                    record("Law School Year " + i +" Pass/Fail: " + passResult.remarks);
                    if(passResult.success){                
                        addMajor(MajorSkill);          
                        remarks += gainSkillOrKnowledge(MajorSkill,undefined,true) + newLine;
                    }else{
                        var passWaiverResult = promptEducationWaiver("Failed to pass year " + i+".");
                        remarks += passWaiverResult.remarks + newLine;
                        if(passWaiverResult.success){
                            notFlunked = true;
                        }else{ 
                            notFlunked = false;
                        }
                    }
                    remarks += advanceAge(1) + newLine;
                }
                if(notFlunked){
                    addMajor(MajorSkill);
                    var honorsResult = checkCharacteristic(intScore > eduScore ? ENUM_CHARACTERISTICS.INT : ENUM_CHARACTERISTICS.EDU,2,0);
                    remarks += "Honors program? " + honorsResult.remarks + newLine;
                    if(honorsResult.success){
                        remarks += gainSkillOrKnowledge(MajorSkill,undefined,true,"Graduated with Honors.") + newLine;
                    }else{
                        var honorsWaiverResult = promptEducationWaiver("Failed to achieve Honors Attorney degree.");
                        remarks += honorsWaiverResult.remarks + newLine;
                        honorsResult.success = honorsWaiverResult.success;
                    }
                    if(honorsResult.success){
                        remarks += "Attained Honors Attorney" + newLine;; awards.push("Honors Attorney");
                    }else{
                        remarks += "Attained Attorney" + newLine;; awards.push("Attorney");
                    }
                    if(characteristics[4].name === ENUM_CHARACTERISTICS.EDU){
                        if(characteristics[4].value < 10){
                            characteristics[4].value = 10;
                            remarks += ENUM_CHARACTERISTICS.EDU + " increased to " + characteristics[4].value;
                        }else{
                            remarks += gainCharacteristic(ENUM_CHARACTERISTICS.EDU,1);
                        }
                    }
                }
            }else{
                remarks += advanceAge(1) + newLine;
            }
        }
        return remarks;
    }
    
    function resolveCareer(career,callback){
        switch(career){
            case ENUM_CAREERS.Craftsman: resolveCraftsman(career,callback); break;
            case ENUM_CAREERS.Scholar: resolveScholar(career,callback); break;
            case ENUM_CAREERS.Entertainer: resolveEntertainer(career,callback); break;
            case ENUM_CAREERS.Citizen: resolveCitizen(career,callback); break;
            case ENUM_CAREERS.Scout: resolveScout(career,callback); break;
            case ENUM_CAREERS.Merchant: resolveMerchant(career,callback); break;
            case ENUM_CAREERS.Spacer: resolveSpacer(career,callback); break;
            case ENUM_CAREERS.Soldier: resolveSoldier(career,callback); break;
            case ENUM_CAREERS.Agent: resolveAgent(career,callback); break;
            case ENUM_CAREERS.Rogue: resolveRogue(career,callback); break;
            case ENUM_CAREERS.Noble: resolveNoble(career,callback); break;
            case ENUM_CAREERS.Marine: resolveMarine(career,callback); break;
            case ENUM_CAREERS.Functionary: resolveFunctionary(career,callback); break;
        }
    }
    function gainCitizenLifeSkills(isJob, skill, knowledge, updateFunc, callback){
        if(isJob){
            job.skill = skill;
            job.knowledge = knowledge;
            lastCitLifeReceipt = "Job";
        }else{
            hobby.skill = skill;
            hobby.knowledge = knowledge;
            lastCitLifeReceipt = "Hobby";
        }
        if(typeof skill === "undefined"){
            record("No skills acquired from useless " + lastCitLifeReceipt);
            updateFunc();
        }else{
            if(typeof knowledge === "undefined" && KnowledgeSpecialties[skill]){
                pickOption(KnowledgeSpecialties[skill],"Choose a "+skill+" specialty",(k)=>{
                    var remark = "(Citizen Life "+lastCitLifeReceipt +")";
                    gainSkillOrKnowledge(skill,k,false,remark);
                    gainSkillOrKnowledge(skill,k,false,remark);
                    if(isJob){
                        gainSkillOrKnowledge(skill,k,false,remark);
                        gainSkillOrKnowledge(skill,k,false,remark);
                    }
                    updateFunc();
                    callback();
                },true);
            }else{
                var remark = "(Citizen Life "+lastCitLifeReceipt +")";
                gainSkillOrKnowledge(skill,knowledge,false,remark);
                gainSkillOrKnowledge(skill,knowledge,false,remark);
                if(isJob){
                    gainSkillOrKnowledge(skill,knowledge,false,remark);
                    gainSkillOrKnowledge(skill,knowledge,false,remark);
                }
                callback();
                updateFunc();
            }
        }
    }
    
    function gainTermSkills(num,career,updateFunc,callback){
        var tables = CareerSkillTables[career];
        if(num > 0){
            num -=1;
            function nextSteps(n){
                updateFunc();
                setTimeout(()=>{gainTermSkills(n,career,updateFunc,callback);},0);
            };
            pickOption(tables.Tables,"Choose a skill table ("+(num+1)+" picks remaining):",(table)=>{
                var newSkill = tables[table][roller.d6().result-1];
                //record(table + ": " + newSkill); updateFunc();
                var note = "("+table + ": " + newSkill+")";
                if(table === "Personal"){
                    var index = +(newSkill.substring(1))-1;
                    gainCharacteristic(index,1,note);
                    nextSteps(num);
                }else if(newSkill === "Major"){
                    if(majors.length > 0){
                        var getDegreeLabel = (x,i,ar)=>{return x.label;};
                        var choices = removeDuplicates(majors.map(getDegreeLabel));
                        pickOption(choices,"You can increase a Major",(choice)=>{
                            var skill, knowledge;
                            for(var i = 0, len = majors.length; i < len; i++){
                                if(majors[i].label == choice){
                                    skill = majors[i].skill, knowledge = majors[i].knowledge;
                                    break;
                                }
                            }
                            gainSkillOrKnowledge(skill,knowledge,false,note);
                            nextSteps(num);
                        },true);
                    }else{
                        record("Academic: You do not have a major; no skill increased.");
                        nextSteps(num);
                    }
                }else if(newSkill === "Minor"){
                    if(minors.length > 0){
                        var getDegreeLabel = (x,i,ar)=>{return x.label;};
                        var choices = removeDuplicates(minors.map(getDegreeLabel));
                        pickOption(choices,"You can increase a Minor",(choice)=>{
                            var skill, knowledge;                           
                            for(var i = 0, len = minors.length; i < len; i++){
                                if(minors[i].label == choice){
                                    skill = minors[i].skill, knowledge = minors[i].knowledge;
                                    break;
                                }
                            }
                            gainSkillOrKnowledge(skill,knowledge,false,note);
                            nextSteps(num);
                        },true);
                    }else{
                        record("Academic: You do not have a minor; no skill increased.");
                        nextSteps(num);
                    }
                }else if(newSkill === "One Trade"){
                    (function(num){
                        gainSkillWithPromptForCategory(note,"TRADE",()=>{nextSteps(num);});
                    })(num);
                }else if(newSkill === "One Art"){
                    (function(num){
                        gainSkillWithPromptForCategory(note,"ART",()=>{nextSteps(num);});
                    })(num);
                }else if(newSkill === "One Science"){
                    (function(num){
                    pickOption(KnowledgeSpecialties[ENUM_SKILLS.Science],"Choose a science knowledge",(choice)=>{
                        gainSkillOrKnowledge(ENUM_SKILLS.Science,choice,false,note);
                        nextSteps(num);
                    },true);})(num);
                }else if(newSkill === "Soldier Skill"){
                    (function(num){
                        gainSkillWithPromptForCategory(note,"SOLDIER",()=>{nextSteps(num);});
                    })(num);
                }else if(newSkill === "Starship Skill"){
                    (function(num){
                    gainSkillWithPromptForCategory(note,"SHIP",()=>{nextSteps(num);});
                    })(num);
                }else if(newSkill === "Any Knowledge"){
                    record("Would gain "+newSkill+" from " + table + " here.");
                    nextSteps(num);
                }else if(newSkill === "Capital"){ // noble
                    // world knowledge of world of highest held noble land grant, value = 1D
                    record("Would gain "+newSkill+" from " + table + " here.");
                    nextSteps(num);
                }else if(newSkill === "Any Skill"){ // functionary
                    // any skill from citizen life skills and knowledges
                    record("Would gain "+newSkill+" from " + table + " here.");
                    nextSteps(num);
                }else{
                    gainSkillWithPromptForKnowledge(note,newSkill,()=>{nextSteps(num);});
                    // if(KnowledgeSpecialties[newSkill]){
                    //     (function(num){
                    //         pickOption(KnowledgeSpecialties[newSkill],"Choose a "+newSkill+" knowledge.",(k)=>{
                    //             gainSkillOrKnowledge(newSkill,k,false,note);
                    //             nextSteps(num);
                    //         },true);
                    //     })(num);
                    // }else{
                    //     gainSkillOrKnowledge(newSkill,undefined,false,note);
                    //     nextSteps(num);
                    // }
                    
                }                
                
            },true);
        }else{
            updateFunc();
            setTimeout(callback,0);
        }
    }
    function promptContinue(career,updateFunc){
        //var switchCareer = confirm("Do you want to switch from "+career+" to a different career?");
        pickOption(["Continue or Muster Out","Switch to a new career"],"Completed " + careers[careers.length-1].terms + " term"+(careers[careers.length-1].terms == 1 ? "":"s")+" as a " + career+".<br/>Do you want to switch to "+career+" to a different career?",(switchCareerChoice)=>{
            var switchCareer = switchCareerChoice === "Switch to a new career";
            if(!switchCareer){
                // steps to try continuing
                var continueResult = roller.d6(2);
                if(continueResult.result === 2){
                    if(species.getLifeStageFromAge(age) < 9 && 
                        (awards.indexOf("Army Reserves") >= 0 || awards.indexOf("Navy Reserves") >= 0 || awards.indexOf("Marine Reserves") >= 0 ) &&
                        [ENUM_CAREERS.Soldier,ENUM_CAREERS.Spacer,ENUM_CAREERS.Marine].indexOf(career) == -1
                    ){
                        var reserves = [];
                        for(var i = 0, len = awards.length; i < len; i++){
                            var award = awards[i];
                            if(award === "Army Reserves"){
                                reserves.push({career:ENUM_CAREERS.Soldier,reserves:award});
                            }else if(award === "Navy Reserves"){
                                reserves.push({career:ENUM_CAREERS.Spacer,reserves:award});
                            }else if(award === "Marine Reserves"){
                                reserves.push({career:ENUM_CAREERS.Marine,reserves:award});
                            }
                        }
                        var reserve = reserves[(roller.random() * reserves.length) >>> 0];
                        record("Called up by the " + reserve.reserves+ "!");
                        updateFunc();
                        musterOut(career,
                            updateFunc,
                            ()=>{
                                updateFunc();
                                resolveCareer(reserve.career,updateFunc);
                            });
                    }else{
                        record("Continuation is mandatory for this term.");
                        updateFunc();
                        resolveCareer(career,updateFunc);
                    }
                }else{
                    var passedContinueRoll = false;          
                    switch(career){
                        case ENUM_CAREERS.Citizen:
                            passedContinueRoll = continueResult.result <= 10
                            record("Continue as Citizen: [" + continueResult.rolls.join(",") + "] < 10 ? " + (passedContinueRoll ? "PASS":"FAIL"));
                            updateFunc();
                        break;
                    }
                    if(passedContinueRoll){
                        pickOption(["Continue with this career","Start adventuring"],"Continue Roll was successful. <br/> Do wish to continue this career or start adventuring?",(choice)=>{
                            if(choice === "Continue with this career"){
                                resolveCareer(career,updateFunc);
                            }else{
                                record("Chose to muster out and begin adventuring.");
                                updateFunc();
                                musterOut(career,updateFunc);
                            }
                        },true);
                    }else{
                        record("Failed Continue roll. Begin adventuring.")
                        updateFunc();
                        musterOut(career,updateFunc);
                    }
                }
            }else{
                musterOut(career,updateFunc);
            }
        },true);               
    }
    function musterOut(career, updateFunc, callback){
        record("Mustered out of " + career + " career.");
        careers[careers.length-1].active = false;
        if(typeof callback === "undefined"){ callback = ()=>{};}

        // 
        updateFunc();
        callback();
    }
    function resolveCitizen(career,updateFunc){
        var priorCareers = careers.length;
        if(priorCareers > 0 && careers[priorCareers - 1].career !== career){
            record("Cannot transfer to Citizen career from another career.")
            updateFunc();
        }else{
            if(CCs.length == 0 || priorCareers == 0 || careers[priorCareers - 1].active == false){
                CCs = getCCs(career);
            }
            var nextSteps = function(){
                advanceAge(4);
                updateFunc();
                gainTermSkills(4,ENUM_CAREERS.Citizen,updateFunc,()=>{
                    updateFunc(); 
                    promptContinue(ENUM_CAREERS.Citizen,updateFunc);
                });
            };
            pickOption(CCs,"Choose a controlling characteristic for the term.",function(selectedCC){
                if(priorCareers == 0 || careers[priorCareers - 1].active == false){
                    careers.push({career:career,terms:1,active:true});
                }else{
                    careers[careers.length-1].terms += 1;
                }
                updateFunc();
                var termNumber = careers[careers.length-1].terms;
                CCs.splice(CCs.indexOf(selectedCC),1);
                record("Chose " + selectedCC + " as controlling characteristic for Term #"+termNumber+". Choices remaining: " + CCs.join(","));
                updateFunc();
                var ccIndex = +(selectedCC.substring(1))-1;
                var numDice = species.Characteristics[ccIndex].nD + gender.Characteristics[ccIndex].nD + caste.Characteristics[ccIndex].nD;
                var citLifeResult = checkCharacteristic(selectedCC,numDice,0,"Citizen Life vs "+selectedCC);
                record(citLifeResult.remarks);
                updateFunc();
                if(citLifeResult.success){
                    if(typeof job.skill == "undefined" || typeof hobby.skill == "undefined"){ // gain job-4 or hobby-2
                        
                        if(majors.length > 0){
                            // chance to select job/hobby
                            var getDegreeLabel = (x,i,ar)=>{return x.label;};
                            var chooseJobResult = checkCharacteristic(ENUM_CHARACTERISTICS.EDU,species.Characteristics[4].nD + gender.Characteristics[4].nD + caste.Characteristics[4].nD,0,"Select a job vs EDU");
                            record(chooseJobResult.remarks); updateFunc();
                            if(chooseJobResult.success){
                                var choices = removeDuplicates(majors.map(getDegreeLabel).concat(minors.map(getDegreeLabel)));
                                choices.push("Roll Randomly");
                                var isJob = typeof job.skill == "undefined";
                                pickOption(choices,"You may choose a "+(isJob ? "job" : "hobby")+" from your majors and minors.",function(chosenJob){
                                    var skill = "", knowledge = "";
                                    if(chosenJob == "Roll Randomly"){
                                        var randomJob = citizenLifeJob(roller);
                                        record("Roll for Citizen Skill/Knowledge: " + randomJob.rolls);
                                        updateFunc();
                                        skill = randomJob.job.skill, knowledge = randomJob.job.knowledge;
                                    }else{
                                        var degrees = majors.concat(minors);
                                        for(var i = 0, len = degrees.length; i < len; i++){
                                            if(degrees[i].label == chosenJob){
                                                skill = degrees[i].skill, knowledge = degrees[i].knowledge;
                                                break;
                                                
                                            }
                                        }
                                    }
                                    gainCitizenLifeSkills(isJob,skill,knowledge,updateFunc,nextSteps);
                                    
                                },true);
                            }else{
                                // roll randomly for job/hobby
                                var skill = "", knowledge = "";
                                var isJob = typeof job.skill == "undefined";
                                var randomJob = citizenLifeJob(roller);
                                record("Roll for Citizen Skill/Knowledge: " + randomJob.rolls);
                                updateFunc();
                                skill = randomJob.job.skill, knowledge = randomJob.job.knowledge;
                                gainCitizenLifeSkills(isJob,skill,knowledge,updateFunc,nextSteps);
                            }
                        }else{
                            // roll randomly for job/hobby
                            var skill = "", knowledge = "";
                            var isJob = typeof job.skill == "undefined";
                            var randomJob = citizenLifeJob(roller);
                            record("Roll for Citizen Skill/Knowledge: " + randomJob.rolls);
                            updateFunc();
                            skill = randomJob.job.skill, knowledge = randomJob.job.knowledge;
                            gainCitizenLifeSkills(isJob,skill,knowledge,updateFunc,nextSteps);
                        }
                    }else{ // increase job/hobby by 1
                        if(lastCitLifeReceipt == "Job"){
                            lastCitLifeReceipt = "Hobby";
                            if(typeof hobby.skill === "undefined"){
                                record("No skills acquired from useless hobby");
                                nextSteps();
                            }else{
                                if(typeof hobby.knowledge === "undefined" && KnowledgeSpecialties[hobby.skill]){
                                    pickOption(KnowledgeSpecialties[hobby.skill],"Choose a "+hobby.skill+" specialty",(k)=>{
                                        var remark = "(Citizen Life "+lastCitLifeReceipt +")";
                                        gainSkillOrKnowledge(hobby.skill,k,false,remark);
                                        nextSteps();
                                    },true);
                                }else{
                                    var remark = "(Citizen Life "+lastCitLifeReceipt +")";
                                    gainSkillOrKnowledge(hobby.skill,hobby.knowledge,false, remark);
                                    nextSteps();
                                }
                            }
                        }else{
                            lastCitLifeReceipt = "Job";
                            if(typeof job.skill === "undefined"){
                                record("No skills acquired from useless job");
                                nextSteps();
                            }else{
                                if(typeof job.knowledge === "undefined" && KnowledgeSpecialties[job.skill]){
                                    pickOption(KnowledgeSpecialties[job.skill],"Choose a "+job.skill+" specialty",(k)=>{
                                        var remark = "(Citizen Life "+lastCitLifeReceipt +")";
                                        gainSkillOrKnowledge(job.skill,k,false,remark);
                                        updateFunc();
                                        nextSteps();
                                    },true);
                                }else{
                                    var remark = "(Citizen Life "+lastCitLifeReceipt +")";
                                    gainSkillOrKnowledge(job.skill,job.knowledge,false,remark);
                                    updateFunc();
                                    nextSteps();
                                }
                            }
                        }
                    }
                }else{
                    nextSteps();
                }
                
            },true);
        }
    }
    function removeDuplicates(arr){
        arr.sort();
        var i = 0;
        while(i < arr.length){
            if(i > 0 && arr[i] == arr[i-1]){
                arr.splice(i,1);
            }else{
                i+=1;
            }
        }
        return arr;
    }
    function setAge(newAge){age = newAge;}
    function getAge(){return age;}
    function getGenetics(){ return genetics; }
    function getNativeLanguage(){ return nativeLanguage;}
    function setNativeLanguage(newLanguage){
        var nativeLanguageValue = skills[ENUM_SKILLS.Language].Knowledge[nativeLanguage];
        delete skills[ENUM_SKILLS.Language].Knowledge[nativeLanguage];
        nativeLanguage = newLanguage;
        skills[ENUM_SKILLS.Language].Knowledge[nativeLanguage] = nativeLanguageValue;
        var message = "Native language = " +newLanguage;
       record(message);
        return message;
    }
    function setForcedGrowthClone(isClone){isForcedGrowthClone = isClone;}
    function setName(newName){ name = newName; }
    function getName(){ return name; }
    function check(target,difficulty,mods,remarks){
        target += mods;
        var result = 0, rolls = [];
        for(var i = 0; i < difficulty; i++){
            var roll = roller.d6(1);
            result += roll.result;
            rolls = rolls.concat(roll.rolls);
        }
        return { success: result <= target, result:result, rolls:rolls, target:target, remarks:remarks +": ["+ rolls + "] < "+target+" ? " + (result <= target ? "PASS" : "FAIL")}
    }
    function checkCharacteristic(characteristic, difficulty, mods, remarks){
        var target = 0;
        if(typeof mods === "undefined"){ mods = 0;}
        if(typeof difficulty === "undefined"){ difficulty = 2;}
        if(typeof characteristic === "number" && characteristic <= 6 && characteristic >= 1){ target = characteristics[characteristic-1].value;}
        else if(typeof characteristic === "string"){ 
            switch(characteristic){
                case "C1":
                case ENUM_CHARACTERISTICS.STR: 
                    target = characteristics[0].value; 
                    break;
                case "C2":
                    target = characteristics[1].value; 
                    break;
                case "C3":
                    target = characteristics[2].value; 
                    break;
                case "C4":
                    target = characteristics[3].value; 
                    break;
                case "C5":
                    target = characteristics[4].value; 
                    break;
                case "C6":
                    target = characteristics[5].value; 
                    break;
                case ENUM_CHARACTERISTICS.DEX: 
                    target = characteristics[1].name === ENUM_CHARACTERISTICS.DEX ? characteristics[1].value : characteristics[1].value/2; 
                    break;
                case ENUM_CHARACTERISTICS.AGI: 
                    target = characteristics[1].name === ENUM_CHARACTERISTICS.AGI ? characteristics[1].value : characteristics[1].value/2; 
                    break;
                case ENUM_CHARACTERISTICS.GRA: 
                    target = characteristics[1].name === ENUM_CHARACTERISTICS.GRA ? characteristics[1].value : characteristics[1].value/2; 
                    break;
                case ENUM_CHARACTERISTICS.END: 
                    target = characteristics[2].name === ENUM_CHARACTERISTICS.END ? characteristics[2].value : characteristics[2].value/2; 
                    break;
                case ENUM_CHARACTERISTICS.STA: 
                    target = characteristics[2].name === ENUM_CHARACTERISTICS.STA ? characteristics[2].value : characteristics[2].value/2; 
                    break;
                case ENUM_CHARACTERISTICS.VIG: 
                    target = characteristics[2].name === ENUM_CHARACTERISTICS.VIG ? characteristics[2].value : characteristics[2].value/2; 
                    break;
                case ENUM_CHARACTERISTICS.INT: 
                    target = characteristics[3].value; 
                    break;
                case ENUM_CHARACTERISTICS.EDU: 
                    switch(characteristics[4].name){
                        case ENUM_CHARACTERISTICS.EDU: target = characteristics[4].value; break;
                        case ENUM_CHARACTERISTICS.TRA: target = characteristics[4].value/2; break;
                        case ENUM_CHARACTERISTICS.INS: target = 4; break;
                    }
                    break;
                case ENUM_CHARACTERISTICS.TRA: 
                switch(characteristics[4].name){
                    case ENUM_CHARACTERISTICS.EDU: target = characteristics[4].value/2; break;
                    case ENUM_CHARACTERISTICS.TRA: target = characteristics[4].value; break;
                    case ENUM_CHARACTERISTICS.INS: target = 4; break;
                }
                break;
                case ENUM_CHARACTERISTICS.INS: 
                    switch(characteristics[4].name){
                        case ENUM_CHARACTERISTICS.INS: target = characteristics[4].value; break;
                        case ENUM_CHARACTERISTICS.TRA: target = 4; break;
                        case ENUM_CHARACTERISTICS.EDU: target = 4; break;
                    }
                    break;
                case ENUM_CHARACTERISTICS.SOC: 
                    switch(characteristics[5].name){
                        case ENUM_CHARACTERISTICS.SOC: target = characteristics[5].value; break;                    
                        case ENUM_CHARACTERISTICS.CHA: target = characteristics[5].value/2; break;                    
                        case ENUM_CHARACTERISTICS.CAS: target = 4; break;                    
                    }
                    break;
                case ENUM_CHARACTERISTICS.CHA: 
                    switch(characteristics[5].name){
                        case ENUM_CHARACTERISTICS.SOC: target = characteristics[5].value; break;                    
                        case ENUM_CHARACTERISTICS.CHA: target = characteristics[5].value; break;                    
                        case ENUM_CHARACTERISTICS.CAS: target = 4; break;                    
                    }
                    break;
                case ENUM_CHARACTERISTICS.CAS: 
                    switch(characteristics[5].name){
                        case ENUM_CHARACTERISTICS.SOC: target = 4; break;                    
                        case ENUM_CHARACTERISTICS.CHA: target = 4; break;                    
                        case ENUM_CHARACTERISTICS.CAS: target = characteristics[5].value; break;                    
                    }
                    break;
            }
        }
        if(typeof remarks == "undefined"){
            remarks = difficulty + "D vs "+characteristic +" ("+target+")" + (mods > 0 ? ("+"+mods) : "");
        }
        return check(target,difficulty,mods,remarks);
    }
    function gainCharacteristic(characteristic, amount, premark){
        if(typeof amount == "undefined"){ amount = 1;}
        var index = 0;
        if(typeof characteristic === "number" && characteristic <= 6 && characteristic >= 1){ index = characteristic-1; }
        else if(typeof characteristic === "string"){
            switch(characteristic){
                case ENUM_CHARACTERISTICS.STR: 
                    index = 0; 
                    break;
                case ENUM_CHARACTERISTICS.DEX: 
                    index = 1; 
                    break;
                case ENUM_CHARACTERISTICS.AGI: 
                    index = 1; 
                    break;
                case ENUM_CHARACTERISTICS.GRA: 
                    index = 1; 
                    break;
                case ENUM_CHARACTERISTICS.END: 
                    index = 2; 
                    break;
                case ENUM_CHARACTERISTICS.STA: 
                    index = 2; 
                    break;
                case ENUM_CHARACTERISTICS.VIG: 
                    index = 2;  
                    break;
                case ENUM_CHARACTERISTICS.INT: 
                    index = 3; 
                    break;
                case ENUM_CHARACTERISTICS.EDU: 
                    index = 4; 
                    break;
                case ENUM_CHARACTERISTICS.TRA: 
                    index = 4; 
                    break;
                case ENUM_CHARACTERISTICS.INS: 
                    index = 4; 
                    break;
                case ENUM_CHARACTERISTICS.SOC: 
                    index = 5; 
                    break;
                case ENUM_CHARACTERISTICS.CHA: 
                    index = 5; 
                    break;
                case ENUM_CHARACTERISTICS.CAS: 
                    index = 5; 
                    break;
            }
        }
        var max = (species == human) ? 15 : species.Characteristics[index].nD*6+6;
        if(characteristics[index].value < max){
            characteristics[index].value += amount;
        }else{ amount = 0;}
        if(characteristics[index].value > max){
            amount = characteristics[index].value - max;
            characteristics[index].value = max;
        }
        
        var message =  (amount >= 0 ? "Increased " : "Decreased ")+ characteristics[index].name + " by " + amount;  
        if(typeof premark !== "undefined"){ message = premark + " " + message; }
       record(message);
        return message;
    }
    function decreaseCharacteristic(characteristic, amount){
        if(typeof amount == "undefined"){ amount = 1;}
        return gainCharacteristic(characteristic,-amount);
    }
    function checkCSK(characteristic, skill, knowledge, difficulty,mods,remarks){
        if(typeof remarks === "undefined"){ remarks = "";}else{ remarks += " "}
        var skillLevel = 0;
        var hasSkillOrKnowledge = false;
        if(skills[skill]){
            if(skills[skill] >= 0){
                skillLevel += skills[skill].Skill;
                hasSkillOrKnowledge = true;
            }
            if(knowledge != false){
                if(skills[skill].Knowledge[knowledge] >= 0){
                    skillLevel += skills[skill].Knowledge[knowledge];
                    hasSkillOrKnowledge = true;
                }
            }
        }
        if(
            !(hasSkillOrKnowledge) && !(skills[MasterSkills.JOT] && skills[MasterSkills.JOT].Skill > 0) // we don't have JoT
        ){
            
            remarks += "!!Character does not have the requisite skill!! "
        }
        mods += skillLevel;
        if(skills[MasterSkills.JOT]){
            skillLevel += skills[MasterSkills.JOT].Skill;
        }
        var tih = false;
        if(skillLevel < difficulty){
            difficulty += 1;
            tih = true;
        }
        remarks += difficulty + "D " + (tih ? "(TiH!) " : "" ) +"vs " + (typeof characteristic === "number" ? "C": "") + characteristic + " + " + skill;
        if(knowledge != false){ remarks += "("+knowledge+")";}
        
        return checkCharacteristic(characteristic,difficulty,mods,remarks);
    }
    function agingCheck(){
        function ageCheckCharacteristic(index){
            var result = check(stage,2,0,"Aging vs. " + characteristics[index].name);
            if(result.success){
                characteristics[index].value -= 1;
                if(characteristics[index].value === 0){
                    characteristics[index].value = 1;
                    numReducedToZero += 1;
                }
                remarks += characteristics[index].name + " reduced to " + characteristics[index].value + ". ";
            }else{
                remarks += characteristics[index].name + " OK. ";
            }
        }
        var stage = CLASS_SPECIES.getLifeStageFromAge(age);
        var numReducedToZero = 0;
        var remarks = "Aging check at age " + age + " vs life stage " + stage+": ";
        if(stage >= 9 || (isForcedGrowthClone && stage >= 8)){
            ageCheckCharacteristic(3);
            if(characteristics[4].name === ENUM_CHARACTERISTICS.INS){
                ageCheckCharacteristic(4);
            }
        }
        if(stage >= 5 || (isForcedGrowthClone && stage >= 4)){
            ageCheckCharacteristic(0);
            ageCheckCharacteristic(1);
            ageCheckCharacteristic(2);
        }else{
            remarks += " Character does not experience aging. "
        }
        if(numReducedToZero >= 3){ remarks += "Extremely major illness. Requires 4 months rest and recuperation. If 2nd time receiving this event, character has died." ;}
        else if(numReducedToZero === 2){ remarks += "Major illness. Requires 4 weeks rest and recuperation.";}
       //record(remarks);
        return remarks;
    }
    function advanceAge(numYears){
        var prefix = "Age increased from " + age;
        var remarks = "";
        if(typeof numYears === "undefined"){ numYears = 1;}
        var peakStart = species.getFirstYearOfStage( isForcedGrowthClone ? 4 : 5);
        for(var i = 0; i < numYears; i++){
            age += 1;
            if(age >= peakStart){
                if((age - peakStart) % 4 === 0){
                    remarks += agingCheck();
                }
            }
        }
        
        prefix += " to " + age + ". ";
        record(prefix + remarks);
        setAge(age);
        return prefix + remarks; 
    }
    function getAwards(){
        return awards;
    }
    function getMajors(){
        return majors;
    }
    function getMinors(){
        return minors;
    }
    function getMajorsLabels(){
        return getDegreeLabels("major");
    }
    function getMinorsLabels(){
        return getDegreeLabels("minor");
    }
    function getDegreeLabels(majorOrMinor){
        var degrees = [];
        if(majorOrMinor === "major"){ degrees = majors; }
        else if(majorOrMinor === "minor"){ degrees = minors; }
        var labels = [];
        for(var i = 0, len = degrees.length; i < len; i++){
            var label = "";
            if(typeof degrees[i].knowledge == "undefined"){
                label = degrees[i].skill;
            }else{
                label = degrees[i].skill+"("+degrees[i].knowledge+")";
            }
            degrees[i].label = label;
            labels.push(label);
        }
        return labels;
    }
    function getHistory(){
        return history;
    }
    function getCareers(){
        return careers;
    }
    return {
        isForcedGrowthClone:isForcedGrowthClone,
        gender:genderKey, characteristics:characteristics,
        skills:skills, getGenetics:getGenetics, species:species,
        setAge:setAge, getAge:getAge, getNativeLanguage:getNativeLanguage, setNativeLanguage:setNativeLanguage, getNativeLanguageLevel,
        setForcedGrowthClone:setForcedGrowthClone, rollStatsFromGenes:rollStatsFromGenes,
        getAwards:getAwards, getMajorsLabels:getMajorsLabels, getMinorsLabels:getMinorsLabels, getMajors:getMajors, getMinors:getMinors,
        checkCharacteristic:checkCharacteristic, checkCSK:checkCSK,
        gainKnowledge:gainKnowledge, gainSkill:gainSkill, gainLanguage:gainLanguage,
        gainSkillOrKnowledge: gainSkillOrKnowledge, gainSkillsFromHomeworldTradeCodes:gainSkillsFromHomeworldTradeCodes,
        gainCharacteristic:gainCharacteristic, decreaseCharacteristic:decreaseCharacteristic,
        advanceAge:advanceAge, promptEducationWaiver:promptEducationWaiver,
        Apprenticeship:Apprenticeship, ED5:ED5, TradeSchool:TradeSchool, TrainingCourse,
        College:College, University:University, Masters:Masters, 
        Professors:Professors, MedicalSchool:MedicalSchool, LawSchool:LawSchool,
        NavalAcademy:NavalAcademy, MilitaryAcademy:MilitaryAcademy,sanity, getHistory, initStats, getCharacteristics,
        resolveCareer, getCareers, getName, setName
    }
}