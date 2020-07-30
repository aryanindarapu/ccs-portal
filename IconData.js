export let dataUp = [
  {
    key: 'ccs',
    path: require('./assets/ccs.jpg'),
    name: 'Carmel Clay \nSchools',
    url: 'https://www.ccs.k12.in.us/'
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
    url: ''
  }, 
  {
    key: 'app',
    path: require('./assets/powerschool.jpg'),
    name: 'PowerSchool',
    url: ''
  }, 
  {
    key: 'app',
    path: require('./assets/stopit.png'),
    name: 'STOPit',
    url: ''
  }, 
  {
    key: 'app',
    path: require('./assets/remind.png'),
    name: 'Remind',
    url: ''
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
    key: 'crms',
    schoolType: 'ms',
    name: 'Creekside Middle School',
    checked: false
  },
  {
    key: 'cams',
    schoolType: 'ms',
    name: 'Carmel Middle School',
    checked: false
  },
  {
    key: 'clms',
    schoolType: 'ms',
    name: 'Clay Middle School',
    checked: false
  },
  {
    key: 'ce',
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
    key: 'we',
    schoolType: 'es',
    name: 'Woodbrook Elementary School',
    checked: false
  },
]

export const pushData = (data, school) => {
  dataUp = data
  schools = school
}