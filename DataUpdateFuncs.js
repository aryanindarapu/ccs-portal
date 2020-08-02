export function dataUpdate(newSchool) {
  switch(newSchool[0].key) {
    case 'chs':
     return {
        key: 'chs',
        path: require('./assets/schools/chs.png'),
        name: 'Carmel High School',
        url: 'https://www.ccs.k12.in.us/chs'
      }
    case 'crms':
      return {
        key: 'crms',
        path: require('./assets/schools/creekside.png'),
        name: 'Creekside Middle \nSchool',
        url: 'https://www.ccs.k12.in.us/crm'
      }
    case 'cams':
      return {
        key: 'cams',
        path: require('./assets/schools/carmel.png'),
        name: 'Carmel Middle \nSchool',
        url: 'https://www.ccs.k12.in.us/cam'
      }
    case 'clms':
      return {
        key: 'clms',
        path: require('./assets/schools/clay.jpg'),
        name: 'Clay Middle School',
        url: 'https://www.ccs.k12.in.us/clm'
      }
    case 'ce':
      return {
        key: 'ce',
        path: require('./assets/schools/ce.png'),
        name: 'Carmel Elementary \nSchool',
        url: 'https://www.ccs.k12.in.us/ces'
      }
    case 'cte':
      return {
        key: 'cte',
        path: require('./assets/schools/cte.png'),
        name: 'Cherry Tree \nElementary School',
        url: 'https://www.ccs.k12.in.us/cte'
      }
    case 'cwe':
      return {
        key: 'cwe',
        path: require('./assets/schools/cwe.png'),
        name: 'College Wood \nElementary School',
        url: 'https://www.ccs.k12.in.us/cwe'
      }
    case 'fde':
      return {
        key: 'fde',
        path: require('./assets/schools/fde.png'),
        name: 'Forest Dale \nElementary School',
        url: 'https://www.ccs.k12.in.us/fde'
      }
    case 'mte':
      return {
        key: 'mte',
        path: require('./assets/schools/mte.png'),
        name: 'Mohawk Trails \nElementary School',
        url: 'https://www.ccs.k12.in.us/mte'
      }
      
    case 'ope':
      return {
        key: 'ope',
        path: require('./assets/schools/ope.png'),
        name: 'Orchard Park \nElementary School',
        url: 'https://www.ccs.k12.in.us/ope'
      }
    case 'pte':
      return {
        key: 'pte',
        path: require('./assets/schools/pte.png'),
        name: 'Praire Trace \nElementary School',
        url: 'https://www.ccs.k12.in.us/pte'
      }
    case 'sre':
      return {
        key: 'sre',
        path: require('./assets/schools/sre.png'),
        name: 'Smoky Row \nElementary School',
        url: 'https://www.ccs.k12.in.us/sre'
      }
    case 'tme':
      return {
        key: 'tme',
        path: require('./assets/schools/tme.png'),
        name: 'Towne Meadow \nElementary School',
        url: 'https://www.ccs.k12.in.us/tme'
      }
    case 'wce':
      return {
        key: 'wce',
        path: require('./assets/schools/wce.png'),
        name: 'West Clay \nElementary School',
        url: 'https://www.ccs.k12.in.us/wce'
      }
    case 'we':
      return {
        key: 'we',
        path: require('./assets/schools/we.png'),
        name: 'Woodbrook Elementary \nSchool',
        url: 'https://www.ccs.k12.in.us/wbe'
      }
  }
}