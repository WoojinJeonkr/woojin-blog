---
external: false
title: "Emergency supply inventory"
tag: [Python]
date: 2026-11-03
---

## 1. Problem

재난 대응 센터에서는 비상 상황에 대비하여 구호 물품의 재고를 관리한다.

센터에는 여러 종류의 구호 물품이 있으며, 각 물품의 현재 재고 수량과 최소 확보 기준이 정해져 있다.

물품 이름, 현재 재고 수량, 최소 확보 기준이 주어졌을 때 다음 조건에 따라 재고 상태를 분류하는 프로그램을 작성하시오.

재고 상태는 다음 기준으로 결정한다.

- 현재 재고가 최소 확보 기준보다 적으면 `SHORTAGE`
- 현재 재고가 최소 확보 기준과 같으면 `NORMAL`
- 현재 재고가 최소 확보 기준보다 많으면 `SUFFICIENT`

모든 물품의 재고 상태를 확인한 후, `SHORTAGE` 상태인 물품의 이름을 입력된 순서대로 출력한다.

부족한 물품이 하나도 없다면 `NONE`을 출력한다.

### 입력

첫째 줄에 물품 종류의 개수 \(N\)이 주어진다.

다음 \(N\)개의 줄에는 물품 이름, 현재 재고 수량, 최소 확보 기준이 공백으로 구분되어 주어진다.

### 출력

각 물품의 이름과 재고 상태를 공백으로 구분하여 입력된 순서대로 출력한다.

마지막 줄에는 재고가 부족한 물품의 이름을 공백으로 구분하여 출력한다. 부족한 물품이 없다면 `NONE`을 출력한다.

### 제한사항

- \(1 \leq N \leq 100\)
- 물품 이름은 영문 소문자로 구성된다.
- 물품 이름의 길이는 1 이상 20 이하이다.
- 현재 재고 수량과 최소 확보 기준은 0 이상 10000 이하의 정수이다.
- 물품 이름은 중복되지 않는다.

## 2. Input example

### Example 1

```text
4
water 120 100
rice 50 80
blanket 80 80
medicine 150 100
```

### Example 2

```text
3
mask 200 100
gloves 100 100
food 300 200
```

## 3. Output example

### 3.1. Example 1

```text
water SUFFICIENT
rice SHORTAGE
blanket NORMAL
medicine SUFFICIENT
rice
```

### 3.2. Example 2

```text
mask SUFFICIENT
gloves NORMAL
food SUFFICIENT
NONE
```

## 4. Explanation

### 4.1. Example 1

각 물품의 현재 재고와 최소 확보 기준을 비교한다.

- `water`: 120개로 기준 100개보다 많으므로 `SUFFICIENT`
- `rice`: 50개로 기준 80개보다 적으므로 `SHORTAGE`
- `blanket`: 80개로 기준 80개와 같으므로 `NORMAL`
- `medicine`: 150개로 기준 100개보다 많으므로 `SUFFICIENT`

재고가 부족한 물품은 `rice` 하나이므로 마지막 줄에 `rice`를 출력한다.

### 4.2. Example 2

- `mask`: 200개로 기준 100개보다 많으므로 `SUFFICIENT`
- `gloves`: 100개로 기준 100개와 같으므로 `NORMAL`
- `food`: 300개로 기준 200개보다 많으므로 `SUFFICIENT`

재고가 부족한 물품이 없으므로 마지막 줄에 `NONE`을 출력한다.

## 5. Answer

```python
n = int(input())

results = []
shortage_items = []

for _ in range(n):
    name, current, minimum = input().split()

    current = int(current)
    minimum = int(minimum)

    if current < minimum:
        status = "SHORTAGE"
        shortage_items.append(name)
    elif current == minimum:
        status = "NORMAL"
    else:
        status = "SUFFICIENT"

    results.append(f"{name} {status}")

if shortage_items:
    results.append(" ".join(shortage_items))
else:
    results.append("NONE")

print("\n".join(results))
```
