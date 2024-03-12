---
external : false
title : "Java Inheritance I"
tag : [Hackerrank, Java]
date : 2024-03-12
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/java-inheritance-1/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```java
import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

// Animal 클래스 정의
class Animal {
  // walk 메서드 정의
  void walk() {
    System.out.println("I am walking"); // 걷는 동작을 출력
  }
}

// Bird 클래스 정의, Animal 클래스를 상속받음
class Bird extends Animal {
  // fly 메서드 정의
  void fly() {
    System.out.println("I am flying"); // 날아다니는 동작을 출력
  }
  
  // sing 메서드 정의
  void sing() {
    System.out.println("I am singing"); // 노래하는 동작을 출력
  }
}

// Solution 클래스 정의
public class Solution {
  // main 메서드
  public static void main(String args[]) {
    // Bird 객체 생성
    Bird bird = new Bird();
    // walk 메서드 호출
    bird.walk();
    // fly 메서드 호출
    bird.fly();
    // sing 메서드 호출
    bird.sing();
  }
}
```
