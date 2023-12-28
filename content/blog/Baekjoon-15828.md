---
external: false
title: "Baekjoon 15828"
date: 2023-07-22
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/15828)

## 2. 풀이 (Python, memory: 48024KB, time: 964ms)

```python
import sys

# 입력에서 정수 N을 읽어옵니다. 이는 큐의 최대 크기를 나타냅니다.
N = int(input())

# 입력을 정수 리스트로 읽어와 input_list 변수에 저장합니다.
# 입력은 공백으로 분리되고 map 함수를 사용하여 정수로 매핑합니다.
input_list = list(map(int, sys.stdin.read().split()))

# 요소들을 저장하기 위해 빈 리스트 'queue'를 초기화합니다.
queue = []

# 'input_list'의 요소들을 반복합니다.
for n in input_list:
    # 만약 요소가 -1이라면, 입력의 끝을 나타내므로 반복문을 종료합니다.
    if n == -1:
        break
    
    # 요소가 0이 아니고 큐의 크기가 N보다 작다면, 해당 요소를 큐에 추가합니다.
    elif n != 0 and len(queue) < N:
        queue.append(n)
    
    # 요소가 0이고 큐가 비어있지 않다면, 큐의 첫 번째 요소를 제거합니다.
    elif n == 0 and queue:
        queue.pop(0)

# 만약 큐가 비어있지 않다면, 'queue' 리스트의 요소들을 공백으로 분리하여 출력합니다.
# 큐가 비어있다면, "empty"를 출력합니다.
print(*queue) if queue else print("empty")
```
