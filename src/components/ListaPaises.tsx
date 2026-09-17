import type { Country } from '../types/api'
import { TarjetaPais } from './TarjetaPais'
import '../styles/lista-paises.css'

interface ListaPaisesProps {
  countries: Country[]
}

export function ListaPaises({ countries }: ListaPaisesProps) {
    return (
        <section className="countries-grid">
            {countries.map((country) => (
                <TarjetaPais key={country.alpha2Code} country={country} />
            ))}
            
        </section>
    )
}