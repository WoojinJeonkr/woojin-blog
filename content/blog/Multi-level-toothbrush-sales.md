---
external : false
title : "Multi level toothbrush sales"
tag : [Programmers, Python]
date : 2025-08-09
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/77486)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(enroll, referral, seller, amount):
    # 1. 데이터 구조 초기화
    # 각 판매원의 최종 이익금을 저장할 딕셔너리
    profit = {name: 0 for name in enroll}
    
    # 각 판매원의 추천인을 저장할 딕셔너리
    # key: 판매원 이름, value: 추천인 이름 ("-"는 center로 간주)
    referral_map = {}
    for i in range(len(enroll)):
        referral_map[enroll[i]] = referral[i]

    # 2. 판매 기록 처리 및 3. 이익 분배 시뮬레이션
    for i in range(len(seller)):
        current_seller = seller[i]
        current_profit = amount[i] * 100  # 칫솔 판매 이익

        while True:
            # 10%를 계산하여 상위 추천인에게 줄 금액
            share_to_referrer = int(current_profit * 0.1)
            
            # 현재 판매원이 가질 금액
            profit_for_self = current_profit - share_to_referrer
            
            # 현재 판매원의 이익에 합산
            profit[current_seller] += profit_for_self

            # 다음 상위 추천인을 찾기
            referrer = referral_map[current_seller]

            # 상위 추천인이 없거나 (센터) 또는 분배할 금액이 1원 미만이면 종료
            if referrer == "-" or share_to_referrer < 1:
                break
            
            # 다음 판매원으로 이동 (상위 추천인)
            current_seller = referrer
            # 다음 이익금 (상위 추천인에게 넘어간 금액)
            current_profit = share_to_referrer
    
    # 4. 결과 반환
    answer = []
    for name in enroll:
        answer.append(profit[name])
        
    return answer
```
