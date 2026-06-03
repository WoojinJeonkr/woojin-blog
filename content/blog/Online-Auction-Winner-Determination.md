---
external : false
title : "Online Auction Winner Determination"
tag : [Python]
date : 2026-06-03
---

## 1. Problem

한 온라인 경매 사이트에서는 여러 참가자가 물품에 입찰한다.

입찰은 시간 순서대로 기록되며 각 기록은 다음과 같다.

```text
참가자ID 입찰금액
```

경매 규칙은 다음과 같다.

1. 가장 높은 금액을 입찰한 참가자가 낙찰된다.
2. 최고 입찰 금액이 여러 명에게서 동일하게 나온 경우,
   해당 금액을 가장 먼저 입찰한 참가자가 낙찰된다.
3. 낙찰 금액은 최고 입찰 금액이다.

경매 기록이 주어질 때 낙찰자의 ID와 낙찰 금액을 출력하시오.

## 2. Input

첫째 줄에 입찰 기록의 개수 N이 주어진다.

```text
N
```

이후 N개의 줄에

```text
참가자ID 입찰금액
```

형태의 입찰 기록이 시간 순서대로 주어진다.

## 3. Limit

- 1 ≤ N ≤ 200,000
- 참가자 ID는 영문 대소문자와 숫자로 구성된다.
- 1 ≤ 입찰금액 ≤ 1,000,000,000

## 4. Output

낙찰자의 ID와 낙찰 금액을 공백으로 구분하여 출력한다.

## 5. Input Example

```text
8
alice 500
bob 700
charlie 700
alice 900
bob 850
david 900
emma 750
frank 600
```

## 6. Output Example

```text
alice 900
```

## 7. Example Explanation

입찰 기록은 시간 순서대로 처리된다.

최고 입찰 금액은

```text
900
```

이다.

해당 금액을 입찰한 참가자는

```text
alice
david
```

두 명이다.

규칙에 따라 최고 금액을 가장 먼저 입찰한 참가자가 낙찰되므로

```text
alice
```

가 낙찰된다.

따라서 정답은

```text
alice 900
```

이다.

이 문제는 입력을 한 번 순회하면서
현재까지의 최고 입찰 금액과 최초 입찰자를 관리하는
구현(Implementation) 문제이다.

## 8. Answer

```py
import sys

input = sys.stdin.readline

n = int(input())

max_bid = -1
winner = ""

for _ in range(n):
    bidder, amount = input().split()
    amount = int(amount)

    if amount > max_bid:
        max_bid = amount
        winner = bidder

print(winner, max_bid)
```
