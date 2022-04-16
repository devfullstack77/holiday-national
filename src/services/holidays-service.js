import 'dotenv/config'
import fetch from 'node-fetch'
import { validateParams } from './util.js'

export async function listAllOfYearService(year, country) {
  const params = validateParams(year, country)
  if (params.invalidated) return params

  const urlHoliday = process.env.URL_HOLIDAY_API + `/${year}/${country}`
  const result = await fetch(urlHoliday)
  return result.json()
}

export async function getHolidayService(year, country, date) {
  const params = validateParams(year, country)
  if (params.invalidated) return params

  const urlHoliday = process.env.URL_HOLIDAY_API + `/${year}/${country}`
  const result = await fetch(urlHoliday)
  const data = await result.json()

  const holiday = data.filter((item) => item.date === date)

  return holiday

}