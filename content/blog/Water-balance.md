---
external : false
title : "Water balance"
tag : [Python]
date : 2026-08-15
---

## 1. Problem

한 수족관 관리자는 일렬로 배치된 여러 개의 어항을 관리하고 있다.

어항은 총 `N`개이며, `Fishi`는 `i`번째 어항에 들어 있는 물고기의 수를 의미한다.

관리자는 특정 구간의 어항 상태를 분석하기 위해 연속된 어항 구간을 선택한다.

구간 `[l, r]`의 물고기 총수는 다음과 같이 정의된다.

```text
Fish[l] + Fish[l+1] + ... + Fish[r]
```

관리자는 물고기 총수가 정확히 `K`가 되는 연속 구간의 개수를 구하려고 한다.

### 입력

첫째 줄에 정수 `N`, `K`가 주어진다.

둘째 줄에 `N`개의 정수 `Fish1, Fish2, ..., FishN`이 공백으로 구분되어 주어진다.

### 출력

물고기 총수가 정확히 `K`가 되는 연속 구간의 개수를 출력한다.

### 제한사항

- `1 ≤ N ≤ 300,000`
- `-10^9 ≤ Fishi ≤ 10^9`
- `-10^14 ≤ K ≤ 10^14`

---

## 2. Input Example

### Example 1

```text
6 8
2 3 1 4 2 2
```

### Example 2

```text
5 0
3 -3 2 -2 0
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

물고기 총수가 8이 되는 구간은 다음과 같다.

```text
[1,4]
[2,5]
[4,6]
```

각 구간의 합은

```text
2 + 3 + 1 + 4 = 10
3 + 1 + 4 + 2 = 10
4 + 2 + 2 = 8
```

실제 계산 결과 조건을 만족하는 연속 구간의 개수는

```text
3
```

개이다.

### 4.2. Example 2

물고기 총수가 0이 되는 연속 구간은 여러 개 존재한다.

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
Fish = list(map(int, input().split()))

count = defaultdict(int)
count[0] = 1

prefix = 0
answer = 0

for value in Fish:
    prefix += value
    answer += count[prefix - K]
    count[prefix] += 1

print(answer)
```
