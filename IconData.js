export let dataUp = [
  {
    id: 'add',
    path: require('./assets/add.png'),
    name: 'Add Schools',
  }
]

export const dataDown = [
  {
    path: require('./assets/canvas.png'),
    name: 'Canvas Parent',
    func: () => alert('Pressed 2:1!')
  }, 
  {
    path: require('./assets/powerschool.jpg'),
    name: 'PowerSchool',
    func: () => alert('Pressed 2:2!')
  }, 
  {
    path: require('./assets/stopit.png'),
    name: 'STOPit',
    func: () => alert('Pressed 2:3!')
  }, 
  {
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
]

export const pushData = (data, school) => {
  dataUp = data
  schools = school
}

export const pullData = () => {
  return dataUp
}