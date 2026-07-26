---
external : false
title : "Document retrieval in rag system"
tag : [Python]
date : 2026-07-26
---

## 1. Problem

한 회사에서는 RAG(Retrieval-Augmented Generation) 시스템을 구축하고 있다.

RAG 시스템에는 N개의 문서가 저장되어 있으며, 각 문서에는 관련도 점수(Relevance score)가 존재한다.

사용자가 질문을 입력하면, 시스템은 관련도 점수가 가장 높은 문서를 찾아 LLM에게 전달한다.

관련도 점수가 가장 높은 문서의 번호와 점수를 출력하시오.

만약 가장 높은 관련도 점수를 가진 문서가 여러 개라면 번호가 가장 작은 문서를 출력한다.

## 2. Input

첫째 줄에 문서의 개수 N이 주어진다.

```text
N
```

둘째 줄부터 N개의 줄에는 문서 번호와 관련도 점수가 주어진다.

```text
document score
```

## 3. Limit

- 1 ≤ N ≤ 100000
- 1 ≤ score ≤ 10^9

## 4. Output

가장 높은 관련도 점수를 가진 문서 번호와 점수를 출력한다.

```text
document score
```

## 5. Input Example

```text
5
1 82
2 95
3 78
4 95
5 60
```

## 6. Output Example

```text
2 95
```

## 7. Example Explanation

각 문서의 관련도 점수는 다음과 같다.

```text
1 : 82
2 : 95
3 : 78
4 : 95
5 : 60
```

가장 높은 관련도 점수는 95이다.

2번과 4번 문서가 같은 점수를 가지므로 번호가 더 작은 2번 문서를 출력한다.

## 8. Answer

```py
import sys

input = sys.stdin.readline

n = int(input())

best_document = 0
best_score = -1

for _ in range(n):
    document, score = map(int, input().split())

    if score > best_score:
        best_score = score
        best_document = document
    elif score == best_score and document < best_document:
        best_document = document

print(best_document, best_score)
```
