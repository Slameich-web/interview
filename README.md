# SBER

Описание проекта (Когда-то оно будет)

## Подготовка к запуску проекта

Для начала нужно установить [yarn](sberusersoft), [VS Code](sberusersoft) и [NodeJS](sberusersoft)

Для работы в проекте используем только yarn

## Для работы в VS Code необходимы эти расширения

| Расширение                | Описание                                               |
| ------------------------- | ------------------------------------------------------ |
| ESLint                    | Для работы Eslint и поддержания кода на высоком уровне |
| Prettier - Code formatter | Для автоформатирования кода                            |

## Настройка VS Code

Переходим в настройки VS Code (ctrl + shift + p)

Ищем Open user settings (JSON)

Добавляем к настройкам

```json
{
  //your settings....
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "files.eol": "\n",
  "editor.formatOnSave": true,
  "eslint.validate": [
    "react",
    "html",
    "javascript",
    "typescript",
    "javascriptreact",
    "typescriptreact"
  ]
}
```

### Меняем Formatter

File -> Preferences -> Settings

В поиске пишем formatter

В поле Default Formatter выбираем Prettier - Code formatter

## Запуск проекта

Открываем проект в VS Code и выполняем команды:

Установка зависимостей в проекте

```bash
  yarn install
```

Локальный запуск проекта

```bash
  yarn start
```

## Требования проекта

### Уровень покрытия тестами

- Общее покрытие тестами должно быть не менее 30%
- Большая часть бизнес логики должна быть покрыта тестами
- Раз в спринт проводится встреча на которой планируются задачи по покрытию тестами

### Git и GitFlow

- main - код в эту ветку попадает только из веток release/x.x.x
- release/x.x.x - ответвление от ветки develop, создается для релиза(ПСИ и далее), отвечается тегом с номером релиза, для более удобной навигации в ветке main
- develop - основаная ветка, код в нее попадает только с помощью pull request, от этой ветке создаются все ветки под задачи
- feature/"JIRA_TASK"/"Developer" - ветка под задачу, вместо feature может быть fix, но по дефолту используем feature, JIRA_TASK - номер задачи в Jira, Developer - фамалия разработчика, опционально, если один человек работает над задачей можно не ставить.

### Git и Коммиты

В основном структура коммита выглядит так: feature/"JIRA_TASK"/Описание (На русском)
