---
external : false
title : "Return journey"
tag : [Python]
date : 2026-08-14
---

## 1. Problem

오랜 여행을 마친 한 여행자는 집으로 돌아가기 위해 여러 도시를 지나가고 있다.

여행 경로에는 총 `N`개의 도시가 있으며, 각 도시를 방문할 때마다 이동 피로도가 기록된다.

`Fatiguei`는 `i`번째 도시를 방문할 때 증가하는 피로도를 의미한다.

여행자는 집에 도착하기 전에 연속된 구간을 선택하여 자신의 이동 상태를 분석하려고 한다.

구간 `[l, r]`의 총 피로도는 다음과 같이 정의된다.

```text
Fatigue[l] + Fatigue[l+1] + ... + Fatigue[r]
```

여행자는 총 피로도가 정확히 `K`가 되는 연속 구간의 개수를 구하려고 한다.

### 입력

첫째 줄에 정수 `N`, `K`가 주어진다.

둘째 줄에 `N`개의 정수 `Fatigue1, Fatigue2, ..., FatigueN`이 공백으로 구분되어 주어진다.

### 출력

총 피로도가 정확히 `K`가 되는 연속 구간의 개수를 출력한다.

### 제한사항

- `1 ≤ N ≤ 300,000`
- `-10^9 ≤ Fatiguei ≤ 10^9`
- `-10^14 ≤ K ≤ 10^14`

---

## 2. Input Example

### Example 1

```text
6 5
1 2 3 2 1 2
```

### Example 2

```text
5 0
2 -2 1 -1 0
```

---

## 3. Output Example

### 3.1. Example 1

```text
4
```

### 3.2. Example 2

```text
6
```

---

## 4. Explanation

### 4.1. Example 1

총 피로도가 5가 되는 구간은 다음과 같다.

```text
[2,3]
[3,4]
[4,6]
[1,3]
```

조건을 만족하는 연속 구간의 개수는

```text
4
```

개이다.

### 4.2. Example 2

총 피로도가 0이 되는 연속 구간이 여러 개 존재한다.

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
Fatigue = list(map(int, input().split()))

count = defaultdict(int)
count[0] = 1

prefix = 0
answer = 0

for value in Fatigue:
    prefix += value
    answer += count[prefix - K]
    count[prefix] += 1

print(answer)
```
