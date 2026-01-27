import promptSync from 'prompt-sync';

const prompt = promptSync();


// ULOHA O11:
// Napiste funkci, ktera obraci poradi prvku v poli. Smite vytvorit i nove pole. Funkce musi 
// vratit jako hondotu pole, ve kterem jsou prvky v opacnem poradi, nez byly puvodne predane 
// jako parametr.

function obratPole(texty : string[]) : string[] {
    
    let index : number = 0
    let index2 : number = 0
    let pomocna : string = ""
    let pomocna2 : string = ""

    for(index = 0; index < Math.floor((texty.length)/ 2);index++ ) {
        for(index2 = texty.length; index < Math.floor((texty.length)/ 2); index2--){
            pomocna = texty[index]
            pomocna2 = texty[index2]
            texty[index] = pomocna2
            texty[index2] = pomocna
        }
    }
    return []; // Nahradit skutecnym vysledkem
}

function testObratPole() {
    console.log(obratPole(["alfa", "beta", "gama", "delta"]));
    // vysledek: "delta", "gama", "beta", "alfa"

    console.log(obratPole(["alfa", "beta", "epsilon", "gama", "delta"]));
    // vysledek: "delta", "gama", "epsilon", "beta", "alfa"

    console.log(obratPole(["jedinacek"]));
    // vysledek: "jedinacek"

}

// ULOHA O12:
// Napiste funkci, ktera obraci poradi prvku v poli. POZOR - smite pouze prehazovat prvky
// v poli, ktere funkce dostane jako parametr.

function obratPole2(texty : string[]) {
    
    let index : number = 0
    let index2 : number = 0
    let pomocna : string = ""
    let pomocna2 : string = ""

    for(index = 0; index < Math.floor((texty.length)/ 2);index++ ) {
        for(index2 = texty.length; index < Math.floor((texty.length)/ 2); index2--){
            pomocna = texty[index]
            pomocna2 = texty[index2]
            texty[index] = pomocna2
            texty[index2] = pomocna
        }
    }
    return []; // Nahradit skutecnym vysledkem
}

function testObratPole2() {
// Testovaci data pro overeni, ze se pole obraci spravne.
    let pole : string[] = ["alfa", "beta", "gama", "delta"];
    obratPole2(pole);
    console.log(pole);

    pole = ["alfa", "beta", "epsilon", "gama", "delta"];
    console.log(pole);

    pole = ["jedinacek"];
    obratPole2(pole);
    console.log(pole);
}


// ULOHA O13:
// Napiste funkci, ktera vyuziva funkci pro vsouvani a odebirani prvku z pole.
// https://www.itnetwork.cz/javascript/zaklady/javascript-tutorial-zaciname-s-javascriptem-podminky-cykly-pole-svatky#_pridavani-prvku-do-pole
// https://www.itnetwork.cz/javascript/zaklady/javascript-tutorial-zaciname-s-javascriptem-podminky-cykly-pole-svatky#_odebirani-prvku-z-pole
// Naprogramujte funkci tak, ze bude prvky odebirat a pridavat po jednom.

/**
 * Funkce odstrani prvky ze zacaatku a konce pole, a namisto nich do pole vsune jine. 
 * 
 * @param texty puvodni texty
 * @param zeZacatku kolik prvku se ma odstranit ze zacatku pole
 * @param zKonce kolik prvku se ma odstranit z konce pole
 * @param pridejNaZacatek texty, ktere se maji pridat na zacatek
 * @param pridejNaKonec  texty, ktere se maji pridat na konec
 * @returns odstranene texty; texty odstranene ze zacatku puvodniho "texty" museji byt na zacatku vysledku. 
 */
function vezmiAPridej(texty : string[], zeZacatku : number, zKonce : number, pridejNaZacatek: string[], pridejNaKonec: string[]) : string[] {
    let pomocna : number = texty.length - zKonce - 1
    texty[zeZacatku] = pridejNaZacatek[0]
    texty[pomocna] = pridejNaKonec[0]
    return []; // NAHRADIT skutecnym vysledkem !
}

function testVezmiApridej() {
    let pole : string[] = [ "pasla", "ovecky", "v", "zelenem", "hajecku"];
    let odstraneno : string[] = vezmiAPridej(pole, 1, 2, [ "pekla"], ["troube"])
    // vypise: [ "pekla", "ovecky", "v", "troube"]
    // funkce vraci: [ "pasla", "zelenem", "hajecku"]
    console.log(pole);
    console.log(odstraneno);

    pole = [ "kocka", "leze", "dirou", "pes", "oknem" ];
    odstraneno = vezmiAPridej(pole, 2, 0, [ "prase", "chrochta"], ["vyje", "na", "mesic"]);
    // vypise: "prase chrochta dirou pes oknem vyje na mesic"
    // funkce vraci: [ "kocka", "leze"]
    console.log(pole.join(" "));
    console.log(odstraneno);
}


// ULOHA O14:
// Napiste funkci, ktera vyuziva funkci 'splice'. 
// Najdete si k ni dokumentaci - pristupna pomoci naseptavace (Ctrl/Cmd + Space), nebo viz
// https://www.itnetwork.cz/javascript/zaklady/javascript-tutorial-zaciname-s-javascriptem-podminky-cykly-pole-svatky#_metoda-splice

/**
 * Funkce zmeni pole "vstup" tak, ze v nem nalezne misto, kde je text predany v "odstranitOd". Jestlize takove misto v poli neni, funkce
 * NESMI pole "vstup" zmenit a MUSI vratit prazdne pole.
 * 
 * Na nalezenem miste odstrani prvky az do textu predanem v parametru "smazatPo", vcetne nej. Na misto odstranenych prvku pak vlozi
 * prvky predane v "novePrvky". Jestlize se text "smazatPo" v poli "vstup" nevyskytuje, smaze vse az do konce pole.
 * 
 * Funkce vraci odstranene prvky, ve stejnem poradi, jak byly puvodne v poli "vstup"
 * 
 * @param vstup vstupni data
 * @param odstranitOd text, od ktereho se bude odstranovat obsah
 * @param smazatPo text, do ktereho (vcetne) se obsah odstrani
 * @param novePrvky nove prvky, ktere se vsunou na misto odstranenych
 * @returns odstranene prvky.
 */
function vymenKusPole(vstup : string[], odstranitOd: string, smazatPo: string, novePrvky: string[]) : string[] {
    return []; // NAHRADIT skutecnym vysledkem
}

function testVymenKusPole() {
    let pole : string[];
    let odstraneno : string[];

    pole = ["holka", "modrooka", "nesedavej", "u", "potoka"];
    odstraneno = vymenKusPole(pole, "modrooka", "u", [ "hnedooka", "nechod", "blizko"]);
    // vypise: holka hnedooka nechod blizko potoka
    console.log(pole.join(" "));
    console.log(odstraneno);

    pole = ["pec ", "nam", "spadla", "pec", "nam", "spadla", "kdopak", "nam", "ji", "opravi"];
    odstraneno =vymenKusPole(pole, "pec", "ji", [ "starej", "pecar", "ji" ]);
    // vypise: pec  nam spadla starej pecar ji opravi
    console.log(pole.join(" "));

    pole = ["stesti", "jezdi", "po", "svete", "na", "praseti", "s", "rolnickama" ];
    odstraneno = vymenKusPole(pole, "svete", "rolnickami", [ "meste", "na", "kole "]);
    // Vypise: stesti  jezdi po meste na kole
    console.log(pole.join(" "));

    pole = ["jede", "jede", "postovsky", "panacek"];
    odstraneno = vymenKusPole(pole, "postovsky", "postovsky", [ "certovsky" ]);
    // Vypise: jede jede certovsky panacek
    console.log(pole.join(" "));
}

// ULOHA O15 (bonusova)
// Pozmente ulohu O14 tak, ze POKUD nahodou bude text "smazatPo" predchazet (!) text "odstranitOd", funkce spravne odstrani cast pole mezi nimi. 
// Viz testovaci priklad.
function testVymenKusPoleBonus() {
    let pole : string[];
    let odstraneno : string[];

   pole = ["Jozin", "z", "bazin", "mocalem", "se", "blizi"];
    odstraneno = vymenKusPole(pole, "mocalem", "Jozin", [ "Zima" ]);
    // Vypise: Zima se blizi
    console.log(pole.join(" "));
}
