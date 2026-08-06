---
external : false
title : "Herbal prescription"
tag : [Python]
date : 2026-08-06
---

## 1. Problem

한 한의원에서는 환자의 체질에 맞는 처방을 만들기 위해 여러 약재를 조합한다.

약재는 효능 점수 순서대로 일렬로 정리되어 있으며, `Ai`는 `i`번째 약재의 효능 점수를 의미한다.

한의사는 연속된 구간의 약재를 선택하여 하나의 처방을 만든다.

처방의 효능은 선택된 구간에 포함된 약재 효능 점수의 합으로 정의된다.

한의사는 가능한 모든 연속 구간 중 효능이 가장 높은 처방을 찾으려고 한다.

약재의 효능 점수가 주어질 때, 만들 수 있는 처방의 최대 효능을 구하여라.

### 입력

첫째 줄에 약재의 개수 `N`이 주어진다.

둘째 줄에 `N`개의 정수 `A1, A2, ..., AN`이 공백으로 구분되어 주어진다.

### 출력

만들 수 있는 처방의 최대 효능을 출력한다.

### 제한사항

- `1 ≤ N ≤ 300,000`
- `-10^9 ≤ Ai ≤ 10^9`

---

## 2. Input Example

### Example 1

```text
8
3 -2 5 -1 6 -4 2 1
```

### Example 2

```text
5
-8 -3 -5 -2 -7
```

---

## 3. Output Example

### 3.1. Example 1

```text
11
```

### 3.2. Example 2

```text
-2
```

---

## 4. Explanation

### 4.1. Example 1

가장 효능이 높은 처방은 다음 구간이다.

```text
3 -2 5 -1 6
```

효능 합은

```text
3 + (-2) + 5 + (-1) + 6 = 11
```

이다.

따라서 최대 효능은 `11`이다.

### 4.2. Example 2

모든 약재의 효능 점수가 음수이다.

반드시 하나 이상의 약재를 선택해야 하므로 가장 큰 값인

```text
-2
```

를 선택하는 것이 최적이다.

---

## 5. Answer

### 풀이

연속된 구간의 최대 합을 구하는 문제이다.

현재 위치에서 끝나는 최대 효능을 `current`라고 하자.

새로운 약재를 고려할 때

```text
현재 약재부터 새로 시작
또는
이전 처방 뒤에 현재 약재 추가
```

중 더 큰 값을 선택하면 된다.

이를 모든 위치에 대해 반복하면서 전체 최댓값을 관리하면 된다.

이 방법은 카데인 알고리즘(Kadane's Algorithm)으로 `O(N)`에 해결할 수 있다.

### 정답 코드

```python
import sys

input = sys.stdin.readline

N = int(input())
A = list(map(int, input().split()))

current = A[0]
answer = A[0]

for i in range(1, N):
    current = max(A[i], current + A[i])
    answer = max(answer, current)

print(answer)
```
