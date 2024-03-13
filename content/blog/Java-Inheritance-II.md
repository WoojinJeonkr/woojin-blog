---
external : false
title : "Java Inheritance II"
tag : [Hackerrank, Java]
date : 2024-03-13
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/java-inheritance-2/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```java
import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

// Write your code here

// Arithmetic 클래스 정의
class Arithmetic {
  // 두 정수를 더하는 메서드
  int add(int a, int b) {
    return a + b;
  }
}

// Adder 클래스 정의, Arithmetic 클래스를 상속
class Adder extends Arithmetic {}

// Solution 클래스 정의
public class Solution{
  public static void main(String []args){
    // Adder 객체 생성
    Adder a = new Adder();
    
    // 상위 클래스의 이름을 새로운 줄에 출력
    System.out.println("My superclass is: " + a.getClass().getSuperclass().getName()); 
    
    // Adder의 `add(int,int)` 메서드를 3번 호출한 결과를 공백으로 구분하여 출력
    System.out.print(a.add(10,32) + " " + a.add(10,3) + " " + a.add(10,10) + "\n");
  }
}
```
