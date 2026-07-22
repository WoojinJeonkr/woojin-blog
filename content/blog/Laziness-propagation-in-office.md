---
external : false
title : "Laziness propagation in office"
tag : [Python]
date : 2026-07-22
---

## 1. Problem

어느 회사에서는 근무 태만이 직원들 사이에서 전염된다고 가정한다.

회사는 N명의 직원과 M개의 방향성 업무 관계로 이루어져 있다.

- `u → v`는 직원 u가 직원 v의 업무 방식에 영향을 줄 수 있음을 의미한다.

초기에는 일부 직원만 근무 태만 지수(Laziness score)를 가지고 있으며, 나머지 직원의 태만 지수는 0이다.

이후 K일 동안 다음 규칙에 따라 근무 태만이 전파된다.

- 모든 직원은 동시에 행동한다.
- 직원 u의 현재 태만 지수가 X라면, 자신이 영향을 줄 수 있는 모든 직원에게 `X / 2`(버림)만큼의 태만 지수를 각각 전달한다.
- 여러 명에게 영향을 준다고 해서 자신의 태만 지수는 감소하지 않는다.
- 하루가 끝난 뒤 모든 직원은 전달받은 태만 지수를 기존 태만 지수에 더한다.

K일이 지난 후 가장 높은 근무 태만 지수를 가진 직원의 번호와 지수를 출력하시오.

만약 가장 높은 태만 지수를 가진 직원이 여러 명이라면 번호가 가장 작은 직원을 출력한다.

## 2. Input

첫째 줄에 직원 수 N, 업무 관계 수 M, 초기 태만 직원 수 S, 진행 일수 K가 주어진다.

```text
N M S K
```

다음 M개의 줄에는 업무 영향 관계가 주어진다.

```text
u v
```

다음 S개의 줄에는 초기 태만 지수를 가진 직원 번호와 지수가 주어진다.

```text
employee score
```

## 3. Limit

- 1 ≤ N ≤ 200000
- 0 ≤ M ≤ 300000
- 1 ≤ S ≤ N
- 1 ≤ K ≤ 20
- 1 ≤ score ≤ 10^9

## 4. Output

K일 후 가장 높은 태만 지수를 가진 직원 번호와 지수를 출력한다.

```text
employee score
```

## 5. Input Example

```text
5 5 2 2
1 3
2 3
3 4
3 5
4 5
1 80
2 40
```

## 6. Output Example

```text
3 120
```

## 7. Example Explanation

초기 태만 지수는 다음과 같다.

```text
1 : 80
2 : 40
3 : 0
4 : 0
5 : 0
```

### 1일 후

- 1번 직원은 3번에게 40 전달
- 2번 직원은 3번에게 20 전달

결과

```text
1 : 80
2 : 40
3 : 60
4 : 0
5 : 0
```

### 2일 후

- 1번 직원은 다시 40 전달
- 2번 직원은 다시 20 전달
- 3번 직원은 현재 태만 지수 60의 절반인 30을 4번과 5번에게 각각 전달

결과

```text
1 : 80
2 : 40
3 : 120
4 : 30
5 : 30
```

가장 높은 태만 지수는 3번 직원의 120이다.

## 8. Answer

```py
import sys

input = sys.stdin.readline

n, m, s, k = map(int, input().split())

graph = [[] for _ in range(n + 1)]

for _ in range(m):
    u, v = map(int, input().split())
    graph[u].append(v)

score = [0] * (n + 1)

for _ in range(s):
    employee, value = map(int, input().split())
    score[employee] = value

for _ in range(k):
    add = [0] * (n + 1)

    for u in range(1, n + 1):
        if score[u] == 0:
            continue

        value = score[u] // 2

        if value == 0:
            continue

        for v in graph[u]:
            add[v] += value

    for i in range(1, n + 1):
        score[i] += add[i]

best_employee = 1
best_score = score[1]

for i in range(2, n + 1):
    if score[i] > best_score:
        best_score = score[i]
        best_employee = i
    elif score[i] == best_score and i < best_employee:
        best_employee = i

print(best_employee, best_score)
```
