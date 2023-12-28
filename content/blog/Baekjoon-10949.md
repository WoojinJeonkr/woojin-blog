---
external: false
title: "Baekjoon 10949"
date: 2023-11-04
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/10949)

## 2. 정답 코드 (Python, memory: 31120KB, time: 48ms, score: 10)

```python
import itertools  # itertools 모듈을 가져옵니다.

def calculate_score(target, guess):
    """
    주어진 target과 guess 숫자를 비교하여 스트라이크와 볼을 계산하는 함수입니다.
    
    Args:
        target (str): 비교할 대상 숫자.
        guess (str): 추측한 숫자.
        
    Returns:
        int: 스트라이크의 수와 볼의 수를 기반으로 계산한 점수를 반환합니다.
    """
    strikes = sum(target_digit == guess_digit for target_digit, guess_digit in zip(target, guess))
    # zip 함수를 사용하여 target과 guess의 각 자릿수를 순차적으로 비교하고, 스트라이크의 개수를 세어서 더합니다.
    balls = sum(guess_digit in target for guess_digit in guess) - strikes
    # guess의 각 자릿수가 target에 있지만 스트라이크가 아닌 경우를 볼로 간주하여 볼의 개수를 세어 더하고, 스트라이크의 수를 뺍니다.
    return strikes * 10 + balls  # 스트라이크의 수에 10을 곱하고 볼의 수를 더해서 최종 점수를 계산하고 반환합니다.

def find_matching_number(target_number):
    """
    주어진 target_number에 대한 맞는 숫자를 찾는 함수입니다.
    
    Args:
        target_number (str): 맞추어야 할 대상 숫자.
        
    Returns:
        str: 주어진 조건에 맞는 숫자를 찾았을 경우 해당 숫자를 반환합니다.
    """
    for guess in itertools.permutations('0123456789', 4):
        # '0123456789' 문자열에서 4자리 순열을 생성하고, 모든 가능한 추측을 반복적으로 확인합니다.
        guess_str = ''.join(guess)  # 튜플 형태의 추측을 문자열로 변환합니다.
        score = calculate_score(target_number, guess_str)  # calculate_score 함수를 사용하여 점수를 계산합니다.
        if score == 40:  # 만약 점수가 40점인 경우 (4개의 스트라이크를 모두 맞춘 경우)
            return guess_str  # 해당 추측을 반환하고 함수를 종료합니다.

target_number = '5134'  # 맞추어야 할 대상 숫자를 지정합니다.
matching_number = find_matching_number(target_number)  # find_matching_number 함수를 호출하여 맞는 숫자를 찾습니다.
print(matching_number)  # 찾은 숫자를 출력합니다.
```
