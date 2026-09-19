import type { Country } from '../types/api'
import '../styles/detalle-pais.css'

interface DetallePaisProps {
    country: Country
    onBack: () => void
}

export function DetallePais({ country, onBack }: DetallePaisProps) {
    return (
        <div className="country-detail">
            <button type="button" onClick={onBack}>
                Volver al listado
            </button>
            <img
                src={`https://flagcdn.com/w320/${country.alpha2Code.toLowerCase()}.png`}
                alt={`Bandera de ${country.name}`}
            />
            <h1>{country.name}</h1>
            <p><strong>Capital:</strong> {country.capital}</p>
            <p><strong>Región:</strong> {country.region}</p>
            <p><strong>Subregión:</strong> {country.subregion}</p>
            <p><strong>Población:</strong> {country.population.toLocaleString()}</p>
            <p><strong>Moneda:</strong> {country.currencies.map((currency) => currency.name).join(', ') || 'No disponible'}</p>
            <p><strong>Idiomas:</strong> {country.languages.map((language) => language.name).join(', ') || 'No disponible'}</p>
            <p><strong>Codigos fronterizos:</strong> {country.borders.length > 0 ? country.borders.join(', ') : 'Ninguna'}</p>
            <p><strong>Área:</strong> {country.area.toLocaleString()} km²</p>
            <p><strong>Zona horaria:</strong> {country.timezones.join(', ') || 'No disponible'}</p>
        </div>
    )
}
