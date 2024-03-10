---
external: false
title: "Java Interface"
tag: [Hackerrank, Java]
date : 2024-02-29
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/java-interface/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```java
import java.util.*;

// AdvancedArithmetic 인터페이스 선언
interface AdvancedArithmetic{
  int divisor_sum(int n); // 약수의 합을 반환하는 메서드 선언
}

// MyCalculator 클래스 선언과 AdvancedArithmetic 인터페이스 구현
class MyCalculator implements AdvancedArithmetic{
  int sum = 0; // 약수의 합을 저장할 변수 선언 및 초기화
  public int divisor_sum(int n){ // 약수의 합을 계산하는 메서드 구현
    for(int i = 1; i <= (n+1)/2; i++){ // 1부터 n의 절반까지 반복
      if(n % i == 0) sum += i; // n을 i로 나누어 떨어지면 sum에 i를 더함
    }
    if(n == 1) return 1; // n이 1인 경우 1을 반환
    return (sum+n); // 약수의 합과 n 자신을 더한 값을 반환
  }
}

// Solution 클래스 선언
class Solution{
  public static void main(String []args){
    MyCalculator my_calculator = new MyCalculator(); // MyCalculator 객체 생성
    System.out.print("I implemented: "); // 구현한 인터페이스 출력
    ImplementedInterfaceNames(my_calculator); // ImplementedInterfaceNames 메서드 호출하여 구현한 인터페이스 출력
    Scanner sc = new Scanner(System.in); // Scanner 객체 생성
    int n = sc.nextInt(); // 사용자로부터 정수 입력 받음
    System.out.print(my_calculator.divisor_sum(n) + "\n"); // 입력받은 정수의 약수의 합을 출력
    sc.close(); // Scanner 객체 닫음
  }
  /*
   *  ImplementedInterfaceNames 메서드는 객체를 가져와서 해당 객체가 구현한 인터페이스의 이름을 출력함
   */
  static void ImplementedInterfaceNames(Object o){
    Class[] theInterfaces = o.getClass().getInterfaces(); // 해당 객체가 구현한 인터페이스를 가져옴
    for (int i = 0; i < theInterfaces.length; i++){
      String interfaceName = theInterfaces[i].getName(); // 인터페이스의 이름을 가져옴
      System.out.println(interfaceName); // 인터페이스의 이름 출력
    }
  }
}
```
