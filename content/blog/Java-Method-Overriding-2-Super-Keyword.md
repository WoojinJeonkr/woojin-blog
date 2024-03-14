---
external : false
title : "Java Method Overriding 2 Super Keyword"
tag : [Hackerrank, Java]
date : 2024-03-14
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/java-method-overriding-2-super-keyword/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```java
import java.io.*;
import java.util.*;

class BiCycle {
  // BiCycle 클래스는 자전거를 나타내며,
  // define_me 메소드는 자전거의 정의를 반환합니다.
  String define_me() {
    return "a vehicle with pedals.";
  }
}

class MotorCycle extends BiCycle {
  // MotorCycle 클래스는 BiCycle 클래스를 상속받아서 만들어진 것으로,
  // define_me 메소드를 오버라이딩하여 자전거가 엔진을 가진 것으로 정의합니다.
  String define_me() {
    return "a cycle with an engine.";
  }

  // MotorCycle 클래스의 생성자입니다.
  // 객체가 생성될 때 "Hello I am a motorcycle, I am "과 define_me 메소드의 반환값을 출력하고,
  // 부모 클래스인 BiCycle의 define_me 메소드를 호출하여 "My ancestor is a cycle who is "와 함께 출력합니다.
  MotorCycle() {
    System.out.println("Hello I am a motorcycle, I am " + define_me());

    String temp = super.define_me();

    System.out.println("My ancestor is a cycle who is " + temp);
  }

}
class Solution {
  // Solution 클래스의 main 메소드입니다.
  // MotorCycle 클래스의 객체를 생성하여 실행합니다.
  public static void main(String[] args) {
    MotorCycle M = new MotorCycle();
  }
}
```
