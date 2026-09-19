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

### RF-04: Detalle de país

**Trabajo realizado:**
- Creación de la rama `feature/rf04-detalle`.
- Implementación de la selección de países desde las tarjetas.
- Creación del componente `DetallePais` y sus estilos.
- Visualización de información adicional del país seleccionado.
- Implementación del botón para regresar al listado.
- Validación del funcionamiento y del diseño responsive.
- Ejecución satisfactoria de `npm run lint` y `npm run build`.
- Integración de RF-04 en `develop`.

**Commit relacionado:**
- `feat: added country detail view`


### RF-05: Favoritos con persistencia

**Trabajo realizado:**
- Creación de la rama `feature/rf05-favoritos`.
- Implementación del componente `ContadorFavoritos`.
- Creación del estado `favoriteCodes` para almacenar los códigos de los países favoritos.
- Implementación de la función `toggleFavorite` para agregar y quitar países de favoritos.
- Incorporación del botón de favoritos en `TarjetaPais` y conexión de sus propiedades mediante `ListaPaises`.
- Implementación de la lectura y escritura de favoritos mediante `localStorage`.
- Ajuste visual del contador y de los botones de las tarjetas.
- Validación satisfactoria mediante `npm run lint` y `npm run build`.

**Dificultades encontradas:**
- Se presentó un error de TypeScript al intentar utilizar `favoriteCodes` dentro de su propia inicialización.
- Durante las primeras pruebas, el contador se reiniciaba al recargar la página.
- Los botones de las tarjetas aparecían desalineados y con tamaños diferentes.

**Soluciones aplicadas:**
- Se corrigió la inicialización del estado mediante la lectura de `localStorage`.
- Se separó la recuperación de los favoritos de su escritura mediante un `useEffect`.
- Se corrigió la escritura del almacenamiento y se comprobó la persistencia después de recargar.
- Se organizaron los botones mediante CSS para mantener una presentación uniforme.

**Pruebas realizadas:**
- Agregar países a favoritos: correcto.
- Quitar países de favoritos: correcto.
- Actualización del contador: correcto.
- Conservación de favoritos después de recargar: correcto.
- Cambio del texto del botón según el estado de favorito: correcto.
- Compilación y análisis estático en la rama de funcionalidad: correctos.

**Commit relacionado:**
- `feat: added persistent country favorites`


### RF-06: Reintento de petición

**Trabajo realizado:**
- Creación de la rama `feature/rf06-reintento`.
- Incorporación del botón «Intentar nuevamente» en el estado de error.
- Implementación de `handleRetry` para limpiar el error y activar el estado de carga.
- Incorporación de `retryCount` como dependencia del efecto que consulta Countries.dev.
- Conservación del uso de `AbortController` para cancelar peticiones.
- Integración de RF-06 en `develop`.

**Dificultades encontradas:**
- Al simular una desconexión con DevTools en modo Offline, Chrome mostraba su propia página de error.
- Durante las pruebas, la caché del navegador permitía que algunas peticiones finalizaran correctamente.

**Soluciones aplicadas:**
- Se verificó el estado de error mediante una modificación temporal del endpoint.
- Se utilizó Request blocking de DevTools para bloquear únicamente la solicitud a Countries.dev.
- Se desactivó el bloqueo y se comprobó la recuperación del listado sin recargar la página.

**Pruebas realizadas:**
- Visualización del estado de error: correcta.
- Aparición del botón «Intentar nuevamente»: correcta.
- Ejecución de una nueva petición: correcta.
- Recuperación del listado sin recargar: correcta.
- Ejecución de `npm run lint` y `npm run build` en la rama de funcionalidad y en `develop`: correcta.

**Commit relacionado:**
- `feat: added request retry on error`