---
external: false
title: "Baekjoon 14405"
date: 2023-12-10
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/14405)

## 2. 문제 해석

해당 문제는 주어진 문자열에서 "pi", "ka", "chu"를 순서대로 찾아 제거하여 피카츄의 발음 가능 여부를 판단하는 문제입니다.
while문과 for문을 이용하여 문자열을 순회하며 "pi", "ka", "chu"를 찾아서 제거하는 방식을 통해 발음 가능한 단어를 찾으면 해당 부분을 제거하고, 모든 단어를 찾으면 "YES", 아니면 "NO" 반환하도록 코드를 작성하면 됩니다.

## 3. 정답 코드 (python3, memory: 31120KB, time: 40ms)

```python
def is_pikachu(s):
    # 피카츄의 발음 가능한 단어들
    pikachu_words = ["pi", "ka", "chu"]
    
    # 문자열 S를 모두 소진할 때까지 반복
    while s:
        found = False
        # 각 발음 가능한 단어들을 확인
        for word in pikachu_words:
            # 현재 문자열이 해당 단어로 시작하는지 확인
            if s.startswith(word):
                # 해당 단어를 찾았다면 문자열에서 해당 부분을 제거하고 반복
                s = s[len(word):]
                found = True
                break
        # 어떤 단어와도 맞지 않는 경우 "NO" 반환
        if not found:
            return "NO"
    
    # 모든 발음 가능한 단어를 찾았다면 "YES" 반환
    return "YES"

# 입력 받기
s = input()

# 결과 출력
result = is_pikachu(s)
print(result)
```
