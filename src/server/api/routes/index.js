import url from 'url'
import {  getBusinessDay, getDateHoliday, listHolidays  } from '../controllers/index.js'
import {
  returnBadRequest,
  returnNotFound,
  returnOk
} from '../controllers/helpers.js'

export async function routes(request, response) {
  const { method } = request
  const path = request.url
  const statusHealth = ['/', '/api/v1', '/api/v1/health']
  const { year, country, date } = url.parse(path, true).query

  if (method === 'GET' && statusHealth.includes(path)) {
    returnOk(response)
  } else if (
    method === 'GET' &&
    path === `/api/v1/national-holidays?year=${year}&country=${country}`
  ) {
    await listHolidays(response, year, country)
  } else if (
    method === 'GET' &&
    path === `/api/v1/business-day?date=${date}&country=${country}`
  ) {
      await getBusinessDay(date, country, response)
  } else {
    returnNotFound(response)
  }
}

export async function handler(request, response) {
  try {
    return await routes(request, response)
  } catch (error) {
    returnBadRequest(response, error)
  }
}
