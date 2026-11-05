---
external: false
title: "Package delivery priority system"
tag: [Python]
date: 2026-11-05
---

## 1. Problem

택배 물류 센터에서는 배송해야 할 물품을 긴급도에 따라 분류하여 처리한다.

각 택배에는 운송장 번호와 긴급도 점수가 부여된다. 긴급도 점수가 높을수록 먼저 배송해야 한다.

택배 정보가 주어졌을 때 다음 조건에 따라 배송 우선순위를 정하는 프로그램을 작성하시오.

- 긴급도 점수가 높은 택배가 먼저 배송된다.
- 긴급도 점수가 같으면 운송장 번호가 작은 택배가 먼저 배송된다.
- 배송 순서는 정렬된 결과를 기준으로 결정한다.
- 긴급도 점수가 8점 이상이면 `URGENT`, 5점 이상 8점 미만이면 `NORMAL`, 5점 미만이면 `LOW`로 분류한다.

### 입력

첫째 줄에 택배 개수 \(N\)이 주어진다.

다음 \(N\)개의 줄에는 운송장 번호와 긴급도 점수가 공백으로 구분되어 주어진다.

### 출력

첫째 줄부터 \(N\)개의 줄에 배송 우선순위에 따라 운송장 번호와 긴급도 분류를 출력한다.

### 제한사항

- \(1 \leq N \leq 100\)
- 운송장 번호는 1000 이상 9999 이하의 정수이다.
- 운송장 번호는 중복되지 않는다.
- 긴급도 점수는 1 이상 10 이하의 정수이다.

## 2. Input example

### Example 1

```text
5
3001 5
3002 9
3003 7
3004 9
3005 3
```

### Example 2

```text
4
4102 6
4101 6
4103 10
4104 2
```

## 3. Output example

### 3.1. Example 1

```text
3002 URGENT
3004 URGENT
3003 NORMAL
3001 NORMAL
3005 LOW
```

### 3.2. Example 2

```text
4103 URGENT
4101 NORMAL
4102 NORMAL
4104 LOW
```

## 4. Explanation

### 4.1. Example 1

긴급도 점수를 기준으로 내림차순 정렬한다.

- 3002번: 긴급도 9점으로 `URGENT`
- 3004번: 긴급도 9점으로 `URGENT`
- 3003번: 긴급도 7점으로 `NORMAL`
- 3001번: 긴급도 5점으로 `NORMAL`
- 3005번: 긴급도 3점으로 `LOW`

3002번과 3004번은 긴급도 점수가 같으므로 운송장 번호가 작은 3002번이 먼저 처리된다.

### 4.2. Example 2

긴급도 점수와 운송장 번호를 기준으로 정렬한다.

- 4103번: 긴급도 10점으로 가장 먼저 처리된다.
- 4101번과 4102번: 긴급도 6점으로 같으므로 운송장 번호가 작은 4101번이 먼저 처리된다.
- 4104번: 긴급도 2점으로 가장 마지막에 처리된다.

## 5. Answer

```python
n = int(input())

packages = []

for _ in range(n):
    number, priority = map(int, input().split())
    packages.append((number, priority))

packages.sort(key=lambda x: (-x[1], x[0]))

results = []

for number, priority in packages:
    if priority >= 8:
        status = "URGENT"
    elif priority >= 5:
        status = "NORMAL"
    else:
        status = "LOW"

    results.append(f"{number} {status}")

print("\n".join(results))
```
