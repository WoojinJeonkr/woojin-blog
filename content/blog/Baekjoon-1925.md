---
external: false
title: "Baekjoon 1925"
tag: [Baekjoon, Java]
date: 2024-02-18
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/1925)에서 확인하실 수 있습니다.

## 2. Solve (memory: 17632KB, time: 208ms)

```java
import java.util.*;

public class Main {
  public static void main(String[] args)
  {

    Scanner sc = new Scanner(System.in);

    double x, y, z = 0;
    int x1 = sc.nextInt();  // 첫 번째 점의 x 좌표
    int x2 = sc.nextInt();  // 첫 번째 점의 y 좌표
    int y1 = sc.nextInt();  // 두 번째 점의 x 좌표
    int y2 = sc.nextInt();  // 두 번째 점의 y 좌표
    int z1 = sc.nextInt();  // 세 번째 점의 x 좌표
    int z2 = sc.nextInt();  // 세 번째 점의 y 좌표

    if((x2 - y2) * (y1 - z1) == (y2 - z2) *(x1 - y1)){
      System.out.println("X"); // 일직선에 있는 경우
      return;
    }

    x = calcLength(x1, x2, y1, y2);
    y = calcLength(y1, y2, z1, z2);
    z = calcLength(z1, z2, x1, x2);

    findMax(x, y, z);
  }

  static double calcLength(int x1, int x2, int y1, int y2)
  {
    return Math.pow(y1 - x1, 2) + Math.pow(y2 - x2, 2); // 두 점 사이의 거리 계산
  }

  static void findMax(double x, double y, double z)
  {
    if(x == y && y == z) System.out.println("JungTriangle"); // 정삼각형인 경우

    else if(x == y || y == z || x == z)
    {
      if(x >= y && x >= z) check2Q(x, y, z); // 이등변 삼각형인 경우
      else if(y >= x && y >= z) check2Q(y, x, z);
      else check2Q(z, x, y);
    }

    else
    {
      if(x >= y && x >= z) checkQ(x, y, z); // 일반적인 삼각형인 경우
      else if(y >= x && y >= z) checkQ(y, x, z);
      else checkQ(z, x, y);
    }
    return;
  }

  static void check2Q(double max, double a, double b)
  {
    if(a + b == max) System.out.println("Jikkak2Triangle"); // 직각 이등변 삼각형인 경우
    else if(a +b < max) System.out.println("Dunkak2Triangle"); // 둔각 이등변 삼각형인 경우
    else System.out.println("Yeahkak2Triangle"); // 예각 이등변 삼각형인 경우
    return;
  }

  static void checkQ(double max, double a, double b)
  {
    if(a + b == max) System.out.println("JikkakTriangle"); // 직각 삼각형인 경우
    else if(a +b < max) System.out.println("DunkakTriangle"); // 둔각 삼각형인 경우
    else System.out.println("YeahkakTriangle"); // 예각 삼각형인 경우
    return;
  }
}
```
