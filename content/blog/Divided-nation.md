---
external : false
title : "Divided nation"
tag : [Python]
date : 2026-08-04
---

## 1. Problem

한 국가는 오랜 분단 상태를 관리하기 위해 국경선을 따라 여러 감시 구역을 운영하고 있다.

국경선에는 왼쪽에서 오른쪽으로 번호가 매겨진 `N`개의 감시 구역이 있으며, 각 구역의 긴장도는 `Ai`로 주어진다.

정부는 긴장도 차이가 큰 구역 쌍을 잠재적인 분단 위험 구역으로 분류한다.

두 구역 `i`, `j` (`i < j`)에 대해 다음 조건을 만족하면 위험 구역 쌍이라고 한다.

```text
Aj - Ai >= K
```

위험도는 모든 위험 구역 쌍에 대해 구역 간 거리 `(j - i)`를 더한 값으로 정의된다.

국경선의 긴장도 정보가 주어질 때 전체 위험도를 계산하여라.

### Input

첫째 줄에 정수 `N`, `K`가 주어진다.

둘째 줄에 `N`개의 정수 `A1, A2, ..., AN`이 공백으로 구분되어 주어진다.

### Output

전체 위험도를 출력한다.

### 제한사항

- `1 ≤ N ≤ 200,000`
- `0 ≤ Ai ≤ 10^9`
- `0 ≤ K ≤ 10^9`

---

## 2. Input Example

### Example 1

```text
5 4
2 7 3 10 8
```

### Example 2

```text
6 5
1 2 8 4 12 15
```

---

## 3. Output Example

### 3.1. Example 1

```text
13
```

### 3.2. Example 2

```text
21
```

---

## 4. Explanation

### 4.1. Example 1

위험 구역 쌍은 다음과 같다.

| 구역 쌍 | 거리 |
| -------- | ------ |
| (1, 2) | 1 |
| (1, 4) | 3 |
| (1, 5) | 4 |
| (3, 4) | 1 |
| (3, 5) | 2 |
| (2, 4) | 2 |

따라서 위험도는

```text
1 + 3 + 4 + 1 + 2 + 2 = 13
```

이다.

### 4.2. Example 2

위험 구역 쌍의 거리 합은

```text
21
```

이 된다.

---

## 5. Answer

### Solution

모든 구역 쌍을 직접 검사하면 시간복잡도는 `O(N²)`이므로 사용할 수 없다.

조건

```text
Aj - Ai >= K
```

는

```text
Ai <= Aj - K
```

와 같다.

현재 구역 `j`를 처리할 때 조건을 만족하는 이전 구역들의 개수를 `cnt`, 인덱스 합을 `sumIdx`라고 하면 기여도는

```text
Σ(j - i)
= cnt × j - sumIdx
```

로 계산할 수 있다.

긴장도를 기준으로 정렬한 뒤 투 포인터를 사용하여 현재 값보다 `K` 이상 작은 구역들을 관리하면 모든 기여도를 효율적으로 구할 수 있다.

정렬에 `O(N log N)`이 필요하고 포인터는 전체 배열을 한 번만 이동하므로 전체 시간복잡도는 `O(N log N)`이다.

### Answer

```python
import sys

input = sys.stdin.readline

N, K = map(int, input().split())
A = list(map(int, input().split()))

arr = sorted((A[i], i + 1) for i in range(N))

answer = 0
count = 0
sum_idx = 0

left = 0

for value, idx in arr:
    while left < N and arr[left][0] <= value - K:
        count += 1
        sum_idx += arr[left][1]
        left += 1

    answer += count * idx - sum_idx

print(answer)
```
