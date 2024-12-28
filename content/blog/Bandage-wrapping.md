---
external : false
title : "Bandage wrapping"
tag : [Programmers, Python]
date : 2024-12-28
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/250137)에서 확인하실 수 있습니다.

## 2. Problem solving process

문제를 해결하기 위해 먼저 붕대 감기 기술과 몬스터 공격의 상호작용 방식을 이해하고 이를 코드로 구현할 로직을 설계합니다. 캐릭터의 현재 체력은 붕대 감기를 사용할 때 일정량씩 회복되며, 연속으로 성공할 경우 추가 회복량이 적용됩니다. 그러나 몬스터의 공격이 발생하면 기술이 취소되고 체력이 감소하며, 체력이 0 이하로 떨어지면 캐릭터는 생존하지 못합니다.

전체 로직은 시간 단위로 진행되며, 현재 시간이 몬스터 공격 시간과 일치하면 피해를 적용하고 연속 성공 기록을 초기화합니다. 반대로 공격이 없는 시간에는 붕대 감기를 사용하여 체력을 회복하고, 회복한 체력이 최대 체력을 초과하지 않도록 제한합니다. 특정 시간 동안 기술이 연속으로 성공하면 추가 회복량이 적용되며, 다시 연속 성공 기록을 초기화합니다. 이를 반복하여 모든 공격을 처리한 후 남은 체력을 반환합니다. 만약 처리 중 체력이 0 이하로 떨어지면 즉시 -1을 반환하도록 구현합니다.

## 3. Answer

```python
def solution(bandage, max_health, attacks):
  current_health = max_health  # 현재 체력
  current_time = 1  # 현재 시간
  continuous_success = 0  # 기술 연속 성공 시간 (최대 bandage[0]까지)

  while len(attacks) > 0:
    if current_time == attacks[0][0]:  # 몬스터 공격 시점
      current_health -= attacks[0][1]  # 피해량 적용
      continuous_success = 0  # 연속 성공 초기화
      attacks.pop(0)  # 공격 처리 완료
      if current_health <= 0:  # 체력이 0 이하가 되면 종료
        return -1
    else:
      current_health += bandage[1]  # 초당 회복량 추가
      if current_health > max_health:  # 최대 체력 초과 방지
        current_health = max_health
      continuous_success += 1
      if continuous_success == bandage[0]:  # 기술 t초 연속 성공
        current_health += bandage[2]  # 추가 회복량 적용
        if current_health > max_health:  # 최대 체력 초과 방지
          current_health = max_health
        continuous_success = 0  # 연속 성공 초기화

    current_time += 1  # 시간 증가

  return current_health
```
