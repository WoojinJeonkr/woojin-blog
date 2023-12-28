---
external: false
title : "instanceof"
description : "Let's learn about instanceof and polymorphism"
date: 2022-10-06
---

## 1. instanceof

부모를 상속해서 만들어진 자식 객체가 여러 타입인 경우에 특정 클래스가 맞는지 확인하기 위해 사용하는 메서드

```ts
if (piece instanceof Empty) {
    return;
}
```

위의 코드는 piece 객체가 Empty라는 클래스 타입인지 확인하는 메서드이다.
이와 유사하게 명확한 종류를 알기 어려운 때 사용하기도 한다.
다음은 piece가 piece2와 같은 타입의 객체인지 알기 위한 메서드이다.

```ts
public boolean isSamePiece(Object piece1, Object piece2) {
    return piece1.isInstance(piece2);
}
```

## 2. 다형성과 instanceof

### 2-1. 다형성을 사용한 코드

```ts
public abstract class Piece {
    public abstract int calculate(int point);
}

public class King extends Piece {
    public int calculate(int point) {
        return point + 10;
    }
}

public class Pawn extends Piece {
    public int calculate(int point) {
        return point + 1;
    }
}

public class Empty extends Piece {
    public int calculate(int point) {
        return point;
    }
}

public class Point {
  public int calculate(Piece p, int point) {
    return p.calculate(point);
  }
}
```

### 2-2. instanceof를 사용한 코드

```ts
public class Point {
    public int calculate(Piece p, int point) {
        if(p instanceof King) {
            return point + 10;
        } else if(p instanceof Pawn) {
            return point + 1;
        } else if(p instanceof Empty) {
            return point;
        }
    }
}
```

다형성을 사용하는 것보다 instanceof를 사용하는 경우 코드의 길이가 줄어드는 것을 확인할 수 있다.
이런 장점에도 불구하고 instanceof보다 다형성을 사용하는 것을 권장하는 이유는 **캡슐화**와 **개방-폐쇄 원칙**, **단일책임원칙**과 관련이 있다.

## 3. 캡슐화

객체지향에서 캡슐화는 객체가 가진 상태나 행위를 다른 이가 사용하거나 보지 못하도록 숨기는 것을 의미한다.
우리는 각 객체가 가진 책임과 역할을 분리해주고, 이로 인해 유지보수, 확장에 있어 편리함을 얻기 위해 객체지향프로그래밍을 한다. 캡슐화가 보장되지 않으면 그 의미가 없어진다.
하지만 instanceof를 사용하는 경우 각 객체가 무엇인지, 어떤 점수를 돌려주어야 하는지 불필요한 외부의 객체가 그 정보를 알게되며 캡슐화가 깨지게 된다.

## 4. 개방-폐쇄 원칙(Open Closed Principle, OCP)

객체의 확장에는 열려있고, 변화에는 닫혀있도록 해야한다는 원칙을 말한다.
instanceof를 사용하는 경우 새로운 메서드를 만들어주기 위해 사용되고 있는 모든 함수를 찾아가서 고쳐야하며 객체의 확장이 어려워지지만 다형성을 이용하면 새로운 객체를 만들고 그 객체에 구현하면 된다.

## 5. 단일책임원칙(Single Responsibility Principle, SRP)

한 클래스는 하나의 책임만 가져야 한다는 객체지향프로그래밍의 원칙 중 하나이다.
instanceof는 특정 타입을 알아내고 특정 코드를 실행하기 위해 사용되는데 이 경우 하나의 메서드에 여러 가지 책임이 부여되어 단일책임원칙에 위반된다. 반면에 다형성은 각 타입에 책임을 부여하기 때문에 단일책임원칙에 위반되지 않는다.

## 6. 참고 자료

- [Tecoble - instanceof의 사용을 지양하자](https://tecoble.techcourse.co.kr/post/2021-04-26-instanceof/)
- [Tecoble- SOLID 1편 SRP와 OCP](https://tecoble.techcourse.co.kr/post/2020-07-31-solid-1/)
- [4 Pillars of Object-oriented Programming with TypeScript](https://betterprogramming.pub/understand-object-oriented-programming-with-typescript-c4ff8afa40d)
