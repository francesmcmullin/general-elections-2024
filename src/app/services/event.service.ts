import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  getEvents() {
    return EVENTS;
  }

  getEvent(name: string) {
    return EVENTS.find((event) => event.name === name);
  }

  constructor() {}
}

const EVENTS = [
  {
    name: 'Alan Dillon',
    comparison: false,
    imageUrl: './assets/images/candidates/Alan Dillon_FG_Mayo.jpg',
    constituency: 'Mayo',
    party: {
      partyName: 'Fine Gael',
      partyScore: '2%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Barry Cowen',
    comparison: false,
    imageUrl: './assets/images/candidates/Barry Cowen_FF_Laois–Offaly.jpg',
    constituency: 'Laois Offaly',
    party: {
      partyName: 'Fianna Fáil',
      partyScore: '64%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 15,
      negativeVotes: 4,
      absentVotes: 1,
      notTdVotes: 1,
    },
    score: '79%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Cathal Berry',
    comparison: false,
    imageUrl: './assets/images/candidates/Cathal_Berry_Ind.jpg',
    constituency: 'Kildare South',
    party: {
      partyName: 'Independent',
      partyScore: '41%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Cathal Crowe',
    comparison: false,
    imageUrl: './assets/images/candidates/Cathal Crowe_FF_Clare.jpg',
    constituency: 'Clare',
    party: {
      partyName: 'Fianna Fáil',
      partyScore: '64%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Catherine Connolly',
    comparison: false,
    imageUrl: './assets/images/candidates/Connolly, Catherine.jfif',
    constituency: 'Galway West',
    party: {
      partyName: 'Independent',
      partyScore: '41%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 3,
      negativeVotes: 0,
      absentVotes: 4,
      notTdVotes: 14,
    },
    score: '100%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Chris Andrews',
    comparison: false,
    imageUrl: './assets/images/candidates/Chris_Andrews_SF.jpg',
    constituency: 'Dublin Bay South',
    party: {
      partyName: 'Sinn Féin',
      partyScore: '69%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Ciaran Cannon',
    comparison: false,
    imageUrl: './assets/images/candidates/Ciarán Cannon_FG_Galway East.jpg',
    constituency: 'Galway East',
    party: {
      partyName: 'Fine Gael',
      partyScore: '2%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 0,
      negativeVotes: 12,
      absentVotes: 8,
      notTdVotes: 1,
    },
    score: '0%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Colm Brophy',
    comparison: false,
    imageUrl: './assets/images/candidates/Colm Brophy_FG_Dublin South West.jpg',
    constituency: 'Dublin South West',
    party: {
      partyName: 'Fine Gael',
      partyScore: '2%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 0,
      negativeVotes: 6,
      absentVotes: 1,
      notTdVotes: 14,
    },
    score: '0%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Colm Burke',
    comparison: false,
    imageUrl: './assets/images/candidates/Colm Burke_FG_Cork North Central.jpg',
    constituency: 'Cork North Central',
    party: {
      partyName: 'Fine Gael',
      partyScore: '2%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Cormac Devlin',
    comparison: false,
    imageUrl: './assets/images/candidates/Cormac Devlin_FF_Dun Laoghaire.jpg',
    constituency: 'Dún Laoghaire',
    party: {
      partyName: 'Fianna Fáil',
      partyScore: '64%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Dara Calleary',
    comparison: false,
    imageUrl: './assets/images/candidates/Dara Calleary_FF_Mayo.jpg',
    constituency: 'Mayo',
    party: {
      partyName: 'Fianna Fáil',
      partyScore: '64%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 12,
      negativeVotes: 4,
      absentVotes: 4,
      notTdVotes: 1,
    },
    score: '75%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'David Cullinane',
    comparison: false,
    imageUrl: './assets/images/candidates/David_Cullinane_SF.jpg',
    constituency: 'Waterford',
    party: {
      partyName: 'Sinn Féin',
      partyScore: '69%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 2,
      negativeVotes: 0,
      absentVotes: 5,
      notTdVotes: 14,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Holly Cairns',
    comparison: false,
    imageUrl: './assets/images/candidates/Holly_Cairns_SD.jpg',
    constituency: 'Cork South West',
    party: {
      partyName: 'Social Democrats',
      partyScore: '100%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Jack Chambers',
    comparison: false,
    imageUrl: './assets/images/candidates/Jack Chambers_FF_Dublin West.jpg',
    constituency: 'Dublin West',
    party: {
      partyName: 'Fianna Fáil',
      partyScore: '64%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 2,
      negativeVotes: 4,
      absentVotes: 1,
      notTdVotes: 14,
    },
    score: '33%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Jackie Cahill',
    comparison: false,
    imageUrl: './assets/images/candidates/Jackie Cahill_FF_Tipperary.jpg',
    constituency: 'Tipperary',
    party: {
      partyName: 'Fianna Fáil',
      partyScore: '64%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 2,
      negativeVotes: 3,
      absentVotes: 2,
      notTdVotes: 14,
    },
    score: '40%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'James Browne',
    comparison: false,
    imageUrl: './assets/images/candidates/James Browne_FF_Wexford.jpg',
    constituency: 'Wexford',
    party: {
      partyName: 'Fianna Fáil',
      partyScore: '64%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 3,
      negativeVotes: 4,
      absentVotes: 0,
      notTdVotes: 14,
    },
    score: '43%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Jennifer Carroll MacNeill',
    comparison: false,
    imageUrl:
      './assets/images/candidates/Jennifer Carroll MacNeill_FG_Dún Laoghaire.jpg',
    constituency: 'Dún Laoghaire',
    party: {
      partyName: 'Fine Gael',
      partyScore: '2%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Joan Collins',
    comparison: false,
    imageUrl: './assets/images/candidates/Collins, Joan.png',
    constituency: 'Dublin South Central',
    party: {
      partyName: 'Independents 4 Change',
      partyScore: '100%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 10,
      negativeVotes: 0,
      absentVotes: 10,
      notTdVotes: 1,
    },
    score: '100%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Joe Carey',
    comparison: false,
    imageUrl: './assets/images/candidates/Joe Carey_FG_Clare.jpg',
    constituency: 'Clare',
    party: {
      partyName: 'Fine Gael',
      partyScore: '2%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 0,
      negativeVotes: 20,
      absentVotes: 0,
      notTdVotes: 1,
    },
    score: '0%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'John Brady',
    comparison: false,
    imageUrl: './assets/images/candidates/John_Brady_TD.jpg',
    constituency: 'Wicklow',
    party: {
      partyName: 'Sinn Féin',
      partyScore: '69%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 3,
      negativeVotes: 4,
      absentVotes: 0,
      notTdVotes: 14,
    },
    score: '43%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Martin Browne',
    comparison: false,
    imageUrl: './assets/images/candidates/Martin_Browne_SF.jpg',
    constituency: 'Tipperary',
    party: {
      partyName: 'Sinn Féin',
      partyScore: '69%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Mary Butler',
    comparison: false,
    imageUrl: './assets/images/candidates/Mary Butler_FF_Waterford.jpg',
    constituency: 'Waterford',
    party: {
      partyName: 'Fianna Fáil',
      partyScore: '64%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 1,
      negativeVotes: 4,
      absentVotes: 2,
      notTdVotes: 14,
    },
    score: '20%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Matt Carthy',
    comparison: false,
    imageUrl: './assets/images/candidates/Matt_Carthy_SF.png',
    constituency: 'Cavan Monaghan',
    party: {
      partyName: 'Sinn Féin',
      partyScore: '69%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Michael Collins',
    comparison: false,
    imageUrl: './assets/images/candidates/Michael_Collins_Ind.jpg',
    constituency: 'Cork South West',
    party: {
      partyName: 'Independent',
      partyScore: '41%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 2,
      negativeVotes: 2,
      absentVotes: 4,
      notTdVotes: 13,
    },
    score: '50%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Michael Creed',
    comparison: false,
    imageUrl: './assets/images/candidates/Michael Creed_FG_Cork North West.jpg',
    constituency: 'Cork North West',
    party: {
      partyName: 'Fine Gael',
      partyScore: '2%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 0,
      negativeVotes: 15,
      absentVotes: 5,
      notTdVotes: 1,
    },
    score: '0%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Mick Barry',
    comparison: false,
    imageUrl: './assets/images/candidates/Mick_Barry_PBP.jpg',
    constituency: 'Cork North Central',
    party: {
      partyName: 'Solidarity - People Before Profit',
      partyScore: '100%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 6,
      negativeVotes: 0,
      absentVotes: 1,
      notTdVotes: 14,
    },
    score: '100%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Niall Collins',
    comparison: false,
    imageUrl: './assets/images/candidates/Niall Collins_FF_Limerick County.jpg',
    constituency: 'Limerick County',
    party: {
      partyName: 'Fianna Fáil',
      partyScore: '64%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 7,
      negativeVotes: 0,
      absentVotes: 13,
      notTdVotes: 1,
    },
    score: '100%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Pa Daly',
    comparison: false,
    imageUrl: './assets/images/candidates/Pa_Daly_SF.jpg',
    constituency: 'Kerry',
    party: {
      partyName: 'Sinn Féin',
      partyScore: '69%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Pat Buckley',
    comparison: false,
    imageUrl: './assets/images/candidates/Pat_Buckley_SF.jpg',
    constituency: 'Cork East',
    party: {
      partyName: 'Sinn Féin',
      partyScore: '69%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 3,
      negativeVotes: 3,
      absentVotes: 1,
      notTdVotes: 14,
    },
    score: '50%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Patrick Costello',
    comparison: false,
    imageUrl:
      './assets/images/candidates/Patrick Costello_GP_Dublin South Central.jpg',
    constituency: 'Dublin South Central',
    party: {
      partyName: 'Green Party',
      partyScore: '100%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Peter Burke',
    comparison: false,
    imageUrl:
      './assets/images/candidates/Peter Burke_FG_Longford-Westmeath.jpg',
    constituency: 'Longford Westmeath',
    party: {
      partyName: 'Fine Gael',
      partyScore: '2%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 0,
      negativeVotes: 7,
      absentVotes: 0,
      notTdVotes: 14,
    },
    score: '0%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Reada Cronin',
    comparison: false,
    imageUrl: './assets/images/candidates/Reada_Cronin_SF.jpg',
    constituency: 'Kildare North',
    party: {
      partyName: 'Sinn Féin',
      partyScore: '69%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Richard Boyd Barrett',
    comparison: false,
    imageUrl: './assets/images/candidates/Richard_BoydBarrett_PBP.jpg',
    constituency: 'Dún Laoghaire',
    party: {
      partyName: 'Solidarity - People Before Profit',
      partyScore: '100%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 16,
      negativeVotes: 0,
      absentVotes: 4,
      notTdVotes: 1,
    },
    score: '100%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Richard Bruton',
    comparison: false,
    imageUrl:
      './assets/images/candidates/Richard Bruton_FG_Dublin Bay North.jpg',
    constituency: 'Dublin Bay North',
    party: {
      partyName: 'Fine Gael',
      partyScore: '2%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 1,
      negativeVotes: 3,
      absentVotes: 17,
      notTdVotes: 0,
    },
    score: '25%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Rose Conway-Walsh',
    comparison: false,
    imageUrl: './assets/images/candidates/Rose_ConwayWalsh_SF.jpg',
    constituency: 'Mayo',
    party: {
      partyName: 'Sinn Féin',
      partyScore: '69%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Sean Canney',
    comparison: false,
    imageUrl: './assets/images/candidates/Sean_Canney_Ind.jpg',
    constituency: 'Galway East',
    party: {
      partyName: 'Independent',
      partyScore: '41%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 0,
      negativeVotes: 4,
      absentVotes: 3,
      notTdVotes: 14,
    },
    score: '0%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Sean Crowe',
    comparison: false,
    imageUrl: './assets/images/candidates/Sean_Crowe_SF.jpg',
    constituency: 'Dublin South West',
    party: {
      partyName: 'Sinn Féin',
      partyScore: '69%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 6,
      negativeVotes: 4,
      absentVotes: 11,
      notTdVotes: 0,
    },
    score: '60%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Simon Coveney',
    comparison: false,
    imageUrl:
      './assets/images/candidates/Simon Coveney_FG_Cork South Central.jpg',
    constituency: 'Cork South Central',
    party: {
      partyName: 'Fine Gael',
      partyScore: '2%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 0,
      negativeVotes: 8,
      absentVotes: 13,
      notTdVotes: 0,
    },
    score: '0%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Sorca Clarke',
    comparison: false,
    imageUrl: './assets/images/candidates/Sorca_Clarke_SF.jpg',
    constituency: 'Longford Westmeath',
    party: {
      partyName: 'Sinn Féin',
      partyScore: '69%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Thomas Byrne',
    comparison: false,
    imageUrl: './assets/images/candidates/Thomas Byrne_FF_Meath East.jpg',
    constituency: 'Meath East',
    party: {
      partyName: 'Fianna Fáil',
      partyScore: '64%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 3,
      negativeVotes: 0,
      absentVotes: 4,
      notTdVotes: 14,
    },
    score: '100%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Pearse Doherty',
    comparison: false,
    imageUrl: './assets/images/candidates/Pearse_Doherty_SF.jpg',
    constituency: 'Donegal',
    party: {
      partyName: 'Sinn Féin',
      partyScore: '69%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 14,
      negativeVotes: 0,
      absentVotes: 6,
      notTdVotes: 1,
    },
    score: '100%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Paul Donnelly',
    comparison: false,
    imageUrl: './assets/images/candidates/Paul_Donnelly_SF.jpg',
    constituency: 'Dublin West',
    party: {
      partyName: 'Sinn Féin',
      partyScore: '69%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Stephen Donnelly',
    comparison: false,
    imageUrl: './assets/images/candidates/Stephen Donnelly_FF_Wicklow.jpg',
    constituency: 'Wicklow',
    party: {
      partyName: 'Fianna Fáil',
      partyScore: '64%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 6,
      negativeVotes: 4,
      absentVotes: 10,
      notTdVotes: 1,
    },
    score: '60%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Paschal Donohoe',
    comparison: false,
    imageUrl:
      './assets/images/candidates/Paschal Donohoe_FG_Dublin Central.jpg',
    constituency: 'Dublin Central',
    party: {
      partyName: 'Fine Gael',
      partyScore: '2%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 0,
      negativeVotes: 8,
      absentVotes: 12,
      notTdVotes: 1,
    },
    score: '0%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Francis Noel Duffy',
    comparison: false,
    imageUrl:
      './assets/images/candidates/Francis Noel Duffy_GP_Dublin South-West.jpg',
    constituency: 'Dublin South West',
    party: {
      partyName: 'Green Party',
      partyScore: '100%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Bernard J Durkan',
    comparison: false,
    imageUrl: './assets/images/candidates/Bernard Durkan_FG_Kildare North.jpg',
    constituency: 'Kildare North',
    party: {
      partyName: 'Fine Gael',
      partyScore: '2%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 1,
      negativeVotes: 20,
      absentVotes: 0,
      notTdVotes: 0,
    },
    score: '5%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Dessie Ellis',
    comparison: false,
    imageUrl: './assets/images/candidates/Dessie_Ellis_SF.jpg',
    constituency: 'Dublin North West',
    party: {
      partyName: 'Sinn Féin',
      partyScore: '69%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 15,
      negativeVotes: 0,
      absentVotes: 5,
      notTdVotes: 1,
    },
    score: '100%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Damien English',
    comparison: false,
    imageUrl: './assets/images/candidates/Damien English_FG_Meath West.jpg',
    constituency: 'Meath West',
    party: {
      partyName: 'Fine Gael',
      partyScore: '2%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 0,
      negativeVotes: 5,
      absentVotes: 16,
      notTdVotes: 0,
    },
    score: '0%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Alan Farrell',
    comparison: false,
    imageUrl: './assets/images/candidates/Alan Farrell_FG_Dublin Fingal.jpg',
    constituency: 'Dublin Fingal',
    party: {
      partyName: 'Fine Gael',
      partyScore: '2%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 0,
      negativeVotes: 18,
      absentVotes: 2,
      notTdVotes: 1,
    },
    score: '0%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Mairead Farrell',
    comparison: false,
    imageUrl: './assets/images/candidates/Mairead_Farrell_SF.jpg',
    constituency: 'Galway West',
    party: {
      partyName: 'Sinn Féin',
      partyScore: '69%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Frankie Feighan',
    comparison: false,
    imageUrl: './assets/images/candidates/Frank Feighan_FG_Sligo-Leitrim.jpg',
    constituency: 'Sligo Leitrim',
    party: {
      partyName: 'Fine Gael',
      partyScore: '2%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 0,
      negativeVotes: 12,
      absentVotes: 1,
      notTdVotes: 8,
    },
    score: '0%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Michael Fitzmaurice',
    comparison: false,
    imageUrl: './assets/images/candidates/Fitzmaurice, Michael.jfif',
    constituency: 'Roscommon Galway',
    party: {
      partyName: 'Independent',
      partyScore: '41%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 1,
      negativeVotes: 3,
      absentVotes: 16,
      notTdVotes: 1,
    },
    score: '25%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Peter Fitzpatrick',
    comparison: false,
    imageUrl: './assets/images/candidates/Peter_Fitzpatrick_Ind.jpg',
    constituency: 'Louth',
    party: {
      partyName: 'Independent',
      partyScore: '41%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 1,
      negativeVotes: 17,
      absentVotes: 2,
      notTdVotes: 1,
    },
    score: '6%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Joe Flaherty',
    comparison: false,
    imageUrl:
      './assets/images/candidates/Joe Flaherty_FF_Longford-Westmeath.jpg',
    constituency: 'Longford Westmeath',
    party: {
      partyName: 'Fianna Fáil',
      partyScore: '64%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Charles Flanagan',
    comparison: false,
    imageUrl: './assets/images/candidates/Charlie Flanagan_FG_Laois-Offaly.jpg',
    constituency: 'Laois Offaly',
    party: {
      partyName: 'Fine Gael',
      partyScore: '2%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 2,
      absentVotes: 18,
      notTdVotes: 1,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Sean Fleming',
    comparison: false,
    imageUrl: './assets/images/candidates/Seán Fleming_FF_Laois–Offaly.jpg',
    constituency: 'Laois Offaly',
    party: {
      partyName: 'Fianna Fáil',
      partyScore: '64%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 7,
      negativeVotes: 1,
      absentVotes: 13,
      notTdVotes: 0,
    },
    score: '88%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Norma Foley',
    comparison: false,
    imageUrl: './assets/images/candidates/Norma Foley_FF_Kerry.jpg',
    constituency: 'Kerry',
    party: {
      partyName: 'Fianna Fáil',
      partyScore: '64%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Kathleen Funchion',
    comparison: false,
    imageUrl: './assets/images/candidates/Kathleen_Funchion_SF.jpg',
    constituency: 'Carlow Kilkenny',
    party: {
      partyName: 'Sinn Féin',
      partyScore: '69%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 2,
      negativeVotes: 0,
      absentVotes: 5,
      notTdVotes: 14,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Gary Gannon',
    comparison: false,
    imageUrl: './assets/images/candidates/Gary_Gannon_SD.jpeg',
    constituency: 'Dublin Central',
    party: {
      partyName: 'Social Democrats',
      partyScore: '100%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Thomas Gould',
    comparison: false,
    imageUrl: './assets/images/candidates/Gould, Thomas.jfif',
    constituency: 'Cork North Central',
    party: {
      partyName: 'Sinn Féin',
      partyScore: '69%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Noel Grealish',
    comparison: false,
    imageUrl: './assets/images/candidates/Grealish, Noel.jfif',
    constituency: 'Galway West',
    party: {
      partyName: 'Independent',
      partyScore: '41%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 10,
      negativeVotes: 6,
      absentVotes: 5,
      notTdVotes: 0,
    },
    score: '63%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Brendan Griffin',
    comparison: false,
    imageUrl: './assets/images/candidates/Brendan Griffin_FG_Kerry.jpg',
    constituency: 'Kerry',
    party: {
      partyName: 'Fine Gael',
      partyScore: '2%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 0,
      negativeVotes: 18,
      absentVotes: 2,
      notTdVotes: 1,
    },
    score: '0%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Johnny Guirke',
    comparison: false,
    imageUrl: './assets/images/candidates/Johnny_Guirke_SF.jpg',
    constituency: 'Meath West',
    party: {
      partyName: 'Sinn Féin',
      partyScore: '69%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Marian Harkin',
    comparison: false,
    imageUrl: './assets/images/candidates/Marian_Harkin_Ind.jpg',
    constituency: 'Sligo Leitrim',
    party: {
      partyName: 'Independent',
      partyScore: '41%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 1,
      notTdVotes: 20,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Simon Harris',
    comparison: false,
    imageUrl: './assets/images/candidates/Simon Harris_FG_Wicklow.jpg',
    constituency: 'Wicklow',
    party: {
      partyName: 'Fine Gael',
      partyScore: '2%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 0,
      negativeVotes: 16,
      absentVotes: 4,
      notTdVotes: 1,
    },
    score: '0%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Sean Haughey',
    comparison: false,
    imageUrl: './assets/images/candidates/Seán Haughey_FF_Dublin Bay North.jpg',
    constituency: 'Dublin Bay North',
    party: {
      partyName: 'Fianna Fáil',
      partyScore: '64%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 3,
      negativeVotes: 5,
      absentVotes: 0,
      notTdVotes: 13,
    },
    score: '38%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Danny Healy-Rae',
    comparison: false,
    imageUrl: './assets/images/candidates/Danny_HealyRae_Ind.jpg',
    constituency: 'Kerry',
    party: {
      partyName: 'Independent',
      partyScore: '41%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 1,
      negativeVotes: 4,
      absentVotes: 2,
      notTdVotes: 14,
    },
    score: '20%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Michael Healy-Rae',
    comparison: false,
    imageUrl: './assets/images/candidates/Michael_HealyRae_Ind.jpg',
    constituency: 'Kerry',
    party: {
      partyName: 'Independent',
      partyScore: '41%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 1,
      negativeVotes: 4,
      absentVotes: 15,
      notTdVotes: 1,
    },
    score: '20%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Martin Heydon',
    comparison: false,
    imageUrl: './assets/images/candidates/Martin Heydon_FG_Kildare South.jpg',
    constituency: 'Kildare South',
    party: {
      partyName: 'Fine Gael',
      partyScore: '2%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 0,
      negativeVotes: 18,
      absentVotes: 2,
      notTdVotes: 1,
    },
    score: '0%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Emer Higgins',
    comparison: false,
    imageUrl: './assets/images/candidates/Emer Higgins_FG_Dublin Mid West.jpg',
    constituency: 'Dublin Mid West',
    party: {
      partyName: 'Fine Gael',
      partyScore: '2%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Neasa Hourigan',
    comparison: false,
    imageUrl: './assets/images/candidates/Neasa Hourigan_GP_Dublin Central.jpg',
    constituency: 'Dublin Central',
    party: {
      partyName: 'Green Party',
      partyScore: '100%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Brendan Howlin',
    comparison: false,
    imageUrl: './assets/images/candidates/Brendan Howlin_Lab_Wexford.jpg',
    constituency: 'Wexford',
    party: {
      partyName: 'Labour Party',
      partyScore: '48%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 6,
      negativeVotes: 2,
      absentVotes: 13,
      notTdVotes: 0,
    },
    score: '75%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Heather Humphreys',
    comparison: false,
    imageUrl:
      './assets/images/candidates/Heather Humphreys_FG_Cavan-Monaghan.jpg',
    constituency: 'Cavan Monaghan',
    party: {
      partyName: 'Fine Gael',
      partyScore: '2%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 0,
      negativeVotes: 11,
      absentVotes: 9,
      notTdVotes: 1,
    },
    score: '0%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Paul Kehoe',
    comparison: false,
    imageUrl: './assets/images/candidates/Paul Kehoe_FG_Wexford.jpg',
    constituency: 'Wexford',
    party: {
      partyName: 'Fine Gael',
      partyScore: '2%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 1,
      negativeVotes: 10,
      absentVotes: 10,
      notTdVotes: 0,
    },
    score: '9%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Alan Kelly',
    comparison: false,
    imageUrl: './assets/images/candidates/Alan Kelly_Lab_Tipperary.jpg',
    constituency: 'Tipperary',
    party: {
      partyName: 'Labour Party',
      partyScore: '48%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 3,
      negativeVotes: 3,
      absentVotes: 14,
      notTdVotes: 1,
    },
    score: '50%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Gino Kenny',
    comparison: false,
    imageUrl: './assets/images/candidates/Gino_Kenny_PBP.jpg',
    constituency: 'Dublin Mid West',
    party: {
      partyName: 'Solidarity - People Before Profit',
      partyScore: '100%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 7,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 14,
    },
    score: '100%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Martin Kenny',
    comparison: false,
    imageUrl: './assets/images/candidates/Martin_Kenny_SF.jpg',
    constituency: 'Sligo Leitrim',
    party: {
      partyName: 'Sinn Féin',
      partyScore: '69%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 3,
      negativeVotes: 4,
      absentVotes: 0,
      notTdVotes: 14,
    },
    score: '43%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Claire Kerrane',
    comparison: false,
    imageUrl: './assets/images/candidates/Claire_Kerrane_SF.jpg',
    constituency: 'Roscommon Galway',
    party: {
      partyName: 'Sinn Féin',
      partyScore: '69%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'John Lahart',
    comparison: false,
    imageUrl: './assets/images/candidates/John Lahart_FF_Dublin South West.jpg',
    constituency: 'Dublin South West',
    party: {
      partyName: 'Fianna Fáil',
      partyScore: '64%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 2,
      negativeVotes: 4,
      absentVotes: 1,
      notTdVotes: 14,
    },
    score: '33%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'James Lawless',
    comparison: false,
    imageUrl: './assets/images/candidates/James Lawless_FF_Kildare North.jpg',
    constituency: 'Kildare North',
    party: {
      partyName: 'Fianna Fáil',
      partyScore: '64%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 3,
      negativeVotes: 3,
      absentVotes: 1,
      notTdVotes: 14,
    },
    score: '50%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Brian Leddin',
    comparison: false,
    imageUrl: './assets/images/candidates/Brian Leddin_GP_Limerick City.jpg',
    constituency: 'Limerick City',
    party: {
      partyName: 'Green Party',
      partyScore: '100%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Michael Lowry',
    comparison: false,
    imageUrl: './assets/images/candidates/Michael_Lowry_Ind.jpg',
    constituency: 'Tipperary',
    party: {
      partyName: 'Independent',
      partyScore: '41%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 0,
      negativeVotes: 3,
      absentVotes: 18,
      notTdVotes: 0,
    },
    score: '0%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Padraig Mac Lochlainn',
    comparison: false,
    imageUrl: './assets/images/candidates/Padraig_McLochlainn_SF.jpg',
    constituency: 'Donegal',
    party: {
      partyName: 'Sinn Féin',
      partyScore: '69%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 11,
      negativeVotes: 0,
      absentVotes: 2,
      notTdVotes: 8,
    },
    score: '100%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Marc MacSharry',
    comparison: false,
    imageUrl: './assets/images/candidates/Marc MacSharry_FF_Sligo-Leitim.jpg',
    constituency: 'Sligo Leitrim',
    party: {
      partyName: 'Fianna Fáil',
      partyScore: '64%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 3,
      negativeVotes: 0,
      absentVotes: 4,
      notTdVotes: 14,
    },
    score: '100%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Josepha Madigan',
    comparison: false,
    imageUrl:
      './assets/images/candidates/Josepha Madigan_FG_Dublin Rathdown.jpg',
    constituency: 'Dublin Rathdown',
    party: {
      partyName: 'Fine Gael',
      partyScore: '2%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 0,
      negativeVotes: 7,
      absentVotes: 0,
      notTdVotes: 14,
    },
    score: '0%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Catherine Martin',
    comparison: false,
    imageUrl:
      './assets/images/candidates/Catherine Martin_GP_Dublin Rathdown.jpg',
    constituency: 'Dublin Rathdown',
    party: {
      partyName: 'Green Party',
      partyScore: '100%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 6,
      negativeVotes: 0,
      absentVotes: 1,
      notTdVotes: 14,
    },
    score: '100%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Micheal Martin',
    comparison: false,
    imageUrl:
      './assets/images/candidates/Micheál Martin_FF_Cork South Central.jpg',
    constituency: 'Cork South Central',
    party: {
      partyName: 'Fianna Fáil',
      partyScore: '64%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 2,
      negativeVotes: 0,
      absentVotes: 19,
      notTdVotes: 0,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Steven Matthews',
    comparison: false,
    imageUrl: './assets/images/candidates/Steven Matthews_GP_Wicklow.jpg',
    constituency: 'Wicklow',
    party: {
      partyName: 'Green Party',
      partyScore: '100%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Paul McAuliffe',
    comparison: false,
    imageUrl:
      './assets/images/candidates/Paul McAuliffe_FF_Dublin North West.jpg',
    constituency: 'Dublin North West',
    party: {
      partyName: 'Fianna Fáil',
      partyScore: '64%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Charlie McConalogue',
    comparison: false,
    imageUrl: './assets/images/candidates/Charlie McConalogue_FF_Donegal.jpg',
    constituency: 'Donegal',
    party: {
      partyName: 'Fianna Fáil',
      partyScore: '64%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 5,
      negativeVotes: 4,
      absentVotes: 11,
      notTdVotes: 1,
    },
    score: '56%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Mary Lou McDonald',
    comparison: false,
    imageUrl: './assets/images/candidates/MaryLou_McDonald_SF.jpg',
    constituency: 'Dublin Central',
    party: {
      partyName: 'Sinn Féin',
      partyScore: '69%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 9,
      negativeVotes: 0,
      absentVotes: 11,
      notTdVotes: 1,
    },
    score: '100%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Helen McEntee',
    comparison: false,
    imageUrl: './assets/images/candidates/Helen McEntee_FG_Meath East.jpg',
    constituency: 'Meath East',
    party: {
      partyName: 'Fine Gael',
      partyScore: '2%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 0,
      negativeVotes: 19,
      absentVotes: 1,
      notTdVotes: 1,
    },
    score: '0%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Mattie McGrath',
    comparison: false,
    imageUrl: './assets/images/candidates/Mattie_McGrath_Ind.jpg',
    constituency: 'Tipperary',
    party: {
      partyName: 'Independent',
      partyScore: '41%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 12,
      negativeVotes: 4,
      absentVotes: 4,
      notTdVotes: 1,
    },
    score: '75%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Michael McGrath',
    comparison: false,
    imageUrl:
      './assets/images/candidates/Michael McGrath_FF_Cork South Central.jpg',
    constituency: 'Cork South Central',
    party: {
      partyName: 'Fianna Fáil',
      partyScore: '64%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 11,
      negativeVotes: 0,
      absentVotes: 9,
      notTdVotes: 1,
    },
    score: '100%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'John McGuinness',
    comparison: false,
    imageUrl:
      './assets/images/candidates/John McGuinness_FF_Carlow–Kilkenny.jpg',
    constituency: 'Carlow Kilkenny',
    party: {
      partyName: 'Fianna Fáil',
      partyScore: '64%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 9,
      negativeVotes: 1,
      absentVotes: 11,
      notTdVotes: 0,
    },
    score: '90%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Joe McHugh',
    comparison: false,
    imageUrl: './assets/images/candidates/Joe McHugh_FG_Donegal.jpg',
    constituency: 'Donegal',
    party: {
      partyName: 'Fine Gael',
      partyScore: '2%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 0,
      negativeVotes: 9,
      absentVotes: 11,
      notTdVotes: 1,
    },
    score: '0%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Michael McNamara',
    comparison: false,
    imageUrl: './assets/images/candidates/Michael_McNamara_Ind.jpg',
    constituency: 'Clare',
    party: {
      partyName: 'Independent',
      partyScore: '41%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 0,
      negativeVotes: 6,
      absentVotes: 7,
      notTdVotes: 8,
    },
    score: '0%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Denise Mitchell',
    comparison: false,
    imageUrl: './assets/images/candidates/Denise_Mitchell_SF.jpg',
    constituency: 'Dublin Bay North',
    party: {
      partyName: 'Sinn Féin',
      partyScore: '69%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 3,
      negativeVotes: 4,
      absentVotes: 0,
      notTdVotes: 14,
    },
    score: '43%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Aindrias Moynihan',
    comparison: false,
    imageUrl:
      './assets/images/candidates/Aindrias Moynihan_FF_Cork North West.jpg',
    constituency: 'Cork North West',
    party: {
      partyName: 'Fianna Fáil',
      partyScore: '64%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 3,
      negativeVotes: 4,
      absentVotes: 0,
      notTdVotes: 14,
    },
    score: '43%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Michael Moynihan',
    comparison: false,
    imageUrl:
      './assets/images/candidates/Michael Moynihan_FF_Cork North West.jpg',
    constituency: 'Cork North West',
    party: {
      partyName: 'Fianna Fáil',
      partyScore: '64%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 9,
      negativeVotes: 5,
      absentVotes: 7,
      notTdVotes: 0,
    },
    score: '64%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Imelda Munster',
    comparison: false,
    imageUrl: './assets/images/candidates/Imelda_Munster_SF.jpg',
    constituency: 'Louth',
    party: {
      partyName: 'Sinn Féin',
      partyScore: '69%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 3,
      negativeVotes: 4,
      absentVotes: 0,
      notTdVotes: 14,
    },
    score: '43%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: "Jennifer Murnane O'Connor",
    comparison: false,
    imageUrl:
      './assets/images/candidates/Jennifer Murnane O_Connor_FF_Carlow–Kilkenny.jpg',
    constituency: 'Carlow Kilkenny',
    party: {
      partyName: 'Fianna Fáil',
      partyScore: '64%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Catherine Murphy',
    comparison: false,
    imageUrl: './assets/images/candidates/Catherine_Murphy_SD.jpg',
    constituency: 'Kildare North',
    party: {
      partyName: 'Social Democrats',
      partyScore: '100%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 13,
      negativeVotes: 0,
      absentVotes: 8,
      notTdVotes: 0,
    },
    score: '100%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Eoghan Murphy',
    comparison: false,
    imageUrl:
      './assets/images/candidates/Eoghan Murphy_FG_Dublin Bay South.jpg',
    constituency: 'Dublin Bay South',
    party: {
      partyName: 'Fine Gael',
      partyScore: '2%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 0,
      negativeVotes: 14,
      absentVotes: 6,
      notTdVotes: 1,
    },
    score: '0%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Paul Murphy',
    comparison: false,
    imageUrl: './assets/images/candidates/Murphy, Paul.jfif',
    constituency: 'Dublin South West',
    party: {
      partyName: 'Solidarity - People Before Profit',
      partyScore: '100%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 14,
      negativeVotes: 0,
      absentVotes: 6,
      notTdVotes: 1,
    },
    score: '100%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Verona Murphy',
    comparison: false,
    imageUrl: './assets/images/candidates/Verona_Murphy_Ind.jpg',
    constituency: 'Wexford',
    party: {
      partyName: 'Independent',
      partyScore: '41%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Johnny Mythen',
    comparison: false,
    imageUrl: './assets/images/candidates/Johnny_Mythen_SF.jpg',
    constituency: 'Wexford',
    party: {
      partyName: 'Sinn Féin',
      partyScore: '69%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Ged Nash',
    comparison: false,
    imageUrl: './assets/images/candidates/Ged Nash_Lab_Louth.jpg',
    constituency: 'Louth',
    party: {
      partyName: 'Labour Party',
      partyScore: '48%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 1,
      absentVotes: 12,
      notTdVotes: 8,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Denis Naughten',
    comparison: false,
    imageUrl: './assets/images/candidates/Denis_Naughten_Ind.png',
    constituency: 'Roscommon Galway',
    party: {
      partyName: 'Independent',
      partyScore: '41%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 8,
      negativeVotes: 9,
      absentVotes: 4,
      notTdVotes: 0,
    },
    score: '47%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Hildegarde Naughton',
    comparison: false,
    imageUrl:
      './assets/images/candidates/Hildegarde Naughton_FG_Galway West.jpg',
    constituency: 'Galway West',
    party: {
      partyName: 'Fine Gael',
      partyScore: '2%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 0,
      negativeVotes: 7,
      absentVotes: 0,
      notTdVotes: 14,
    },
    score: '0%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Carol Nolan',
    comparison: false,
    imageUrl: './assets/images/candidates/Carol_Nolan_Ind.jpg',
    constituency: 'Laois Offaly',
    party: {
      partyName: 'Independent',
      partyScore: '41%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 2,
      negativeVotes: 1,
      absentVotes: 4,
      notTdVotes: 14,
    },
    score: '67%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Malcolm Noonan',
    comparison: false,
    imageUrl:
      './assets/images/candidates/Malcolm Noonan_GP_Carlow-Kilkenny.jpg',
    constituency: 'Carlow Kilkenny',
    party: {
      partyName: 'Green Party',
      partyScore: '100%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: "Darragh O'Brien",
    comparison: false,
    imageUrl:
      './assets/images/candidates/Darragh O_Brien _FF_Dublin Fingal.jpg',
    constituency: 'Dublin Fingal',
    party: {
      partyName: 'Fianna Fáil',
      partyScore: '64%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 3,
      negativeVotes: 4,
      absentVotes: 0,
      notTdVotes: 14,
    },
    score: '43%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: "Joe O'Brien",
    comparison: false,
    imageUrl: './assets/images/candidates/Joe O_Brien_GP_Dublin Fingal.jpg',
    constituency: 'Dublin Fingal',
    party: {
      partyName: 'Green Party',
      partyScore: '100%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: "Cian O'Callaghan",
    comparison: false,
    imageUrl: './assets/images/candidates/Cian_OCallaghan_SD.jpg',
    constituency: 'Dublin Bay North',
    party: {
      partyName: 'Social Democrats',
      partyScore: '100%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: "Jim O'Callaghan",
    comparison: false,
    imageUrl:
      './assets/images/candidates/Jim O_Callaghan_FF_Dublin Bay South.jpg',
    constituency: 'Dublin Bay South',
    party: {
      partyName: 'Fianna Fáil',
      partyScore: '64%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 3,
      negativeVotes: 1,
      absentVotes: 3,
      notTdVotes: 14,
    },
    score: '75%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: "James O'Connor",
    comparison: false,
    imageUrl: './assets/images/candidates/James O_Connor_FF_Cork East.jpg',
    constituency: 'Cork East',
    party: {
      partyName: 'Fianna Fáil',
      partyScore: '64%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: "Willie O'Dea",
    comparison: false,
    imageUrl: './assets/images/candidates/Willie O_Dea_FF_Limerick City.jpg',
    constituency: 'Limerick City',
    party: {
      partyName: 'Fianna Fáil',
      partyScore: '64%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 11,
      negativeVotes: 4,
      absentVotes: 6,
      notTdVotes: 0,
    },
    score: '73%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: "Kieran O'Donnell",
    comparison: false,
    imageUrl:
      './assets/images/candidates/Kieran O_Donnell_FG_Limerick City.jpg',
    constituency: 'Limerick City',
    party: {
      partyName: 'Fine Gael',
      partyScore: '2%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 0,
      negativeVotes: 9,
      absentVotes: 4,
      notTdVotes: 8,
    },
    score: '0%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: "Richard O'Donoghue",
    comparison: false,
    imageUrl: './assets/images/candidates/Richard_ODonoghue_INd.jpg',
    constituency: 'Limerick County',
    party: {
      partyName: 'Independent',
      partyScore: '41%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: "Patrick O'Donovan",
    comparison: false,
    imageUrl:
      './assets/images/candidates/Patrick O_Donovan_FG_Limerick County.jpg',
    constituency: 'Limerick County',
    party: {
      partyName: 'Fine Gael',
      partyScore: '2%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 0,
      negativeVotes: 19,
      absentVotes: 1,
      notTdVotes: 1,
    },
    score: '0%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: "Fergus O'Dowd",
    comparison: false,
    imageUrl: './assets/images/candidates/Fergus O_Dowd_FG_Louth.jpg',
    constituency: 'Louth',
    party: {
      partyName: 'Fine Gael',
      partyScore: '2%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 1,
      negativeVotes: 12,
      absentVotes: 8,
      notTdVotes: 0,
    },
    score: '8%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: "Roderic O'Gorman",
    comparison: false,
    imageUrl: './assets/images/candidates/Roderic O_Gorman_GP_Dublin West.jpg',
    constituency: 'Dublin West',
    party: {
      partyName: 'Green Party',
      partyScore: '100%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: "Louise O'Reilly",
    comparison: false,
    imageUrl: './assets/images/candidates/Louise_OReilly_SF.jpg',
    constituency: 'Dublin Fingal',
    party: {
      partyName: 'Sinn Féin',
      partyScore: '69%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 3,
      negativeVotes: 0,
      absentVotes: 4,
      notTdVotes: 14,
    },
    score: '100%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: "Darren O'Rourke",
    comparison: false,
    imageUrl: './assets/images/candidates/Darren_ORourke_SF.jpg',
    constituency: 'Meath East',
    party: {
      partyName: 'Sinn Féin',
      partyScore: '69%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: "Christopher O'Sullivan",
    comparison: false,
    imageUrl:
      './assets/images/candidates/Christopher O_Sullivan_FF_Cork South West.jpg',
    constituency: 'Cork South West',
    party: {
      partyName: 'Fianna Fáil',
      partyScore: '64%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: "Padraig O'Sullivan",
    comparison: false,
    imageUrl:
      './assets/images/candidates/Pádraig O_Sullivan_FF_Cork North Central.jpg',
    constituency: 'Cork North Central',
    party: {
      partyName: 'Fianna Fáil',
      partyScore: '64%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'John Paul Phelan',
    comparison: false,
    imageUrl:
      './assets/images/candidates/John Paul Phelan_FG_Carlow-Kilkenny.jpg',
    constituency: 'Carlow Kilkenny',
    party: {
      partyName: 'Fine Gael',
      partyScore: '2%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 0,
      negativeVotes: 14,
      absentVotes: 6,
      notTdVotes: 1,
    },
    score: '0%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Thomas Pringle',
    comparison: false,
    imageUrl: './assets/images/candidates/Thomas_Pringle_Ind.jpg',
    constituency: 'Donegal',
    party: {
      partyName: 'Independent',
      partyScore: '41%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 17,
      negativeVotes: 0,
      absentVotes: 3,
      notTdVotes: 1,
    },
    score: '100%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Maurice Quinlivan',
    comparison: false,
    imageUrl: './assets/images/candidates/Maurice_Quinlivan_SF.jpeg',
    constituency: 'Limerick City',
    party: {
      partyName: 'Sinn Féin',
      partyScore: '69%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 2,
      negativeVotes: 4,
      absentVotes: 1,
      notTdVotes: 14,
    },
    score: '33%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Anne Rabbitte',
    comparison: false,
    imageUrl: './assets/images/candidates/Anne Rabbitte_FF_Galway East.jpg',
    constituency: 'Galway East',
    party: {
      partyName: 'Fianna Fáil',
      partyScore: '64%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 2,
      negativeVotes: 4,
      absentVotes: 1,
      notTdVotes: 14,
    },
    score: '33%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Neale Richmond',
    comparison: false,
    imageUrl:
      './assets/images/candidates/Neale Richmond_FG_Dublin Rathdown.jpg',
    constituency: 'Dublin Rathdown',
    party: {
      partyName: 'Fine Gael',
      partyScore: '2%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Michael Ring',
    comparison: false,
    imageUrl: './assets/images/candidates/Michael Ring_FG_Mayo.jpg',
    constituency: 'Mayo',
    party: {
      partyName: 'Fine Gael',
      partyScore: '2%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 1,
      negativeVotes: 12,
      absentVotes: 8,
      notTdVotes: 0,
    },
    score: '8%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Eamon Ryan',
    comparison: false,
    imageUrl: './assets/images/candidates/Eamon Ryan_GP_Dublin Bay South.jpg',
    constituency: 'Dublin Bay South',
    party: {
      partyName: 'Green Party',
      partyScore: '100%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 7,
      negativeVotes: 0,
      absentVotes: 1,
      notTdVotes: 13,
    },
    score: '100%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Patricia Ryan',
    comparison: false,
    imageUrl: './assets/images/candidates/Patricia_Ryan_SF.jpg',
    constituency: 'Kildare South',
    party: {
      partyName: 'Sinn Féin',
      partyScore: '69%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Matt Shanahan',
    comparison: false,
    imageUrl: './assets/images/candidates/Matt_Shanahan_Ind.jpg',
    constituency: 'Waterford',
    party: {
      partyName: 'Independent',
      partyScore: '41%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Sean Sherlock',
    comparison: false,
    imageUrl: './assets/images/candidates/Sean Sherlock_Lab_Cork East.jpg',
    constituency: 'Cork East',
    party: {
      partyName: 'Labour Party',
      partyScore: '48%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 2,
      negativeVotes: 9,
      absentVotes: 9,
      notTdVotes: 1,
    },
    score: '18%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Roisin Shortall',
    comparison: false,
    imageUrl: './assets/images/candidates/Roisin_Shortall_SD.jpg',
    constituency: 'Dublin North West',
    party: {
      partyName: 'Social Democrats',
      partyScore: '100%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 10,
      negativeVotes: 0,
      absentVotes: 11,
      notTdVotes: 0,
    },
    score: '100%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Brendan Smith',
    comparison: false,
    imageUrl: './assets/images/candidates/Brendan Smith_FF_Cavan–Monaghan.jpg',
    constituency: 'Cavan Monaghan',
    party: {
      partyName: 'Fianna Fáil',
      partyScore: '64%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 12,
      negativeVotes: 5,
      absentVotes: 4,
      notTdVotes: 0,
    },
    score: '71%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Brid Smith',
    comparison: false,
    imageUrl: './assets/images/candidates/Brid_Smith_PBP.jpg',
    constituency: 'Dublin South Central',
    party: {
      partyName: 'Solidarity - People Before Profit',
      partyScore: '100%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 7,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 14,
    },
    score: '100%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Duncan Smith',
    comparison: false,
    imageUrl: './assets/images/candidates/Duncan Smith_Lab_Dublin Fingal.jpg',
    constituency: 'Dublin Fingal',
    party: {
      partyName: 'Labour Party',
      partyScore: '48%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Niamh Smyth',
    comparison: false,
    imageUrl: './assets/images/candidates/Niamh Smyth_FF_Cavan–Monaghan.jpg',
    constituency: 'Cavan Monaghan',
    party: {
      partyName: 'Fianna Fáil',
      partyScore: '64%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 2,
      negativeVotes: 4,
      absentVotes: 1,
      notTdVotes: 14,
    },
    score: '33%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Ossian Smyth',
    comparison: false,
    imageUrl: './assets/images/candidates/Ossian Smyth_GP_Dun Laoghaire.jpg',
    constituency: 'Dún Laoghaire',
    party: {
      partyName: 'Green Party',
      partyScore: '100%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Brian Stanley',
    comparison: false,
    imageUrl: './assets/images/candidates/Brian_Stanley_SF.jpg',
    constituency: 'Laois Offaly',
    party: {
      partyName: 'Sinn Féin',
      partyScore: '69%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 16,
      negativeVotes: 4,
      absentVotes: 0,
      notTdVotes: 1,
    },
    score: '80%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'David Stanton',
    comparison: false,
    imageUrl: './assets/images/candidates/David Stanton_FG_Cork East.jpg',
    constituency: 'Cork East',
    party: {
      partyName: 'Fine Gael',
      partyScore: '2%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 1,
      negativeVotes: 19,
      absentVotes: 1,
      notTdVotes: 0,
    },
    score: '5%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Robert Troy',
    comparison: false,
    imageUrl:
      './assets/images/candidates/Robert Troy_FF_Longford-Westmeath.jpg',
    constituency: 'Longford Westmeath',
    party: {
      partyName: 'Fianna Fáil',
      partyScore: '64%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 13,
      negativeVotes: 4,
      absentVotes: 3,
      notTdVotes: 1,
    },
    score: '76%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Pauline Tully',
    comparison: false,
    imageUrl: './assets/images/candidates/Pauline_Tully_SF.jpg',
    constituency: 'Cavan Monaghan',
    party: {
      partyName: 'Sinn Féin',
      partyScore: '69%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Peadar Toibin',
    comparison: false,
    imageUrl: './assets/images/candidates/Peadar_Toibin_Aontu.jpg',
    constituency: 'Meath West',
    party: {
      partyName: 'Aontú',
      partyScore: '50%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 4,
      negativeVotes: 4,
      absentVotes: 12,
      notTdVotes: 1,
    },
    score: '50%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Leo Varadkar',
    comparison: false,
    imageUrl: './assets/images/candidates/Leo Varadkar_FG_Dublin West.jpg',
    constituency: 'Dublin West',
    party: {
      partyName: 'Fine Gael',
      partyScore: '2%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 0,
      negativeVotes: 3,
      absentVotes: 17,
      notTdVotes: 1,
    },
    score: '0%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Mark Ward',
    comparison: false,
    imageUrl: './assets/images/candidates/Mark_Ward_SF.jpg',
    constituency: 'Dublin Mid West',
    party: {
      partyName: 'Sinn Féin',
      partyScore: '69%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Jennifer Whitmore',
    comparison: false,
    imageUrl: './assets/images/candidates/Jennifer_Whitmore_SD.jpg',
    constituency: 'Wicklow',
    party: {
      partyName: 'Social Democrats',
      partyScore: '100%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Violet-Anne Wynne',
    comparison: false,
    imageUrl: './assets/images/candidates/Wynne, Violet-Anne.jfif',
    constituency: 'Clare',
    party: {
      partyName: 'Sinn Féin',
      partyScore: '69%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Eoin o Broin',
    comparison: false,
    imageUrl: './assets/images/candidates/Eoin_OBroin_SF.jpg',
    constituency: 'Dublin Mid West',
    party: {
      partyName: 'Sinn Féin',
      partyScore: '69%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 3,
      negativeVotes: 0,
      absentVotes: 4,
      notTdVotes: 14,
    },
    score: '100%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Marc O Cathasaigh',
    comparison: false,
    imageUrl: './assets/images/candidates/Marc O_Cathasaigh_GP_Waterford.jpg',
    constituency: 'Waterford',
    party: {
      partyName: 'Green Party',
      partyScore: '100%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Eamon O Cuiv',
    comparison: false,
    imageUrl: './assets/images/candidates/Éamon Ó Cuív_FF_Galway West.jpg',
    constituency: 'Galway West',
    party: {
      partyName: 'Fianna Fáil',
      partyScore: '64%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 8,
      negativeVotes: 0,
      absentVotes: 13,
      notTdVotes: 0,
    },
    score: '100%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Donnchadh O Laoghaire',
    comparison: false,
    imageUrl: './assets/images/candidates/Donnchadh_OLaoghaire_SF.jpg',
    constituency: 'Cork South Central',
    party: {
      partyName: 'Sinn Féin',
      partyScore: '69%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 2,
      negativeVotes: 4,
      absentVotes: 1,
      notTdVotes: 14,
    },
    score: '33%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/did_not_vote.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Ruairi O Murchu',
    comparison: false,
    imageUrl: './assets/images/candidates/Ruairi_OMurchu_SF.jpg',
    constituency: 'Louth',
    party: {
      partyName: 'Sinn Féin',
      partyScore: '69%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 0,
      absentVotes: 0,
      notTdVotes: 21,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Aodhan O Riordain',
    comparison: false,
    imageUrl:
      './assets/images/candidates/Aodhán Ó Ríordáin_Lab_Dublin Bay North.jpg',
    constituency: 'Dublin Bay North',
    party: {
      partyName: 'Labour Party',
      partyScore: '48%',
    },
    moreThan3: false,
    tally: {
      positiveVotes: 0,
      negativeVotes: 2,
      absentVotes: 11,
      notTdVotes: 8,
    },
    score: '-',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/negative.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/not_td.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/not_td.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
  {
    name: 'Aengus O Snodaigh',
    comparison: false,
    imageUrl: './assets/images/candidates/Aengus_OSnodaigh_SF.jpg',
    constituency: 'Dublin South Central',
    party: {
      partyName: 'Sinn Féin',
      partyScore: '69%',
    },
    moreThan3: true,
    tally: {
      positiveVotes: 14,
      negativeVotes: 4,
      absentVotes: 3,
      notTdVotes: 0,
    },
    score: '78%',
    votes: {
      vote1: {
        billName: '2005_32 Climate Change Targets Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/29/2005-11-30/1/',
      },
      vote2: {
        billName: '2012_045 Energy Security and Climate Change Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2013-02-12/1/',
      },
      vote3: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 5 - Baseline',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/1/',
      },
      vote4: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 19 - Public Health',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-29/2/',
      },
      vote5: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 27 - 18 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote6: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 31 - 2050 Targets',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/3/',
      },
      vote7: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 34 - Transparency',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/4/',
      },
      vote8: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 38 - Democracy',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/5/',
      },
      vote9: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 39 - Climate Justice',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/6/',
      },
      vote10: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill (vi) - Amendment 40 - Comply',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/7/',
      },
      vote11: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 52 - Democracy',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/debate/dail/2015-09-30/15/',
      },
      vote12: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 134 - 6 Months',
        result: './assets/images/did_not_vote.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/8/',
      },
      vote13: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 146 - Advisory Council',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-09-30/9/',
      },
      vote14: {
        billName:
          '2015_002 Climate Action and Low Carbon Development Bill - Amendment 152 - Annual Targets',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/31/2015-10-08/1/',
      },
      vote15: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 1',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/97/',
      },
      vote16: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 3',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/99/',
      },
      vote17: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 4',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/100/',
      },
      vote18: {
        billName:
          '2016_037 Prohibition of Onshore Hydraulic Fracturing - Amendment 5',
        result: './assets/images/negative.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-05-31/98/',
      },
      vote19: {
        billName: '2016_103 Fossil Fuel Divestment Bill',
        result: './assets/images/positive.jpg',
        link: 'https://www.oireachtas.ie/en/debates/vote/dail/32/2017-01-26/5/',
      },
      vote20: {
        billName: '2018_009 Climate Emergency Measures Bill - Amendment 1',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2018-02-08/16/',
      },
      vote21: {
        billName:
          '2018_009 Climate Emergency Measures Bill - Second Stage Vote',
        result: './assets/images/positive.jpg',
        link:
          'https://www.oireachtas.ie/en/debates/vote/dail/32/2019-03-28/63/',
      },
    },
  },
];
