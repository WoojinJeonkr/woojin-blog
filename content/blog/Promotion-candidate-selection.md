---
external : false
title : "Promotion candidate selection"
tag : [Python]
date : 2026-07-03
---

## 1. Problem

한 회사에서는 연말 인사평가를 통해 승진 대상자를 선정하려고 한다.

직원은 총 `N`명이며, 각 직원은 다음 두 개의 평가 점수를 가진다.

- 업무 성과 점수 `Pi`
- 협업 역량 점수 `Ci`

어떤 직원 A가 직원 B보다

```text
성과 점수도 높고
협업 점수도 높다면
```

직원 A는 직원 B를 완전히 우수하다고 평가한다.

즉,

```text
PA > PB
그리고
CA > CB
```

를 동시에 만족하면 A는 B를 완전히 우수하다고 평가한다.

회사는 다른 직원에게 완전히 우수하다고 평가되지 않는 직원만 승진 후보로 선정한다.

승진 후보의 수를 구하여라.

### 입력

첫째 줄에 직원 수 `N`이 주어진다.

이후 `N`개의 줄에 걸쳐 각 직원의 성과 점수 `Pi`와 협업 점수 `Ci`가 주어진다.

### 출력

승진 후보의 수를 출력한다.

### 제한사항

- `1 ≤ N ≤ 200,000`
- `1 ≤ Pi ≤ 10^9`
- `1 ≤ Ci ≤ 10^9`

## 2. Input Example

### Example 1

```text
5
90 80
85 70
95 85
70 95
88 60
```

### Example 2

```text
6
100 50
90 60
80 70
70 80
60 90
50 100
```

## 3. Output Example

### 3.1. Example 1

```text
2
```

### 3.2. Example 2

```text
6
```

## 4. Explanation

### 4.1. Example 1

직원

```text
95 85
```

는 다른 모든 직원보다 성과와 협업 점수가 모두 높거나 일부가 높으므로 누구에게도 완전히 우수하다고 평가되지 않는다.

직원

```text
70 95
```

도 협업 점수가 가장 높으므로 누구에게도 완전히 우수하다고 평가되지 않는다.

반면

```text
90 80
```

은

```text
95 85
```

에게 두 점수 모두 뒤처지므로 승진 후보가 될 수 없다.

따라서 승진 후보는 총 `2`명이다.

### 4.2. Example 2

각 직원은 한 점수는 높지만 다른 점수는 낮다.

따라서 어떤 직원도 다른 직원보다 두 점수를 모두 높게 가질 수 없다.

모든 직원이 승진 후보가 되므로 정답은 `6`이다.

## 5. Solution

직원을 성과 점수 기준으로 내림차순 정렬한다.

정렬된 순서대로 확인하면 현재 직원보다 앞에 있는 직원들은 모두 성과 점수가 더 높거나 같다.

이때 지금까지 확인한 직원들 중 협업 점수의 최댓값을 관리한다.

현재 직원의 협업 점수가 그 최댓값보다 작다면

```text
더 높은 성과 점수 직원 존재
그리고
더 높은 협업 점수 직원 존재
```

가 되므로 승진 후보가 될 수 없다.

반대로 현재 협업 점수가 지금까지의 최댓값 이상이라면 승진 후보가 된다.

정렬 후 한 번만 순회하면 된다.

정렬에

```text
O(N log N)
```

이 필요하고,

순회는

```text
O(N)
```

이므로 전체 시간 복잡도는

```text
O(N log N)
```

이다.

## 6. Answer

```python
import sys

input = sys.stdin.readline

N = int(input())

employees = []

for _ in range(N):
    p, c = map(int, input().split())
    employees.append((p, c))

employees.sort(key=lambda x: (-x[0], -x[1]))

answer = 0
max_collaboration = -1

for performance, collaboration in employees:
    if collaboration >= max_collaboration:
        answer += 1
        max_collaboration = collaboration

print(answer)
```
