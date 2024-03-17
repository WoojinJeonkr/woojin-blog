---
external : false
title : "Java Factory Pattern"
tag : [Hackerrank, Java]
date : 2024-03-17
---

소프트웨어 개발에서 객체 생성은 종종 복잡한 과정일 수 있습니다. 특히 객체 생성에 필요한 매개변수의 조합이 다양하고, 객체 생성 방식이 변할 수 있는 경우에는 이를 관리하기가 어려울 수 있습니다. 이런 상황에서 팩토리 패턴(Factory Pattern)은 객체 생성을 추상화하고, 유연성을 높여줍니다.

## 1. Factory Pattern

팩토리 패턴은 객체를 생성하는 과정을 캡슐화하여, 클라이언트 코드로부터 객체 생성 로직을 분리하는 디자인 패턴입니다. 이는 객체 생성 로직이 변경되어도 클라이언트 코드를 수정하지 않고도 객체를 생성할 수 있게 해줍니다.

## 2. Factory Pattern 사용 시기

- 객체 생성 로직이 복잡하고 변동성이 있을 때
- 객체 생성 과정이 클라이언트 코드와 강하게 결합되어 있을 때
- 객체 생성을 추상화하여 유연성을 확보하고자 할 때

## 3. 간단한 Factory Pattern 사용 예제

다음은 Java에서 간단한 팩토리 패턴의 예제입니다. 여기서는 도형(Shape) 객체를 생성하는 팩토리를 구현해보겠습니다.

```java
// Shape.java
public interface Shape {
  void draw();
}
```

```java
// Circle.java
public class Circle implements Shape {
  @Override
  public void draw() {
    System.out.println("원을 그립니다.");
  }
}
```

```java
// Rectangle.java
public class Rectangle implements Shape {
  @Override
  public void draw() {
    System.out.println("사각형을 그립니다.");
  }
}
```

```java
// ShapeFactory.java
public class ShapeFactory {
  public Shape createShape(String type) {
    if (type.equalsIgnoreCase("circle")) {
      return new Circle();
    } else if (type.equalsIgnoreCase("rectangle")) {
      return new Rectangle();
    }
    return null;
  }
}
```

```java
// Main.java
public class Main {
  public static void main(String[] args) {
    ShapeFactory factory = new ShapeFactory();

    Shape circle = factory.createShape("circle");
    circle.draw();

    Shape rectangle = factory.createShape("rectangle");
    rectangle.draw();
  }
}
```

위 예제에서는 ShapeFactory 클래스가 도형 객체를 생성하는 역할을 합니다. 클라이언트 코드에서는 도형의 종류를 지정하면 해당 도형 객체를 생성하여 사용할 수 있습니다.

## 4. Factory Pattern 관련 문제

### 4-1. 문제

해당 문제는 [여기](https://www.hackerrank.com/challenges/java-factory/problem?isFullScreen=true)에서 확인하실 수 있습니다.

### 4-2. 정답

```java
return (order.equals("pizza")) ? new Pizza() : new Cake();
```

### 4-3. 전체 코드 분석

```java
import java.util.*;
import java.security.*;

// 음식 인터페이스 정의
interface Food {
  public String getType(); // 음식 종류 반환 메서드
}

// 피자 클래스 정의
class Pizza implements Food {
  public String getType() {
    return "Someone ordered a Fast Food!"; // 빠른 음식을 주문했다는 메시지 반환
  }
}

// 케이크 클래스 정의
class Cake implements Food {
  public String getType() {
    return "Someone ordered a Dessert!"; // 디저트를 주문했다는 메시지 반환
  }
}

// 음식 팩토리 클래스 정의
class FoodFactory {
  // 주문에 따라 음식 객체를 반환하는 메서드
  public Food getFood(String order) {
    return (order.equals("pizza")) ? new Pizza() : new Cake();
  }//End of getFood method
}//End of factory class

// 메인 솔루션 클래스 정의
public class Solution {

  // 메인 메서드
  public static void main(String args[]){
    Do_Not_Terminate.forbidExit(); // 프로그램 종료 방지 기능 활성화

    try{

      Scanner sc=new Scanner(System.in);
      // 팩토리 생성
      FoodFactory foodFactory = new FoodFactory();

      // 팩토리에서 음식 객체 생성
      Food food = foodFactory.getFood(sc.nextLine());

      // 생성된 객체 정보 출력
      System.out.println("The factory returned "+food.getClass());
      System.out.println(food.getType()); // 음식 종류 출력
    }
    catch (Do_Not_Terminate.ExitTrappedException e) {
      System.out.println("Unsuccessful Termination!!"); // 종료 방지 예외 발생 시 메시지 출력
    }
  }
}

// 종료 방지 클래스 정의
class Do_Not_Terminate {

  public static class ExitTrappedException extends SecurityException {

    private static final long serialVersionUID = 1L;
  }

  // 종료 방지 메서드
  public static void forbidExit() {
    final SecurityManager securityManager = new SecurityManager() {
      @Override
      public void checkPermission(Permission permission) {
        if (permission.getName().contains("exitVM")) {
          throw new ExitTrappedException();
        }
      }
    };
    System.setSecurityManager(securityManager);
  }
}
```

## 5. 결론

팩토리 패턴은 객체 생성 로직을 추상화하여 유연성을 확보하고, 클라이언트 코드와의 결합도를 낮추는데 유용한 디자인 패턴입니다. 복잡한 객체 생성 과정을 다룰 때, 팩토리 패턴을 적용하여 코드의 유지보수성과 확장성을 높일 수 있습니다.
