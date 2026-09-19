import '../styles/barra-busqueda.css';

interface BarraBusquedaProps {
    value: string;
    onChange: (value: string) => void;
}

export function BarraBusqueda({ value, onChange }: BarraBusquedaProps) {
    return (
        <div className="search-container">
            <label htmlFor="search-input">Buscar país:</label>
            <input
                id="search-input"
                className="search-input"
                type="text"
                value={value}
                placeholder="Ingresa el nombre del país..."
                onChange={(event) => onChange(event.target.value)}
            />
        </div>
    )
}