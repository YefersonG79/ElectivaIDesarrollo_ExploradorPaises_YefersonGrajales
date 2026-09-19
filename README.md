
# Explorador de Países

**Materia:** Electiva I Desarrollo  
**Proyecto:** Explorador de Países  
**Equipo:** Trabajo individual  
**Integrante:** Yeferson Grajales  
**Repositorio:** [GitHub - Explorador de Países](https://github.com/YefersonG79/ElectivaIDesarrollo_ExploradorPaises_YefersonGrajales)

## Descripción

Explorador de Países es una aplicación web desarrollada con React y TypeScript que consume la API pública Countries.dev para consultar información de diferentes países.

La aplicación permite visualizar un listado, buscar países por nombre, consultar sus detalles y guardar favoritos. También incorpora estados de carga, error y ausencia de resultados, además de un mecanismo para reintentar una petición fallida sin recargar la página.

## Tecnologías utilizadas

- React
- TypeScript
- Vite
- CSS
- Fetch API
- Local Storage
- Git y GitHub

El proyecto utiliza componentes funcionales y estilos CSS propios. No requiere una base de datos ni una clave de API.

## API utilizada

**API:** [Countries.dev](https://countries.dev)

La información de los países se consulta mediante el endpoint:

```text
https://countries.dev/countries
```

El servicio solicita campos como nombre, capital, región, subregión, población, área, código del país, idiomas, monedas y zonas horarias.

Las imágenes de las banderas se muestran mediante [FlagCDN](https://flagcdn.com/), utilizando el código `alpha2Code` de cada país.

## Requisitos para ejecutar el proyecto

Antes de comenzar, se necesita:

- Node.js y npm compatibles con la versión de Vite utilizada.
- Un navegador web actualizado.
- Conexión a Internet para consultar la API y cargar las banderas.
- Git, si se desea clonar el repositorio desde la terminal.

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/YefersonG79/ElectivaIDesarrollo_ExploradorPaises_YefersonGrajales.git
```

### 2. Entrar en la carpeta del proyecto

```bash
cd ElectivaIDesarrollo_ExploradorPaises_YefersonGrajales
```

### 3. Instalar las dependencias

```bash
npm ci
```

### 4. Iniciar el servidor de desarrollo

```bash
npm run dev
```

Abrir en el navegador la dirección local indicada por Vite, normalmente:

```text
http://localhost:5173/
```

### 5. Validar el proyecto

Para ejecutar el análisis estático:

```bash
npm run lint
```

Para comprobar los tipos de TypeScript y generar la compilación de producción:

```bash
npm run build
```

Para visualizar localmente la compilación generada:

```bash
npm run preview
```

## Funcionalidades

| ID | Requisito | Implementación |
|---|---|---|
| RF-01 | Listado | Presenta países con bandera, nombre, capital, región y población. |
| RF-02 | Estados | Distingue los estados de carga, error, sin resultados y éxito. |
| RF-03 | Búsqueda | Filtra países mediante un input controlado y un retardo manual de 400 ms. |
| RF-04 | Detalle | Permite seleccionar un país, consultar información adicional y regresar al listado. |
| RF-05 | Favoritos | Permite marcar y desmarcar países, consultar un contador y conservar la selección en `localStorage`. |
| RF-06 | Reintento | Permite volver a ejecutar una petición fallida sin recargar la página. |

## Estructura del proyecto

```text
src/
├── components/
│   ├── BarraBusqueda.tsx
│   ├── ContadorFavoritos (contadorFavoritos.tsx)
│   ├── DetallePais.tsx
│   ├── EstadoMensajes.tsx
│   ├── ListaPaises.tsx
│   └── TarjetaPais.tsx
├── services/
│   └── api.ts
├── styles/
│   ├── barra-busqueda.css
│   ├── contador-favoritos.css
│   ├── detalle-pais.css
│   ├── estado-mensajes.css
│   ├── global.css
│   ├── lista-paises.css
│   └── tarjeta-pais.css
├── types/
│   └── api.ts
├── App.tsx
└── main.tsx
```

`App.tsx` coordina los estados principales, el filtrado, la selección de países y los favoritos.

`services/api.ts` centraliza la petición a Countries.dev y verifica la respuesta HTTP.

`types/api.ts` contiene las interfaces TypeScript utilizadas para representar los datos de los países.

Los componentes de `components/` se encargan de representar partes específicas de la interfaz, mientras que `styles/` contiene sus estilos CSS.

## Decisiones técnicas

### Consulta de datos

Se utiliza `fetch` nativo para consultar Countries.dev. La petición se ejecuta dentro de un `useEffect` y comprueba `response.ok` antes de procesar el JSON.

También se utiliza `AbortController` para cancelar la petición cuando se ejecuta la limpieza del efecto.

### Búsqueda

Se implementó un retraso de 400 ms mediante `setTimeout` dentro de `useEffect`, acompañado de `clearTimeout` para cancelar temporizadores anteriores.

La búsqueda no distingue entre mayúsculas y minúsculas y elimina los espacios al inicio y al final del término introducido.

### Favoritos

Los favoritos se identifican mediante `alpha2Code` y se almacenan en el navegador bajo la clave `favoriteCodes`.

Al iniciar la aplicación se recuperan los códigos guardados, y cuando cambia la selección se actualiza `localStorage`.

### Reintento de petición

Cuando ocurre un error, se presenta un botón para intentar nuevamente la consulta.

La acción restablece el estado de carga y actualiza un contador que permite volver a ejecutar el efecto de consulta, sin recargar la página.

## Organización del repositorio

El proyecto se desarrolló mediante Git y GitHub utilizando las siguientes ramas:

- `main`: versión estable para la entrega.
- `develop`: integración de los requisitos implementados.
- `feature/rf01-listado`: listado de países.
- `feature/rf02-estados`: estados de la interfaz.
- `feature/rf03-busqueda`: búsqueda de países.
- `feature/rf04-detalle`: detalle de país.
- `feature/rf05-favoritos`: favoritos.
- `feature/rf06-reintento`: reintento de petición.

Los requisitos se gestionaron mediante issues y se registraron con mensajes de commit descriptivos.

## Documentación adicional

- [BITACORA.md](./BITACORA.md): registro cronológico del desarrollo, dificultades, soluciones y pruebas realizadas.
- [DECLARACION-IA.md](./DECLARACION-IA.md): registro del uso de herramientas de inteligencia artificial durante el proyecto.

