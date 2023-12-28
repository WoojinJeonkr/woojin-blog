---
external: false
title: "Baekjoon 11004"
date: 2023-01-08
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/11004)

## 2. Solution

```python
# N, K를 입력받는다.
N, K = map(int, input().split())

# N개의 수를 입력받아 리스트에 넣고 오름차순 정렬 후 K-1번째 수를 출력한다.
#리스트는 0부터 시작하므로 k가 2라면 list[1]이 2번째에 해당한다.
print(sorted(list(map(int, input().split())))[K-1])
```
