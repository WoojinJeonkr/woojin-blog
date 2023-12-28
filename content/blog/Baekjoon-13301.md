---
external: false
title: "Baekjoon 13301"
date: 2023-10-25
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/13301)

## 2. 정답 코드 1 (Python, memory: 31120KB, time: 100ms)

```python
def main():
    n = int(input())  # 사용자로부터 정수 입력 받기

    fib = [0] * 81  # 81개의 요소를 가진 리스트 생성
    fib[0] = 4  # 초기값 설정
    fib[1] = 6  # 초기값 설정

    for i in range(2, n):  # 피보나치 수열 계산
        fib[i] = fib[i - 1] + fib[i - 2]  # 현재 값 = 이전 값 + 그 이전 값

    print(fib[n - 1])  # 결과 출력

if __name__ == "__main__":
    main()
```

## 3. 정답 코드 2(Java, memory: KB, time: ms)

```java
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);  // Scanner 객체 생성
    int n = scanner.nextInt();  // 사용자로부터 정수 입력 받기

    long[] fib = new long[81];  // 81개의 요소를 가진 long 타입 배열 생성
    fib[0] = 4;  // 초기값 설정
    fib[1] = 6;  // 초기값 설정

    for (int i = 2; i < n; i++) {  // 피보나치 수열 계산
        fib[i] = fib[i - 1] + fib[i - 2];  // 현재 값 = 이전 값 + 그 이전 값
    }

    System.out.println(fib[n - 1]);  // 결과 출력
    scanner.close();  // Scanner 객체 닫기
  }
}
```
