import { blueDays, goldDays } from '../dataFiles/schedule';

const generateDates = (year, month, day, hours, minutes) => {
  const date = new Date(year, (month - 1), day, hours, minutes, 0, 0)
  return date
}

export const getMonday = (d) => {
  d = new Date(d);
  var day = d.getDay(),
  diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}

export const generateDays = () => {
  // console.log("ran generate days")
  const tempEvents = []
  let id = 0

  goldDays.forEach(month => {
    for (let i = 0; i < month.dates.length; i++) {
      if (month.lateStart[0] == month.dates[i] || month.lateStart[1] == month.dates[i]) {
        id += 1
        let tempG1 = {
          id,
          description: 'Gold 1',
          startDate: generateDates(2020, month.month, month.dates[i], 9, 25),
          endDate: generateDates(2020, month.month, month.dates[i], 10, 41),
          color: 'gold',
          todos: []
        }

        id += 1
        let tempG3 = {
          id,
          description: 'Gold 3',
          startDate: generateDates(2020, month.month, month.dates[i], 12, 18),
          endDate: generateDates(2020, month.month, month.dates[i], 14, 18),
          color: 'gold',
          todos: []
        }

        id += 1
        let tempG4 = {
          id,
          description: 'Gold 4',
          startDate: generateDates(2020, month.month, month.dates[i], 14, 28),
          endDate: generateDates(2020, month.month, month.dates[i], 15, 45),
          color: 'gold',
          todos: []
        }

        tempEvents.push(tempG1, tempG3, tempG4)
      } else {
        id += 1
        let tempG1 = {
          id,
          description: 'Gold 1',
          startDate: generateDates(2020, month.month, month.dates[i], 8, 45),
          endDate: generateDates(2020, month.month, month.dates[i], 10, 15),
          color: 'gold',
          todos: []
        }

        id += 1
        let tempG3 = {
          id,
          description: 'Gold 3',
          startDate: generateDates(2020, month.month, month.dates[i], 12, 5),
          endDate: generateDates(2020, month.month, month.dates[i], 14, 5),
          color: 'gold',
          todos: []
        }

        id += 1
        let tempG4 = {
          id,
          description: 'Gold 4',
          startDate: generateDates(2020, month.month, month.dates[i], 14, 15),
          endDate: generateDates(2020, month.month, month.dates[i], 15, 45),
          color: 'gold',
          todos: []
        }

        tempEvents.push(tempG1, tempG3, tempG4)
      }      
    }
  })

  blueDays.forEach(month => {
    for (let i = 0; i < month.dates.length; i++) {
      if (month.lateStart[0] == month.dates[i] || month.lateStart[1] == month.dates[i]) {
        id += 1
        let tempB1 = {
          id,
          description: 'Blue 1',
          startDate: generateDates(2020, month.month, month.dates[i], 9, 25),
          endDate: generateDates(2020, month.month, month.dates[i], 10, 41),
          color: 'blue',
          todos: []
        }

        id += 1
        let tempB2 = {
          id,
          description: 'Blue 2',
          startDate: generateDates(2020, month.month, month.dates[i], 10, 51),
          endDate: generateDates(2020, month.month, month.dates[i], 12, 8),
          color: 'blue',
          todos: []
        }

        id += 1
        let tempB3 = {
          id,
          description: 'Blue 3',
          startDate: generateDates(2020, month.month, month.dates[i], 12, 18),
          endDate: generateDates(2020, month.month, month.dates[i], 14, 18),
          color: 'blue',
          todos: []
        }

        id += 1
        let tempB4 = {
          id,
          description: 'Blue 4',
          startDate: generateDates(2020, month.month, month.dates[i], 14, 28),
          endDate: generateDates(2020, month.month, month.dates[i], 15, 45),
          color: 'blue',
          todos: []
        }

        tempEvents.push(tempB1, tempB2, tempB3, tempB4)
      } else {
        id += 1
        let tempB1 = {
          id,
          description: 'Blue 1',
          startDate: generateDates(2020, month.month, month.dates[i], 8, 45),
          endDate: generateDates(2020, month.month, month.dates[i], 10, 15),
          color: 'blue',
          todos: []
        }

        id += 1
        let tempB2 = {
          id,
          description: 'Blue 2',
          startDate: generateDates(2020, month.month, month.dates[i], 10, 25),
          endDate: generateDates(2020, month.month, month.dates[i], 11, 55),
          color: 'blue',
          todos: []
        }

        id += 1
        let tempB3 = {
          id,
          description: 'Blue 3',
          startDate: generateDates(2020, month.month, month.dates[i], 12, 5),
          endDate: generateDates(2020, month.month, month.dates[i], 14, 5),
          color: 'blue',
          todos: []
        }

        id += 1
        let tempB4 = {
          id,
          description: 'Blue 4',
          startDate: generateDates(2020, month.month, month.dates[i], 14, 15),
          endDate: generateDates(2020, month.month, month.dates[i], 15, 45),
          color: 'blue',
          todos: []
        }

        tempEvents.push(tempB1, tempB2, tempB3, tempB4)
      }
    }
  })

  return tempEvents
}