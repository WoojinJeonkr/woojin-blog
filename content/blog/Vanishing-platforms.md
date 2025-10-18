---
external : false
title : "Vanishing platforms"
tag : [Programmers, Python]
date : 2025-10-18
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/92345?language=python3)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(board, aloc, bloc):
    
    # 캐릭터가 현재 위치(loc)에서 이동 가능한 다음 위치들을 반환하는 함수
    def get_next_positions(b, loc):
        dRow, dCol = [0, 0, 1, -1], [1, -1, 0, 0] # 상하좌우
        R, C = len(b), len(b[0])
        next_positions = []
        for d in range(4):
            nr, nc = loc[0] + dRow[d], loc[1] + dCol[d]
            # 보드 범위 내이고 발판이 있는(1) 곳으로만 이동 가능
            if 0 <= nr < R and 0 <= nc < C and b[nr][nc] == 1:
                next_positions.append((nr, nc))
        return next_positions

    # 깊이 우선 탐색(DFS)을 이용한 Minimax 알고리즘 구현
    # 반환값: (A가 이기는지 여부, 현재까지 총 이동한 횟수)
    def search(b, aloc, bloc, turn):
        
        # 현재 턴 플레이어의 이동 가능 위치 확인
        if turn % 2 == 0: # A의 턴 (짝수)
            next_positions = get_next_positions(b, aloc)
        else: # B의 턴 (홀수)
            next_positions = get_next_positions(b, bloc)
        
        # 1. 기저 사례: 현재 턴 플레이어 이동 불가 -> 현재 플레이어 패배
        if not next_positions:
            # A 턴에 이동 불가 -> B 승리(False), B 턴에 이동 불가 -> A 승리(True)
            return turn % 2 != 0, turn 
        
        # 2. 기저 사례: aloc == bloc 인 상태에서 현재 턴 플레이어가 이동 가능하면 -> 현재 플레이어 승리
        if aloc == bloc:
            # A 턴이면 A 승리(True), B 턴이면 B 승리(False). 이동 횟수 1 증가.
            return turn % 2 == 0, turn + 1

        win, lose = [], [] # 승리하는 경로의 이동 횟수, 패배하는 경로의 이동 횟수
        
        if turn % 2 == 0:  # A의 턴
            # 이동 전 A의 위치 발판 제거 (캐릭터가 이동하면 발판 사라짐)
            b[aloc[0]][aloc[1]] = 0 
            
            for nr, nc in next_positions:
                is_a_win, cnt = search(b, [nr, nc], bloc, turn + 1)
                
                if is_a_win: # A가 승리하는 경로
                    win.append(cnt)
                else: # A가 패배하는 경로
                    lose.append(cnt)
            
            b[aloc[0]][aloc[1]] = 1 # 백트래킹 (원래 위치 발판 복원)
            
        else:  # B의 턴
            # 이동 전 B의 위치 발판 제거
            b[bloc[0]][bloc[1]] = 0 
            
            for nr, nc in next_positions:
                is_a_win, cnt = search(b, aloc, [nr, nc], turn + 1)
                
                if not is_a_win: # B가 승리 (A가 패배)
                    win.append(cnt)
                else: # B가 패배 (A가 승리)
                    lose.append(cnt)
            
            b[bloc[0]][bloc[1]] = 1 # 백트래킹

        # 4. 최적의 플레이 선택 (Minimax 원칙)
        if win:
            # 현재 턴 플레이어가 이길 수 있는 경우: 최대한 빨리 승리 (최소 이동 횟수 선택)
            # A 턴이면 A 승리, B 턴이면 B 승리 (A의 관점에서 승패 반환)
            return turn % 2 == 0, min(win)
        else:
            # 현재 턴 플레이어가 질 수밖에 없는 경우: 최대한 오래 버티기 (최대 이동 횟수 선택)
            return turn % 2 != 0, max(lose)

    # turn=0 (A의 턴)부터 게임 시작
    winner, answer = search(board, aloc, bloc, 0)
    return answer
```
