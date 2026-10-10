---
external : false
title : "Parcel sorting system"
tag : [Python]
date : 2026-10-10
---

## 1. Problem

물류 창고에서는 택배 상자의 무게에 따라 배송 등급을 분류한다.

택배 상자의 무게가 주어졌을 때, 다음 기준에 따라 배송 등급을 출력하는 프로그램을 작성하시오.

- 무게가 1kg 이상 3kg 이하이면 `일반`
- 무게가 3kg 초과 10kg 이하이면 `중형`
- 무게가 10kg 초과 20kg 이하이면 `대형`
- 무게가 20kg 초과이면 `특대형`

택배 상자의 무게는 0보다 큰 정수이며, 여러 개의 택배 상자를 입력받아 각각의 배송 등급을 출력한다.

### 입력

첫째 줄에 택배 상자의 개수 \(N\)이 주어진다.

둘째 줄에 각 택배 상자의 무게를 나타내는 정수 \(N\)개가 공백으로 구분되어 주어진다.

### 출력

각 택배 상자의 배송 등급을 입력 순서대로 한 줄에 하나씩 출력한다.

### 제한사항

- \(1 \leq N \leq 100\)
- \(1 \leq W \leq 100\)
- \(W\)는 택배 상자의 무게를 나타낸다.

## 2. Input example

### Example 1

```text
5
1 3 5 10 25
```

### Example 2

```text
4
2 8 15 20
```

## 3. Output example

### 3.1. Example 1

```text
일반
일반
중형
중형
특대형
```

### 3.2. Example 2

```text
일반
중형
대형
대형
```

## 4. Explanation

### 4.1. Example 1

- 1kg은 일반 등급이다.
- 3kg은 일반 등급이다.
- 5kg은 중형 등급이다.
- 10kg은 중형 등급이다.
- 25kg은 특대형 등급이다.

### 4.2. Example 2

- 2kg은 일반 등급이다.
- 8kg은 중형 등급이다.
- 15kg은 대형 등급이다.
- 20kg은 대형 등급이다.

## 5. Answer

```python
n = int(input())
weights = list(map(int, input().split()))

for weight in weights:
    if weight <= 3:
        print("일반")
    elif weight <= 10:
        print("중형")
    elif weight <= 20:
        print("대형")
    else:
        print("특대형")
```
