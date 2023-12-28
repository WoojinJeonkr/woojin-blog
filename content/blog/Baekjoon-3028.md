---
external: false
title: "Baekjoon 3028"
date: 2023-10-07
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/3028)

## 2. 정답 코드 (Python, memory: 31256KB, time: 40ms)

```python
# 초기 리스트 생성: [1, 0, 0]
lst = [1, 0, 0]

# 사용자로부터 입력 받기
s = input()

# 입력된 문자열을 하나씩 확인하며 조작 수행
for c in s:
    # 만약 문자가 'A'라면, lst의 첫 번째 원소와 두 번째 원소를 교환
    if c == 'A':
        lst[0], lst[1] = lst[1], lst[0]
    # 만약 문자가 'B'라면, lst의 두 번째 원소와 세 번째 원소를 교환
    elif c == 'B':
        lst[1], lst[2] = lst[2], lst[1]
    # 그 외의 경우, lst의 첫 번째 원소와 세 번째 원소를 교환
    else:
        lst[0], lst[2] = lst[2], lst[0]

# 최종 리스트에서 1의 인덱스를 찾고 1을 더해서 출력
print(lst.index(1) + 1)
```
