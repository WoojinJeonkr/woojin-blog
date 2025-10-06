---
external: false
title: "Restore the formula"
tag: [Programmers, Python]
date: 2025-10-06
---

## 1. Problem

해당 문제는 [여기]()에서 확인하실 수 있습니다.

## 2. Answer

```py
def to_base10(num_str, base):
    """주어진 진법의 문자열을 10진수로 변환"""
    res = 0
    for i, digit_char in enumerate(reversed(num_str)):
        digit = int(digit_char)
        res += digit * (base ** i)
    return res

def from_base10(num_10, base):
    """10진수 정수를 주어진 진법의 문자열로 변환"""
    if num_10 == 0:
        return "0"
    
    res = ""
    temp_num = num_10
    while temp_num > 0:
        remainder = temp_num % base
        res = str(remainder) + res
        temp_num //= base
    return res

def solution(expressions):
    
    # 1. 최소 진법 결정을 위한 최대 자릿수 계산
    max_digit = 0
    for expr in expressions:
        parts = expr.split()
        A, op, B, C = parts[0], parts[1], parts[2], parts[4]
        
        for char in A + B:
            max_digit = max(max_digit, int(char))
        
        if C != 'X':
            for char in C:
                max_digit = max(max_digit, int(char))

    # 최소 진법 (2~9 사이)
    min_base = max(2, max_digit + 1)

    # 2. 알려진 수식을 통해 가능한 진법 집합 확정
    possible_bases = set(range(min_base, 10))
    
    for expr in expressions:
        parts = expr.split()
        A, op, B, C = parts[0], parts[1], parts[2], parts[4]
        
        if C != 'X': # 결과가 알려진 수식 확인
            valid_bases_for_expr = set()
            bases_to_check = list(possible_bases)
            
            for base in bases_to_check:
                val_A = to_base10(A, base)
                val_B = to_base10(B, base)
                val_C = to_base10(C, base)
                
                result = val_A + val_B if op == '+' else val_A - val_B
                
                if result == val_C:
                    valid_bases_for_expr.add(base)
            
            possible_bases = possible_bases.intersection(valid_bases_for_expr)

    # 3. 'X' 수식 결과 복원 및 최종 결과 생성
    final_restored_expressions = []
    
    for expr in expressions:
        parts = expr.split()
        A, op, B, C = parts[0], parts[1], parts[2], parts[4]
        
        if C == 'X':
            base_results = set()
            
            for base in possible_bases:
                # 10진수 계산
                val_A = to_base10(A, base)
                val_B = to_base10(B, base)
                result_10 = val_A + val_B if op == '+' else val_A - val_B
                    
                # 해당 진법으로 변환
                result_base = from_base10(result_10, base)
                base_results.add(result_base)
            
            new_C = ""
            if not possible_bases:
                new_C = "?"
            elif len(base_results) == 1:
                # 결과가 유일하면 확정
                new_C = base_results.pop()
            else: 
                # 결과가 다르면 불확실(?)
                new_C = "?"
                
            final_restored_expressions.append(f"{A} {op} {B} = {new_C}")
            
    return final_restored_expressions
```
