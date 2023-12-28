---
external: false
title: "Baekjoon 14487"
date: 2023-06-04
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/14487)

## 2. Solution

### 1. Python (memory: 36352KB, time: 56ms)

```python
n = int(input())
town = list(map(int, input().split()))
print(sum(town) - max(town))
```
