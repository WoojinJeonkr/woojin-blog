---
external: false
title: "Baekjoon 4593"
date: 2023-08-24
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/4593)

## 2. 정답 코드 (Python, memory: 31256KB, time: 44ms)

```python
# 손동작에 기반하여 승자를 결정하는 함수
def determine_winner(player1_gestures, player2_gestures):
    wins_player1 = 0
    wins_player2 = 0
    
    # 각 턴에 대한 손동작을 비교합니다
    for gesture1, gesture2 in zip(player1_gestures, player2_gestures):
        if gesture1 == gesture2:
            continue  # 비겼을 경우, 다음 턴으로 이동
        
        # 손동작을 기반으로 승자를 확인합니다
        if (gesture1 == 'R' and gesture2 == 'S') or (gesture1 == 'P' and gesture2 == 'R') or (gesture1 == 'S' and gesture2 == 'P'):
            wins_player1 += 1  # 플레이어 1 승리
        else:
            wins_player2 += 1  # 플레이어 2 승리
    
    return wins_player1, wins_player2

# 입력을 읽고 각 손동작 쌍을 처리합니다
while True:
    player1_gestures = input().strip()
    player2_gestures = input().strip()
    
    if player1_gestures == 'E' and player2_gestures == 'E':
        break  # 입력의 끝
        
    wins_player1, wins_player2 = determine_winner(player1_gestures, player2_gestures)
    
    # 각 손동작 쌍에 대한 결과를 출력합니다
    print("P1:", wins_player1)
    print("P2:", wins_player2)
```
