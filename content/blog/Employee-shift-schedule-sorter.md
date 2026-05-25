---
external : false
title : "Employee shift schedule sorter"
tag : [Python]
date : 2026-05-25
---

## 1. Problem

한 병원에서는 직원들의 근무표를 시간 순서대로 정렬하여 관리한다.

각 직원의 근무 정보는 다음과 같이 주어진다.

- 직원 이름
- 근무 시작 시간 (`HH:MM` 형식)

관리자는 근무 시작 시간이 빠른 순서대로 근무표를 정렬하려고 한다.

만약 시작 시간이 같다면
직원 이름을 사전순으로 정렬한다.

N명의 직원 정보가 주어질 때,
정렬된 근무표를 출력하는 프로그램을 작성하시오.

## 3. Input

- 첫째 줄에 직원 수 N이 주어진다.
- 다음 N개의 줄에는 직원 이름과 근무 시작 시간이 공백으로 구분되어 주어진다.

## 5. Limit

- 1 ≤ N ≤ 1000
- 직원 이름 길이 ≤ 20
- 시간은 항상 올바른 `HH:MM` 형식
- 직원 이름은 알파벳 대소문자로만 구성

## 6. Output

근무 시작 시간이 빠른 순서대로 직원 정보를 출력한다.

형식은 다음과 같다.

```text
이름 HH:MM
```

## 7. Input Example

```text
5
Alice 09:30
Bob 08:45
Charlie 09:30
David 07:50
Emma 08:45
```

## 8. Output Example

```text
David 07:50
Bob 08:45
Emma 08:45
Alice 09:30
Charlie 09:30
```

## 9. Example Explanation

각 근무 시간을 분 단위로 변환하면:

- Alice → 570분
- Bob → 525분
- Charlie → 570분
- David → 470분
- Emma → 525분

근무 시작 시간이 빠른 순서대로 정렬하면:

1. David (470분)
2. Bob (525분)
3. Emma (525분)
4. Alice (570분)
5. Charlie (570분)

같은 시간인 경우 이름을 사전순으로 정렬한다.

## 10. Answer

```py
import sys

input = sys.stdin.readline

# 직원 수 입력
n = int(input())

employees = []

# 직원 정보 입력
for _ in range(n):
    name, time_str = input().split()

    # 시간 분 단위 변환
    h, m = map(int, time_str.split(':'))
    total_minutes = h * 60 + m

    employees.append((total_minutes, name, time_str))

# 근무 시간 -> 이름 순 정렬
employees.sort(key=lambda x: (x[0], x[1]))

# 결과 출력
for _, name, time_str in employees:
    print(name, time_str)
```
