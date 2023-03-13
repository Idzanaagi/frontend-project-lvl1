[![Actions Status](https://github.com/Idzanaagi/frontend-project-lvl1/workflows/hexlet-check/badge.svg)](https://github.com/Idzanaagi/frontend-project-lvl1/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/67c6a20d1cf3563424cc/maintainability)](https://codeclimate.com/github/Idzanaagi/frontend-project-lvl1/maintainability)
[![Linter](https://github.com/Idzanaagi/frontend-project-lvl1/workflows/linter/badge.svg)](https://github.com/Idzanaagi/frontend-project-lvl1/actions)

<h1> Игры разума </h1>
<h2> Набор из 5 консольных математических игр </h2>

Первый учебный проект. Прорабатывались модульный подход, использование абстракций и чистых функций, соответствие кода стандарту Airbnb.

### Стек: JavaScript, readline-sync, eslint

### Описание: 
- создала логику 5 игр: ['Проверка на чётность'](https://github.com/Idzanaagi/frontend-project-lvl1/blob/main/src/games/brain-even.js), ['Калькулятор'](https://github.com/Idzanaagi/frontend-project-lvl1/blob/main/src/games/brain-calc.js), ['НОД'](https://github.com/Idzanaagi/frontend-project-lvl1/blob/main/src/games/brain-gcd.js), ['Пропущенное число'](https://github.com/Idzanaagi/frontend-project-lvl1/blob/main/src/games/brain-progression.js) и ['Простое число'](https://github.com/Idzanaagi/frontend-project-lvl1/blob/main/src/games/brain-prime.js);
- добавила библиотеку *readline-sync* для взаимодействия с пользователем;
- вывела общую для всех игр логику в [отдельный модуль](https://github.com/Idzanaagi/frontend-project-lvl1/blob/main/src/index.js);
- подключила *eslint* (станадарт Airbnb) и переписала код c "того, что было", на то "как надо".
------------

<b> Так, например, выглядит игра "Проверка на чётность": </b>

[![asciicast](https://asciinema.org/a/riKy7IApXuxBTfNZR166fyVw0.svg)](https://asciinema.org/a/riKy7IApXuxBTfNZR166fyVw0)

### Установка: 
- склонировать себе этот репозиторий; 
- перейдя в папку установленного проекта, набрать в терминале make install для установки зависимостей;
- затем набрать make название_игры. На выбор – brain-even, brain-calc, brain-gcd, brain-progression и brain-prime. Например, make brain-even. 

------------

### Описание игр и команды для их вызова: 
- «Проверка на чётность». Пользователю нужно ответить, является ли число чётным.  
 ```
 make brain-even 
 ```
- «Калькулятор». Здесь надо решить математический пример. Доступны операции сложения, вычитания и умножения. 
```
make brain-calc
 ```
- «НОД». Для двух чисел нужно найти наибольший общий делитель.
```
 make brain-gcd 
 ```
- «Прогрессия». В ряде чисел, образующих математическую прогрессию, пропущено число. Его и надо определить.
 ```
make brain-progression
 ```
- «Простое число». Игрок должен ответить, является ли число простым. 
```
make brain-prime
 ```

------------
#### Демо остальных игр:
calculatorGame:

[![asciicast](https://asciinema.org/a/y1qPKLkiZlDbJwu6LozwztavU.svg)](https://asciinema.org/a/y1qPKLkiZlDbJwu6LozwztavU)

gcdGame:

[![asciicast](https://asciinema.org/a/68CnfEq0xfPiapQ6kCgNBNlms.svg)](https://asciinema.org/a/68CnfEq0xfPiapQ6kCgNBNlms)

progressionGame:

[![asciicast](https://asciinema.org/a/NyHb5pYBV4HBrxtTdtII3TIuh.svg)](https://asciinema.org/a/NyHb5pYBV4HBrxtTdtII3TIuh)

isPrimeGame:

[![asciicast](https://asciinema.org/a/lXc294cmoLJz384alOZM1TPho.svg)](https://asciinema.org/a/lXc294cmoLJz384alOZM1TPho)
