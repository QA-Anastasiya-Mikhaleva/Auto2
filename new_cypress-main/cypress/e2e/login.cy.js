describe('Проверка авторизации', function ()  {
it('Верный логин и верный пароль', function () {
    cy.visit('https://login.qa.studio/'); // Зашла на сайт
    cy.get('#mail').type('german@dolnikov.ru'); // Ввела верный логин
    cy.get('#pass').type('iLoveqastudio1') // Ввела верный пароль
    cy.get('#loginButton').click(); // Нажала Войти
    cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю текст
    cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть кретстик и он виден пользователю
})
it('Верный логин и НЕверный пароль', function () {
    cy.visit('https://login.qa.studio/'); // Зашла на сайт
    cy.get('#mail').type('german@dolnikov.ru'); // Ввела верный логин
    cy.get('#pass').type('iLoveqastudio2') // Ввела НЕверный пароль
    cy.get('#loginButton').click(); // Нажала Войти
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю текст
    cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть кретстик и он виден пользователю
})
it('НЕверный логин и верный пароль', function () {
    cy.visit('https://login.qa.studio/'); // Зашла на сайт
    cy.get('#mail').type('german@dolnikovа.ru'); // Ввела НЕверный логин, в конце логина есть лишняя буква a
    cy.get('#pass').type('iLoveqastudio1') // Ввела верный пароль
    cy.get('#loginButton').click(); // Нажала Войти
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю текст
    cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть кретстик и он виден пользователю
})
it('Логин без @ и верный пароль', function () {
    cy.visit('https://login.qa.studio/'); // Зашла на сайт
    cy.get('#mail').type('germandolnikov.ru'); // Ввела логин без @
    cy.get('#pass').type('iLoveqastudio1') // Ввела верный пароль
    cy.get('#loginButton').click(); // Нажала Войти
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю текст
    cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть кретстик и он виден пользователю
})
it('Проверка восстановления пароля', function () {
    cy.visit('https://login.qa.studio/'); // Зашла на сайт
    cy.get('#forgotEmailButton').click(); // Нажала "Забыли пароль?"
    cy.get('#mailForgot').type('german@dolnikov1.ru'); // Ввела почту для востановления
    cy.get('#restoreEmailButton').click();
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю текст
    cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть кретстик и он виден пользователю
})
it('Проверка строчных букв в логине', function () {
    cy.visit('https://login.qa.studio/'); // Зашла на сайт
    cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввела логин с разным регистром
    cy.get('#pass').type('iLoveqastudio1') // Ввела верный пароль
    cy.get('#loginButton').click(); // Нажала Войти
    cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю текст
    cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть кретстик и он виден пользователю
})
})
describe('Проверка покупки нового аватара', function () {                 // название набора тестов
    it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
         cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
         cy.get('input[id="k_email"]').type('USER_LOGIN');                   // вводим логин
         cy.get('input[id="k_password"]').type('USER_PASSWORD');               // вводим пароль
         cy.get('button[type="submit"]').click();                // нажимаем кнопку Подтвердить
         cy.wait(2000);
         cy.get('.header_card_trainer').click();            // Клик в шапке на аву тренера
         cy.wait(2000);
         cy.get('.k_mobile > :nth-child(5) > #dropdown > img').click(); // нажимаем кнопку Смена аватара
         cy.get('.available > button').first().click();   // кликаем Купить у первого доступного аватара
         cy.get('.card_number').type('4620869113632996');                     // вводим номер карты
         cy.get('.card_csv').type('125');                             // вводим CVV карты
         cy.get('.card_date').type('1227');                           // вводим срок действия карты
         cy.get('.card_name').type('NAME');                           // вводим имя владельца действия карты
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();     // нажимаем кнопку Оплатить
         cy.get('.threeds_number').type('56456');                            // вводим код подтверждения СМС
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();   // нажимаем кнопку Оплатить
         cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения об успешной покупке
     });
 });