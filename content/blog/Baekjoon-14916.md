---
external: false
title: "Baekjoon 14916"
date: 2023-04-17
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/14916)

## 2. Solution

## 1. Python (memory: 31256KB, time: 48ms)

```python
n = int(input())
mylist = list(range(1, n+1))

while len(mylist) > 1:
    mylist = mylist[1::2]

print(mylist[0])
```

## 2. Java 11 (memory: 17740KB, time: 220ms)

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int num = n % 5;
        int cnt = 0;

        if (n == 1 || n == 3) {
            System.out.println(-1);
            System.exit(0);
        } else if (num % 2 == 0) {
            System.out.println(n / 5 + num / 2);
            System.exit(0);
        } else {
            System.out.println((n / 5) - 1 + (num + 5) / 2);
            System.exit(0);
        }
    }
}
```
