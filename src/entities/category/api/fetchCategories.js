import { api } from '@/shared/api'

export const fetchCategories = () => api.get('/data/catalog.json').then((r) => r.data)
