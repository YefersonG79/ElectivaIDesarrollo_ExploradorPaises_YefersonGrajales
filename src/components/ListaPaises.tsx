import type { Country } from '../types/api'
import { TarjetaPais } from './TarjetaPais'
import '../styles/lista-paises.css'

interface ListaPaisesProps {
  countries: Country[]
  onSelectCountry: (country: Country) => void
  favoriteCodes: string[]
  onToggleFavorite: (code: string) => void
}

export function ListaPaises({ countries, onSelectCountry, favoriteCodes, onToggleFavorite }: ListaPaisesProps) {
    return (
        <section className="countries-grid">
            {countries.map((country) => (
                <TarjetaPais 
                key={country.alpha2Code} 
                country={country} onSelect={onSelectCountry} 
                isFavorite={favoriteCodes.includes(country.alpha2Code)} 
                onToggleFavorite={onToggleFavorite} />
            ))}
            
        </section>
    )
}