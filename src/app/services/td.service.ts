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
    name: "Alan Dillon",
    imageUrl: "./assets/images/candidates/Alan Dillon_FG_Mayo.jpg",
    partyName: "Fine Gael",
    constituency: "Mayo",
    score: "./assets/images/positive.jpg",
    partyScore: "29%"
  },
  {
    name: "Barry Cowen",
    imageUrl: "./assets/images/candidates/Barry Cowen_FF_Laois–Offaly.jpg",
    partyName: "Fianna Fáil",
    constituency: "Laois Offaly",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "42%"
  },
  {
    name: "Cathal Berry",
    imageUrl: "./assets/images/candidates/Cathal_Berry_Ind.jpg",
    partyName: "Independent",
    constituency: "Kildare South",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "28%"
  },
  {
    name: "Cathal Crowe",
    imageUrl: "./assets/images/candidates/Cathal Crowe_FF_Clare.jpg",
    partyName: "Fianna Fáil",
    constituency: "Clare",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "42%"
  },
  {
    name: "Catherine Connolly",
    imageUrl: "./assets/images/candidates/Connolly, Catherine.jfif",
    partyName: "Independent",
    constituency: "Galway West",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "28%"
  },
  {
    name: "Chris Andrews",
    imageUrl: "./assets/images/candidates/Chris_Andrews_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin Bay South",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "43%"
  },
  {
    name: "Ciaran Cannon",
    imageUrl: "./assets/images/candidates/Ciarán Cannon_FG_Galway East.jpg",
    partyName: "Fine Gael",
    constituency: "Galway East",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "29%"
  },
  {
    name: "Colm Brophy",
    imageUrl: "./assets/images/candidates/Colm Brophy_FG_Dublin South West.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin South West",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "29%"
  },
  {
    name: "Colm Burke",
    imageUrl: "./assets/images/candidates/Colm Burke_FG_Cork North Central.jpg",
    partyName: "Fine Gael",
    constituency: "Cork North Central",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "29%"
  },
  {
    name: "Cormac Devlin",
    imageUrl: "./assets/images/candidates/Cormac Devlin_FF_Dun Laoghaire.jpg",
    partyName: "Fianna Fáil",
    constituency: "Dún Laoghaire",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "42%"
  },
  {
    name: "Dara Calleary",
    imageUrl: "./assets/images/candidates/Dara Calleary_FF_Mayo.jpg",
    partyName: "Fianna Fáil",
    constituency: "Mayo",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "42%"
  },
  {
    name: "David Cullinane",
    imageUrl: "./assets/images/candidates/David_Cullinane_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Waterford",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "43%"
  },
  {
    name: "Holly Cairns",
    imageUrl: "./assets/images/candidates/Holly_Cairns_SD.jpg",
    partyName: "Social Democrats",
    constituency: "Cork South West",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "50%"
  },
  {
    name: "Jack Chambers",
    imageUrl: "./assets/images/candidates/Jack Chambers_FF_Dublin West.jpg",
    partyName: "Fianna Fáil",
    constituency: "Dublin West",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "42%"
  },
  {
    name: "Jackie Cahill",
    imageUrl: "./assets/images/candidates/Jackie Cahill_FF_Tipperary.jpg",
    partyName: "Fianna Fáil",
    constituency: "Tipperary",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "42%"
  },
  {
    name: "James Browne",
    imageUrl: "./assets/images/candidates/James Browne_FF_Wexford.jpg",
    partyName: "Fianna Fáil",
    constituency: "Wexford",
    score: "./assets/images/negative.jpg",
    partyScore: "42%"
  },
  {
    name: "Jennifer Carroll MacNeill",
    imageUrl: "./assets/images/candidates/Jennifer Carroll MacNeill_FG_Dún Laoghaire.jpg",
    partyName: "Fine Gael",
    constituency: "Dún Laoghaire",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "29%"
  },
  {
    name: "Joan Collins",
    imageUrl: "./assets/images/candidates/Collins, Joan.png",
    partyName: "Independents 4 Change",
    constituency: "Dublin South Central",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "0%"
  },
  {
    name: "Joe Carey",
    imageUrl: "./assets/images/candidates/Joe Carey_FG_Clare.jpg",
    partyName: "Fine Gael",
    constituency: "Clare",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "29%"
  },
  {
    name: "John Brady",
    imageUrl: "./assets/images/candidates/John_Brady_TD.jpg",
    partyName: "Sinn Féin",
    constituency: "Wicklow",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "43%"
  },
  {
    name: "Martin Browne",
    imageUrl: "./assets/images/candidates/Martin_Browne_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Tipperary",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "43%"
  },
  {
    name: "Mary Butler",
    imageUrl: "./assets/images/candidates/Mary Butler_FF_Waterford.jpg",
    partyName: "Fianna Fáil",
    constituency: "Waterford",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "42%"
  },
  {
    name: "Matt Carthy",
    imageUrl: "./assets/images/candidates/Matt_Carthy_SF.png",
    partyName: "Sinn Féin",
    constituency: "Cavan Monaghan",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "43%"
  },
  {
    name: "Michael Collins",
    imageUrl: "./assets/images/candidates/Michael_Collins_Ind.jpg",
    partyName: "Independent",
    constituency: "Cork South West",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "28%"
  },
  {
    name: "Michael Creed",
    imageUrl: "./assets/images/candidates/Michael Creed_FG_Cork North West.jpg",
    partyName: "Fine Gael",
    constituency: "Cork North West",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "29%"
  },
  {
    name: "Mick Barry",
    imageUrl: "./assets/images/candidates/Mick_Barry_PBP.jpg",
    partyName: "Solidarity - People Before Profit",
    constituency: "Cork North Central",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "20%"
  },
  {
    name: "Niall Collins",
    imageUrl: "./assets/images/candidates/Niall Collins_FF_Limerick County.jpg",
    partyName: "Fianna Fáil",
    constituency: "Limerick County",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "42%"
  },
  {
    name: "Pa Daly",
    imageUrl: "./assets/images/candidates/Pa_Daly_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Kerry",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "43%"
  },
  {
    name: "Pat Buckley",
    imageUrl: "./assets/images/candidates/Pat_Buckley_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Cork East",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "43%"
  },
  {
    name: "Patrick Costello",
    imageUrl: "./assets/images/candidates/Patrick Costello_GP_Dublin South Central.jpg",
    partyName: "Green Party",
    constituency: "Dublin South Central",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "58%"
  },
  {
    name: "Peter Burke",
    imageUrl: "./assets/images/candidates/Peter Burke_FG_Longford-Westmeath.jpg",
    partyName: "Fine Gael",
    constituency: "Longford Westmeath",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "29%"
  },
  {
    name: "Reada Cronin",
    imageUrl: "./assets/images/candidates/Reada_Cronin_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Kildare North",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "43%"
  },
  {
    name: "Richard Boyd Barrett",
    imageUrl: "./assets/images/candidates/Richard_BoydBarrett_PBP.jpg",
    partyName: "Solidarity - People Before Profit",
    constituency: "Dún Laoghaire",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "20%"
  },
  {
    name: "Richard Bruton",
    imageUrl: "./assets/images/candidates/Richard Bruton_FG_Dublin Bay North.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin Bay North",
    score: "./assets/images/negative.jpg",
    partyScore: "29%"
  },
  {
    name: "Rose Conway Walsh",
    imageUrl: "./assets/images/candidates/Rose_ConwayWalsh_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Mayo",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "43%"
  },
  {
    name: "Sean Canney",
    imageUrl: "./assets/images/candidates/Sean_Canney_Ind.jpg",
    partyName: "Independent",
    constituency: "Galway East",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "28%"
  },
  {
    name: "Sean Crowe",
    imageUrl: "./assets/images/candidates/Sean_Crowe_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin South West",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "43%"
  },
  {
    name: "Simon Coveney",
    imageUrl: "./assets/images/candidates/Simon Coveney_FG_Cork South Central.jpg",
    partyName: "Fine Gael",
    constituency: "Cork South Central",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "29%"
  },
  {
    name: "Sorca Clarke",
    imageUrl: "./assets/images/candidates/Sorca_Clarke_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Longford Westmeath",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "43%"
  },
  {
    name: "Thomas Byrne",
    imageUrl: "./assets/images/candidates/Thomas Byrne_FF_Meath East.jpg",
    partyName: "Fianna Fáil",
    constituency: "Meath East",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "42%"
  },
  {
    name: "Pearse Doherty",
    imageUrl: "./assets/images/candidates/Pearse_Doherty_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Donegal",
    score: "./assets/images/negative.jpg",
    partyScore: "43%"
  },
  {
    name: "Paul Donnelly",
    imageUrl: "./assets/images/candidates/Paul_Donnelly_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin West",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "43%"
  },
  {
    name: "Stephen Donnelly",
    imageUrl: "./assets/images/candidates/Stephen Donnelly_FF_Wicklow.jpg",
    partyName: "Fianna Fáil",
    constituency: "Wicklow",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "42%"
  },
  {
    name: "Paschal Donohoe",
    imageUrl: "./assets/images/candidates/Paschal Donohoe_FG_Dublin Central.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin Central",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "29%"
  },
  {
    name: "Francis Noel Duffy",
    imageUrl: "./assets/images/candidates/Francis Noel Duffy_GP_Dublin South-West.jpg",
    partyName: "Green Party",
    constituency: "Dublin South West",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "58%"
  },
  {
    name: "Bernard J. Durkan",
    imageUrl: "./assets/images/candidates/Bernard Durkan_FG_Kildare North.jpg",
    partyName: "Fine Gael",
    constituency: "Kildare North",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "29%"
  },
  {
    name: "Dessie Ellis",
    imageUrl: "./assets/images/candidates/Dessie_Ellis_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin North West",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "43%"
  },
  {
    name: "Damien English",
    imageUrl: "./assets/images/candidates/Damien English_FG_Meath West.jpg",
    partyName: "Fine Gael",
    constituency: "Meath West",
    score: "./assets/images/negative.jpg",
    partyScore: "29%"
  },
  {
    name: "Alan Farrell",
    imageUrl: "./assets/images/candidates/Alan Farrell_FG_Dublin Fingal.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin Fingal",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "29%"
  },
  {
    name: "Mairead Farrell",
    imageUrl: "./assets/images/candidates/Mairead_Farrell_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Galway West",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "43%"
  },
  {
    name: "Frank Feighan",
    imageUrl: "./assets/images/candidates/Frank Feighan_FG_Sligo-Leitrim.jpg",
    partyName: "Fine Gael",
    constituency: "Sligo Leitrim",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "29%"
  },
  {
    name: "Michael Fitzmaurice",
    imageUrl: "./assets/images/candidates/Fitzmaurice, Michael.jfif",
    partyName: "Independent",
    constituency: "Roscommon Galway",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "28%"
  },
  {
    name: "Joe Flaherty",
    imageUrl: "./assets/images/candidates/Joe Flaherty_FF_Longford-Westmeath.jpg",
    partyName: "Fianna Fáil",
    constituency: "Longford Westmeath",
    score: "./assets/images/negative.jpg",
    partyScore: "42%"
  },
  {
    name: "Charles Flanagan",
    imageUrl: "./assets/images/candidates/Charlie Flanagan_FG_Laois-Offaly.jpg",
    partyName: "Fine Gael",
    constituency: "Laois Offaly",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "29%"
  },
  {
    name: "Sean Fleming",
    imageUrl: "./assets/images/candidates/Seán Fleming_FF_Laois–Offaly.jpg",
    partyName: "Fianna Fáil",
    constituency: "Laois Offaly",
    score: "./assets/images/negative.jpg",
    partyScore: "42%"
  },
  {
    name: "Norma Foley",
    imageUrl: "./assets/images/candidates/Norma Foley_FF_Kerry.jpg",
    partyName: "Fianna Fáil",
    constituency: "Kerry",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "42%"
  },
  {
    name: "Kathleen Funchion",
    imageUrl: "./assets/images/candidates/Kathleen_Funchion_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Carlow Kilkenny",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "43%"
  },
  {
    name: "Gary Gannon",
    imageUrl: "./assets/images/candidates/Gary_Gannon_SD.jpeg",
    partyName: "Social Democrats",
    constituency: "Dublin Central",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "50%"
  },
  {
    name: "Thomas Gould",
    imageUrl: "./assets/images/candidates/Gould, Thomas.jfif",
    partyName: "Sinn Féin",
    constituency: "Cork North Central",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "43%"
  },
  {
    name: "Noel Grealish",
    imageUrl: "./assets/images/candidates/Grealish, Noel.jfif",
    partyName: "Independent",
    constituency: "Galway West",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "28%"
  },
  {
    name: "Brendan Griffin",
    imageUrl: "./assets/images/candidates/Brendan Griffin_FG_Kerry.jpg",
    partyName: "Fine Gael",
    constituency: "Kerry",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "29%"
  },
  {
    name: "Johnny Guirke",
    imageUrl: "./assets/images/candidates/Johnny_Guirke_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Meath West",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "43%"
  },
  {
    name: "Marian Harkin",
    imageUrl: "./assets/images/candidates/Marian_Harkin_Ind.jpg",
    partyName: "Independent",
    constituency: "Sligo Leitrim",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "28%"
  },
  {
    name: "Simon Harris",
    imageUrl: "./assets/images/candidates/Simon Harris_FG_Wicklow.jpg",
    partyName: "Fine Gael",
    constituency: "Wicklow",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "29%"
  },
  {
    name: "Sean Haughey",
    imageUrl: "./assets/images/candidates/Seán Haughey_FF_Dublin Bay North.jpg",
    partyName: "Fianna Fáil",
    constituency: "Dublin Bay North",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "42%"
  },
  {
    name: "Danny Healy-Rae",
    imageUrl: "./assets/images/candidates/Danny_HealyRae_Ind.jpg",
    partyName: "Independent",
    constituency: "Kerry",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "28%"
  },
  {
    name: "Michael Healy-Rae",
    imageUrl: "./assets/images/candidates/Michael_HealyRae_Ind.jpg",
    partyName: "Independent",
    constituency: "Kerry",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "28%"
  },
  {
    name: "Martin Heydon",
    imageUrl: "./assets/images/candidates/Martin Heydon_FG_Kildare South.jpg",
    partyName: "Fine Gael",
    constituency: "Kildare South",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "29%"
  },
  {
    name: "Emer Higgins",
    imageUrl: "./assets/images/candidates/Emer Higgins_FG_Dublin Mid West.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin Mid West",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "29%"
  },
  {
    name: "Neasa Hourigan",
    imageUrl: "./assets/images/candidates/Neasa Hourigan_GP_Dublin Central.jpg",
    partyName: "Green Party",
    constituency: "Dublin Central",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "58%"
  },
  {
    name: "Brendan Howlin",
    imageUrl: "./assets/images/candidates/Brendan Howlin_Lab_Wexford.jpg",
    partyName: "Labour Party",
    constituency: "Wexford",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "71%"
  },
  {
    name: "Heather Humphreys",
    imageUrl: "./assets/images/candidates/Heather Humphreys_FG_Cavan-Monaghan.jpg",
    partyName: "Fine Gael",
    constituency: "Cavan Monaghan",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "29%"
  },
  {
    name: "Paul Kehoe",
    imageUrl: "./assets/images/candidates/Paul Kehoe_FG_Wexford.jpg",
    partyName: "Fine Gael",
    constituency: "Wexford",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "29%"
  },
  {
    name: "Alan Kelly",
    imageUrl: "./assets/images/candidates/Alan Kelly_Lab_Tipperary.jpg",
    partyName: "Labour Party",
    constituency: "Tipperary",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "71%"
  },
  {
    name: "Gino Kenny",
    imageUrl: "./assets/images/candidates/Gino_Kenny_PBP.jpg",
    partyName: "Solidarity - People Before Profit",
    constituency: "Dublin Mid West",
    score: "./assets/images/negative.jpg",
    partyScore: "20%"
  },
  {
    name: "Martin Kenny",
    imageUrl: "./assets/images/candidates/Martin_Kenny_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Sligo Leitrim",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Claire Kerrane",
    imageUrl: "./assets/images/candidates/Claire_Kerrane_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Roscommon Galway",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "43%"
  },
  {
    name: "John Lahart",
    imageUrl: "./assets/images/candidates/John Lahart_FF_Dublin South West.jpg",
    partyName: "Fianna Fáil",
    constituency: "Dublin South West",
    score: "./assets/images/negative.jpg",
    partyScore: "42%"
  },
  {
    name: "James Lawless",
    imageUrl: "./assets/images/candidates/James Lawless_FF_Kildare North.jpg",
    partyName: "Fianna Fáil",
    constituency: "Kildare North",
    score: "./assets/images/positive.jpg",
    partyScore: "42%"
  },
  {
    name: "Brian Leddin",
    imageUrl: "./assets/images/candidates/Brian Leddin_GP_Limerick City.jpg",
    partyName: "Green Party",
    constituency: "Limerick City",
    score: "./assets/images/negative.jpg",
    partyScore: "58%"
  },
  {
    name: "Michael Lowry",
    imageUrl: "./assets/images/candidates/Michael_Lowry_Ind.jpg",
    partyName: "Independent",
    constituency: "Tipperary",
    score: "./assets/images/negative.jpg",
    partyScore: "28%"
  },
  {
    name: "Pádraig MacLochlainn",
    imageUrl: "./assets/images/candidates/Padraig_McLochlainn_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Donegal",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "43%"
  },
  {
    name: "Marc MacSharry",
    imageUrl: "./assets/images/candidates/Marc MacSharry_FF_Sligo-Leitim.jpg",
    partyName: "Fianna Fáil",
    constituency: "Sligo Leitrim",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "42%"
  },
  {
    name: "Josepha Madigan",
    imageUrl: "./assets/images/candidates/Josepha Madigan_FG_Dublin Rathdown.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin Rathdown",
    score: "./assets/images/negative.jpg",
    partyScore: "29%"
  },
  {
    name: "Catherine Martin",
    imageUrl: "./assets/images/candidates/Catherine Martin_GP_Dublin Rathdown.jpg",
    partyName: "Green Party",
    constituency: "Dublin Rathdown",
    score: "./assets/images/negative.jpg",
    partyScore: "58%"
  },
  {
    name: "Micheal Martin",
    imageUrl: "./assets/images/candidates/Micheál Martin_FF_Cork South Central.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cork South Central",
    score: "./assets/images/positive.jpg",
    partyScore: "42%"
  },
  {
    name: "Steven Matthews",
    imageUrl: "./assets/images/candidates/Steven Matthews_GP_Wicklow.jpg",
    partyName: "Green Party",
    constituency: "Wicklow",
    score: "./assets/images/positive.jpg",
    partyScore: "58%"
  },
  {
    name: "Paul McAuliffe",
    imageUrl: "./assets/images/candidates/Paul McAuliffe_FF_Dublin North West.jpg",
    partyName: "Fianna Fáil",
    constituency: "Dublin North West",
    score: "./assets/images/positive.jpg",
    partyScore: "42%"
  },
  {
    name: "Charlie McConalogue",
    imageUrl: "./assets/images/candidates/Charlie McConalogue_FF_Donegal.jpg",
    partyName: "Fianna Fáil",
    constituency: "Donegal",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "42%"
  },
  {
    name: "Mary Lou McDonald",
    imageUrl: "./assets/images/candidates/MaryLou_McDonald_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin Central",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Helen McEntee",
    imageUrl: "./assets/images/candidates/Helen McEntee_FG_Meath East.jpg",
    partyName: "Fine Gael",
    constituency: "Meath East",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "29%"
  },
  {
    name: "Mattie McGrath",
    imageUrl: "./assets/images/candidates/Mattie_McGrath_Ind.jpg",
    partyName: "Independent",
    constituency: "Tipperary",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "28%"
  },
  {
    name: "Michael McGrath",
    imageUrl: "./assets/images/candidates/Michael McGrath_FF_Cork South Central.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cork South Central",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "42%"
  },
  {
    name: "John McGuinness",
    imageUrl: "./assets/images/candidates/John McGuinness_FF_Carlow–Kilkenny.jpg",
    partyName: "Fianna Fáil",
    constituency: "Carlow Kilkenny",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "42%"
  },
  {
    name: "Joe McHugh",
    imageUrl: "./assets/images/candidates/Joe McHugh_FG_Donegal.jpg",
    partyName: "Fine Gael",
    constituency: "Donegal",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "29%"
  },
  {
    name: "Michael McNamara",
    imageUrl: "./assets/images/candidates/Michael_McNamara_Ind.jpg",
    partyName: "Independent",
    constituency: "Clare",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "28%"
  },
  {
    name: "Denise Mitchell",
    imageUrl: "./assets/images/candidates/Denise_Mitchell_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin Bay North",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "43%"
  },
  {
    name: "Aindrias Moynihan",
    imageUrl: "./assets/images/candidates/Aindrias Moynihan_FF_Cork North West.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cork North West",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "42%"
  },
  {
    name: "Michael Moynihan",
    imageUrl: "./assets/images/candidates/Michael Moynihan_FF_Cork North West.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cork North West",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "42%"
  },
  {
    name: "Imelda Munster",
    imageUrl: "./assets/images/candidates/Imelda_Munster_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Louth",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Jennifer Murnane O'Connor",
    imageUrl: "./assets/images/candidates/Jennifer Murnane O_Connor_FF_Carlow–Kilkenny.jpg",
    partyName: "Fianna Fáil",
    constituency: "Carlow Kilkenny",
    score: "./assets/images/positive.jpg",
    partyScore: "42%"
  },
  {
    name: "Catherine Murphy",
    imageUrl: "./assets/images/candidates/Catherine_Murphy_SD.jpg",
    partyName: "Social Democrats",
    constituency: "Kildare North",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "50%"
  },
  {
    name: "Paul Murphy",
    imageUrl: "./assets/images/candidates/Murphy, Paul.jfif",
    partyName: "Solidarity - People Before Profit",
    constituency: "Dublin South West",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "20%"
  },
  {
    name: "Verona Murphy",
    imageUrl: "./assets/images/candidates/Verona_Murphy_Ind.jpg",
    partyName: "Independent",
    constituency: "Wexford",
    score: "./assets/images/did_not_vote.jpg",
    partyScore: "28%"
  },
  {
    name: "Johnny Mythen",
    imageUrl: "./assets/images/candidates/Johnny_Mythen_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Wexford",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Ged Nash",
    imageUrl: "./assets/images/candidates/Ged Nash_Lab_Louth.jpg",
    partyName: "Labour Party",
    constituency: "Louth",
    score: "./assets/images/positive.jpg",
    partyScore: "71%"
  },
  {
    name: "Denis Naughten",
    imageUrl: "./assets/images/candidates/Denis_Naughten_Ind.png",
    partyName: "Independent",
    constituency: "Roscommon Galway",
    score: "./assets/images/positive.jpg",
    partyScore: "28%"
  },
  {
    name: "Hildegarde Naughton",
    imageUrl: "./assets/images/candidates/Hildegarde Naughton_FG_Galway West.jpg",
    partyName: "Fine Gael",
    constituency: "Galway West",
    score: "./assets/images/positive.jpg",
    partyScore: "29%"
  },
  {
    name: "Carol Nolan",
    imageUrl: "./assets/images/candidates/Carol_Nolan_Ind.jpg",
    partyName: "Independent",
    constituency: "Laois Offaly",
    score: "./assets/images/positive.jpg",
    partyScore: "28%"
  },
  {
    name: "Malcolm Noonan",
    imageUrl: "./assets/images/candidates/Malcolm Noonan_GP_Carlow-Kilkenny.jpg",
    partyName: "Green Party",
    constituency: "Carlow Kilkenny",
    score: "./assets/images/positive.jpg",
    partyScore: "58%"
  },
  {
    name: "Darragh O'Brien",
    imageUrl: "./assets/images/candidates/Darragh O_Brien _FF_Dublin Fingal.jpg",
    partyName: "Fianna Fáil",
    constituency: "Dublin Fingal",
    score: "./assets/images/positive.jpg",
    partyScore: "42%"
  },
  {
    name: "Joe O'Brien",
    imageUrl: "./assets/images/candidates/Joe O_Brien_GP_Dublin Fingal.jpg",
    partyName: "Green Party",
    constituency: "Dublin Fingal",
    score: "./assets/images/positive.jpg",
    partyScore: "58%"
  },
  {
    name: "Cian O'Callaghan",
    imageUrl: "./assets/images/candidates/Cian_OCallaghan_SD.jpg",
    partyName: "Social Democrats",
    constituency: "Dublin Bay North",
    score: "./assets/images/positive.jpg",
    partyScore: "50%"
  },
  {
    name: "Jim O'Callaghan",
    imageUrl: "./assets/images/candidates/Jim O_Callaghan_FF_Dublin Bay South.jpg",
    partyName: "Fianna Fáil",
    constituency: "Dublin Bay South",
    score: "./assets/images/positive.jpg",
    partyScore: "42%"
  },
  {
    name: "James O'Connor",
    imageUrl: "./assets/images/candidates/James O_Connor_FF_Cork East.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cork East",
    score: "./assets/images/positive.jpg",
    partyScore: "42%"
  },
  {
    name: "Willie O'Dea",
    imageUrl: "./assets/images/candidates/Willie O_Dea_FF_Limerick City.jpg",
    partyName: "Fianna Fáil",
    constituency: "Limerick City",
    score: "./assets/images/positive.jpg",
    partyScore: "42%"
  },
  {
    name: "Kieran O'Donnell",
    imageUrl: "./assets/images/candidates/Kieran O_Donnell_FG_Limerick City.jpg",
    partyName: "Fine Gael",
    constituency: "Limerick City",
    score: "./assets/images/positive.jpg",
    partyScore: "29%"
  },
  {
    name: "Richard O'Donoghue",
    imageUrl: "./assets/images/candidates/Richard_ODonoghue_INd.jpg",
    partyName: "Independent",
    constituency: "Limerick County",
    score: "./assets/images/positive.jpg",
    partyScore: "28%"
  },
  {
    name: "Patrick O'Donovan",
    imageUrl: "./assets/images/candidates/Patrick O_Donovan_FG_Limerick County.jpg",
    partyName: "Fine Gael",
    constituency: "Limerick County",
    score: "./assets/images/positive.jpg",
    partyScore: "29%"
  },
  {
    name: "Fergus O'Dowd",
    imageUrl: "./assets/images/candidates/Fergus O_Dowd_FG_Louth.jpg",
    partyName: "Fine Gael",
    constituency: "Louth",
    score: "./assets/images/positive.jpg",
    partyScore: "29%"
  },
  {
    name: "Roderic O'Gorman",
    imageUrl: "./assets/images/candidates/Roderic O_Gorman_GP_Dublin West.jpg",
    partyName: "Green Party",
    constituency: "Dublin West",
    score: "./assets/images/positive.jpg",
    partyScore: "58%"
  },
  {
    name: "Louise O'Reilly",
    imageUrl: "./assets/images/candidates/Louise_OReilly_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin Fingal",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Darren O'Rourke",
    imageUrl: "./assets/images/candidates/Darren_ORourke_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Meath East",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Christopher O'Sullivan",
    imageUrl: "./assets/images/candidates/Christopher O_Sullivan_FF_Cork South West.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cork South West",
    score: "./assets/images/positive.jpg",
    partyScore: "42%"
  },
  {
    name: "Padraig O'Sullivan",
    imageUrl: "./assets/images/candidates/Pádraig O_Sullivan_FF_Cork North Central.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cork North Central",
    score: "./assets/images/positive.jpg",
    partyScore: "42%"
  },
  {
    name: "John Paul Phelan",
    imageUrl: "./assets/images/candidates/John Paul Phelan_FG_Carlow-Kilkenny.jpg",
    partyName: "Fine Gael",
    constituency: "Carlow Kilkenny",
    score: "./assets/images/positive.jpg",
    partyScore: "29%"
  },
  {
    name: "Thomas Pringle",
    imageUrl: "./assets/images/candidates/Thomas_Pringle_Ind.jpg",
    partyName: "Independent",
    constituency: "Donegal",
    score: "./assets/images/positive.jpg",
    partyScore: "28%"
  },
  {
    name: "Maurice Quinlivan",
    imageUrl: "./assets/images/candidates/Maurice_Quinlivan_SF.jpeg",
    partyName: "Sinn Féin",
    constituency: "Limerick City",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Anne Rabbitte",
    imageUrl: "./assets/images/candidates/Anne Rabbitte_FF_Galway East.jpg",
    partyName: "Fianna Fáil",
    constituency: "Galway East",
    score: "./assets/images/positive.jpg",
    partyScore: "42%"
  },
  {
    name: "Neale Richmond",
    imageUrl: "./assets/images/candidates/Neale Richmond_FG_Dublin Rathdown.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin Rathdown",
    score: "./assets/images/positive.jpg",
    partyScore: "29%"
  },
  {
    name: "Michael Ring",
    imageUrl: "./assets/images/candidates/Michael Ring_FG_Mayo.jpg",
    partyName: "Fine Gael",
    constituency: "Mayo",
    score: "./assets/images/positive.jpg",
    partyScore: "29%"
  },
  {
    name: "Eamon Ryan",
    imageUrl: "./assets/images/candidates/Eamon Ryan_GP_Dublin Bay South.jpg",
    partyName: "Green Party",
    constituency: "Dublin Bay South",
    score: "./assets/images/positive.jpg",
    partyScore: "58%"
  },
  {
    name: "Patricia Ryan",
    imageUrl: "./assets/images/candidates/Patricia_Ryan_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Kildare South",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Matt Shanahan",
    imageUrl: "./assets/images/candidates/Matt_Shanahan_Ind.jpg",
    partyName: "Independent",
    constituency: "Waterford",
    score: "./assets/images/positive.jpg",
    partyScore: "28%"
  },
  {
    name: "Sean Sherlock",
    imageUrl: "./assets/images/candidates/Sean Sherlock_Lab_Cork East.jpg",
    partyName: "Labour Party",
    constituency: "Cork East",
    score: "./assets/images/positive.jpg",
    partyScore: "71%"
  },
  {
    name: "Roisin Shortall",
    imageUrl: "./assets/images/candidates/Roisin_Shortall_SD.jpg",
    partyName: "Social Democrats",
    constituency: "Dublin North West",
    score: "./assets/images/positive.jpg",
    partyScore: "50%"
  },
  {
    name: "Brendan Smith",
    imageUrl: "./assets/images/candidates/Brendan Smith_FF_Cavan–Monaghan.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cavan Monaghan",
    score: "./assets/images/positive.jpg",
    partyScore: "42%"
  },
  {
    name: "Brid Smith",
    imageUrl: "./assets/images/candidates/Brid_Smith_PBP.jpg",
    partyName: "Solidarity - People Before Profit",
    constituency: "Dublin South Central",
    score: "./assets/images/positive.jpg",
    partyScore: "20%"
  },
  {
    name: "Duncan Smith",
    imageUrl: "./assets/images/candidates/Duncan Smith_Lab_Dublin Fingal.jpg",
    partyName: "Labour Party",
    constituency: "Dublin Fingal",
    score: "./assets/images/positive.jpg",
    partyScore: "71%"
  },
  {
    name: "Niamh Smyth",
    imageUrl: "./assets/images/candidates/Niamh Smyth_FF_Cavan–Monaghan.jpg",
    partyName: "Fianna Fáil",
    constituency: "Cavan Monaghan",
    score: "./assets/images/positive.jpg",
    partyScore: "42%"
  },
  {
    name: "Ossian Smyth",
    imageUrl: "./assets/images/candidates/Ossian Smyth_GP_Dun Laoghaire.jpg",
    partyName: "Green Party",
    constituency: "Dún Laoghaire",
    score: "./assets/images/positive.jpg",
    partyScore: "58%"
  },
  {
    name: "Brian Stanley",
    imageUrl: "./assets/images/candidates/Brian_Stanley_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Laois Offaly",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "David Stanton",
    imageUrl: "./assets/images/candidates/David Stanton_FG_Cork East.jpg",
    partyName: "Fine Gael",
    constituency: "Cork East",
    score: "./assets/images/positive.jpg",
    partyScore: "29%"
  },
  {
    name: "Robert Troy",
    imageUrl: "./assets/images/candidates/Robert Troy_FF_Longford-Westmeath.jpg",
    partyName: "Fianna Fáil",
    constituency: "Longford Westmeath",
    score: "./assets/images/positive.jpg",
    partyScore: "42%"
  },
  {
    name: "Pauline Tully",
    imageUrl: "./assets/images/candidates/Pauline_Tully_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Cavan Monaghan",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Peadar Tóibín",
    imageUrl: "./assets/images/candidates/Peadar_Toibin_Aontu.jpg",
    partyName: "Aontú",
    constituency: "Meath West",
    score: "./assets/images/positive.jpg",
    partyScore: "100%"
  },
  {
    name: "Leo Varadkar",
    imageUrl: "./assets/images/candidates/Leo Varadkar_FG_Dublin West.jpg",
    partyName: "Fine Gael",
    constituency: "Dublin West",
    score: "./assets/images/positive.jpg",
    partyScore: "29%"
  },
  {
    name: "Mark Ward",
    imageUrl: "./assets/images/candidates/Mark_Ward_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin Mid West",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Jennifer Whitmore",
    imageUrl: "./assets/images/candidates/Jennifer_Whitmore_SD.jpg",
    partyName: "Social Democrats",
    constituency: "Wicklow",
    score: "./assets/images/positive.jpg",
    partyScore: "50%"
  },
  {
    name: "Violet-Anne Wynne",
    imageUrl: "./assets/images/candidates/Wynne, Violet-Anne.jfif",
    partyName: "Sinn Féin",
    constituency: "Clare",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Eoin Ó Broin",
    imageUrl: "./assets/images/candidates/Eoin_OBroin_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin Mid West",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Marc Ó Cathasaigh",
    imageUrl: "./assets/images/candidates/Marc O_Cathasaigh_GP_Waterford.jpg",
    partyName: "Green Party",
    constituency: "Waterford",
    score: "./assets/images/positive.jpg",
    partyScore: "58%"
  },
  {
    name: "Eamon Ó CuÍv",
    imageUrl: "./assets/images/candidates/Éamon Ó Cuív_FF_Galway West.jpg",
    partyName: "Fianna Fáil",
    constituency: "Galway West",
    score: "./assets/images/positive.jpg",
    partyScore: "42%"
  },
  {
    name: "Donnchadh Ó Laoghaire",
    imageUrl: "./assets/images/candidates/Donnchadh_OLaoghaire_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Cork South Central",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Ruairi Ó Murchú",
    imageUrl: "./assets/images/candidates/Ruairi_OMurchu_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Louth",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Aodhan Ó Ríordáin",
    imageUrl: "./assets/images/candidates/Aodhán Ó Ríordáin_Lab_Dublin Bay North.jpg",
    partyName: "Labour Party",
    constituency: "Dublin Bay North",
    score: "./assets/images/positive.jpg",
    partyScore: "71%"
  },
  {
    name: "Aengus Ó Snodaigh",
    imageUrl: "./assets/images/candidates/Aengus_OSnodaigh_SF.jpg",
    partyName: "Sinn Féin",
    constituency: "Dublin South Central",
    score: "./assets/images/positive.jpg",
    partyScore: "43%"
  },
  {
    name: "Ivana Bacik",
    imageUrl: "./assets/images/candidates/Bacik, Ivana_Lab.png",
    partyName: "Labour Party",
    constituency: "Dublin Bay South",
    score: "./assets/images/positive.jpg",
    partyScore: "71%"
  },
  {
    name: "Seán Ó Fearghaíl",
    imageUrl: "./assets/images/candidates/O Fearghail, Sean_FF.png",
    partyName: "Fianna Fáil",
    constituency: "Kildare South",
    score: "./assets/images/positive.jpg",
    partyScore: "42%"
  }
 ]