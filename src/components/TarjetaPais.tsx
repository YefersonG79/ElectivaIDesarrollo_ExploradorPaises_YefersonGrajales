import type { Country } from '../types/api'
import '../styles/tarjeta-pais.css'

interface TarjetaPaisProps {
    country: Country
    onSelect: (country: Country) => void
    isFavorite: boolean
    onToggleFavorite: (code: string) => void
}

export function TarjetaPais({ country, onSelect, isFavorite, onToggleFavorite }: TarjetaPaisProps) {
    return (
        <article className="country-card">
            <img
                src={`https://flagcdn.com/w320/${country.alpha2Code.toLowerCase()}.png`}
                alt={`Bandera de ${country.name}`}
            />
            <h2>{country.name}</h2>
            <p><strong>Capital:</strong> {country.capital}</p>
            <p><strong>Región:</strong> {country.region}</p>
            <p><strong>Población:</strong> {country.population.toLocaleString()}</p>
            <div className="country-actions">
                <button
                    type="button"
                    className="details-button"
                    onClick={() => onSelect(country)}
                >
                    Ver detalles
                </button>

                <button
                    type="button"
                    className={`favorite-button ${isFavorite ? 'is-favorite' : ''}`}
                    onClick={() => onToggleFavorite(country.alpha2Code)}
                    aria-pressed={isFavorite}
                >
                    {isFavorite ? '★ Quitar de favoritos' : '☆ Añadir a favoritos'}
                </button>
            </div>
        </article>
    )
}

