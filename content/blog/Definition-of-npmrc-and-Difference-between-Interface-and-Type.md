---
external: false
title: "Definition of npmrc and Difference between Interface and Type"
date: 2023-03-13
---

## 1. .npmrc

1. npm에서 설정을 저장해두는 파일로서 내장(builtin), 전역(global), 사용자(user), 프로젝트(project) 이렇게 4가지 범위의 npmrc 파일이 존재한다.
2. 파일명 앞에 .을 붙여 기본적으로 숨긴 파일이 된다.
3. 사용자 범위의 .npmrc 파일은 운영체제의 사용자 홈(home) 디렉토리에 위치하고, 프로젝트 범위의 .npmrc 파일은 프로젝트 최상위(root) 디렉토리에 위치한다.

## 2. interface와 type의 차이

### 2-1. interface

```ts
interface PeopleInterface {
  name: string
  age: number
}

interface StudentInterface extends PeopleInterface {
  school: string
}
```

- 항상 선언적 확장이 가능하다
- 객체에만 사용이 가능하다
- computed value 사용이 불가능하다
- 속성 간 충돌을 해결하기 위해 단순한 객체 타입을 생성한다
- 합성할 경우 이는 캐시가 된다.

### 2-2. type

```ts
type PeopleType = {
  name: string
  age: number
}

type StudentType = PeopleType & {
  school: string
}
```

- 새로운 속성을 추가하기 위해서 다시 같은 이름으로 선언할 수 없다(선언적 확장 불가능)
- 모든 요소에 사용이 가능하다
- computed value 사용이 가능하다
- 재귀적으로 순회하면서 속성을 머지하는데, 이 경우에 일부 never가 나오면서 제대로 merge가 안 될 수 있으며, 원시 타입이 오는 경우 충돌이 나서 제대로 merge가 안되는 경우에는 never가 떨어진다.
- 타입 합성의 경우, 합성에 자체에 대한 유효성을 판단하기 전에, 모든 구성요소에 대한 타입을 체크하므로 컴파일 시에 상대적으로 성능이 좋지 않다.

## 3. Reference

- [npmrc 파일과 npm config 커맨드](https://www.daleseo.com/js-npm-config/)
- [타입스크립트 type과 interface의 공통점과 차이점](https://yceffort.kr/2021/03/typescript-interface-vs-type)
