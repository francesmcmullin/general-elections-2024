import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TdService {
  getTds() {
    return TDS;
  }

  getTd(name: string) {
    return TDS.find((td) => td.name === name);
  }

  constructor() {}
}

const TDS = [
  {
    name: "Adam Teskey",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Adam Teskey.jpg",
    partyName: "Fine Gael",
    constituency: "Adare - Rathkeale",
    score: "./assets/images/negative.jpg",
    email: "adam.teskey@limerick.ie",
    phone: "087 4577495"
  },
  {
    name: "Bridie Collins",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Bridie Collins.webp",
    partyName: "Fianna Fáil",
    constituency: "Adare - Rathkeale",
    score: "./assets/images/positive.jpg",
    email: "bridie.collins@limerick.ie",
    phone: "087 2517102"
  },
  {
    name: "Ger Ward",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Ger Ward.webp",
    partyName: "Fianna Fáil",
    constituency: "Adare - Rathkeale",
    score: "./assets/images/negative.jpg",
    email: "gerwardv94@gmail.com",
    phone: "086 844 0284"
  },
  {
    name: "Joanne Collins",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Joanne Collins.jpg",
    partyName: "Sinn Féin",
    constituency: "Adare - Rathkeale",
    score: "./assets/images/positive.jpg",
    email: "joannecollinssf@gmail.com",
    phone: ""
  },
  {
    name: "Stephen Keary",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Stephen Keary.jpg",
    partyName: "Fine Gael",
    constituency: "Adare - Rathkeale",
    score: "./assets/images/not_td.jpg",
    email: "stephen.keary@limerick.ie",
    phone: "087 8676363"
  },
  {
    name: "Trina O'Dea",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Trina O'Dea.webp",
    partyName: "Fianna Fáil",
    constituency: "Adare - Rathkeale",
    score: "./assets/images/positive.jpg",
    email: "trinaodeacroom@gmail.com",
    phone: "086 814 0098"
  },
  {
    name: "Breandán Fitzgerald",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Breandan Fitzgerald.webp",
    partyName: "Fianna Fáil",
    constituency: "An Daingean",
    score: "./assets/images/not_td.jpg",
    email: "breandan@breandanfitzgerald.ie",
    phone: "087 6039758"
  },
  {
    name: "Michael O'Shea",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Michael O'Shea.webp",
    partyName: "Fianna Fáil",
    constituency: "An Daingean",
    score: "./assets/images/negative.jpg",
    email: "mccmikeoshea@eircom.net",
    phone: "087 6738210"
  },
  {
    name: "Mike Kennedy",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Mike Kennedy.png",
    partyName: "Labour",
    constituency: "An Daingean",
    score: "./assets/images/positive.jpg",
    email: "mikekennedylabour@gmail.com",
    phone: "087 1716657"
  },
  {
    name: "Peadar Ó Fionnáin",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Peadar O Fionnain.png",
    partyName: "Green Party",
    constituency: "An Daingean",
    score: "./assets/images/not_td.jpg",
    email: "peadar.ofionnain@greenparty.ie",
    phone: ""
  },
  {
    name: "Robert Brosnan",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Robert Brosnan.jpg",
    partyName: "Sinn Féin",
    constituency: "An Daingean",
    score: "./assets/images/negative.jpg",
    email: "robbrosnan32@yahoo.com",
    phone: ""
  },
  {
    name: "Seamus Fitzgerald",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Seamus Fitzgerald.jpg",
    partyName: "Fine Gael",
    constituency: "An Daingean",
    score: "./assets/images/positive.jpg",
    email: "seamuscosaifitzgerald@eircom.net",
    phone: "086 8497282"
  },
  {
    name: "Tommy Griffin",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Tommy Griffin.jpg",
    partyName: "Fine Gael",
    constituency: "An Daingean",
    score: "./assets/images/not_td.jpg",
    email: "tommygriffinfg@gmail.com",
    phone: "087-2549116"
  },
  {
    name: "Dolores Minogue",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Dolores Minogue.jpg",
    partyName: "Fine Gael",
    constituency: "Ardee",
    score: "./assets/images/negative.jpg",
    email: "dolores.minogue@louthcoco.ie",
    phone: "087 9512788"
  },
  {
    name: "John Sheridan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/John Sheridan.webp",
    partyName: "Fianna Fáil",
    constituency: "Ardee",
    score: "./assets/images/negative.jpg",
    email: "john.sheridan@louthcoco.ie",
    phone: "086 1437097"
  },
  {
    name: "Kate Karpenko",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Kate Karpenko.png",
    partyName: "Labour",
    constituency: "Ardee",
    score: "./assets/images/positive.jpg",
    email: "kate.karpenko@votelabour.ie",
    phone: ""
  },
  {
    name: "Kitty Colbert",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Kitty Colbert.png",
    partyName: "Sinn Féin",
    constituency: "Ardee",
    score: "./assets/images/not_td.jpg",
    email: "Kittycolbert2024candidate@gmail.com",
    phone: "085 183 3425"
  },
  {
    name: "Niall McCreanor",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Niall McCreanor.png",
    partyName: "Social Democrats",
    constituency: "Ardee",
    score: "./assets/images/negative.jpg",
    email: "niall.mccreanor@socialdemocrats.ie",
    phone: "089 605 1174"
  },
  {
    name: "Paula Butterly",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Paula Butterly.jpg",
    partyName: "Fine Gael",
    constituency: "Ardee",
    score: "./assets/images/positive.jpg",
    email: "Paula.Butterly@louthcoco.ie",
    phone: "086 0336274"
  },
  {
    name: "Pearse McGeough",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Pearse McGeough.png",
    partyName: "Sinn Féin",
    constituency: "Ardee",
    score: "./assets/images/not_td.jpg",
    email: "Pearse.McGeough@louthcoco.ie",
    phone: "086 8135447"
  },
  {
    name: "Phyllis Murphy",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Phyllis Murphy.jpg",
    partyName: "Sinn Féin",
    constituency: "Ardee",
    score: "./assets/images/positive.jpg",
    email: "Ruralcandidate2024@gmail.com",
    phone: "083 861 9106"
  },
  {
    name: "Rachel Kerley",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Rachel Kerley.jpg",
    partyName: "Fine Gael",
    constituency: "Ardee",
    score: "./assets/images/not_td.jpg",
    email: "rachelkerley24@gmail.com",
    phone: "083-1222241"
  },
  {
    name: "Laurie Kearon",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Laurie Kearon.jpg",
    partyName: "Fine Gael",
    constituency: "Arklow",
    score: "./assets/images/negative.jpg",
    email: "laurie@GetsItDone.ie",
    phone: "087-6864731"
  },
  {
    name: "Pat Fitzgerald",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Pat Fitzgerald.webp",
    partyName: "Fianna Fáil",
    constituency: "Arklow",
    score: "./assets/images/not_td.jpg",
    email: "PFitzgerald@wicklowcoco.ie",
    phone: "087 204 9013"
  },
  {
    name: "Pat Kennedy",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Pat Kennedy.webp",
    partyName: "Fianna Fáil",
    constituency: "Arklow",
    score: "./assets/images/negative.jpg",
    email: "patkennedy1@outlook.com",
    phone: "087 419 8022"
  },
  {
    name: "Sheila Busher",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Sheila Busher.jpg",
    partyName: "Sinn Féin",
    constituency: "Arklow",
    score: "./assets/images/not_td.jpg",
    email: "sheilabushersf@gmail.com",
    phone: ""
  },
  {
    name: "Sylvester Bourke",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Sylvester Bourke.jpg",
    partyName: "Fine Gael",
    constituency: "Arklow",
    score: "./assets/images/negative.jpg",
    email: "SBourke@wicklowcoco.ie",
    phone: "087 250 1734"
  },
  {
    name: "Tommy Annesley",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Tommy Annesley.jpg",
    partyName: "Fianna Fáil",
    constituency: "Arklow",
    score: "./assets/images/positive.jpg",
    email: "tomannesley@yahoo.co.uk",
    phone: "087 250 8205"
  },
  {
    name: "Warren O'Toole",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Warren O'Toole.jpg",
    partyName: "Sinn Féin",
    constituency: "Arklow",
    score: "./assets/images/negative.jpg",
    email: "warrenotoolesf@gmail.com",
    phone: ""
  },
  {
    name: "Aishling Silke",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Aishling Silke.png",
    partyName: "Social Democrats",
    constituency: "Artane - Whitehall",
    score: "./assets/images/positive.jpg",
    email: "aishling.silke@socialdemocrats.ie",
    phone: "087 490 4008"
  },
  {
    name: "Andrew Keegan",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Andrew Keegan.webp",
    partyName: "People Before Profit",
    constituency: "Artane - Whitehall",
    score: "./assets/images/not_td.jpg",
    email: "andrew.keegan@dublincity.ie",
    phone: "087 6675895"
  },
  {
    name: "Aoibheann Mahon",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Aoibheann Mahon.webp",
    partyName: "Fianna Fáil",
    constituency: "Artane - Whitehall",
    score: "./assets/images/negative.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Declan Flanagan",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Declan Flanagan.jpg",
    partyName: "Fine Gael",
    constituency: "Artane - Whitehall",
    score: "./assets/images/positive.jpg",
    email: "declan.flanagan@dublincity.ie",
    phone: 879388888
  },
  {
    name: "Edel Moran",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Edel Moran.png",
    partyName: "Sinn Féin",
    constituency: "Artane - Whitehall",
    score: "./assets/images/not_td.jpg",
    email: "sadhbhm09@gmail.com",
    phone: "086-3915661"
  },
  {
    name: "Jesslyn Henry",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Jesslyn Henry.png",
    partyName: "Social Democrats",
    constituency: "Artane - Whitehall",
    score: "./assets/images/negative.jpg",
    email: "jesslyn.henry@socialdemocrats.ie",
    phone: "085 755 9938"
  },
  {
    name: "John Nisbet",
    imageUrl: "./assets/images/LE 2024 Images/Labour/John Nisbet.png",
    partyName: "Labour",
    constituency: "Artane - Whitehall",
    score: "./assets/images/not_td.jpg",
    email: "Jnisbet@mac.com",
    phone: "087 289 2528"
  },
  {
    name: "Josh O'Rourke",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Josh O'Rourke.png",
    partyName: "Sinn Féin",
    constituency: "Artane - Whitehall",
    score: "./assets/images/negative.jpg",
    email: "joshorourkesf@gmail.com",
    phone: ""
  },
  {
    name: "Larry O'Toole",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Larry O'Toole.png",
    partyName: "Sinn Féin",
    constituency: "Artane - Whitehall",
    score: "./assets/images/not_td.jpg",
    email: "larry.otoole@dublincity.ie",
    phone: 868541940
  },
  {
    name: "Linkwinstar Mattathil Mathew",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Linkwinstar Mattathil Mathew.jpg",
    partyName: "Fine Gael",
    constituency: "Artane - Whitehall",
    score: "./assets/images/negative.jpg",
    email: "linkwinstarfg@gmail.com",
    phone: "085-1667794"
  },
  {
    name: "Olive Sloan",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Olive Sloan.png",
    partyName: "Sinn Féin",
    constituency: "Artane - Whitehall",
    score: "./assets/images/positive.jpg",
    email: "olivesloan@sinnfein.ie",
    phone: ""
  },
  {
    name: "Racheal Batten",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Racheal Batten.webp",
    partyName: "Fianna Fáil",
    constituency: "Artane - Whitehall",
    score: "./assets/images/not_td.jpg",
    email: "racheal.batten@dublincity.ie",
    phone: 867839377
  },
  {
    name: "Alan Tobin",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Alan Tobin.jpg",
    partyName: "Fine Gael",
    constituency: "Ashbourne",
    score: "./assets/images/positive.jpg",
    email: "alan.tobin@members.meathcoco.ie",
    phone: "087 6117669"
  },
  {
    name: "Bryan Mallon",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Bryan Mallon.webp",
    partyName: "Fianna Fáil",
    constituency: "Ashbourne",
    score: "./assets/images/negative.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Conor Tormey",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Conor Tormey.jpg",
    partyName: "Fianna Fáil",
    constituency: "Ashbourne",
    score: "./assets/images/positive.jpg",
    email: "conor.tormey@members.meathcoco.ie",
    phone: "087 2632074"
  },
  {
    name: "Helen Meyer",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Helen Meyer.jpg",
    partyName: "Sinn Féin",
    constituency: "Ashbourne",
    score: "./assets/images/not_td.jpg",
    email: "helen.meyer@members.meathcoco.ie",
    phone: "085 1415751"
  },
  {
    name: "Maria Uí Ruairc",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Maria Ui Ruairc.png",
    partyName: "Sinn Féin",
    constituency: "Ashbourne",
    score: "./assets/images/positive.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Sarah Reilly",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Sarah Reilly.jpg",
    partyName: "Fine Gael",
    constituency: "Ashbourne",
    score: "./assets/images/not_td.jpg",
    email: "sarah.reilly@members.meathcoco.ie",
    phone: "086 4085679"
  },
  {
    name: "Brandon Scott",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Brandon Scott.jpg",
    partyName: "Aontú",
    constituency: "Ashbourne",
    score: "./assets/images/negative.jpg",
    email: "scottbrandon11697@gmail.com",
    phone: "085 816 4400"
  },
  {
    name: "Suzanne Jamal",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Suzanne Jamal.jpg",
    partyName: "Fine Gael",
    constituency: "Ashbourne",
    score: "./assets/images/positive.jpg",
    email: "suzanne.jamal@members.meathcoco.ie",
    phone: "087 7971297"
  },
  {
    name: "Dominick Connolly",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Dominick Connolly.jpg",
    partyName: "Fine Gael",
    constituency: "Athlone (Roscommon)",
    score: "./assets/images/not_td.jpg",
    email: "connollyDominick3@gmail.com",
    phone: "087-2451267"
  },
  {
    name: "James Murray",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/James Murray.webp",
    partyName: "Fianna Fáil",
    constituency: "Athlone (Roscommon)",
    score: "./assets/images/not_td.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Joe Harney",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Joe Harney.png",
    partyName: "Sinn Féin",
    constituency: "Athlone (Roscommon)",
    score: "./assets/images/negative.jpg",
    email: "roscommonsf@gmail.com",
    phone: "083 8899449"
  },
  {
    name: "John Keogh",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/John Keogh.webp",
    partyName: "Fianna Fáil",
    constituency: "Athlone (Roscommon)",
    score: "./assets/images/positive.jpg",
    email: "cllrjkeogh@roscommoncoco.ie",
    phone: "087 6440534"
  },
  {
    name: "John Naughten",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/John Naughten.jpg",
    partyName: "Fine Gael",
    constituency: "Athlone (Roscommon)",
    score: "./assets/images/not_td.jpg",
    email: "cllrjnaughten@roscommoncoco.ie",
    phone: "087 9019334"
  },
  {
    name: "Aengus O'Rourke",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Aengus O'Rourke.webp",
    partyName: "Fianna Fáil",
    constituency: "Athlone (Westmeath)",
    score: "./assets/images/negative.jpg",
    email: "aengus.orourke@westmeathcoco.ie",
    phone: "086 386 7484"
  },
  {
    name: "Conor Dowling-Linehan",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Conor Dowling-Linehan.png",
    partyName: "Sinn Féin",
    constituency: "Athlone (Westmeath)",
    score: "./assets/images/positive.jpg",
    email: "cdlinehan@gmail.com",
    phone: "085 2782141"
  },
  {
    name: "Frankie Keena",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Frankie Keena.webp",
    partyName: "Fianna Fáil",
    constituency: "Athlone (Westmeath)",
    score: "./assets/images/not_td.jpg",
    email: "fkeena@westmeathcoco.ie",
    phone: "085 747 4074"
  },
  {
    name: "John Dolan",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/John Dolan.jpg",
    partyName: "Fine Gael",
    constituency: "Athlone (Westmeath)",
    score: "./assets/images/negative.jpg",
    email: "john.dolan@westmeathcoco.ie",
    phone: "087 227 8261"
  },
  {
    name: "Louise Heavin",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Louise Heavin.jpg",
    partyName: "Green Party",
    constituency: "Athlone (Westmeath)",
    score: "./assets/images/not_td.jpg",
    email: "louise.heavin@westmeathcoco.ie",
    phone: "085 197 2653"
  },
  {
    name: "Ruairi Keyes",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Ruairi Keyes.jpg",
    partyName: "Fine Gael",
    constituency: "Athlone (Westmeath)",
    score: "./assets/images/positive.jpg",
    email: "ruairi.keyesfg@yahoo.com",
    phone: "087 4518522"
  },
  {
    name: "Aoife Breslin",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Aoife Breslin.png",
    partyName: "Labour",
    constituency: "Athy",
    score: "./assets/images/negative.jpg",
    email: "breslin.aoife@gmail.com",
    phone: "086 2797694"
  },
  {
    name: "Brian Dooley",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Brian Dooley.webp",
    partyName: "Fianna Fáil",
    constituency: "Athy",
    score: "./assets/images/positive.jpg",
    email: "kccdocker@gmail.com",
    phone: ""
  },
  {
    name: "Brian Kenny",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Brian Kenny.png",
    partyName: "Fine Gael",
    constituency: "Athy",
    score: "./assets/images/not_td.jpg",
    email: "briankennylocal@gmail.com",
    phone: "086-4106508"
  },
  {
    name: "David Owens",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/David Owens.webp",
    partyName: "Fianna Fáil",
    constituency: "Athy",
    score: "./assets/images/negative.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Geraldine Campbell",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Geraldine Campbell.png",
    partyName: "Sinn Féin",
    constituency: "Athy",
    score: "./assets/images/positive.jpg",
    email: "geraldinecampbellsf@gmail.com",
    phone: "089 2161596"
  },
  {
    name: "Mark Leigh",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Mark Leigh.png",
    partyName: "Labour",
    constituency: "Athy",
    score: "./assets/images/not_td.jpg",
    email: "mleigh@kildarecoco.ie",
    phone: "086 8288605"
  },
  {
    name: "Rachael Wall",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Rachael Wall.png",
    partyName: "Social Democrats",
    constituency: "Athy",
    score: "./assets/images/negative.jpg",
    email: "rachael.wall@socialdemocrats.ie",
    phone: ""
  },
  {
    name: "Thomas Redmond",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Thomas Redmond.jpg",
    partyName: "Sinn Féin",
    constituency: "Athy",
    score: "./assets/images/positive.jpg",
    email: "mail@thomasredmond.ie",
    phone: "086 6003717"
  },
  {
    name: "Veralouise Behan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Veralouise Behan.webp",
    partyName: "Fianna Fáil",
    constituency: "Athy",
    score: "./assets/images/not_td.jpg",
    email: "veralouisebehan@yahoo.ie",
    phone: "086 1502913"
  },
  {
    name: "Aiden Fitzpatrick",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Aiden Fitzpatrick.webp",
    partyName: "Fianna Fáil",
    constituency: "Bailieborough - Cootehill",
    score: "./assets/images/negative.jpg",
    email: "aidenfitzpatrick@cavancoco.ie",
    phone: "087 6597526"
  },
  {
    name: "Carmel Brady",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Carmel Brady.jpg",
    partyName: "Fine Gael",
    constituency: "Bailieborough - Cootehill",
    score: "./assets/images/positive.jpg",
    email: "carmelbrady@cavancoco.ie",
    phone: "087-6493480"
  },
  {
    name: "Clifford Kelly",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Clifford Kelly.webp",
    partyName: "Fianna Fáil",
    constituency: "Bailieborough - Cootehill",
    score: "./assets/images/not_td.jpg",
    email: "ckelly@cavancoco.ie",
    phone: "087 2583653"
  },
  {
    name: "Marina McEntee",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Marina McEntee.jpg",
    partyName: "Sinn Féin",
    constituency: "Bailieborough - Cootehill",
    score: "./assets/images/not_td.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Niall Smith",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Niall Smith.webp",
    partyName: "Fianna Fáil",
    constituency: "Bailieborough - Cootehill",
    score: "./assets/images/negative.jpg",
    email: "niallsmithno1@gmail.com",
    phone: "089 465 9332"
  },
  {
    name: "Paddy McDonald",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Paddy McDonald.png",
    partyName: "Sinn Féin",
    constituency: "Bailieborough - Cootehill",
    score: "./assets/images/positive.jpg",
    email: "paddymcdonald@cavancoco.ie",
    phone: "086-0792686"
  },
  {
    name: "Sarah O'Reilly",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Sarah O'Reilly.jpg",
    partyName: "Aontú",
    constituency: "Bailieborough - Cootehill",
    score: "./assets/images/not_td.jpg",
    email: "sarahoreilly@cavancoco.ie",
    phone: "086 3994658"
  },
  {
    name: "Stiofan Conaty",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Stiofan Conaty.png",
    partyName: "Sinn Féin",
    constituency: "Bailieborough - Cootehill",
    score: "./assets/images/negative.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Val Smith",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Val Smith.jpg",
    partyName: "Fine Gael",
    constituency: "Bailieborough - Cootehill",
    score: "./assets/images/positive.jpg",
    email: "vsmith@cavancoco.ie",
    phone: "086 3255889"
  },
  {
    name: "Anne Marie Brady",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Anne Marie Brady.jpg",
    partyName: "Sinn Féin",
    constituency: "Balbriggan",
    score: "./assets/images/not_td.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Brendan Ryan",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Brendan Ryan.png",
    partyName: "Labour",
    constituency: "Balbriggan",
    score: "./assets/images/negative.jpg",
    email: "brendan.ryan@cllrs.fingal.ie",
    phone: "087 1876646"
  },
  {
    name: "Karen Power",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Karen Power.jpg",
    partyName: "Green Party",
    constituency: "Balbriggan",
    score: "./assets/images/negative.jpg",
    email: "Karen.power@cllrs.fingal.ie",
    phone: "089 965 4529"
  },
  {
    name: "Malachy Quinn",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Malachy Quinn.jpg",
    partyName: "Sinn Féin",
    constituency: "Balbriggan",
    score: "./assets/images/positive.jpg",
    email: "malachyquinnsf@gmail.com",
    phone: "087 672 7637"
  },
  {
    name: "Sinead Lucey-Brennan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Sinead Lucey-Brennan.webp",
    partyName: "Fianna Fáil",
    constituency: "Balbriggan",
    score: "./assets/images/not_td.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Tom O'Leary",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Tom O'Leary.jpg",
    partyName: "Fine Gael",
    constituency: "Balbriggan",
    score: "./assets/images/negative.jpg",
    email: "tom.oleary@cllrs.fingal.ie",
    phone: "087-2459897"
  },
  {
    name: "Annie May Reape",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Annie May Reape.webp",
    partyName: "Fianna Fáil",
    constituency: "Ballina",
    score: "./assets/images/not_td.jpg",
    email: "amreape@cllr.mayococo.ie",
    phone: "087 2250745"
  },
  {
    name: "Antonio Cafolla",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Antonio Cafolla.png",
    partyName: "Sinn Féin",
    constituency: "Ballina",
    score: "./assets/images/negative.jpg",
    email: "antonio@mayosinnfein.ie",
    phone: ""
  },
  {
    name: "David Alexander",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/David Alexander.webp",
    partyName: "Fianna Fáil",
    constituency: "Ballina",
    score: "./assets/images/positive.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Hugh Rouse",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Hugh Rouse.jpg",
    partyName: "Fine Gael",
    constituency: "Ballina",
    score: "./assets/images/not_td.jpg",
    email: "hughjrouse@outlook.com",
    phone: "086-8259555"
  },
  {
    name: "Jarlath Munnelly",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Jarlath Munnelly.jpg",
    partyName: "Fine Gael",
    constituency: "Ballina",
    score: "./assets/images/negative.jpg",
    email: "jmunnelly@cllr.mayococo.ie",
    phone: "087 9832931"
  },
  {
    name: "John O'Hara",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/John O'Hara.jpg",
    partyName: "Fine Gael",
    constituency: "Ballina",
    score: "./assets/images/not_td.jpg",
    email: "johara@cllr.mayococo.ie",
    phone: "087 2942949"
  },
  {
    name: "Michael Loftus",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Michael Loftus.webp",
    partyName: "Fianna Fáil",
    constituency: "Ballina",
    score: "./assets/images/positive.jpg",
    email: "cllrmloftus@gmail.com",
    phone: "087 6849130"
  },
  {
    name: "Úna Morris",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Una Morris.jpg",
    partyName: "Sinn Féin",
    constituency: "Ballina",
    score: "./assets/images/negative.jpg",
    email: "una@mayosinnfein.ie",
    phone: "087 668 4526"
  },
  {
    name: "Adam O Ceallaigh",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Adam O Ceallaigh.jpg",
    partyName: "Green Party",
    constituency: "Ballinamore",
    score: "./assets/images/not_td.jpg",
    email: "adam.oceallaigh@greenparty.ie",
    phone: "087 3982361"
  },
  {
    name: "Brendan Barry",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Brendan Barry.png",
    partyName: "Sinn Féin",
    constituency: "Ballinamore",
    score: "./assets/images/negative.jpg",
    email: "brendan.barry1@yahoo.com",
    phone: "(087) 6335513"
  },
  {
    name: "Enda McGloin",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Enda McGloin.jpg",
    partyName: "Fine Gael",
    constituency: "Ballinamore",
    score: "./assets/images/positive.jpg",
    email: "emcgloin@leitrimcoco.ie",
    phone: "086 2677637"
  },
  {
    name: "Gary Prior",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Gary Prior.jpg",
    partyName: "Fianna Fáil",
    constituency: "Ballinamore",
    score: "./assets/images/not_td.jpg",
    email: "",
    phone: "086 8489609"
  },
  {
    name: "Joanne Curnan",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Joanne Curnan.png",
    partyName: "Sinn Féin",
    constituency: "Ballinamore",
    score: "./assets/images/positive.jpg",
    email: "",
    phone: "087 613 4242"
  },
  {
    name: "Paddy O'Rourke",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Paddy O'Rourke.webp",
    partyName: "Fianna Fáil",
    constituency: "Ballinamore",
    score: "./assets/images/not_td.jpg",
    email: "porourke@leitrimcoco.ie",
    phone: "087 2930415"
  },
  {
    name: "Roisin Kenny",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Roisin Kenny.jpg",
    partyName: "Sinn Féin",
    constituency: "Ballinamore",
    score: "./assets/images/negative.jpg",
    email: "roisinkennysf@gmail.com",
    phone: ""
  },
  {
    name: "Alan Harney",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Alan Harney.jpg",
    partyName: "Fine Gael",
    constituency: "Ballinasloe",
    score: "./assets/images/positive.jpg",
    email: "alanharneyballinasloe@gmail.com",
    phone: "087-9904456"
  },
  {
    name: "Andrew Mannion",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Andrew Mannion.webp",
    partyName: "People Before Profit",
    constituency: "Ballinasloe",
    score: "./assets/images/not_td.jpg",
    email: "andrewmannionpbp@gmail.com",
    phone: ""
  },
  {
    name: "Dermot Connolly",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Dermot Connolly.png",
    partyName: "Sinn Féin",
    constituency: "Ballinasloe",
    score: "./assets/images/positive.jpg",
    email: "dconnolly@cllr.galwaycoco.ie",
    phone: "086 0886160"
  },
  {
    name: "Michael Connolly",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Michael Connolly.webp",
    partyName: "Fianna Fáil",
    constituency: "Ballinasloe",
    score: "./assets/images/negative.jpg",
    email: "mconnolly@cllr.galwaycoco.ie",
    phone: "087 6829049"
  },
  {
    name: "Peter Keaveney",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Peter Keaveney.jpg",
    partyName: "Fine Gael",
    constituency: "Ballinasloe",
    score: "./assets/images/positive.jpg",
    email: "pkeaveney@cllr.galwaycoco.ie",
    phone: "087 2533098"
  },
  {
    name: "Regan Maher",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Regan Maher.png",
    partyName: "Sinn Féin",
    constituency: "Ballinasloe",
    score: "./assets/images/negative.jpg",
    email: "",
    phone: ""
  },
  {
    name: "John Connolly",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/John Connolly.webp",
    partyName: "Fianna Fáil",
    constituency: "Ballybay - Clones",
    score: "./assets/images/not_td.jpg",
    email: "john.Connolly@cgcc.ie",
    phone: "087 9032345"
  },
  {
    name: "Pat Treanor",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Pat Treanor.png",
    partyName: "Sinn Féin",
    constituency: "Ballybay - Clones",
    score: "./assets/images/positive.jpg",
    email: "pat.treanor@cllr.monaghancoco.ie",
    phone: "(086) 2377177"
  },
  {
    name: "Richard Truell",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Richard Truell.jpg",
    partyName: "Fine Gael",
    constituency: "Ballybay - Clones",
    score: "./assets/images/not_td.jpg",
    email: "richard.truell@cllr.monaghancoco.ie",
    phone: "(086) 2035534"
  },
  {
    name: "Seamus Coyle",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Seamus Coyle.webp",
    partyName: "Fianna Fáil",
    constituency: "Ballybay - Clones",
    score: "./assets/images/negative.jpg",
    email: "seamus.coyle@cllr.monaghancoco.ie",
    phone: "(087) 6814067"
  },
  {
    name: "Seán Gilliland",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Sean Gilliland.jpg",
    partyName: "Fine Gael",
    constituency: "Ballybay - Clones",
    score: "./assets/images/positive.jpg",
    email: "sean.gilliland@cllr.monaghancoco.ie",
    phone: "(087) 9969946"
  },
  {
    name: "Sinead Flynn",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Sinead Flynn.jpg",
    partyName: "Sinn Féin",
    constituency: "Ballybay - Clones",
    score: "./assets/images/not_td.jpg",
    email: "sineadflynn10@gmail.com",
    phone: ""
  },
  {
    name: "Daithí De Róiste",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Daithi De Roiste.jpg",
    partyName: "Fianna Fáil",
    constituency: "Ballyfermot - Drimnagh",
    score: "./assets/images/negative.jpg",
    email: "daithi.deroiste@dublincity.ie",
    phone: "085 724 6061"
  },
  {
    name: "Daithí Doolan",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Daithi Doolan.png",
    partyName: "Sinn Féin",
    constituency: "Ballyfermot - Drimnagh",
    score: "./assets/images/positive.jpg",
    email: "daithi.doolan@dublincity.ie",
    phone: "086 3888152"
  },
  {
    name: "Hazel De Nortúin",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Hazel De Nortuin.webp",
    partyName: "People Before Profit",
    constituency: "Ballyfermot - Drimnagh",
    score: "./assets/images/not_td.jpg",
    email: "hazel.denortuin@dublincity.ie",
    phone: 851840081
  },
  {
    name: "Hazel De Nortúin",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Hazel De Nortuin.webp",
    partyName: "People Before Profit",
    constituency: "Ballyfermot - Drimnagh",
    score: "./assets/images/negative.jpg",
    email: "hazel.denortuin@dublincity.ie",
    phone: "085 184 0081"
  },
  {
    name: "Mamy Nzema Nkoy",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Mamy Nzema Nkoy.png",
    partyName: "Sinn Féin",
    constituency: "Ballyfermot - Drimnagh",
    score: "./assets/images/positive.jpg",
    email: "mamynzemankoy@gmail.com",
    phone: "089 4623579"
  },
  {
    name: "Niamh Mongey",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Niamh Mongey.png",
    partyName: "Social Democrats",
    constituency: "Ballyfermot - Drimnagh",
    score: "./assets/images/not_td.jpg",
    email: "niamh.mongey@socialdemocrats.ie",
    phone: ""
  },
  {
    name: "Paddy Dingle",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Paddy Dingle.jpg",
    partyName: "Fine Gael",
    constituency: "Ballyfermot - Drimnagh",
    score: "./assets/images/negative.jpg",
    email: "Patdingle@live.com",
    phone: "089-9786341"
  },
  {
    name: "Patrick Dempsey",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Patrick Dempsey.png",
    partyName: "Labour",
    constituency: "Ballyfermot - Drimnagh",
    score: "./assets/images/positive.jpg",
    email: "patrickmdempsey1@gmail.com",
    phone: "083 438 9015"
  },
  {
    name: "Ray Cunningham",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Ray Cunningham.png",
    partyName: "Green Party",
    constituency: "Ballyfermot - Drimnagh",
    score: "./assets/images/not_td.jpg",
    email: "ray.cunningham@greenparty.ie",
    phone: ""
  },
  {
    name: "Angela Gaffney",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Angela Gaffney.png",
    partyName: "Sinn Féin",
    constituency: "Ballyjamesduff",
    score: "./assets/images/positive.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Gráinne McPhillips",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Grainne McPhillips.jpg",
    partyName: "Aontú",
    constituency: "Ballyjamesduff",
    score: "./assets/images/not_td.jpg",
    email: "grainnemcphillips1@gmail.com",
    phone: "086 266 6429"
  },
  {
    name: "Noel Connell",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Noel Connell.png",
    partyName: "Sinn Féin",
    constituency: "Ballyjamesduff",
    score: "./assets/images/negative.jpg",
    email: "sinnfeinofficecavan@gmail.com",
    phone: ""
  },
  {
    name: "T.P. O'Reilly",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/T.P. O'Reilly.png",
    partyName: "Fine Gael",
    constituency: "Ballyjamesduff",
    score: "./assets/images/positive.jpg",
    email: "tporeilly@cavancoco.ie",
    phone: "086 8049623"
  },
  {
    name: "Trevor Smith",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Trevor Smith.jpg",
    partyName: "Fine Gael",
    constituency: "Ballyjamesduff",
    score: "./assets/images/not_td.jpg",
    email: "tsmith@cavancoco.ie",
    phone: "086 4086709"
  },
  {
    name: "Winston Bennett",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Winston Bennett.jpg",
    partyName: "Fine Gael",
    constituency: "Ballyjamesduff",
    score: "./assets/images/negative.jpg",
    email: "wbennett@cavancoco.ie",
    phone: "086 2458490"
  },
  {
    name: "Colm Murray",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Colm Murray.jpg",
    partyName: "Fine Gael",
    constituency: "Ballymahon",
    score: "./assets/images/positive.jpg",
    email: "colmmurray@longfordcoco.ie",
    phone: "086 3986245"
  },
  {
    name: "Michael Cahill",
    imageUrl: "#N/A",
    partyName: "Fianna Fáil",
    constituency: "Ballymahon",
    score: "./assets/images/positive.jpg",
    email: "mcahill@longfordcoco.ie",
    phone: "086 2397818"
  },
  {
    name: "Pat O'Toole",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Pat O'Toole.webp",
    partyName: "Fianna Fáil",
    constituency: "Ballymahon",
    score: "./assets/images/not_td.jpg",
    email: "potoole@longfordcoco.ie",
    phone: "087 2333998"
  },
  {
    name: "Paul Ross",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Paul Ross.jpg",
    partyName: "Fine Gael",
    constituency: "Ballymahon",
    score: "./assets/images/negative.jpg",
    email: "pross@longfordcoco.ie",
    phone: "087 9793925"
  },
  {
    name: "Barry Gallagher",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Barry Gallagher.jpg",
    partyName: "Fianna Fáil",
    constituency: "Ballymote - Tobercurry",
    score: "./assets/images/not_td.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Dara Mulvey",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Dara Mulvey.jpg",
    partyName: "Fine Gael",
    constituency: "Ballymote - Tobercurry",
    score: "./assets/images/negative.jpg",
    email: "dfmulvey@gmail.com",
    phone: "087 6885050"
  },
  {
    name: "Donal O'Connor",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Donal O'Connor.png",
    partyName: "Sinn Féin",
    constituency: "Ballymote - Tobercurry",
    score: "./assets/images/positive.jpg",
    email: "donaloconnor.sf@gmail.com",
    phone: "085 2680045"
  },
  {
    name: "Gerard Mullaney",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Gerard Mullaney.jpg",
    partyName: "Fine Gael",
    constituency: "Ballymote - Tobercurry",
    score: "./assets/images/not_td.jpg",
    email: "mullaneygerard1@gmail.com",
    phone: "086 8221995"
  },
  {
    name: "Jason Gorman",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Jason Gorman.png",
    partyName: "Sinn Féin",
    constituency: "Ballymote - Tobercurry",
    score: "./assets/images/negative.jpg",
    email: "jasongormansinnfein24@gmail.com",
    phone: "087 470 9518"
  },
  {
    name: "Jennifer Van Aswegen",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Jennifer Van Aswegen.png",
    partyName: "Sinn Féin",
    constituency: "Ballymote - Tobercurry",
    score: "./assets/images/positive.jpg",
    email: "jvasinnfein@gmail.com",
    phone: "089 477 6255"
  },
  {
    name: "Keith Henry",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Keith Henry.webp",
    partyName: "Fianna Fáil",
    constituency: "Ballymote - Tobercurry",
    score: "./assets/images/negative.jpg",
    email: "keithhenrysligo@gmail.com",
    phone: "086 335 7182"
  },
  {
    name: "Liam Brennan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Liam Brennan.jpg",
    partyName: "Fianna Fáil",
    constituency: "Ballymote - Tobercurry",
    score: "./assets/images/positive.jpg",
    email: "liambrennansligo@gmail.com",
    phone: ""
  },
  {
    name: "Martin Connolly",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Martin Connolly.jpeg",
    partyName: "Fine Gael",
    constituency: "Ballymote - Tobercurry",
    score: "./assets/images/not_td.jpg",
    email: "connollymartin63@gmail.com",
    phone: "087 2054930"
  },
  {
    name: "Patrick Cleary",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Patrick Cleary.jpg",
    partyName: "Fine Gael",
    constituency: "Ballymote - Tobercurry",
    score: "./assets/images/positive.jpg",
    email: "pcleary81@outlook.com",
    phone: "085 202 9701"
  },
  {
    name: "Paul Taylor",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Paul Taylor.webp",
    partyName: "Fianna Fáil",
    constituency: "Ballymote - Tobercurry",
    score: "./assets/images/not_td.jpg",
    email: "paultaylorsligo@gmail.com",
    phone: "087 6794509"
  },
  {
    name: "Anthony Connaghan",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Anthony Connaghan.png",
    partyName: "Sinn Féin",
    constituency: "Ballymun-Finglas",
    score: "./assets/images/negative.jpg",
    email: "anthony.connaghan@dublincity.ie",
    phone: "087 2376762"
  },
  {
    name: "Arnold Guo",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Arnold Guo.jpg",
    partyName: "Fine Gael",
    constituency: "Ballymun-Finglas",
    score: "./assets/images/positive.jpg",
    email: "arnoldfinegael@gmail.com",
    phone: "087-6927437"
  },
  {
    name: "Briege MacOscar",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Briege MacOscar.webp",
    partyName: "Fianna Fáil",
    constituency: "Ballymun-Finglas",
    score: "./assets/images/not_td.jpg",
    email: "briege.macoscar@dublincity.ie",
    phone: "085 2371006"
  },
  {
    name: "Caroline Conroy",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Caroline Conroy.png",
    partyName: "Green Party",
    constituency: "Ballymun-Finglas",
    score: "./assets/images/negative.jpg",
    email: "caroline.conroy@greenparty.ie",
    phone: "087 630 0777"
  },
  {
    name: "Conor Reddy",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Conor Reddy.webp",
    partyName: "People Before Profit",
    constituency: "Ballymun-Finglas",
    score: "./assets/images/positive.jpg",
    email: "conor.reddypbp@gmail.com",
    phone: "083 165 7241"
  },
  {
    name: "Edward MacManus",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Edward MacManus.jpg",
    partyName: "Aontú",
    constituency: "Ballymun-Finglas",
    score: "./assets/images/not_td.jpg",
    email: "edward.macmanus@Aontú.ie",
    phone: "086 837 2690"
  },
  {
    name: "John Lonergan",
    imageUrl: "./assets/images/LE 2024 Images/Labour/John Lonergan.png",
    partyName: "Labour",
    constituency: "Ballymun-Finglas",
    score: "./assets/images/positive.jpg",
    email: "johnlonerganr@gmail.com",
    phone: "086 364 2532"
  },
  {
    name: "Keith Connolly",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Keith Connolly.webp",
    partyName: "Fianna Fáil",
    constituency: "Ballymun-Finglas",
    score: "./assets/images/not_td.jpg",
    email: "Keith.Connolly@dublincity.ie",
    phone: 894787756
  },
  {
    name: "Leslie Kane",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Leslie Kane.jpg",
    partyName: "Sinn Féin",
    constituency: "Ballymun-Finglas",
    score: "./assets/images/negative.jpg",
    email: "lesliekanesinnfein@gmail.com",
    phone: "089 2053063"
  },
  {
    name: "Mary Callaghan",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Mary Callaghan.png",
    partyName: "Social Democrats",
    constituency: "Ballymun-Finglas",
    score: "./assets/images/positive.jpg",
    email: "mary.callaghan@socialdemocrats.ie",
    phone: "087 2167752"
  },
  {
    name: "Anthony McNulty",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Anthony McNulty.webp",
    partyName: "People Before Profit",
    constituency: "Baltinglass",
    score: "./assets/images/not_td.jpg",
    email: "anthonymcnultypbp@gmail.com",
    phone: ""
  },
  {
    name: "Avril Cronin",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Avril Cronin.jpeg",
    partyName: "Fine Gael",
    constituency: "Baltinglass",
    score: "./assets/images/negative.jpg",
    email: "acronin@wicklowcoco.ie",
    phone: "085 122 2729"
  },
  {
    name: "Deirdre McCormack",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Deirdre McCormack.png",
    partyName: "Social Democrats",
    constituency: "Baltinglass",
    score: "./assets/images/not_td.jpg",
    email: "deirdre.mccormack@socialdemocrats.ie",
    phone: ""
  },
  {
    name: "Edward Timmins",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Edward Timmins.jpg",
    partyName: "Fine Gael",
    constituency: "Baltinglass",
    score: "./assets/images/negative.jpg",
    email: "ETimmins@wicklowcoco.ie",
    phone: "087 235 7914"
  },
  {
    name: "John Mullen",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/John Mullen.webp",
    partyName: "Fianna Fáil",
    constituency: "Baltinglass",
    score: "./assets/images/not_td.jpg",
    email: "jmullen@wicklowcoco.ie",
    phone: "086 417 7808"
  },
  {
    name: "Kieran Burke",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Kieran Burke.webp",
    partyName: "Fianna Fáil",
    constituency: "Baltinglass",
    score: "./assets/images/negative.jpg",
    email: "Kieranburkewicklow@gmail.com",
    phone: "086 457 8918"
  },
  {
    name: "Patsy Glennon",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Patsy Glennon.webp",
    partyName: "Fianna Fáil",
    constituency: "Baltinglass",
    score: "./assets/images/positive.jpg",
    email: "pglennon@wicklowcoco.ie",
    phone: "087 190 9133"
  },
  {
    name: "Peter Stapleton",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Peter Stapleton.jpg",
    partyName: "Fine Gael",
    constituency: "Baltinglass",
    score: "./assets/images/not_td.jpg",
    email: "peterstapleton.finegael@outlook.ie",
    phone: "087-9725067"
  },
  {
    name: "Ann Bambury",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Ann Bambury.png",
    partyName: "Social Democrats",
    constituency: "Bandon-Kinsale",
    score: "./assets/images/positive.jpg",
    email: "ann.bambury@socialdemocrats.ie",
    phone: "083 118 0447"
  },
  {
    name: "Gerard Seaman",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Gerard Seaman.jpg",
    partyName: "Fine Gael",
    constituency: "Bandon-Kinsale",
    score: "./assets/images/negative.jpg",
    email: "gerard.seaman@gmail.com",
    phone: "087-9347100"
  },
  {
    name: "Gillian Coughlan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Gillian Coughlan.webp",
    partyName: "Fianna Fáil",
    constituency: "Bandon-Kinsale",
    score: "./assets/images/positive.jpg",
    email: "gillcoughlan@eircom.net",
    phone: "086 8814196"
  },
  {
    name: "John Michael Foley",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/John Michael Foley.jpg",
    partyName: "Fine Gael",
    constituency: "Bandon-Kinsale",
    score: "./assets/images/not_td.jpg",
    email: "jmfoleyelection24@gmail.com",
    phone: "086-3447740"
  },
  {
    name: "Margaret Murphy O'Mahony",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Margaret Murphy O'Mahony.webp",
    partyName: "Fianna Fáil",
    constituency: "Bandon-Kinsale",
    score: "./assets/images/negative.jpg",
    email: "murphyomahonymargaret@gmail.com",
    phone: ""
  },
  {
    name: "Marie O'Sullivan",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Marie O'Sullivan.jpg",
    partyName: "Fine Gael",
    constituency: "Bandon-Kinsale",
    score: "./assets/images/positive.jpg",
    email: "sully1967@msn.com",
    phone: "0863344703"
  },
  {
    name: "Sean O'Donovan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Sean O'Donovan.jpg",
    partyName: "Fianna Fáil",
    constituency: "Bandon-Kinsale",
    score: "./assets/images/not_td.jpg",
    email: "odonovaneire@gmail.com",
    phone: "0862351013"
  },
  {
    name: "Caroline Cronin",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Caroline Cronin.jpg",
    partyName: "Fine Gael",
    constituency: "Bantry-West Cork",
    score: "./assets/images/negative.jpg",
    email: "caroline.cronin@cllr.corkcoco.ie",
    phone: ""
  },
  {
    name: "Danny Crowley",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Danny Crowley.webp",
    partyName: "Fianna Fáil",
    constituency: "Bantry-West Cork",
    score: "./assets/images/positive.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Liz Coakley Wakefield",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Liz Coakley Wakefield.jpg",
    partyName: "Green Party",
    constituency: "Bantry-West Cork",
    score: "./assets/images/positive.jpg",
    email: "liz.wakefield@greenparty.ie",
    phone: ""
  },
  {
    name: "Mary Lou Leahy",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Mary Lou Leahy.jpg",
    partyName: "Fine Gael",
    constituency: "Bantry-West Cork",
    score: "./assets/images/not_td.jpg",
    email: "maryloumaguireleahy@gmail.com",
    phone: "087-3877024"
  },
  {
    name: "Patrick Murphy",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Patrick Murphy.jpg",
    partyName: "Aontú",
    constituency: "Bantry-West Cork",
    score: "./assets/images/negative.jpg",
    email: "p.murphy09@hotmail.com",
    phone: "086 236 0001"
  },
  {
    name: "Patrick Gerard Murphy",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Patrick Gerard Murphy.jpg",
    partyName: "Fianna Fáil",
    constituency: "Bantry-West Cork",
    score: "./assets/images/positive.jpg",
    email: "patmurph@eircom.net",
    phone: "086 2527058"
  },
  {
    name: "Gerry Coyle",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Gerry Coyle.jpg",
    partyName: "Fine Gael",
    constituency: "Belmullet",
    score: "./assets/images/negative.jpg",
    email: "gcoyle@cllr.mayococo.ie",
    phone: "087 2441380"
  },
  {
    name: "Micheál Ó Conaill",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Micheal O Conaill.png",
    partyName: "Green Party",
    constituency: "Belmullet",
    score: "./assets/images/positive.jpg",
    email: "micheal.oconaill@greenparty.ie",
    phone: ""
  },
  {
    name: "Pat Chambers",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Pat Chambers.jpg",
    partyName: "Fine Gael",
    constituency: "Belmullet",
    score: "./assets/images/not_td.jpg",
    email: "patchambers2304@gmail.com",
    phone: "087 2348697"
  },
  {
    name: "Paul McNamara",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Paul McNamara.webp",
    partyName: "Fianna Fáil",
    constituency: "Belmullet",
    score: "./assets/images/negative.jpg",
    email: "paulmcnamara04@eircom.net",
    phone: "086  2210048"
  },
  {
    name: "Sean Carey",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Sean Carey.png",
    partyName: "Fianna Fáil",
    constituency: "Belmullet",
    score: "./assets/images/not_td.jpg",
    email: "cllrseancarey@mayococo.ie",
    phone: "087-9623799"
  },
  {
    name: "Aubrey Claffey",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Aubrey Claffey.jpg",
    partyName: "Aontú",
    constituency: "Birr",
    score: "./assets/images/negative.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Audrey Hennessy Kennedy",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Audrey Hennessy Kennedy.webp",
    partyName: "Fianna Fáil",
    constituency: "Birr",
    score: "./assets/images/positive.jpg",
    email: "audreyhenny@gmail.com",
    phone: "087 446 8660"
  },
  {
    name: "Barbara Daly",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Barbara Daly.webp",
    partyName: "Fianna Fáil",
    constituency: "Birr",
    score: "./assets/images/not_td.jpg",
    email: "dooleybarbara1960@hotmail.com",
    phone: "086 3542242"
  },
  {
    name: "Clare Claffey",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Clare Claffey.png",
    partyName: "Social Democrats",
    constituency: "Birr",
    score: "./assets/images/negative.jpg",
    email: "clare.claffey@socialdemocrats.ie",
    phone: "(087) 6787403"
  },
  {
    name: "Ekaterina Koneva",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Ekaterina Koneva.png",
    partyName: "Green Party",
    constituency: "Birr",
    score: "./assets/images/positive.jpg",
    email: "ekaterina.koneva@greenparty.ie",
    phone: ""
  },
  {
    name: "Hugh Egan",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Hugh Egan.jpg",
    partyName: "Fine Gael",
    constituency: "Birr",
    score: "./assets/images/not_td.jpg",
    email: "hughieegan@outlook.com",
    phone: "086-8492736"
  },
  {
    name: "John Clendennen",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/John Clendennen.jpg",
    partyName: "Fine Gael",
    constituency: "Birr",
    score: "./assets/images/negative.jpg",
    email: "john@johnclendennen.com",
    phone: "(087) 6118883"
  },
  {
    name: "Peter Ormond",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Peter Ormond.webp",
    partyName: "Fianna Fáil",
    constituency: "Birr",
    score: "./assets/images/not_td.jpg",
    email: "peter.ormond@gmail.com",
    phone: "(086) 2121449"
  },
  {
    name: "Cian Mac Aonghusa",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Cian Mac Aonghusa.webp",
    partyName: "People Before Profit",
    constituency: "Blackrock",
    score: "./assets/images/not_td.jpg",
    email: "cian.macaonghusa@pbp.ie",
    phone: ""
  },
  {
    name: "Conor Dowling",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Conor Dowling.jpg",
    partyName: "Green Party",
    constituency: "Blackrock",
    score: "./assets/images/negative.jpg",
    email: "conor.dowling@greenparty.ie",
    phone: "085 1610357"
  },
  {
    name: "Daniel Carson",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Daniel Carson.jpg",
    partyName: "Fine Gael",
    constituency: "Blackrock",
    score: "./assets/images/positive.jpg",
    email: "dancarsonfg@gmail.com",
    phone: ""
  },
  {
    name: "Lydia Bigley",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Lydia Bigley.png",
    partyName: "Social Democrats",
    constituency: "Blackrock",
    score: "./assets/images/not_td.jpg",
    email: "lydia.bigley[at]socialdemocrats[dot]ie",
    phone: ""
  },
  {
    name: "Marie Baker",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Marie Baker.jpg",
    partyName: "Fine Gael",
    constituency: "Blackrock",
    score: "./assets/images/negative.jpg",
    email: "mbaker@cllr.dlrcoco.ie",
    phone: "086-8186704"
  },
  {
    name: "Martha Fanning",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Martha Fanning.png",
    partyName: "Labour",
    constituency: "Blackrock",
    score: "./assets/images/positive.jpg",
    email: "mfanning@cllr.dlrcoco.ie",
    phone: "087 204 1559"
  },
  {
    name: "Maurice Dockrell",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Maurice Dockrell.jpg",
    partyName: "Fine Gael",
    constituency: "Blackrock",
    score: "./assets/images/not_td.jpg",
    email: "mdockrell@cllr.dlrcoco.ie",
    phone: ""
  },
  {
    name: "Michael Reynolds",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Michael Reynolds.webp",
    partyName: "Fianna Fáil",
    constituency: "Blackrock",
    score: "./assets/images/negative.jpg",
    email: "michael.reynoldsff@gmail.com",
    phone: "087 475 0461"
  },
  {
    name: "Breda Hanaphy",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Breda Hanaphy.png",
    partyName: "Sinn Féin",
    constituency: "Blanchardstown - Mulhuddart",
    score: "./assets/images/positive.jpg",
    email: "Breda.Hanaphy@cllrs.fingal.ie",
    phone: "0871620917"
  },
  {
    name: "John Kingsley Onwumereh",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/John Kingsley Onwumereh.jpg",
    partyName: "Fianna Fáil",
    constituency: "Blanchardstown - Mulhuddart",
    score: "./assets/images/positive.jpg",
    email: "jk.onwumereh@cllrs.fingal.ie",
    phone: "089 9642783"
  },
  {
    name: "Lorna Nolan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Lorna Nolan.webp",
    partyName: "Fianna Fáil",
    constituency: "Blanchardstown - Mulhuddart",
    score: "./assets/images/not_td.jpg",
    email: "Lorna.Nolan@cllrs.fingal.ie",
    phone: ""
  },
  {
    name: "Mary McCamley",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Mary McCamley.png",
    partyName: "Labour",
    constituency: "Blanchardstown - Mulhuddart",
    score: "./assets/images/positive.jpg",
    email: "Mary.McCamley@cllrs.fingal.ie",
    phone: "0876501441"
  },
  {
    name: "Steve O'Reilly",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Steve O'Reilly.jpg",
    partyName: "Fine Gael",
    constituency: "Blanchardstown - Mulhuddart",
    score: "./assets/images/negative.jpg",
    email: "steveoreillyfg@gmail.com",
    phone: "089-2536813"
  },
  {
    name: "Brian Phelan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Brian Phelan.webp",
    partyName: "Fianna Fáil",
    constituency: "Borris-in-Ossory-Mountmellick",
    score: "./assets/images/not_td.jpg",
    email: "brianphelan04@hotmail.com",
    phone: "086 171 4240"
  },
  {
    name: "Bryan Corrigan",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Bryan Corrigan.png",
    partyName: "Labour",
    constituency: "Borris-in-Ossory-Mountmellick",
    score: "./assets/images/negative.jpg",
    email: "bryancorrigan@outlook.ie",
    phone: ""
  },
  {
    name: "Conor Bergin",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Conor Bergin.jpg",
    partyName: "Fine Gael",
    constituency: "Borris-in-Ossory-Mountmellick",
    score: "./assets/images/positive.jpg",
    email: "cbergin@laoiscouncillors.ie",
    phone: "087 1620097"
  },
  {
    name: "Declan Good",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Declan Good.webp",
    partyName: "Fianna Fáil",
    constituency: "Borris-in-Ossory-Mountmellick",
    score: "./assets/images/not_td.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Fintan Cuddy",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Fintan Cuddy.jpg",
    partyName: "Fianna Fáil",
    constituency: "Borris-in-Ossory-Mountmellick",
    score: "./assets/images/negative.jpg",
    email: "fintan.cuddy@outlook.com",
    phone: "085 192 4376"
  },
  {
    name: "Fiona Dunne",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Fiona Dunne.jpg",
    partyName: "Green Party",
    constituency: "Borris-in-Ossory-Mountmellick",
    score: "./assets/images/positive.jpg",
    email: "fiona.dunne@greenparty.ie",
    phone: "086 8197439"
  },
  {
    name: "John King",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/John King.jpg",
    partyName: "Fine Gael",
    constituency: "Borris-in-Ossory-Mountmellick",
    score: "./assets/images/positive.jpg",
    email: "jking@laoiscouncillors.ie",
    phone: "085 7207066"
  },
  {
    name: "Paddy Bracken",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Paddy Bracken.jpg",
    partyName: "Fianna Fáil",
    constituency: "Borris-in-Ossory-Mountmellick",
    score: "./assets/images/not_td.jpg",
    email: "pbracken@laoiscouncillors.ie",
    phone: "087 660 6804"
  },
  {
    name: "Paddy Buggy",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Paddy Buggy.jpg",
    partyName: "Fine Gael",
    constituency: "Borris-in-Ossory-Mountmellick",
    score: "./assets/images/negative.jpg",
    email: "buggypaddy@gmail.com",
    phone: "087-6238268"
  },
  {
    name: "Seamús McDonald",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Seamus McDonald.webp",
    partyName: "Fianna Fáil",
    constituency: "Borris-in-Ossory-Mountmellick",
    score: "./assets/images/positive.jpg",
    email: "smcdonald@laoiscouncillors.ie",
    phone: "087 989 5112"
  },
  {
    name: "Aidan Sampey",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Aidan Sampey.webp",
    partyName: "Fianna Fáil",
    constituency: "Boyle",
    score: "./assets/images/not_td.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Dympna Daly-Finn",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Dympna Daly-Finn.jpg",
    partyName: "Fine Gael",
    constituency: "Boyle",
    score: "./assets/images/positive.jpg",
    email: "dympnadalyfinnfg@gmail.com",
    phone: ""
  },
  {
    name: "Liam Callaghan",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Liam Callaghan.jpg",
    partyName: "Fine Gael",
    constituency: "Boyle",
    score: "./assets/images/not_td.jpg",
    email: "cllrlcallaghan@roscommoncoco.ie",
    phone: "086 3325839"
  },
  {
    name: "Michael Mulligan",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Michael Mulligan.png",
    partyName: "Sinn Féin",
    constituency: "Boyle",
    score: "./assets/images/negative.jpg",
    email: "cllrmmulligan@roscommoncoco.ie",
    phone: "087 7799781"
  },
  {
    name: "Sean Moylan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Sean Moylan.webp",
    partyName: "Fianna Fáil",
    constituency: "Boyle",
    score: "./assets/images/negative.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Anne Ferris",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Anne Ferris.png",
    partyName: "Labour",
    constituency: "Bray East",
    score: "./assets/images/negative.jpg",
    email: "aferris@wicklowcoco.ie",
    phone: "086 236 4780"
  },
  {
    name: "Aoife Flynn Kennedy",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Aoife Flynn Kennedy.jpg",
    partyName: "Fine Gael",
    constituency: "Bray East",
    score: "./assets/images/positive.jpg",
    email: "aflynnkennedy@wicklowcoco.ie",
    phone: "086 400 4700"
  },
  {
    name: "Ciaran Hogan",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Ciaran Hogan.jpg",
    partyName: "Aontú",
    constituency: "Bray East",
    score: "./assets/images/not_td.jpg",
    email: "c.hogan@Aontú.ie",
    phone: "089 702 9857"
  },
  {
    name: "Erika Doyle",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Erika Doyle.png",
    partyName: "Green Party",
    constituency: "Bray East",
    score: "./assets/images/positive.jpg",
    email: "erika.doyle@greenparty.ie",
    phone: "087 263 9516"
  },
  {
    name: "Dermot O'Brien",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Dermot O'Brien.png",
    partyName: "Sinn Féin",
    constituency: "Bray West",
    score: "./assets/images/positive.jpg",
    email: "dermotobriensf@gmail.com",
    phone: "086 063 5195"
  },
  {
    name: "Frank Hayes",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Frank Hayes.webp",
    partyName: "People Before Profit",
    constituency: "Bray West",
    score: "./assets/images/not_td.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Melanie Corrigan",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Melanie Corrigan.jpg",
    partyName: "Fine Gael",
    constituency: "Bray West",
    score: "./assets/images/not_td.jpg",
    email: "mcorrigan1@wicklowcoco.ie",
    phone: ""
  },
  {
    name: "Fionan Bradley",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Fionan Bradley.webp",
    partyName: "Fianna Fáil",
    constituency: "Buncrana",
    score: "./assets/images/negative.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Jack Murray",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Jack Murray.png",
    partyName: "Sinn Féin",
    constituency: "Buncrana",
    score: "./assets/images/positive.jpg",
    email: "jackmurray@donegalcoco.ie",
    phone: "087 3509670"
  },
  {
    name: "Jason Le Masurier",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Jason le Masurier.png",
    partyName: "Green Party",
    constituency: "Buncrana",
    score: "./assets/images/not_td.jpg",
    email: "jason.lemasurier@greenparty.ie",
    phone: "085 2522752"
  },
  {
    name: "Joy Beard",
    imageUrl: "./assets/images/LE 2024 Images/100% Redress Party/Joy Beard.jpg",
    partyName: "100% Redress Party",
    constituency: "Buncrana",
    score: "./assets/images/negative.jpg",
    email: "enquiries@100percentredressparty.ie",
    phone: ""
  },
  {
    name: "Paul Canning",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Paul Canning.webp",
    partyName: "Fianna Fáil",
    constituency: "Buncrana",
    score: "./assets/images/positive.jpg",
    email: "paulcanning@donegalcoco.ie",
    phone: "086 3839004"
  },
  {
    name: "Terry Crossan",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Terry Crossan.png",
    partyName: "Sinn Féin",
    constituency: "Buncrana",
    score: "./assets/images/not_td.jpg",
    email: "terrycrossan@donegalcoco.ie",
    phone: ""
  },
  {
    name: "Angela Boyle Shafer",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Angela Boyle Shafer.png",
    partyName: "Labour",
    constituency: "Cabra-Glasnevin",
    score: "./assets/images/positive.jpg",
    email: "angelaboyleshafer@gmail.com",
    phone: ""
  },
  {
    name: "Cat O'Driscoll",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Cat O'Driscoll.png",
    partyName: "Social Democrats",
    constituency: "Cabra-Glasnevin",
    score: "./assets/images/negative.jpg",
    email: "cat.odriscoll@socialdemocrats.ie",
    phone: "087 3381424"
  },
  {
    name: "Colm O'Rourke",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Colm O'Rourke.jpg",
    partyName: "Fine Gael",
    constituency: "Cabra-Glasnevin",
    score: "./assets/images/not_td.jpg",
    email: "colm.orourke@dublincity.ie",
    phone: 871336188
  },
  {
    name: "Declan Meenagh",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Declan Meenagh.png",
    partyName: "Labour",
    constituency: "Cabra-Glasnevin",
    score: "./assets/images/negative.jpg",
    email: "marie.sherlock@dublincity.ie",
    phone: 879928608
  },
  {
    name: "Eimer McCormack",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Eimer McCormack.webp",
    partyName: "Fianna Fáil",
    constituency: "Cabra-Glasnevin",
    score: "./assets/images/positive.jpg",
    email: "eimer.mccormack@dublincity.ie",
    phone: "087 3999265"
  },
  {
    name: "Feljin Jose",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Feljin Jose.jpg",
    partyName: "Green Party",
    constituency: "Cabra-Glasnevin",
    score: "./assets/images/not_td.jpg",
    email: "feljin.jose@greenparty.ie",
    phone: "083 8442020"
  },
  {
    name: "Garrett Greene",
    imageUrl: "./assets/images/LE 2024 Images/Workers Party/Garrett Greene.jpg",
    partyName: "Workers Party",
    constituency: "Cabra-Glasnevin",
    score: "./assets/images/negative.jpg",
    email: "garrett.greene@workersparty.ie",
    phone: ""
  },
  {
    name: "Gayle Ralph",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Gayle Ralph.jpg",
    partyName: "Fine Gael",
    constituency: "Cabra-Glasnevin",
    score: "./assets/images/positive.jpg",
    email: "CampaignGayleRalph@gmail.com",
    phone: "087-7597021"
  },
  {
    name: "Ian Noel Smyth",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Ian Noel Smyth.jpg",
    partyName: "Aontú",
    constituency: "Cabra-Glasnevin",
    score: "./assets/images/not_td.jpg",
    email: "iannoelsmyth@gmail.com",
    phone: "087 768 6428"
  },
  {
    name: "John Stephens",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/John Stephens.webp",
    partyName: "Fianna Fáil",
    constituency: "Cabra-Glasnevin",
    score: "./assets/images/negative.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Léna Seale",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Lena Seale.webp",
    partyName: "People Before Profit",
    constituency: "Cabra-Glasnevin",
    score: "./assets/images/positive.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Natalie Treacy",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Natalie Treacy.png",
    partyName: "Sinn Féin",
    constituency: "Cabra-Glasnevin",
    score: "./assets/images/not_td.jpg",
    email: "natalietreacysinnfein@gmail.com",
    phone: ""
  },
  {
    name: "Seamas McGrattan",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Seamas McGrattan.jpg",
    partyName: "Sinn Féin",
    constituency: "Cabra-Glasnevin",
    score: "./assets/images/negative.jpg",
    email: "seamas.mcgrattan@dublincity.ie",
    phone: 877848153
  },
  {
    name: "Alan Moynihan",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Alan Moynihan.png",
    partyName: "Social Democrats",
    constituency: "Cahir",
    score: "./assets/images/positive.jpg",
    email: "alan.moynihan@socialdemocrats.ie",
    phone: ""
  },
  {
    name: "Marie Murphy",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Marie Murphy.jpg",
    partyName: "Fine Gael",
    constituency: "Cahir",
    score: "./assets/images/not_td.jpg",
    email: "marie.murphy@cllr.tipperarycoco.ie",
    phone: "086 8261387"
  },
  {
    name: "Micheal Anglim",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Micheal Anglim.webp",
    partyName: "Fianna Fáil",
    constituency: "Cahir",
    score: "./assets/images/negative.jpg",
    email: "micheal.anglim@cllr.tipperarycoco.ie",
    phone: "086 0251277"
  },
  {
    name: "Deirdre Cullen",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Deirdre Cullen.webp",
    partyName: "Fianna Fáil",
    constituency: "Callan-Thomastown",
    score: "./assets/images/negative.jpg",
    email: "cllrdeirdre.cullen@kilkennycoco.ie",
    phone: "087-3456502"
  },
  {
    name: "Joe Sheridan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Joe Sheridan.webp",
    partyName: "Fianna Fáil",
    constituency: "Callan-Thomastown",
    score: "./assets/images/positive.jpg",
    email: "joe@sheridanjoe.ie",
    phone: "087 2200877"
  },
  {
    name: "Michael Doyle",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Michael Doyle.jpg",
    partyName: "Fine Gael",
    constituency: "Callan-Thomastown",
    score: "./assets/images/not_td.jpg",
    email: "cllrmichael.doyle@kilkennycoco.ie",
    phone: "087-3941244"
  },
  {
    name: "Orla Kelly",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Orla Kelly.jpg",
    partyName: "Fine Gael",
    constituency: "Callan-Thomastown",
    score: "./assets/images/negative.jpg",
    email: "orla@orlakellyfg.ie",
    phone: "085-1627144"
  },
  {
    name: "Peter 'Chap' Cleere",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Peter 'Chap' Cleere.webp",
    partyName: "Fianna Fáil",
    constituency: "Callan-Thomastown",
    score: "./assets/images/positive.jpg",
    email: "cllrpeter.cleere@kilkennycoco.ie",
    phone: "086-4666409"
  },
  {
    name: "Al Fitzgerald",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Al Fitzgerald.webp",
    partyName: "Fianna Fáil",
    constituency: "Cappamore-Kilmallock",
    score: "./assets/images/negative.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Denis Hourigan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Denis Hourigan.webp",
    partyName: "Fianna Fáil",
    constituency: "Cappamore-Kilmallock",
    score: "./assets/images/negative.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Gregory Conway",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Gregory Conway.jpg",
    partyName: "Fine Gael",
    constituency: "Cappamore-Kilmallock",
    score: "./assets/images/not_td.jpg",
    email: "conwaygregory@gmail.com",
    phone: "087-7539113"
  },
  {
    name: "Martin Ryan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Martin Ryan.webp",
    partyName: "Fianna Fáil",
    constituency: "Cappamore-Kilmallock",
    score: "./assets/images/negative.jpg",
    email: "martin.ryan@limerick.ie",
    phone: "087 2551617"
  },
  {
    name: "Michael Ryan",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Michael Ryan.jpg",
    partyName: "Aontú",
    constituency: "Cappamore-Kilmallock",
    score: "./assets/images/positive.jpg",
    email: "michael.ryan@Aontú.ie",
    phone: "089 233 2031"
  },
  {
    name: "Mike Donegan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Mike Donegan.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cappamore-Kilmallock",
    score: "./assets/images/not_td.jpg",
    email: "michael.donegan@limerick.ie",
    phone: "086 8735625"
  },
  {
    name: "Noreen Stokes",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Noreen Stokes.jpg",
    partyName: "Fine Gael",
    constituency: "Cappamore-Kilmallock",
    score: "./assets/images/negative.jpg",
    email: "noreenstokes18@gmail.com",
    phone: "087-6243336"
  },
  {
    name: "PJ Carey",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/PJ Carey.jpg",
    partyName: "Sinn Féin",
    constituency: "Cappamore-Kilmallock",
    score: "./assets/images/positive.jpg",
    email: "pj.carey@limerick.ie",
    phone: "087 2125273"
  },
  {
    name: "Rob O'Donnell",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Rob O'Donnell.png",
    partyName: "Green Party",
    constituency: "Cappamore-Kilmallock",
    score: "./assets/images/not_td.jpg",
    email: "rob.odonnell@greenparty.ie",
    phone: ""
  },
  {
    name: "Tommy O'Sullivan",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Tommy O'Sullivan.jpg",
    partyName: "Fine Gael",
    constituency: "Cappamore-Kilmallock",
    score: "./assets/images/negative.jpg",
    email: "tommytcr@gmail.com",
    phone: "087-8122173"
  },
  {
    name: "Adrienne Wallace",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Adrienne Wallace.webp",
    partyName: "People Before Profit",
    constituency: "Carlow",
    score: "./assets/images/positive.jpg",
    email: "awallace@carlow.ie",
    phone: "086 3119991"
  },
  {
    name: "Andrea Dalton",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Andrea Dalton.webp",
    partyName: "Fianna Fáil",
    constituency: "Carlow",
    score: "./assets/images/not_td.jpg",
    email: "adalton@carlow.ie",
    phone: "086 8512813"
  },
  {
    name: "Fergal Browne",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Fergal Browne.jpg",
    partyName: "Fine Gael",
    constituency: "Carlow",
    score: "./assets/images/negative.jpg",
    email: "fbrowne@carlow.ie",
    phone: "087 9884113"
  },
  {
    name: "Fintan Phelan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Fintan Phelan.webp",
    partyName: "Fianna Fáil",
    constituency: "Carlow",
    score: "./assets/images/positive.jpg",
    email: "fphelan@carlow.ie",
    phone: "085 1398139"
  },
  {
    name: "Ken Murnane",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Ken Murnane.webp",
    partyName: "Fianna Fáil",
    constituency: "Carlow",
    score: "./assets/images/positive.jpg",
    email: "kmurnane@carlow.ie",
    phone: "085 8607754"
  },
  {
    name: "Molly Aylesbury",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Molly Aylesbury.jpeg",
    partyName: "Green Party",
    constituency: "Carlow",
    score: "./assets/images/negative.jpg",
    email: "molly.aylesbury@greenparty.ie",
    phone: ""
  },
  {
    name: "Paul Doogue",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Paul Doogue.jpg",
    partyName: "Fine Gael",
    constituency: "Carlow",
    score: "./assets/images/not_td.jpg",
    email: "pauldoogue3@gmail.com",
    phone: "087-6121666"
  },
  {
    name: "Tom O'Neill",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Tom O'Neill.png",
    partyName: "Fine Gael",
    constituency: "Carlow",
    score: "./assets/images/positive.jpg",
    email: "toneill@carlow.ie",
    phone: "086 3864486"
  },
  {
    name: "Albert Doherty",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Albert Doherty.png",
    partyName: "Sinn Féin",
    constituency: "Carndonagh",
    score: "./assets/images/not_td.jpg",
    email: "albertdoherty@donegalcoco.ie",
    phone: "086 3840249"
  },
  {
    name: "Ali Farren",
    imageUrl: "./assets/images/LE 2024 Images/100% Redress Party/Ali Farren.jpg",
    partyName: "100% Redress Party",
    constituency: "Carndonagh",
    score: "./assets/images/negative.jpg",
    email: "enquiries@100percentredressparty.ie",
    phone: ""
  },
  {
    name: "Johnny McGuinness",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Johnny McGuinness.jpg",
    partyName: "Fine Gael",
    constituency: "Carndonagh",
    score: "./assets/images/positive.jpg",
    email: "johnnymcguinness@donegalcoco.ie",
    phone: "087 777 0626"
  },
  {
    name: "Martin McDermott",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Martin McDermott.webp",
    partyName: "Fianna Fáil",
    constituency: "Carndonagh",
    score: "./assets/images/not_td.jpg",
    email: "martinmcdermott@donegalcoco.ie",
    phone: "086 8366687"
  },
  {
    name: "Michael White",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Michael White.png",
    partyName: "Green Party",
    constituency: "Carndonagh",
    score: "./assets/images/negative.jpg",
    email: "Michael.White@greenparty.ie",
    phone: ""
  },
  {
    name: "Ita Reynolds Flynn",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Ita Reynolds Flynn.jpg",
    partyName: "Fine Gael",
    constituency: "Carrick-on-Shannon",
    score: "./assets/images/not_td.jpg",
    email: "irelynolds@leitrimcoco.ie",
    phone: "086) 1737181"
  },
  {
    name: "Leslie O'Hora",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Leslie O'Hora.jpg",
    partyName: "Green Party",
    constituency: "Carrick-on-Shannon",
    score: "./assets/images/negative.jpg",
    email: "leslie.ohora@greenparty.ie",
    phone: "086 2555369"
  },
  {
    name: "Lola Gonzalez Farrell",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Lola Gonzalez Farrell.png",
    partyName: "Social Democrats",
    constituency: "Carrick-on-Shannon",
    score: "./assets/images/not_td.jpg",
    email: "lola.gonzalezfarrell@socialdemocrats.ie",
    phone: "089 254 9239"
  },
  {
    name: "Maeve Reynolds",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Maeve Reynolds.png",
    partyName: "Fine Gael",
    constituency: "Carrick-on-Shannon",
    score: "./assets/images/negative.jpg",
    email: "maevereynolds@outlook.com",
    phone: "086-1525947"
  },
  {
    name: "Paddy Farrell",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Paddy Farrell.webp",
    partyName: "Fianna Fáil",
    constituency: "Carrick-on-Shannon",
    score: "./assets/images/positive.jpg",
    email: "paddyfarrell@leitrimcoco.ie",
    phone: "(087) 1369719"
  },
  {
    name: "Seán McGowan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Sean McGowan.webp",
    partyName: "Fianna Fáil",
    constituency: "Carrick-on-Shannon",
    score: "./assets/images/not_td.jpg",
    email: "smcgowan@leitrimcoco.ie",
    phone: "087 2318176"
  },
  {
    name: "Imelda Goldsboro",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Imelda Goldsboro.webp",
    partyName: "Fianna Fáil",
    constituency: "Carrick-on-Suir",
    score: "./assets/images/not_td.jpg",
    email: "imelda.goldsboro@cllr.tipperarycoco.ie",
    phone: "087 2444819"
  },
  {
    name: "Kieran Bourke",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Kieran Bourke.webp",
    partyName: "Fianna Fáil",
    constituency: "Carrick-on-Suir",
    score: "./assets/images/positive.jpg",
    email: "kieran.bourke@cllr.tipperarycoco.ie",
    phone: "086 8049772"
  },
  {
    name: "Mark Fitzgerald",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Mark Fitzgerald.jpg",
    partyName: "Fine Gael",
    constituency: "Carrick-on-Suir",
    score: "./assets/images/not_td.jpg",
    email: "mark.fitzgerald@cllr.tipperarycoco.ie",
    phone: "087-6359397"
  },
  {
    name: "Michael Brennan",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Michael Brennan.png",
    partyName: "Labour",
    constituency: "Carrick-on-Suir",
    score: "./assets/images/negative.jpg",
    email: "michael.breannan@gmail.com",
    phone: "087 359 6275"
  },
  {
    name: "Aidan Campbell",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Aidan Campbell.jpg",
    partyName: "Fine Gael",
    constituency: "Carrickmacross-Castleblayney",
    score: "./assets/images/positive.jpg",
    email: "aidan.campbell@cllr.monaghancoco.ie",
    phone: "(087) 9003860"
  },
  {
    name: "Aoife McCooey",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Aoife McCooey.webp",
    partyName: "Fianna Fáil",
    constituency: "Carrickmacross-Castleblayney",
    score: "./assets/images/not_td.jpg",
    email: "aoife.mccooey@cllr.monaghancoco.ie",
    phone: "(086) 0852049"
  },
  {
    name: "Colm Carthy",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Colm Carthy.jpg",
    partyName: "Sinn Féin",
    constituency: "Carrickmacross-Castleblayney",
    score: "./assets/images/positive.jpg",
    email: "colm.carthy@cllr.monaghancoco.ie",
    phone: "(087) 6837180"
  },
  {
    name: "Noel Keelan",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Noel Keelan.png",
    partyName: "Sinn Féin",
    constituency: "Carrickmacross-Castleblayney",
    score: "./assets/images/negative.jpg",
    email: "noel.keelan@cllr.monaghancoco.ie",
    phone: "(087) 2468878"
  },
  {
    name: "Peter Conlon",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Peter Conlon.jpg",
    partyName: "Fine Gael",
    constituency: "Carrickmacross-Castleblayney",
    score: "./assets/images/not_td.jpg",
    email: "peter.conlon@cllr.monaghancoco.ie",
    phone: "087 9498257"
  },
  {
    name: "PJ O'Hanlon",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/PJ O'Hanlon.webp",
    partyName: "Fianna Fáil",
    constituency: "Carrickmacross-Castleblayney",
    score: "./assets/images/negative.jpg",
    email: "pj.ohanlon@cllr.monaghancoco.ie",
    phone: "(087) 2416954"
  },
  {
    name: "Tate Donnelly",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Tate Donnelly.png",
    partyName: "Green Party",
    constituency: "Carrickmacross-Castleblayney",
    score: "./assets/images/positive.jpg",
    email: "tate.donnelly@greenparty.ie",
    phone: "083 0381816"
  },
  {
    name: "Audrey Buckley",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Audrey Buckley.webp",
    partyName: "Fianna Fáil",
    constituency: "Carrigaline",
    score: "./assets/images/not_td.jpg",
    email: "audreybuckley2019@gmail.com",
    phone: "086 1257512"
  },
  {
    name: "Jack White",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Jack White.jpg",
    partyName: "Fine Gael",
    constituency: "Carrigaline",
    score: "./assets/images/not_td.jpg",
    email: "jack.white@cllr.corkcoco.ie",
    phone: "086 8967343"
  },
  {
    name: "John O'Regan",
    imageUrl: "./assets/images/LE 2024 Images/Labour/John O'Regan.png",
    partyName: "Labour",
    constituency: "Carrigaline",
    score: "./assets/images/negative.jpg",
    email: "johnoreganlabour@gmail.com",
    phone: "086 803 8600"
  },
  {
    name: "Monica Oikeh",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Monica Oikeh.jpg",
    partyName: "Green Party",
    constituency: "Carrigaline",
    score: "./assets/images/not_td.jpg",
    email: "monica.oikeh@greenparty.ie",
    phone: ""
  },
  {
    name: "Richard Terry",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Richard Terry.png",
    partyName: "Social Democrats",
    constituency: "Carrigaline",
    score: "./assets/images/negative.jpg",
    email: "richard.terry@socialdemocrats.ie",
    phone: "089 278 3355"
  },
  {
    name: "Seamus McGrath",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Seamus McGrath.webp",
    partyName: "Fianna Fáil",
    constituency: "Carrigaline",
    score: "./assets/images/positive.jpg",
    email: "cllrseamusmcgrath@eircom.net",
    phone: "086 3916328"
  },
  {
    name: "Una McCarthy",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Una McCarthy.jpg",
    partyName: "Fine Gael",
    constituency: "Carrigaline",
    score: "./assets/images/not_td.jpg",
    email: "una.mccarthy@cllr.corkcoco.ie",
    phone: "085 7196834"
  },
  {
    name: "Declan Burgess",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Declan Burgess.jpg",
    partyName: "Fine Gael",
    constituency: "Cashel-Tipperary",
    score: "./assets/images/positive.jpg",
    email: "declan.burgess@cllr.tipperarycoco.ie",
    phone: "086-7330454"
  },
  {
    name: "Jacqui Finnan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Jacqui Finnan.webp",
    partyName: "Fianna Fáil",
    constituency: "Cashel-Tipperary",
    score: "./assets/images/not_td.jpg",
    email: "jacquifin.2014@gmail.com",
    phone: "087 122 9431"
  },
  {
    name: "John Crosse",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/John Crosse.jpg",
    partyName: "Fine Gael",
    constituency: "Cashel-Tipperary",
    score: "./assets/images/negative.jpg",
    email: "john.crosse@cllr.tipperarycoco.ie",
    phone: "087 9165851"
  },
  {
    name: "Mary Hanna Hourigan",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Mary Hanna Hourigan.jpg",
    partyName: "Fine Gael",
    constituency: "Cashel-Tipperary",
    score: "./assets/images/negative.jpg",
    email: "mary.hanna@cllr.tipperarycoco.ie",
    phone: "085 8150689"
  },
  {
    name: "Matthew Fogarty",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Matthew Fogarty.jpg",
    partyName: "Fine Gael",
    constituency: "Cashel-Tipperary",
    score: "./assets/images/positive.jpg",
    email: "matthewfogarty1808@gmail.com",
    phone: "087-2227993"
  },
  {
    name: "Roger Kennedy",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Roger Kennedy.webp",
    partyName: "Fianna Fáil",
    constituency: "Cashel-Tipperary",
    score: "./assets/images/negative.jpg",
    email: "roger.kennedy@cllr.tipperarycoco.ie",
    phone: "086 8161058"
  },
  {
    name: "Tony Black",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Tony Black.png",
    partyName: "Sinn Féin",
    constituency: "Cashel-Tipperary",
    score: "./assets/images/positive.jpg",
    email: "tony.black@cllr.tipperarycoco.ie",
    phone: "087-7465762"
  },
  {
    name: "Al McDonnell",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Al McDonnell.jpg",
    partyName: "Fianna Fáil",
    constituency: "Castlebar",
    score: "./assets/images/negative.jpg",
    email: "amcdonnell@cllr.mayococo.ie",
    phone: "086 8109499"
  },
  {
    name: "Blackie Gavin",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Blackie Gavin.webp",
    partyName: "Fianna Fáil",
    constituency: "Castlebar",
    score: "./assets/images/positive.jpg",
    email: "bgavin@cllr.mayococo.ie",
    phone: "087 2490933"
  },
  {
    name: "Cyril Burke",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Cyril Burke.jpg",
    partyName: "Fine Gael",
    constituency: "Castlebar",
    score: "./assets/images/not_td.jpg",
    email: "cburke@cllr.mayococo.ie",
    phone: "087 6891 821"
  },
  {
    name: "Donna Sheridan",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Donna Sheridan.jpeg",
    partyName: "Fine Gael",
    constituency: "Castlebar",
    score: "./assets/images/negative.jpg",
    email: "cllrdonnasheridan@mayococo.ie",
    phone: "087-6723532"
  },
  {
    name: "Ger Deere",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Ger Deere.png",
    partyName: "Fine Gael",
    constituency: "Castlebar",
    score: "./assets/images/not_td.jpg",
    email: "cllrgerdeere@mayococo.ie",
    phone: "087-7724419"
  },
  {
    name: "Kamal Uddin",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Kamal Uddin.png",
    partyName: "Labour",
    constituency: "Castlebar",
    score: "./assets/images/not_td.jpg",
    email: "Kamal.uddin@votelabour.ie",
    phone: "087 912 8650"
  },
  {
    name: "Martin McLoughlin",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Martin McLoughlin.webp",
    partyName: "Fianna Fáil",
    constituency: "Castlebar",
    score: "./assets/images/negative.jpg",
    email: "martinmcloughlin13@gmail.com",
    phone: "087 4158369"
  },
  {
    name: "John Brennan",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/John Brennan.jpg",
    partyName: "Fine Gael",
    constituency: "Castlecomer",
    score: "./assets/images/not_td.jpg",
    email: "cllrjohn.brennan@kilkennycoco.ie",
    phone: "087 7697479"
  },
  {
    name: "Mary Hilda Cavanagh",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Mary Hilda Cavanagh.jpg",
    partyName: "Fine Gael",
    constituency: "Castlecomer",
    score: "./assets/images/negative.jpg",
    email: "cllrmaryhilda.cavanagh@kilkennycoco.ie",
    phone: "086 8157366"
  },
  {
    name: "Michael Delaney",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Michael Delaney.webp",
    partyName: "Fianna Fáil",
    constituency: "Castlecomer",
    score: "./assets/images/not_td.jpg",
    email: "cllrmichael.delaney@kilkennycoco.ie",
    phone: "087-1040019"
  },
  {
    name: "Michael McCarthy",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Michael McCarthy.webp",
    partyName: "Fianna Fáil",
    constituency: "Castlecomer",
    score: "./assets/images/negative.jpg",
    email: "cllrmichael.mccarthy@kilkennycoco.ie",
    phone: "086-2568120"
  },
  {
    name: "Pat Fitzpatrick",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Pat Fitzpatrick.jpg",
    partyName: "Fianna Fáil",
    constituency: "Castlecomer",
    score: "./assets/images/positive.jpg",
    email: "cllrpat.fitzpatrick@kilkennycoco.ie",
    phone: "086-0892852"
  },
  {
    name: "Bobby O'Connell",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Bobby O'Connell.jpg",
    partyName: "Fine Gael",
    constituency: "Castleisland",
    score: "./assets/images/not_td.jpg",
    email: "cllrbobby.oconnell@gmail.com",
    phone: "087 2250177"
  },
  {
    name: "Cait Ní Riordáin",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Cait Ni Riordain.jpg",
    partyName: "Aontú",
    constituency: "Castleisland",
    score: "./assets/images/negative.jpg",
    email: "CaitAontúchiarrai@gmail.com",
    phone: "085 729 9375"
  },
  {
    name: "Fionnán Fitzgerald",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Fionnan Fitzgerald.webp",
    partyName: "Fianna Fáil",
    constituency: "Castleisland",
    score: "./assets/images/negative.jpg",
    email: "fionnanfitzgerald@gmail.com",
    phone: "087 9860441"
  },
  {
    name: "Paul Bowler",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Paul Bowler.jpg",
    partyName: "Green Party",
    constituency: "Castleisland",
    score: "./assets/images/negative.jpg",
    email: "paul.bowler@greenparty.ie",
    phone: ""
  },
  {
    name: "Eimear Carbone Mangan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Eimear Carbone Mangan.webp",
    partyName: "Fianna Fáil",
    constituency: "Castleknock",
    score: "./assets/images/positive.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Ellen Troy",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Ellen Troy.jpg",
    partyName: "Aontú",
    constituency: "Castleknock",
    score: "./assets/images/not_td.jpg",
    email: "ellen.troy@Aontú.ie",
    phone: "089 267 7330"
  },
  {
    name: "Howard Mahony",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Howard Mahony.webp",
    partyName: "Fianna Fáil",
    constituency: "Castleknock",
    score: "./assets/images/negative.jpg",
    email: "Howard.Mahony@cllrs.fingal.ie",
    phone: "0870506146"
  },
  {
    name: "John Walsh",
    imageUrl: "./assets/images/LE 2024 Images/Labour/John Walsh.png",
    partyName: "Labour",
    constituency: "Castleknock",
    score: "./assets/images/positive.jpg",
    email: "john.walsh@cllrs.fingal.ie",
    phone: "0876486228"
  },
  {
    name: "Pamela Conroy",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Pamela Conroy.png",
    partyName: "Green Party",
    constituency: "Castleknock",
    score: "./assets/images/negative.jpg",
    email: "Pamela.Conroy@cllrs.fingal.ie",
    phone: "086 8462891"
  },
  {
    name: "Siobhan Shovlin",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Siobhan Shovlin.jpg",
    partyName: "Fine Gael",
    constituency: "Castleknock",
    score: "./assets/images/negative.jpg",
    email: "Siobhan.shovlin@cllrs.fingal.ie",
    phone: "087 3984778"
  },
  {
    name: "Ted Leddy",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Ted Leddy.jpg",
    partyName: "Fine Gael",
    constituency: "Castleknock",
    score: "./assets/images/positive.jpg",
    email: "Ted.Leddy@cllrs.fingal.ie",
    phone: "0873276630"
  },
  {
    name: "Aine Smith",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Aine Smith.webp",
    partyName: "Fianna Fáil",
    constituency: "Cavan-Belturbet",
    score: "./assets/images/not_td.jpg",
    email: "asmith@cavancoco.ie",
    phone: "0870552064"
  },
  {
    name: "John Paul Feeley",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/John Paul Feeley.webp",
    partyName: "Fianna Fáil",
    constituency: "Cavan-Belturbet",
    score: "./assets/images/not_td.jpg",
    email: "jpfeeley@cavancoco.ie",
    phone: "087-6989304"
  },
  {
    name: "Kevin Murphy",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Kevin Murphy.png",
    partyName: "Green Party",
    constituency: "Cavan-Belturbet",
    score: "./assets/images/negative.jpg",
    email: "kevin.murphy@greenparty.ie",
    phone: ""
  },
  {
    name: "Liam van der Spek",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Liam van der Spek.png",
    partyName: "Labour",
    constituency: "Cavan-Belturbet",
    score: "./assets/images/positive.jpg",
    email: "liam.vanderspek@votelabour.ie",
    phone: "086 070 2890"
  },
  {
    name: "Niamh Brady",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Niamh Brady.jpg",
    partyName: "Fine Gael",
    constituency: "Cavan-Belturbet",
    score: "./assets/images/negative.jpg",
    email: "niamhbradyfg@gmail.com",
    phone: "085-8753966"
  },
  {
    name: "Patricia Walsh",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Patricia Walsh.webp",
    partyName: "Fianna Fáil",
    constituency: "Cavan-Belturbet",
    score: "./assets/images/positive.jpg",
    email: "pwalsh@cavancoco.ie",
    phone: "086 8345001"
  },
  {
    name: "Peter McVitty",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Peter McVitty.jpg",
    partyName: "Fine Gael",
    constituency: "Cavan-Belturbet",
    score: "./assets/images/not_td.jpg",
    email: "pmcvitty@cavancoco.ie",
    phone: "087-9198410"
  },
  {
    name: "Claire O'Rourke",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Claire O'Rourke.png",
    partyName: "Social Democrats",
    constituency: "Celbridge",
    score: "./assets/images/not_td.jpg",
    email: "claire.orourke@socialdemocrats.ie",
    phone: "089 497 0057"
  },
  {
    name: "David Trost",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/David Trost.webp",
    partyName: "Fianna Fáil",
    constituency: "Celbridge",
    score: "./assets/images/negative.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Rupert Heather",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Rupert Heather.png",
    partyName: "Labour",
    constituency: "Celbridge",
    score: "./assets/images/negative.jpg",
    email: "rupertheather6@gmail.com",
    phone: "086 107 9289"
  },
  {
    name: "Brendan Wyse",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Brendan Wyse.jpg",
    partyName: "Fine Gael",
    constituency: "Clane",
    score: "./assets/images/negative.jpg",
    email: "brendan.wyse@gmail.com",
    phone: "087 2328867"
  },
  {
    name: "Daragh Fitzpatrick",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Daragh Fitzpatrick.webp",
    partyName: "Fianna Fáil",
    constituency: "Clane",
    score: "./assets/images/positive.jpg",
    email: "daraghfitz2007@gmail.com",
    phone: "087 2538184"
  },
  {
    name: "Eoin Coates",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Eoin Coates.png",
    partyName: "Labour",
    constituency: "Clane",
    score: "./assets/images/not_td.jpg",
    email: "eoin.coates@votelabour.ie",
    phone: "087 256 0739"
  },
  {
    name: "Una O'Connor",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Una O'Connor.jpg",
    partyName: "Aontú",
    constituency: "Clane",
    score: "./assets/images/negative.jpg",
    email: "una.oconnor@Aontú.ie",
    phone: "046 948 4962"
  },
  {
    name: "William Durkan",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/William Durkan.jpg",
    partyName: "Fine Gael",
    constituency: "Clane",
    score: "./assets/images/positive.jpg",
    email: "WilliamDurkanFG@gmail.com",
    phone: "087-2045206"
  },
  {
    name: "Alma Gallagher",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Alma Gallagher.jpg",
    partyName: "Fine Gael",
    constituency: "Claremorris",
    score: "./assets/images/not_td.jpg",
    email: "almagallagher3@gmail.com",
    phone: "087-2617124"
  },
  {
    name: "Damien Ryan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Damien Ryan.webp",
    partyName: "Fianna Fáil",
    constituency: "Claremorris",
    score: "./assets/images/negative.jpg",
    email: "dryan@cllr.mayococo.ie",
    phone: "087  6992564"
  },
  {
    name: "Michael Burke",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Michael Burke.jpg",
    partyName: "Fine Gael",
    constituency: "Claremorris",
    score: "./assets/images/positive.jpg",
    email: "cllrmichaelburke@mayococo.ie",
    phone: "087 2268 015"
  },
  {
    name: "Paul Lawless",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Paul Lawless.jpg",
    partyName: "Aontú",
    constituency: "Claremorris",
    score: "./assets/images/negative.jpg",
    email: "paullawlesspc@gmail.com",
    phone: "086 086 5117"
  },
  {
    name: "Stephen Nolan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Stephen Nolan.webp",
    partyName: "Fianna Fáil",
    constituency: "Claremorris",
    score: "./assets/images/not_td.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Tom Connolly",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Tom Connolly.jpg",
    partyName: "Fine Gael",
    constituency: "Claremorris",
    score: "./assets/images/negative.jpg",
    email: "tconnolly@cllr.mayococo.ie",
    phone: "087 2654860"
  },
  {
    name: "Ciaran Power",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Ciaran Power.webp",
    partyName: "Fianna Fáil",
    constituency: "Clondalkin",
    score: "./assets/images/not_td.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Darragh Adelaide",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Darragh Adelaide.webp",
    partyName: "People Before Profit",
    constituency: "Clondalkin",
    score: "./assets/images/negative.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Eoin O Broin",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Eoin O Broin.png",
    partyName: "Social Democrats",
    constituency: "Clondalkin",
    score: "./assets/images/not_td.jpg",
    email: "eoinob@cllrs.sdublincoco.ie",
    phone: "086 3840040"
  },
  {
    name: "Josh Ellul",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Josh Ellul.png",
    partyName: "Labour",
    constituency: "Clondalkin",
    score: "./assets/images/not_td.jpg",
    email: "hello@joshellul.ie",
    phone: "087 942 9767"
  },
  {
    name: "Laura Donaghy",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Laura Donaghy.jpg",
    partyName: "Green Party",
    constituency: "Clondalkin",
    score: "./assets/images/negative.jpg",
    email: "LDonaghy@cllrs.sdublincoco.ie",
    phone: "085 1229995"
  },
  {
    name: "Lynn Tierney",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Lynn Tierney.png",
    partyName: "Social Democrats",
    constituency: "Clondalkin",
    score: "./assets/images/positive.jpg",
    email: "lynn.tierney@socialdemocrats.ie",
    phone: 872242640
  },
  {
    name: "Sarah Adedeji",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Sarah Adedeji.jpg",
    partyName: "Fine Gael",
    constituency: "Clondalkin",
    score: "./assets/images/positive.jpg",
    email: "sarah4clondalkin@gmail.com",
    phone: ""
  },
  {
    name: "Shirley O'Hara",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Shirley O'Hara.jpg",
    partyName: "Fine Gael",
    constituency: "Clondalkin",
    score: "./assets/images/not_td.jpg",
    email: "sohara@cllrs.sdublincoco.ie",
    phone: "087 1749419"
  },
  {
    name: "Trevor Gilligan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Trevor Gilligan.jpeg",
    partyName: "Fianna Fáil",
    constituency: "Clondalkin",
    score: "./assets/images/negative.jpg",
    email: "tgilligan@sdublincoco.ie",
    phone: "085 714 5005"
  },
  {
    name: "William Carey",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/William Carey.png",
    partyName: "Sinn Féin",
    constituency: "Clondalkin",
    score: "./assets/images/positive.jpg",
    email: "wcarey@cllrs.sdublincoco.ie",
    phone: ""
  },
  {
    name: "John Fitzgerald",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/John FitzGerald.jpg",
    partyName: "Fine Gael",
    constituency: "Clonmel",
    score: "./assets/images/negative.jpg",
    email: "johnj.fitzgerald@tipperarycoco.ie",
    phone: ""
  },
  {
    name: "Michael Murphy",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Michael Murphy.jpg",
    partyName: "Fine Gael",
    constituency: "Clonmel",
    score: "./assets/images/positive.jpg",
    email: "michael.murphy@cllr.tipperarycoco.ie",
    phone: "087 3226699"
  },
  {
    name: "Myriam Madigan",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Myriam Madigan.jpg",
    partyName: "Green Party",
    constituency: "Clonmel",
    score: "./assets/images/not_td.jpg",
    email: "myriam.madigan@greenparty.ie",
    phone: "087 3417761"
  },
  {
    name: "Pat English",
    imageUrl: "./assets/images/LE 2024 Images/Workers and Unemployed Action Group/Pat English.jpg",
    partyName: "Workers and Unemployed Action Group",
    constituency: "Clonmel",
    score: "./assets/images/not_td.jpg",
    email: "pat.english@cllr.tipperarycoco.ie",
    phone: "0877684746"
  },
  {
    name: "Siobhan Ambrose",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Siobhan Ambrose.webp",
    partyName: "Fianna Fáil",
    constituency: "Clonmel",
    score: "./assets/images/positive.jpg",
    email: "siobhan.ambrose@cllr.tipperarycoco.ie",
    phone: "086 3850242"
  },
  {
    name: "Ali Field",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Ali Field.png",
    partyName: "Labour",
    constituency: "Clontarf",
    score: "./assets/images/negative.jpg",
    email: "alisonfieldlabour@gmail.com",
    phone: ""
  },
  {
    name: "Bernard Mulvany",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Bernard Mulvany.webp",
    partyName: "People Before Profit",
    constituency: "Clontarf",
    score: "./assets/images/not_td.jpg",
    email: "mulvanybernard@hotmail.com",
    phone: "087 606 8324"
  },
  {
    name: "Catherine Stocker",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Catherine Stocker.png",
    partyName: "Social Democrats",
    constituency: "Clontarf",
    score: "./assets/images/negative.jpg",
    email: "catherine.stocker@dublincity.ie",
    phone: 868397227
  },
  {
    name: "Deirdre Heney",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Deirdre Heney.webp",
    partyName: "Fianna Fáil",
    constituency: "Clontarf",
    score: "./assets/images/not_td.jpg",
    email: "heneydm@gmail.com",
    phone: 868118072
  },
  {
    name: "Donna Cooney",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Donna Cooney.png",
    partyName: "Green Party",
    constituency: "Clontarf",
    score: "./assets/images/negative.jpg",
    email: "donna.cooney@greenparty.ie",
    phone: "083 3317190"
  },
  {
    name: "James Morris",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/James Morris.jpg",
    partyName: "Aontú",
    constituency: "Clontarf",
    score: "./assets/images/positive.jpg",
    email: "James.Morris@Aontú.ie",
    phone: "089 478 1788"
  },
  {
    name: "Naoise Ó Muirí",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Naoise O Muiri.png",
    partyName: "Fine Gael",
    constituency: "Clontarf",
    score: "./assets/images/not_td.jpg",
    email: "naoise.omuiri@dublincity.ie",
    phone: 868270408
  },
  {
    name: "Anthony Barry",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Anthony Barry.jpg",
    partyName: "Fine Gael",
    constituency: "Cobh",
    score: "./assets/images/positive.jpg",
    email: "anthonybarry2014@gmail.com",
    phone: "086 0740394"
  },
  {
    name: "Cathal Rasmussen",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Cathal Rasmussen.png",
    partyName: "Labour",
    constituency: "Cobh",
    score: "./assets/images/not_td.jpg",
    email: "rosemountcobh1@eircom.net",
    phone: "086 8878421"
  },
  {
    name: "Cliona O'Halloran",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Cliona O'Halloran.jpg",
    partyName: "Green Party",
    constituency: "Cobh",
    score: "./assets/images/negative.jpg",
    email: "cliona.ohalloran@greenparty.ie",
    phone: "086-0561783"
  },
  {
    name: "Dominic Finn",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Dominic Finn.webp",
    partyName: "Fianna Fáil",
    constituency: "Cobh",
    score: "./assets/images/not_td.jpg",
    email: "Dfinnff2024@gmail.com",
    phone: "087 290 2338"
  },
  {
    name: "Keith Kelly",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Keith Kelly.jpg",
    partyName: "Fine Gael",
    constituency: "Cobh",
    score: "./assets/images/negative.jpg",
    email: "keithkellyelection2024@gmail.com",
    phone: "087-2401553"
  },
  {
    name: "Rola Abu Zeid-O'Neill",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Rola Abu Zeid-O'Neill.webp",
    partyName: "People Before Profit",
    constituency: "Cobh",
    score: "./assets/images/not_td.jpg",
    email: "pbpeastcork@gmail.com",
    phone: ""
  },
  {
    name: "Sheila O'Callaghan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Sheila O'Callaghan.webp",
    partyName: "Fianna Fáil",
    constituency: "Cobh",
    score: "./assets/images/positive.jpg",
    email: "sheila.ocallaghan@cllr.corkcoco.ie",
    phone: ""
  },
  {
    name: "Sinead Sheppard",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Sinead Sheppard.jpg",
    partyName: "Fine Gael",
    constituency: "Cobh",
    score: "./assets/images/not_td.jpg",
    email: "sinead.sheppard@gmail.com",
    phone: "087 2602091"
  },
  {
    name: "Eileen Mannion",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Eileen Mannion.jpg",
    partyName: "Fine Gael",
    constituency: "Conamara North",
    score: "./assets/images/negative.jpg",
    email: "emannion@cllr.galwaycoco.ie",
    phone: "087 9555645"
  },
  {
    name: "Gerard King",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Gerard King.webp",
    partyName: "Fianna Fáil",
    constituency: "Conamara North",
    score: "./assets/images/positive.jpg",
    email: "gerryking@cllr.galwaycoco.ie",
    phone: "086 1798749"
  },
  {
    name: "Alastair McKinstry",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Alastair McKinstry.png",
    partyName: "Green Party",
    constituency: "Conamara South",
    score: "./assets/images/not_td.jpg",
    email: "amckinstry@cllr.galwaycoco.ie",
    phone: "087 6847928"
  },
  {
    name: "Dáithí Ó Cualáin",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Daithi O Cualain.webp",
    partyName: "Fianna Fáil",
    constituency: "Conamara South",
    score: "./assets/images/negative.jpg",
    email: "dcualain@cllr.galwaycoco.ie",
    phone: "087 9023755"
  },
  {
    name: "Pádraig Mac an Iomaire",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Padraig Mac An Iomaire.jpeg",
    partyName: "Fine Gael",
    constituency: "Conamara South",
    score: "./assets/images/negative.jpg",
    email: "pmacaniomaire@cllr.galwaycoco.ie",
    phone: "087 9213795"
  },
  {
    name: "Imelda Daly",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Imelda Daly.jpg",
    partyName: "Fine Gael",
    constituency: "Cork City North East",
    score: "./assets/images/not_td.jpg",
    email: "imelda.daly.fg@gmail.com",
    phone: "086-3114760"
  },
  {
    name: "Joe Kavanagh",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Joe Kavanagh.jpg",
    partyName: "Fine Gael",
    constituency: "Cork City North East",
    score: "./assets/images/negative.jpg",
    email: "joe_kavanagh@corkcity.ie",
    phone: "086 230 7507"
  },
  {
    name: "John Maher",
    imageUrl: "./assets/images/LE 2024 Images/Labour/John Maher.png",
    partyName: "Labour",
    constituency: "Cork City North East",
    score: "./assets/images/positive.jpg",
    email: "john_maher@corkcity.ie",
    phone: "086 194 2285"
  },
  {
    name: "Margaret McDonnell",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Margaret McDonnell.webp",
    partyName: "Fianna Fáil",
    constituency: "Cork City North East",
    score: "./assets/images/negative.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Oliver Moran",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Oliver Moran.jpg",
    partyName: "Green Party",
    constituency: "Cork City North East",
    score: "./assets/images/positive.jpg",
    email: "oliver.moran@greenparty.ie",
    phone: "087 965 8549"
  },
  {
    name: "Shane Ryan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Shane Ryan.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cork City North East",
    score: "./assets/images/not_td.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Sinead Halpin",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Sinead Halpin.png",
    partyName: "Social Democrats",
    constituency: "Cork City North East",
    score: "./assets/images/negative.jpg",
    email: "sinead.halpin@socialdemocrats.ie",
    phone: ""
  },
  {
    name: "Damian Boylan",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Damian Boylan.jpg",
    partyName: "Fine Gael",
    constituency: "Cork City North West",
    score: "./assets/images/positive.jpg",
    email: "damian_boylan@corkcity.ie",
    phone: "087 224 4364"
  },
  {
    name: "Finian Toomey",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Finian Toomey.jpg",
    partyName: "Aontú",
    constituency: "Cork City North West",
    score: "./assets/images/not_td.jpg",
    email: "finiantoomey@gmail.com",
    phone: "087 248 0537"
  },
  {
    name: "John Sheehan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/John Sheehan.webp",
    partyName: "Fianna Fáil",
    constituency: "Cork City North West",
    score: "./assets/images/positive.jpg",
    email: "john_sheehan@corkcity.ie",
    phone: "087 228 2963"
  },
  {
    name: "Kenneth Collins",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Kenneth Collins.png",
    partyName: "Sinn Féin",
    constituency: "Cork City North West",
    score: "./assets/images/not_td.jpg",
    email: "kenneth_collins@corkcity.ie",
    phone: "087 929 3904"
  },
  {
    name: "Louise Jordan",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Louise Jordan.jpeg",
    partyName: "Green Party",
    constituency: "Cork City North West",
    score: "./assets/images/negative.jpg",
    email: "louise.Jordan@greenparty.ie",
    phone: "087 9583138"
  },
  {
    name: "Mick Nugent",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Mick Nugent.png",
    partyName: "Sinn Féin",
    constituency: "Cork City North West",
    score: "./assets/images/not_td.jpg",
    email: "michael_nugent@corkcity.ie",
    phone: "087-6755793"
  },
  {
    name: "Saoirse Mackin",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Saoirse Mackin.png",
    partyName: "Social Democrats",
    constituency: "Cork City North West",
    score: "./assets/images/negative.jpg",
    email: "saoirse.mackin@socialdemocrats.ie",
    phone: "087 780 8101"
  },
  {
    name: "Tony Fitzgerald",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Tony Fitzgerald.webp",
    partyName: "Fianna Fáil",
    constituency: "Cork City North West",
    score: "./assets/images/positive.jpg",
    email: "tony_fitzgerald@corkcity.ie",
    phone: "021 430 2032"
  },
  {
    name: "Anna Daly",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Anna Daly.jpg",
    partyName: "Aontú",
    constituency: "Cork City South Central",
    score: "./assets/images/not_td.jpg",
    email: "annadalyAontú@gmail.com",
    phone: "083 303 2367"
  },
  {
    name: "Dan Boyle",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Dan Boyle.jpg",
    partyName: "Green Party",
    constituency: "Cork City South Central",
    score: "./assets/images/negative.jpg",
    email: "dan@danboyle.ie",
    phone: "087 277 2701"
  },
  {
    name: "David Boyle",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/David Boyle.webp",
    partyName: "Fianna Fáil",
    constituency: "Cork City South Central",
    score: "./assets/images/positive.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Fiona Kerins",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/FIona Kerins.png",
    partyName: "Sinn Féin",
    constituency: "Cork City South Central",
    score: "./assets/images/negative.jpg",
    email: "fiona_kerins@corkcity.ie",
    phone: "021 431 1389"
  },
  {
    name: "Padraig Rice",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Padraig Rice.png",
    partyName: "Social Democrats",
    constituency: "Cork City South Central",
    score: "./assets/images/negative.jpg",
    email: "padraig.rice@socialdemocrats.ie",
    phone: ""
  },
  {
    name: "Peter Horgan",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Peter Horgan.png",
    partyName: "Labour",
    constituency: "Cork City South Central",
    score: "./assets/images/not_td.jpg",
    email: "peterhorgancork@gmail.com",
    phone: "083 103 3009"
  },
  {
    name: "Sean Martin",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Sean Martin.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cork City South Central",
    score: "./assets/images/negative.jpg",
    email: "sean_martin@corkcity.ie",
    phone: "087 290 8298"
  },
  {
    name: "Shane O'Callaghan",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Shane O'Callaghan.jpg",
    partyName: "Fine Gael",
    constituency: "Cork City South Central",
    score: "./assets/images/positive.jpg",
    email: "shane_ocallaghan@corkcity.ie",
    phone: "086 306 7431"
  },
  {
    name: "Shane Laird",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Shane Laird.webp",
    partyName: "People Before Profit",
    constituency: "Cork City South Central",
    score: "./assets/images/not_td.jpg",
    email: "corksouthcentralpbp@gmail.com",
    phone: ""
  },
  {
    name: "Barry O'Brien",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Barry O'Brien.jpg",
    partyName: "Fine Gael",
    constituency: "Cork City South East",
    score: "./assets/images/negative.jpg",
    email: "barry.obrien.fg@gmail.com",
    phone: "085-1732491"
  },
  {
    name: "Deirdre Forde",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Deirdre Forde.jpg",
    partyName: "Fine Gael",
    constituency: "Cork City South East",
    score: "./assets/images/positive.jpg",
    email: "info@deirdreforde.ie",
    phone: "087 916 1952"
  },
  {
    name: "Des Cahill",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Des Cahill.jpg",
    partyName: "Fine Gael",
    constituency: "Cork City South East",
    score: "./assets/images/not_td.jpg",
    email: "descahill30@gmail.com",
    phone: "087 280 1490"
  },
  {
    name: "Honore Kamegni",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Honore Kamegni.jpg",
    partyName: "Green Party",
    constituency: "Cork City South East",
    score: "./assets/images/negative.jpg",
    email: "honore.kamegni@greenparty.ie",
    phone: "087 6019856"
  },
  {
    name: "Mary Rose Desmond",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Mary Rose Desmond.webp",
    partyName: "Fianna Fáil",
    constituency: "Cork City South East",
    score: "./assets/images/negative.jpg",
    email: "desmondmaryrose@gmail.com",
    phone: "087 232 4515"
  },
  {
    name: "Susan Doyle",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Susan Doyle.png",
    partyName: "Social Democrats",
    constituency: "Cork City South East",
    score: "./assets/images/not_td.jpg",
    email: "susan.doyle@socialdemocrats.ie",
    phone: "087 693 9635"
  },
  {
    name: "Terry Shannon",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Terry Shannon.webp",
    partyName: "Fianna Fáil",
    constituency: "Cork City South East",
    score: "./assets/images/negative.jpg",
    email: "cllr.terryshannon@gmail.com",
    phone: "021 436 4385"
  },
  {
    name: "Andrea Christopher Rea",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Andrea Christopher Rea.jpg",
    partyName: "Fine Gael",
    constituency: "Cork City South West",
    score: "./assets/images/not_td.jpg",
    email: "andreachristopherrea@gmail.com",
    phone: "087 4754104"
  },
  {
    name: "Ciarán McCarthy",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Ciaran McCarthy.png",
    partyName: "Social Democrats",
    constituency: "Cork City South West",
    score: "./assets/images/negative.jpg",
    email: "ciaran.mccarthy@socialdemocrats.ie",
    phone: "086 380 9284"
  },
  {
    name: "Colette Finn",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Colette Finn.jpg",
    partyName: "Green Party",
    constituency: "Cork City South West",
    score: "./assets/images/positive.jpg",
    email: "colette_finn@corkcity.ie",
    phone: "087 675 2697"
  },
  {
    name: "Colm Kelleher",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Colm Kelleher.webp",
    partyName: "Fianna Fáil",
    constituency: "Cork City South West",
    score: "./assets/images/not_td.jpg",
    email: "colm_kelleher@corkcity.ie",
    phone: "087 241 4876"
  },
  {
    name: "Fergal Dennehy",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Fergal Dennehy.webp",
    partyName: "Fianna Fáil",
    constituency: "Cork City South West",
    score: "./assets/images/negative.jpg",
    email: "fergal_dennehy@corkcity.ie",
    phone: "087 299 9337"
  },
  {
    name: "Garret Kelleher",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Garret Kelleher.jpg",
    partyName: "Fine Gael",
    constituency: "Cork City South West",
    score: "./assets/images/positive.jpg",
    email: "garret_kelleher@corkcity.ie",
    phone: "087 963 5812"
  },
  {
    name: "Gary O'Brien",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Gary O'Brien.jpg",
    partyName: "Fine Gael",
    constituency: "Cork City South West",
    score: "./assets/images/not_td.jpg",
    email: "garyobrienfg@gmail.com",
    phone: "087-0683586"
  },
  {
    name: "Joanne Murphy",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Joanne Murphy.jpg",
    partyName: "Aontú",
    constituency: "Cork City South West",
    score: "./assets/images/positive.jpg",
    email: "joanne.murphy@Aontú.ie",
    phone: "087 678 6915"
  },
  {
    name: "Laura Harmon",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Laura Harmon.png",
    partyName: "Labour",
    constituency: "Cork City South West",
    score: "./assets/images/negative.jpg",
    email: "laura.harmon@votelabour.ie",
    phone: ""
  },
  {
    name: "Olga Shevchenko",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Olga Shevchenko.webp",
    partyName: "Fianna Fáil",
    constituency: "Cork City South West",
    score: "./assets/images/positive.jpg",
    email: "",
    phone: "085 129 3290"
  },
  {
    name: "Terry Coleman",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Terry Coleman.webp",
    partyName: "Fianna Fáil",
    constituency: "Cork City South West",
    score: "./assets/images/negative.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Clara McCormack",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Clara McCormack.webp",
    partyName: "People Before Profit",
    constituency: "Donaghmede",
    score: "./assets/images/negative.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Daryl Barron",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Daryl Barron.webp",
    partyName: "Fianna Fáil",
    constituency: "Donaghmede",
    score: "./assets/images/not_td.jpg",
    email: "daryl.barron@dublincity.ie",
    phone: 857555436
  },
  {
    name: "Dearbháil Butler",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Dearbhail Butler.jpg",
    partyName: "Green Party",
    constituency: "Donaghmede",
    score: "./assets/images/negative.jpg",
    email: "dearbhail.butler@greenparty.ie",
    phone: "087 6920370"
  },
  {
    name: "Donnacha Geoghegan",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Donnacha Geoghegan.png",
    partyName: "Green Party",
    constituency: "Donaghmede",
    score: "./assets/images/positive.jpg",
    email: "donnacha.geoghegan@greenparty.ie",
    phone: "083 3619222"
  },
  {
    name: "Paddy Monahan",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Paddy Monahan.png",
    partyName: "Social Democrats",
    constituency: "Donaghmede",
    score: "./assets/images/negative.jpg",
    email: "paddy.monahan@socialdemocrats.ie",
    phone: ""
  },
  {
    name: "Proinsias Ó Conaráin",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Proinsias O Conarain.jpg",
    partyName: "Aontú",
    constituency: "Donaghmede",
    score: "./assets/images/positive.jpg",
    email: "poconarain@yahoo.com",
    phone: "086 102 3953"
  },
  {
    name: "Shane Folan",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Shane Folan.png",
    partyName: "Labour",
    constituency: "Donaghmede",
    score: "./assets/images/not_td.jpg",
    email: "hello@shanefolan.ie",
    phone: "087 205 1804"
  },
  {
    name: "Supriya Singh",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Supriya Singh.jpg",
    partyName: "Fine Gael",
    constituency: "Donaghmede",
    score: "./assets/images/negative.jpg",
    email: "supriyasinghfg@gmail.com",
    phone: "089-9898225"
  },
  {
    name: "Terence Flanagan",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Terence Flanagan.jpg",
    partyName: "Fine Gael",
    constituency: "Donaghmede",
    score: "./assets/images/not_td.jpg",
    email: "Terence.Flanagan@dublincity.ie",
    phone: 879952031
  },
  {
    name: "Tom Brabazon",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Tom Brabazon.webp",
    partyName: "Fianna Fáil",
    constituency: "Donaghmede",
    score: "./assets/images/negative.jpg",
    email: "tom.brabazon@dublincity.ie",
    phone: "086 8092944"
  },
  {
    name: "Barry Sweeney",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Barry Sweeney.jpg",
    partyName: "Fine Gael",
    constituency: "Donegal",
    score: "./assets/images/positive.jpg",
    email: "barrysweeny@donegalcoco.ie",
    phone: "087 96 49654"
  },
  {
    name: "Claudia Kennedy",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Claudia Kennedy.webp",
    partyName: "Fianna Fáil",
    constituency: "Donegal",
    score: "./assets/images/not_td.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Manus Boyle",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Manus Boyle.jpg",
    partyName: "Fine Gael",
    constituency: "Donegal",
    score: "./assets/images/negative.jpg",
    email: "manusboylelocal@gmail.com",
    phone: "087-9019949"
  },
  {
    name: "Martin Hegarty",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Martin Hegarty.webp",
    partyName: "Fianna Fáil",
    constituency: "Donegal",
    score: "./assets/images/positive.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Micheal Naughton",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Micheal Naughton.jpg",
    partyName: "Fianna Fáil",
    constituency: "Donegal",
    score: "./assets/images/not_td.jpg",
    email: "michaelnaughton@donegalcoco.ie",
    phone: "087 26 06931"
  },
  {
    name: "Noel Jordan",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Noel Jordan.png",
    partyName: "Sinn Féin",
    constituency: "Donegal",
    score: "./assets/images/positive.jpg",
    email: "noeljordan11@hotmail.com",
    phone: ""
  },
  {
    name: "Anne-Marie Ford",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Anne-Marie Ford.jpg",
    partyName: "Fine Gael",
    constituency: "Drogheda Rural",
    score: "./assets/images/not_td.jpg",
    email: "amfordfg@gmail.com",
    phone: "083-1166882"
  },
  {
    name: "Marian Agrios",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Marian Agrios.jpg",
    partyName: "Fine Gael",
    constituency: "Drogheda Rural",
    score: "./assets/images/negative.jpg",
    email: "marianagriosfg@gmail.com",
    phone: "087-3752576"
  },
  {
    name: "Michelle Hall",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Michelle Hall.jpg",
    partyName: "Labour",
    constituency: "Drogheda Rural",
    score: "./assets/images/positive.jpg",
    email: "michelle.hall@louthcoco.ie",
    phone: "086 0748698"
  },
  {
    name: "Tom Cunningham",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Tom Cunningham.png",
    partyName: "Sinn Féin",
    constituency: "Drogheda Rural",
    score: "./assets/images/not_td.jpg",
    email: "tom.cunningham@louthcoco.ie",
    phone: "087 3717884"
  },
  {
    name: "Ejiro O'Hare",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Ejiro O'Hare.jpg",
    partyName: "Fine Gael",
    constituency: "Drogheda Urban",
    score: "./assets/images/negative.jpg",
    email: "ejiroghenefg@gmail.com",
    phone: "085-1449732"
  },
  {
    name: "Emma Cutlip",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Emma Cutlip.png",
    partyName: "Labour",
    constituency: "Drogheda Urban",
    score: "./assets/images/positive.jpg",
    email: "emma.cutlip@louthcoco.ie",
    phone: "086 0748697"
  },
  {
    name: "James Byrne",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/James Byrne.webp",
    partyName: "Fianna Fáil",
    constituency: "Drogheda Urban",
    score: "./assets/images/not_td.jpg",
    email: "james.byrne@louthcoco.ie",
    phone: ""
  },
  {
    name: "Joanna Byrne",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Joanna Byrne.png",
    partyName: "Sinn Féin",
    constituency: "Drogheda Urban",
    score: "./assets/images/negative.jpg",
    email: "joanna.byrne@louthcoco.ie",
    phone: "087 1146522"
  },
  {
    name: "Michael O'Dowd",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Michael O'Dowd.jpg",
    partyName: "Aontú",
    constituency: "Drogheda Urban",
    score: "./assets/images/negative.jpg",
    email: "modowd@mail.com",
    phone: "085 8057658"
  },
  {
    name: "Michael Kennedy",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Michael Kennedy.jpeg",
    partyName: "Green Party",
    constituency: "Drogheda Urban",
    score: "./assets/images/positive.jpg",
    email: "michael.kennedy@greenparty.ie",
    phone: ""
  },
  {
    name: "Pio Smith",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Pio Smith.jpg",
    partyName: "Labour",
    constituency: "Drogheda Urban",
    score: "./assets/images/positive.jpg",
    email: "pio.smith@louthcoco.ie",
    phone: "087 9460673"
  },
  {
    name: "Shona McManus",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Shona McManus.jpg",
    partyName: "Fine Gael",
    constituency: "Drogheda Urban",
    score: "./assets/images/not_td.jpg",
    email: "shona@shonamcmanus.ie",
    phone: "087-9804007"
  },
  {
    name: "Anne-Marie Connolly",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Anne-Marie Connolly.webp",
    partyName: "Fianna Fáil",
    constituency: "Dublin North Inner City",
    score: "./assets/images/not_td.jpg",
    email: "conno_am@yahoo.com",
    phone: "087 9233382"
  },
  {
    name: "Daniel Ennis",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Daniel Ennis.png",
    partyName: "Social Democrats",
    constituency: "Dublin North Inner City",
    score: "./assets/images/not_td.jpg",
    email: "daniel.ennis@socialdemocrats.ie",
    phone: "083 431 4346"
  },
  {
    name: "Ellen O'Doherty",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Ellen O'Doherty.png",
    partyName: "Social Democrats",
    constituency: "Dublin North Inner City",
    score: "./assets/images/positive.jpg",
    email: "ellen.odoherty@socialdemocrats.ie",
    phone: ""
  },
  {
    name: "Eoghan Ó Ceannabháin",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Eoghan O Ceannabhain.webp",
    partyName: "People Before Profit",
    constituency: "Dublin North Inner City",
    score: "./assets/images/not_td.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Isabel Oliveria",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Isabel Oliveria.webp",
    partyName: "Fianna Fáil",
    constituency: "Dublin North Inner City",
    score: "./assets/images/positive.jpg",
    email: "isabel.oliveria000@gmail.com",
    phone: "083 4602940"
  },
  {
    name: "Janet Horner",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Janet Horner.jpg",
    partyName: "Green Party",
    constituency: "Dublin North Inner City",
    score: "./assets/images/not_td.jpg",
    email: "janet.horner@dublincity.ie",
    phone: "087 921 7310"
  },
  {
    name: "Janice Boylan",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Janice Boylan.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin North Inner City",
    score: "./assets/images/negative.jpg",
    email: "janice.boylan@dublincity.ie",
    phone: 852241322
  },
  {
    name: "Ray McAdam",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Ray McAdam.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin North Inner City",
    score: "./assets/images/negative.jpg",
    email: "raymcadam@gmail.com",
    phone: 868471720
  },
  {
    name: "Tom O'Connor",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Tom O'Connor.png",
    partyName: "Labour",
    constituency: "Dublin North Inner City",
    score: "./assets/images/positive.jpg",
    email: "toconnor@fai.ie",
    phone: ""
  },
  {
    name: "Alan Healy",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Alan Healy.jpg",
    partyName: "Aontú",
    constituency: "Dublin South East Inner City",
    score: "./assets/images/not_td.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Brigid Purcell",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Brigid Purcell.webp",
    partyName: "People Before Profit",
    constituency: "Dublin South East Inner City",
    score: "./assets/images/negative.jpg",
    email: "brigidpurcell95@gmail.com",
    phone: ""
  },
  {
    name: "Carol Reynolds",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Carol Reynolds.png",
    partyName: "Labour",
    constituency: "Dublin South East Inner City",
    score: "./assets/images/positive.jpg",
    email: "ringsend.reynolds@gmail.com",
    phone: "087 7521706"
  },
  {
    name: "Cian Farrell",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Cian Farrell.png",
    partyName: "Social Democrats",
    constituency: "Dublin South East Inner City",
    score: "./assets/images/not_td.jpg",
    email: "cian.farrell@socialdemocrats.ie",
    phone: ""
  },
  {
    name: "Claire Byrne",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Claire Byrne.png",
    partyName: "Green Party",
    constituency: "Dublin South East Inner City",
    score: "./assets/images/negative.jpg",
    email: "Claire.byrne@dublincity.ie",
    phone: 877467872
  },
  {
    name: "Daniel Céitinn",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Daniel Ceitinn.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin South East Inner City",
    score: "./assets/images/positive.jpg",
    email: "daniel.ceitinn@dublincity.ie",
    phone: "087 751 3424"
  },
  {
    name: "Danny Byrne",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Danny Byrne.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin South East Inner City",
    score: "./assets/images/not_td.jpg",
    email: "danny.byrne@dublincity.ie",
    phone: 861247852
  },
  {
    name: "Eddie McGuinness",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Eddie McGuinness.png",
    partyName: "Labour",
    constituency: "Dublin South East Inner City",
    score: "./assets/images/negative.jpg",
    email: "eddie.mcguinness@votelabour.ie",
    phone: ""
  },
  {
    name: "Aisling Considine",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Aisling Considine.jpg",
    partyName: "Aontú",
    constituency: "Dublin South West Inner City",
    score: "./assets/images/positive.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Darragh Moriarty",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Darragh Moriarty.png",
    partyName: "Labour",
    constituency: "Dublin South West Inner City",
    score: "./assets/images/not_td.jpg",
    email: "moriartydarragh1@gmail.com",
    phone: "085 8269123"
  },
  {
    name: "Ian Nunoo",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Ian Nunoo.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin South West Inner City",
    score: "./assets/images/not_td.jpg",
    email: "ian.nunoofg@gmail.com",
    phone: "087-6413150"
  },
  {
    name: "Jen Cummins",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Jen Cummins.png",
    partyName: "Social Democrats",
    constituency: "Dublin South West Inner City",
    score: "./assets/images/negative.jpg",
    email: "jen.cummins@socialdemocrats.ie",
    phone: "087 164 4166"
  },
  {
    name: "Kelsey May Daly",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Kelsey May Daly.webp",
    partyName: "People Before Profit",
    constituency: "Dublin South West Inner City",
    score: "./assets/images/positive.jpg",
    email: "kelseymay.daly@dublincity.ie",
    phone: ""
  },
  {
    name: "Michael Watters",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Michael Watters.webp",
    partyName: "Fianna Fáil",
    constituency: "Dublin South West Inner City",
    score: "./assets/images/negative.jpg",
    email: "michael.watters@dublincity.ie",
    phone: 838651969
  },
  {
    name: "Michael Pidgeon",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Michael Pidgeon.png",
    partyName: "Green Party",
    constituency: "Dublin South West Inner City",
    score: "./assets/images/positive.jpg",
    email: "Michael.Pidgeon@dublincity.ie",
    phone: 876279290
  },
  {
    name: "Muhammad Ammar Ali",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Muhammad Ammar Ali.webp",
    partyName: "Fianna Fáil",
    constituency: "Dublin South West Inner City",
    score: "./assets/images/negative.jpg",
    email: "ammaralidublin8@gmail.com",
    phone: "089 982 8864"
  },
  {
    name: "Colette O'Sullivan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Colette O'Sullivan.webp",
    partyName: "Fianna Fáil",
    constituency: "Dún Laoghaire",
    score: "./assets/images/not_td.jpg",
    email: "colette@coletteosullivan.ie",
    phone: "085 146 4757"
  },
  {
    name: "Helen Duignan",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Helen Duignan.png",
    partyName: "Aontú",
    constituency: "Dún Laoghaire",
    score: "./assets/images/negative.jpg",
    email: "",
    phone: ""
  },
  {
    name: "J.P. Durkan",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/J.P. Durkan.jpg",
    partyName: "Fine Gael",
    constituency: "Dún Laoghaire",
    score: "./assets/images/positive.jpg",
    email: "jpdurkanfg@gmail.com",
    phone: "089-2661119"
  },
  {
    name: "Justin Moylan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Justin Moylan.webp",
    partyName: "Fianna Fáil",
    constituency: "Dún Laoghaire",
    score: "./assets/images/not_td.jpg",
    email: "jmoylan@cllr.dlrcoco.ie",
    phone: "087 313 8815"
  },
  {
    name: "Lorraine Hall",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Lorraine Hall.jpg",
    partyName: "Fine Gael",
    constituency: "Dún Laoghaire",
    score: "./assets/images/negative.jpg",
    email: "lhall@cllr.dlrcoco.ie",
    phone: "087-7905555"
  },
  {
    name: "Mairead Toibin",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Mairead Toibin.jpg",
    partyName: "Aontú",
    constituency: "Dún Laoghaire",
    score: "./assets/images/positive.jpg",
    email: "mairead.toibin@Aontú.ie",
    phone: ""
  },
  {
    name: "Mary Fayne",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Mary Fayne.jpg",
    partyName: "Fine Gael",
    constituency: "Dún Laoghaire",
    score: "./assets/images/not_td.jpg",
    email: "mfayne@cllr.dlrcoco.ie",
    phone: "086 461 1626"
  },
  {
    name: "Melisa Halpin",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Melisa Halpin.webp",
    partyName: "People Before Profit",
    constituency: "Dún Laoghaire",
    score: "./assets/images/negative.jpg",
    email: "mhalpin@cllr.dlrcoco.ie",
    phone: "086-3805793"
  },
  {
    name: "Thomas Joseph",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Thomas Joseph.png",
    partyName: "Labour",
    constituency: "Dún Laoghaire",
    score: "./assets/images/not_td.jpg",
    email: "thomas.joseph@labour.ie",
    phone: "087 125 1852"
  },
  {
    name: "Tom Kivlehan",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Tom Kivlehan.jpg",
    partyName: "Green Party",
    constituency: "Dún Laoghaire",
    score: "./assets/images/negative.jpg",
    email: "tkivlehan@cllr.dlrcoco.ie",
    phone: "087 373 2518"
  },
  {
    name: "Andrea McKevitt",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Andrea McKevitt.webp",
    partyName: "Fianna Fáil",
    constituency: "Dundalk Carlingford",
    score: "./assets/images/positive.jpg",
    email: "andrea.mckevitt@louthcoco.ie",
    phone: "086 0654761"
  },
  {
    name: "Antoin Watters",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Antoin Watters.png",
    partyName: "Sinn Féin",
    constituency: "Dundalk Carlingford",
    score: "./assets/images/not_td.jpg",
    email: "antoin.watters@louthcoco.ie",
    phone: "087 4165157"
  },
  {
    name: "Conor Keelan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Conor Keelan.webp",
    partyName: "Fianna Fáil",
    constituency: "Dundalk Carlingford",
    score: "./assets/images/positive.jpg",
    email: "conor.keelan@louthcoco.ie",
    phone: "087 7773200"
  },
  {
    name: "Edel Corrigan",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Edel Corrigan.png",
    partyName: "Sinn Féin",
    constituency: "Dundalk Carlingford",
    score: "./assets/images/not_td.jpg",
    email: "edel.corrigan@louthcoco.ie",
    phone: "085 8476660"
  },
  {
    name: "Jamie O'Hare",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Jamie O'Hare.png",
    partyName: "Labour",
    constituency: "Dundalk Carlingford",
    score: "./assets/images/positive.jpg",
    email: "jamieoharelabour@gmail.com",
    phone: "085 186 4224"
  },
  {
    name: "Sean Kelly",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Sean Kelly.webp",
    partyName: "Fianna Fáil",
    constituency: "Dundalk Carlingford",
    score: "./assets/images/negative.jpg",
    email: "sean.kelly@louthcoco.ie",
    phone: "086 1437080"
  },
  {
    name: "Yvonne Keenan Ross",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Yvonne Keenan Ross.jpg",
    partyName: "Fine Gael",
    constituency: "Dundalk Carlingford",
    score: "./assets/images/not_td.jpg",
    email: "yvonnekeenanrossfg@gmail.com",
    phone: "087-1747372"
  },
  {
    name: "Emma Coffey",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Emma Coffey.webp",
    partyName: "Fianna Fáil",
    constituency: "Dundalk South",
    score: "./assets/images/positive.jpg",
    email: "emma.coffey@louthcoco.ie",
    phone: "087 1940837"
  },
  {
    name: "Linus English",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Linus English.jpg",
    partyName: "Fine Gael",
    constituency: "Dundalk South",
    score: "./assets/images/positive.jpg",
    email: "linusenglish9@gmail.com",
    phone: "087-3426457"
  },
  {
    name: "Marianne Butler",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Marianne Butler.jpg",
    partyName: "Green Party",
    constituency: "Dundalk South",
    score: "./assets/images/negative.jpg",
    email: "marianne.butler@louthcoco.ie",
    phone: "086 8677672"
  },
  {
    name: "Robert Nash",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Robert Nash.jpg",
    partyName: "Fine Gael",
    constituency: "Dundalk South",
    score: "./assets/images/positive.jpg",
    email: "robert.nash@louthcoco.ie",
    phone: "086 0748698"
  },
  {
    name: "Shane McGuinness",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Shane McGuinness.webp",
    partyName: "Fianna Fáil",
    constituency: "Dundalk South",
    score: "./assets/images/negative.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Tomás Sharkey",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Tomas Sharkey.png",
    partyName: "Sinn Féin",
    constituency: "Dundalk South",
    score: "./assets/images/not_td.jpg",
    email: "tomas.sharkey@louthcoco.ie",
    phone: "087 9090629"
  },
  {
    name: "Anna Grainger",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Anna Grainger.jpg",
    partyName: "Fine Gael",
    constituency: "Dundrum",
    score: "./assets/images/negative.jpg",
    email: "agrainger@cllr.dlrcoco.ie",
    phone: "087-2825511"
  },
  {
    name: "Eoin O'Driscoll",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Eoin O'Driscoll.jpg",
    partyName: "Fine Gael",
    constituency: "Dundrum",
    score: "./assets/images/not_td.jpg",
    email: "eoinodriscollfg@gmail.com",
    phone: "087-9224085"
  },
  {
    name: "Fiona Murray",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Fiona Murray.webp",
    partyName: "Fianna Fáil",
    constituency: "Dundrum",
    score: "./assets/images/negative.jpg",
    email: "fiona@fionamurray.ie",
    phone: "087 780 4400"
  },
  {
    name: "Jim O'Leary",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Jim O'Leary.jpg",
    partyName: "Fine Gael",
    constituency: "Dundrum",
    score: "./assets/images/positive.jpg",
    email: "jim.a.oleary.fg@gmail.com",
    phone: "086-8186732"
  },
  {
    name: "Liam Coughlan",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Liam Coughlan.jpg",
    partyName: "Aontú",
    constituency: "Dundrum",
    score: "./assets/images/not_td.jpg",
    email: "liam@liamcoughlan.ie",
    phone: "086-6063232"
  },
  {
    name: "Peter O'Brien",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Peter O'Brien.png",
    partyName: "Labour",
    constituency: "Dundrum",
    score: "./assets/images/negative.jpg",
    email: "pobrien@cllr.dlrcoco.ie",
    phone: "086-4611638"
  },
  {
    name: "Robert Jones",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Robert Jones.png",
    partyName: "Green Party",
    constituency: "Dundrum",
    score: "./assets/images/not_td.jpg",
    email: "robert.jones@greenparty.ie",
    phone: "089 6001391"
  },
  {
    name: "Shay Brennan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Shay Brennan.webp",
    partyName: "Fianna Fáil",
    constituency: "Dundrum",
    score: "./assets/images/positive.jpg",
    email: "sbrennan@cllr.dlrcoco.ie",
    phone: "086-8290570"
  },
  {
    name: "Síle Ní Dhubhghaill",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Sile Ni Dhubhghaill.png",
    partyName: "Social Democrats",
    constituency: "Dundrum",
    score: "./assets/images/not_td.jpg",
    email: "sile.nidhubhghaill@socialdemocrats.ie",
    phone: "087 695 2368"
  },
  {
    name: "Conor McGuinness",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Conor McGuinness.png",
    partyName: "Sinn Féin",
    constituency: "Dungarvan",
    score: "./assets/images/negative.jpg",
    email: "cllrcdmcguinness@waterfordcouncil.ie",
    phone: "087 9345603"
  },
  {
    name: "Criostoir O Faolain",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Criostoir O Faolain.jpg",
    partyName: "Green Party",
    constituency: "Dungarvan",
    score: "./assets/images/positive.jpg",
    email: "Criostoir.Ofaolain@greenparty.ie",
    phone: ""
  },
  {
    name: "Damien Geoghan",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Damien Geoghan.jpg",
    partyName: "Fine Gael",
    constituency: "Dungarvan",
    score: "./assets/images/not_td.jpg",
    email: "cllrdgeoghegan@waterfordcouncil.ie",
    phone: "086 3177898"
  },
  {
    name: "Monica Murphy",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Monica Murphy.jpg",
    partyName: "Fine Gael",
    constituency: "Dungarvan",
    score: "./assets/images/positive.jpg",
    email: "monicaPmurphy@gmail.com",
    phone: "086-6012479"
  },
  {
    name: "Pat Nugent",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Pat Nugent.jpg",
    partyName: "Fine Gael",
    constituency: "Dungarvan",
    score: "./assets/images/not_td.jpg",
    email: "cllrpnugent@waterfordcouncil.ie",
    phone: ""
  },
  {
    name: "Thomas Phelan",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Thomas Phelan.jpg",
    partyName: "Labour",
    constituency: "Dungarvan",
    score: "./assets/images/not_td.jpg",
    email: "cllrtphelan@waterfordcouncil.ie",
    phone: "087 4119421"
  },
  {
    name: "Tom Cronin",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Tom Cronin.webp",
    partyName: "Fianna Fáil",
    constituency: "Dungarvan",
    score: "./assets/images/negative.jpg",
    email: "cllrtcronin@waterfordcouncil.ie",
    phone: "086 3933444"
  },
  {
    name: "Claire Murray",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Claire Murray.webp",
    partyName: "Fianna Fáil",
    constituency: "Edenderry",
    score: "./assets/images/not_td.jpg",
    email: "clamury@yahoo.com",
    phone: ""
  },
  {
    name: "Eddie Fitzpatrick",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Eddie Fitzpatrick.webp",
    partyName: "Fianna Fáil",
    constituency: "Edenderry",
    score: "./assets/images/positive.jpg",
    email: "eddiefitzp@eircom.net",
    phone: "(087) 2580428"
  },
  {
    name: "John McNamee",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/John McNamee.png",
    partyName: "Social Democrats",
    constituency: "Edenderry",
    score: "./assets/images/negative.jpg",
    email: "john.mcnamee@socialdemocrats.ie",
    phone: "085 722 0076"
  },
  {
    name: "Liam Quinn",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Liam Quinn.jpg",
    partyName: "Fine Gael",
    constituency: "Edenderry",
    score: "./assets/images/positive.jpg",
    email: "liamjq@gmail.com",
    phone: "(087)9163066"
  },
  {
    name: "Mark Hackett",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Mark Hackett.jpg",
    partyName: "Green Party",
    constituency: "Edenderry",
    score: "./assets/images/not_td.jpg",
    email: "mhackett@cllr.offalycoco.ie",
    phone: "087 2422746"
  },
  {
    name: "Noel Cribbin",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Noel Cribbin.jpg",
    partyName: "Fine Gael",
    constituency: "Edenderry",
    score: "./assets/images/negative.jpg",
    email: "noelcribb56@gmail.com",
    phone: "(087) 9073804"
  },
  {
    name: "Robert McDermott",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Robert McDermott.webp",
    partyName: "Fianna Fáil",
    constituency: "Edenderry",
    score: "./assets/images/positive.jpg",
    email: "robert@edenprint.ie",
    phone: "(087) 2555251"
  },
  {
    name: "Bridget Ginnity",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Bridget Ginnity.png",
    partyName: "Green Party",
    constituency: "Ennis",
    score: "./assets/images/negative.jpg",
    email: "bridget.ginnity@greenparty.ie",
    phone: ""
  },
  {
    name: "Clare Colleran Molloy",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Clare Colleran Molloy.webp",
    partyName: "Fianna Fáil",
    constituency: "Ennis",
    score: "./assets/images/positive.jpg",
    email: "ccolleranmolloy@gmail.com",
    phone: "(086) 8239703"
  },
  {
    name: "Hilary Tonge",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Hilary Tonge.png",
    partyName: "Social Democrats",
    constituency: "Ennis",
    score: "./assets/images/not_td.jpg",
    email: "hilary.tonge@socialdemocrats.ie",
    phone: "083 413 7394"
  },
  {
    name: "Mary Howard",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Mary Howard.jpg",
    partyName: "Fine Gael",
    constituency: "Ennis",
    score: "./assets/images/negative.jpg",
    email: "maryhoward2009@gmail.com",
    phone: "(086) 8780298"
  },
  {
    name: "Pat Daly",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Pat Daly.webp",
    partyName: "Fianna Fáil",
    constituency: "Ennis",
    score: "./assets/images/positive.jpg",
    email: "pdaly@cllr.clarecoco.ie",
    phone: "(086) 1099312"
  },
  {
    name: "Paul Murphy",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Paul Murphy.jpg",
    partyName: "Fine Gael",
    constituency: "Ennis",
    score: "./assets/images/not_td.jpg",
    email: "barntickfarm@yahoo.ie",
    phone: "(087) 8396757"
  },
  {
    name: "Seamus Ryan",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Seamus Ryan.png",
    partyName: "Labour",
    constituency: "Ennis",
    score: "./assets/images/negative.jpg",
    email: "seamusmryan@gmail.com",
    phone: "087 969 7981"
  },
  {
    name: "Tom O'Callaghan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Tom O'Callaghan.webp",
    partyName: "Fianna Fáil",
    constituency: "Ennis",
    score: "./assets/images/positive.jpg",
    email: "tocallaghan@cllr.clarecoco.ie",
    phone: "087 702 1627"
  },
  {
    name: "Aidan Browne",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Aidan Browne.webp",
    partyName: "Fianna Fáil",
    constituency: "Enniscorthy",
    score: "./assets/images/negative.jpg",
    email: "aidan.browne@wexfordmcc.ie",
    phone: "087 7753097"
  },
  {
    name: "Barbara Ann Murphy",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Barbara Ann Murphy.webp",
    partyName: "Fianna Fáil",
    constituency: "Enniscorthy",
    score: "./assets/images/not_td.jpg",
    email: "bamurphy@wexfordmcc.ie",
    phone: "087 6736966"
  },
  {
    name: "Brendan Cahill Flynn",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Brendan Cahill Flynn.jpeg",
    partyName: "Green Party",
    constituency: "Enniscorthy",
    score: "./assets/images/negative.jpg",
    email: "brendan.cahillflynn@greenparty.ie",
    phone: "087-6097746"
  },
  {
    name: "Cathal Byrne",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Cathal Byrne.jpg",
    partyName: "Fine Gael",
    constituency: "Enniscorthy",
    score: "./assets/images/positive.jpg",
    email: "cathal.byrne@wexfordmcc.ie",
    phone: "085 1461164"
  },
  {
    name: "Pat Kehoe",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Pat Kehoe.jpg",
    partyName: "Fine Gael",
    constituency: "Enniscorthy",
    score: "./assets/images/not_td.jpg",
    email: "patkehoefg@gmail.com",
    phone: "087-6683067"
  },
  {
    name: "Bill Slattery",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Bill Slattery.jpg",
    partyName: "Fine Gael",
    constituency: "Ennistymon",
    score: "./assets/images/negative.jpg",
    email: "billslattery11@gmail.com",
    phone: "086-2602383"
  },
  {
    name: "Joe Killeen",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Joe Killeen.webp",
    partyName: "Fianna Fáil",
    constituency: "Ennistymon",
    score: "./assets/images/positive.jpg",
    email: "mrjoekilleen@gmail.com",
    phone: "087 6735114"
  },
  {
    name: "Joe Garrihy",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Joe Garrihy.jpg",
    partyName: "Fine Gael",
    constituency: "Ennistymon",
    score: "./assets/images/not_td.jpg",
    email: "CllrGarrihy@gmail.com",
    phone: "086 8219624"
  },
  {
    name: "Liam Grant",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Liam Grant.png",
    partyName: "Green Party",
    constituency: "Ennistymon",
    score: "./assets/images/negative.jpg",
    email: "lgrant@cllr.clarecoco.ie",
    phone: "(083) 3271944"
  },
  {
    name: "Shane Talty",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Shane Talty.jpg",
    partyName: "Fianna Fáil",
    constituency: "Ennistymon",
    score: "./assets/images/positive.jpg",
    email: "taltyshane@yahoo.ie",
    phone: "087 9146457"
  },
  {
    name: "Deirdre O'Brien",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Deirdre O'Brien.webp",
    partyName: "Fianna Fáil",
    constituency: "Fermoy",
    score: "./assets/images/negative.jpg",
    email: "deirdreobrienccc@gmail.com",
    phone: "087 6823514"
  },
  {
    name: "Diarmuid Hanley",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Diarmuid Hanley.png",
    partyName: "Labour",
    constituency: "Fermoy",
    score: "./assets/images/positive.jpg",
    email: "diarmuid.hanley81@gmail.com",
    phone: "083 301 3976"
  },
  {
    name: "Frank O'Flynn",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Frank O'Flynn.webp",
    partyName: "Fianna Fáil",
    constituency: "Fermoy",
    score: "./assets/images/not_td.jpg",
    email: "frankoflynnccc@eircom.net",
    phone: "086 8520793"
  },
  {
    name: "Kay Dawson",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Kay Dawson.jpg",
    partyName: "Fine Gael",
    constituency: "Fermoy",
    score: "./assets/images/not_td.jpg",
    email: "kaydawsonfinegael@gmail.com",
    phone: "087 8305649"
  },
  {
    name: "Nelius Cotter",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Nelius Cotter.webp",
    partyName: "Fianna Fáil",
    constituency: "Fermoy",
    score: "./assets/images/negative.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Noel McCarthy",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Noel McCarthy.jpg",
    partyName: "Fine Gael",
    constituency: "Fermoy",
    score: "./assets/images/positive.jpg",
    email: "noelmccarthy28@hotmail.com",
    phone: "086 3751736"
  },
  {
    name: "Brian Lawlor",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Brian Lawlor.jpg",
    partyName: "Fine Gael",
    constituency: "Firhouse-Bohernabreena",
    score: "./assets/images/positive.jpg",
    email: "blawlor@cllrs.sdublincoco.ie",
    phone: "087 6445472"
  },
  {
    name: "Emma Murphy",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Emma Murphy.webp",
    partyName: "Fianna Fáil",
    constituency: "Firhouse-Bohernabreena",
    score: "./assets/images/not_td.jpg",
    email: "emurphy@cllrs.sdublincoco.ie",
    phone: "0863462302"
  },
  {
    name: "Helen Meaney",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Helen Meaney.png",
    partyName: "Social Democrats",
    constituency: "Firhouse-Bohernabreena",
    score: "./assets/images/negative.jpg",
    email: "helen.meaney@socialdemocrats.ie",
    phone: ""
  },
  {
    name: "Lilian Guéret",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Lilian Gueret.webp",
    partyName: "Fianna Fáil",
    constituency: "Firhouse-Bohernabreena",
    score: "./assets/images/positive.jpg",
    email: "lgueret@cllrs.sdublincoco.ie",
    phone: "089 6125405"
  },
  {
    name: "Lyn Hagin Meade",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Lyn Hagin Meade.jpg",
    partyName: "Green Party",
    constituency: "Firhouse-Bohernabreena",
    score: "./assets/images/not_td.jpg",
    email: "lhaginmeade@cllrs.sdublincoco.ie",
    phone: "086 8972010"
  },
  {
    name: "Philomena Foster",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Philomena Foster.webp",
    partyName: "People Before Profit",
    constituency: "Firhouse-Bohernabreena",
    score: "./assets/images/negative.jpg",
    email: "philomenafoster@gmail.com",
    phone: ""
  },
  {
    name: "Sarah Barnes",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Sarah Barnes.jpg",
    partyName: "Fine Gael",
    constituency: "Firhouse-Bohernabreena",
    score: "./assets/images/not_td.jpg",
    email: "sarahbarnesFG@gmail,com",
    phone: "086-4491920"
  },
  {
    name: "Adrian Curran",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Adrian Curran.webp",
    partyName: "People Before Profit",
    constituency: "Galway City Central",
    score: "./assets/images/positive.jpg",
    email: "info@pbpgalway.ie",
    phone: ""
  },
  {
    name: "Eddie Hoare",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Eddie Hoare.jpeg",
    partyName: "Fine Gael",
    constituency: "Galway City Central",
    score: "./assets/images/negative.jpg",
    email: "Eddie.Hoare@cgcc.ie",
    phone: "087 9863350"
  },
  {
    name: "Eibhlín Seoighthe",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Eibhlin Seoighthe.png",
    partyName: "Social Democrats",
    constituency: "Galway City Central",
    score: "./assets/images/positive.jpg",
    email: "eibhlin.seoighthe@socialdemocrats.ie",
    phone: ""
  },
  {
    name: "Frank Fahy",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Frank Fahy.jpg",
    partyName: "Fine Gael",
    constituency: "Galway City Central",
    score: "./assets/images/not_td.jpg",
    email: "Frank.Fahy@cgcc.ie",
    phone: "087 2345852"
  },
  {
    name: "John McDonagh",
    imageUrl: "./assets/images/LE 2024 Images/Labour/John McDonagh.png",
    partyName: "Labour",
    constituency: "Galway City Central",
    score: "./assets/images/negative.jpg",
    email: "labour.galwaywest@gmail.com",
    phone: ""
  },
  {
    name: "Josie Forde",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Josie Forde.webp",
    partyName: "Fianna Fáil",
    constituency: "Galway City Central",
    score: "./assets/images/positive.jpg",
    email: "Josieforde@gmail.com",
    phone: "087 9807449"
  },
  {
    name: "Martina O'Connor",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Martina O'Connor.jpg",
    partyName: "Green Party",
    constituency: "Galway City Central",
    score: "./assets/images/negative.jpg",
    email: "Martina.OConnor@cgcc.ie",
    phone: "087 6467275"
  },
  {
    name: "Padraig Lenihan",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Padraig Lenihan.jpg",
    partyName: "Aontú",
    constituency: "Galway City Central",
    score: "./assets/images/not_td.jpg",
    email: "padraiglenihan386@gmail.com",
    phone: "087 444 2246"
  },
  {
    name: "Aisling Keogh",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Aisling Keogh.jpg",
    partyName: "Fine Gael",
    constituency: "Galway City East",
    score: "./assets/images/negative.jpg",
    email: "aisling.keoghfg@gmail.com",
    phone: "086-3399144"
  },
  {
    name: "Alan Cheevers",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Alan Cheevers.webp",
    partyName: "Fianna Fáil",
    constituency: "Galway City East",
    score: "./assets/images/not_td.jpg",
    email: "Alan.Cheevers@cgcc.ie",
    phone: "087 6939631"
  },
  {
    name: "Alan Curran",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Alan Curran.png",
    partyName: "Social Democrats",
    constituency: "Galway City East",
    score: "./assets/images/negative.jpg",
    email: "Alan.Curran@cgcc.ie",
    phone: "089 223 6266"
  },
  {
    name: "Denman Rooke",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Denman Rooke.webp",
    partyName: "People Before Profit",
    constituency: "Galway City East",
    score: "./assets/images/not_td.jpg",
    email: "info@pbpgalway.ie",
    phone: ""
  },
  {
    name: "Helen Ogbu",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Helen Ogbu.png",
    partyName: "Labour",
    constituency: "Galway City East",
    score: "./assets/images/negative.jpg",
    email: "helen.ogbu@votelabour.ie",
    phone: "089 2015903"
  },
  {
    name: "Joyce Mathias",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Joyce Mathias.jpg",
    partyName: "Green Party",
    constituency: "Galway City East",
    score: "./assets/images/positive.jpg",
    email: "joyce.mathias@greenparty.ie",
    phone: ""
  },
  {
    name: "Justine Delaney Heaslip",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Justine Delaney Heaslip.png",
    partyName: "Social Democrats",
    constituency: "Galway City East",
    score: "./assets/images/not_td.jpg",
    email: "justine.delaney@socialdemocrats.ie",
    phone: ""
  },
  {
    name: "Michael Crowe",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Michael Crowe.webp",
    partyName: "Fianna Fáil",
    constituency: "Galway City East",
    score: "./assets/images/negative.jpg",
    email: "Michael.Crowe@cgcc.ie",
    phone: "087 2773615"
  },
  {
    name: "Shane Forde",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Shane Forde.jpg",
    partyName: "Fine Gael",
    constituency: "Galway City East",
    score: "./assets/images/not_td.jpg",
    email: "sforde10@gmail.com",
    phone: "086-8076764"
  },
  {
    name: "Asraf Chowdhury",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Asraf Chowdhury.jpg",
    partyName: "Fine Gael",
    constituency: "Galway City West",
    score: "./assets/images/positive.jpg",
    email: "asraf.fg2024@gmail.com",
    phone: "089-2117869"
  },
  {
    name: "Clodagh Higgins",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Clodagh Higgins.jpeg",
    partyName: "Fine Gael",
    constituency: "Galway City West",
    score: "./assets/images/negative.jpg",
    email: "Clodagh.Higgins@cgcc.ie",
    phone: "087 6153022"
  },
  {
    name: "John Connolly",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/John Connolly.webp",
    partyName: "Fianna Fáil",
    constituency: "Galway City West",
    score: "./assets/images/negative.jpg",
    email: "John.Connolly@cgcc.ie",
    phone: "087 9032345"
  },
  {
    name: "Niall Murphy",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Niall Murphy.png",
    partyName: "Green Party",
    constituency: "Galway City West",
    score: "./assets/images/negative.jpg",
    email: "niall.murphy@cgcc.ie",
    phone: "086 - 8399996"
  },
  {
    name: "Niall McNelis",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Niall McNelis.png",
    partyName: "Labour",
    constituency: "Galway City West",
    score: "./assets/images/positive.jpg",
    email: "Niall.McNelis@cgcc.ie",
    phone: "087 6197300"
  },
  {
    name: "Peter Keane",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Peter Keane.webp",
    partyName: "Fianna Fáil",
    constituency: "Galway City West",
    score: "./assets/images/not_td.jpg",
    email: "Peter.Keane@cgcc.ie",
    phone: "086 8258096"
  },
  {
    name: "Aoife Murtagh",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Aoife Murtagh.png",
    partyName: "Social Democrats",
    constituency: "Glencullen-Sandyford",
    score: "./assets/images/positive.jpg",
    email: "aoife.murtagh@socialdemocrats.ie",
    phone: ""
  },
  {
    name: "Elaine Dunne",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Elaine Dunne.webp",
    partyName: "Fianna Fáil",
    constituency: "Glencullen-Sandyford",
    score: "./assets/images/not_td.jpg",
    email: "elainedunne5@gmail.com",
    phone: "083 1852426"
  },
  {
    name: "Kazi Ahmed",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Kazi Ahmed.jpg",
    partyName: "Fine Gael",
    constituency: "Glencullen-Sandyford",
    score: "./assets/images/negative.jpg",
    email: "kahmed@cllr.dlrcoco.ie",
    phone: "086- 0313448"
  },
  {
    name: "Lettie McCarthy",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Lettie McCarthy.png",
    partyName: "Labour",
    constituency: "Glencullen-Sandyford",
    score: "./assets/images/positive.jpg",
    email: "lmccarthy@cllr.dlrcoco.ie",
    phone: "086-8186718"
  },
  {
    name: "Oisín O'Connor",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Oisin O'Connor.png",
    partyName: "Green Party",
    constituency: "Glencullen-Sandyford",
    score: "./assets/images/negative.jpg",
    email: "ooconnor@cllr.dlrcoco.ie",
    phone: "087 606 5648"
  },
  {
    name: "Pierce Dargan",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Pierce Dargan.jpg",
    partyName: "Fine Gael",
    constituency: "Glencullen-Sandyford",
    score: "./assets/images/positive.jpg",
    email: "piercedarganfg@gmail.com",
    phone: "086-4092584"
  },
  {
    name: "Tommy Murphy",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Tommy Murphy.webp",
    partyName: "Fianna Fáil",
    constituency: "Glencullen-Sandyford",
    score: "./assets/images/positive.jpg",
    email: "tmurphy@cllr.dlrcoco.ie",
    phone: "086-7814515"
  },
  {
    name: "John Shéamais Ó Fearraigh",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/John Sheamais O Fearraigh.png",
    partyName: "Sinn Féin",
    constituency: "Glenties",
    score: "./assets/images/negative.jpg",
    email: "johnofearraigh@donegalcoco.ie",
    phone: "087 24 41842"
  },
  {
    name: "Joseph Molloy",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Joseph Molloy.jpg",
    partyName: "Fine Gael",
    constituency: "Glenties",
    score: "./assets/images/not_td.jpg",
    email: "josephmolloyfg@gmail.com",
    phone: "087-9331338"
  },
  {
    name: "Aisling Hudson",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Aisling Hudson.webp",
    partyName: "People Before Profit",
    constituency: "Gorey",
    score: "./assets/images/not_td.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Andrew Bolger",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Andrew Bolger.webp",
    partyName: "Fianna Fáil",
    constituency: "Gorey",
    score: "./assets/images/negative.jpg",
    email: "andrew.bolger@wexfordmcc.ie",
    phone: "087 1713176"
  },
  {
    name: "Anthony Donohoe",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Anthony Donohoe.jpg",
    partyName: "Fine Gael",
    constituency: "Gorey",
    score: "./assets/images/positive.jpg",
    email: "anthony.donohoe@wexfordmcc.ie",
    phone: "087 7736083"
  },
  {
    name: "Darragh McDonald",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Darragh McDonald.jpg",
    partyName: "Fine Gael",
    constituency: "Gorey",
    score: "./assets/images/not_td.jpg",
    email: "darraghmcdonaldFG@gmail.com",
    phone: "083-3350462"
  },
  {
    name: "Donal Kenny",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Donal Kenny.webp",
    partyName: "Fianna Fáil",
    constituency: "Gorey",
    score: "./assets/images/negative.jpg",
    email: "donal.kenny@wexfordmcc.ie",
    phone: "087 2453187"
  },
  {
    name: "Fionntán O Suilleabhain",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Fionntan O Suilleabhain.jpg",
    partyName: "Sinn Féin",
    constituency: "Gorey",
    score: "./assets/images/positive.jpg",
    email: "fionntan.osuilleabhain@wexfordmcc.ie",
    phone: "087 6013877"
  },
  {
    name: "Joe Sullivan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Joe Sullivan.webp",
    partyName: "Fianna Fáil",
    constituency: "Gorey",
    score: "./assets/images/negative.jpg",
    email: "joe.sullivan@wexfordmcc.ie",
    phone: "087 2416375"
  },
  {
    name: "Lorna Fitzpatrick",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Lorna Fitzpatrick.png",
    partyName: "Labour",
    constituency: "Gorey",
    score: "./assets/images/not_td.jpg",
    email: "lornafitzpatrick16@gmail.com",
    phone: ""
  },
  {
    name: "Gerry Finnerty",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Gerry Finnerty.webp",
    partyName: "Fianna Fáil",
    constituency: "Gort-Kinvara",
    score: "./assets/images/not_td.jpg",
    email: "gfinnerty@cllr.galwaycoco.ie",
    phone: "087 2674295"
  },
  {
    name: "Martina Kinane",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Martina Kinane.webp",
    partyName: "Fianna Fáil",
    constituency: "Gort-Kinvara",
    score: "./assets/images/positive.jpg",
    email: "mkinane@cllr.galwaycoco.ie",
    phone: "087 2692102"
  },
  {
    name: "Megan Flynn Dixon",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Megan Flynn Dixon.jpg",
    partyName: "Green Party",
    constituency: "Gort-Kinvara",
    score: "./assets/images/not_td.jpg",
    email: "megan.flynndixon@greenparty.ie",
    phone: "089 4030818"
  },
  {
    name: "Paul Killilea",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Paul Killilea.jpg",
    partyName: "Fine Gael",
    constituency: "Gort-Kinvara",
    score: "./assets/images/negative.jpg",
    email: "paulkillilea11@gmail.com",
    phone: "087-9763930"
  },
  {
    name: "P.J. Murphy",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/P.J. Murphy.jpg",
    partyName: "Fine Gael",
    constituency: "Gort-Kinvara",
    score: "./assets/images/positive.jpg",
    email: "pjmurphy@cllr.galwaycoco.ie",
    phone: "087 7905401"
  },
  {
    name: "Aidan Mullins",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Aidan Mullins.png",
    partyName: "Sinn Féin",
    constituency: "Graiguecullen-Portarlington",
    score: "./assets/images/negative.jpg",
    email: "amullins@laoiscouncillors.ie",
    phone: "086 850 1476"
  },
  {
    name: "Joey Kennedy",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Joey Kennedy.webp",
    partyName: "Fianna Fáil",
    constituency: "Graiguecullen-Portarlington",
    score: "./assets/images/negative.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Padraig Fleming",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Padraig Fleming.webp",
    partyName: "Fianna Fáil",
    constituency: "Graiguecullen-Portarlington",
    score: "./assets/images/positive.jpg",
    email: "pfleming@laoiscouncillors.ie",
    phone: "(087) 2801677"
  },
  {
    name: "Paschal McEvoy",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Paschal McEvoy.webp",
    partyName: "Fianna Fáil",
    constituency: "Graiguecullen-Portarlington",
    score: "./assets/images/not_td.jpg",
    email: "pmcevoy@laoiscouncillors.ie",
    phone: "087 1359 382"
  },
  {
    name: "P.J. Kelly",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/P.J. Kelly.jpg",
    partyName: "Fine Gael",
    constituency: "Graiguecullen-Portarlington",
    score: "./assets/images/negative.jpg",
    email: "kellypj@eircom.net",
    phone: "(086) 2500133"
  },
  {
    name: "Vivienne Phelan",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Vivienne Phelan.jpg",
    partyName: "Fine Gael",
    constituency: "Graiguecullen-Portarlington",
    score: "./assets/images/positive.jpg",
    email: "vivienne.s.phelan@gmail.com",
    phone: "087-7809906"
  },
  {
    name: "Colin Dalton",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Colin Dalton.jpg",
    partyName: "Fine Gael",
    constituency: "Granard",
    score: "./assets/images/not_td.jpg",
    email: "cdalton@longfordcoco.ie",
    phone: "086 835 01 34"
  },
  {
    name: "Garry Murtagh",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Garry Murtagh.jpg",
    partyName: "Fine Gael",
    constituency: "Granard",
    score: "./assets/images/negative.jpg",
    email: "gmurtagh@longfordcoco.ie",
    phone: "087-7558393"
  },
  {
    name: "Paraic Brady",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Paraic Brady.jpg",
    partyName: "Fine Gael",
    constituency: "Granard",
    score: "./assets/images/positive.jpg",
    email: "pbrady@longfordcoco.ie",
    phone: "086 1066818"
  },
  {
    name: "Aileen Lennon",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Aileen Lennon.jpg",
    partyName: "Fine Gael",
    constituency: "Greystones",
    score: "./assets/images/positive.jpg",
    email: "aileen.lennon@gmail.com",
    phone: "087-8370322"
  },
  {
    name: "Anne Waithira Burke",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Anne Waithira Burke.png",
    partyName: "Labour",
    constituency: "Greystones",
    score: "./assets/images/not_td.jpg",
    email: "waithiraburke@votelabour.ie",
    phone: "083 829 1099"
  },
  {
    name: "Jack Commons",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Jack Commons.webp",
    partyName: "Fianna Fáil",
    constituency: "Greystones",
    score: "./assets/images/not_td.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Kellie McConnell",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Kellie McConnell.webp",
    partyName: "People Before Profit",
    constituency: "Greystones",
    score: "./assets/images/negative.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Lorraine Farrell",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Lorraine Farrell.webp",
    partyName: "People Before Profit",
    constituency: "Greystones",
    score: "./assets/images/positive.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Lourda Scott",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Lourda Scott.jpg",
    partyName: "Green Party",
    constituency: "Greystones",
    score: "./assets/images/not_td.jpg",
    email: "lscott@wicklowcoco.ie",
    phone: "086 167 2130"
  },
  {
    name: "Anthony Lavin",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Anthony Lavin.jpg",
    partyName: "Fine Gael",
    constituency: "Howth-Malahide",
    score: "./assets/images/negative.jpg",
    email: "Anthony.Lavin@cllrs.fingal.ie",
    phone: "0879931329"
  },
  {
    name: "Aoibhinn Tormey",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Aoibhinn Tormey.jpeg",
    partyName: "Fine Gael",
    constituency: "Howth-Malahide",
    score: "./assets/images/positive.jpg",
    email: "Aoibhinn.Tormey@cllrs.fingal.ie",
    phone: "0877546258"
  },
  {
    name: "Brian McDonagh",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Brian McDonagh.png",
    partyName: "Labour",
    constituency: "Howth-Malahide",
    score: "./assets/images/not_td.jpg",
    email: "Brian.McDonagh@cllrs.fingal.ie",
    phone: "0863858979"
  },
  {
    name: "Cathal Haughey",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Cathal Haughey.webp",
    partyName: "Fianna Fáil",
    constituency: "Howth-Malahide",
    score: "./assets/images/negative.jpg",
    email: "cathal.haughey2@gmail.com",
    phone: "083-4177516"
  },
  {
    name: "David Healy",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/David Healy.png",
    partyName: "Green Party",
    constituency: "Howth-Malahide",
    score: "./assets/images/positive.jpg",
    email: "David.Healy@cllrs.fingal.ie",
    phone: "0876178852"
  },
  {
    name: "Eoghan O'Brien",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Eoghan O'Brien.jpg",
    partyName: "Fianna Fáil",
    constituency: "Howth-Malahide",
    score: "./assets/images/not_td.jpg",
    email: "Eoghan.OBrien@cllrs.fingal.ie",
    phone: "0868580562"
  },
  {
    name: "Joan Hopkins",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Joan Hopkins.png",
    partyName: "Social Democrats",
    constituency: "Howth-Malahide",
    score: "./assets/images/positive.jpg",
    email: "Joan.Hopkins@cllrs.fingal.ie",
    phone: "083 1031541"
  },
  {
    name: "Andrew Ring",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Andrew Ring.png",
    partyName: "Social Democrats",
    constituency: "Kanturk",
    score: "./assets/images/not_td.jpg",
    email: "andrew.ring@socialdemocrats.ie",
    phone: "086 027 4536"
  },
  {
    name: "Becky Kealy",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Becky Kealy.jpg",
    partyName: "Aontú",
    constituency: "Kanturk",
    score: "./assets/images/negative.jpg",
    email: "beckykealyAontú@gmail.com",
    phone: "086 0760180"
  },
  {
    name: "Bernard Moynihan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Bernard Moynihan.webp",
    partyName: "Fianna Fáil",
    constituency: "Kanturk",
    score: "./assets/images/positive.jpg",
    email: "bernardmoynihan1@gmail.com",
    phone: "087 772 2828"
  },
  {
    name: "Ian Doyle",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Ian Doyle.jpg",
    partyName: "Fianna Fáil",
    constituency: "Kanturk",
    score: "./assets/images/negative.jpg",
    email: "Ian.Doyle@cllr.corkcoco.ie",
    phone: "087 6644654"
  },
  {
    name: "John Paul O'Shea",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/John Paul O'Shea.jpg",
    partyName: "Fine Gael",
    constituency: "Kanturk",
    score: "./assets/images/positive.jpg",
    email: "oshea_jp@hotmail.com",
    phone: "086 8903154"
  },
  {
    name: "Eugene Cassidy",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Eugene Cassidy.jpg",
    partyName: "Fine Gael",
    constituency: "Kells",
    score: "./assets/images/positive.jpg",
    email: "eugene.cassidy@members.meathcoco.ie",
    phone: "086 3717686"
  },
  {
    name: "Michael Gallagher",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Michael Gallagher.png",
    partyName: "Sinn Féin",
    constituency: "Kells",
    score: "./assets/images/negative.jpg",
    email: "michael.gallagher@members.meathcoco.ie",
    phone: "087 9478222"
  },
  {
    name: "Mike Bray",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Mike Bray.webp",
    partyName: "Fianna Fáil",
    constituency: "Kells",
    score: "./assets/images/positive.jpg",
    email: "mike.bray@members.meathcoco.ie",
    phone: "086 1572779"
  },
  {
    name: "Paddy Rennick",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Paddy Rennick.webp",
    partyName: "Fianna Fáil",
    constituency: "Kells",
    score: "./assets/images/not_td.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Paul McCabe",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Paul McCabe.webp",
    partyName: "Fianna Fáil",
    constituency: "Kells",
    score: "./assets/images/negative.jpg",
    email: "paul.mccabe@members.meathcoco.ie",
    phone: "086 2357879"
  },
  {
    name: "Peter Devin",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Peter Devin.jpg",
    partyName: "Aontú",
    constituency: "Kells",
    score: "./assets/images/positive.jpg",
    email: "peter_devin@yahoo.co.uk",
    phone: "086 867 6664"
  },
  {
    name: "Ronan Moore",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Ronan Moore.png",
    partyName: "Social Democrats",
    constituency: "Kells",
    score: "./assets/images/negative.jpg",
    email: "ronan.moore@members.meathcoco.ie",
    phone: "085 2307682"
  },
  {
    name: "Seamus McGee",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Seamus McGee.jpg",
    partyName: "Fine Gael",
    constituency: "Kells",
    score: "./assets/images/positive.jpg",
    email: "seamusmcgee1@gmail.com",
    phone: "086-8630985"
  },
  {
    name: "Sean Drew",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Sean Drew.webp",
    partyName: "Fianna Fáil",
    constituency: "Kells",
    score: "./assets/images/not_td.jpg",
    email: "sean.drew@members.meathcoco.ie",
    phone: "087 4121803"
  },
  {
    name: "Catherina O'Sullivan",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Catherina O'Sullivan.jpg",
    partyName: "Aontú",
    constituency: "Kenmare",
    score: "./assets/images/positive.jpg",
    email: "catherina.osullivan@aontu.ie",
    phone: ""
  },
  {
    name: "Cleo Murphy",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Cleo Murphy.png",
    partyName: "Green Party",
    constituency: "Kenmare",
    score: "./assets/images/not_td.jpg",
    email: "cleo.murphy@greenparty.ie",
    phone: "087 260 7114"
  },
  {
    name: "Michael Cahill",
    imageUrl: "#N/A",
    partyName: "Fianna Fáil",
    constituency: "Kenmare",
    score: "./assets/images/negative.jpg",
    email: "cllrmichael.cahill@kerrycoco.ie",
    phone: "086 2670768"
  },
  {
    name: "Norma Moriarty",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Norma Moriarty.webp",
    partyName: "Fianna Fáil",
    constituency: "Kenmare",
    score: "./assets/images/positive.jpg",
    email: "moriartynorma@gmail.com",
    phone: "086 8581841"
  },
  {
    name: "Teddy O'Sullivan Casey",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Teddy O'Sullivan Casey.jpg",
    partyName: "Fine Gael",
    constituency: "Kenmare",
    score: "./assets/images/not_td.jpg",
    email: "teddy4kenmare@gmail.com",
    phone: "087-6705108"
  },
  {
    name: "Tim Clifford",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Tim Clifford.png",
    partyName: "Social Democrats",
    constituency: "Kenmare",
    score: "./assets/images/negative.jpg",
    email: "tim.clifford@socialdemocrats.ie",
    phone: "089 950 9010"
  },
  {
    name: "Tony Donnelly",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Tony Donnelly.jpg",
    partyName: "Fine Gael",
    constituency: "Kenmare",
    score: "./assets/images/positive.jpg",
    email: "agdonnelly@live.ie",
    phone: "087-2280478"
  },
  {
    name: "Brian O'Loughlin",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Brian O'Loughlin.webp",
    partyName: "Fianna Fáil",
    constituency: "Kildare",
    score: "./assets/images/not_td.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Chris Harrison",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Chris Harrison.png",
    partyName: "Labour",
    constituency: "Kildare",
    score: "./assets/images/negative.jpg",
    email: "charrison@localrep.ie",
    phone: "087 213 4308"
  },
  {
    name: "Kevin Duffy",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Kevin Duffy.jpg",
    partyName: "Fine Gael",
    constituency: "Kildare",
    score: "./assets/images/positive.jpg",
    email: "kevinduffyfg@gmail.com",
    phone: "085 2390341"
  },
  {
    name: "Lorraine Benson",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Lorraine Benson.jpg",
    partyName: "Green Party",
    constituency: "Kildare",
    score: "./assets/images/not_td.jpg",
    email: "lorraine.benson@greenparty.ie",
    phone: "089 9627550"
  },
  {
    name: "Paddy Curran",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Paddy Curran.jpg",
    partyName: "Fine Gael",
    constituency: "Kildare",
    score: "./assets/images/positive.jpg",
    email: "ppaddy683@gmail.com",
    phone: "085-1915324"
  },
  {
    name: "Pat Balfe",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Pat Balfe.png",
    partyName: "Social Democrats",
    constituency: "Kildare",
    score: "./assets/images/not_td.jpg",
    email: "patrick.balfe@socialdemocrats.ie",
    phone: ""
  },
  {
    name: "Suzanne Doyle",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Suzanne Doyle.webp",
    partyName: "Fianna Fáil",
    constituency: "Kildare",
    score: "./assets/images/positive.jpg",
    email: "sdoylemcc@gmail.com",
    phone: "087-9521232"
  },
  {
    name: "Andrea Cleere",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Andrea Cleere.png",
    partyName: "Labour",
    constituency: "Kilkenny",
    score: "./assets/images/not_td.jpg",
    email: "cleereryan@gmail.com",
    phone: "085 708 0067"
  },
  {
    name: "Andrew McGuinness",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Andrew McGuinness.webp",
    partyName: "Fianna Fáil",
    constituency: "Kilkenny",
    score: "./assets/images/negative.jpg",
    email: "cllrandrew.mcguinness@kilkennycoco.ie",
    phone: "(086) 8705811"
  },
  {
    name: "David Fitzgerald",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/David Fitzgerald.jpg",
    partyName: "Fine Gael",
    constituency: "Kilkenny",
    score: "./assets/images/positive.jpg",
    email: "cllrdavid.fitzgerald@kilkennycoco.ie",
    phone: "086-2514041"
  },
  {
    name: "Ger Frisby",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Ger Frisby.webp",
    partyName: "Fianna Fáil",
    constituency: "Kilkenny",
    score: "./assets/images/positive.jpg",
    email: "cllrger.frisby@kilkennycoco.ie",
    phone: "087-2394760"
  },
  {
    name: "Joe Malone",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Joe Malone.webp",
    partyName: "Fianna Fáil",
    constituency: "Kilkenny",
    score: "./assets/images/not_td.jpg",
    email: "cllrjoe.malone@kilkennycoco.ie",
    phone: "086-3128838"
  },
  {
    name: "John Coonan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/John Coonan.jpg",
    partyName: "Fianna Fáil",
    constituency: "Kilkenny",
    score: "./assets/images/negative.jpg",
    email: "cllrjohn.coonan@kilkennycoco.ie",
    phone: "086-8145020"
  },
  {
    name: "Kevin Shore",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Kevin Shore.webp",
    partyName: "People Before Profit",
    constituency: "Kilkenny",
    score: "./assets/images/positive.jpg",
    email: "kilkennypbp@gmail.com",
    phone: ""
  },
  {
    name: "Maria Dollard",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Maria Dollard.png",
    partyName: "Green Party",
    constituency: "Kilkenny",
    score: "./assets/images/not_td.jpg",
    email: "cllrmaria.dollard@kilkennycoco.ie",
    phone: "087 4079204"
  },
  {
    name: "Martin Brett",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Martin Brett.jpg",
    partyName: "Fine Gael",
    constituency: "Kilkenny",
    score: "./assets/images/positive.jpg",
    email: "cllrmartin.brett@kilkennycoco.ie",
    phone: "087-2651272"
  },
  {
    name: "Martin O'Neill",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Martin O'Neill.png",
    partyName: "Social Democrats",
    constituency: "Kilkenny",
    score: "./assets/images/not_td.jpg",
    email: "martin.oneill@socialdemocrats.ie",
    phone: ""
  },
  {
    name: "Sean Ó hArgáin",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Sean O hArgain.png",
    partyName: "Labour",
    constituency: "Kilkenny",
    score: "./assets/images/negative.jpg",
    email: "seanohargain@gmail.com",
    phone: "087 4192322"
  },
  {
    name: "Alan O'Callaghan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Alan O'Callaghan.jpg",
    partyName: "Fianna Fáil",
    constituency: "Killaloe",
    score: "./assets/images/negative.jpg",
    email: "alanocallaghan@eircom.net",
    phone: "(086) 4114168"
  },
  {
    name: "Fiona Levie",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Fiona Levie.png",
    partyName: "Social Democrats",
    constituency: "Killaloe",
    score: "./assets/images/positive.jpg",
    email: "fiona.levie@socialdemocrats.ie",
    phone: "086 788 6611"
  },
  {
    name: "Joe Cooney",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Joe Cooney.jpg",
    partyName: "Fine Gael",
    constituency: "Killaloe",
    score: "./assets/images/not_td.jpg",
    email: "josephcooney@outlook.ie",
    phone: "(087) 2500227"
  },
  {
    name: "Pat Hayes",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Pat Hayes.webp",
    partyName: "Fianna Fáil",
    constituency: "Killaloe",
    score: "./assets/images/positive.jpg",
    email: "hayespatrick@eircom.net",
    phone: "(087) 6820167"
  },
  {
    name: "Pat Burke",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Pat Burke.jpg",
    partyName: "Fine Gael",
    constituency: "Killaloe",
    score: "./assets/images/not_td.jpg",
    email: "burkedromaan@gmail.com",
    phone: "(086) 8257229"
  },
  {
    name: "Tony O'Brien",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Tony O'Brien.webp",
    partyName: "Fianna Fáil",
    constituency: "Killaloe",
    score: "./assets/images/negative.jpg",
    email: "tonyobrienmcc@gmail.com",
    phone: "(087) 8225983"
  },
  {
    name: "Dermot Healy",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Dermot Healy.png",
    partyName: "Fine Gael",
    constituency: "Killarney",
    score: "./assets/images/positive.jpg",
    email: "helihealy@gmail.com",
    phone: "087-2574766"
  },
  {
    name: "Diarmaid Griffin",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Diarmaid Griffin.jpg",
    partyName: "Green Party",
    constituency: "Killarney",
    score: "./assets/images/not_td.jpg",
    email: "Diarmaid.Griffin@greenparty.ie",
    phone: ""
  },
  {
    name: "Marie Moloney",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Marie Moloney.png",
    partyName: "Labour",
    constituency: "Killarney",
    score: "./assets/images/positive.jpg",
    email: "Marie.moloney1980@gmail.com",
    phone: "086 3049422"
  },
  {
    name: "Niall Kelleher",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Niall Kelleher.webp",
    partyName: "Fianna Fáil",
    constituency: "Killarney",
    score: "./assets/images/positive.jpg",
    email: "niall@niallkelleher.ie",
    phone: "087 6694101"
  },
  {
    name: "Carrie Smyth",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Carrie Smyth.png",
    partyName: "Labour",
    constituency: "Killiney-Shankill",
    score: "./assets/images/negative.jpg",
    email: "carriesmyth@cllr.dlrcoco.ie",
    phone: "086-3835051"
  },
  {
    name: "Frank McNamara",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Frank McNamara.jpg",
    partyName: "Fine Gael",
    constituency: "Killiney-Shankill",
    score: "./assets/images/positive.jpg",
    email: "fmcnamara@cllr.dlrcoco.ie",
    phone: "087 104 3210"
  },
  {
    name: "Jacqueline Burke",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Jacqueline Burke.jpg",
    partyName: "Fine Gael",
    constituency: "Killiney-Shankill",
    score: "./assets/images/negative.jpg",
    email: "Jacqueline.burkefg@gmail.com",
    phone: "087-4908555"
  },
  {
    name: "James Kearney",
    imageUrl: "./assets/images/LE 2024 Images/Labour/James Kearney.png",
    partyName: "Labour",
    constituency: "Killiney-Shankill",
    score: "./assets/images/positive.jpg",
    email: "jamesmfkearney@gmail.com",
    phone: ""
  },
  {
    name: "Jim Gildea",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Jim Gildea.jpg",
    partyName: "Fine Gael",
    constituency: "Killiney-Shankill",
    score: "./assets/images/not_td.jpg",
    email: "jgildea@cllr.dlrcoco.ie",
    phone: "086-8131456"
  },
  {
    name: "Lauren Tuite",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Lauren Tuite.jpg",
    partyName: "Green Party",
    constituency: "Killiney-Shankill",
    score: "./assets/images/negative.jpg",
    email: "ltuite@cllr.dlrcoco.ie",
    phone: "087 788 1348"
  },
  {
    name: "Lesley Byrne",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Lesley Byrne.png",
    partyName: "Social Democrats",
    constituency: "Killiney-Shankill",
    score: "./assets/images/positive.jpg",
    email: "lesley.byrne@socialdemocrats.ie",
    phone: ""
  },
  {
    name: "Michael Clark",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Michael Clark.webp",
    partyName: "Fianna Fáil",
    constituency: "Killiney-Shankill",
    score: "./assets/images/not_td.jpg",
    email: "mclark@cllr.dlrcoco.ie",
    phone: "087-1094032"
  },
  {
    name: "Sally Ann Moylan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Sally Ann Moylan.webp",
    partyName: "Fianna Fáil",
    constituency: "Killiney-Shankill",
    score: "./assets/images/positive.jpg",
    email: "sallyannmoylanff@gmail.com",
    phone: "085 169 6535"
  },
  {
    name: "Dave O'Keeffe",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Dave O'Keeffe.webp",
    partyName: "People Before Profit",
    constituency: "Killiney–Shankill",
    score: "./assets/images/not_td.jpg",
    email: "dokeeffe@cllr.dlrcoco.ie",
    phone: ""
  },
  {
    name: "Oliver Walsh",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Oliver Walsh.jpg",
    partyName: "Fine Gael",
    constituency: "Kilmuckridge",
    score: "./assets/images/not_td.jpg",
    email: "oliver.walsh@wexfordmcc.ie",
    phone: "087 6322667"
  },
  {
    name: "Peter Breen",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Peter Breen.png",
    partyName: "Fianna Fáil",
    constituency: "Kilmuckridge",
    score: "./assets/images/positive.jpg",
    email: "pip.breen@wexfordmcc.ie",
    phone: "086 8139817"
  },
  {
    name: "Willie Kavanagh",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Willie Kavanagh.jpg",
    partyName: "Fianna Fáil",
    constituency: "Kilmuckridge",
    score: "./assets/images/not_td.jpg",
    email: "willie.kavanagh@wexfordmcc.ie",
    phone: "087 0546803"
  },
  {
    name: "Alan Troy",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Alan Troy.jpg",
    partyName: "Fianna Fáil",
    constituency: "Kilrush",
    score: "./assets/images/negative.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Cillian Murphy",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Cillian Murphy.jpg",
    partyName: "Fianna Fáil",
    constituency: "Kilrush",
    score: "./assets/images/positive.jpg",
    email: "councilormurphy.clarecoco@gmail.com",
    phone: "086 2780161"
  },
  {
    name: "Gabriel Keating",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Gabriel Keating.jpg",
    partyName: "Fine Gael",
    constituency: "Kilrush",
    score: "./assets/images/negative.jpg",
    email: "gabrielkeating1@gmail.com",
    phone: "(087) 2564833"
  },
  {
    name: "Michael Shannon",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Michael Shannon.jpg",
    partyName: "Fianna Fáil",
    constituency: "Kilrush",
    score: "./assets/images/negative.jpg",
    email: "michaelshannon1@gmail.com",
    phone: "086 078 5226"
  },
  {
    name: "Rita McInerney",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Rita McInerney.webp",
    partyName: "Fianna Fáil",
    constituency: "Kilrush",
    score: "./assets/images/positive.jpg",
    email: "ritamcinerney@me.com",
    phone: "087 677 4907"
  },
  {
    name: "Therese Doohan",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Therese Doohan.jpg",
    partyName: "Fine Gael",
    constituency: "Kilrush",
    score: "./assets/images/not_td.jpg",
    email: "theresedoohan1@gmail.com",
    phone: "087-7533834"
  },
  {
    name: "Carolyn Moore",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Carolyn Moore.png",
    partyName: "Green Party",
    constituency: "Kimmage-Rathmines",
    score: "./assets/images/positive.jpg",
    email: "carolyn.moore@dublincity.ie",
    phone: "087 6452800"
  },
  {
    name: "Deirdre Conroy",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Deirdre Conroy.webp",
    partyName: "Fianna Fáil",
    constituency: "Kimmage-Rathmines",
    score: "./assets/images/negative.jpg",
    email: "office@deirdreconroy.com",
    phone: "086 280 5413"
  },
  {
    name: "Eoin Hayes",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Eoin Hayes.png",
    partyName: "Social Democrats",
    constituency: "Kimmage-Rathmines",
    score: "./assets/images/positive.jpg",
    email: "eoin.hayes@socialdemocrats.ie",
    phone: "085 197 1189"
  },
  {
    name: "Fiona Connelly",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Fiona Connelly.png",
    partyName: "Labour",
    constituency: "Kimmage-Rathmines",
    score: "./assets/images/not_td.jpg",
    email: "Fiona.Connelly@dublincity.ie",
    phone: "087 9042266"
  },
  {
    name: "Michael Connolly",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Michael Connolly.webp",
    partyName: "Fianna Fáil",
    constituency: "Kimmage-Rathmines",
    score: "./assets/images/positive.jpg",
    email: "#N/A",
    phone: ""
  },
  {
    name: "Pat Dunne",
    imageUrl: "./assets/images/LE 2024 Images/Right to Change/Pat Dunne.jpg",
    partyName: "Right to Change",
    constituency: "Kimmage-Rathmines",
    score: "./assets/images/negative.jpg",
    email: "#N/A",
    phone: ""
  },
  {
    name: "Patrick Kinsella",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Patrick Kinsella.jpg",
    partyName: "Fine Gael",
    constituency: "Kimmage-Rathmines",
    score: "./assets/images/positive.jpg",
    email: "pkinsella1@eircom.net",
    phone: "087-2576444"
  },
  {
    name: "Punam Rane",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Punam Rane.jpg",
    partyName: "Fine Gael",
    constituency: "Kimmage-Rathmines",
    score: "./assets/images/negative.jpg",
    email: "PunamFG@gmail.com",
    phone: "089-2544372"
  },
  {
    name: "Alfie Devine",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Alfie Devine.jpg",
    partyName: "Fianna Fáil",
    constituency: "Kinnegad",
    score: "./assets/images/not_td.jpg",
    email: "alfredfiannafail@gmail.com",
    phone: "087 2517359"
  },
  {
    name: "Anthonia Izekor",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Anthonia Izekor.jpg",
    partyName: "Fine Gael",
    constituency: "Kinnegad",
    score: "./assets/images/negative.jpg",
    email: "voteantonia2024@gmail.com",
    phone: "087 750 8921"
  },
  {
    name: "Denis Leonard",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Denis Leonard.png",
    partyName: "Labour",
    constituency: "Kinnegad",
    score: "./assets/images/not_td.jpg",
    email: "denis.leonard@westmeathcoco.ie",
    phone: "087 643 0783"
  },
  {
    name: "Emily Wallace",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Emily Wallace.jpg",
    partyName: "Fine Gael",
    constituency: "Kinnegad",
    score: "./assets/images/negative.jpg",
    email: "emily.wallace@westmeathcoco.ie",
    phone: "087 192 6575"
  },
  {
    name: "Laura O'Neill",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Laura O'Neill.jpg",
    partyName: "Aontú",
    constituency: "Kinnegad",
    score: "./assets/images/not_td.jpg",
    email: "lauraAontú@gmail.com",
    phone: "086 364 2363"
  },
  {
    name: "Niall Gaffney",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Niall Gaffney.jpg",
    partyName: "Fianna Fáil",
    constituency: "Kinnegad",
    score: "./assets/images/positive.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Seamus MacDermott",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Seamus MacDermott.jpg",
    partyName: "Fine Gael",
    constituency: "Kinnegad",
    score: "./assets/images/not_td.jpg",
    email: "smacdermott4@gmail.com",
    phone: "087-8205193"
  },
  {
    name: "Shauna Coyne",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Shauna Coyne.webp",
    partyName: "Fianna Fáil",
    constituency: "Kinnegad",
    score: "./assets/images/negative.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Vinny McCormack",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Vinny McCormack.webp",
    partyName: "Fianna Fáil",
    constituency: "Kinnegad",
    score: "./assets/images/positive.jpg",
    email: "vinny.mccormack@westmeathcoco.ie",
    phone: "086 372 8044"
  },
  {
    name: "Cathal Mac Reamoinn",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Cathal Mac Reamoinn.jpg",
    partyName: "Green Party",
    constituency: "Laytown-Bettystown",
    score: "./assets/images/negative.jpg",
    email: "Cathal.MacReamoinn@greenparty.ie",
    phone: "083 8831100"
  },
  {
    name: "Declan O'Neill",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Declan O'Neill.jpg",
    partyName: "Fine Gael",
    constituency: "Laytown-Bettystown",
    score: "./assets/images/positive.jpg",
    email: "djoneill@ymail.com",
    phone: "086-8514331"
  },
  {
    name: "Elaine McGinty",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Elaine McGinty.png",
    partyName: "Labour",
    constituency: "Laytown-Bettystown",
    score: "./assets/images/not_td.jpg",
    email: "elaine.mcginty@members.meathcoco.ie",
    phone: "086 8369649"
  },
  {
    name: "Paddy Meade",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Paddy Meade.jpg",
    partyName: "Fine Gael",
    constituency: "Laytown-Bettystown",
    score: "./assets/images/not_td.jpg",
    email: "paddy.meade@members.meathcoco.ie",
    phone: "087 6495907"
  },
  {
    name: "Peter Whelan",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Peter Whelan.jpg",
    partyName: "Aontú",
    constituency: "Laytown-Bettystown",
    score: "./assets/images/negative.jpg",
    email: "peterwhelan6@hotmail.com",
    phone: "087 9419866"
  },
  {
    name: "Sharon Tolan",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Sharon Tolan.jpg",
    partyName: "Fine Gael",
    constituency: "Laytown-Bettystown",
    score: "./assets/images/not_td.jpg",
    email: "sharon.tolan@members.meathcoco.ie",
    phone: "086 3669852"
  },
  {
    name: "Stephen McKee",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Stephen McKee.webp",
    partyName: "Fianna Fáil",
    constituency: "Laytown-Bettystown",
    score: "./assets/images/negative.jpg",
    email: "stephen.mckee@members.meathcoco.ie",
    phone: "086 0432760"
  },
  {
    name: "Tom Behan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Tom Behan.webp",
    partyName: "Fianna Fáil",
    constituency: "Laytown-Bettystown",
    score: "./assets/images/positive.jpg",
    email: "tom.behan@members.meathcoco.ie",
    phone: "086 1012582"
  },
  {
    name: "Wayne Harding",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Wayne Harding.webp",
    partyName: "Fianna Fáil",
    constituency: "Laytown-Bettystown",
    score: "./assets/images/not_td.jpg",
    email: "wayne.harding@members.meathcoco.ie",
    phone: "087 7446730"
  },
  {
    name: "Bernard Caldwell",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Bernard Caldwell.webp",
    partyName: "Fianna Fáil",
    constituency: "Leixlip",
    score: "./assets/images/negative.jpg",
    email: "bernardhri@gmail.com",
    phone: "086 2653455"
  },
  {
    name: "Imran Ali",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Imran Ali.jpg",
    partyName: "Green Party",
    constituency: "Leixlip",
    score: "./assets/images/positive.jpg",
    email: "imran.ali@greenparty.ie",
    phone: ""
  },
  {
    name: "Joe Neville",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Joe Neville.jpg",
    partyName: "Fine Gael",
    constituency: "Leixlip",
    score: "./assets/images/negative.jpg",
    email: "joeneville.no1@gmail.com",
    phone: "086 6062207"
  },
  {
    name: "Nuala Killeen",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Nuala Killeen.png",
    partyName: "Social Democrats",
    constituency: "Leixlip",
    score: "./assets/images/positive.jpg",
    email: "nuala.killeen@socialdemocrats.ie",
    phone: "087 7160630"
  },
  {
    name: "Ciaran Brogan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Ciaran Brogan.webp",
    partyName: "Fianna Fáil",
    constituency: "Letterkenny",
    score: "./assets/images/not_td.jpg",
    email: "CiaranBrogan@donegalcoco.ie",
    phone: ""
  },
  {
    name: "Donal Coyle",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Donal Coyle.jpg",
    partyName: "Fianna Fáil",
    constituency: "Letterkenny",
    score: "./assets/images/negative.jpg",
    email: "donalcoyle@donegalcoco.ie",
    phone: "086 10 71220"
  },
  {
    name: "Gerry McMonagle",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Gerry McMonagle.png",
    partyName: "Sinn Féin",
    constituency: "Letterkenny",
    score: "./assets/images/positive.jpg",
    email: "gerrymcmonagle@donegalcoco.ie",
    phone: "086 06 37990"
  },
  {
    name: "Jimmy Kavanagh",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Jimmy Kavanagh.jpg",
    partyName: "Fine Gael",
    constituency: "Letterkenny",
    score: "./assets/images/not_td.jpg",
    email: "jimmykavanagh@donegalcoco.ie",
    phone: "086 66 90423"
  },
  {
    name: "Mary Sweeney",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Mary Sweeney.jpg",
    partyName: "Aontú",
    constituency: "Letterkenny",
    score: "./assets/images/positive.jpg",
    email: "marytsweeneyAontú@gmail.com",
    phone: "087 670 7002"
  },
  {
    name: "Michael McLaughlin",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Michael McLaughlin.png",
    partyName: "Labour",
    constituency: "Letterkenny",
    score: "./assets/images/negative.jpg",
    email: "michael.mclaughlin@votelabour.ie",
    phone: "083 018 2516"
  },
  {
    name: "Nuala Carr",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Nuala Carr.jpg",
    partyName: "Green Party",
    constituency: "Letterkenny",
    score: "./assets/images/positive.jpg",
    email: "nuala.carr@greenparty.ie",
    phone: ""
  },
  {
    name: "Tomas Sean Devine",
    imageUrl: "./assets/images/LE 2024 Images/100% Redress Party/Tomas Sean Devine.jpg",
    partyName: "100% Redress Party",
    constituency: "Letterkenny",
    score: "./assets/images/negative.jpg",
    email: "enquiries@100percentredressparty.ie",
    phone: ""
  },
  {
    name: "Charles Ward",
    imageUrl: "./assets/images/LE 2024 Images/100% Redress Party/Charles Ward.jpg",
    partyName: "100% Redress Party",
    constituency: "Lifford-Stranorlar",
    score: "./assets/images/not_td.jpg",
    email: "enquiries@100percentredressparty.ie",
    phone: ""
  },
  {
    name: "Garvan Connolly",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Garvan Connolly.png",
    partyName: "Fine Gael",
    constituency: "Lifford-Stranorlar",
    score: "./assets/images/not_td.jpg",
    email: "garvanconnolly@hotmail.com",
    phone: "086 812 4063"
  },
  {
    name: "Gary Doherty",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Gary Doherty.png",
    partyName: "Sinn Féin",
    constituency: "Lifford-Stranorlar",
    score: "./assets/images/negative.jpg",
    email: "garydoherty@donegalcoco.ie",
    phone: "085 75 64718"
  },
  {
    name: "Liam Doherty",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Liam Doherty.png",
    partyName: "Sinn Féin",
    constituency: "Lifford-Stranorlar",
    score: "./assets/images/positive.jpg",
    email: "liamdoherty@donegalcoco.ie",
    phone: "086 3826414"
  },
  {
    name: "Martin Harley",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Martin Harley.jpg",
    partyName: "Fine Gael",
    constituency: "Lifford-Stranorlar",
    score: "./assets/images/not_td.jpg",
    email: "MARTINHARLEY@donegalcoco.ie",
    phone: "086 6490152"
  },
  {
    name: "Catherine Slattery",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Catherine Slattery.webp",
    partyName: "Fianna Fáil",
    constituency: "Limerick City East",
    score: "./assets/images/negative.jpg",
    email: "catherine.slattery@limerick.ie",
    phone: "085 8524279"
  },
  {
    name: "Donnah Vuma",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Donnah Vuma.png",
    partyName: "Social Democrats",
    constituency: "Limerick City East",
    score: "./assets/images/negative.jpg",
    email: "donnah.vuma@socialdemocrats.ie",
    phone: "083 010 1439"
  },
  {
    name: "Elena Secas",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Elena Secas.png",
    partyName: "Labour",
    constituency: "Limerick City East",
    score: "./assets/images/positive.jpg",
    email: "elena.secas@limerick.ie",
    phone: "086 3607872"
  },
  {
    name: "Eric Nelligan",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Eric Nelligan.jpg",
    partyName: "Aontú",
    constituency: "Limerick City East",
    score: "./assets/images/not_td.jpg",
    email: "ericnelligan@Aontú.ie",
    phone: "087 2296240"
  },
  {
    name: "Joe Pond",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Joe Pond.webp",
    partyName: "Fianna Fáil",
    constituency: "Limerick City East",
    score: "./assets/images/negative.jpg",
    email: "joepondannacotty@gmail.com",
    phone: "087-6101615"
  },
  {
    name: "Michael O'Brien",
    imageUrl: "./assets/images/LE 2024 Images/An Rabharta Glas/Michael O'Brien.jpg",
    partyName: "An Rabharta Glas",
    constituency: "Limerick City East",
    score: "./assets/images/positive.jpg",
    email: "michael.obrien@westmeathcoco.ie",
    phone: ""
  },
  {
    name: "Michael Murphy",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Michael Murphy.jpg",
    partyName: "Fine Gael",
    constituency: "Limerick City East",
    score: "./assets/images/not_td.jpg",
    email: "michael.murphy@limerick.ie",
    phone: "086 8328347"
  },
  {
    name: "Michael Sheahan",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Michael Sheahan.jpg",
    partyName: "Fine Gael",
    constituency: "Limerick City East",
    score: "./assets/images/negative.jpg",
    email: "michael.sheahan@limerick.ie",
    phone: "087 9163370"
  },
  {
    name: "Peter Doyle",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Peter Doyle.jpg",
    partyName: "Fine Gael",
    constituency: "Limerick City East",
    score: "./assets/images/negative.jpg",
    email: "peterdoyle.no1@gmail.com",
    phone: "086-3861054"
  },
  {
    name: "Sarah Kiely",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Sarah Kiely.jpg",
    partyName: "Fine Gael",
    constituency: "Limerick City East",
    score: "./assets/images/positive.jpg",
    email: "sarah.kiely@limerick.ie",
    phone: "085 7836257"
  },
  {
    name: "Sean Hartigan",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Sean Hartigan.jpg",
    partyName: "Green Party",
    constituency: "Limerick City East",
    score: "./assets/images/not_td.jpg",
    email: "sean.hartigan@limerick.ie",
    phone: "085 7218312"
  },
  {
    name: "Conor Sheehan",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Conor Sheehan.png",
    partyName: "Labour",
    constituency: "Limerick City North",
    score: "./assets/images/positive.jpg",
    email: "conor.sheehan@limerick.ie",
    phone: "085 7525385"
  },
  {
    name: "Kieran O'Hanlon",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Kieran O'Hanlon.webp",
    partyName: "Fianna Fáil",
    constituency: "Limerick City North",
    score: "./assets/images/positive.jpg",
    email: "kieran.ohanlon@limerick.ie",
    phone: "086 1532783"
  },
  {
    name: "Mark Spain",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Mark Spain.jpg",
    partyName: "Fine Gael",
    constituency: "Limerick City North",
    score: "./assets/images/not_td.jpg",
    email: "info@markspain.ie",
    phone: "087-6711796"
  },
  {
    name: "Olivia O'Sullivan",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Olivia O'Sullivan.png",
    partyName: "Fine Gael",
    constituency: "Limerick City North",
    score: "./assets/images/negative.jpg",
    email: "olivia.osullivan@limerick.ie",
    phone: "087 2753477"
  },
  {
    name: "Ruairi Fahy",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Ruairi Fahy.webp",
    partyName: "People Before Profit",
    constituency: "Limerick City North",
    score: "./assets/images/positive.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Sarah Beasley",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Sarah Beasley.jpg",
    partyName: "Aontú",
    constituency: "Limerick City North",
    score: "./assets/images/not_td.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Sasa Novak Uí Chonchúair",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Sasa Novak Ui Chonchuair.png",
    partyName: "Green Party",
    constituency: "Limerick City North",
    score: "./assets/images/negative.jpg",
    email: "sasa.novak@limerick.ie",
    phone: "085 1793117"
  },
  {
    name: "Shane Hickey O'Mara",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Shane Hickey O'Mara.png",
    partyName: "Social Democrats",
    constituency: "Limerick City North",
    score: "./assets/images/positive.jpg",
    email: "shane.hickey.omara@socialdemocrats.ie",
    phone: ""
  },
  {
    name: "Sharon Benson",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Sharon Benson.png",
    partyName: "Sinn Féin",
    constituency: "Limerick City North",
    score: "./assets/images/not_td.jpg",
    email: "sharon.benson@limerick.ie",
    phone: "087 2102084"
  },
  {
    name: "Tom Collopy",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Tom Collopy.jpg",
    partyName: "Sinn Féin",
    constituency: "Limerick City North",
    score: "./assets/images/negative.jpg",
    email: "tom.collopy@limerick.ie",
    phone: "086 8105824"
  },
  {
    name: "Dan McSweeney",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Dan McSweeney.jpg",
    partyName: "Fine Gael",
    constituency: "Limerick City West",
    score: "./assets/images/not_td.jpg",
    email: "dan.mcsweeney@limerick.ie",
    phone: "087 9298778"
  },
  {
    name: "Daniel Butler",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Daniel Butler.jpg",
    partyName: "Fine Gael",
    constituency: "Limerick City West",
    score: "./assets/images/negative.jpg",
    email: "daniel.butler@limerick.ie",
    phone: "086 2907173"
  },
  {
    name: "Elisa O'Donovan",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Elisa O'Donovan.png",
    partyName: "Social Democrats",
    constituency: "Limerick City West",
    score: "./assets/images/positive.jpg",
    email: "elisa.odonovan@limerick.ie",
    phone: "087 9120231"
  },
  {
    name: "Joe Leddin",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Joe Leddin.png",
    partyName: "Labour",
    constituency: "Limerick City West",
    score: "./assets/images/positive.jpg",
    email: "joe.leddin@limerick.ie",
    phone: "086 816 0569"
  },
  {
    name: "Michael MacCurtain",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Michael MacCurtain.jpg",
    partyName: "Fine Gael",
    constituency: "Limerick City West",
    score: "./assets/images/positive.jpg",
    email: "michael.maccurtain@gmail.com",
    phone: "086-8889462"
  },
  {
    name: "Peter Spencer",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Peter Spencer.jpg",
    partyName: "Green Party",
    constituency: "Limerick City West",
    score: "./assets/images/not_td.jpg",
    email: "peter.spencer@greenparty.ie",
    phone: ""
  },
  {
    name: "Richard Delaney",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Richard Delaney.jpg",
    partyName: "Fine Gael",
    constituency: "Limerick City West",
    score: "./assets/images/negative.jpg",
    email: "richardmdelaney@gmail.com",
    phone: "087-2724462"
  },
  {
    name: "Declan Doocey",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Declan Doocey.png",
    partyName: "Fine Gael",
    constituency: "Lismore",
    score: "./assets/images/positive.jpg",
    email: "cllrddoocey@waterfordcouncil.ie",
    phone: "087 2547715"
  },
  {
    name: "John Pratt",
    imageUrl: "./assets/images/LE 2024 Images/Labour/John Pratt.png",
    partyName: "Labour",
    constituency: "Lismore",
    score: "./assets/images/negative.jpg",
    email: "cllrjpratt@waterfordcouncil.ie",
    phone: "087 7692960"
  },
  {
    name: "Lynne Glasscoe",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Lynne Glasscoe.jpg",
    partyName: "Green Party",
    constituency: "Lismore",
    score: "./assets/images/positive.jpg",
    email: "Lynne.Glasscoe@greenparty.ie",
    phone: ""
  },
  {
    name: "Michael J Walsh",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Michael J Walsh.webp",
    partyName: "Fianna Fáil",
    constituency: "Lismore",
    score: "./assets/images/not_td.jpg",
    email: "michaeljwalsh@live.ie",
    phone: "086 837 7590"
  },
  {
    name: "Niamh O'Donovan",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Niamh O'Donovan.jpg",
    partyName: "Fine Gael",
    constituency: "Lismore",
    score: "./assets/images/negative.jpg",
    email: "odonovanfg@gmail.com",
    phone: "083-3113761"
  },
  {
    name: "Jimmy Moloney",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Jimmy Moloney.webp",
    partyName: "Fianna Fáil",
    constituency: "Listowel",
    score: "./assets/images/positive.jpg",
    email: "jimmymoloney@gmail.com",
    phone: "087 9026066"
  },
  {
    name: "Michael Leane",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Michael Leane.webp",
    partyName: "Fianna Fáil",
    constituency: "Listowel",
    score: "./assets/images/positive.jpg",
    email: "michaelekleane67@gmail.com",
    phone: 872394462
  },
  {
    name: "Michael Foley",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Michael Foley.jpg",
    partyName: "Fine Gael",
    constituency: "Listowel",
    score: "./assets/images/not_td.jpg",
    email: "michaelmfoley@eircom.net",
    phone: "087 9687078"
  },
  {
    name: "Mike Kennelly",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Mike Kennelly.jpg",
    partyName: "Fine Gael",
    constituency: "Listowel",
    score: "./assets/images/negative.jpg",
    email: "mikeykennelly@hotmail.com",
    phone: "086 8077359"
  },
  {
    name: "Robert Beasley",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Robert Beasley.png",
    partyName: "Sinn Féin",
    constituency: "Listowel",
    score: "./assets/images/positive.jpg",
    email: "Eileenhbeasley@gmail.com",
    phone: "086 3622114"
  },
  {
    name: "Sonny Foran",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Sonny Foran.jpg",
    partyName: "Aontú",
    constituency: "Listowel",
    score: "./assets/images/not_td.jpg",
    email: "sonny.foran@Aontú.ie",
    phone: "087 226 5611"
  },
  {
    name: "Tom Barry",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Tom Barry.png",
    partyName: "Sinn Féin",
    constituency: "Listowel",
    score: "./assets/images/negative.jpg",
    email: "tom.barrysf@gmail.com",
    phone: "087 6659100"
  },
  {
    name: "Gerry Hagan",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Gerry Hagan.jpg",
    partyName: "Fine Gael",
    constituency: "Longford",
    score: "./assets/images/not_td.jpg",
    email: "ghagan@longfordcoco.ie",
    phone: "086 8182610"
  },
  {
    name: "Martin Monaghan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Martin Monaghan.webp",
    partyName: "Fianna Fáil",
    constituency: "Longford",
    score: "./assets/images/positive.jpg",
    email: "mmonaghan@longfordcoco.ie",
    phone: "086 8220154"
  },
  {
    name: "Peggy Nolan",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Peggy Nolan.jpg",
    partyName: "Fine Gael",
    constituency: "Longford",
    score: "./assets/images/not_td.jpg",
    email: "pnolan@longfordcoco.ie",
    phone: "087 3179561"
  },
  {
    name: "Seamus Butler",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Seamus Butler.webp",
    partyName: "Fianna Fáil",
    constituency: "Longford",
    score: "./assets/images/negative.jpg",
    email: "sbutler@longfordcoco.ie",
    phone: "086 2554491"
  },
  {
    name: "Uruemu Adejinmi",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Uruemu Adejinmi.jpg",
    partyName: "Fianna Fáil",
    constituency: "Longford",
    score: "./assets/images/positive.jpg",
    email: "uadejinmi@longfordcoco.ie",
    phone: "086 1519425"
  },
  {
    name: "Ivan Canning",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Ivan Canning.webp",
    partyName: "Fianna Fáil",
    constituency: "Loughrea",
    score: "./assets/images/positive.jpg",
    email: "icanning@cllr.galwaycoco.ie",
    phone: "087 1376666"
  },
  {
    name: "Jimmy McClearn",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Jimmy McClearn.jpg",
    partyName: "Fine Gael",
    constituency: "Loughrea",
    score: "./assets/images/not_td.jpg",
    email: "jmcclearn@cllr.galwaycoco.ie",
    phone: "087 2548723"
  },
  {
    name: "Mark Larkin",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Mark Larkin.webp",
    partyName: "Fianna Fáil",
    constituency: "Loughrea",
    score: "./assets/images/negative.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Michael Maher",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Michael Maher.jpg",
    partyName: "Fine Gael",
    constituency: "Loughrea",
    score: "./assets/images/positive.jpg",
    email: "mmaher@cllr.galwaycoco.ie",
    phone: "086 8109185"
  },
  {
    name: "Shane Curley",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Shane Curley.webp",
    partyName: "Fianna Fáil",
    constituency: "Loughrea",
    score: "./assets/images/negative.jpg",
    email: "scurley@cllr.galwaycoco.ie",
    phone: "086 2706550"
  },
  {
    name: "Caroline Brady",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Caroline Brady.jpg",
    partyName: "Fine Gael",
    constituency: "Lucan",
    score: "./assets/images/positive.jpg",
    email: "caroline@carolinebrady.com",
    phone: "085-2551602"
  },
  {
    name: "Jithin Ram",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Jithin Ram.jpg",
    partyName: "Green Party",
    constituency: "Lucan",
    score: "./assets/images/not_td.jpg",
    email: "jithin.ram@greenparty.ie",
    phone: ""
  },
  {
    name: "Joanna Tuffy",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Joanna Tuffy.png",
    partyName: "Labour",
    constituency: "Lucan",
    score: "./assets/images/negative.jpg",
    email: "jtuffy@cllrs.sdublincoco.ie",
    phone: ""
  },
  {
    name: "Mark Kerins",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Mark Kerins.webp",
    partyName: "People Before Profit",
    constituency: "Lucan",
    score: "./assets/images/negative.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Stephen Nolan",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Stephen Nolan.png",
    partyName: "Social Democrats",
    constituency: "Lucan",
    score: "./assets/images/not_td.jpg",
    email: "stephen.nolan@socialdemocrats.ie",
    phone: "087 068 8324"
  },
  {
    name: "Vicki Casserly",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Vicki Casserly.jpg",
    partyName: "Fine Gael",
    constituency: "Lucan",
    score: "./assets/images/negative.jpg",
    email: "vcasserly@cllrs.sdublincoco.ie",
    phone: ""
  },
  {
    name: "Eileen Lynch",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Eileen Lynch.jpg",
    partyName: "Fine Gael",
    constituency: "Macroom",
    score: "./assets/images/positive.jpg",
    email: "eileenmlynch@gmail.com",
    phone: "0872481418"
  },
  {
    name: "Gobnait Moynihan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Gobnait Moynihan.webp",
    partyName: "Fianna Fáil",
    constituency: "Macroom",
    score: "./assets/images/not_td.jpg",
    email: "cllrgobnaitmoynihan@gmail.com",
    phone: "086 868 5094"
  },
  {
    name: "Harriet Burgess",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Harriet Burgess.jpg",
    partyName: "Green Party",
    constituency: "Macroom",
    score: "./assets/images/negative.jpg",
    email: "harriet.burgess@greenparty.ie",
    phone: ""
  },
  {
    name: "Michael Looney",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Michael Looney.webp",
    partyName: "Fianna Fáil",
    constituency: "Macroom",
    score: "./assets/images/negative.jpg",
    email: "michaelfflooney@gmail.com",
    phone: "0872100393"
  },
  {
    name: "Michael Creed",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Michael Creed.jpg",
    partyName: "Fine Gael",
    constituency: "Macroom",
    score: "./assets/images/positive.jpg",
    email: "michaelacreed@eircom.net",
    phone: "086 8052792"
  },
  {
    name: "Rosarie O'Leary",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Rosarie O'Leary.jpg",
    partyName: "Aontú",
    constituency: "Macroom",
    score: "./assets/images/not_td.jpg",
    email: "rose_leary@hotmail.com",
    phone: "086 815 4288"
  },
  {
    name: "Ted Lucey",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Ted Lucey.jpg",
    partyName: "Fine Gael",
    constituency: "Macroom",
    score: "./assets/images/negative.jpg",
    email: "tedluceyccc@eircom.net",
    phone: "086 8703812"
  },
  {
    name: "David Curry",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/David Curry.png",
    partyName: "Social Democrats",
    constituency: "Mallow",
    score: "./assets/images/positive.jpg",
    email: "david.curry@socialdemocrats.ie",
    phone: "089 246 5734"
  },
  {
    name: "Eoghan Kenny",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Eoghan Kenny.png",
    partyName: "Labour",
    constituency: "Mallow",
    score: "./assets/images/not_td.jpg",
    email: "Cllreoghankenny@outlook.ie",
    phone: "085 170 4509"
  },
  {
    name: "Gearóid Murphy",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Gearoid Murphy.webp",
    partyName: "Fianna Fáil",
    constituency: "Mallow",
    score: "./assets/images/negative.jpg",
    email: "g.murphy.bl@hotmail.com",
    phone: "087 6602868"
  },
  {
    name: "Liam Madden",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Liam Madden.jpg",
    partyName: "Fine Gael",
    constituency: "Mallow",
    score: "./assets/images/positive.jpg",
    email: "liammaddenfg@gmail.com",
    phone: "0876771306"
  },
  {
    name: "Paddy Scully",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Paddy Scully.jpg",
    partyName: "Aontú",
    constituency: "Mallow",
    score: "./assets/images/negative.jpg",
    email: "paddy.scully52@gmail.com",
    phone: "083 176 4818"
  },
  {
    name: "Patrick Hayes",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Patrick Hayes.webp",
    partyName: "Fianna Fáil",
    constituency: "Mallow",
    score: "./assets/images/positive.jpg",
    email: "cllrpathayes@gmail.com",
    phone: "0872511869"
  },
  {
    name: "Tony O'Shea",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Tony O'Shea.jpg",
    partyName: "Fine Gael",
    constituency: "Mallow",
    score: "./assets/images/not_td.jpg",
    email: "tonyosheaccc@gmail.com",
    phone: "0878372492"
  },
  {
    name: "Bernie Linnane",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Bernie Linnane.png",
    partyName: "Labour",
    constituency: "Manorhamilton",
    score: "./assets/images/negative.jpg",
    email: "Bernie.Linnane@outlook.ie",
    phone: "087 9057367"
  },
  {
    name: "Blaithin Gallagher",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Blaithin Gallagher.png",
    partyName: "Green Party",
    constituency: "Manorhamilton",
    score: "./assets/images/positive.jpg",
    email: "blaithin.gallagher@greenparty.ie",
    phone: "086 0423828"
  },
  {
    name: "Caitriona Bergin",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Caitriona Bergin.jpg",
    partyName: "Fine Gael",
    constituency: "Manorhamilton",
    score: "./assets/images/not_td.jpg",
    email: "CBerginFG@gmail.com",
    phone: "087-2967689"
  },
  {
    name: "Justin Warnock",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Justin Warnock.webp",
    partyName: "Fianna Fáil",
    constituency: "Manorhamilton",
    score: "./assets/images/positive.jpg",
    email: "jwarnock@leitrimcoco.ie",
    phone: "(087) 9819180"
  },
  {
    name: "Kevin Comiskey",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Kevin Comiskey.jpg",
    partyName: "Fine Gael",
    constituency: "Manorhamilton",
    score: "./assets/images/not_td.jpg",
    email: "Kevin.comiskey64@gmail.com",
    phone: "087-7960914"
  },
  {
    name: "Mary Bohan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Mary Bohan.webp",
    partyName: "Fianna Fáil",
    constituency: "Manorhamilton",
    score: "./assets/images/negative.jpg",
    email: "comarybohan@gmail.com",
    phone: "071 9648001"
  },
  {
    name: "Padraig Fallon",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Padraig Fallon.png",
    partyName: "Sinn Féin",
    constituency: "Manorhamilton",
    score: "./assets/images/not_td.jpg",
    email: "padraigfallonsf@gmail.com",
    phone: "(087) 2808925"
  },
  {
    name: "Angela Feeney",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Angela Feeney.png",
    partyName: "Labour",
    constituency: "Maynooth",
    score: "./assets/images/negative.jpg",
    email: "angelaemfeeney@gmail.com",
    phone: "087 2381962"
  },
  {
    name: "Naoise O Cearúil",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Naoise O Cearuil.webp",
    partyName: "Fianna Fáil",
    constituency: "Maynooth",
    score: "./assets/images/not_td.jpg",
    email: "cllrnaoise@gmail.com",
    phone: "086 7280050"
  },
  {
    name: "Paul Ward",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Paul Ward.webp",
    partyName: "Fianna Fáil",
    constituency: "Maynooth",
    score: "./assets/images/negative.jpg",
    email: "cllrpaulward@gmail.com",
    phone: "087 2294697"
  },
  {
    name: "Peter Hamilton",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Peter Hamilton.png",
    partyName: "Green Party",
    constituency: "Maynooth",
    score: "./assets/images/positive.jpg",
    email: "peter.hamilton@greenparty.ie",
    phone: "087 2316308"
  },
  {
    name: "Peter Melrose",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Peter Melrose.png",
    partyName: "Social Democrats",
    constituency: "Maynooth",
    score: "./assets/images/not_td.jpg",
    email: "peter.melrose@socialdemocrats.ie",
    phone: "089 263 7612"
  },
  {
    name: "Tara Lane",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Tara Lane.jpg",
    partyName: "Fine Gael",
    constituency: "Maynooth",
    score: "./assets/images/negative.jpg",
    email: "taralanekilcock@gmail.com",
    phone: "087-4388102"
  },
  {
    name: "Tim Durkan",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Tim Durkan.jpg",
    partyName: "Fine Gael",
    constituency: "Maynooth",
    score: "./assets/images/positive.jpg",
    email: "tim.durkan321@gmail.com",
    phone: "086 8632784"
  },
  {
    name: "Alison Curtin",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Alison Curtin.jpg",
    partyName: "Fine Gael",
    constituency: "Midleton",
    score: "./assets/images/not_td.jpg",
    email: "alisoncurtinFG@outlook.ie",
    phone: "087-9618459"
  },
  {
    name: "Ann Marie Ahern",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Ann Marie Ahern.webp",
    partyName: "Fianna Fáil",
    constituency: "Midleton",
    score: "./assets/images/negative.jpg",
    email: "annmarie.ahern@cllr.corkcoco.ie",
    phone: "087 2425650"
  },
  {
    name: "Clodagh Harrington",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Clodagh Harrington.png",
    partyName: "Green Party",
    constituency: "Midleton",
    score: "./assets/images/positive.jpg",
    email: "clodagh.harrington@greenparty.ie",
    phone: "086 3652186"
  },
  {
    name: "Liam Quaide",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Liam Quaide.png",
    partyName: "Social Democrats",
    constituency: "Midleton",
    score: "./assets/images/positive.jpg",
    email: "Liam.Quaide@cllr.corkcoco.ie",
    phone: "0877720367"
  },
  {
    name: "Michael Hegarty",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Michael Hegarty.jpg",
    partyName: "Fine Gael",
    constituency: "Midleton",
    score: "./assets/images/negative.jpg",
    email: "michael.hegarty@corkcoco.ie",
    phone: "086 8115150"
  },
  {
    name: "Mona Stromsoe",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Mona Stromsoe.jpg",
    partyName: "Aontú",
    constituency: "Midleton",
    score: "./assets/images/not_td.jpg",
    email: "m_stromsoe@hotmail.com",
    phone: "087 977 1176"
  },
  {
    name: "Patrick Mulcahy",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Patrick Mulcahy.webp",
    partyName: "Fianna Fáil",
    constituency: "Midleton",
    score: "./assets/images/positive.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Rory Cocking",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Rory Cocking.jpg",
    partyName: "Fine Gael",
    constituency: "Midleton",
    score: "./assets/images/not_td.jpg",
    email: "rorycockingfg@gmail.com",
    phone: "086-8876790"
  },
  {
    name: "Aaron Sweeney",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Aaron Sweeney.jpg",
    partyName: "Fine Gael",
    constituency: "Milford",
    score: "./assets/images/positive.jpg",
    email: "aaron@sweeneyformilford.ie",
    phone: "085-1768787"
  },
  {
    name: "Eamonn Jackson",
    imageUrl: "./assets/images/LE 2024 Images/100% Redress Party/Eamonn Jackson.jpg",
    partyName: "100% Redress Party",
    constituency: "Milford",
    score: "./assets/images/negative.jpg",
    email: "eamonnjackson.100rp@gmail.com",
    phone: ""
  },
  {
    name: "Liam Blaney",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Liam Blaney.webp",
    partyName: "Fianna Fáil",
    constituency: "Milford",
    score: "./assets/images/negative.jpg",
    email: "liamblaney@donegalcoco.ie",
    phone: "086 8383623"
  },
  {
    name: "Johnnie Penrose",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Johnnie Penrose.png",
    partyName: "Labour",
    constituency: "Moate",
    score: "./assets/images/negative.jpg",
    email: "jpenrose@westmeathcoco.ie",
    phone: "087 950 1495"
  },
  {
    name: "Liam McDaniel",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Liam McDaniel.webp",
    partyName: "Fianna Fáil",
    constituency: "Moate",
    score: "./assets/images/positive.jpg",
    email: "liam.mcdaniel@westmeathcoco.ie",
    phone: "086 838 6388"
  },
  {
    name: "Tom Farrell",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Tom Farrell.jpg",
    partyName: "Fine Gael",
    constituency: "Moate",
    score: "./assets/images/negative.jpg",
    email: "tom.farrell@westmeathcoco.ie",
    phone: "086 027 4848"
  },
  {
    name: "Brian McKenna",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Brian McKenna.png",
    partyName: "Sinn Féin",
    constituency: "Monaghan",
    score: "./assets/images/not_td.jpg",
    email: "brian.mckenna@cllr.monaghancoco.ie",
    phone: "(087) 2746483"
  },
  {
    name: "Cathy Bennett",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Cathy Bennett.png",
    partyName: "Sinn Féin",
    constituency: "Monaghan",
    score: "./assets/images/positive.jpg",
    email: "cathy.bennett@cllr.monaghancoco.ie",
    phone: "(086) 2079509"
  },
  {
    name: "David Maxwell",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/David Maxwell.jpg",
    partyName: "Fine Gael",
    constituency: "Monaghan",
    score: "./assets/images/not_td.jpg",
    email: "david.maxwell@cllr.monaghancoco.ie",
    phone: "(086) 8224545"
  },
  {
    name: "Pauric Clerkin",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Pauric Clerkin.jpg",
    partyName: "Fine Gael",
    constituency: "Monaghan",
    score: "./assets/images/not_td.jpg",
    email: "pauric_clerkin@hotmail.com",
    phone: "086-2591938"
  },
  {
    name: "Raymond Aughey",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Raymond Aughey.webp",
    partyName: "Fianna Fáil",
    constituency: "Monaghan",
    score: "./assets/images/negative.jpg",
    email: "raymond.aughey@cllr.monaghancoco.ie",
    phone: "(087) 0992676"
  },
  {
    name: "Seán Conlon",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Sean Conlon.png",
    partyName: "Sinn Féin",
    constituency: "Monaghan",
    score: "./assets/images/not_td.jpg",
    email: "sean.conlon@cllr.monaghancoco.ie",
    phone: "(087) 2936792"
  },
  {
    name: "Andy Gladney",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Andy Gladney.png",
    partyName: "Sinn Féin",
    constituency: "Muinebeag",
    score: "./assets/images/negative.jpg",
    email: "agladney@carlow.ie",
    phone: "086 3193058"
  },
  {
    name: "Arthur McDonald",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Arthur McDonald.webp",
    partyName: "Fianna Fáil",
    constituency: "Muinebeag",
    score: "./assets/images/positive.jpg",
    email: "amcdonald@carlow.ie",
    phone: "087 2966019"
  },
  {
    name: "Dan Pender",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Dan Pender.webp",
    partyName: "Fianna Fáil",
    constituency: "Muinebeag",
    score: "./assets/images/not_td.jpg",
    email: "votepender1@gmail.com",
    phone: "085 2096811"
  },
  {
    name: "Liam O'Brien",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Liam O'Brien.png",
    partyName: "Green Party",
    constituency: "Muinebeag",
    score: "./assets/images/negative.jpg",
    email: "liam.obrien@greenparty.ie",
    phone: "087 9249446"
  },
  {
    name: "Michael Doran",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Michael Doran.jpg",
    partyName: "Fine Gael",
    constituency: "Muinebeag",
    score: "./assets/images/positive.jpg",
    email: "mdoran@carlow.ie",
    phone: "087 2152788"
  },
  {
    name: "Thomas Kinsella",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Thomas Kinsella.jpg",
    partyName: "Fine Gael",
    constituency: "Muinebeag",
    score: "./assets/images/not_td.jpg",
    email: "tkinsella@carlow.ie",
    phone: "087 9377386"
  },
  {
    name: "William Quinn",
    imageUrl: "./assets/images/LE 2024 Images/Labour/William Quinn.jpg",
    partyName: "Labour",
    constituency: "Muinebeag",
    score: "./assets/images/negative.jpg",
    email: "wquinn@carlow.ie",
    phone: "086 1659115"
  },
  {
    name: "Ali Morris",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Ali Morris.png",
    partyName: "Social Democrats",
    constituency: "Mullingar",
    score: "./assets/images/positive.jpg",
    email: "ali.morris@socialdemocrats.ie",
    phone: ""
  },
  {
    name: "Andrew Duncan",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Andrew Duncan.jpg",
    partyName: "Fine Gael",
    constituency: "Mullingar",
    score: "./assets/images/not_td.jpg",
    email: "andrew.duncan@westmeathcoco.ie",
    phone: "087 906 8186"
  },
  {
    name: "Aoife Davitt",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Aoife Davitt.webp",
    partyName: "Fianna Fáil",
    constituency: "Mullingar",
    score: "./assets/images/negative.jpg",
    email: "aoife.davitt@westmeathcoco.ie",
    phone: "087 951 9594"
  },
  {
    name: "Bill Collentine",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Bill Collentine.webp",
    partyName: "Fianna Fáil",
    constituency: "Mullingar",
    score: "./assets/images/positive.jpg",
    email: "billy.collentine@westmeathcoco.ie",
    phone: "086 245 9216"
  },
  {
    name: "Fidelma Bennett",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Fidelma Bennett.png",
    partyName: "Labour",
    constituency: "Mullingar",
    score: "./assets/images/negative.jpg",
    email: "fidelmabennett@gmail.com",
    phone: "086 887 8405"
  },
  {
    name: "Gerry Heery",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Gerry Heery.jpg",
    partyName: "Fine Gael",
    constituency: "Mullingar",
    score: "./assets/images/positive.jpg",
    email: "Gerryheery1@gmail.com",
    phone: "087-7707727"
  },
  {
    name: "Hazel Smyth",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Hazel Smyth.png",
    partyName: "Green Party",
    constituency: "Mullingar",
    score: "./assets/images/not_td.jpg",
    email: "hazel.smyth@westmeathcoco.ie",
    phone: "087 744 5413"
  },
  {
    name: "Ken Glynn",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Ken Glynn.jpg",
    partyName: "Fianna Fáil",
    constituency: "Mullingar",
    score: "./assets/images/negative.jpg",
    email: "kenglynn@westmeathcoco.ie",
    phone: "087 236 2680"
  },
  {
    name: "Anne Breen",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Anne Breen.png",
    partyName: "Labour",
    constituency: "Naas",
    score: "./assets/images/positive.jpg",
    email: "annebreen8@gmail.com",
    phone: "087 1230210"
  },
  {
    name: "Bill Clear",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Bill Clear.png",
    partyName: "Social Democrats",
    constituency: "Naas",
    score: "./assets/images/not_td.jpg",
    email: "bill.clear@socialdemocrats.ie",
    phone: "087 9424488"
  },
  {
    name: "Bob Quinn",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Bob Quinn.png",
    partyName: "Green Party",
    constituency: "Naas",
    score: "./assets/images/negative.jpg",
    email: "bquinn@kildarecoco.ie",
    phone: "087 952 7060"
  },
  {
    name: "Brian Larkin",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Brian Larkin.webp",
    partyName: "Fianna Fáil",
    constituency: "Naas",
    score: "./assets/images/positive.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Carmel Kelly",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Carmel Kelly.jpg",
    partyName: "Fianna Fáil",
    constituency: "Naas",
    score: "./assets/images/not_td.jpg",
    email: "carmelkelly@sallins.org",
    phone: "086 8268884"
  },
  {
    name: "Ciara Dunne",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Ciara Dunne.jpg",
    partyName: "Fine Gael",
    constituency: "Naas",
    score: "./assets/images/positive.jpg",
    email: "ciaradunnefg@gmail.com",
    phone: "083-1413852"
  },
  {
    name: "Evie Sammon",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Evie Sammon.jpg",
    partyName: "Fine Gael",
    constituency: "Naas",
    score: "./assets/images/negative.jpg",
    email: "eviesammonfg@gmail.com",
    phone: "085 7808518"
  },
  {
    name: "Fintan Brett",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Fintan Brett.jpg",
    partyName: "Fine Gael",
    constituency: "Naas",
    score: "./assets/images/positive.jpg",
    email: "fintanpbrett@gmail.com",
    phone: "087 6257842"
  },
  {
    name: "Eddie Fennessy",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Eddie Fennessy.png",
    partyName: "Sinn Féin",
    constituency: "Navan",
    score: "./assets/images/negative.jpg",
    email: "cllreddiefennessy@gmail.com",
    phone: "087 7457269"
  },
  {
    name: "Emer Toibin",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Emer Toibin.jpg",
    partyName: "Aontú",
    constituency: "Navan",
    score: "./assets/images/positive.jpg",
    email: "emer.toibin@members.meathcoco.ie",
    phone: ""
  },
  {
    name: "Linda Nelson Murray",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Linda Nelson Murray.jpg",
    partyName: "Fine Gael",
    constituency: "Navan",
    score: "./assets/images/not_td.jpg",
    email: "linda@angelmarketing.ie",
    phone: "086-2120386"
  },
  {
    name: "Niamh Carroll",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Niamh Carroll.webp",
    partyName: "Fianna Fáil",
    constituency: "Navan",
    score: "./assets/images/negative.jpg",
    email: "niamhcarroll2024@gmail.com",
    phone: ""
  },
  {
    name: "Padraig Fitzsimons",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Padraig Fitzsimons.webp",
    partyName: "Fianna Fáil",
    constituency: "Navan",
    score: "./assets/images/positive.jpg",
    email: "padraig.fitzsimons@members.meathcoco.ie",
    phone: "086 8238636"
  },
  {
    name: "Ross Kelly",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Ross Kelly.jpg",
    partyName: "Fine Gael",
    constituency: "Navan",
    score: "./assets/images/not_td.jpg",
    email: "rosskellynavan@gmail.com",
    phone: "087-7123069"
  },
  {
    name: "Seamus McMenamin",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Seamus McMenamin.png",
    partyName: "Green Party",
    constituency: "Navan",
    score: "./assets/images/negative.jpg",
    email: "seamus.mcmenamin@greenparty.ie",
    phone: "087 6412113"
  },
  {
    name: "Tommy Reilly",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Tommy Reilly.webp",
    partyName: "Fianna Fáil",
    constituency: "Navan",
    score: "./assets/images/positive.jpg",
    email: "tommy.reilly@members.meathcoco.ie",
    phone: ""
  },
  {
    name: "Yemi Adenuga",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Yemi Adenuga.jpg",
    partyName: "Fine Gael",
    constituency: "Navan",
    score: "./assets/images/not_td.jpg",
    email: "yemi.adenuga@members.meathcoco.ie",
    phone: "087 7621660"
  },
  {
    name: "Eleanor Maher",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Eleanor Maher.jpg",
    partyName: "Fine Gael",
    constituency: "Nenagh",
    score: "./assets/images/not_td.jpg",
    email: "voteeleanormaher@gmail.com",
    phone: "087-9035867"
  },
  {
    name: "Iva Pocock",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Iva Pocock.jpg",
    partyName: "Green Party",
    constituency: "Nenagh",
    score: "./assets/images/positive.jpg",
    email: "iva.pocock@greenparty.ie",
    phone: "089 9529506"
  },
  {
    name: "Louise Morgan-Walsh",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Louise Morgan-Walsh.jpg",
    partyName: "Labour",
    constituency: "Nenagh",
    score: "./assets/images/negative.jpg",
    email: "louise.morganwalsh@votelabour.ie",
    phone: "087 615 4146"
  },
  {
    name: "Ryan O'Meara",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Ryan O'Meara.webp",
    partyName: "Fianna Fáil",
    constituency: "Nenagh",
    score: "./assets/images/not_td.jpg",
    email: "",
    phone: "087 9010614"
  },
  {
    name: "Bridin Murphy",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Bridin Murphy.jpg",
    partyName: "Fine Gael",
    constituency: "New Ross",
    score: "./assets/images/not_td.jpg",
    email: "bridin.murphy@wexfordmcc.ie",
    phone: "087 7881963"
  },
  {
    name: "Bridin Lyng Moloney",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Bridin Lyng Moloney.png",
    partyName: "Labour",
    constituency: "New Ross",
    score: "./assets/images/negative.jpg",
    email: "bridinlyng@gmail.com",
    phone: ""
  },
  {
    name: "Harry Twomey",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Harry Twomey.jpg",
    partyName: "Fine Gael",
    constituency: "New Ross",
    score: "./assets/images/positive.jpg",
    email: "hartwomey@gmail.com",
    phone: "086-2472950"
  },
  {
    name: "John Fleming",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/John Fleming.webp",
    partyName: "Fianna Fáil",
    constituency: "New Ross",
    score: "./assets/images/not_td.jpg",
    email: "john.fleming@wexfordmcc.ie",
    phone: "087 2036069"
  },
  {
    name: "Michael Sheehan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Michael Sheehan.webp",
    partyName: "Fianna Fáil",
    constituency: "New Ross",
    score: "./assets/images/negative.jpg",
    email: "michael.sheehan@wexfordmcc.ie",
    phone: "085 1349020"
  },
  {
    name: "Michael Whelan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Michael Whelan.webp",
    partyName: "Fianna Fáil",
    constituency: "New Ross",
    score: "./assets/images/positive.jpg",
    email: "michael.whelan@wexfordmcc.ie",
    phone: "087 2388156"
  },
  {
    name: "Noel Heavey",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Noel Heavey.webp",
    partyName: "Fianna Fáil",
    constituency: "Newbridge",
    score: "./assets/images/negative.jpg",
    email: "noelheavey1@gmail.com",
    phone: "087 2602640"
  },
  {
    name: "Peggy O'Dwyer",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Peggy O'Dwyer.jpg",
    partyName: "Fine Gael",
    constituency: "Newbridge",
    score: "./assets/images/positive.jpg",
    email: "peggyodwyerfg@gmail.com",
    phone: "086 1996648"
  },
  {
    name: "Robert Power",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Robert Power.webp",
    partyName: "Fianna Fáil",
    constituency: "Newbridge",
    score: "./assets/images/not_td.jpg",
    email: "robbiepower@gmail.com",
    phone: "085 7279307"
  },
  {
    name: "Ronan Maher",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Ronan Maher.jpg",
    partyName: "Green Party",
    constituency: "Newbridge",
    score: "./assets/images/negative.jpg",
    email: "ronan.maher@greenparty.ie",
    phone: "089 4030818"
  },
  {
    name: "Tracey O'Dwyer",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Tracey O'Dwyer.jpg",
    partyName: "Fine Gael",
    constituency: "Newbridge",
    score: "./assets/images/not_td.jpg",
    email: "traceyodwyerfg@gmail.com",
    phone: "087 6533706"
  },
  {
    name: "Francis Foley",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Francis Foley.webp",
    partyName: "Fianna Fáil",
    constituency: "Newcastle West",
    score: "./assets/images/negative.jpg",
    email: "francis.foley@limerick.ie",
    phone: "087 6391305"
  },
  {
    name: "Gerard Madigan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Gerard Madigan.webp",
    partyName: "Fianna Fáil",
    constituency: "Newcastle West",
    score: "./assets/images/positive.jpg",
    email: "macmarley93@icloud.com",
    phone: "085 8292988"
  },
  {
    name: "John Sheahan",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/John Sheahan.jpg",
    partyName: "Fine Gael",
    constituency: "Newcastle West",
    score: "./assets/images/positive.jpg",
    email: "john.sheahan@limerick.ie",
    phone: "087 207 9268"
  },
  {
    name: "Kathleen Barrett",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Kathleen Barrett.webp",
    partyName: "Fianna Fáil",
    constituency: "Newcastle West",
    score: "./assets/images/not_td.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Liam Galvin",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Liam Galvin.jpg",
    partyName: "Fine Gael",
    constituency: "Newcastle West",
    score: "./assets/images/negative.jpg",
    email: "liam.galvin@limerick.ie",
    phone: "087 9850435"
  },
  {
    name: "Michael Collins",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Michael Collins.webp",
    partyName: "Fianna Fáil",
    constituency: "Newcastle West",
    score: "./assets/images/positive.jpg",
    email: "michael.collins@limerick.ie",
    phone: "087 2561303"
  },
  {
    name: "Tom Ruddle",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Tom Ruddle.jpg",
    partyName: "Fine Gael",
    constituency: "Newcastle West",
    score: "./assets/images/negative.jpg",
    email: "tom.ruddle@limerick.ie",
    phone: "086 2304901"
  },
  {
    name: "Fiona Bonfield",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Fiona Bonfield.png",
    partyName: "Labour",
    constituency: "Newport",
    score: "./assets/images/not_td.jpg",
    email: "fiona.bonfield@cllr.tipperarycoco.ie",
    phone: "086 1670863"
  },
  {
    name: "John Carroll",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/John Carroll.webp",
    partyName: "Fianna Fáil",
    constituency: "Newport",
    score: "./assets/images/positive.jpg",
    email: "john.carroll@cllr.tipperarycoco.ie",
    phone: "086-8041893"
  },
  {
    name: "Phyll Bugler",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Phyll Bugler.jpg",
    partyName: "Fine Gael",
    constituency: "Newport",
    score: "./assets/images/positive.jpg",
    email: "phyll.bugler@cllr.tipperarycoco.ie",
    phone: "087 2807655"
  },
  {
    name: "Andrew Doyle",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Andrew Doyle.webp",
    partyName: "People Before Profit",
    constituency: "Ongar",
    score: "./assets/images/not_td.jpg",
    email: "andrew.doylePBP@gmail.com",
    phone: ""
  },
  {
    name: "Asad Ali",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Asad Ali.webp",
    partyName: "Fianna Fáil",
    constituency: "Ongar",
    score: "./assets/images/positive.jpg",
    email: "asadali.dublin15@gmail.com",
    phone: "086 260 7313"
  },
  {
    name: "Bryn Edwards",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Bryn Edwards.webp",
    partyName: "People Before Profit",
    constituency: "Ongar",
    score: "./assets/images/not_td.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Ellen Murphy",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Ellen Murphy.png",
    partyName: "Social Democrats",
    constituency: "Ongar",
    score: "./assets/images/positive.jpg",
    email: "ellenmurphy@socialdemocrats.ie",
    phone: ""
  },
  {
    name: "Gerard Sheehan",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Gerard Sheehan.jpg",
    partyName: "Aontú",
    constituency: "Ongar",
    score: "./assets/images/not_td.jpg",
    email: "gerardfsheehanAontú@gmail.com",
    phone: "089 437 5144"
  },
  {
    name: "Kieran Dennison",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Kieran Dennison.jpg",
    partyName: "Fine Gael",
    constituency: "Ongar",
    score: "./assets/images/negative.jpg",
    email: "Kieran.Dennison@cllrs.fingal.ie",
    phone: "0872595949"
  },
  {
    name: "Michelle Griffin",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Michelle Griffin.jpg",
    partyName: "Green Party",
    constituency: "Ongar",
    score: "./assets/images/positive.jpg",
    email: "michelle.griffin@cllrs.fingal.ie",
    phone: ""
  },
  {
    name: "Tom Kitt",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Tom Kitt.webp",
    partyName: "Fianna Fáil",
    constituency: "Ongar",
    score: "./assets/images/negative.jpg",
    email: "tommykitt@gmail.com",
    phone: "086 199 5801"
  },
  {
    name: "Albert Dolan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Albert Dolan.webp",
    partyName: "Fianna Fáil",
    constituency: "Oranmore - Athenry",
    score: "./assets/images/not_td.jpg",
    email: "albertdolan@cllr.galwaycoco.ie",
    phone: "086 7358081"
  },
  {
    name: "Cillian Keane",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Cillian Keane.webp",
    partyName: "Fianna Fáil",
    constituency: "Oranmore - Athenry",
    score: "./assets/images/negative.jpg",
    email: "cilliankeane2024@gmail.com",
    phone: "087 1910764"
  },
  {
    name: "David Collins",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/David Collins.jpg",
    partyName: "Fine Gael",
    constituency: "Oranmore - Athenry",
    score: "./assets/images/positive.jpg",
    email: "davidcollins@cllr.galwaycoco.ie",
    phone: "087 7831687"
  },
  {
    name: "Eoin Madden",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Eoin Madden.jpg",
    partyName: "Green Party",
    constituency: "Oranmore - Athenry",
    score: "./assets/images/not_td.jpg",
    email: "eoin@eoinmadden.ie",
    phone: ""
  },
  {
    name: "Fergal Landy",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Fergal Landy.png",
    partyName: "Labour",
    constituency: "Oranmore - Athenry",
    score: "./assets/images/negative.jpg",
    email: "fergal.landy@votelabour.ie",
    phone: ""
  },
  {
    name: "Peter Feeney",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Peter Feeney.jpg",
    partyName: "Fine Gael",
    constituency: "Oranmore - Athenry",
    score: "./assets/images/negative.jpg",
    email: "petertfeeney@gmail.com",
    phone: "087-6812403"
  },
  {
    name: "Shelly Herterich Quinn",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Shelly Herterich Quinn.webp",
    partyName: "Fianna Fáil",
    constituency: "Oranmore - Athenry",
    score: "./assets/images/positive.jpg",
    email: "shellyhq@cllr.galwaycoco.ie",
    phone: "087 2871355"
  },
  {
    name: "Colm Quinn",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Colm Quinn.jpg",
    partyName: "Aontú",
    constituency: "Palmerstown-Fonthill",
    score: "./assets/images/not_td.jpg",
    email: "",
    phone: ""
  },
  {
    name: "David Gardiner",
    imageUrl: "./assets/images/LE 2024 Images/Workers Party/David Gardiner.png",
    partyName: "Workers Party",
    constituency: "Palmerstown-Fonthill",
    score: "./assets/images/positive.jpg",
    email: "david.gardiner@workersparty.ie",
    phone: ""
  },
  {
    name: "Derren O Bradaigh",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Derren O Bradaigh.jpg",
    partyName: "Sinn Féin",
    constituency: "Palmerstown-Fonthill",
    score: "./assets/images/not_td.jpg",
    email: "DOBradaigh@cllrs.sdublincoco.ie",
    phone: "087 2136345"
  },
  {
    name: "Madeleine Johansson",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Madeleine Johansson.webp",
    partyName: "People Before Profit",
    constituency: "Palmerstown-Fonthill",
    score: "./assets/images/positive.jpg",
    email: "mjohansson@cllrs.sdublincoco.ie",
    phone: "0873630242"
  },
  {
    name: "Shane Moynihan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Shane Moynihan.webp",
    partyName: "Fianna Fáil",
    constituency: "Palmerstown-Fonthill",
    score: "./assets/images/positive.jpg",
    email: "smoynihan@cllrs.sdublincoco.ie",
    phone: "087 784 0898"
  },
  {
    name: "Sikandar Jahanzab",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Sikandar Jahanzab.jpg",
    partyName: "Fine Gael",
    constituency: "Palmerstown-Fonthill",
    score: "./assets/images/not_td.jpg",
    email: "sjahanzabfg@gmail.com",
    phone: "085-1166440"
  },
  {
    name: "Dermot Lacey",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Dermot Lacey.png",
    partyName: "Labour",
    constituency: "Pembroke",
    score: "./assets/images/negative.jpg",
    email: "dermot.lacey@labour.ie",
    phone: 872646960
  },
  {
    name: "Emma Blain",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Emma Blain.jpg",
    partyName: "Fine Gael",
    constituency: "Pembroke",
    score: "./assets/images/positive.jpg",
    email: "cllremmablain@gmail.com",
    phone: "087-7152786"
  },
  {
    name: "Hazel Chu",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Hazel Chu.jpg",
    partyName: "Green Party",
    constituency: "Pembroke",
    score: "./assets/images/not_td.jpg",
    email: "Hazel.Chu@dublincity.ie",
    phone: 878260428
  },
  {
    name: "James Geoghegan",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/James Geoghegan.jpg",
    partyName: "Fine Gael",
    constituency: "Pembroke",
    score: "./assets/images/negative.jpg",
    email: "James.Geoghegan@dublincity.ie",
    phone: 896166956
  },
  {
    name: "Karen Hinkson Deeney",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Karen Hinkson Deeney.png",
    partyName: "Social Democrats",
    constituency: "Pembroke",
    score: "./assets/images/positive.jpg",
    email: "karen.hinkson.deeney@socialdemocrats.ie",
    phone: ""
  },
  {
    name: "Mary Martin",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Mary Martin.webp",
    partyName: "People Before Profit",
    constituency: "Pembroke",
    score: "./assets/images/not_td.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Rory Hogan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Rory Hogan.webp",
    partyName: "Fianna Fáil",
    constituency: "Pembroke",
    score: "./assets/images/positive.jpg",
    email: "rory@roryhogan.ie",
    phone: "083 469 8050"
  },
  {
    name: "Benny McDonagh",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Benny McDonagh.png",
    partyName: "Green Party",
    constituency: "Piltown",
    score: "./assets/images/not_td.jpg",
    email: "benenmcdonagh@outlook.com",
    phone: "083 4053189"
  },
  {
    name: "Damien Donoghue",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Damien Donoghue.jpg",
    partyName: "Fine Gael",
    constituency: "Piltown",
    score: "./assets/images/negative.jpg",
    email: "damiendonoghueferrybank@gmail.com",
    phone: "087-9947288"
  },
  {
    name: "David Kane",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/David Kane.png",
    partyName: "Social Democrats",
    constituency: "Piltown",
    score: "./assets/images/positive.jpg",
    email: "david.kane@socialdemocrats.ie",
    phone: ""
  },
  {
    name: "Fidelis Doherty",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Fidelis Doherty.jpg",
    partyName: "Fine Gael",
    constituency: "Piltown",
    score: "./assets/images/not_td.jpg",
    email: "cllrfidelis.doherty@kilkennycoco.ie",
    phone: "087 9752556"
  },
  {
    name: "Jenny Slattery Catt",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Jenny Slattery Catt.jpg",
    partyName: "Fianna Fáil",
    constituency: "Piltown",
    score: "./assets/images/negative.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Maria Wall",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Maria Wall.webp",
    partyName: "Fianna Fáil",
    constituency: "Piltown",
    score: "./assets/images/positive.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Pat Dunphy",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Pat Dunphy.jpg",
    partyName: "Fine Gael",
    constituency: "Piltown",
    score: "./assets/images/positive.jpg",
    email: "cllrpat.dunphy@kilkennycoco.ie",
    phone: "(087) 6789304"
  },
  {
    name: "Tomás Breathnach",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Tomas Breathnach.png",
    partyName: "Labour",
    constituency: "Piltown",
    score: "./assets/images/not_td.jpg",
    email: "cllrtomas.breathnach@kilkennycoco.ie",
    phone: "(086) 0704114"
  },
  {
    name: "Barry Walsh",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Barry Walsh.jpg",
    partyName: "Fine Gael",
    constituency: "Portlaoise",
    score: "./assets/images/negative.jpg",
    email: "bawalsh@laoiscouncillors.ie",
    phone: "087-6602658"
  },
  {
    name: "Caroline Dwane Stanley",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Caroline Dwane Stanley.png",
    partyName: "Sinn Féin",
    constituency: "Portlaoise",
    score: "./assets/images/not_td.jpg",
    email: "cdwane@laoiscouncillors.ie",
    phone: "(057) 86 62851"
  },
  {
    name: "Catherine Fitzgerald",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Catherine Fitzgerald.webp",
    partyName: "Fianna Fáil",
    constituency: "Portlaoise",
    score: "./assets/images/negative.jpg",
    email: "cfitzgerald@laoiscouncillors.ie",
    phone: "087 681 4018"
  },
  {
    name: "Eoin Barry",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Eoin Barry.png",
    partyName: "Labour",
    constituency: "Portlaoise",
    score: "./assets/images/negative.jpg",
    email: "eoin.barry@votelabour.ie",
    phone: "087 741 2748"
  },
  {
    name: "John Joe Fennelly",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/John Joe Fennelly.webp",
    partyName: "Fianna Fáil",
    constituency: "Portlaoise",
    score: "./assets/images/not_td.jpg",
    email: "jjfennelly@laoiscouncillors.ie",
    phone: "087 2964185"
  },
  {
    name: "Marie Tuohy",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Marie Tuohy.png",
    partyName: "Labour",
    constituency: "Portlaoise",
    score: "./assets/images/positive.jpg",
    email: "mogme23@hotmail.com",
    phone: "089 223 4700"
  },
  {
    name: "Naeem Iqbal",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Naeem Iqbal.webp",
    partyName: "Fianna Fáil",
    constituency: "Portlaoise",
    score: "./assets/images/not_td.jpg",
    email: "info@naeem.ie",
    phone: "089 230 9015"
  },
  {
    name: "Rosie Palmer",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Rosie Palmer.jpg",
    partyName: "Green Party",
    constituency: "Portlaoise",
    score: "./assets/images/positive.jpg",
    email: "rosie.palmer@greenparty.ie",
    phone: "087-4445274"
  },
  {
    name: "Thomasina Connell",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Thomasina Connell.jpg",
    partyName: "Fine Gael",
    constituency: "Portlaoise",
    score: "./assets/images/not_td.jpg",
    email: "tconnell@laoiscouncillors.ie",
    phone: "087 6676218"
  },
  {
    name: "Willie Aird",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Willie Aird.jpg",
    partyName: "Fine Gael",
    constituency: "Portlaoise",
    score: "./assets/images/positive.jpg",
    email: "waird@laoiscouncillors.ie",
    phone: "087 685 0452"
  },
  {
    name: "John O'Leary",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/John O'Leary.webp",
    partyName: "Fianna Fáil",
    constituency: "Portlaw-Kilmacthomas",
    score: "./assets/images/not_td.jpg",
    email: "cllrjoleary@waterfordcouncil.ie",
    phone: "087 2154519"
  },
  {
    name: "Liam Brazil",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Liam Brazil.jpg",
    partyName: "Fine Gael",
    constituency: "Portlaw-Kilmacthomas",
    score: "./assets/images/negative.jpg",
    email: "cllrlbrazil@waterfordcouncil.ie",
    phone: "087 2119203"
  },
  {
    name: "Ray Murphy",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Ray Murphy.webp",
    partyName: "Fianna Fáil",
    constituency: "Portlaw-Kilmacthomas",
    score: "./assets/images/positive.jpg",
    email: "cllrrmurphy@waterfordcouncil.ie",
    phone: ""
  },
  {
    name: "Seanie Power",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Seanie Power.jpg",
    partyName: "Fine Gael",
    constituency: "Portlaw-Kilmacthomas",
    score: "./assets/images/not_td.jpg",
    email: "cllrspower@waterfordcouncil.ie",
    phone: "086 2768184"
  },
  {
    name: "Ciarán Ahern",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Ciaran Ahern.png",
    partyName: "Labour",
    constituency: "Rathfarnham Templeogue",
    score: "./assets/images/not_td.jpg",
    email: "ciaran.ahern@votelabour.ie",
    phone: "087 967 1854"
  },
  {
    name: "Conor Kelly",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Conor Kelly.webp",
    partyName: "People Before Profit",
    constituency: "Rathfarnham Templeogue",
    score: "./assets/images/negative.jpg",
    email: "conorkellypbp@gmail.com",
    phone: ""
  },
  {
    name: "David McManus",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/David McManus.jpg",
    partyName: "Fine Gael",
    constituency: "Rathfarnham Templeogue",
    score: "./assets/images/positive.jpg",
    email: "davidmcmanusonline@gmail.com",
    phone: "0851045044"
  },
  {
    name: "Justin Sinnott",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Justin Sinnott.png",
    partyName: "Social Democrats",
    constituency: "Rathfarnham Templeogue",
    score: "./assets/images/negative.jpg",
    email: "jsinnott@cllrs.sdublincoco.ie",
    phone: "087 6178078."
  },
  {
    name: "Lynn McCrave",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Lynn McCrave.jpg",
    partyName: "Fine Gael",
    constituency: "Rathfarnham Templeogue",
    score: "./assets/images/positive.jpg",
    email: "LMcCrave@cllrs.sdublincoco.ie",
    phone: "086 1382478"
  },
  {
    name: "Mark Lynch",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Mark Lynch.jpg",
    partyName: "Green Party",
    constituency: "Rathfarnham Templeogue",
    score: "./assets/images/not_td.jpg",
    email: "mlynch@cllrs.sdublincoco.ie",
    phone: "083 4177969"
  },
  {
    name: "Pamela Kearns",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Pamela Kearns.png",
    partyName: "Labour",
    constituency: "Rathfarnham Templeogue",
    score: "./assets/images/negative.jpg",
    email: "pkearns@cllrs.sdublincoco.ie",
    phone: "087 7756718"
  },
  {
    name: "Yvonne Collins",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Yvonne Collins.webp",
    partyName: "Fianna Fáil",
    constituency: "Rathfarnham Templeogue",
    score: "./assets/images/not_td.jpg",
    email: "ycollins@cllrs.sdublincoco.ie",
    phone: ""
  },
  {
    name: "Caroline O'Reilly",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Caroline O'Reilly.webp",
    partyName: "Fianna Fáil",
    constituency: "Ratoath",
    score: "./assets/images/positive.jpg",
    email: "caroline.oreilly@members.meathcoco.ie",
    phone: "087 1928109"
  },
  {
    name: "Eilish Balfe",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Eilish Balfe.png",
    partyName: "Labour",
    constituency: "Ratoath",
    score: "./assets/images/not_td.jpg",
    email: "eilishbalfe@gmail.com",
    phone: "087 901 8822"
  },
  {
    name: "Fergus O'Riordan",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Fergus O'Riordan.jpg",
    partyName: "Fine Gael",
    constituency: "Ratoath",
    score: "./assets/images/negative.jpg",
    email: "oriordanfergus73@gmail.com",
    phone: "087-6472747"
  },
  {
    name: "Gerry O'Connor",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Gerry O'Connor.jpg",
    partyName: "Fine Gael",
    constituency: "Ratoath",
    score: "./assets/images/not_td.jpg",
    email: "gerry.oconnor@members.meathcoco.ie",
    phone: "087 2838311"
  },
  {
    name: "Gerry Rooney",
    imageUrl: "./assets/images/LE 2024 Images/Workers Party/Gerry Rooney.jpg",
    partyName: "Workers Party",
    constituency: "Ratoath",
    score: "./assets/images/negative.jpg",
    email: "sgrooney59@gmail.com",
    phone: ""
  },
  {
    name: "Maria Murphy",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Maria Murphy.jpg",
    partyName: "Fine Gael",
    constituency: "Ratoath",
    score: "./assets/images/not_td.jpg",
    email: "maria.murphy@members.meathcoco.ie",
    phone: "087 6579895"
  },
  {
    name: "Ruadhain Bonham",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Ruadhain Bonham.jpeg",
    partyName: "Green Party",
    constituency: "Ratoath",
    score: "./assets/images/positive.jpg",
    email: "ruadhain.bonham@greenparty.ie",
    phone: "089 4171966"
  },
  {
    name: "Gareth Scahill",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Gareth Scahill.png",
    partyName: "Fine Gael",
    constituency: "Roscommon",
    score: "./assets/images/not_td.jpg",
    email: "garethscahillfg@gmail.com",
    phone: "087 674 7290"
  },
  {
    name: "Larry Brennan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Larry Brennan.webp",
    partyName: "Fianna Fáil",
    constituency: "Roscommon",
    score: "./assets/images/not_td.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Martin McDermott",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Martin McDermott.webp",
    partyName: "Fianna Fáil",
    constituency: "Roscommon",
    score: "./assets/images/negative.jpg",
    email: "cllrmmcdermott@roscommoncoco.ie",
    phone: "087 3466064"
  },
  {
    name: "Paschal Fitzmaurice",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Paschal Fitzmaurice.webp",
    partyName: "Fianna Fáil",
    constituency: "Roscommon",
    score: "./assets/images/positive.jpg",
    email: "cllrpfitzmaurice@roscommoncoco.ie",
    phone: "087 2299980"
  },
  {
    name: "Robert McConn",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Robert McConn.jpg",
    partyName: "Fine Gael",
    constituency: "Roscommon",
    score: "./assets/images/not_td.jpg",
    email: "mcconnrobert@gmail.com",
    phone: "087-4907733"
  },
  {
    name: "Dee Ryan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Dee Ryan.webp",
    partyName: "Fianna Fáil",
    constituency: "Roscrea-Templemore",
    score: "./assets/images/positive.jpg",
    email: "Deirdreryan1974@yahoo.com",
    phone: ""
  },
  {
    name: "Jordan Lewis",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Jordan Lewis.png",
    partyName: "Labour",
    constituency: "Roscrea-Templemore",
    score: "./assets/images/negative.jpg",
    email: "lewisjordan017@gmail.com",
    phone: ""
  },
  {
    name: "Michael Smith",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Michael Smith.jpg",
    partyName: "Fianna Fáil",
    constituency: "Roscrea-Templemore",
    score: "./assets/images/positive.jpg",
    email: "michael.smith@cllr.tipperarycoco.ie",
    phone: "086 8525634"
  },
  {
    name: "Willie Kennedy",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Willie Kennedy.jpg",
    partyName: "Fine Gael",
    constituency: "Roscrea-Templemore",
    score: "./assets/images/negative.jpg",
    email: "willie.kennedy@tipperarycoco.ie",
    phone: "087-6576581"
  },
  {
    name: "Damien Corish",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Damien Corish.png",
    partyName: "Labour",
    constituency: "Rosslare",
    score: "./assets/images/not_td.jpg",
    email: "damiencorish99@gmail.com",
    phone: "089 403 0589"
  },
  {
    name: "Frank Staples",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Frank Staples.jpg",
    partyName: "Fine Gael",
    constituency: "Rosslare",
    score: "./assets/images/negative.jpg",
    email: "frank.staples@wexfordmcc.ie",
    phone: "086 2305050"
  },
  {
    name: "Jim Codd",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Jim Codd.jpg",
    partyName: "Aontú",
    constituency: "Rosslare",
    score: "./assets/images/negative.jpg",
    email: "jim.codd@wexfordmcc.ie",
    phone: "087 6107083"
  },
  {
    name: "Lisa McDonald",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Lisa McDonald.webp",
    partyName: "Fianna Fáil",
    constituency: "Rosslare",
    score: "./assets/images/not_td.jpg",
    email: "lisa.mcdonald@wexfordmcc.ie",
    phone: "087 9184034"
  },
  {
    name: "Simon Boyse",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Simon Boyse.webp",
    partyName: "Fianna Fáil",
    constituency: "Rosslare",
    score: "./assets/images/positive.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Willie Fitzharris",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Willie Fitzharris.jpg",
    partyName: "Fine Gael",
    constituency: "Rosslare",
    score: "./assets/images/not_td.jpg",
    email: "willie@fitzharris.ie",
    phone: "087-2550052"
  },
  {
    name: "Adrian Henchy",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Adrian Henchy.webp",
    partyName: "Fianna Fáil",
    constituency: "Rush-Lusk",
    score: "./assets/images/positive.jpg",
    email: "Adrian.Henchy@cllrs.fingal.ie",
    phone: "0876814485"
  },
  {
    name: "Brian Dennehy",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Brian Dennehy.jpg",
    partyName: "Fianna Fáil",
    constituency: "Rush-Lusk",
    score: "./assets/images/not_td.jpg",
    email: "Brian.Dennehy@cllrs.fingal.ie",
    phone: "0852298201"
  },
  {
    name: "Corina Johnston",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Corina Johnston.png",
    partyName: "Labour",
    constituency: "Rush-Lusk",
    score: "./assets/images/positive.jpg",
    email: "Corinajohnstonlabour@gmail.com",
    phone: "086 352 2828"
  },
  {
    name: "Eoghan Dockrell",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Eoghan Dockrell.jpg",
    partyName: "Fine Gael",
    constituency: "Rush-Lusk",
    score: "./assets/images/not_td.jpg",
    email: "eoghandockrellfg@gmail.com",
    phone: "087-6183774"
  },
  {
    name: "Luke Daly",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Luke Daly.png",
    partyName: "Social Democrats",
    constituency: "Rush-Lusk",
    score: "./assets/images/negative.jpg",
    email: "luke.daly@socialdemocrats.ie",
    phone: "089 414 4839"
  },
  {
    name: "Paul Mulville",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Paul Mulville.png",
    partyName: "Social Democrats",
    constituency: "Rush-Lusk",
    score: "./assets/images/not_td.jpg",
    email: "Paul.Mulville@cllrs.fingal.ie",
    phone: "0863787395"
  },
  {
    name: "Robert O'Donoghue",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Robert O'Donoghue.png",
    partyName: "Labour",
    constituency: "Rush-Lusk",
    score: "./assets/images/negative.jpg",
    email: "Robert.odonoghue@cllrs.fingal.ie",
    phone: "083-3227472"
  },
  {
    name: "Suzanne Young",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Suzanne Young.jpg",
    partyName: "Green Party",
    constituency: "Rush-Lusk",
    score: "./assets/images/positive.jpg",
    email: "Suzanne.young@greenparty.ie",
    phone: "086 8091586"
  },
  {
    name: "David Griffin",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/David Griffin.webp",
    partyName: "Fianna Fáil",
    constituency: "Shannon",
    score: "./assets/images/not_td.jpg",
    email: "david.griffinff@gmail.com",
    phone: "085 153 8833"
  },
  {
    name: "Donna McGettigan",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Donna McGettigan.jpg",
    partyName: "Sinn Féin",
    constituency: "Shannon",
    score: "./assets/images/negative.jpg",
    email: "dmcgettigan@cllr.clarecoco.ie cllrdonnamcgettigan@gmail.com",
    phone: "(086) 3708159"
  },
  {
    name: "John Crowe",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/John Crowe.jpg",
    partyName: "Fine Gael",
    constituency: "Shannon",
    score: "./assets/images/positive.jpg",
    email: "johncrowesmb@gmail.com",
    phone: "(086) 6011922"
  },
  {
    name: "Patrick O'Gorman",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Patrick O'Gorman.webp",
    partyName: "Fianna Fáil",
    constituency: "Shannon",
    score: "./assets/images/not_td.jpg",
    email: "pogorman@cllr.clarecoco.ie",
    phone: "(087) 6859122"
  },
  {
    name: "Rachel Hartigan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Rachel Hartigan.webp",
    partyName: "Fianna Fáil",
    constituency: "Shannon",
    score: "./assets/images/positive.jpg",
    email: "rachel.hartigan@outlook.ie",
    phone: "087 443 7801"
  },
  {
    name: "Tony Mulcahy",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Tony Mulcahy.jpg",
    partyName: "Fine Gael",
    constituency: "Shannon",
    score: "./assets/images/not_td.jpg",
    email: "tony@tonymulcahy.com",
    phone: "087-7533834"
  },
  {
    name: "Val Gillane",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Val Gillane.jpg",
    partyName: "Fine Gael",
    constituency: "Shannon",
    score: "./assets/images/negative.jpg",
    email: "val.gillane2024@gmail.com",
    phone: ""
  },
  {
    name: "Brendan McCarthy",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Brendan McCarthy.jpg",
    partyName: "Fine Gael",
    constituency: "Skibbereen-West Cork",
    score: "./assets/images/not_td.jpg",
    email: "brendanmccarthyskibb@gmail.com",
    phone: "086-8617605"
  },
  {
    name: "Chris Heinhold",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Chris Heinhold.png",
    partyName: "Social Democrats",
    constituency: "Skibbereen-West Cork",
    score: "./assets/images/negative.jpg",
    email: "chris.heinhold@socialdemocrats.ie",
    phone: "083 428 6024"
  },
  {
    name: "Evie Nevin",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Evie Nevin.jpg",
    partyName: "Labour",
    constituency: "Skibbereen-West Cork",
    score: "./assets/images/negative.jpg",
    email: "evienevin.westcork@gmail.com",
    phone: "083 429 0752"
  },
  {
    name: "Isobel Towse",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Isobel Towse.png",
    partyName: "Social Democrats",
    constituency: "Skibbereen-West Cork",
    score: "./assets/images/not_td.jpg",
    email: "isobel.towse@socialdemocrats.ie",
    phone: ""
  },
  {
    name: "Joe Carroll",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Joe Carroll.webp",
    partyName: "Fianna Fáil",
    constituency: "Skibbereen-West Cork",
    score: "./assets/images/negative.jpg",
    email: "carrolljoe@hotmail.com",
    phone: "086 3631212"
  },
  {
    name: "Lorraine Deane",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Lorraine Deane.jpg",
    partyName: "Aontú",
    constituency: "Skibbereen-West Cork",
    score: "./assets/images/not_td.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Noel O'Donovan",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Noel O'Donovan.jpg",
    partyName: "Fine Gael",
    constituency: "Skibbereen-West Cork",
    score: "./assets/images/positive.jpg",
    email: "noel@noelodonovan.ie",
    phone: "087-9012697"
  },
  {
    name: "Padraig O'Reilly",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Padraig O'Reilly.webp",
    partyName: "Fianna Fáil",
    constituency: "Skibbereen-West Cork",
    score: "./assets/images/not_td.jpg",
    email: "clonmayor2020@gmail.com",
    phone: "087 984 4815"
  },
  {
    name: "Rory Jackson",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Rory Jackson.png",
    partyName: "Green Party",
    constituency: "Skibbereen-West Cork",
    score: "./assets/images/positive.jpg",
    email: "Rory.Jackson@greenparty.ie",
    phone: ""
  },
  {
    name: "Agnieszka Piwowarczyk",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Agnieszka Piwowarczyk.png",
    partyName: "Green Party",
    constituency: "Sligo-Drumcliff",
    score: "./assets/images/not_td.jpg",
    email: "agnieszka.piwowarczyk@greenparty.ie",
    phone: ""
  },
  {
    name: "Dónal Gilroy",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Donal Gilroy.webp",
    partyName: "Fianna Fáil",
    constituency: "Sligo-Drumcliff",
    score: "./assets/images/positive.jpg",
    email: "donalgilroy@outlook.com",
    phone: "087 9386694"
  },
  {
    name: "Edel McSharry",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Edel McSharry.webp",
    partyName: "Fianna Fáil",
    constituency: "Sligo-Drumcliff",
    score: "./assets/images/not_td.jpg",
    email: "edelmcsharryhughes1@gmail.com",
    phone: "087 2999159"
  },
  {
    name: "Emma Hendrick",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Emma Hendrick.webp",
    partyName: "People Before Profit",
    constituency: "Sligo-Drumcliff",
    score: "./assets/images/negative.jpg",
    email: "ehendrick@cllrs.sdublincoco.ie",
    phone: ""
  },
  {
    name: "Thomas Walsh",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Thomas Walsh.jpg",
    partyName: "Fine Gael",
    constituency: "Sligo-Drumcliff",
    score: "./assets/images/not_td.jpg",
    email: "walshthomasf@yahoo.ie",
    phone: "086 1025285"
  },
  {
    name: "Thomas Healy",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Thomas Healy.png",
    partyName: "Sinn Féin",
    constituency: "Sligo-Drumcliff",
    score: "./assets/images/negative.jpg",
    email: "thealyt@gmail.com",
    phone: "086 3666561"
  },
  {
    name: "Tom Fox",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Tom Fox.jpg",
    partyName: "Fine Gael",
    constituency: "Sligo-Drumcliff",
    score: "./assets/images/positive.jpg",
    email: "tom@tomfox.ie",
    phone: "087 2074720"
  },
  {
    name: "Fergal Nealon",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Fergal Nealon.jpg",
    partyName: "Fine Gael",
    constituency: "Sligo-Strandhill",
    score: "./assets/images/not_td.jpg",
    email: "nealonlovessligo@gmail.com",
    phone: "086-1060188"
  },
  {
    name: "Gino O'Boyle",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Gino O'Boyle.webp",
    partyName: "People Before Profit",
    constituency: "Sligo-Strandhill",
    score: "./assets/images/positive.jpg",
    email: "ginopbp@outlook.com",
    phone: "086 0757915"
  },
  {
    name: "Johnny Gogan",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Johnny Gogan.jpg",
    partyName: "Green Party",
    constituency: "Sligo-Strandhill",
    score: "./assets/images/negative.jpg",
    email: "johnny.gogan@greenparty.ie",
    phone: "086 3173075"
  },
  {
    name: "Nessa Cosgrove",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Nessa Cosgrove.png",
    partyName: "Labour",
    constituency: "Sligo-Strandhill",
    score: "./assets/images/positive.jpg",
    email: "nessacosgrove@gmail.com",
    phone: "087 1328433"
  },
  {
    name: "Tom MacSharry",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Tom MacSharry.webp",
    partyName: "Fianna Fáil",
    constituency: "Sligo-Strandhill",
    score: "./assets/images/negative.jpg",
    email: "tommacsharry@hotmail.com",
    phone: "087 4163730"
  },
  {
    name: "Barry Saul",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Barry Saul.jpg",
    partyName: "Fine Gael",
    constituency: "Stillorgan",
    score: "./assets/images/positive.jpg",
    email: "bsaul@cllr.dlrcoco.ie",
    phone: "086-7814517"
  },
  {
    name: "Emer O'Neill",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Emer O'Neill.webp",
    partyName: "Fianna Fáil",
    constituency: "Stillorgan",
    score: "./assets/images/negative.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Eva Dowling",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Eva Dowling.png",
    partyName: "Green Party",
    constituency: "Stillorgan",
    score: "./assets/images/positive.jpg",
    email: "edowling@cllr.dlrcoco.ie",
    phone: "083-1496045"
  },
  {
    name: "John Kennedy",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/John Kennedy.jpg",
    partyName: "Fine Gael",
    constituency: "Stillorgan",
    score: "./assets/images/not_td.jpg",
    email: "jkennedy@cllr.dlrcoco.ie",
    phone: "087-7720794"
  },
  {
    name: "John Hurley",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/John Hurley.png",
    partyName: "Social Democrats",
    constituency: "Stillorgan",
    score: "./assets/images/negative.jpg",
    email: "john.hurley@socialdemocrats.ie",
    phone: ""
  },
  {
    name: "Liam Dockery",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Liam Dockery.webp",
    partyName: "Fianna Fáil",
    constituency: "Stillorgan",
    score: "./assets/images/positive.jpg",
    email: "ldockery@cllr.dlrcoco.ie",
    phone: "087 762 6065"
  },
  {
    name: "Maeve O'Connell",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Maeve O'Connell.jpeg",
    partyName: "Fine Gael",
    constituency: "Stillorgan",
    score: "./assets/images/not_td.jpg",
    email: "moconnell@cllr.dlrcoco.ie",
    phone: "086-8516936"
  },
  {
    name: "Rebekah Fozzard",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Rebekah Fozzard.png",
    partyName: "Labour",
    constituency: "Stillorgan",
    score: "./assets/images/negative.jpg",
    email: "fozzardrebekah@gmail.com",
    phone: "089 4212709"
  },
  {
    name: "Adrian Forkan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Adrian Forkan.webp",
    partyName: "Fianna Fáil",
    constituency: "Swinford",
    score: "./assets/images/negative.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Antoinette Peyton",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Antoinette Peyton.jpg",
    partyName: "Fine Gael",
    constituency: "Swinford",
    score: "./assets/images/positive.jpg",
    email: "antoinettepeytonfg@gmail.com",
    phone: "085-2036236"
  },
  {
    name: "Gerry Murray",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Gerry Murray.png",
    partyName: "Sinn Féin",
    constituency: "Swinford",
    score: "./assets/images/not_td.jpg",
    email: "gmurray@cllr.mayococo.ie",
    phone: "086 3629792"
  },
  {
    name: "John Caulfield",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/John Caulfield.webp",
    partyName: "Fianna Fáil",
    constituency: "Swinford",
    score: "./assets/images/negative.jpg",
    email: "johncaulfield4@gmail.com",
    phone: "087 3134446"
  },
  {
    name: "Neil Cruise",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Neil Cruise.jpg",
    partyName: "Fine Gael",
    constituency: "Swinford",
    score: "./assets/images/not_td.jpg",
    email: "cruisersbar@gmail.com",
    phone: "086 8388778"
  },
  {
    name: "Anne Graves",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Anne Graves.png",
    partyName: "Sinn Féin",
    constituency: "Swords",
    score: "./assets/images/positive.jpg",
    email: "ann.graves@cllrs.fingal.ie",
    phone: "087 2724359"
  },
  {
    name: "Brigid Manton",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Brigid Manton.webp",
    partyName: "Fianna Fáil",
    constituency: "Swords",
    score: "./assets/images/not_td.jpg",
    email: "Brigid.Manton@cllrs.fingal.ie",
    phone: "0862476596"
  },
  {
    name: "Darragh Butler",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Darragh Butler.webp",
    partyName: "Fianna Fáil",
    constituency: "Swords",
    score: "./assets/images/positive.jpg",
    email: "Darragh.Butler@cllrs.fingal.ie",
    phone: "0879595378"
  },
  {
    name: "Ian Carey",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Ian Carey.png",
    partyName: "Green Party",
    constituency: "Swords",
    score: "./assets/images/negative.jpg",
    email: "Ian.Carey@cllrs.fingal.ie",
    phone: "0863074004"
  },
  {
    name: "James Humphreys",
    imageUrl: "./assets/images/LE 2024 Images/Labour/James Humphreys.png",
    partyName: "Labour",
    constituency: "Swords",
    score: "./assets/images/positive.jpg",
    email: "James.Humphreys@cllrs.fingal.ie",
    phone: "0879862686"
  },
  {
    name: "Luke Corkery",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Luke Corkery.jpg",
    partyName: "Fine Gael",
    constituency: "Swords",
    score: "./assets/images/negative.jpg",
    email: "lukecorkeryfg@gmail.com",
    phone: "086-4517178"
  },
  {
    name: "Ollie Power",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Ollie Power.webp",
    partyName: "People Before Profit",
    constituency: "Swords",
    score: "./assets/images/not_td.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Britto Pereppadan",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Britto Pereppadan.jpg",
    partyName: "Fine Gael",
    constituency: "Tallaght Central",
    score: "./assets/images/negative.jpg",
    email: "britto4tallaght@gmail.com",
    phone: "089-4847484"
  },
  {
    name: "Cathal King",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Cathal King.png",
    partyName: "Sinn Féin",
    constituency: "Tallaght Central",
    score: "./assets/images/positive.jpg",
    email: "cathalking@cllrs.sdublincoco.ie",
    phone: "086 3186098"
  },
  {
    name: "Jess Spear",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Jess Spear.webp",
    partyName: "People Before Profit",
    constituency: "Tallaght Central",
    score: "./assets/images/negative.jpg",
    email: "jdubspear@gmail.com",
    phone: ""
  },
  {
    name: "Saoirse Ni Chonarain",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Saoirse Ni Chonarain.jpg",
    partyName: "Aontú",
    constituency: "Tallaght Central",
    score: "./assets/images/not_td.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Teresa Costello",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Teresa Costello.webp",
    partyName: "Fianna Fáil",
    constituency: "Tallaght Central",
    score: "./assets/images/positive.jpg",
    email: "tcos1804@yahoo.co.uk",
    phone: "086 040 9831"
  },
  {
    name: "Vanessa Mulhall",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Vanessa Mulhall.jpg",
    partyName: "Green Party",
    constituency: "Tallaght Central",
    score: "./assets/images/not_td.jpg",
    email: "Vmulhall@cllrs.sdublincoco.ie",
    phone: "083 4140037"
  },
  {
    name: "Adam Smyth",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Adam Smyth.webp",
    partyName: "Fianna Fáil",
    constituency: "Tallaght South",
    score: "./assets/images/negative.jpg",
    email: "adamsmythff@gmail.com",
    phone: "085 1497375"
  },
  {
    name: "Baby Pereppadan",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Baby Pereppadan.jpg",
    partyName: "Fine Gael",
    constituency: "Tallaght South",
    score: "./assets/images/not_td.jpg",
    email: "bpereppadan@cllrs.sdublincoco.ie",
    phone: ""
  },
  {
    name: "Kay Keane",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Kay Keane.webp",
    partyName: "People Before Profit",
    constituency: "Tallaght South",
    score: "./assets/images/not_td.jpg",
    email: "keanekay182@gmail.com",
    phone: ""
  },
  {
    name: "Louise Dunne",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Louise Dunne.png",
    partyName: "Sinn Féin",
    constituency: "Tallaght South",
    score: "./assets/images/positive.jpg",
    email: "ldunne@cllrs.sdublincoco.ie",
    phone: "085 8160048"
  },
  {
    name: "Lynda Prendergast",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Lynda Prendergast.webp",
    partyName: "Fianna Fáil",
    constituency: "Tallaght South",
    score: "./assets/images/not_td.jpg",
    email: "contact@lprendergast.ie",
    phone: "087 764 9352"
  },
  {
    name: "Kay Cahill Skehan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Kay Cahill Skehan.webp",
    partyName: "Fianna Fáil",
    constituency: "Thurles",
    score: "./assets/images/positive.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Peggy Ryan",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Peggy Ryan.jpg",
    partyName: "Fine Gael",
    constituency: "Thurles",
    score: "./assets/images/negative.jpg",
    email: "peggy.ryan@cllr.cllr.tipperarycoco.ie",
    phone: ""
  },
  {
    name: "Sean Ryan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Sean Ryan.webp",
    partyName: "Fianna Fáil",
    constituency: "Thurles",
    score: "./assets/images/positive.jpg",
    email: "seano.ryan@cllr.tipperarycoco.ie",
    phone: "087 4581455"
  },
  {
    name: "Angie Baily",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Angie Baily.jpg",
    partyName: "Fine Gael",
    constituency: "Tralee",
    score: "./assets/images/not_td.jpg",
    email: "angieforlocal@gmail.com",
    phone: "083-1003609"
  },
  {
    name: "Anluan Dunne",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Anluan Dunne.jpg",
    partyName: "Green Party",
    constituency: "Tralee",
    score: "./assets/images/negative.jpg",
    email: "anluan.dunne@greenparty.ie",
    phone: "087 6052722"
  },
  {
    name: "Anne O'Sullivan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Anne O'Sullivan.webp",
    partyName: "Fianna Fáil",
    constituency: "Tralee",
    score: "./assets/images/positive.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Ben Slimm",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Ben Slimm.png",
    partyName: "Labour",
    constituency: "Tralee",
    score: "./assets/images/not_td.jpg",
    email: "ben.slimm@votelabour.ie",
    phone: "085 7547110"
  },
  {
    name: "Michael Sheehy",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Michael Sheehy.webp",
    partyName: "Fianna Fáil",
    constituency: "Tralee",
    score: "./assets/images/negative.jpg",
    email: "mikeysheehytralee@gmail.com",
    phone: "087 1962043"
  },
  {
    name: "Mistura Oyebanji",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Mistura Oyebanji.png",
    partyName: "Social Democrats",
    constituency: "Tralee",
    score: "./assets/images/positive.jpg",
    email: "mistura.oyebanji@socialdemocrats.ie",
    phone: "089 255 3805"
  },
  {
    name: "Sinead Donnelly",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Sinead Donnelly.jpg",
    partyName: "Fine Gael",
    constituency: "Tralee",
    score: "./assets/images/not_td.jpg",
    email: "sineaddonnelly8@gmail.com",
    phone: "085-1571405"
  },
  {
    name: "Terry O'Brien",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Terry O'Brien.jpg",
    partyName: "Labour",
    constituency: "Tralee",
    score: "./assets/images/negative.jpg",
    email: "Ky2222@hotmail.com",
    phone: "087 2634196"
  },
  {
    name: "Cristiona Kiely",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Cristiona Kiely.jpg",
    partyName: "Green Party",
    constituency: "Tramore-Waterford City West",
    score: "./assets/images/negative.jpg",
    email: "cllrckiely@waterfordcouncil.ie",
    phone: "087 1935017"
  },
  {
    name: "Eamon Quinlan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Eamon Quinlan.webp",
    partyName: "Fianna Fáil",
    constituency: "Tramore-Waterford City West",
    score: "./assets/images/positive.jpg",
    email: "cllrequinlan@waterfordcouncil.ie",
    phone: "087 2913887"
  },
  {
    name: "Jim Griffin",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Jim Griffin.jpg",
    partyName: "Sinn Féin",
    constituency: "Tramore-Waterford City West",
    score: "./assets/images/not_td.jpg",
    email: "cllrjgriffin@waterfordcouncil.ie",
    phone: "087 2614192"
  },
  {
    name: "Lola O'Sullivan",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Lola O'Sullivan.jpg",
    partyName: "Fine Gael",
    constituency: "Tramore-Waterford City West",
    score: "./assets/images/positive.jpg",
    email: "cllrlosullivan@waterfordcouncil.ie",
    phone: "086 2336906"
  },
  {
    name: "Mairead McKnight",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Mairead McKnight.png",
    partyName: "Labour",
    constituency: "Tramore-Waterford City West",
    score: "./assets/images/not_td.jpg",
    email: "MaireadMcKnight364@gmail.com",
    phone: "+353 89 416 9221"
  },
  {
    name: "Richie Hayes",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Richie Hayes.jpg",
    partyName: "Fine Gael",
    constituency: "Tramore-Waterford City West",
    score: "./assets/images/negative.jpg",
    email: "richiehayesdeise@gmail.com",
    phone: "087-7065897"
  },
  {
    name: "Aisling Dempsey",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Aisling Dempsey.webp",
    partyName: "Fianna Fáil",
    constituency: "Trim",
    score: "./assets/images/negative.jpg",
    email: "aisling.dempsey@members.meathcoco.ie",
    phone: "087 7726366"
  },
  {
    name: "Dave Boyne",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Dave Boyne.jpg",
    partyName: "Aontú",
    constituency: "Trim",
    score: "./assets/images/negative.jpg",
    email: "dave.boyne@Aontú.ie",
    phone: "086 207 0565"
  },
  {
    name: "Joe Fox",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Joe Fox.jpg",
    partyName: "Fine Gael",
    constituency: "Trim",
    score: "./assets/images/positive.jpg",
    email: "joe.fox@members.meathcoco.ie",
    phone: "087 2631318"
  },
  {
    name: "Luba Healy",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Luba Healy.jpg",
    partyName: "Fine Gael",
    constituency: "Trim",
    score: "./assets/images/not_td.jpg",
    email: "lubahealyfg@gmail.com",
    phone: "083-4431086"
  },
  {
    name: "Niamh Souhan",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Niamh Souhan.jpg",
    partyName: "Fine Gael",
    constituency: "Trim",
    score: "./assets/images/negative.jpg",
    email: "niamh.souhan@members.meathcoco.ie",
    phone: "087 2604357"
  },
  {
    name: "Padraig Coffey",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Padraig Coffey.webp",
    partyName: "Fianna Fáil",
    constituency: "Trim",
    score: "./assets/images/not_td.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Andrew Reddington",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Andrew Reddington.jpg",
    partyName: "Fine Gael",
    constituency: "Tuam",
    score: "./assets/images/negative.jpg",
    email: "areddington@cllr.galwaycoco.ie",
    phone: "087 6458115"
  },
  {
    name: "Blessing Oguekwe",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Blessing Oguekwe.png",
    partyName: "Labour",
    constituency: "Tuam",
    score: "./assets/images/positive.jpg",
    email: "bchuka2000@yahoo.com",
    phone: "89 969 5496"
  },
  {
    name: "Donagh Killilea",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Donagh Killilea.webp",
    partyName: "Fianna Fáil",
    constituency: "Tuam",
    score: "./assets/images/negative.jpg",
    email: "dkillilea@cllr.galwaycoco.ie",
    phone: "086 6079563"
  },
  {
    name: "Islammiyah Kadejo",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Islammiyah Kadejo.jpg",
    partyName: "Green Party",
    constituency: "Tuam",
    score: "./assets/images/positive.jpg",
    email: "islammiyah.kadejo@greenparty.ie",
    phone: "083 374 7482"
  },
  {
    name: "Joe Sheridan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Joe Sheridan.webp",
    partyName: "Fianna Fáil",
    constituency: "Tuam",
    score: "./assets/images/not_td.jpg",
    email: "jsheridan@cllr.galwaycoco.ie",
    phone: "087 9897072"
  },
  {
    name: "Luke Silke",
    imageUrl: "./assets/images/LE 2024 Images/Aontu/Luke Silke.jpg",
    partyName: "Aontú",
    constituency: "Tuam",
    score: "./assets/images/positive.jpg",
    email: "luke.silke@oireachtas.ie",
    phone: "085 223 9620"
  },
  {
    name: "Mary Hoade",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Mary Hoade.webp",
    partyName: "Fianna Fáil",
    constituency: "Tuam",
    score: "./assets/images/not_td.jpg",
    email: "mhoade@cllr.galwaycoco.ie",
    phone: "087 2255979"
  },
  {
    name: "Ollie Turner",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Ollie Turner.jpg",
    partyName: "Fine Gael",
    constituency: "Tuam",
    score: "./assets/images/negative.jpg",
    email: "ollieturnerot.ot@gmail.com",
    phone: "086-2626958"
  },
  {
    name: "Pete Roche",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Pete Roche.jpg",
    partyName: "Fine Gael",
    constituency: "Tuam",
    score: "./assets/images/positive.jpg",
    email: "proche@cllr.galwaycoco.ie",
    phone: "087 8251470"
  },
  {
    name: "Declan Harvey",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Declan Harvey.webp",
    partyName: "Fianna Fáil",
    constituency: "Tullamore",
    score: "./assets/images/not_td.jpg",
    email: "dmharvey@eircom.net",
    phone: "(087) 4106571"
  },
  {
    name: "Frank Moran",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Frank Moran.webp",
    partyName: "Fianna Fáil",
    constituency: "Tullamore",
    score: "./assets/images/negative.jpg",
    email: "moranfrank1@hotmail.com",
    phone: "(086) 8879524"
  },
  {
    name: "Liam Walsh",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Liam Walsh.jpg",
    partyName: "Green Party",
    constituency: "Tullamore",
    score: "./assets/images/positive.jpg",
    email: "liam.walsh@greenparty.ie",
    phone: "086-822 2614"
  },
  {
    name: "Neil Feighery",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Neil Feighery.jpg",
    partyName: "Fine Gael",
    constituency: "Tullamore",
    score: "./assets/images/not_td.jpg",
    email: "neilfeighery@gmail.com",
    phone: "(087) 7933118"
  },
  {
    name: "Ollie Bryant",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Ollie Bryant.webp",
    partyName: "Fianna Fáil",
    constituency: "Tullamore",
    score: "./assets/images/negative.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Tony McCormack",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Tony McCormack.jpg",
    partyName: "Fianna Fáil",
    constituency: "Tullamore",
    score: "./assets/images/positive.jpg",
    email: "tony.mccormack@yahoo.ie",
    phone: "(086) 8229399"
  },
  {
    name: "Ben Ward",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Ben Ward.jpg",
    partyName: "Fine Gael",
    constituency: "Tullow",
    score: "./assets/images/negative.jpg",
    email: "benward599@gmail.com",
    phone: "089-7060559"
  },
  {
    name: "Brian O'Donoghue",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Brian O'Donoghue.jpg",
    partyName: "Fine Gael",
    constituency: "Tullow",
    score: "./assets/images/not_td.jpg",
    email: "bodonoghue@carlow.ie",
    phone: "087 2630848"
  },
  {
    name: "Catherine Callaghan",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Catherine Callaghan.jpg",
    partyName: "Fine Gael",
    constituency: "Tullow",
    score: "./assets/images/negative.jpg",
    email: "callaghancatherine7@gmail.com",
    phone: "087-9409009"
  },
  {
    name: "John McDonald",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/John McDonald.jpg",
    partyName: "Fianna Fáil",
    constituency: "Tullow",
    score: "./assets/images/negative.jpg",
    email: "jmcdonald@carlow.ie",
    phone: "087 6684076"
  },
  {
    name: "John Pender",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/John Pender.jpg",
    partyName: "Fianna Fáil",
    constituency: "Tullow",
    score: "./assets/images/positive.jpg",
    email: "jpender@carlow.ie",
    phone: "086 8538696"
  },
  {
    name: "John Cahill",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/John Cahill.webp",
    partyName: "People Before Profit",
    constituency: "Tullow",
    score: "./assets/images/not_td.jpg",
    email: "",
    phone: ""
  },
  {
    name: "Adam Wyse",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Adam Wyse.jpg",
    partyName: "Fianna Fáil",
    constituency: "Waterford City East",
    score: "./assets/images/negative.jpg",
    email: "cllrawyse@waterfordcouncil.ie",
    phone: "085 1801243"
  },
  {
    name: "Jim Darcy",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Jim Darcy.jpg",
    partyName: "Fine Gael",
    constituency: "Waterford City East",
    score: "./assets/images/positive.jpg",
    email: "jimdarcyfinegael@gmail.com",
    phone: "087-9394847"
  },
  {
    name: "Jody Power",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Jody Power.png",
    partyName: "Green Party",
    constituency: "Waterford City East",
    score: "./assets/images/not_td.jpg",
    email: "cllrjpower@waterfordcouncil.ie",
    phone: "086 7912333"
  },
  {
    name: "Mary Roche",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Mary Roche.png",
    partyName: "Social Democrats",
    constituency: "Waterford City East",
    score: "./assets/images/positive.jpg",
    email: "cllrmroche@waterfordcouncil.ie",
    phone: "087 2273206"
  },
  {
    name: "Pat Fitzgerald",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Pat Fitzgerald.png",
    partyName: "Sinn Féin",
    constituency: "Waterford City East",
    score: "./assets/images/not_td.jpg",
    email: "cllrpfitzgerald@waterfordcouncil.ie",
    phone: "087 7450994"
  },
  {
    name: "Stephanie Keating",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Stephanie Keating.jpg",
    partyName: "Fianna Fáil",
    constituency: "Waterford City East",
    score: "./assets/images/negative.jpg",
    email: "cllrskeating@waterfordcouncil.ie",
    phone: "087 1990755"
  },
  {
    name: "Breda Brennan",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Breda Brennan.jpg",
    partyName: "Sinn Féin",
    constituency: "Waterford City South",
    score: "./assets/images/positive.jpg",
    email: "cllrbbrennan@waterfordcouncil.ie",
    phone: "086 3769637"
  },
  {
    name: "Frank Quinlan",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Frank Quinlan.jpg",
    partyName: "Fine Gael",
    constituency: "Waterford City South",
    score: "./assets/images/negative.jpg",
    email: "cllrfquinlan@waterfordcouncil.ie",
    phone: ""
  },
  {
    name: "Jason Murphy",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Jason Murphy.jpg",
    partyName: "Fianna Fáil",
    constituency: "Waterford City South",
    score: "./assets/images/positive.jpg",
    email: "cllrjamurphy@waterfordcouncil.ie",
    phone: "087 2921089"
  },
  {
    name: "John Hearne",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/John Hearne.jpg",
    partyName: "Sinn Féin",
    constituency: "Waterford City South",
    score: "./assets/images/negative.jpg",
    email: "cllrjhearne@waterfordcouncil.ie",
    phone: "089-4352404"
  },
  {
    name: "Maoliosa Ní Chléirigh",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Maoliosa Ni Chleirigh.jpg",
    partyName: "Green Party",
    constituency: "Waterford City South",
    score: "./assets/images/not_td.jpg",
    email: "Maoliosa.NiChleirigh@greenparty.ie",
    phone: ""
  },
  {
    name: "Patrick Curtin",
    imageUrl: "./assets/images/LE 2024 Images/People Before Profit/Patrick Curtin.webp",
    partyName: "People Before Profit",
    constituency: "Waterford City South",
    score: "./assets/images/negative.jpg",
    email: "pbp.pcurtin@gmail.com",
    phone: ""
  },
  {
    name: "Séamus Ryan",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Seamus Ryan.png",
    partyName: "Labour",
    constituency: "Waterford City South",
    score: "./assets/images/positive.jpg",
    email: "cllrsryan@waterfordcouncil.ie",
    phone: "087 6805314"
  },
  {
    name: "Sinead Ellen Griffin",
    imageUrl: "./assets/images/LE 2024 Images/Social Democrats/Sinead Ellen Griffin.png",
    partyName: "Social Democrats",
    constituency: "Waterford City South",
    score: "./assets/images/not_td.jpg",
    email: "sinead.ellen.griffin@socialdemocrats.ie",
    phone: ""
  },
  {
    name: "Vivienne Burns",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Vivienne Burns.webp",
    partyName: "Fianna Fáil",
    constituency: "Waterford City South",
    score: "./assets/images/negative.jpg",
    email: "",
    phone: "085 1782726"
  },
  {
    name: "Brendan Mulroy",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Brendan Mulroy.webp",
    partyName: "Fianna Fáil",
    constituency: "Westport",
    score: "./assets/images/positive.jpg",
    email: "bmulroy65@gmail.com",
    phone: "087  9820542"
  },
  {
    name: "Keira Keogh",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Keira Keogh.jpg",
    partyName: "Fine Gael",
    constituency: "Westport",
    score: "./assets/images/not_td.jpg",
    email: "keirakeoghfinegael@gmail.com",
    phone: "087-6833008"
  },
  {
    name: "Peter Flynn",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Peter Flynn.png",
    partyName: "Fine Gael",
    constituency: "Westport",
    score: "./assets/images/negative.jpg",
    email: "cllrpeterflynn@mayococo.ie",
    phone: "087-6624898"
  },
  {
    name: "Peter Nolan",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Peter Nolan.jpg",
    partyName: "Green Party",
    constituency: "Westport",
    score: "./assets/images/positive.jpg",
    email: "peter.nolan@greenparty.ie",
    phone: ""
  },
  {
    name: "Catherine Walsh",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Catherine Walsh.png",
    partyName: "Labour",
    constituency: "Wexford",
    score: "./assets/images/not_td.jpg",
    email: "cathwalsh1@hotmail.com",
    phone: "086 608 6560"
  },
  {
    name: "Garry Laffan",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Garry Laffan.webp",
    partyName: "Fianna Fáil",
    constituency: "Wexford",
    score: "./assets/images/negative.jpg",
    email: "garry.laffan@wexfordmcc.ie",
    phone: "087 7878417"
  },
  {
    name: "George Lawlor",
    imageUrl: "./assets/images/LE 2024 Images/Labour/George Lawlor.png",
    partyName: "Labour",
    constituency: "Wexford",
    score: "./assets/images/positive.jpg",
    email: "george.lawlor@wexfordmcc.ie",
    phone: "086 8164128"
  },
  {
    name: "Robbie Staples",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Robbie Staples.jpg",
    partyName: "Fine Gael",
    constituency: "Wexford",
    score: "./assets/images/negative.jpg",
    email: "staples.robbiefg@gmail.com",
    phone: "085-1955292"
  },
  {
    name: "Tom Forde",
    imageUrl: "./assets/images/LE 2024 Images/Sinn Fein/Tom Forde.png",
    partyName: "Sinn Féin",
    constituency: "Wexford",
    score: "./assets/images/positive.jpg",
    email: "tom.forde@wexfordmcc.ie",
    phone: "085-8421627"
  },
  {
    name: "Vicky Clancy Barron",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Vicky Clancy Barron.png",
    partyName: "Labour",
    constituency: "Wexford",
    score: "./assets/images/not_td.jpg",
    email: "vickybarronprin@gmail.com",
    phone: "87 223 1138"
  },
  {
    name: "Gail Dunne",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Gail Dunne.webp",
    partyName: "Fianna Fáil",
    constituency: "Wicklow",
    score: "./assets/images/negative.jpg",
    email: "GDunne@wicklowcoco.ie",
    phone: "086 821 4368"
  },
  {
    name: "Graham Richmond",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Graham Richmond.jpg",
    partyName: "Fine Gael",
    constituency: "Wicklow",
    score: "./assets/images/positive.jpg",
    email: "grahamrichmondwicklow@gmail.com",
    phone: "086-8930318"
  },
  {
    name: "Mia Fahey McCarthy",
    imageUrl: "./assets/images/LE 2024 Images/Green Party/Mia Fahey McCarthy.png",
    partyName: "Green Party",
    constituency: "Wicklow",
    score: "./assets/images/positive.jpg",
    email: "mia.faheymccarthy@greenparty.ie",
    phone: ""
  },
  {
    name: "Paul O'Brien",
    imageUrl: "./assets/images/LE 2024 Images/Labour/Paul O'Brien.jpg",
    partyName: "Labour",
    constituency: "Wicklow",
    score: "./assets/images/not_td.jpg",
    email: "pobrien@wicklowcoco.ie",
    phone: "086 036 6947"
  },
  {
    name: "Shane Langrell",
    imageUrl: "./assets/images/LE 2024 Images/Fine Gael/Shane Langrell.jpg",
    partyName: "Fine Gael",
    constituency: "Wicklow",
    score: "./assets/images/negative.jpg",
    email: "shanelangrellwicklow@gmail.com",
    phone: "087-4171521"
  },
  {
    name: "Sonia Casey Shortt",
    imageUrl: "./assets/images/LE 2024 Images/Fianna Fail/Sonia Casey Shortt.jpg",
    partyName: "Fianna Fáil",
    constituency: "Wicklow",
    score: "./assets/images/negative.jpg",
    email: "soniacaseyshortt@gmail.com",
    phone: "086 1618313"
  }
]