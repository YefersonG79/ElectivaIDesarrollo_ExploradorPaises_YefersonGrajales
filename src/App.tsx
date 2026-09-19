import { useState, useEffect } from 'react'
import type { Country } from './types/api'
import { getCountries } from './services/api'
import { ListaPaises } from './components/ListaPaises'
import { EstadoMensajes } from './components/EstadoMensajes'
import { BarraBusqueda } from './components/BarraBusqueda'
import { DetallePais } from './components/DetallePais'

function App() {
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [searchTerm, setSearchTerm] = useState('')
  const [debounceSearch, setDebounceSearch] = useState('')

  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null)

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceSearch(searchTerm)
    }, 400)

    return () => {
      clearTimeout(timer)
    }
  }, [searchTerm])

  const filteredCountries = countries.filter((country) => {
    const countryName = country.name.toLowerCase()
    const search = debounceSearch.toLowerCase().trim()
    return countryName.includes(search)
  })

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
  if (selectedCountry) {
    return (
      <DetallePais
        country={selectedCountry}
        onBack={() => setSelectedCountry(null)}
      />
    )
  }

  return (
    <>
      <BarraBusqueda
        value={searchTerm}
        onChange={setSearchTerm}
      />

      {filteredCountries.length === 0 ? (
        <EstadoMensajes
          type="Empty"
          mensaje="No se encontraron países."
        />
      ) : (
        <ListaPaises
          countries={filteredCountries}
          onSelectCountry={setSelectedCountry} />
      )}
    </>
  )
}

export default App;