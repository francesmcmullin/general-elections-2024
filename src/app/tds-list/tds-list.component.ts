import { TdService } from '../services/td.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { InteractionService } from '../services/interaction.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tds-list',
  templateUrl: './tds-list.component.html', 
  styleUrls: ['./tds-list.component.css']
})

export class TdsListComponent implements OnInit {
  tds: any[]
  searchValue: string; //THIS
  compareTds: any[]

  pageYoffset = 0;
  @HostListener('window:scroll', ['$td']) onScroll(event){
    this.pageYoffset = window.pageYOffset;
  }

  constructor(private tdService: TdService, 
              private scroll: ViewportScroller, 
              private _interactionService: InteractionService,
              private router: Router) { }


  areas = [
    'Adare - Rathkeale',
    'An Daingean',
    'Ardee',
    'Arklow',
    'Artane - Whitehall',
    'Ashbourne',
    'Athlone (Roscommon)',
    'Athlone (Westmeath)',
    'Athy',
    'Bailieborough - Cootehill',
    'Balbriggan',
    'Ballina',
    'Ballinamore',
    'Ballinasloe',
    'Ballybay - Clones',
    'Ballyfermot - Drimnagh',
    'Ballyjamesduff',
    'Ballymahon',
    'Ballymote - Tobercurry',
    'Ballymun-Finglas',
    'Baltinglass',
    'Bandon-Kinsale',
    'Bantry-West Cork',
    'Belmullet',
    'Birr',
    'Blackrock',
    'Blanchardstown - Mulhuddart',
    'Borris-in-Ossory-Mountmellick',
    'Boyle',
    'Bray East',
    'Bray West',
    'Buncrana',
    'Cabra-Glasnevin',
    'Cahir',
    'Callan-Thomastown',
    'Cappamore-Kilmallock',
    'Carlow',
    'Carndonagh',
    'Carrick-on-Shannon',
    'Carrick-on-Suir',
    'Carrickmacross-Castleblayney',
    'Carrigaline',
    'Cashel-Tipperary',
    'Castlebar',
    'Castlecomer',
    'Castleisland',
    'Castleknock',
    'Cavan-Belturbet',
    'Celbridge',
    'Clane',
    'Claremorris',
    'Clondalkin',
    'Clonmel',
    'Clontarf',
    'Cobh',
    'Conamara North',
    'Conamara South',
    'Cork City North East',
    'Cork City North West',
    'Cork City South Central',
    'Cork City South East',
    'Cork City South West',
    'Donaghmede',
    'Donegal',
    'Drogheda Rural',
    'Drogheda Urban',
    'Dublin North Inner City',
    'Dublin South East Inner City',
    'Dublin South West Inner City',
    'Dún Laoghaire',
    'Dundalk Carlingford',
    'Dundalk South',
    'Dundrum',
    'Dungarvan',
    'Edenderry',
    'Ennis',
    'Enniscorthy',
    'Ennistymon',
    'Fermoy',
    'Firhouse-Bohernabreena',
    'Galway City Central',
    'Galway City East',
    'Galway City West',
    'Glencullen-Sandyford',
    'Glenties',
    'Gorey',
    'Gort-Kinvara',
    'Graiguecullen-Portarlington',
    'Granard',
    'Greystones',
    'Howth-Malahide',
    'Kanturk',
    'Kells',
    'Kenmare',
    'Kildare',
    'Kilkenny',
    'Killaloe',
    'Killarney',
    'Killiney-Shankill',
    'Killiney–Shankill',
    'Kilmuckridge',
    'Kilrush',
    'Kimmage-Rathmines',
    'Kinnegad',
    'Laytown-Bettystown',
    'Leixlip',
    'Letterkenny',
    'Lifford-Stranorlar',
    'Limerick City East',
    'Limerick City North',
    'Limerick City West',
    'Lismore',
    'Listowel',
    'Longford',
    'Loughrea',
    'Lucan',
    'Macroom',
    'Mallow',
    'Manorhamilton',
    'Maynooth',
    'Midleton',
    'Milford',
    'Moate',
    'Monaghan',
    'Muinebeag',
    'Mullingar',
    'Naas',
    'Navan',
    'Nenagh',
    'New Ross',
    'Newbridge',
    'Newcastle West',
    'Newport',
    'Ongar',
    'Oranmore - Athenry',
    'Palmerstown-Fonthill',
    'Pembroke',
    'Piltown',
    'Portlaoise',
    'Portlaw-Kilmacthomas',
    'Rathfarnham Templeogue',
    'Ratoath',
    'Roscommon',
    'Roscrea-Templemore',
    'Rosslare',
    'Rush-Lusk',
    'Shannon',
    'Skibbereen-West Cork',
    'Sligo-Drumcliff',
    'Sligo-Strandhill',
    'Stillorgan',
    'Swinford',
    'Swords',
    'Tallaght Central',
    'Tallaght South',
    'Thurles',
    'Tralee',
    'Tramore-Waterford City West',
    'Trim',
    'Tuam',
    'Tullamore',
    'Tullow',
    'Waterford City East',
    'Waterford City South',
    'Westport',
    'Wexford',
    'Wicklow',
    ];


  ngOnInit() {
    this.tdService.candidates$.subscribe(
      res => {
        this.tds = res
        this.compareTds = this.tds.filter(td => td.comparison == true);
      },
      err => { }
    );
    this._interactionService.thumbnailMessage$
      .subscribe(
        message => {
          this.compareTds = this.tds.filter(td => td.comparison == true);
        }
      )
  }

  scrollToTop(){
    this.scroll.scrollToPosition([0,0]);
  }
  

  openComparison(){
    this.router.navigate(['/app-comparisonpage']);
  }

  untickAll(){   
    this.compareTds.forEach((td) => {
      td.comparison = false;
    });
    this._interactionService.sendMessage('Checkbox Clicked');
  }

}
