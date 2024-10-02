## React学习

#### 1.创建虚拟DOM

```
const VDOM = // 此处一定不要写引号，因为不是字符串
    <h1 id='title'>
        <span>Hello React!</span>
    </h1> 
```

#### 2.渲染虚拟DOM到页面

```
ReactDOM.render(VDOM, document.getElementById('test'))
```

#### 3.关于虚拟DOM

​      1. 本质是Object类型的对象（一般对象）

​      2.虚拟DOM比较“轻”，真实DOM比较“重”，因为虚拟DOM是React内部在用，无需真实DOM上那么多的属性

​      3.虚拟DOM最终会被React转为真实DOM，呈现在页面上

#### 4.JSX语法规则

```
    JSX语法规则：
    1. 定义虚拟DOM时，不要写引号；
    2. 标签中混入JS表达式时要用{}；
    3. 样式的类名指定不要用class，要用className；
    4. 内联样式，要用style={{key:value}}的形式；
    5. 虚拟DOM只能有一个根标签；
    6. 标签必须闭合；
    7. 标签首字母
        1. 若小写字母开头，则将该标签转为html中的同名元素，若html中无该标签对应的同名元素，则报错；
        2. 若大写字母开头，React就去渲染对应的组件，若组件没有定义，则报错；
```

#### 5.函数式组件的定义

```
    <script type="text/babel">//babel编译后开启严格模式
        // 1. 创建函数式组件(首字母大写)
        function MyComponent(){
            console.log(this);
            return <h2>我是用函数定义的组件(使用于【简单组件】的定义)</h2>
        }
        // 2. 渲染虚拟DOM到页面
        ReactDOM.render(<MyComponent/>,document.getElementById('test'))
        /*
            执行了ReactDOM.render(<MyComponent/>,document.getElementById('test'))后,发生了什么？
            1.React解析组件标签，找到了MyComponent组件
            2.发现组件是使用函数定义的，随后调用该函数，将返回的虚拟DOM转为真实DOM，随后渲染到页面中
            1. ReactDOM.render()会将<MyComponent/>组件渲染到页面中的id为test的div中
            2. 首先会调用MyComponent()函数，得到一个React元素
            3. 然后将React元素转为真实DOM元素，最后插入到页面中
        */
    </script>
```

#### 6.1.组件实例的三大属性---state

```
    <script type="text/babel">//babel编译后开启严格模式
        // 1.创建组件
        class Weather extends React.Component{
            // 构造器调用几次？---1次
            constructor(props){
                console.log('constructor');
                super(props)
                // 初始化状态
                this.state = {
                    isHot:true,
                    wind:'微风'
                }
                // 解决changeWeather中this指向问题
                this.changeWeather = this.changeWeather.bind(this)//bind的功能是改变this指向，此处的bind(this)指向的是Weather组件实例对象
            }
            // render调用几次？---1+n次 1是初始化调用，n是状态更新调用
            render(){
                const {isHot,wind} = this.state
                console.log(this);
                // return <h1>今天天气很{this.state.isHot ? '炎热' : '凉爽'}</h1>
                return <h1 id="title" onClick = {this.changeWeather}>今天天气很{isHot ? '炎热' : '凉爽'},{wind}</h1>
                // onclick中的c要大写，demo后面不要加括号
            }
            // changeWeather调用几次？---点几次调几次
            changeWeather(){
                // changeWeather放在了那里？---Weather的原型对象中，供实例使用
                // 由于changeWeather是作为onClick的回调函数，所以它内部的this是undefined
                // console.log('标题被点击了');

                // 获取原来的isHot值
                const isHot = this.state.isHot

                // 严重注意：状态（state）不能直接更改，下面这行就是直接更改！！！
                this.state.isHot = !isHot
                // 严重注意：状态必须通过setState()来更改
                this.setState({isHot:!isHot})
                console.log(this.state.isHot);
            }
        }
        // 2. 渲染虚拟DOM到页面
        ReactDOM.render(<Weather/>,document.getElementById('test'))
        
        const title = document.getElementById('title')
        /*  title.addEventListener('click',()=>{
            console.log('标题被点击了');
        })
        title.onclick = ()=>{
            console.log('标题被点击了');
        } */
    </script>
```

#### 6.2组件三大属性---props

```
props是React组件中用于传递数据的一种机制。它们是从父组件传递到子组件的不可变数据。子组件通过props接收从父组件传递过来的数据。props可以包含任何类型的数据，包括基本数据类型、对象、数组、甚至是函数。

如何使用props
定义父组件：在父组件中，你可以将数据作为属性传递给子组件。

**传递props**：在JSX中，你可以像设置HTML属性一样设置props。

**子组件中接收props**：在子组件中，你可以通过this.props（类组件）或函数组件的参数来访问props。

// 父组件
class ParentComponent extends React.Component {
  render() {
    return <ChildComponent name="John" />;
  }
}

// 子组件
class ChildComponent extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// 父组件
function ParentComponent() {
  return <ChildComponent name="John" />;
}

// 子组件
function ChildComponent(props) {
  return <h1>Hello, {props.name}</h1>;
}

在这两个示例中，ParentComponent将name属性作为props传递给ChildComponent，ChildComponent通过props接收并使用这个值。
```

##### 6.3组件三大属性---refs

```
Refs 是一个 获取 DOM节点或 React元素实例的工具。在 React 中 Refs 提供了一种方式，允许用户访问DOM 节点或者在render方法中创建的React元素。refs应谨慎使用，因为它绕过了React的声明式更新机制。
在 React单项数据流中，props是父子组件交互的唯一方式。要修改一个子组件，需要通过的新的props来重新渲染。 但是在某些情况下，需要在数据流之外强制修改子组件。被修改的子组件可能是一个React组件实例，也可能是一个DOM元素。对于这两种情况，React 都通过 Refs的使用提供了具体的解决方案。

如何使用refs
**创建ref**：使用React.createRef()创建一个ref，并将其赋值给一个类组件的属性。

**附加ref**：通过ref属性将创建的ref附加到元素上。

**访问ref**：通过ref的current属性访问对应的DOM节点或React元素。

示例
类组件中使用refs
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    // 创建ref
    this.myInput = React.createRef();
  }

  focusTextInput = () => {
    // 使用current访问DOM节点，并调用DOM API
    this.myInput.current.focus();
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.myInput} />
        <button onClick={this.focusTextInput}>Focus the input</button>
      </div>
    );
  }
}
函数组件中使用refs（使用useRef钩子）
import React, { useRef } from 'react';

function MyComponent() {
  // 创建ref
  const myInput = useRef(null);

  const focusTextInput = () => {
    // 使用current访问DOM节点，并调用DOM API
    myInput.current.focus();
  };

  return (
    <div>
      <input type="text" ref={myInput} />
      <button onClick={focusTextInput}>Focus the input</button>
    </div>
  );
}
在这两个示例中，我们创建了一个ref来引用<input>元素，并在点击按钮时，通过ref直接访问该元素并调用其focus方法。这展示了如何使用refs来直接操作DOM。
```

#### 7.类的基本知识

```
    <script type="text/javascript">
        // 创建一个Person类
        class Person{
            // 构造器
            constructor(name,age){
                this.name = name;
                this.age = age;
            }
            // 一般方法
            speak(){
                // speak方法放在了那里？---类的原型对象中，供实例使用
                // 通过Person实例调用speak时，speak中的this就是Person实例
                console.log('我是'+this.name+',今年'+this.age+'岁');
            }
        }
        // 创建一个Person类的实例对象
        const p = new Person('tom',18);
        const d = new Person('jerry',19);
        console.log(p);
        console.log(d);
        p.speak();
        d.speak();
        p.speak.call({a:1,b:2}); // 我是undefined,今年undefined岁. 说明this指向了{a:1,b:2}.call()方法可以改变this指向.call的功能是改变this指向，但不调用函数

        // 创建一个Students类，继承于Person
        class Student extends Person{
            constructor(name,age,grade){
                // 调用父类的构造器
                super(name,age);//super()方法是调用父类的构造器，super()必须在this之前调用
                this.grade = grade;
                this.school = '尚硅谷';
            }
            // 重写父类的方法
            speak(){
                console.log('我是'+this.name+',今年'+this.age+'岁,上'+this.grade);
            }
            study(){
                // study方法放在了那里？---类的原型对象中，供实例使用
                // 通过Student实例调用study时，study中的this就是Student实例
                console.log('我在学习');
            }
        }
        const s = new Student('jack',20,'高一');
        console.log(s);
        s.speak();
        s.study();

        /*
            总结：
                1.类中的构造器不是必须写的，要对实例进行一些初始化的操作，如添加指定属性时才写。
                2.如果A类继承了B类，那么在A类的构造器中的super必须调用的
                3.类中所定义的方法，都是放在了类的原型对象上的，供实例去使用的
        */
    </script>
```

#### 8.类式组件

```
    <script type="text/babel">
        // 1. 创建类式组件
        class MyComponent extends React.Component{
            render() {
                // render是放在那里的？---MyComponnet的原型对象中，供实例使用
                // render中的this是谁？---MyComponent的实例对象 <=> MyComponent组件实例对象
                console.log(this);
                return <h2>我是用类定义的组件(使用于【复杂组件】的定义)</h2>
            }
        }
        // 2. 渲染虚拟DOM到页面
        ReactDOM.render(<MyComponent/>,document.getElementById('test'))
        /*
            执行了ReactDOM.render(<MyComponent/>,document.getElementById('test'))后,发生了什么？
                1.React解析组件标签，找到了MyComponent组件
                2.发现组件是使用类定义的，随后new出来，调用render方法
                3.将render返回的虚拟DOM转为真实DOM，随后渲染到页面中
        */
    </script>
```

#### 9.原生事件绑定

```
    <button id="btn1">按钮1</button>
    <button id="btn2">按钮2</button>
    <button id="btn3" onclick="demo()">按钮3</button>
    <script type="text/javascript">
        const btn1 = document.getElementById('btn1')
        btn1.addEventListener('click',()=>{
            console.log('btn1被点击了');
            alert('btn1被点击了')
        })
        const btn2 = document.getElementById('btn2')
        btn2.onclick= ()=>{
            console.log('btn2被点击了');
            alert('btn2被点击了')
        }
        function demo(){
            console.log('btn3被点击了');
            alert('btn3被点击了')
        }
    </script>
```

#### 10.state的简写方式

![image-20240711160023222](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240711160023222.png)

```
// 自定义方法---要用赋值语句的形式+箭头函数
changeWeather= () => {
    const isHot = this.state.isHot
    this.setState({isHot:!isHot})
}
这段代码定义了一个名为 changeWeather 的箭头函数，用于在组件的状态中切换 isHot 属性的值。
```

#### 11.props属性的基本使用

props代表属性的缩写。它们是从父组件传递到子组件的不可变数据。常用于传递数据（父组件通过props向子组件传递数据，子组件通过this.props访问这些数据、配置组件（通过props可以配置组件的外观或行为）、限制类型。

```
    <script type="text/babel">//babel编译后开启严格模式
    // 创建组件
    class Person extends React.Component{
        render(){
            const {name, age, sex} = this.props
            return(
                <ul>
                    <li>姓名：{name}</li>
                    <li>性别：{sex}</li>
                    <li>年龄：{age + 1}</li>
                </ul>
            )
        }
    }
    Person.propTypes = {
        // 限制name必须是字符串，且必须传递
        name:PropTypes.string.isRequired,
        // 限制性别必须是字符串
        sex:PropTypes.string,
        // 限制age必须是数字
        age:PropTypes.number,
        // 限制speak必须是函数
        speak:PropTypes.func,
    }
    // 默认属性值
    Person.defaultProps = {
        sex: '不男不女',
        age: 18
    }
    // 渲染虚拟DOM到页面
    // Number类型在标签中需要加{}，否则会被当做字符串
    // 类型的限制，必要的限制，默认的限制
    ReactDOM.render(<Person name="tom" age={18} sex="男" speak={speak}/>,document.getElementById('test'))
    ReactDOM.render(<Person name="Axi" age={17} sex="女"/>,document.getElementById('test1'))
    const p = {name:'lucy',age:16,sex:'女'}
    // ReactDOM.render(<Person name={p.name} age={p.age} sex={p.sex}/>,document.getElementById('test2'))
    ReactDOM.render(<Person {...p}/>,document.getElementById('test2'))
    // babel加react语法支持允许使用展开运算符展开对象，这里的{...p}是展开对象。这里的{}起分隔符的作用，不是复制对象。
    // ...p并不能随意使用，只能在标签内使用
    // console.log('@',...p);

    function speak(){
        console.log('hello');
    }
    </script>
```

#### 12.refs的使用

`refs`在React中的作用主要是提供了一种方式，允许我们访问DOM节点或在render方法中创建的React元素。

```
1.
myRef = React.createRef()
showDate = ()=>{console.log(this.myRef.current.value)}
onClick or onBlur = {this.showDate}
2.

```

#### 13什么是受控组件，什么是非受控组件

```
受控组件是React的一种模式，其中表单数据是由React组件的状态管理的。在受控组件中，表单的值通过React的状态来控制。每当表单元素的值发生变化时，都会调用一个事件处理函数（如onChange），该函数会更新组件的状态，而状态的更新又会反过来设置表单元素的值。

在非受控组件中，表单数据直接由DOM节点管理，而不是由React组件的状态管理。这意味着你使用ref来从DOM节点中直接获取表单元素的值，而不是通过每次输入变化时更新组件的状态。
```

#### 14react中的事件处理

```
React中的事件处理通过在JSX中指定事件处理函数、在组件中定义这些函数、使用事件对象和ref来访问DOM元素，以及利用React的合成事件系统，来响应用户的交互操作。
```

#### 15不用高阶函数

![image-20240711215954482](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240711215954482.png)

#### 16生命周期（旧）

![image-20240712093741777](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240712093741777.png)

```
1.初始化阶段:由ReactDom.render()触发---初次渲染
    1.constructor()
    2.componentWillMount()
    3.render()
    4.componentDidMount()
2.更新阶段:由组件内部this.setsate()或父组件重新render触发
    1.shouldcomponentUpdate()
    2.componentWillUpdate()
    3.render()
    4.componentDidUpdate()
3.卸载组件:由ReactDoM.unmountcomponentAtNode()触发
    1.componentWillUnmount()
```

#### 17生命周期（新）

![image-20240712100357148](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240712100357148.png)

新版本中componentWillMount、componentWillReceiveProps、componentWillUpdate三个周期需要在前面添加UNSAFE_

![image-20240712110923140](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240712110923140.png)

```
1.初始化阶段:由ReactDoM.render()发---初次渲染
    1.constructor()
    2.getDerivedstateFromProps
    3.render()
    4.componentDidMount()
2，更新阶段:由组件内部this.setsate()或父组件重新render触发
    1.getDerivedstateFromProps
    2.shouldcomponentUpdate()
    3.render()
    4.getsnapshotBeforeUpdate
    5.componentDidUpdate()
3.卸载组件:由ReactDoM.unmountcomponentAtNode()触发
	1.componentWillUnmount()
```

#### 18.key的作用

![image-20240712112629899](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240712112629899.png)

![image-20240712113554202](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240712113554202.png)

#### 19.todoList案例

![image-20240712175915721](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240712175915721.png)

#### 20.Ajax

```
方法一：设置package.json ----设置proxy为服务器地址，只能设置一个
遇到问题：
1、修改package.json文件后需重新启动项目
2、项目启动后3000端口被占用，浏览器起3001端口，app.js却用localhost:3000调用则失败

方法二、配置setupProxy.js文件---src文件夹下新创建setupProxy.js文件
遇到问题：1.http-proxy-middleware引入方式不同，我这个是高版本引入方式如下图配置文件，低版本引入方式为 
 const proxy = require('http-proxy-middleware')
如引入方式错误，则启动项目浏览器打开页面为无法访问
```

#### 21.解构赋值

```
    // 连续解构赋值
    let obj = {a:{b:{c:1}}};
    let obj2 = {a:{b:1}};
    console.log(obj.a.b.c); // 1
    const {a:{b:data}} = obj;
    console.log(c); // 1
    const {a:{b:data2}} = obj2;
    console.log(data2); // 1
```

#### 22.搜索案例

![image-20240712232415581](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240712232415581.png)

#### 23.路由管理

![image-20240713105029073](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240713105029073.png)

![image-20240713110755387](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240713110755387.png)

#### 24.NavLink与Link

​	Link标签用于实现在Route中切换组件；NavLink是Link的up，含有activeClassName属性，在点击属性后可以给当前元素添加类名，从而控制元素间点击后样式的切换

```
<NavLink activeClassName="aspire" className="list-group-item" to="/about">About</NavLink>
<NavLink activeClassName="aspire" className="list-group-item" to="/home">Home</NavLink>
              
<Link className="list-group-item" to="/about">About</Link>
```

#### 25.NavLink的封装

1.NavLink放置到一般组件中

```
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    console.log('MyNavLink', this.props)
    return (
      // children属性是NavLink组件的属性，用于在NavLink标签中添加子节点
      <NavLink activeClassName="aspire" className="list-group-item" {...this.props}/>
    )
  }
}
```

2.使用NavLink

```
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
```

注：标签内容是一个特殊的props属性，在传递过程中以children参数名传递；若在封装时标签自闭合，则children默认显示为标签内容

![image-20240713115826137](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240713115826137.png)

#### 26.Switch路由只匹配第一个路由

```
                import { Switch, Route } from 'react-router-dom'
                
                <Switch> {/* 只匹配其中一个路由 */}
                  {/* 注册路由 */}
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                  <Route path="/home" component={Test} />
                </Switch>
```

![image-20240713120730722](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240713120730722.png)

#### 27.解决多级路径刷新页面样式丢失问题

```
1. -->
"./"的意思是当前路径去请求 -->
删除"."的意思是直接在当前地址去请求 -->
2. -->
通过"%PUBLIC_URL%/路径"访问，为绝对路径 -->
3. -->
通过HsahRouter访问 -->
```

![image-20240713133508348](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240713133508348.png)

#### 28.路由严格匹配问题

![image-20240713134152748](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240713134152748.png)

#### 29.默认路由

![image-20240713142033565](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240713142033565.png)

#### 30.嵌套路由

![image-20240713144604867](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240713144604867.png)

#### 31.向路由组件传递参数

```
1.循环解析数组内值
{
    messageArr.map((msgObj) => {
        return (
            <li key={msgObj.id}>
                {/* 向路由组件传递params参数 */}
                <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp;
            </li>
        )
    })
 }
 
 2.接收参数并将参数传递给子组件
 <Route path={`/home/message/detail/:id/:title`} component={Detail} />
 
 3.子组件接收参数
 const { id, title } = this.props.match.params
```

![image-20240713154311232](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240713154311232.png)

#### 32.路由传参之search

```
import qs from 'querystring'

let obj = {name: 'tom', age: 18} // name=tom&age=18   key=value&key=value 称为urlencoded编码格式
console.log(qs.stringify(obj)) // name=tom&age=18

let str = 'name=tom&age=18'
console.log(qs.parse(str)) // { name: 'tom', age: '18' }
```

![image-20240713160633870](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240713160633870.png)

#### 33.路由传参之state

```
1.{/* 向路由组件传递state参数 */}
<Link to={{ pathname: '/home/message/detail', state: { id: msgObj.id, title: msgObj.title } }}>{msgObj.title}</Link>&nbsp;&nbsp;

2.{/* state无需声明接受，正常注册路由即可 */}
<Route path={`/home/message/detail`} component={Detail} />

3.// 接收state参数
const { id, title } = this.props.location.state || {}
```

![image-20240713162057835](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240713162057835.png)

#### 34.编程式路由

```
1.
replaceShow = (id, title) => {
    // replace跳转+携带params参数
    // this.props.history.replace(`/home/message/detail/${id}/${title}`)
    // replace跳转+携带search参数
    // this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`)
    // replace跳转+携带state参数
    this.props.history.replace(`/home/message/detail`, { id, title })
}

2.
pushShow = (id, title) => {
    // push跳转+携带params参数
    // this.props.history.push(`/home/message/detail/${id}/${title}`)
    // push跳转+携带search参数
    // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`) 
    // push跳转+携带state参数
    this.props.history.push(`/home/message/detail`, { id, title })
}

3.
// 回退
goBack = () => {
    this.props.history.goBack()
}
// 前进
goForward = () => {
    this.props.history.goForward()
}
// 前进2步
go = () => {
    this.props.history.go(2)
}

4.
{/* 向路由组件传递params参数 */}
{/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp; */}
{/* 向路由组件传递search参数 */}
{/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp; */}
{/* 向路由组件传递state参数 */}
<Link to={{ pathname: '/home/message/detail', state: { id: msgObj.id, title: msgObj.title } }}>{msgObj.title}</Link>&nbsp;&nbsp;
<button onClick={() => this.pushShow(msgObj.id, msgObj.title)}>push查看</button>
&nbsp;&nbsp;
<button onClick={() => this.replaceShow(msgObj.id, msgObj.title)}>replace查看</button>

5.
{/* 声明接受params */}
{/* <Route path={`/home/message/detail/:id/:title`} component={Detail} /> */}
{/* search无需声明接受，正常注册路由即可 */}
{/* <Route path={`/home/message/detail`} component={Detail} /> */}
{/* state无需声明接受，正常注册路由即可 */}
<Route path={`/home/message/detail`} component={Detail} />
<button onClick={() => this.props.history.goBack()}>回退</button>
&nbsp;&nbsp;
<button onClick={() => this.props.history.goForward()}>前进</button>
&nbsp;&nbsp;
<button onClick={() => this.props.history.go(2)}>go(2)</button>


6.
// 接收params参数
// const { id, title } = this.props.match.params
console.log(this.props)
    
// 接收search参数
// const { search } = this.props.location
// const { id, title } = qs.parse(search.slice(1))
// 接收state参数
const { id, title } = this.props.location.state || {}
```

![image-20240713171032387](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240713171032387.png)

#### 35.withRouter

withRouter是一个高阶组件, 用来给一般组件传递路由组件的三大属性: history, location, match

```
// withRouter是一个高阶组件, 用来给一般组件传递路由组件的三大属性: history, location, match
import { withRouter } from 'react-router-dom'

export default withRouter(Header)
```

#### 36.BrowserRouter与HashRouter的区别

![image-20240713172430483](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240713172430483.png)

#### 37.React中减少一个挂载标签（jsx不渲染

```
import {Fragment} from 'react'
<Fragment></Fragment> //return{}中必须返回一个主div，Fragment可以代替并不返回div标签
<></>	//空标签也可以

```

```
<Fragment key={1}></Fragment> //fragment可以携带一个key值，参与bian
空标签不能
```

