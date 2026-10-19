# Мастер Строй — лендинг

Одностраничный лендинг производителя тротуарной плитки (г. Волоколамск).

**Стек:** React 19 + Vite, Tailwind CSS 4, JavaScript, axios.

## Запуск

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # сборка в dist/
npm run preview  # просмотр сборки
```

## Структура

```
public/
  data/catalog.json, products.json   — данные каталога и «Топ товаров» (грузятся через axios)
  img/                                — логотип и иллюстрации (заглушки, заменить экспортом из Figma)
src/
  api/client.js        — axios-инстанс, загрузка данных, отправка заявки
  data/site.js         — контакты, меню, ID видео
  hooks/               — useFetch, useLockScroll
  utils/phone.js       — маска и валидация телефона
  components/          — секции страницы, модалка, лайтбокс
```

## Что заменить перед сдачей

- `src/data/site.js` → `VIDEO_ID` — ID ролика «История одного успеха» на YouTube.
- `src/data/site.js` → `email`, `coords` — email и координаты производства (сейчас пос. Чисмена, примерно).
- `public/img/*` — фото из макета (имена файлов можно оставить те же).
- `.env` → `VITE_LEAD_URL` — адрес для отправки заявок (см. `.env.example`).
  Без него форма работает в демо-режиме: имитирует успешную отправку.
