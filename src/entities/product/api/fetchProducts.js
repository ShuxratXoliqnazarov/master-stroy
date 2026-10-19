import { api } from '@/shared/api'

export const fetchProducts = () => api.get('/data/products.json').then((r) => r.data)
