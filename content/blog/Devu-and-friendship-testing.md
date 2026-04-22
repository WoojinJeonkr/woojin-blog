---
external : false
title : "Devu and friendship testing"
tag : [Codechef, Python]
date : 2026-04-22
---

## 1. Problem

해당 문제는 [여기](https://www.codechef.com/practice/course/arrays-strings-sorting/INTARR01/problems/CFRTEST)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys

def solve():
    try:
        # 표준 입력에서 첫 번째 줄(테스트 케이스 개수 T)을 읽어옴
        line = sys.stdin.readline()
        # 읽어온 줄이 비어있으면 함수 종료
        if not line:
            return
        # 문자열을 정수로 변환하여 테스트 케이스 수 저장
        t = int(line.strip())
    except ValueError:
        return

    # 테스트 케이스 수만큼 반복
    for _ in range(t):
        # 친구의 수 n을 입력받음
        n = int(sys.stdin.readline().strip())
        # 친구들이 원하는 날짜들을 리스트로 입력받음
        days = list(map(int, sys.stdin.readline().split()))
        # set으로 중복 날짜를 제거한 뒤 그 개수를 출력
        print(len(set(days)))

# 프로그램의 시작점
if __name__ == "__main__":
    solve()
```
