---
external: false
title: "Baekjoon 1105"
date: 2023-08-10
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/1105)

## 2. 정답 코드 (Python, memory: 31256KB, time: 44ms)

```python
# 함수 정의: 범위 내에서 숫자 8의 개수를 세는 함수
def count_eights_in_range(L, R):
    answer = 0  # 숫자 8의 개수를 저장할 변수 초기화
    if len(L) != len(R):  # L과 R의 길이가 다르면 범위가 제대로 설정되지 않았음을 의미하므로 0을 반환
        return 0
    else:
        for i in range(len(L)):  # L과 R의 각 자리 숫자를 비교하기 위한 루프
            if L[i] == R[i]:  # L과 R의 현재 자리 숫자가 같을 때
                if L[i] == '8':  # 현재 자리 숫자가 '8'이라면
                    answer += 1  # 숫자 8의 개수를 증가
            else:  # L과 R의 현재 자리 숫자가 다를 때
                break  # 루프를 중단하고 범위 내의 숫자 비교를 종료
        return answer  # 숫자 8의 개수를 반환

# 사용자로부터 입력을 받아 L과 R을 설정
L, R = input().split()
# 함수 호출하여 숫자 8의 개수를 계산하고 출력
print(count_eights_in_range(L, R))
```
