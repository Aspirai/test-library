### utils中常见函数

在微信小程序或 Taro 项目中，`utils` 文件夹通常用于存放通用的工具函数。这些函数可以帮助提高代码的可复用性、简洁性，并减少重复工作。通用函数的格式一般是功能独立、参数明确、具备良好错误处理的纯函数。

### 通用函数的基本结构和格式

一个通用函数的格式主要包括以下几个部分：

1. **函数声明**：使用 `function` 或 `箭头函数` 声明。
2. **输入参数**：定义明确的参数，注明类型（如果使用 TypeScript）。
3. **功能逻辑**：函数执行的具体操作。
4. **返回值**：返回处理后的数据，保证函数的输出是可预测的。
5. **错误处理**：适当的错误处理来提高健壮性。

### 通用函数的示例

#### 1. **判断是否为空对象**
这个函数用于判断传入的对象是否为空。

```javascript
// 判断对象是否为空
export const isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}
```

#### 2. **格式化日期**
用于将日期格式化为特定的字符串格式，例如：`YYYY-MM-DD`。

```javascript
export const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = ('0' + (d.getMonth() + 1)).slice(-2); // 补全0
  const day = ('0' + d.getDate()).slice(-2); // 补全0
  return `${year}-${month}-${day}`;
}
```

#### 3. **防抖函数**
防抖函数用于控制函数执行的频率，避免频繁触发某些操作。

```javascript
export const debounce = (func, delay) => {
  let timer = null;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  }
}
```

#### 4. **节流函数**
节流函数与防抖类似，但区别在于它在设定的时间间隔内只会执行一次。

```javascript
export const throttle = (func, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
```

#### 5. **深拷贝函数**
用于深度克隆一个对象或数组，避免对原对象产生副作用。

```javascript
export const deepClone = (obj) => {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof Array) return obj.map(item => deepClone(item));
  const clone = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}
```

#### 6. **数字格式化**
将数字转换为带有千分符的格式，比如将 `1000000` 转换为 `1,000,000`。

```javascript
export const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
```

### 7. **随机字符串生成**
用于生成指定长度的随机字符串。

```javascript
export const randomString = (length) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
```

---

### TypeScript 通用函数格式

如果你使用的是 TypeScript，还可以为每个函数定义参数和返回值的类型，以提高代码的可维护性。

#### 1. **类型注释示例**

```typescript
export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
}
```

#### 2. **类型定义示例**

可以使用 `interface` 或 `type` 来定义参数的复杂类型。

```typescript
interface User {
  name: string;
  age: number;
  email?: string; // 可选属性
}

export const getUserInfo = (user: User): string => {
  return `Name: ${user.name}, Age: ${user.age}`;
}
```

### 总结

在 `utils` 中编写的通用函数要尽量简洁、纯粹且功能独立，并确保其能够在多种场景下复用。通过对每个函数进行合理的参数和返回值定义，结合错误处理机制，可以提高代码的可读性和可维护性。