---
external : false
title : "Wallet transaction optimizer"
tag : [Python]
date : 2026-05-29
---

## 1. Problem

전자지갑 서비스에서는 사용자 간 송금 기록을 분석하여
최종 정산이 필요한 최소 거래 횟수를 계산하려고 한다.

각 거래는 다음 형식으로 주어진다.

```text
보낸사람 받은사람 금액
```

예시:

```text
alice bob 5000
bob charlie 2000
david alice 3000
```

거래가 모두 끝난 뒤,
각 사용자의 최종 잔액은 다음 기준으로 계산된다.

- 돈을 보낸 경우: 잔액 감소
- 돈을 받은 경우: 잔액 증가

운영팀은 모든 사용자의 최종 잔액을 기준으로
추가 정산 거래를 수행하려고 한다.

정산 거래는 다음 규칙을 따른다.

- 잔액이 음수인 사용자는 돈을 보내야 한다.
- 잔액이 양수인 사용자는 돈을 받아야 한다.
- 한 번의 거래는 한 명에게만 송금 가능하다.

최종적으로 모든 사용자의 잔액을 0으로 만들기 위한
최소 정산 거래 횟수를 구하시오.

## 2. Input

- 첫째 줄에 거래 개수 N이 주어진다.
- 다음 N개의 줄에 거래 정보가 주어진다.

## 3. Limit

- 1 ≤ N ≤ 100000
- 사용자 이름 길이 ≤ 20
- 1 ≤ 금액 ≤ 1000000000
- 사용자 수 ≤ 100000

## 4. Output

모든 사용자의 잔액을 0으로 만들기 위한
최소 정산 거래 횟수를 출력한다.

## 5. Input Example

```text
6
alice bob 5000
bob charlie 2000
david alice 3000
charlie emma 1000
emma bob 4000
frank david 2000
```

## 6. Output Example

```text
4
```

## 7. Example Explanation

각 사용자의 최종 잔액은 다음과 같다.

```text
alice   -2000
bob      7000
charlie  1000
david    1000
emma    -3000
frank   -2000
```

음수 잔액 사용자:

- alice: 2000 송금 필요
- emma: 3000 송금 필요
- frank: 2000 송금 필요

양수 잔액 사용자:

- bob: 7000 수령 필요
- charlie: 1000 수령 필요
- david: 1000 수령 필요

그리디 방식으로 가장 앞의 송금자와 수령자를 매칭하면 된다.

가능한 정산 예시는 다음과 같다.

```text
alice -> bob     2000
emma  -> bob     3000
frank -> charlie 1000
frank -> david   1000
```

총 4회의 거래가 필요하다.

## 8. Answer

```py
import sys
from collections import defaultdict

input = sys.stdin.readline

# 입력
n = int(input())

balance = defaultdict(int)

# 최종 잔액 계산
for _ in range(n):
    sender, receiver, amount = input().split()
    amount = int(amount)

    balance[sender] -= amount
    balance[receiver] += amount

# 송금자(음수), 수령자(양수) 분리
debtors = []
creditors = []

for user, money in balance.items():
    if money < 0:
        debtors.append([-money, user])   # 보내야 하는 금액
    elif money > 0:
        creditors.append([money, user])  # 받아야 하는 금액

# 투 포인터 그리디
i = 0
j = 0
transaction_count = 0

while i < len(debtors) and j < len(creditors):
    debt_money = debtors[i][0]
    credit_money = creditors[j][0]

    # 가능한 만큼 정산
    transfer = min(debt_money, credit_money)

    debtors[i][0] -= transfer
    creditors[j][0] -= transfer

    transaction_count += 1

    # 모두 정산된 경우 다음 사용자로 이동
    if debtors[i][0] == 0:
        i += 1

    if creditors[j][0] == 0:
        j += 1

# 출력
print(transaction_count)
```
