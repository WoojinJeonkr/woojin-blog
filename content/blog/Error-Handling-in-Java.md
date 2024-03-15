---
external : false
title : "Error Handling in Java"
tag : [Java, Hackerrank]
date : 2024-03-15
---

## 1. 서론

에러 처리는 애플리케이션의 견고성과 신뢰성을 보장하기 위한 Java 프로그래밍의 중요한 측면입니다.  
Java는 에러와 예외를 처리하기 위한 여러 메커니즘을 제공하는데, 그 중에는 if-else 문과 try-catch 블록이 있습니다. 이 글에서는 이 두 가지 방법을 탐구하고 다양한 상황에서의 효과를 비교해 보겠습니다.

## 2. if-else 문을 통한 에러 처리

if-else 문은 자바에서 기본적인 에러 처리에 자주 사용됩니다. if-else 문을 사용하면 특정 조건을 확인하고 에러가 발생할 경우 대체 코드 블록을 실행할 수 있습니다.

작동 방식을 살펴보겠습니다.

```java
int dividend = 10;
int divisor = 0;
if (divisor != 0) {
  int result = dividend / divisor;
  System.out.println("결과: " + result);
} else {
  System.out.println("에러: 0으로 나누기!");
}
```

위 예제에서는 if-else 문이 0으로 나누는 에러를 방지하기 위해 먼저 divisor가 0이 아닌지 확인한 후 나눗셈을 수행합니다. 이렇게 함으로써 프로그램이 예기치 않게 중단되는 것을 방지할 수 있습니다.

### 2-1. 예제 문제

[예제 문제 확인하기](https://www.hackerrank.com/challenges/java-exception-handling/problem?isFullScreen=true)

### 2-2. 작성해야 하는 코드

- long power(int, int) 메서드를 생성합니다.
- 해당 메서드는 주어진 정수 n의 p 제곱을 반환합니다.
- 예외가 발생할 수 있는 상황에 대해 다음을 고려합니다:
- n 또는 p가 음수인 경우 예외를 발생시킵니다.
- n과 p가 모두 0인 경우 예외를 발생시킵니다.

### 2-3. 풀이

```java
import java.util.Scanner;
class MyCalculator {
  int power(int n, int p) throws Exception {
    if (n < 0 || p < 0) {
      throw new Exception("n or p should not be negative.");
    } else if (n == 0 && p == 0) {
      throw new Exception("n and p should not be zero.");
    } else {
      return (int) Math.pow(n, p);
    }
  }
}

public class Solution {
  public static final MyCalculator my_calculator = new MyCalculator();
  public static final Scanner in = new Scanner(System.in);
  
  public static void main(String[] args) {
    while (in .hasNextInt()) {
      int n = in .nextInt();
      int p = in .nextInt();
      
      try {
        System.out.println(my_calculator.power(n, p));
      } catch (Exception e) {
        System.out.println(e);
      }
    }
  }
}
```

## 3. try-catch 블록을 통한 에러 처리

try-catch 블록은 프로그램 실행 중 발생하는 예외를 처리하여 더 견고한 에러 처리 메커니즘을 제공합니다. try-catch 블록을 사용하면 에러를 우아하게 처리하고 적절한 조치를 취할 수 있습니다.

작동 방식을 살펴보겠습니다.

```java
int dividend = 10;
int divisor = 0;
try {
  int result = dividend / divisor;
  System.out.println("결과: " + result);
} catch (ArithmeticException e) {
  System.out.println("에러: 0으로 나누기!");
}
```

여기서 try-catch 블록이 0으로 나누는 에러를 잡아내고 프로그램이 중단되지 않도록 합니다. 즉, 예외가 발생하더라도 프로그램이 계속 실행될 수 있도록 보장합니다.

### 3-1. 예제 문제

[예제 문제 확인하기](https://www.hackerrank.com/challenges/java-exception-handling-try-catch/problem?isFullScreen=true)

### 3-2. 작성해야 하는 코드

- 스캐너를 사용하여 두 정수를 입력받습니다
- 입력이 잘못된 형식일 때, 0으로 나누려고 할 때 예외를 발생시킵니다
- 정상적인 입력일 경우 두 정수를 나눈 값을 출력합니다

### 3-3. 풀이

```java
import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

  public static void main(String[] args) {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
    Scanner scan = new Scanner(System.in);
    
    try {
      int x = scan.nextInt();
      int y = scan.nextInt();
      System.out.println(x / y);
    } catch (InputMismatchException e) {
      System.out.println(e.getClass().getName());
    } catch (ArithmeticException e) {
      System.out.println(e.getClass().getName() + ": / by zero");
    }
    
    scan.close();
  }
}
```

## 4. if-else 문과 try-catch 블록의 비교

if-else 문과 try-catch 블록을 비교한다면 다음과 같습니다.

| 기준             | if-else 문                                          | try-catch 블록                                       |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| 사용 편의성       | 간단하고 직관적                                    | 예외 유형과 처리에 대한 지식이 필요                   |
| 성능              | 일반적으로 예외가 발생하지 않기 때문에 빠름        | 예외 처리 오버헤드로 인해 약간 느림                |
| 에러 보고         | 제한된 정보                                        | 디버깅을 위한 자세한 스택 추적 가능                 |
| 적합성            | 기본적인 에러 처리 상황에 적합                     | 런타임 에러와 예외 처리에 적합                      |

요약하자면, if-else 문은 간단한 에러 처리 상황에 적합하고, try-catch 블록은 자바 프로그램에서 예외를 처리하는 더 포괄적인 기능을 제공합니다.

## 5. 결론

에러 처리는 자바 프로그래밍의 중요한 부분이며, if-else 문과 try-catch 블록과 같은 다양한 메커니즘을 이해하는 것은 견고하고 신뢰할 수 있는 코드를 작성하는 데 필수적입니다. 이러한 에러 처리 기술을 효과적으로 활용하면 개발자는 에러와 예외를 우아하게 처리하여 더 견고한 애플리케이션을 만들 수 있습니다.
