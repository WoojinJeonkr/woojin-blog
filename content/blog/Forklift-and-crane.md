---
external : false
title : "Forklift and crane"
tag : [Programmers, Python]
date : 2025-09-06
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/388353)에서 확인하실 수 있습니다.

## 2. Answer

```py
from collections import deque

def solution(storage, requests):
    # '0'으로 패딩된 외부 공간과 연결된 컨테이너들을 제거하고,
    # 지게차가 접근 가능한 '1' 컨테이너를 '0'으로 변경하는 함수
    def clear_and_update():
        # 접근 가능 여부를 체크하는 2D 배열 초기화
        is_accessible = [[False] * num_cols for _ in range(num_rows)]
        # BFS를 위한 큐 초기화. (0, 0)은 창고 외부를 나타냄.
        queue = deque([(0, 0)])
        is_accessible[0][0] = True

        while queue:
            y, x = queue.popleft()
            # 상하좌우 4방향 탐색
            for i in range(4):
                ny, nx = y + dy[i], x + dx[i]
                
                # 창고 범위 내에 있고 아직 방문하지 않은 경우
                if 0 <= ny < num_rows and 0 <= nx < num_cols and not is_accessible[ny][nx]:
                    # 빈 공간('0')이면 접근 가능으로 표시하고 큐에 추가
                    if warehouse[ny][nx] == '0':
                        is_accessible[ny][nx] = True
                        queue.append((ny, nx))
                    # '1' 컨테이너(크레인으로 제거된 컨테이너)이면 접근 가능으로 표시하고
                    # 큐에 추가한 뒤 '0'으로 변경
                    elif warehouse[ny][nx] == '1':
                        is_accessible[ny][nx] = True
                        queue.append((ny, nx))
                        warehouse[ny][nx] = '0'

    # 상하좌우 이동을 위한 방향 벡터
    dy = [0, 1, 0, -1]
    dx = [1, 0, -1, 0]

    # 실제 storage 크기에 맞춰 행과 열을 계산 (패딩 포함)
    n_storage_rows = len(storage)
    n_storage_cols = len(storage[0])
    num_rows = n_storage_rows + 2
    num_cols = n_storage_cols + 2
    
    # '0'으로 둘러싸인 패딩된 창고 그리드 생성
    warehouse = [['0'] * num_cols for _ in range(num_rows)]
    
    # 실제 컨테이너 정보를 패딩된 창고 그리드에 복사
    for i in range(n_storage_rows):
        for j in range(n_storage_cols):
            warehouse[i + 1][j + 1] = storage[i][j]

    # 요청 목록을 순서대로 처리
    for request in requests:
        container_type = request[0]
        
        # 지게차 출고 요청 (요청 문자열 길이가 1)
        if len(request) == 1:
            containers_to_remove = []
            # 실제 컨테이너가 있는 영역만 순회
            for r in range(1, num_rows - 1):
                for c in range(1, num_cols - 1):
                    # 요청된 컨테이너 유형을 찾음
                    if warehouse[r][c] == container_type:
                        # 상하좌우를 탐색하여 빈 공간('0')에 인접한지 확인
                        for k in range(4):
                            ny, nx = r + dy[k], c + dx[k]
                            if 0 <= ny < num_rows and 0 <= nx < num_cols and warehouse[ny][nx] == '0':
                                # 인접하면 제거 목록에 추가
                                containers_to_remove.append((r, c))
                                break
            # 목록에 있는 모든 컨테이너를 제거('0'으로 변경)
            for r, c in containers_to_remove:
                warehouse[r][c] = '0'
            # 제거 후 빈 공간과 인접한 컨테이너 상태를 업데이트
            clear_and_update()
        
        # 크레인 출고 요청 (요청 문자열 길이가 2)
        else:
            # 요청된 모든 컨테이너를 '1'(크레인으로 제거된 상태)로 변경
            for r in range(1, num_rows - 1):
                for c in range(1, num_cols - 1):
                    if warehouse[r][c] == container_type:
                        warehouse[r][c] = '1'
            # '1' 컨테이너 제거 후 빈 공간과 인접한 컨테이너 상태를 업데이트
            clear_and_update()
            
    # 모든 요청 처리 후 남은 컨테이너 수 계산
    remaining_containers = 0
    for r in range(1, num_rows - 1):
        for c in range(1, num_cols - 1):
            # '0'과 '1'이 아닌 모든 셀은 남은 컨테이너
            if warehouse[r][c] != '0' and warehouse[r][c] != '1':
                remaining_containers += 1
                                
    return remaining_containers
```
