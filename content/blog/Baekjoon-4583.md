---
external: false
title: "Baekjoon 4583"
date: 2023-08-22
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/4583)

## 2. 정답 코드 (Python, memory: 31256KB, time: 44ms)

```python
# 무한 루프로 사용자로부터 문자열을 입력받고 처리하는 코드
while True:
    # 입력 받은 문자열의 양쪽 공백을 제거하여 정리
    str = input().strip()
    
    # 입력된 문자열이 "#"인 경우 루프 종료
    if str == "#":
        break
    
    # 거울 문자 리스트
    reflect = ['b', 'd', 'p', 'q', 'i', 'o', 'v', 'w', 'x']
    
    # 결과 문자열 초기화
    result = ""
    
    # 입력된 문자열을 하나씩 순회하며 처리
    for char in str:
        # 만약 문자가 거울 문자 리스트에 속하지 않으면 결과를 "INVALID"로 설정하고 루프 종료
        if char not in reflect:
            result = "INVALID"
            break
        else:
            # 거울 문자 리스트에 포함된 경우, 해당 문자의 거울 반전 문자를 결과에 추가
            if char == 'b':
                result += 'd'
            elif char == 'd':
                result += 'b'
            elif char == 'p':
                result += 'q'
            elif char == 'q':
                result += 'p'
            else:
                result += char
    
    # 결과 문자열이 "INVALID"가 아닌 경우, 결과를 뒤집어서 출력
    if result != "INVALID":
        print(result[::-1])
    else:
        # 결과 문자열이 "INVALID"인 경우, 그대로 출력
        print(result)
```
