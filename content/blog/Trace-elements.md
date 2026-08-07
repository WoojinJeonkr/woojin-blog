---
external : false
title : "Trace elements"
tag : [Python]
date : 2026-08-07
---

## 1. Problem

한 연구소에서는 식물의 성장 상태를 분석하기 위해 토양 속 미량원소 농도를 측정한다.

앞으로 `N`일 동안 측정된 특정 미량원소의 농도가 순서대로 기록되어 있으며, `Ai`는 `i`번째 날의 농도를 의미한다.

연구원들은 농도가 급격히 증가한 구간을 찾기 위해 각 날짜에 대해 이전 날짜들 중 농도가 더 낮았던 날의 개수를 계산하려고 한다.

정확히는 모든 쌍 `(i, j)` (`i < j`)에 대해

```text
Ai < Aj
```

를 만족하면 해당 쌍을 "농도 상승 쌍"이라고 부른다.

연구원들은 전체 농도 상승 쌍의 개수를 구하려고 한다.

### 입력

첫째 줄에 정수 `N`이 주어진다.

둘째 줄에 `N`개의 정수 `A1, A2, ..., AN`이 공백으로 구분되어 주어진다.

### 출력

농도 상승 쌍의 총 개수를 출력한다.

### 제한사항

- `1 ≤ N ≤ 300,000`
- `0 ≤ Ai ≤ 10^9`

---

## 2. Input Example

### Example 1

```text
5
1 4 2 5 3
```

### Example 2

```text
6
9 8 7 6 5 4
```

---

## 3. Output Example

### 3.1. Example 1

```text
7
```

### 3.2. Example 2

```text
0
```

---

## 4. Explanation

### 4.1. Example 1

농도 상승 쌍은 다음과 같다.

```text
(1,2)
(1,3)
(1,4)
(1,5)
(2,4)
(3,4)
(3,5)
```

총 개수는

```text
7
```

개이다.

### 4.2. Example 2

농도가 계속 감소하므로

```text
Ai < Aj
```

를 만족하는 쌍이 존재하지 않는다.

따라서 정답은

```text
0
```

이다.

---

## 5. Answer

### 풀이

모든 쌍을 직접 확인하면 `O(N²)`이 되어 사용할 수 없다.

현재 원소 `Aj`를 처리할 때 이전 원소들 중

```text
Ai < Aj
```

를 만족하는 개수를 빠르게 구해야 한다.

이를 위해 좌표 압축을 수행한 뒤 펜윅 트리(Fenwick Tree)를 이용한다.

각 값에 대해

1. 현재 값보다 작은 값의 등장 횟수를 조회한다.
2. 그 값을 정답에 더한다.
3. 현재 값을 트리에 추가한다.

각 연산은 `O(log N)`에 수행되므로 전체 시간복잡도는 `O(N log N)`이다.

### 정답 코드

```python
import sys

input = sys.stdin.readline

N = int(input())
A = list(map(int, input().split()))

values = sorted(set(A))
compress = {v: i + 1 for i, v in enumerate(values)}

size = len(values)
tree = [0] * (size + 1)

def update(idx, diff):
    while idx <= size:
        tree[idx] += diff
        idx += idx & -idx

def query(idx):
    result = 0
    while idx > 0:
        result += tree[idx]
        idx -= idx & -idx
    return result

answer = 0

for x in A:
    idx = compress[x]
    answer += query(idx - 1)
    update(idx, 1)

print(answer)
```
