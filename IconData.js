export let dataUp = [
  {
    id: 'ccs',
    path: require('./assets/ccs.jpg'),
    name: 'Carmel Clay \nSchools',
    url: 'https://www.ccs.k12.in.us/'
  },
  {
    id: 'add',
    path: require('./assets/add.png'),
    name: 'Add Schools',
  }
]

export const dataDown = [
  {
    id: 'app',
    path: require('./assets/canvas.png'),
    name: 'Canvas Parent',
    func: () => alert('Pressed 2:1!')
  }, 
  {
    id: 'app',
    path: require('./assets/powerschool.jpg'),
    name: 'PowerSchool',
    func: () => alert('Pressed 2:2!')
  }, 
  {
    id: 'app',
    path: require('./assets/stopit.png'),
    name: 'STOPit',
    func: () => alert('Pressed 2:3!')
  }, 
  {
    id: 'app',
    path: require('./assets/remind.png'),
    name: 'Remind',
    func: () => alert('Pressed 2:4!')
  }
]

export let schools = [
  {
    id: 'chs',
    name: 'Carmel High School',
    checked: false
  },
  {
    id: 'crms',
    name: 'Creekside Middle School',
    checked: false
  },
  {
    id: 'cams',
    name: 'Carmel Middle School',
    checked: false
  },
  {
    id: 'clms',
    name: 'Clay Middle School',
    checked: false
  },
  {
    id: 'ce',
    name: 'Carmel Elementary School',
    checked: false
  },
  {
    id: 'cte',
    name: 'Cherry Tree Elementary School',
    checked: false
  },
  {
    id: 'cwe',
    name: 'College Wood Elementary School',
    checked: false
  },
  {
    id: 'fde',
    name: 'Forest Dale Elementary School',
    checked: false
  },
  {
    id: 'mte',
    name: 'Mohawk Trails Elementary School',
    checked: false
  },
  {
    id: 'ope',
    name: 'Orchard Park Elementary School',
    checked: false
  },
  {
    id: 'pte',
    name: 'Praire Trace Elementary School',
    checked: false
  },
  {
    id: 'sre',
    name: 'Smoky Row Elementary School',
    checked: false
  },
  {
    id: 'tme',
    name: 'Towne Meadow Elementary School',
    checked: false
  },
  {
    id: 'wce',
    name: 'West Clay Elementary School',
    checked: false
  },
  {
    id: 'we',
    name: 'Woodbrook Elementary School',
    checked: false
  },
]

export const pushData = (data, school) => {
  dataUp = data
  schools = school
}

export const pullData = () => {
  return dataUp
}