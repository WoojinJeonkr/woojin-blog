---
external : false
title : "Election Audit Log Verification"
tag : [Python]
date : 2026-06-05
---

## 1. Problem

한 지역의 전자 개표 시스템은 각 투표함의 개표 결과를 순서대로 기록한다.

선거 관리 시스템은 부정 개표 여부를 감시하기 위해 다음 규칙을 사용한다.

1. 각 투표함(ID)은 정확히 한 번만 개표되어야 한다.
2. 모든 후보의 득표수는 0 이상이어야 한다.
3. 특정 투표함의 총 득표수는 해당 투표함의 유권자 수를 초과할 수 없다.

개표 로그가 주어질 때, 규칙을 처음 위반한 로그 번호를 출력하시오.

모든 로그가 규칙을 만족하면

```text
VALID
```

를 출력한다.

## 2. Input

첫째 줄에 개표 로그의 수 N이 주어진다.

```text
N
```

이후 N개의 줄에 다음 정보가 주어진다.

```text
ballotBoxId voters candidateA candidateB candidateC
```

- ballotBoxId : 투표함 ID
- voters : 해당 투표함의 유권자 수
- candidateA, candidateB, candidateC : 각 후보의 득표수

## 3. Limit

- 1 ≤ N ≤ 100000
- 1 ≤ voters ≤ 1000000
- 0 ≤ candidateA, candidateB, candidateC ≤ 1000000
- ballotBoxId는 길이 1 ~ 20의 영문/숫자 문자열

## 4. Output

규칙을 처음 위반한 로그 번호를 출력한다.

모든 로그가 유효하면

```text
VALID
```

를 출력한다.

## 5. Input Example

```text
5
A001 100 30 25 20
A002 80 20 15 10
A003 120 40 30 20
A002 90 25 20 15
A004 150 50 40 30
```

## 6. Output Example

```text
4
```

## 7. Example Explanation

4번째 로그의 투표함 ID는

```text
A002
```

이다.

하지만

```text
A002
```

는 이미 2번째 로그에서 개표된 적이 있으므로 규칙 1을 위반한다.

따라서 최초 위반 로그 번호는

```text
4
```

이다.

이 문제는 개표 기록의 유효성을 검사하는 구현(Implementation) 및 해시(Set) 문제이다.

## 8. Answer

```py
import sys

input = sys.stdin.readline

n = int(input())

used_boxes = set()

for log_no in range(1, n + 1):
    box_id, voters, a, b, c = input().split()

    voters = int(voters)
    a = int(a)
    b = int(b)
    c = int(c)

    if box_id in used_boxes:
        print(log_no)
        sys.exit(0)

    if a < 0 or b < 0 or c < 0:
        print(log_no)
        sys.exit(0)

    if a + b + c > voters:
        print(log_no)
        sys.exit(0)

    used_boxes.add(box_id)

print("VALID")
```
