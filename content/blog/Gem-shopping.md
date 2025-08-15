---
external : false
title : "Gem shopping"
tag : [Programmers, Python]
date : 2025-08-15
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/67258)에서 확인하실 수 있습니다.

## 2. Answer

```py
from collections import defaultdict

def solution(gems):
    total_types = len(set(gems))  # 전체 보석 종류 개수
    n = len(gems)  # 보석 진열대 길이
    
    start, end = 0, 0  # 투 포인터 시작 위치
    gem_count = defaultdict(int)  # 현재 구간 내 보석 개수 저장
    
    answer = [1, n]  # 최소 구간 결과 (기본값: 전체 구간)
    gem_count[gems[0]] = 1  # 첫 번째 보석 개수 추가
    
    while start < n and end < n:
        # 현재 구간에 모든 보석 종류가 포함된 경우
        if len(gem_count) == total_types:
            # 더 짧은 구간이면 결과 갱신
            if (end - start) < (answer[1] - answer[0]):
                answer = [start + 1, end + 1]  # 1부터 시작하는 인덱스로 변환
            # 왼쪽 포인터 이동 (구간 축소)
            gem_count[gems[start]] -= 1
            if gem_count[gems[start]] == 0:
                del gem_count[gems[start]]
            start += 1
        else:
            # 아직 모든 종류 포함 안 됨 → 오른쪽 포인터 이동 (구간 확장)
            end += 1
            if end < n:
                gem_count[gems[end]] += 1
    
    return answer
```
