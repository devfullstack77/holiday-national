
export function validateParams(year, country) {
  const invalidateCountry = country.trim().length !== 2
  const invalidateYear = isNaN(year) || year.toString().trim().length !== 4

  return {
    invalidated: invalidateCountry || invalidateYear,
    year: invalidateYear ? 'not a number or wrong year format YYYY' : 'number',
    country: invalidateCountry
      ? 'max length 2 to country'
      : country.toUpperCase()
  }
}