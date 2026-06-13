---
external : false
title : "Sect territory influence"
tag : [Python]
date : 2026-06-13
---

## 1. Problem

무림에는 여러 문파가 존재하며 각 문파는 자신이 점령한 지역을 관리한다.

최근 무림맹은 각 문파의 세력을 수치화하기 위해 영향력을 계산하기로 했다.

영향력 계산 규칙은 다음과 같다.

- 각 지역에는 정수가 적힌 비석이 하나 존재한다.
- 문파는 연속된 지역 구간을 하나 선택하여 지배할 수 있다.
- 선택한 구간의 영향력은 구간 내 비석 숫자의 합으로 정의된다.
- 단, 문파의 내공 운용 특성상 구간 길이는 정확히 `K` 이상이어야 한다.

무림맹은 모든 가능한 구간 중 영향력이 가장 큰 값을 알고 싶어 한다.

영향력의 최댓값을 구하여라.

### 입력

첫째 줄에 지역 수 `N`과 최소 구간 길이 `K`가 주어진다.

둘째 줄에 각 지역의 비석 숫기를 의미하는 정수 `N`개가 공백으로 구분되어 주어진다.

### 출력

길이가 `K` 이상인 연속 구간 중 비석 숫자 합의 최댓값을 출력한다.

### 제한사항

- 1 ≤ K ≤ N ≤ 200,000
- -10^9 ≤ Ai ≤ 10^9

---

## 2. Input Example

### Example 1

```text
5 2
3 -2 5 -1 4
```

### Example 2

```text
6 3
-5 -2 -7 -1 -3 -4
```

---

## 3. Output Example

### 3.1. Example 1

```text
9
```

### 3.2. Example 2

```text
-6
```

---

## 4. Explanation

### 4.1. Example 1

길이가 2 이상인 구간 중

- [3, -2, 5] = 6
- [5, -1, 4] = 8
- [3, -2, 5, -1, 4] = 9

가장 큰 영향력은 9이다.

### 4.2. Example 2

모든 수가 음수이므로

[-2, -7, -1]의 합인 -10,
[-7, -1, -3]의 합인 -11 등과 비교했을 때

[-2, -7, -1]보다 더 큰 구간은 존재하지 않는다.

최댓값은 -6([-2, -1, -3])이다.

---

## 5. Solution

누적합을 이용한다.

구간 [l, r]의 합은

```text
prefix[r] - prefix[l - 1]
```

로 구할 수 있다.

길이가 K 이상인 구간을 고려해야 하므로

현재 위치 i에 대해

```text
prefix[i] - min(prefix[0 ... i-K])
```

의 최댓값을 구하면 된다.

따라서

1. 누적합 배열 생성
2. i를 K부터 N까지 순회
3. i-K 위치까지의 최소 누적합 갱신
4. 현재 구간 합 계산
5. 최댓값 갱신

을 수행하면 된다.

시간 복잡도는 O(N)이다.

---

## 6. Python Code

```python
import sys

input = sys.stdin.readline

N, K = map(int, input().split())
arr = list(map(int, input().split()))

prefix = [0] * (N + 1)

for i in range(N):
    prefix[i + 1] = prefix[i] + arr[i]

min_prefix = prefix[0]
answer = -10**30

for i in range(K, N + 1):
    min_prefix = min(min_prefix, prefix[i - K])
    answer = max(answer, prefix[i] - min_prefix)

print(answer)
```

---

## 7. Complexity Analysis

- 누적합 계산: O(N)
- 최댓값 탐색: O(N)

총 시간 복잡도

```text
O(N)
```

공간 복잡도

```text
O(N)
```
