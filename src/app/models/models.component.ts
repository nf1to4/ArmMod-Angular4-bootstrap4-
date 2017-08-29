import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {
  people: any[] = [
    {
      'name': 'Արփինե Հարությունյան',
      'image': 'assets/models/arpine-harutyunyan.jpg',
      // tslint:disable-next-line:max-line-length
      'desc' : 'ArmMod Fashion նախագծի շրջանակներում ամեն անգամ մի նոր գեղեցկուհու ենք բացահայտում: Հուլիսի 29-ի Գյումրիի Սև Ամրոցում կայանալիք նորաձևության ցուցադրության մասնակից գեղեցկուհի մոդելներից է Արփինե Հարությունյանը:'
    },
    {
      'name': 'HAKI',
      'image': 'assets/models/haki.jpg',
      // tslint:disable-next-line:max-line-length
      'desc': 'ArmMod Fashion նախագծի` հուլիսի 29-ի Գյումրիի Սև Ամրոցում կայանալիք նորաձևության ցուցադրության մասնակից գեղեցկուհի մոդելներից է HAKI-ն:'
    },
    {
      'name': 'Արփինե Բաղրամյան',
      'image': 'assets/models/arpine-bagramyan.jpg',
      // tslint:disable-next-line:max-line-length
      'desc' : 'ArmMod Fashion նախագծի` հուլիսի 29-ի Գյումրիի Սև Ամրոցում կայանալիք նորաձևության ցուցադրության մասնակից գեղեցկուհի մոդելներից է Արփինե Բաղրամյանը:'
    },
    {
      'name': 'Լիլիթ Մարտիրոսյան',
      'image': 'assets/models/lilit-martirosyan.jpg',
      // tslint:disable-next-line:max-line-length
      'desc' : 'ArmMod Fashion նախագծի` հուլիսի 29-ի Գյումրիի Սև Ամրոցում կայանալիք նորաձևության ցուցադրության մասնակից գեղեցկուհի մոդելներից է Miss International Armenia Լիլիթ Մարտիրոսյանը : '
    },
        {
      'name': 'Մարտա Բաղդասարյան',
      'image': 'assets/models/marta.jpg',
      // tslint:disable-next-line:max-line-length
      'desc' : 'ArmMod Fashion նախագծի` հուլիսի 29-ի Գյումրիի Սև Ամրոցում կայանալիք նորաձևության ցուցադրության մասնակից գեղեցկուհի մոդելներից է Մարտա Բաղդասարյանը :'
    },
        {
      'name': 'Սիրան Խաչատրյան',
      'image': 'assets/models/siran.jpg',
      // tslint:disable-next-line:max-line-length
      'desc' : 'ArmMod Fashion նախագծի` հուլիսի 29-ի Գյումրիի Սև Ամրոցում կայանալիք նորաձևության ցուցադրության մասնակից գեղեցկուհի մոդելներից է Սիրան Խաչատրյանը: '
    },
        {
      'name': 'Անուշ Սահակյան',
      'image': 'assets/models/anush-sahakyan.jpg',
      // tslint:disable-next-line:max-line-length
      'desc' : 'ArmMod Fashion նախագծի` հուլիսի 29-ի Գյումրիի Սև Ամրոցում կայանալիք նորաձևության ցուցադրության մասնակից գեղեցկուհի մոդելներից է Անուշ Սահակյանը: '
    },
        {
      'name': 'Նարե Զաքարյան',
      'image': 'assets/models/nare.jpg',
      // tslint:disable-next-line:max-line-length
      'desc' : 'ArmMod Fashion նախագծի` հուլիսի 29-ի Գյումրիի Սև Ամրոցում կայանալիք նորաձևության ցուցադրության մասնակից գեղեցկուհի մոդելներից է Մարտա Բաղդասարյանը :'
    },
        {
      'name': 'Լիդիա Վասակյան',
      'image': 'assets/models/lidia.jpg',
      // tslint:disable-next-line:max-line-length
      'desc' : 'ArmMod Fashion նախագծի` հուլիսի 29-ի Գյումրիի Սև Ամրոցում կայանալիք նորաձևության ցուցադրության մասնակից գեղեցկուհի մոդելներից է Լիդիա Վասակյանը: '
    },
        {
      'name': 'Լիանա Թովմասյան',
      'image': 'assets/models/liana-tovmasyan.jpg',
      // tslint:disable-next-line:max-line-length
      'desc' : 'ArmMod Fashion նախագծի` հուլիսի 29-ի Գյումրիի Սև Ամրոցում կայանալիք նորաձևության ցուցադրության մասնակից գեղեցկուհի մոդելներից է Լիանա Թովմասյանը : '
    },
        {
      'name': 'Sona Ian',
      'image': 'assets/models/sona-ian.jpg',
      // tslint:disable-next-line:max-line-length
      'desc' : 'ArmMod Fashion նախագծի` հուլիսի 29-ի Գյումրիի Սև Ամրոցում կայանալիք նորաձևության ցուցադրության մասնակից գեղեցկուհի մոդելներից է Sona Ian-ը : '
    },
        {
      'name': 'Արմինե Գևորգյան',
      'image': 'assets/models/armine-gevorgyan.jpg',
      // tslint:disable-next-line:max-line-length
      'desc' : 'ArmMod Fashion նախագծի` հուլիսի 29-ի Գյումրիի Սև Ամրոցում կայանալիք նորաձևության ցուցադրության մասնակից գեղեցկուհի մոդելներից է Արմինե Գևորգյանը : '
    },
        {
      'name': 'Մանյա Հարությունյանը',
      'image': 'assets/models/manya-harutyunyan.jpg',
      // tslint:disable-next-line:max-line-length
      'desc' : 'ArmMod Fashion նախագծի` հուլիսի 29-ի Գյումրիի Սև Ամրոցում կայանալիք նորաձևության ցուցադրության մասնակից գեղեցկուհի մոդելներից է Մանյա Հարությունյանը : '
    },
        {
      'name': 'Մերի Բաղդասարյան',
      'image': 'assets/models/mery-bagdasaryan.jpg',
      // tslint:disable-next-line:max-line-length
      'desc' : 'ArmMod Fashion նախագծի` հուլիսի 29-ի Գյումրիի Սև Ամրոցում կայանալիք նորաձևության ցուցադրության մասնակից գեղեցկուհի մոդելներից է Մերի Բաղդասարյանը : '
    },
        {
      'name': 'RINKO',
      'image': 'assets/models/rinko.jpg',
      // tslint:disable-next-line:max-line-length
      'desc' : 'ArmMod Fashion նախագծի` հուլիսի 29-ի Գյումրիի Սև Ամրոցում կայանալիք նորաձևության ցուցադրության մասնակից գեղեցկուհի մոդելներից է RINKO-ն : '
    },
        {
      'name': 'Լիանա Իսրաելյան',
      'image': 'assets/models/liana-israelyan.jpg',
      // tslint:disable-next-line:max-line-length
      'desc' : 'ArmMod Fashion նախագծի` հուլիսի 29-ի Գյումրիի Սև Ամրոցում կայանալիք նորաձևության ցուցադրության մասնակից գեղեցկուհի մոդելներից է Մանյա Հարությունյանը : '
    },
        {
      'name': 'Անի Սարգսյան',
      'image': 'assets/models/ani-sargsyan.jpg',
      // tslint:disable-next-line:max-line-length
      'desc' : 'ArmMod Fashion նախագծի` հուլիսի 29-ի Գյումրիի Սև Ամրոցում կայանալիք նորաձևության ցուցադրության մասնակից գեղեցկուհի մոդելներից է Անի Սարգսյանը : '
    }
  ];

  designers: any[] = [
  {
    'name': 'Հռիփսիմե Առաքելյան',
    'image': 'assets/des/hripsime.jpg',
    // tslint:disable-next-line:max-line-length
    'desc' : 'ArmMod Fashion նախագծի` հուլիսի 29-ի Գյումրիի Սև Ամրոցում կայանալիք նորաձևության ցուցադրության մասնակից դիզայներներից է Հռիփսիմե Առաքելյանը, ով "Olympeah" բրենդի հիմնադիրն է:'
  },
  {
    'name': 'Նաիրուհի Գնդոյան',
    'image': 'assets/des/nairuhi.jpg',
    // tslint:disable-next-line:max-line-length
    'desc' : 'ArmMod Fashion նախագծի` հուլիսի 29-ի Գյումրիի Սև Ամրոցում կայանալիք նորաձևության ցուցադրության մասնակից դիզայներներից է Նաիրուհի Գնդոյանը:'
  },
  {
    'name': 'Հռիփսիմե Առաքելյան',
    'image': 'assets/des/diana-chalikyan.jpg',
    // tslint:disable-next-line:max-line-length
    'desc' : 'ArmMod Fashion նախագծի` հուլիսի 29-ի Գյումրիի Սև Ամրոցում կայանալիք նորաձևության ցուցադրության մասնակից դիզայներներից է տաղանդավոր դիզայներ Գյումրիից` Դիանա Չալիկյանը:'
  },
    {
    'name': 'Անի Չիչոյան',
    'image': 'assets/des/ani-chichoyan.jpg',
    // tslint:disable-next-line:max-line-length
    'desc' : 'ArmMod Fashion նախագծի` հուլիսի 29-ի Գյումրիի Սև Ամրոցում կայանալիք նորաձևության ցուցադրության մասնակից դիզայներներից է տաղանդավոր դիզայներ Անի Չիչոյանը:'
  },
    {
    'name': 'Մարինե Սողոյան',
    'image': 'assets/des/marine-sogoyan.jpg',
    // tslint:disable-next-line:max-line-length
    'desc' : 'ArmMod Fashion նախագծի` հուլիսի 29-ի Գյումրիի Սև Ամրոցում կայանալիք նորաձևության ցուցադրության մասնակից դիզայներներից է տաղանդավոր դիզայներ Գյումրիից` Մարինե Սողոյանը:'
  },
    {
    'name': 'Անուշիկ Սարոյան',
    'image': 'assets/des/anushik-saroyan.jpg',
    // tslint:disable-next-line:max-line-length
    'desc' : 'ArmMod Fashion նախագծի` հուլիսի 29-ի Գյումրիի Սև Ամրոցում կայանալիք նորաձևության ցուցադրության մասնակից դիզայներներից է տաղանդավոր դիզայներ Գյումրիից` Անուշիկ Սարոյանը, ով Գյումրիում արդեն հայտնի ,,Anes Fashion,, նորաձևության տան հիմնադիրն է: Մեծ ուրախությամբ կարող ենք հայտնել, որ Անուշիկը ևս իր առաջին մեծ ցուցադրությունը ունեցել է մեր նախագծի շրջանակներում:'
  },
  {
    'name': 'Քնարիկ Մշեցյան',
    'image': 'assets/des/qnarik-mshetyan.jpg',
    // tslint:disable-next-line:max-line-length
    'desc' : 'ArmMod Fashion նախագծի` հուլիսի 29-ի Գյումրիի Սև Ամրոցում կայանալիք նորաձևության ցուցադրության մասնակից դիզայներներից է տաղանդավոր դիզայներ Գյումրիից` Մշեցյան Քնարիկը:'
  },
    {
    'name': 'Սառա Վարդանեսյան',
    'image': 'assets/des/sara-vardanesyan.jpg',
    // tslint:disable-next-line:max-line-length
    'desc' : 'ArmMod Fashion նախագծի` հուլիսի 29-ի Գյումրիի Սև Ամրոցում կայանալիք նորաձևության ցուցադրության մասնակից դիզայներներից է Սառա Վարդանեսյանը:'
  },
    {
    'name': 'Արփինե Կարապետյանը',
    'image': 'assets/des/arpine-karapetyan.jpg',
    // tslint:disable-next-line:max-line-length
    'desc' : 'ArmMod Fashion նախագծի` հուլիսի 29-ի Գյումրիի Սև Ամրոցում կայանալիք նորաձևության ցուցադրության մասնակից դիզայներներից է տաղանդավոր դիզայներ Գյումրիից` Արփինե Կարապետյանը:'
  },
  {
    'name': 'Խանում Մադոյան',
    'image': 'assets/des/xanum-saroyan.jpg',
    // tslint:disable-next-line:max-line-length
    'desc' : 'ArmMod Fashion նախագծի` հուլիսի 29-ի Գյումրիի Սև Ամրոցում կայանալիք նորաձևության ցուցադրության մասնակից դիզայներներից է տաղանդավոր դիզայներ Գյումրիից Խանում Մադոյանը:'
  },
    {
    'name': 'Թինա Անդրիսյան',
    'image': 'assets/des/tina-andrisyan.jpg',
    // tslint:disable-next-line:max-line-length
    'desc' : 'ArmMod Fashion նախագծի` հուլիսի 29-ի Գյումրիի Սև Ամրոցում կայանալիք նորաձևության ցուցադրության մասնակից դիզայներներից է Թինա Անդրիսյանը:'
  },
    {
    'name': 'Անուշ Մկրտչյան',
    'image': 'assets/des/anush-mkrtchyan.jpg',
    // tslint:disable-next-line:max-line-length
    'desc' : 'ArmMod Fashion նախագծի` հուլիսի 29-ի Գյումրիի Սև Ամրոցում կայանալիք նորաձևության ցուցադրության մասնակից դիզայներներից է Անուշ Մկրտչյանը:'
  },
  {
    'name': 'Միքայել Պողոսյան | PMH',
    'image': 'assets/des/miqayel-pogosyan.jpg',
    // tslint:disable-next-line:max-line-length
    'desc' : 'ArmMod Fashion նախագծի` հուլիսի 29-ի Գյումրիի Սև Ամրոցում կայանալիք նորաձևության ցուցադրության մասնակից դիզայներներից է Միքայել Պողոսյանը, ով Գյումրիում արդեն իսկ սիրված և ճանաչված PMH նորաձևության տան հիմնադիրն է :'
  }
  ];
  constructor() { }

  ngOnInit() {
  }

}
