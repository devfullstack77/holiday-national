import { returnBadRequest, returnOk } from './helpers.js'
import { businessDayService } from '../../../services/businessday-service.js'

export async function getBusinessDay(date, country, response) {
  const data = await businessDayService(date, country)
  if (data.invalidated) {
    return returnBadRequest(response, data)
  }
  returnOk(response, data)
}
