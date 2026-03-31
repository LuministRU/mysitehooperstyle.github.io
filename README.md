# Hooper Style Chat Card

Интерактивная визитка Python разработчика в стиле Эдварда Хоппера.

## О проекте

Чат-интерфейс с эффектами света и интерактивными элементами, созданный с использованием React, TypeScript, Tailwind CSS и Framer Motion.

## Демо

[https://mysitehooperstyle.github.io](https://mysitehooperstyle.github.io)

## Технологии

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- shadcn/ui
- Lucide React

## Установка и запуск

```bash
# Клонирование репозитория
git clone https://github.com/mysitehooperstyle/mysitehooperstyle.github.io.git
cd mysitehooperstyle.github.io

# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Предпросмотр продакшен сборки
npm run preview
```

## Деплой на GitHub Pages

### Автоматический деплой

```bash
# Установка зависимостей (первый раз)
npm install

# Деплой на GitHub Pages
npm run deploy
```

### Ручной деплой

1. Соберите проект:
```bash
npm run build
```

2. Закоммитьте папку `dist` в ветку `gh-pages`:
```bash
git add dist -f
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix dist origin gh-pages
```

### Настройка GitHub Pages

1. Перейдите в настройки репозитория на GitHub
2. В разделе **Pages** выберите:
   - Source: Deploy from a branch
   - Branch: gh-pages / (root)
3. Нажмите **Save**

## Структура проекта

```
├── src/
│   ├── components/     # React компоненты
│   │   ├── ChatContainer.tsx
│   │   ├── ChatMessage.tsx
│   │   ├── QuickReplies.tsx
│   │   └── LightEffects.tsx
│   ├── lib/           # Утилиты
│   ├── hooks/         # React хуки
│   └── App.tsx        # Главный компонент
├── dist/              # Собранный проект
├── public/            # Статические файлы
└── package.json       # Зависимости и скрипты
```

## Лицензия

MIT
