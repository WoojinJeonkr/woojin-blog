---
external: false
title: "Shallow copy and Deep copy"
date: 2022-11-18
---

## 1. 얕은 복사(Shallow Copy)

- 새로운 객체에 원본 객체의 프로퍼티의 값을 정확히 복사
- 프로퍼티의 값이 객체 형태라면, 객체의 주소를 복사

복사된 객체는 원본 객체와 동일한 프로퍼티와 값들을 새롭게 가지지만, 주소가 복사된 프로퍼티는 새로운 형태가 아닌 같은 것을 공유한다.  
얕은 복사를 구현하기 위해 Object.assign() (원본 객체의 열거가능한 모든 프로퍼티를 복사해줌)을 사용한다.  

### 1-1. 특징

1. Property Descriptors 가 복사되지 않는다.
2. 프로토타입 체인 또는 열거가능하지 않은 프로퍼티는 복사되지 않는다.
3. 기본형 타입은 변경해도 서로 영향을 끼치지 않지만, 참조형 타입인 객체는 공유하고 있기 때문에 영향을 끼치게된다.

## 2. 깊은 복사(Deep Copy)

- 원본 객체를 완전히 복사한다.
- 주소를 복사하지 않고, 새로운 메모리 공간을 확보해 생성 => 원본과는 별개의 데이터로 판단된다.

### 2-1. 구현 방식
  
#### 2-1-1. 루프 => 재귀

```ts
function deepCopy(obj) {
    if (obj === null || typeof(obj) !== "object") {
        return obj;
    }
        
    let copy = {};
    for(let key in obj) {
        copy[key] = deepCopy(obj[key]);
    }
return copy;
}
```

#### 2-1-2. JSON

```ts
const mainObject = {
    a: 1,
    b: 2,
    c: function() {
        return 1;
    }
};

let copyObject = JSON.parse(JSON.stringify(mainObject));
```

#### 2-1-3. 라이브러리(jQuery, lodash 등)

```ts
// jQuery
let copyObject = $.extend(true, {}, mainObject);
// lodash
let copyObject = _.cloneDeep(mainObject);
```

## 3. Reference

- [Javascript:Shallow and Deep Copy](https://mygumi.tistory.com/322)
