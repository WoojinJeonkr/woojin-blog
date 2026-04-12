---
external : false
title : "Cantor set"
tag : [Baekjoon, Python]
date : 2026-04-12
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/4779)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys

def cantor(n):
    # n이 0이면 가장 작은 단위이므로 '-' 반환
    if n == 0:
        return "-"

    # 이전 단계 결과 재귀 호출 (좌/우에 동일하게 사용됨)
    prev = cantor(n - 1)

    # 가운데를 비울 공백 생성 (길이: 3^(n-1))
    space = " " * (3 ** (n - 1))

    # [왼쪽] + [공백] + [오른쪽] 형태로 문자열 구성
    return prev + space + prev


# EOF(파일 끝)까지 여러 줄 입력 처리
for line in sys.stdin:
    # 입력값 정수 변환
    n = int(line.strip())

    # 해당 N에 대한 칸토어 집합 근사 출력
    print(cantor(n))
```
