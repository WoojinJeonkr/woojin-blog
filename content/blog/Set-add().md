---
external: false
title: "Set add()"
date: 2023-09-11
---

### 01. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/py-set-add/problem?isFullScreen=true)

### 02. 정답 코드 (Python)

```python
# 테스트 케이스 개수를 입력받는다.
N = int(input())

# 중복되지 않는 도시를 넣는 set을 만든다.
answer = set()

# N만큼 반복하며 도시가 answer 안에 있는 경우 넣지 않고
# 그렇지 않는 경우에만 넣는다.
for _ in range(N):
    country = input()
    if country not in answer:
        answer.add(country)

# answer의 길이를 출력한다.
print(len(answer))
```
