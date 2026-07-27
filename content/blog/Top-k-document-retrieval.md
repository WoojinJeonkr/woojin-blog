---
external : false
title : "Top k document retrieval"
tag : [Python]
date : 2026-07-27
---

## 1. Problem

한 회사에서는 RAG(Retrieval-Augmented Generation) 시스템을 구축하고 있다.

RAG 시스템에는 N개의 문서가 저장되어 있으며, 각 문서에는 관련도 점수(Relevance score)가 존재한다.

사용자가 질문을 입력하면 시스템은 관련도 점수가 가장 높은 K개의 문서를 검색하여 LLM에게 전달한다.

관련도 점수가 높은 순서대로 K개의 문서 번호를 출력하시오.

관련도 점수가 같은 경우에는 문서 번호가 작은 문서를 먼저 출력한다.

## 2. Input

첫째 줄에 문서의 개수 N과 검색할 문서 수 K가 주어진다.

```text
N K
```

다음 N개의 줄에는 문서 번호와 관련도 점수가 주어진다.

```text
document score
```

## 3. Limit

- 1 ≤ K ≤ N ≤ 100000
- 1 ≤ score ≤ 10^9

## 4. Output

관련도 점수가 높은 순서대로 K개의 문서 번호를 한 줄에 하나씩 출력한다.

```text
document
```

## 5. Input Example

```text
6 3
1 83
2 95
3 77
4 95
5 88
6 60
```

## 6. Output Example

```text
2
4
5
```

## 7. Example Explanation

문서의 관련도 점수는 다음과 같다.

```text
1 : 83
2 : 95
3 : 77
4 : 95
5 : 88
6 : 60
```

관련도 점수가 높은 순서로 정렬하면 다음과 같다.

```text
2 : 95
4 : 95
5 : 88
1 : 83
3 : 77
6 : 60
```

상위 3개의 문서 번호는 다음과 같다.

```text
2
4
5
```

## 8. Answer

```py
import sys

input = sys.stdin.readline

n, k = map(int, input().split())

documents = []

for _ in range(n):
    document, score = map(int, input().split())
    documents.append((-score, document))

documents.sort()

for i in range(k):
    print(documents[i][1])
```
