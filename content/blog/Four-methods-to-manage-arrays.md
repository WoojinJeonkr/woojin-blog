---
external: false
title: "Four methods to manage arrays"
date: 2022-11-22
---

## 1. immutable

리액트에서는 setState() 함수를 통해서만 state를 update 하는데, 이때 기존의 상태(객체)의 값을 직접 수정하면 안 된다.
즉, 리액트에서 state는 생성된 이후에 다시는 그 상태를 변경할 수 없다.
=> setState나 hook의 setter함수를 통해 상태를 변경하지 않으면 리액트는 상태의 변경을 감지하지 못해서 리렌더링을 하지 않기 때문이다.
위와 같이 상태를 관리하는 것을 immutable하게 관리하라고 한다.

### 1-1. 장점

1. 의도치 않게 특정 객체가 변경되면, 해당 객체를 참조하던 객체의 값이 같이 변경되는 side effect를 낮출 수 있다. 이에 따라 디버깅이 쉬워지고 프로그램 복잡도가 낮아진다.
2. prevState와 nextState를 하나하나 비교하지 않고, 해당 상태의 referrence만 비교하면 된다.
3. 코드의 유지보수가 쉬워진다.
4. state가 immutable하지 않다면, 리액트는 이전 V-DOM과 현재 V-DOM을 하나하나 비교하면서 state의 변경사항을 찾아야 한다. 하지만, 리액트에서 상태를 immutable 하게 관리하는 게 보장되면, 단순히 참조하고 있는 현재 객체가 이전 객체와 다른지를 비교하며 바로 변경사항을 확인할 수 있다.

## 2. spread

spread 연산자를 사용하여 배열, 문자열, 객체 등 반복 가능한 객체 (Iterable Object)를 개별 요소로 분리할 수 있다.
자기자신을 복사하며 그대로 배열을 넘기면서 화면에 그려야 하는 경우에 사용한다.

### 2-1. Example

```ts
var arr1 = [1,2,3]; 
var arr2 = [4,5,6]; 

var arr = [...arr1, ...arr2]; 
console.log(arr); // [ 1, 2, 3, 4, 5, 6 ] 
```

## 3. filter

filter를 사용하면 배열에서 특정 요소를 제거할 수 있다. 이 경우 filter를 사용한 결과값이 배열에서 제거하고자 하는 요소가 제거된 형태가 되도록 코드를 작성한다.

### 3-1. Example

```ts
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);

console.log(result); // ["exuberant", "destruction", "present"]
```

## 4. map

반복되는 컴포넌트를 렌더링하는 경우 사용한다. 파라미터로 전달된 함수를 사용하여 배열 내 각 요소를 원하는 규칙에 따라 변환한 후 새로운 배열을 생성하게 된다.
`map<반환될 값의 타입>`의 형태로 작성한다.

### 4-1. Example

```ts
import React, { Component } from 'react';

class MyComponent extends Component
{    
    render(){

        const menus = ["Menu1", "Menu2", "Menu3", "Menu4"]
        const menuList = menus.map((menu) => (<li>{menu}</li>));

        return(
            <ul>
                {menuList}
            </ul>
        )
    };
}

export default MyComponent;
```

위의 코드를 실행해보면 아래의 코드와 같은 결과를 얻을 수 있다.

```ts
import React, { Component } from 'react';

class MyComponent extends Component
{    
    render(){
        return(
            <ul>
                <li>Menu1</li>
                <li>Menu2</li>
                <li>Menu3</li>
                <li>Menu4</li>
            </ul>
        )
    };
}

export default MyComponent;
```

## 5. Reduce

`배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);`의 형태로 작성한다.
배열의 요소들을 하나의 결과로 합치는 용도로 사용한다. 또한 대상 배열의 타입을 오브젝트나 다른 타입으로 바꿀 수 있다.

### 5-1. Example

```ts
console.log([ [9,2], [8,7] ].reduce((acc, val) => [ ...acc, ...val ], [])) // [9, 2, 8, 7] 
```

## 6. Reference

- [Immutable이란?](https://hjuu.tistory.com/19)
- [[ES6] Spread Operator (스프레드 연산자)](https://paperblock.tistory.com/62)
- [React에서 배열 내장함수 map()과 filter() 사용해보기](https://intrepidgeeks.com/tutorial/use-the-array-builtin-functions-map-and-filter-in-react)
- [배열 내장 함수 map을 통한 Component 반복](https://lktprogrammer.tistory.com/121)
- [reduce를 쓰면서 유용했던 것 몇가지 정리](https://steemit.com/javascript/@rouka/reduce)
