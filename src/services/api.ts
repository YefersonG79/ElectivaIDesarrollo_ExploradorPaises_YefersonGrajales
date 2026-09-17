import type { Country } from '../types/api'

const API_URL =
  'https://countries.dev/countries?fields=name,capital,region,subregion,population,area,alpha2Code,flags,languages,currencies,timezones,borders&sort=name'

export async function getCountries(signal?: AbortSignal): Promise<Country[]> {
  const response = await fetch(API_URL, { signal })

  if (!response.ok) {
    throw new Error(`Error al obtener los países: ${response.status}`)
  }

  return response.json()
}