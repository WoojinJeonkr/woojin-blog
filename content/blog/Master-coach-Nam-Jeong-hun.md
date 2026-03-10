---
external : false
title : "Master coach Nam Jeong hun"
tag : [Baekjoon, Python]
date : 2026-03-10
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/15734)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 왼발잡이(L), 오른발잡이(R), 양발잡이(A) 입력
L, R, A = map(int, input().split())

# 왼발과 오른발의 차이 계산
diff = abs(L - R)

# 양발잡이로 차이를 모두 채울 수 있는 경우
if A >= diff:
    # 차이를 채우고 남은 양발잡이 수
    A -= diff

    # 남은 양발잡이는 2명씩 짝을 지어 왼발/오른발에 배치 가능
    # max(L, R)에 추가한 뒤 전체 인원은 항상 짝수이므로 *2
    result = (max(L, R) + A // 2) * 2
else:
    # 양발잡이가 부족해서 차이를 모두 채울 수 없는 경우
    # 작은 쪽(min(L, R))에 양발잡이를 모두 더해 균형을 맞춤
    result = (min(L, R) + A) * 2

# 최대 잔류 인원 출력
print(result)
```
