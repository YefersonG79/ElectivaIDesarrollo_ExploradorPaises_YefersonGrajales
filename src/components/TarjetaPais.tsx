import type { Country } from '../types/api'
import '../styles/tarjeta-pais.css'

interface TarjetaPaisProps {
    country: Country
}

export function TarjetaPais({ country }: TarjetaPaisProps) {
    return (
        <article className="country-card">
            <img
                src={`https://flagcdn.com/w320/${country.alpha2Code.toLowerCase()}.png`}
                alt={`Bandera de ${country.name}`}
            />
            <h2>{country.name}</h2>
            <p><strong>Capital:</strong> {country.capital}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Población:</strong> {country.population.toLocaleString()}</p>
        </article>
    )
}
