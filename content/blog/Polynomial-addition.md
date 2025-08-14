---
external : false
title : "Polynomial addition"
tag : [Programmers, Python]
date : 2025-08-14
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120863)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(polynomial):
    answer = ''  # 최종 결과 문자열
    terms = polynomial.split(" + ")  # ' + '를 기준으로 항 분리
    x_sum = 0     # x항의 계수 합
    const_sum = 0 # 상수항의 합
    
    # 각 항을 하나씩 확인
    for term in terms:
        if 'x' in term:  # x항인 경우
            coef = term.replace('x', '')  # 'x' 제거 후 계수만 남김
            # 계수가 비어있으면 1로 처리 (예: 'x' -> 계수 1)
            x_sum += int(coef) if coef else 1
        else:  # 상수항인 경우
            const_sum += int(term)
    
    # x항이 존재하면 answer에 추가
    if x_sum:
        answer += f"{x_sum}x" if x_sum > 1 else "x"
    
    # 상수항이 존재하면 answer에 추가
    if const_sum:
        if answer:  # 이미 x항이 있으면 ' + ' 붙임
            answer += f" + {const_sum}"
        else:  # x항이 없으면 그대로 상수항만
            answer += str(const_sum)
    
    return answer
```
