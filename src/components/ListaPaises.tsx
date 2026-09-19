import type { Country } from '../types/api'
import { TarjetaPais } from './TarjetaPais'
import '../styles/lista-paises.css'

interface ListaPaisesProps {
  countries: Country[]
  onSelectCountry: (country: Country) => void
}

export function ListaPaises({ countries, onSelectCountry }: ListaPaisesProps) {
    return (
        <section className="countries-grid">
            {countries.map((country) => (
                <TarjetaPais key={country.alpha2Code} country={country} onSelect={onSelectCountry} />
            ))}
            
        </section>
    )
}