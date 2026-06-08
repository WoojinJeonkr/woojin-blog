---
external : false
title : "Hiring pipeline dependency validator"
tag : [Python]
date : 2026-06-08
---

## 1. Problem

한 기업은 채용 프로세스를 자동화하기 위해 지원자의 평가 단계를 그래프로 관리한다.

각 단계는 고유한 이름을 가지며, 일부 단계는 다른 단계가 완료되어야만 진행할 수 있다.

예를 들어

```text
Resume -> CodingTest
CodingTest -> Interview
Interview -> Offer
```

라면 Resume을 통과해야 CodingTest를 진행할 수 있다.

채용 프로세스의 규칙은 다음과 같다.

1. 단계 이름은 중복 없이 관리된다.
2. 의존 관계는 방향 그래프를 이룬다.
3. 어떤 단계도 자기 자신을 직접 또는 간접적으로 선행 조건으로 가질 수 없다.
4. 즉, 그래프에 사이클(Cycle)이 존재하면 잘못된 채용 프로세스이다.

의존 관계가 주어질 때, 사이클이 존재하는지 판별하시오.

사이클이 존재하면

```text
INVALID
```

를 출력하고,

사이클이 존재하지 않으면

```text
VALID
```

를 출력한다.

## 2. Input

첫째 줄에 단계 수 N과 의존 관계 수 M이 주어진다.

```text
N M
```

다음 N개의 줄에는 단계 이름이 주어진다.

```text
stageName
```

이후 M개의 줄에는 의존 관계가 주어진다.

```text
A B
```

이는

```text
A -> B
```

를 의미하며,

A를 완료해야 B를 진행할 수 있음을 의미한다.

## 3. Limit

- 1 ≤ N ≤ 200000
- 0 ≤ M ≤ 300000
- 단계 이름 길이 : 1 ~ 30
- 단계 이름은 영문 대소문자, 숫자로 구성

## 4. Output

사이클이 존재하면

```text
INVALID
```

를 출력한다.

사이클이 존재하지 않으면

```text
VALID
```

를 출력한다.

## 5. Input Example

```text
5 5
Resume
CodingTest
Interview
ReferenceCheck
Offer
Resume CodingTest
CodingTest Interview
Interview ReferenceCheck
ReferenceCheck Offer
Offer CodingTest
```

## 6. Output Example

```text
INVALID
```

## 7. Example Explanation

의존 관계는 다음과 같다.

```text
Resume -> CodingTest
CodingTest -> Interview
Interview -> ReferenceCheck
ReferenceCheck -> Offer
Offer -> CodingTest
```

따라서

```text
CodingTest
→ Interview
→ ReferenceCheck
→ Offer
→ CodingTest
```

와 같은 사이클이 존재한다.

채용 프로세스 규칙을 위반하므로

```text
INVALID
```

를 출력한다.

이 문제는 그래프(Graph), 위상 정렬(Topological Sort), 자료구조(Data Structure) 문제이다.

## 8. Answer

```py
import sys
from collections import deque

input = sys.stdin.readline

n, m = map(int, input().split())

stages = {}
for i in range(n):
    name = input().strip()
    stages[name] = i

graph = [[] for _ in range(n)]
indegree = [0] * n

for _ in range(m):
    a, b = input().split()

    u = stages[a]
    v = stages[b]

    graph[u].append(v)
    indegree[v] += 1

queue = deque()

for i in range(n):
    if indegree[i] == 0:
        queue.append(i)

visited = 0

while queue:
    cur = queue.popleft()
    visited += 1

    for nxt in graph[cur]:
        indegree[nxt] -= 1

        if indegree[nxt] == 0:
            queue.append(nxt)

if visited == n:
    print("VALID")
else:
    print("INVALID")
```
