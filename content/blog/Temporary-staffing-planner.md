---
external : false
title : "Temporary staffing planner"
tag : [Python]
date : 2026-06-24
---

## 1. Problem

한 회사는 새로운 프로젝트를 시작하면서 인력을 충원하려고 한다.

프로젝트는 앞으로 `N`일 동안 진행되며, 각 날짜마다 필요한 최소 인원 수가 정해져 있다.

`Ai`는 `i`번째 날에 필요한 최소 인원 수를 의미한다.

회사는 하루가 끝날 때마다 추가 채용을 진행할 수 있지만, 이미 채용한 직원은 이후 날짜에도 계속 근무한다.

즉, 어떤 날에 필요한 인원 수가 이전까지 확보한 인원보다 많다면 부족한 인원만큼 새로 채용해야 한다.

회사는 프로젝트 기간 동안 **총 몇 명을 새로 채용해야 하는지** 계산하려고 한다.

### 입력

첫째 줄에 프로젝트 기간 `N`이 주어진다.

둘째 줄에 `N`개의 정수 `A1, A2, ..., AN`이 공백으로 구분되어 주어진다.

### 출력

프로젝트 기간 동안 새로 채용해야 하는 총 인원 수를 출력한다.

### 제한사항

- `1 ≤ N ≤ 300,000`
- `0 ≤ Ai ≤ 10^9`

## 2. Input Example

### Example 1

```text
6
3 5 2 8 7 10
```

### Example 2

```text
7
0 4 4 6 1 8 8
```

## 3. Output Example

### 3.1. Example 1

```text
10
```

### 3.2. Example 2

```text
8
```

## 4. Explanation

### 4.1. Example 1

필요 인원 변화는 다음과 같다.

| 날짜 | 필요 인원 | 추가 채용 |
| ------ | ----------- | ----------- |
| 1 | 3 | 3 |
| 2 | 5 | 2 |
| 3 | 2 | 0 |
| 4 | 8 | 3 |
| 5 | 7 | 0 |
| 6 | 10 | 2 |

따라서 총 채용 인원은

```text
3 + 2 + 3 + 2 = 10
```

명이다.

### 4.2. Example 2

필요 인원이 증가하는 시점은 다음과 같다.

```text
0 → 4 → 6 → 8
```

따라서 추가 채용 인원은

```text
4 + 2 + 2 = 8
```

명이다.

## 5. Solution

현재까지 확보한 최대 인원 수를 `current`라고 하자.

각 날짜를 순회하면서,

- `Ai > current`이면 부족한 인원 `Ai - current`명을 새로 채용한다.
- 이후 `current = Ai`로 갱신한다.
- `Ai ≤ current`이면 추가 채용은 필요하지 않다.

즉, 배열에서 이전까지의 최대값이 증가하는 양의 합을 구하면 된다.

각 날짜를 한 번만 확인하므로 시간 복잡도는

```text
O(N)
```

이며 추가 공간 복잡도는

```text
O(1)
```

이다.

## 6. Answer

```python
import sys

input = sys.stdin.readline

N = int(input())
A = list(map(int, input().split()))

answer = 0
current = 0

for need in A:
    if need > current:
        answer += need - current
        current = need

print(answer)
```
