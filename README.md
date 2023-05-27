# interview-calendar 
[![Netlify Status](https://api.netlify.com/api/v1/badges/036ad9e4-2684-4dac-b327-888d8dfd32c4/deploy-status)](https://app.netlify.com/sites/deviativae-uchi-calendar/deploys)  
https://deviativae-uchi-calendar.netlify.app/

## Веб приложение с недельным календарем
Нужно реализовать статичное веб приложение (SPA) используя create-react-app, React, styled-components и выложить его на Heroku.

Макеты c версткой календаря для мобильных браузеров:

* [Main Mobile](./1.%20Main%20Mobile@2x.png) - Основной вид календаря.
* [Delete Mobile](./2.%20Delete%20Mobile@2x.png) - После выбора события, появляется кнопка Delete.
* [Add Mobile](./3.%20Add%20Mobile@2x.png) - После нажатия `+` появляется стандартный попап (функция `prompt`) добавления события.

Для ширины страницы `<= 740px` календарь равномерно растягивается. Для ширины страницы `> 740px` ширина календаря `= 740px`, календарь выравнивантвается по горизонтали по центру страницы.
