---
external: false
title: "Baekjoon 4740"
date: 2023-09-14
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/4740)

## 2. 정답 코드 (Python, memory: 31256KB, time: 40ms)

```python
while True:
    # 문장을 입력받는다.
    sentence = input()

    # 입력받은 문장이 ***이면 중단한다.
    if sentence == "***":
        break
    
    # 입력받은 문장을 역순으로 출력한다.
    print(sentence[::-1])
```
