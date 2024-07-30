// Task 2.
// Разработать тест со следующими шагами:
//  - Открыть url https://anatoly-karpovich.github.io/aqa-course-project/#
//  - Войти в приложения используя учетные данные aqacourse@gmail.com / password при этом:
//  - проверить исчезновение спиннера с помощью waitFor* методов
//  - проверить действительно ли пользователь с логином AQA User вошел в систему
//  - Прокликать каждый элемент бокового меню, убедится что после клика background-color элемента не красный

//  Рекомендации по использованию:
//  - метод $$ поиска по всем элементам
//  - for .. of  для перебора коллекции элементов 
//  - метод click() для клика по элементу в цикле
//  - Проверить background-color можно двумя способами:
//     1. По CSS стилю.  element.getCSSProperty('background-color)  https://webdriver.io/docs/api/element/getCSSProperty
//     2. По отсутствию класса, отвечающего за добавление красного бэкграунда.  element.getAttribute('class') https://webdriver.io/docs/api/element/getAttribute
