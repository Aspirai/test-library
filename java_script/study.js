// JavaScript Study

if (false) {
    // 1. 变量和数据类型
    var name = 'Tom';
    console.log(name);

    // 2. 对象
    var car = {
        type: 'Fiat',
        model: 500,
        color: 'white',
        fullName: function () { // 对象方法
            return this.type + ' ' + this.model; // this 指向属性的拥有者
        },
    };
    console.log(car.fullName());

    // 2.1 对象属性访问
    console.log(car.type);
    console.log(car['type']);

    // 2.2 对象方法访问
    console.log(car.fullName());
    console.log(car['fullName']());
    // 若是不带括号，则返回函数定义
    console.log(car.fullName);

    // 2.3 避免使用字符串,数值,布尔值声明为对象
    var x = new String(); // 使用 new 关键字来声明JavaScript变量,则该变量会被创建为对象;
    var y = new Number();
    var z = new Boolean();
    console.log(x, y, z);

    // 注1: 请避免使用以上方法声明字符串,数值,布尔值,因为这样会降低运行速度,并可能会产生一些意想不到的结果
    // 注2: 对象内的属性是一个没有特定顺序的集合;在遍历对象的属性时,通常遵循以下规则:
    //      - 先按照属性名的数值顺序排列整数键,然后按照属性名的创建顺序排列字符串键,最后按照属性名的创建顺序排列的符号键
    //      - 请不要依赖属性的顺序,因为这在所有JavaScript引擎中都是不安全的

    let obj = {
        b: 2,
        a: 1,
        1: 'a',
        0: 'b',
        [Symbol('c')]: 'symbol', // Symbol类型的键
    }

    for (let key in obj) {
        console.log(key, obj[key]);
    }
    for (let key of Object.getOwnPropertySymbols(obj)) {
        console.log(key, obj[key]);
    }

    Object.keys(obj).map(key => {
        console.log(key, obj[key]);
    });

    // test()正则匹配
    let text = 'Hello World!';
    let pattern = /Hello/g;
    let result = pattern.test(text);
    console.log(result);


    // 对象作用域
    // 1.在JavaScript中,只存在函数作用域和全局作用域,不存在私有作用域
    // 一般规定,在属性前后加下划线,表示该属性为私有属性,不应该被外部访问
    let obj1 = {
        _name: 'Tom',
        _age: 18,
        _say_: function () {
            console.log('Hello World!');
        },
        say: function () {
            this._say();
        },
    }
    // 告诉其它开发者,不要直接访问_name和_age属性,_say_方法,这是私有的

    // 2.在JavaScript中,没有静态作用域
    function sayHello() {
        console.log('Hello World!');
    }
    sayHello.alternate = function () {
        console.log('Hello Alternate!');
    }
    sayHello();
    sayHello.alternate();


    // this 关键字,总是指向调用函数的对象.谁调用了函数,谁就是this
    var Car = new Object();
    Car.color = 'red';
    Car.showColor = function () {
        console.log(this.color);
    }
    Car.showColor1 = function () {
        console.log(Car.color);
    }
    Car.showColor(); // red
    Car.showColor1(); // red
}


