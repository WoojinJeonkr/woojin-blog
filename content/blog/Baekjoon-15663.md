---
external: false
title: "Baekjoon 15663"
date: 2023-07-15
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/15663)

## 2. 풀이 (Python, memory: 31256KB, time: 96ms)

```python
n, m = map(int, input().split())  # n과 m을 입력받음
nums = sorted(list(map(int, input().split())))  # 숫자들을 입력받고 정렬함
temp = []  # 조합을 저장할 임시 리스트

def dfs(visited):
    if len(temp) == m:  # 조합의 길이가 m일 때 조합 출력
        print(*temp)
        return
    remember_me = 0  # 이전에 선택한 숫자를 기억하기 위한 변수
    for i in range(n):  # 모든 숫자에 대해 반복
        if not visited[i] and remember_me != nums[i]:  # 아직 방문하지 않았고 중복되지 않는 경우
            visited[i] = True  # 숫자를 방문했음을 표시
            temp.append(nums[i])  # 숫자를 조합에 추가
            remember_me = nums[i]  # 이전에 선택한 숫자 갱신
            dfs(visited)  # 재귀적으로 다음 숫자 선택
            visited[i] = False  # 숫자 방문 상태 복원
            temp.pop()  # 조합에서 숫자 제거

dfs([False] * n)  # dfs 함수를 호출하여 조합 생성 시작
```
