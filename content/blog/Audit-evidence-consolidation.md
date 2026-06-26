---
external : false
title : "Audit evidence consolidation"
tag : [Python]
date : 2026-06-26
---

## 1. Problem

한 회계법인은 여러 지점의 회계감사를 진행하고 있다.

각 지점에서는 감사 과정에서 발견된 증빙 자료를 본사 서버로 전송한다.

증빙 자료는 중요도 점수로 관리되며, `i`번째 자료의 중요도는 `Ai`이다.

감사팀은 자료를 분석하기 쉽도록 **중요도가 오름차순으로 정렬된 상태에서**, 중요도가 같은 자료는 하나의 그룹으로 합치려고 한다.

합쳐진 각 중요도 그룹에 대해 다음 값을 계산한다.

```text
(해당 중요도) × (그 중요도를 가진 자료의 개수)
```

그리고 모든 그룹의 값을 합산한 결과를 **감사 증빙 통합 점수**라고 정의한다.

주어진 `N`개의 증빙 자료의 중요도가 주어질 때, 감사 증빙 통합 점수를 구하여라.

### 입력

첫째 줄에 증빙 자료의 개수 `N`이 주어진다.

둘째 줄에 `N`개의 정수 `A1, A2, ..., AN`이 공백으로 구분되어 주어진다.

### 출력

감사 증빙 통합 점수를 출력한다.

### 제한사항

- `1 ≤ N ≤ 300,000`
- `1 ≤ Ai ≤ 10^9`

## 2. Input Example

### Example 1

```text
7
3 1 3 2 1 3 2
```

### Example 2

```text
10
5 5 7 2 7 7 2 1 5 1
```

## 3. Output Example

### 3.1. Example 1

```text
15
```

### 3.2. Example 2

```text
42
```

## 4. Explanation

### 4.1. Example 1

각 중요도의 개수는 다음과 같다.

| 중요도 | 개수 | 기여 값 |
| ------ | ---- | ------- |
| 1 | 2 | 2 |
| 2 | 2 | 4 |
| 3 | 3 | 9 |

따라서 감사 증빙 통합 점수는

```text
2 + 4 + 9 = 15
```

이다.

### 4.2. Example 2

각 중요도의 개수는 다음과 같다.

| 중요도 | 개수 | 기여 값 |
| ------ | ---- | ------- |
| 1 | 2 | 2 |
| 2 | 2 | 4 |
| 5 | 3 | 15 |
| 7 | 3 | 21 |

따라서 감사 증빙 통합 점수는

```text
2 + 4 + 15 + 21 = 42
```

이다.

## 5. Solution

같은 중요도를 가진 자료의 개수를 세어야 한다.

해시 맵(딕셔너리)을 이용하여 각 중요도의 등장 횟수를 계산한 뒤,

```text
중요도 × 등장 횟수
```

를 모두 더하면 된다.

자료를 한 번만 순회하여 빈도를 계산하고, 이후 딕셔너리를 순회하여 답을 구할 수 있다.

시간 복잡도는

```text
O(N)
```

이며,

추가 공간 복잡도는 서로 다른 중요도의 개수를 `M`이라 할 때

```text
O(M)
```

이다.

## 6. Answer

```python
import sys
from collections import defaultdict

input = sys.stdin.readline

N = int(input())
A = list(map(int, input().split()))

count = defaultdict(int)

for x in A:
    count[x] += 1

answer = 0

for value, freq in count.items():
    answer += value * freq

print(answer)
```
