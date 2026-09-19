import '../styles/estado-mensajes.css'

type EstadoTipo = 'Loading' | 'Error' | 'Empty';

interface EstadoMensajesProps {
    type: EstadoTipo;
    mensaje: string;
}

export function EstadoMensajes({ type, mensaje }: EstadoMensajesProps) {
    return (
        <div className={`status-message status-${type.toLowerCase()}`}>
            <p>{mensaje}</p>
        </div>
    );
}