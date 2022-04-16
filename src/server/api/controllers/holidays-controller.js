import { returnBadRequest, returnOk } from "./helpers.js"
import { getHolidayService, listAllOfYearService } from "../../../services/holidays-service.js"

export async function listHolidays(response, year, country) {

  const data = await listAllOfYearService(year, country)
  if (data.invalidated) {
    return returnBadRequest(response, data)
  }
  returnOk(response, data)

}

export async function getDateHoliday(response, date, country) {

  const data = await getHolidayService(date, country)
  if (data.invalidated) {
    return returnBadRequest(response, data)
  }
  returnOk(response, data)

}