---
external: false
title: "Baekjoon 5704"
date: 2023-09-23
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/5704)

## 2. 정답 코드 (Python, memory: 34080KB, time: 164ms)

```python
# collections 모듈에서 Counter 클래스를 가져옵니다.
from collections import Counter

# 무한 루프를 시작합니다.
while True:
    # 사용자로부터 입력을 받아서 각 문자의 빈도를 세는 Counter 객체를 생성합니다.
    sentence = Counter(input())
    
    # 입력된 문자열에 '*' 문자가 하나 존재하면 루프를 종료합니다.
    if sentence['*'] == 1:
        break
    
    # 입력된 문자열에 공백(' ') 문자가 하나 이상 존재하면 제거합니다.
    if sentence[' '] >= 1:
        del sentence[' ']
    
    # 입력된 문자열의 고유한 문자 개수가 26개 이상이면 "Y"를 출력합니다.
    else:
        print("Y")
    
    # 입력된 문자열의 고유한 문자 개수가 26개 미만이면 "N"을 출력합니다.
    else:
        print("N")
```
