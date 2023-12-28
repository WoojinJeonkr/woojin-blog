---
external: false
title: "Baekjoon 10769"
date: 2023-06-05
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/10769)

## 2. Solution

### 1. Python (memory: 31256KB, time: 40ms)

```python
sentence, happy, sad = input(), 0, 0
for i in range(len(sentence)):
  if sentence[i] == ":":
    emoji = sentence[i:i+3]
    if emoji == ":-)":
      happy += 1
    elif emoji == ":-(":
      sad +=1

if happy > sad: print("happy")
elif happy < sad: print("sad")
else:
  if happy == sad == 0:
    print("none")
  else:
    print("unsure")
```
