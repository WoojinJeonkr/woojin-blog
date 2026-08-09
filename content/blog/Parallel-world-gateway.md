---
external : false
title : "Parallel world gateway"
tag : [Python]
date : 2026-08-09
---

## 1. Problem

한 과학자는 평행세계로 이동할 수 있는 특수한 통로를 연구하고 있다.

연구 결과, 통로는 일렬로 배치된 `N`개의 차원 관문으로 구성되어 있으며 각 관문의 에너지 값은 `Ai`로 주어진다.

과학자는 두 관문 `i`, `j` (`i < j`)를 연결하여 이동 경로를 만들 수 있다.

단, 두 관문의 에너지 차이가 정확히 `K`일 때만 안정적인 이동이 가능하다.

즉,

```text
Aj - Ai = K
```

를 만족하는 경우에만 유효한 이동 경로로 인정된다.

연구소는 가능한 모든 유효한 이동 경로의 개수를 계산하려고 한다.

### 입력

첫째 줄에 정수 `N`, `K`가 주어진다.

둘째 줄에 `N`개의 정수 `A1, A2, ..., AN`이 공백으로 구분되어 주어진다.

### 출력

유효한 이동 경로의 개수를 출력한다.

### 제한사항

- `1 ≤ N ≤ 300,000`
- `0 ≤ Ai ≤ 10^9`
- `0 ≤ K ≤ 10^9`

---

## 2. Input Example

### Example 1

```text
6 3
1 4 2 7 5 8
```

### Example 2

```text
5 0
10 10 10 10 10
```

---

## 3. Output Example

### 3.1. Example 1

```text
5
```

### 3.2. Example 2

```text
10
```

---

## 4. Explanation

### 4.1. Example 1

유효한 이동 경로는 다음과 같다.

```text
(1,2)
(2,4)
(3,5)
(4,6)
(5,6)
```

각 쌍은

```text
Aj - Ai = 3
```

을 만족한다.

따라서 가능한 이동 경로의 수는

```text
5
```

개이다.

### 4.2. Example 2

모든 관문의 에너지 값이 같다.

`K = 0`이므로 모든 서로 다른 관문 쌍이 유효하다.

가능한 쌍의 개수는

```text
5 × 4 / 2 = 10
```

개이다.

---

## 5. Answer

### 풀이

관문을 왼쪽에서 오른쪽으로 확인한다고 하자.

현재 에너지 값이 `x`일 때

```text
x - K
```

값을 가진 이전 관문의 개수만큼 새로운 이동 경로가 만들어진다.

따라서 각 에너지 값의 등장 횟수를 해시맵에 저장하면서 진행하면 된다.

현재 값 `x`에 대해

```text
count[x - K]
```

를 정답에 더한 뒤,

```text
count[x]
```

를 증가시키면 된다.

모든 관문을 한 번만 확인하므로 시간복잡도는 `O(N)`이다.

### 정답 코드

```python
import sys
from collections import defaultdict

input = sys.stdin.readline

N, K = map(int, input().split())
A = list(map(int, input().split()))

count = defaultdict(int)
answer = 0

for x in A:
    answer += count[x - K]
    count[x] += 1

print(answer)
```
