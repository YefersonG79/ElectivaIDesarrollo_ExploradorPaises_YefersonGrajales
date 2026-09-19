# Bitácora de desarrollo

## 16/09/2026

**Trabajo realizado:**
- Creación y configuración inicial del repositorio.
- Inicialización del proyecto con React, TypeScript y Vite.
- Creación de la rama `develop`.
- Creación de los issues RF-01 a RF-06.
- Evaluación de la API inicialmente seleccionada.
- Cambio de API REST Countries a Countries.dev.
- Creación de la rama `feature/rf01-listado`.
- Definición de tipos TypeScript.
- Implementación del servicio para consumir Countries.dev.

**Dificultades:**
La versión pública de REST Countries utilizada inicialmente se encontraba deprecada y la versión vigente requería autenticación.

**Solución:**
Se utiliza Countries.dev como alternativa pública sin autenticación.

**Commits relacionados:**
- `chore: initialized React TypeScript project with Vite`
- `feat: added typed countries API service`

---

## 17/09/2026

**Trabajo realizado:**
- Implementación de `ListaPaises`.
- Implementación de `TarjetaPais`.
- Integración del consumo de la API en `App.tsx`.
- Implementación de `AbortController`.
- Creación de estilos responsive.
- Corrección de la visualización de la bandera de Afghanistan mediante FlagCDN.
- Validación mediante `npm run lint`.
- Validación mediante `npm run build`.
- Integración de `feature/rf01-listado` en `develop`.

**Dificultades:**
- La imagen de la bandera de Afghanistan no cargaba desde la URL proporcionada por la API.

**Solución:**
- Las banderas se construyen mediante FlagCDN utilizando `alpha2Code`.

**Commits relacionados:**
- `feat: added countries listing interface`

## 18/09/2026

**Trabajo realizado:**
- Creación de la rama `feature/rf02-estados`.
- Implementación del componente `EstadoMensajes`.
- Implementación de los estados de cargando, error, sin resultados y éxito.
- Pruebas manuales de cada estado.
- Validación mediante `npm run lint`.
- Validación mediante `npm run build`.
- Integración de RF-02 en `develop`.

**Pruebas realizadas:**
- Estado cargando: correcto.
- Estado error: correcto.
- Estado sin resultados: correcto.
- Estado éxito: correcto.

**Commit relacionado:**
- `feat: added interface states`

## 19/09/2026

**Trabajo realizado:**
- Creación de la rama `feature/rf03-busqueda`.
- Implementación del componente `BarraBusqueda`.
- Implementación de input controlado.
- Implementación de búsqueda con retardo de 400 ms.
- Uso de `setTimeout` dentro de `useEffect`.
- Limpieza del temporizador mediante `clearTimeout`.
- Implementación de búsqueda sin distinción entre mayúsculas y minúsculas.
- Manejo del estado sin resultados.
- Ajuste responsive de las tarjetas durante búsquedas con pocos resultados.
- Ajuste de las imágenes de banderas para conservar su proporción.
- Validación mediante `npm run lint`.
- Validación mediante `npm run build`.
- Integración de RF-03 en `develop`.

**Pruebas realizadas:**
- Búsqueda con nombre completo: correcta.
- Búsqueda parcial: correcta.
- Búsqueda con mayúsculas y minúsculas: correcta.
- Búsqueda sin coincidencias: correcta.
- Borrado del término de búsqueda: correcto.
- Retardo de 400 ms: correcto.

**Commit relacionado:**
- `feat: added debounced country search`