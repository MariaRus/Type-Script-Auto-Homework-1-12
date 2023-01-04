/*Создать валидатор, 2 метода: валидатор и логин. Первый метод принимают у пользователя логин и пароль для регистрации.
Затем данные записать в обьект. Второй метод принимает данные пользователя и объект зарегестрированного пользователя.
Если передан верный логин и пароль, вывести сообщение **Добро пожалоВать**.*/

const user: any = {
    login: "",
    password: "",
    loginUser: function (login: string, password: string): any {
        this.login = login;
        this.password = password;
    },
    validator: function(login: string, password: string): any {
        if (this.login === login && this.password === password) {
            console.log("Добро пожаловать!");
        } else {
            console.log("Неверные данные");
        }
    }
}

user.loginUser("user", "111111");
user.validator("user", "111111");