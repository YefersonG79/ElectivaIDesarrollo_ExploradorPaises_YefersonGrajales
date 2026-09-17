export interface CountryFlags {
  png: string
  svg: string
}

export interface CountryLanguage {
  iso639_1?: string
  iso639_2?: string
  name: string
  nativeName?: string
}

export interface CountryCurrency {
  code: string
  name: string
  symbol?: string
}

export interface Country {
  name: string
  capital: string
  region: string
  subregion: string
  population: number
  area: number
  alpha2Code: string
  flags: CountryFlags
  languages: CountryLanguage[]
  currencies: CountryCurrency[]
  timezones: string[]
  borders: string[]
}