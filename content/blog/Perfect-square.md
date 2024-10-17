---
external : false
title : "Perfect square"
tag : [Programmers, Java]
date : 2024-10-17
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/62048)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 직사각형을 대각선으로 자르면 몇 개의 1cm × 1cm 정사각형을 온전히 사용할 수 있는지를 묻고 있습니다. 먼저, 가로 W와 세로 H가 주어진 직사각형에서 1cm × 1cm 크기의 정사각형으로 잘라 사용할 수 있는 총 개수는 W * H입니다. 하지만 대각선으로 자르게 되면, 대각선을 지나가는 일부 정사각형들은 사용 불가능해집니다.

대각선이 지나가면서 영향을 미치는 정사각형의 개수를 계산하는 것이 핵심입니다. 이때 대각선은 가로와 세로를 지나가면서 여러 격자선을 교차하게 됩니다. 대각선이 지나가는 정사각형의 개수는 가로 길이 W와 세로 길이 H의 합에서 중복된 부분을 제거한 값으로 구할 수 있습니다. 이 중복된 부분은 가로와 세로의 최대공약수를 이용해 계산됩니다. 대각선이 지나가는 정사각형의 총 개수는 W + H - GCD(W, H)가 됩니다.

결과적으로, 대각선을 지나지 않는 온전한 정사각형의 개수는 전체 정사각형 개수 W * H에서 대각선을 따라 지나가는 정사각형의 개수를 뺀 값으로 구할 수 있습니다. 이를 통해 사용 가능한 정사각형의 총 개수를 계산할 수 있습니다.

## 3. Answer

```java
class Solution {
  public long solution(int w, int h) {
    // w와 h를 long 타입으로 변환하여 사용 (큰 숫자 대비)
    long W = (long) w;
    long H = (long) h;
    
    // 전체 정사각형 개수에서 대각선을 따라 지나가는 정사각형 개수를 뺀 값을 반환
    return W * H - (W + H - gcd(W, H));
  }

  // 최대공약수를 구하는 함수 (유클리드 호제법 사용)
  private long gcd(long a, long b) {
    // b가 0이면 a가 최대공약수
    if (b == 0) {
      return a;
    }
    // a와 b의 나머지를 이용하여 재귀적으로 최대공약수 계산
    return gcd(b, a % b);
  }
}
```
