import { getHolidayService } from './holidays-service.js'

export async function businessDayService(date, country) {
  const result = {
    isBusinessDay: false,
    dayOfWeekName: '',
    national_Holiday: ''
  }

  const dayBusinessWeek = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday'
  ]
  const dayWeek = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
  ]

  result.dayOfWeekName = dayWeek[new Date(date).getUTCDay()]
  if (!dayBusinessWeek.includes(result.dayOfWeekName)) return result

  const fullYear = new Date(date).getFullYear()
  const data = await getHolidayService(fullYear, country, date)

  if (data.invalidated) return data

  const holiday = data.filter((item) => item.date === date)

  result.isBusinessDay = holiday.length === 0
  result.national_Holiday = holiday

  return result
}
