---
external: false
title: "Baekjoon 16173"
date: 2023-10-08
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/3028)

## 2. 정답 코드 (Python, memory: 34160KB, time: 72ms)

```python
from collections import deque

# 주어진 위치 (y, x)가 그리드 크기 N 내에서 유효한지 확인하는 함수
def is_valid(y, x, N):
    return 0 <= y < N and 0 <= x < N

# 그리드 끝에 도달할 수 있는지 확인하는 함수
def can_reach_end(N, li):
    # 가능한 이동 방향: 아래쪽과 오른쪽
    directions = [(1, 0), (0, 1)]
    # 시작 위치 (0, 0)과 이동 거리 (li[0][0])로 큐 초기화
    queue = deque([(0, 0, li[0][0])])

    # 가능한 경로를 탐색하기 위한 너비 우선 탐색
    while queue:
        y, x, d = queue.popleft()
        # 아래쪽과 오른쪽 방향 확인
        for dy, dx in directions:
            Y, X = y + d * dy, x + d * dx
            # 새로운 위치가 유효하고 0이 아닌지 확인
            if is_valid(Y, X, N) and d != 0:
                # 끝에 도달하면 True 반환
                if Y == X == N - 1:
                    return True
                # 새로운 위치를 큐에 추가하고 이동 거리를 업데이트
                queue.append((Y, X, li[Y][X]))
    # 끝까지 도달할 수 있는 경로가 없으면 False 반환
    return False

# 사용자 입력을 받고, 그리드를 생성하고, 끝에 도달 가능한지 확인하는 메인 함수
def main():
    # 사용자 입력으로부터 그리드 크기를 가져옴
    N = int(input())
    # 사용자 입력을 기반으로 그리드 생성
    lst = [list(map(int, input().split())) for _ in range(N)]
    # 끝에 도달 가능한지 확인하고 결과를 출력
    result = can_reach_end(N, lst)
    print("HaruHaru" if result else "Hing")

# 스크립트가 직접 실행되는지 확인
if __name__ == "__main__":
    # 프로그램을 실행하기 위해 메인 함수 호출
    main()
```
