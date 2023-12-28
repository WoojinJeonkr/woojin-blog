---
external: false
title: "Baekjoon 8892"
date: 2023-10-31
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/8892)

## 2. 정답 코드 (Python, memory: 31120KB, time: 416ms)

```python
# 테스트 케이스의 수를 입력받기
T = int(input())

# 문자열이 회문인지 확인하는 함수
def is_palindrome(s):
    return s == s[::-1]

# 각 테스트 케이스를 반복 처리
for _ in range(T):
    # 노트에 포함된 단어의 수 입력받기
    k = int(input())
    
    # 단어들을 리스트로 입력받기
    words = [input().strip() for _ in range(k)]
    
    # 회문이 발견되었는지 확인하는 플래그
    found_palindrome = False
    
    # 모든 단어 쌍에 대해 반복
    for i in range(k):
        for j in range(k):
            # 두 인덱스가 같으면 건너뛰기
            if i == j:
                continue
            
            # 두 단어를 연결하기
            palindrome_candidate = words[i] + words[j]
            
            # 연결된 문자열이 회문인지 확인
            if is_palindrome(palindrome_candidate):
                print(palindrome_candidate)
                found_palindrome = True
                break
        
        # 회문이 발견되면 반복문 종료
        if found_palindrome:
            break
    else:
        # 회문을 찾지 못하면 0 출력
        print(0)
```
