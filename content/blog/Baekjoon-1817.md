---
external: false
title: "Baekjoon 1817"
date: 2023-11-10
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/1817)

## 2. 정답 코드 (Python, memory: 31120KB, time: 40ms)

```python
# 입력받은 n과 m을 정수로 변환
n, m = map(int, input().split())

# n이 0이면 0을 출력하고 프로그램 종료
if n == 0:
    print(0)
    exit()

# 입력받은 박스들의 무게를 리스트로 저장
boxes = list(map(int, input().split()))

# 현재 적재된 무게와 개수를 초기화
weight = 0
count = 1

# 박스들을 순회하면서
for box in boxes:
    # 박스의 무게와 적재된 무게의 합이 m 이하이면
    if box + weight <= m:
        # 적재된 무게에 박스의 무게를 더함
        weight += box
    # 그렇지 않으면
    else:
        # 적재된 무게를 박스의 무게로 갱신
        weight = box
        # 개수를 1 증가
        count += 1

# 개수를 출력
print(count)
```
