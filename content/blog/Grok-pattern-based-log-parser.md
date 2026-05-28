---
external : false
title : "Grok pattern based log parser"
tag : [Python]
date : 2026-05-27
---

## 1. Problem

운영팀은 서버 로그를 분석하기 위해 Grok 패턴 기반 로그 파서를 구현하려고 한다.

로그는 다음 형식 중 하나로 들어온다.

```text
[LEVEL] YYYY-MM-DD HH:MM:SS USER ACTION
```

예시:

```text
[INFO] 2026-05-27 10:15:30 alice LOGIN
[ERROR] 2026-05-27 10:15:35 bob FAIL
```

각 로그는 다음 정보를 가진다.

- 로그 레벨
- 날짜
- 시간
- 사용자 이름
- 액션

관리자는 특정 로그 레벨만 필터링하여
사용자별 액션 발생 횟수를 집계하려고 한다.

Grok 스타일 패턴은 아래와 같이 고정된다.

```text
\[%{LEVEL}\] %{DATE} %{TIME} %{USER} %{ACTION}
```

각 로그를 파싱한 뒤,
지정된 로그 레벨과 일치하는 로그만 사용자별로 카운트하여 출력하시오.

출력은 다음 기준으로 정렬한다.

1. 액션 횟수 내림차순
2. 사용자 이름 사전순

## 2. Input

- 첫째 줄에 로그 개수 N과 필터링할 로그 레벨이 주어진다.
- 다음 N개의 줄에 로그 문자열이 주어진다.

## 3. Limit

- 1 ≤ N ≤ 100000
- 로그 문자열 길이 ≤ 100
- 로그 레벨은 대문자 문자열
- 사용자 이름 길이 ≤ 20
- 액션 길이 ≤ 20

## 4. Output

조건에 맞는 사용자와 액션 횟수를 출력한다.

형식은 다음과 같다.

```text
사용자이름 횟수
```

## 5. Input Example

```text
7 ERROR
[INFO] 2026-05-27 10:15:30 alice LOGIN
[ERROR] 2026-05-27 10:15:35 bob FAIL
[ERROR] 2026-05-27 10:15:40 alice FAIL
[WARN] 2026-05-27 10:15:45 charlie RETRY
[ERROR] 2026-05-27 10:15:50 bob FAIL
[INFO] 2026-05-27 10:16:00 alice LOGOUT
[ERROR] 2026-05-27 10:16:05 alice FAIL
```

## 6. Output Example

```text
alice 2
bob 2
```

## 7. Example Explanation

`ERROR` 레벨 로그만 선택하면 다음과 같다.

```text
[ERROR] 2026-05-27 10:15:35 bob FAIL
[ERROR] 2026-05-27 10:15:40 alice FAIL
[ERROR] 2026-05-27 10:15:50 bob FAIL
[ERROR] 2026-05-27 10:16:05 alice FAIL
```

사용자별 발생 횟수는 다음과 같다.

- alice: 2
- bob: 2

횟수가 같으므로 사용자 이름 사전순으로 출력한다.

## 8. Answer

```py
import sys
import re
from collections import defaultdict

input = sys.stdin.readline

# 입력
n, target_level = input().split()
n = int(n)

# Grok 스타일 패턴을 정규식으로 변환
pattern = re.compile(
    r"\[(?P<LEVEL>[A-Z]+)\] "
    r"(?P<DATE>\d{4}-\d{2}-\d{2}) "
    r"(?P<TIME>\d{2}:\d{2}:\d{2}) "
    r"(?P<USER>\w+) "
    r"(?P<ACTION>\w+)"
)

count = defaultdict(int)

# 로그 파싱
for _ in range(n):
    log = input().rstrip()

    match = pattern.fullmatch(log)

    if not match:
        continue

    level = match.group("LEVEL")
    user = match.group("USER")

    # 특정 로그 레벨만 집계
    if level == target_level:
        count[user] += 1

# 정렬
result = sorted(
    count.items(),
    key=lambda x: (-x[1], x[0])
)

# 출력
for user, cnt in result:
    print(user, cnt)
```
