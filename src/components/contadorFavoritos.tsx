import '../styles/contador-favoritos.css'

interface ContadorFavoritosProps {
    total: number
}

export function ContadorFavoritos({ total }: ContadorFavoritosProps) {
    return (
        <div className="favorites-row">
            <div className="favorites-counter" aria-live="polite">
                <span className="favorites-icon" aria-hidden="true">★</span>
                <span>
                    {total} {total === 1 ? 'favorito' : 'favoritos'}
                </span>
            </div>
        </div>
    )
}