---
external : false
title : "Dangerous dive"
tag : [Baekjoon, Python]
date : 2026-01-23
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/13627)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys

# 프로그램의 시작점을 정의
def main():
    # 빠른 입력을 위해 sys.stdin.readline 사용
    input = sys.stdin.readline
    
    # 전체 자원봉사자 수 N과 돌아온 자원봉사자 수 R 입력
    N, R = map(int, input().split())
    
    # 돌아온 자원봉사자들의 번호를 리스트로 입력
    returned = list(map(int, input().split()))
    
    # 탐색 시간을 줄이기 위해 집합(set)으로 변환
    returned_set = set(returned)
    
    # 돌아오지 못한 자원봉사자 번호를 저장할 리스트
    not_returned = []
    
    # 1번부터 N번까지 모든 자원봉사자를 확인
    for i in range(1, N + 1):
        # 돌아온 명단에 없으면 돌아오지 못한 자원봉사자
        if i not in returned_set:
            not_returned.append(i)
    
    # 모두 돌아왔다면 '*' 출력
    if not not_returned:
        print("*")
    else:
        # 각 번호 뒤에 공백이 포함되도록 출력
        print(" ".join(map(str, not_returned)) + " ")

# main 함수 실행
if __name__ == "__main__":
    main()
```
