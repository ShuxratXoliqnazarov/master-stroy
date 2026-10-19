# Мастер Строй — лендинг

Одностраничный лендинг производителя тротуарной плитки (г. Волоколамск).

**Стек:** React 19 + Vite, Tailwind CSS 4, JavaScript, axios.
**Архитектура:** [Feature-Sliced Design](https://feature-sliced.design/ru/), проверяется линтером [Steiger](https://github.com/feature-sliced/steiger).

## Запуск

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # сборка в dist/
npm run preview  # просмотр сборки
npm run lint:fsd # проверка правил FSD
```

## Структура (FSD)

Слои импортируют только из слоёв ниже: `app → pages → widgets → features → entities → shared`.
Каждый слайс наружу отдаёт только свой `index.js` (public API), импорты — через алиас `@/`.

```
src/
  app/                      App, провайдер заявки, глобальные стили
  pages/home/               страница — собирает виджеты по порядку
  widgets/                  самостоятельные блоки страницы
    top-bar, header, hero, catalog, about, top-products,
    production, works, advantages, delivery, footer
  features/                 действия пользователя
    callback-request/       модалка «Заказать звонок», валидация, отправка (axios), кнопка «+» на товаре
    select-tile-color/      выбор цвета плитки
    play-video/             ленивая загрузка видео по клику
  entities/                 бизнес-сущности
    product/                товар: API, цвета/прайс, карточка, иллюстрация плитки
    category/               раздел каталога: API, карточка
  shared/                   переиспользуемое без бизнес-логики
    api/                    axios-инстанс
    config/                 контакты, меню, ID видео
    lib/                    хуки, маска телефона
    ui/                     иконки, Reveal, Logo, Lightbox, YandexMap
public/
  data/                     catalog.json, products.json (грузятся через axios)
  img/                      картинки (заглушки — заменить экспортом из Figma)
```

Карточка товара (`entities/product`) только отображает данные и принимает слоты `colorSelect` и `action`.
Собирает её виджет `top-products`, подставляя фичи `select-tile-color` и `callback-request` —
так сущность не зависит от фич.

Правило `fsd/insignificant-slice` в `steiger.config.js` отключено: на одностраничном сайте каждый виджет
используется ровно один раз, это нормально.

## Что заменить перед сдачей

- `src/shared/config/site.js` → `VIDEO_ID` — ID ролика «История одного успеха» на YouTube.
- `src/shared/config/site.js` → `email`, `coords` — email и координаты производства (сейчас пос. Чисмена, примерно).
- `public/img/*` — фото из макета (имена файлов можно оставить те же).
- `.env` → `VITE_LEAD_URL` — адрес для отправки заявок (см. `.env.example`).
  Без него форма работает в демо-режиме: имитирует успешную отправку.
