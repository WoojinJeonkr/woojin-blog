---
external: false
title: "Baekjoon 4766"
date: 2023-08-05
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/4766)

## 2. 정답 코드 (Python, memory: 31256KB, time: 40ms)

```python
# 사용자로부터 실수값을 입력받아 변수 T1에 저장합니다.
T1 = float(input())

# 무한 루프를 시작합니다.
while True:
    # 사용자로부터 실수값을 입력받아 변수 T2에 저장합니다.
    T2 = float(input())
    
    # 입력된 값이 999라면, 루프를 종료합니다.
    if T2 == 999:
        break
    
    # T2에서 T1을 뺀 결과를 소수점 둘째 자리까지 출력합니다.
    print("%.2f" % (T2 - T1))
    
    # 변수 T1의 값을 T2로 업데이트하여 다음 루프에서 사용합니다.
    T1 = T2
```
