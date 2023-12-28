---
external: false
title: "Baekjoon 4459"
date: 2023-11-06
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/4459)

## 2. 정답 코드 (Python, memory: 31120KB, time: 48ms)

```python
# 인용구의 개수를 입력받음
num_quotes = int(input())

# 인용구들을 저장할 리스트를 생성하고 입력받은 인용구들을 리스트에 추가
quotes = [input() for _ in range(num_quotes)]

# 찾을 규칙 번호의 개수를 입력받음
num_rules = int(input())

# 찾을 규칙 번호들을 입력받고 해당하는 인용구를 출력
for _ in range(num_rules):
    rule_number = int(input())
    if 1 <= rule_number <= num_quotes:
        print(f"Rule {rule_number}: {quotes[rule_number - 1]}")
    else:
        print(f"Rule {rule_number}: No such rule")
```
