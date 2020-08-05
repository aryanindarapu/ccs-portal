export function dataUpdate(newSchool) {
  switch(newSchool[0].key) {
    case 'chs':
     return {
        key: 'chs',
        path: require('./assets/schools/chs.png'),
        name: 'Carmel High \nSchool',
        nameFormat: 'Carmel High School',
        schoolInfo: {
          color: '#ffc324',
          url: 'https://www.ccs.k12.in.us/chs',
          cal: 'https://www.ccs.k12.in.us/chs/about/calendar',
          isWcOne: true,
          wcOneUrl: 'https://www.ccs.k12.in.us/chs-lunch-menu',
          isWcTwo: true,
          wcTwoUrl: 'https://resources.finalsite.net/images/v1582720293/ccsk12inus/opbuyw9heer5b5bxoyh8/2019-2020CarmelHighSchoolClubs6.pdf'
        },
      }
    case 'cam':
      return {
        key: 'cam',
        path: require('./assets/schools/cam.png'),
        name: 'Carmel Middle \nSchool',
        nameFormat: 'Carmel Middle School',
        schoolInfo: {
          color: '#3173b5',
          url: 'https://www.ccs.k12.in.us/cam',
          cal: 'https://www.ccs.k12.in.us/cam/about/calendar',
          isWcOne: true,
          wcOneUrl: 'https://www.ccs.k12.in.us/cam-lunch-menu',
          isWcTwo: true,
          wcTwoUrl: 'https://www.ccs.k12.in.us/cam/student-life'
        },
      }
    case 'clm':
      return {
        key: 'clm',
        path: require('./assets/schools/clm.jpg'),
        name: 'Clay Middle \nSchool',
        nameFormat: 'Clay Middle School',
        schoolInfo: {
          color: '#c5263a',
          url: 'https://www.ccs.k12.in.us/clm',
          cal: 'https://www.ccs.k12.in.us/clm/about/calendar',
          isWcOne: true,
          wcOneUrl: 'https://www.ccs.k12.in.us/clm-lunch-menu',          
          isWcTwo: true,
          wcTwoUrl: 'https://www.ccs.k12.in.us/clm/student-life/clubs-organizations'
        },
      }
    case 'crm':
      return {
        key: 'crm',
        path: require('./assets/schools/crm.png'),
        name: 'Creekside Middle \nSchool',
        nameFormat: 'Creekside Middle School',
        schoolInfo: {
          color: '#c9051b',
          url: 'https://www.ccs.k12.in.us/crm',
          cal: 'https://www.ccs.k12.in.us/crm/about/calendar',
          isWcOne: true,
          wcOneUrl: 'https://www.ccs.k12.in.us/crm-lunch-menu',          
          isWcTwo: true,
          wcTwoUrl: 'https://docs.google.com/spreadsheets/d/1nu21XL80nNGcKNBktBIrh4HtTpULrgQEe31uRFg2GB8/edit#gid=0'
        },
      }
    case 'ces':
      return {
        key: 'ces',
        path: require('./assets/schools/ces.jpg'),
        name: 'Carmel \nElementary \nSchool',
        nameFormat: 'Carmel Elementary School',
        schoolInfo: {
          color: '#065da9',
          url: 'https://www.ccs.k12.in.us/ces',
          cal: 'https://www.ccs.k12.in.us/ces/about/calendar',
          isWcOne: true,
          wcOneUrl: 'https://www.ccs.k12.in.us/ces-lunch-menu',          
          isWcTwo: true,
          wcTwoUrl: 'https://www.ccs.k12.in.us/ces/student-life/staff-sponsored-clubs'
        },
      }
    case 'cte':
      return {
        key: 'cte',
        path: require('./assets/schools/cte.png'),
        name: 'Cherry Tree \nElementary School',
        nameFormat: 'Cherry Tree Elementary School',
        schoolInfo: {
          color: '#c0202f',
          url: 'https://www.ccs.k12.in.us/cte',
          cal: 'https://www.ccs.k12.in.us/cte/about/calendar',
          isWcOne: true,
          wcOneUrl: 'https://www.ccs.k12.in.us/cte-lunch-menu',
          isWcTwo: false,
          wcTwoUrl: ''
        },
      }
    case 'cwe':
      return {
        key: 'cwe',
        path: require('./assets/schools/cwe.png'),
        name: 'College Wood \nElementary School',
        nameFormat: 'College Wood Elementary School',
        schoolInfo: {
          color: '#e82102',
          url: 'https://www.ccs.k12.in.us/cwe',
          cal: 'https://www.ccs.k12.in.us/cwe/about/calendar',
          isWcOne: true,
          wcOneUrl: 'https://www.ccs.k12.in.us/cwe-lunch-menu',
          isWcTwo: true,
          wcTwoUrl: 'https://www.ccs.k12.in.us/cwe/student-life/clubs-activities'
        },
      }
    case 'fde':
      return {
        key: 'fde',
        path: require('./assets/schools/fde.png'),
        name: 'Forest Dale \nElementary School',
        nameFormat: 'Forest Dale Elementary School',
        schoolInfo: {
          color: '#065da9',
          url: 'https://www.ccs.k12.in.us/fde',
          cal: 'https://www.ccs.k12.in.us/fde/about/calendar',
          isWcOne: true,
          wcOneUrl: 'https://www.ccs.k12.in.us/fde-lunch-menu',
          isWcTwo: false,
          wcTwoUrl: ''
        },
      }
    case 'mte':
      return {
        key: 'mte',
        path: require('./assets/schools/mte.jpg'),
        name: 'Mohawk Trails \nElementary School',
        nameFormat: 'Mohawk Trails Elementary School',
        schoolInfo: {
          color: '#065da9',
          url: 'https://www.ccs.k12.in.us/mte',
          cal: 'https://www.ccs.k12.in.us/mte/about/calendar',
          isWcOne: true,
          wcOneUrl: 'https://www.ccs.k12.in.us/mte-lunch-menu',
          isWcTwo: true,
          wcTwoUrl: 'https://www.ccs.k12.in.us/mte/student-life/clubs-activities'
        },
      }
      
    case 'ope':
      return {
        key: 'ope',
        path: require('./assets/schools/ope.png'),
        name: 'Orchard Park \nElementary School',
        nameFormat: 'Orchard Park Elementary School',
        schoolInfo: {
          color: '#dc0a39',
          url: 'https://www.ccs.k12.in.us/ope',
          cal: 'https://www.ccs.k12.in.us/ope/about/calendar',
          isWcOne: true,
          wcOneUrl: 'https://www.ccs.k12.in.us/ope-lunch-menu',
          isWcTwo: true,
          wcTwoUrl: 'https://www.ccs.k12.in.us/ope/student-life/cub-clubs'
        },
      }
    case 'pte':
      return {
        key: 'pte',
        path: require('./assets/schools/pte.png'),
        name: 'Prairie Trace \nElementary School',
        nameFormat: 'Prairie Trace Elementary School',
        schoolInfo: {
          color: '#0c49a2',
          url: 'https://www.ccs.k12.in.us/pte',
          cal: 'https://www.ccs.k12.in.us/pte/about/calendar',
          isWcOne: true,
          wcOneUrl: 'https://www.ccs.k12.in.us/pte-lunch-menu',
          isWcTwo: true,
          wcTwoUrl: 'https://www.ccs.k12.in.us/pte/student-life/student-clubs-and-programs'
        },
      }
    case 'sre':
      return {
        key: 'sre',
        path: require('./assets/schools/sre.png'),
        name: 'Smoky Row \nElementary School',
        nameFormat: 'Smoky Row Elementary School',
        schoolInfo: {
          color: '#e8122e',
          url: 'https://www.ccs.k12.in.us/sre',
          cal: 'https://www.ccs.k12.in.us/sre/about/calendar',
          isWcOne: true,
          wcOneUrl: 'https://www.ccs.k12.in.us/sre-lunch-menu',
          isWcTwo: true,
          wcTwoUrl: 'https://www.ccs.k12.in.us/sre/student-life/schoolwide-initiatives'
        },
      }
    case 'tme':
      return {
        key: 'tme',
        path: require('./assets/schools/tme.jpg'),
        name: 'Towne Meadow \nElementary School',
        nameFormat: 'Towne Meadow Elementary School',
        schoolInfo: {
          color: '#1a3365',
          url: 'https://www.ccs.k12.in.us/tme',
          cal: 'https://www.ccs.k12.in.us/tme/about/calendar',
          isWcOne: true,
          wcOneUrl: 'https://www.ccs.k12.in.us/tme-lunch-menu',
          isWcTwo: true,
          wcTwoUrl: 'https://www.ccs.k12.in.us/tme/student-life/extracurricular-activities'
        },
      }
    case 'wce':
      return {
        key: 'wce',
        path: require('./assets/schools/wce.png'),
        name: 'West Clay \nElementary School',
        nameFormat: 'West Clay Elementary School',
        schoolInfo: {
          color: '#dc101c',
          url: 'https://www.ccs.k12.in.us/wce',
          cal: 'https://www.ccs.k12.in.us/wce/about/calendar',
          isWcOne: true,
          wcOneUrl: 'https://www.ccs.k12.in.us/wce-lunch-menu',
          isWcTwo: true,
          wcTwoUrl: 'https://www.ccs.k12.in.us/wce/student-life/student-clubs'
        },
      }
    case 'wbe':
      return {
        key: 'wbe',
        path: require('./assets/schools/wbe.png'),
        name: 'Woodbrook Elementary \nSchool',
        nameFormat: 'Woodbrook Elementary School',
        schoolInfo: {
          color: '#065da9',
          url: 'https://www.ccs.k12.in.us/wce',
          cal: 'https://www.ccs.k12.in.us/wce/about/calendar',
          isWcOne: true,
          wcOneUrl: 'https://www.ccs.k12.in.us/wbe-lunch-menu',
          isWcTwo: true,
          wcTwoUrl: 'https://www.ccs.k12.in.us/wbe/student-life/student-clubs'
        },
      }
  }
}