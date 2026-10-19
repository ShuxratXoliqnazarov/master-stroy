import { useEffect, useState } from 'react'

/** Загружает данные через переданную функцию (axios) и отдаёт { data, loading, error }. */
export function useFetch(fetcher) {
  const [state, setState] = useState({ data: null, loading: true, error: null })

  useEffect(() => {
    let active = true
    fetcher()
      .then((data) => active && setState({ data, loading: false, error: null }))
      .catch((error) => active && setState({ data: null, loading: false, error }))
    return () => {
      active = false
    }
  }, [fetcher])

  return state
}
