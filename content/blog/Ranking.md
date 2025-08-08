---
external : false
title : "Ranking"
tag : [Programmers, Python]
date : 2025-08-08
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120882)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(score):
    # 각 학생의 평균 점수와 원래 인덱스를 저장할 리스트
    # 예: [(75.0, 0), (70.0, 1), (55.0, 2), (65.0, 3)]
    avg_scores_with_index = []
    for i, s in enumerate(score):
        avg = (s[0] + s[1]) / 2
        avg_scores_with_index.append((avg, i))

    # 평균 점수를 기준으로 내림차순 정렬
    # 평균 점수가 같으면 원래 인덱스를 기준으로 오름차순 정렬
    avg_scores_with_index.sort(key=lambda x: (-x[0], x[1]))

    # 최종 등수를 저장할 리스트
    answer = [0] * len(score)

    # 등수 계산 및 저장
    rank = 1
    # 첫 번째 학생의 등수는 무조건 1등
    answer[avg_scores_with_index[0][1]] = rank

    for i in range(1, len(avg_scores_with_index)):
        # 현재 학생의 평균 점수
        current_avg = avg_scores_with_index[i][0]
        # 이전 학생의 평균 점수
        prev_avg = avg_scores_with_index[i-1][0]

        # 이전 학생과 현재 학생의 평균 점수가 같으면 같은 등수 부여
        if current_avg == prev_avg:
            answer[avg_scores_with_index[i][1]] = rank
        else:
            # 평균 점수가 다르면 현재 인덱스 + 1을 등수로 부여
            # i는 0부터 시작하므로, i+1이 현재까지 처리된 학생 수에 해당
            rank = i + 1
            answer[avg_scores_with_index[i][1]] = rank
            
    return answer
```
