---
external : false
title : "Howling"
tag : [Algorithm]
date : 2026-08-03
---

## 1. Problem

한 공연장에는 일렬로 배치된 `N`개의 마이크가 있다.

각 마이크의 민감도는 `Ai`로 주어진다.

두 마이크 `i`, `j` (`i < j`)에 대해 다음 조건을 만족하면 하울링이 발생할 수 있다고 정의한다.

```text
Aj - Ai >= K
```

회사는 하울링 위험도를 측정하기 위해 모든 하울링 발생 가능 쌍에 대해 마이크 간 거리의 합을 계산하려고 한다.

하울링 위험도는 다음과 같이 정의된다.

```text
Σ(j - i)
```

단, `Aj - Ai >= K`를 만족하는 모든 쌍 `(i, j)`에 대해서만 계산한다.

프로젝트에 주어진 마이크 민감도 정보가 주어질 때 하울링 위험도를 구하여라.

### 입력

첫째 줄에 정수 `N`, `K`가 주어진다.

둘째 줄에 `N`개의 정수 `A1, A2, ..., AN`이 공백으로 구분되어 주어진다.

### 출력

하울링 위험도를 출력한다.

### 제한사항

- `1 ≤ N ≤ 200,000`
- `0 ≤ Ai ≤ 10^9`
- `0 ≤ K ≤ 10^9`

---

## 2. Input Example

### Example 1

```text
5 3
1 5 2 7 6
```

---

## 3. Output Example

### 3.1. Example 1

```text
13
```

---

## 4. Explanation

### 4.1. Example 1

조건을 만족하는 마이크 쌍은 다음과 같다.

| 마이크 쌍 | 거리 |
| ---------- | ------ |
| (1, 2) | 1 |
| (1, 4) | 3 |
| (1, 5) | 4 |
| (2, 4) | 2 |
| (3, 4) | 1 |
| (3, 5) | 2 |

따라서 하울링 위험도는

```text
1 + 3 + 4 + 2 + 1 + 2 = 13
```

이다.

---

## 5. Answer

### 풀이

브루트포스로 모든 쌍을 확인하면 `O(N²)`이 되어 최대 입력을 처리할 수 없다.

조건

```text
Aj - Ai >= K
```

는

```text
Ai <= Aj - K
```

와 동일하다.

현재 원소 `Aj`를 처리할 때 조건을 만족하는 이전 원소들의 개수를 `cnt`, 인덱스 합을 `sumIdx`라고 하면 기여도는

```text
Σ(j - i)
= cnt × j - sumIdx
```

가 된다.

값 기준으로 정렬한 뒤 투 포인터를 이용하여 현재 값보다 `K` 이상 작은 원소들을 관리하면 모든 기여도를 효율적으로 계산할 수 있다.

정렬에 `O(N log N)`이 필요하며 포인터는 전체 배열을 한 번만 이동하므로 전체 시간복잡도는 `O(N log N)`이다.

### 정답 코드

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
