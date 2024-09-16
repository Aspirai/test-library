#### 1.报错找不到“sass”的类型定义文件。程序包含该文件是因为:隐式类型库 "sass" 的入口点

```
#是版本问题
#若已经安装，先卸载
yarn remove @types/sass
#安装指定版本
yarn add @types/sass@1.43.1 --dev
```

#### 2.函数间函数参数传递问题

​	项目结构

```
src/
    components/
        ComponentA.jsx
        ComponentB.jsx
    hooks/
        useSharedState.jsx
    App.jsx
```



```
//useSharedState.jsx

import { useState, useEffect } from 'react';

// 自定义hook
function useSharedState(initialValue) {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    // 这里可以添加副作用逻辑
    console.log('State has changed:', state);
  }, [state]);

  return [state, setState];
}
```



```
// ComponentA.jsx
function ComponentA() {
  const [state, setState] = useSharedState(0);

  return (
    <View>
      <Text>Component A: {state}</Text>
      <Button onClick={() => setState(state + 1)}>Increment in A</Button>
    </View>
  );
}

// ComponentB.jsx
function ComponentB() {
  const [state, setState] = useSharedState(0);
  return (
    <View>
      <Text>Component B: {state}</Text>
      <Button onClick={() => setState(state + 1)}>Increment in B</Button>
    </View>
  );
}
```



```
import React from 'react';
import { View, Button, Text } from '@tarojs/components';
import { useSharedState } from './useSharedState';

function App() {
  return (
    <View>
      <ComponentA />
      <ComponentB />
    </View>
  );
}

export default App;
```

#### 3.报错error occurs:ENOENT: no such file or directory?

![image-20240809142551975](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240809142551975.png)

```
解决：
1.清除全部编译缓存；
2.真机调试改为1.0；
3.退出再重进；
```

#### 4.报错Please do not register multiple Pages in pages/home/index.js

![image-20240809142755123](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240809142755123.png)
