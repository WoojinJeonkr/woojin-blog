---
external: false
title: "Baekjoon 3447"
date: 2023-07-26
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/3447)

## 2. 풀이 (Python, memory: 31256KB, time: 113ms)

```python
import sys
import re

# 이 함수는 문자열 'code'를 입력으로 받아와서 정규 표현식 (re)을 사용하여 코드에서 BUG라는 단어를 모두 제거합니다.
# BUG라는 단어가 더 이상 코드에 존재하지 않을 때까지 반복적으로 제거합니다.
def remove_bug(code):
    while True:
        code = re.sub(r'BUG', '', code)
        if 'BUG' not in code:
            break
    return code

# 이 함수는 문자열 리스트인 'code_lines'를 입력으로 받아서 각 줄이 코드를 나타내는 문자열입니다.
# 각 줄마다 'remove_bug' 함수를 호출하여 BUG라는 단어를 제거한 코드를 표준 출력에 출력합니다.
def remove_bug_lines(code_lines):
    for code in code_lines:
        remove_bug_code = remove_bug(code)
        print(remove_bug_code, end='')

# 메인 부분은 스크립트가 직접 실행되었는지를 확인하고, 다른 모듈로 가져오지 않았을 때 실행됩니다.
# 표준 입력에서 모든 줄을 읽어와서 'code_lines'에 저장합니다.
# 그런 다음 'remove_bug_lines' 함수를 호출한 결과를 출력합니다.
if __name__ == "__main__":
    code_lines = sys.stdin.readlines()
    remove_bug_lines(code_lines)
```
