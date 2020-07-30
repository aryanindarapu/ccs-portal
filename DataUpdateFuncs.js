export function dataUpdate(newSchool) {
  switch(newSchool[0].key) {
    case 'chs':
     return {
        key: 'chs',
        path: require('./assets/chs.png'),
        name: 'Carmel High School',
        url: 'https://www.ccs.k12.in.us/chs'
      }
      break
    case 'crms':
      return {
        key: 'crms',
        path: require('./assets/creekside.png'),
        name: 'Creekside Middle \nSchool',
        url: 'https://www.ccs.k12.in.us/crm'
      }
      break
    case 'cams':
      return {
        key: 'cams',
        path: require('./assets/carmel.png'),
        name: 'Carmel Middle \nSchool',
        url: 'https://www.ccs.k12.in.us/cam'
      }
      break
    case 'clms':
      return {
        key: 'clms',
        path: require('./assets/clay.jpg'),
        name: 'Clay Middle School',
        url: 'https://www.ccs.k12.in.us/clm'
      }
      break
    case 'ce':
      return {
        key: 'ce',
        path: require('./assets/ce.png'),
        name: 'Carmel Elementary \nSchool',
        url: 'https://www.ccs.k12.in.us/ces'
      }
      break
    case 'cte':
      return {
        key: 'cte',
        path: require('./assets/cte.png'),
        name: 'Cherry Tree \nElementary School',
        url: 'https://www.ccs.k12.in.us/cte'
      }
      break
    case 'cwe':
      return {
        key: 'cwe',
        path: require('./assets/cwe.png'),
        name: 'College Wood \nElementary School',
        url: 'https://www.ccs.k12.in.us/cwe'
      }
      break
    case 'fde':
      return {
        key: 'fde',
        path: require('./assets/fde.png'),
        name: 'Forest Dale \nElementary School',
        url: 'https://www.ccs.k12.in.us/fde'
      }
      break
    case 'mte':
      return {
        key: 'mte',
        path: require('./assets/mte.png'),
        name: 'Mohawk Trails \nElementary School',
        url: 'https://www.ccs.k12.in.us/mte'
      }
      break
    case 'ope':
      return {
        key: 'ope',
        path: require('./assets/ope.png'),
        name: 'Orchard Park \nElementary School',
        url: 'https://www.ccs.k12.in.us/ope'
      }
      break
    case 'pte':
      return {
        key: 'pte',
        path: require('./assets/pte.png'),
        name: 'Praire Trace \nElementary School',
        url: 'https://www.ccs.k12.in.us/pte'
      }
      break
    case 'sre':
      return {
        key: 'sre',
        path: require('./assets/sre.png'),
        name: 'Smoky Row \nElementary School',
        url: 'https://www.ccs.k12.in.us/sre'
      }
      break
    case 'tme':
      return {
        key: 'tme',
        path: require('./assets/tme.png'),
        name: 'Towne Meadow \nElementary School',
        url: 'https://www.ccs.k12.in.us/tme'
      }
      break
    case 'wce':
      return {
        key: 'wce',
        path: require('./assets/wce.png'),
        name: 'West Clay \nElementary School',
        url: 'https://www.ccs.k12.in.us/wce'
      }
      break
    case 'we':
      return {
        key: 'we',
        path: require('./assets/we.png'),
        name: 'Woodbrook Elementary \nSchool',
        url: 'https://www.ccs.k12.in.us/wbe'
      }              
    default:
      break
  }
}