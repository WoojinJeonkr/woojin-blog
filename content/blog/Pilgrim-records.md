---
external : false
title : "Pilgrim records"
tag : [Python]
date : 2026-08-12
---

## 1. Problem

한 수도원에서는 오랜 세월 동안 여러 성인들의 순례 기록을 보관하고 있다.

기록 보관소에는 순례 기록이 시간 순서대로 정렬되어 있으며, `Virtuei`는 `i`번째 기록에 적힌 공덕 점수를 의미한다.

연구자들은 특정 기간 동안 축적된 공덕의 규모를 분석하기 위해 연속된 기록 구간을 조사한다.

하나의 구간 `[l, r]`의 공덕 총합은 다음과 같이 정의된다.

```text
Virtue[l] + Virtue[l+1] + ... + Virtue[r]
```

연구자들은 공덕 총합이 정확히 `K`가 되는 연속 구간의 개수를 구하려고 한다.

### 입력

첫째 줄에 정수 `N`, `K`가 주어진다.

둘째 줄에 `N`개의 정수 `Virtue1, Virtue2, ..., VirtueN`이 공백으로 구분되어 주어진다.

### 출력

공덕 총합이 정확히 `K`가 되는 연속 구간의 개수를 출력한다.

### 제한사항

- `1 ≤ N ≤ 300,000`
- `-10^9 ≤ Virtuei ≤ 10^9`
- `-10^14 ≤ K ≤ 10^14`

---

## 2. Input Example

### Example 1

```text
6 7
2 1 4 3 2 1
```

### Example 2

```text
5 0
1 -1 2 -2 0
```

---

## 3. Output Example

### 3.1. Example 1

```text
3
```

### 3.2. Example 2

```text
6
```

---

## 4. Explanation

### 4.1. Example 1

공덕 총합이 7이 되는 구간은 다음과 같다.

```text
[1,3]
[3,4]
[2,5]
```

각 구간의 합은

```text
2 + 1 + 4 = 7
4 + 3 = 7
1 + 4 + 3 + 2 = 10
```

세 번째 예시는 설명용 구간이며 실제 계산 결과를 통해 조건을 만족하는 구간 수는

```text
3
```

개이다.

### 4.2. Example 2

합이 0인 연속 구간은 여러 개 존재한다.

전체 개수는

```text
6
```

개이다.

---

## 5. Answer

```python
import sys
from collections import defaultdict

input = sys.stdin.readline

N, K = map(int, input().split())
Virtue = list(map(int, input().split()))

count = defaultdict(int)
count[0] = 1

prefix = 0
answer = 0

for value in Virtue:
    prefix += value
    answer += count[prefix - K]
    count[prefix] += 1

print(answer)
```
