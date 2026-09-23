---
external : false
title : "Aquarium filter cleaning cycle"
tag : [Python]
date : 2026-09-23
---

## 1. Problem

어항의 여과기는 일정한 주기로 청소해야 한다.

최근 `N`번의 청소 기록에서 청소 후 다음 청소까지 걸린 날짜가 주어졌을 때, **가장 긴 청소 주기**를 구하는 프로그램을 작성하시오.

### 입력

첫 번째 줄에 청소 기록의 수 `N`이 주어진다.

두 번째 줄에 각 청소 사이에 걸린 날짜가 순서대로 주어진다.

### 출력

가장 긴 청소 주기를 출력한다.

### 제한사항

- `1 <= N <= 100,000`
- 각 청소 주기는 `1 <= Cycle <= 365`
- 모든 입력값은 정수이다.

## 2. Input example

### Example 1

```text
5
7 10 6 14 8
```

### Example 2

```text
6
12 5 9 15 7 11
```

## 3. Output example

### 3.1. Example 1

```text
14
```

### 3.2. Example 2

```text
15
```

## 4. Explanation

### 4.1. Example 1

청소 주기는 다음과 같다.

`7, 10, 6, 14, 8`

이 중 가장 긴 주기는 `14일`이다.

### 4.2. Example 2

청소 주기는 다음과 같다.

`12, 5, 9, 15, 7, 11`

이 중 가장 긴 주기는 `15일`이다.

## 5. Answer

```python
N = int(input())
cycles = list(map(int, input().split()))

longest_cycle = max(cycles)

print(longest_cycle)
```
