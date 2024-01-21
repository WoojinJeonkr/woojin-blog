---
external: false
title: "Baekjoon 9237"
tag: [Baekjoon, Python]
date: 2024-01-21
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/9237)에서 확인 가능합니다.

## 2. Solve (memory: 42036KB, time: 84ms)

```pyton
import sys

def main():
  # 묘목의 개수 입력
  n = int(input())
  
  # 각 묘목의 자라는데 걸리는 시간 입력
  grow_times = list(map(int, input().split()))
  
  # 묘목이 제일 오래 걸리는 것부터 심는다.
  grow_times.sort(reverse=True)
  
  # 묘목이 자라는데 걸리는 시간을 계산하여 저장한다.
  planting_times = [time + i for i, time in enumerate(grow_times)]
  
  # 묘목이 자라는데 제일 오래 걸리는 시간 + 묘목을 구입한 날과 이장님을 초대하는 날을 출력한다.
  result = max(planting_times) + 2
  print(result)

if __name__ == "__main__":
  main()
```
