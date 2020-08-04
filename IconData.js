export let dataUp = [
  {
    key: 'ccs',
    path: require('./assets/schools/ccs.jpg'),
    name: 'Carmel Clay \nSchools',
    nameFormat: 'Carmel Clay Schools',
    schoolInfo: {
      color: '#005cb0',
      url: 'https://www.ccs.k12.in.us/',
      cal: 'https://www.ccs.k12.in.us/about/district-calendar',
      isWcOne: false,
      wcOneUrl: '',
      isWcTwo: false,
      wcTwoUrl: ''
    },
  },
  {
    key: 'add',
    path: require('./assets/add.png'),
    name: 'Add Schools',
  }
]

export const dataDown = [
  {
    key: 'app',
    path: require('./assets/canvas.png'),
    name: 'Canvas Parent',
    url: 'https://apps.apple.com/us/app/canvas-parent/id1097996698',
    appName: 'Canvas Parent',
    appStoreId: '1097996698',
    playStoreId: 'com.instructure.parentapp'
  }, 
  {
    key: 'app',
    path: require('./assets/powerschool.png'),
    name: 'PowerSchool',
    url: 'https://apps.apple.com/us/app/powerschool-mobile/id973741088',
    appName: 'PowerSchool Mobile',
    appStoreId: '973741088',
    playStoreId: 'com.powerschool.portal'
  },  
  {
    key: 'app',
    path: require('./assets/ez.png'),
    name: 'EZSchoolPay',
    url: 'https://apps.apple.com/us/app/ezschoolpay/id642643721',
    appName: 'EZSchoolPay',
    appStoreId: '642643721',
    playStoreId: 'com.harris.ezschoolpay'
  }, 
  {
    key: 'app',
    path: require('./assets/stopit.png'),
    name: 'STOPit',
    url: 'https://apps.apple.com/us/app/stopit-app/id719179764',
    appName: 'STOPit',
    appStoreId: '719179764',
    playStoreId: 'com.stopitcyberbully.mobile'
  }, 
  {
    key: 'app',
    path: require('./assets/remind.png'),
    name: 'Remind',
    url: 'https://apps.apple.com/us/app/remind-school-communication/id522826277',
    appName: 'Remind: School Communication',
    appStoreId: '522826277',
    playStoreId: 'com.remind101'
  }
]

export let schools = [
  {
    key: 'chs',
    schoolType: 'hs',
    name: 'Carmel High School',
    checked: false
  },
  {
    key: 'crm',
    schoolType: 'ms',
    name: 'Creekside Middle School',
    checked: false
  },
  {
    key: 'cam',
    schoolType: 'ms',
    name: 'Carmel Middle School',
    checked: false
  },
  {
    key: 'clm',
    schoolType: 'ms',
    name: 'Clay Middle School',
    checked: false
  },
  {
    key: 'ces',
    schoolType: 'es',
    name: 'Carmel Elementary School',
    checked: false
  },
  {
    key: 'cte',
    schoolType: 'es',
    name: 'Cherry Tree Elementary School',
    checked: false
  },
  {
    key: 'cwe',
    schoolType: 'es',
    name: 'College Wood Elementary School',
    checked: false
  },
  {
    key: 'fde',
    schoolType: 'es',
    name: 'Forest Dale Elementary School',
    checked: false
  },
  {
    key: 'mte',
    schoolType: 'es',
    name: 'Mohawk Trails Elementary School',
    checked: false
  },
  {
    key: 'ope',
    schoolType: 'es',
    name: 'Orchard Park Elementary School',
    checked: false
  },
  {
    key: 'pte',
    schoolType: 'es',
    name: 'Praire Trace Elementary School',
    checked: false
  },
  {
    key: 'sre',
    schoolType: 'es',
    name: 'Smoky Row Elementary School',
    checked: false
  },
  {
    key: 'tme',
    schoolType: 'es',
    name: 'Towne Meadow Elementary School',
    checked: false
  },
  {
    key: 'wce',
    schoolType: 'es',
    name: 'West Clay Elementary School',
    checked: false
  },
  {
    key: 'wbe',
    schoolType: 'es',
    name: 'Woodbrook Elementary School',
    checked: false
  },
]

export const pushData = (data, school) => {
  dataUp = data
  schools = school
}