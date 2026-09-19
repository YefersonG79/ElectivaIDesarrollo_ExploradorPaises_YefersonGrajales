import { useState, useEffect } from 'react'
import type { Country } from './types/api'
import { getCountries } from './services/api'
import { ListaPaises } from './components/ListaPaises'
import { EstadoMensajes } from './components/EstadoMensajes'

function App() {
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    getCountries(controller.signal)
      .then((data) => {
        setCountries(data)
      })
      .catch((err: unknown) => {
        if (err instanceof DOMException && err.name === 'AbortError') {
          return
        }

        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('Error desconocido')
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      })

    return () => {
      controller.abort()
    }
  }, [])


  if (loading) {
    return (
      <EstadoMensajes type="Loading" mensaje="Cargando países..." />
    )
  }
  if (error) {
    return (
      <EstadoMensajes type="Error" mensaje={error} />
    )
  }
  if (countries.length === 0) {
    return (
     <EstadoMensajes type="Empty" mensaje="No se encontraron países." />
    )
  }

  return <ListaPaises countries={countries} />
}

export default App;