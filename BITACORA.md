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