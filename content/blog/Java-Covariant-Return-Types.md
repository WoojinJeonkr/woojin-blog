---
external : false
title : "Covariant Return Types"
tag : [Hackerrank, Java]
date : 2024-03-24
---

## 1. Covariant Return Types

자바는 Covariant Return Types을 허용합니다. Covariant Return Types을 사용하면 메소드를 오버라이딩할 때 하위 클래스의 반환 유형을 지정할 수 있습니다. 이는 다형성의 한 측면으로, 코드의 유연성을 높여줍니다.  
예를 들어, 슈퍼클래스에서 반환 유형으로 Animal을 지정하고, 서브클래스에서는 Dog나 Cat과 같은 구체적인 서브클래스를 반환할 수 있습니다. 이는 메소드를 사용하는 클라이언트가 호출 결과를 보다 구체적인 타입으로 다룰 수 있도록 합니다.

## 2 Method Overriding

메소드 오버라이딩은 하위 클래스가 기존의 슈퍼클래스 메소드의 동작을 재정의하고 원래 반환 유형의 하위 클래스를 지정할 수 있도록 합니다.  
슈퍼클래스 메소드를 오버라이드할 때는 @Override 주석을 사용하는 것이 좋은 관행입니다.

## 3. 문제

해당 문제는 [여기](https://www.hackerrank.com/challenges/java-covariance/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 4. 풀이

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

// 부모 클래스
class Flower {
  String whatsYourName() {
    return "I have many names and types.";
  }
}

// Jasmine 클래스: Flower 클래스를 상속받음
class Jasmine extends Flower {
  @Override
  // Flower 클래스의 whatsYourName() 메소드를 오버라이드합니다
  String whatsYourName() {
    return "Jasmine";
  }
}

// Lily 클래스: Flower 클래스를 상속받음
class Lily extends Flower {
  @Override
  // Flower 클래스의 whatsYourName() 메소드를 오버라이드합니다
  String whatsYourName() {
    return "Lily";
  }
}

// 부모 클래스
class Region {
  // Flower 클래스의 메소드를 오버라이드하지 않고 구현합니다
  Flower yourNationalFlower() {
    return new Flower();
  }
}

// WestBengal 클래스: Region 클래스를 상속받음
class WestBengal extends Region {
  @Override
  // Region 클래스의 yourNationalFlower() 메소드를 오버라이드합니다
  Jasmine yourNationalFlower() {
    return new Jasmine();
  }
}

// AndhraPradesh 클래스: Region 클래스를 상속받음
class AndhraPradesh extends Region {
  @Override
  // Region 클래스의 yourNationalFlower() 메소드를 오버라이드합니다
  Lily yourNationalFlower() {
    return new Lily();
  }
}


public class Solution {
  public static void main(String[] args) throws IOException {
    // 사용자로부터 입력을 받기 위한 BufferedReader 객체 생성
    BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
    // 사용자로부터 입력을 받아 공백 제거 후 저장
    String s = reader.readLine().trim();
    // Region 객체 초기화
    Region region = null;
    // 사용자 입력에 따라 Region 객체를 생성
    switch (s) {
      case "WestBengal":
        region = new WestBengal();
        break;
      case "AndhraPradesh":
        region = new AndhraPradesh();
        break;
    }
    // Flower 객체 생성
    Flower flower = region.yourNationalFlower();
    // 출력
    System.out.println(flower.whatsYourName());
  }
}
```
