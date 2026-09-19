import '../styles/estado-mensajes.css'

type EstadoTipo = 'Loading' | 'Error' | 'Empty';

interface EstadoMensajesProps {
    type: EstadoTipo;
    mensaje: string;
    onRetry?: () => void;
}

export function EstadoMensajes({ type, mensaje, onRetry }: EstadoMensajesProps) {
    return (
        <div className={`status-message status-${type.toLowerCase()}`}>
            <p>{mensaje}</p>
            {type === 'Error' && onRetry && (
                <button type="button" onClick={onRetry}>
                    Intentar nuevamente
                </button>
            )}
        </div>
    );
}