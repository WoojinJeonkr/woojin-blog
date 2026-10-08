---
external : false
title : "Coffee shop order management"
tag : [Python]
date : 2026-10-08
---

## 1. Problem

카페에서 여러 종류의 음료 주문을 처리하고 있다.

각 음료의 가격과 주문 수량이 주어졌을 때, **전체 주문 금액**과 **가장 많이 주문된 음료의 수량**을 계산하는 프로그램을 작성하시오.

### 입력

첫 번째 줄에 주문한 음료의 종류 수 `N`이 주어진다.

두 번째 줄부터 `N`개의 줄에 각 음료의 가격과 주문 수량이 공백으로 주어진다.

### 출력

첫 번째 줄에 전체 주문 금액을 출력한다.

두 번째 줄에 가장 많이 주문된 음료의 수량을 출력한다.

### 제한사항

- `1 <= N <= 100,000`
- `1 <= Price <= 100,000`
- `1 <= Count <= 1,000`
- 모든 입력값은 정수이다.

## 2. Input example

### Example 1

```text
4
3000 2
4500 3
2500 1
5000 2
```

### Example 2

```text
5
2000 4
3500 2
4000 5
3000 3
5000 1
```

## 3. Output example

### 3.1. Example 1

```text
32500
3
```

### 3.2. Example 2

```text
41000
5
```

## 4. Explanation

### 4.1. Example 1

각 음료의 주문 금액은 다음과 같다.

- 3,000원 × 2개 = 6,000원
- 4,500원 × 3개 = 13,500원
- 2,500원 × 1개 = 2,500원
- 5,000원 × 2개 = 10,000원

전체 주문 금액은

`6,000 + 13,500 + 2,500 + 10,000 = 32,000`

원이다.

가장 많이 주문된 음료는 `3개`이다.

### 4.2. Example 2

각 음료의 주문 금액은 다음과 같다.

- 2,000원 × 4개 = 8,000원
- 3,500원 × 2개 = 7,000원
- 4,000원 × 5개 = 20,000원
- 3,000원 × 3개 = 9,000원
- 5,000원 × 1개 = 5,000원

전체 주문 금액은

`8,000 + 7,000 + 20,000 + 9,000 + 5,000 = 49,000`

원이다.

가장 많이 주문된 음료는 `5개`이다.

## 5. Answer

```python
N = int(input())

total_price = 0
maximum_count = 0

for _ in range(N):
    price, count = map(int, input().split())

    total_price += price * count
    maximum_count = max(maximum_count, count)

print(total_price)
print(maximum_count)
```
