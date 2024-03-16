---
external : false
title : "Java Singleton Pattern"
tag : [Hackerrank, Java]
date : 2024-03-16
---

## 1. Java Singleton Pattern

자바에서 싱글톤 패턴은 디자인 패턴 중 하나로, 특정 클래스의 인스턴스가 오직 한 개만 존재하도록 보장하는 패턴입니다.  
이 패턴을 사용하면 애플리케이션 전반에 걸쳐 단 하나의 인스턴스만이 존재하게 됩니다. 이는 리소스 공유나 중요한 데이터의 중복 생성을 방지하여 메모리와 자원을 효율적으로 관리할 수 있도록 합니다.

## 2. 싱글톤 패턴의 구성요소

- Private 생성자(Private Constructor): 싱글톤 클래스의 생성자는 외부에서 접근할 수 없도록 private으로 선언됩니다. 이는 외부에서 인스턴스를 직접 생성하는 것을 막아줍니다.
- 정적 메서드 (Static Method): 외부에서 유일한 인스턴스에 접근하기 위해 정적(static) 메서드를 제공합니다. 이 메서드는 클래스의 인스턴스를 반환하며, 인스턴스가 없을 경우 새로운 인스턴스를 생성합니다.
- Private 정적 변수 (Private Static Variable): 싱글톤 클래스 내부에는 유일한 인스턴스를 저장할 private 정적(static) 변수가 있습니다. 이 변수는 클래스 내부에서만 접근할 수 있도록 private으로 선언됩니다.

## 3. 싱글톤 패턴의 장점과 주의점

이러한 구성 요소를 조합하여 자바에서 싱글톤 패턴을 구현할 수 있습니다. 이 패턴은 많은 장점을 제공합니다. 예를 들어, 한 번의 인스턴스만 생성되므로 메모리를 절약할 수 있고, 전역적으로 접근할 수 있어 편리하며, 리소스를 공유할 수 있어 효율적입니다.  
그러나 이 패턴을 사용할 때 주의해야 할 점도 있습니다. 다중 스레드 환경에서는 스레드 안전성을 보장해야 하며, 직렬화와 역직렬화를 다룰 때 추가 작업이 필요할 수 있습니다.

## 4. 싱글톤 패턴의 사용 예시

자바 싱글톤 패턴은 데이터베이스 연결 풀이나 로깅 클래스 등과 같이 전역적으로 사용되는 객체를 관리할 때 매우 유용합니다. 이 패턴을 적절히 활용하면 코드의 유지보수성을 높일 수 있고, 자원을 효율적으로 관리할 수 있습니다. 따라서 자바 개발자들에게는 이러한 디자인 패턴을 잘 이해하고 활용하는 것이 중요합니다.

## 5. 예제 문제

해당 문제는 [여기](https://www.hackerrank.com/challenges/java-singleton/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 6. 풀이

```java
import java.util.Scanner;
import java.lang.reflect.Constructor;

// 싱글턴 클래스 정의
class Singleton {
  private Singleton() {} // 생성자를 private으로 선언하여 외부에서 인스턴스화 방지
  public String str; // 문자열 변수 선언
  private static Singleton instance = null; // 싱글턴 인스턴스를 저장할 변수 선언

  // 싱글턴 인스턴스를 반환하는 정적 메서드
  public static Singleton getSingleInstance() {
    if (instance == null) { // 인스턴스가 없을 경우
      instance = new Singleton(); // 새로운 인스턴스 생성
    }
    return instance; // 인스턴스 반환
  }
}
```
