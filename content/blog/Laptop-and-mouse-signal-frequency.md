---
external : false
title : "Laptop and mouse signal frequency"
tag : [Python]
date : 2026-09-06
---

## 1. Problem

노트북에서 마우스를 사용할 때 마우스는 일정한 주기로 자신의 위치와 버튼 상태 등의 정보를 노트북으로 전달합니다.

이때 마우스가 1초 동안 노트북으로 신호를 보내는 횟수를 **폴링 레이트(Polling Rate)** 라고 하며, 단위는 Hz입니다.

예를 들어 폴링 레이트가 `125Hz`라면 1초에 `125`번 신호를 보내며, 신호와 신호 사이의 시간은 다음과 같습니다.

```text
1000ms / 125 = 8ms
```

노트북에서 마우스의 폴링 레이트와 사용 시간을 입력받아 총 몇 번의 신호가 전달되는지 계산하려고 합니다.

마우스의 폴링 레이트 `PollingRate`와 사용 시간 `UsageTime`이 주어졌을 때, 마우스가 노트북으로 전달한 **총 신호 횟수**를 구하는 프로그램을 작성하세요.

단, 사용 시간은 밀리초(ms) 단위로 주어집니다.

### 입력

첫 번째 줄에 테스트 케이스의 개수 `TestCaseCount`가 주어집니다.

각 테스트 케이스마다 다음 두 정수가 주어집니다.

```text
PollingRate UsageTime
```

- `PollingRate` : 마우스의 폴링 레이트(Hz)
- `UsageTime` : 마우스를 사용한 시간(ms)

### 출력

각 테스트 케이스마다 마우스가 노트북으로 전달한 총 신호 횟수를 한 줄에 출력합니다.

사용 시간 동안 발생하는 신호 횟수는 다음과 같이 계산합니다.

```text
총 신호 횟수 = PollingRate × UsageTime / 1000
```

### 제한사항

- `1 ≤ TestCaseCount ≤ 100,000`
- `1 ≤ PollingRate ≤ 8,000`
- `1 ≤ UsageTime ≤ 10^9`
- `PollingRate × UsageTime`은 64비트 정수 범위 내에 존재합니다.
- 입력으로 주어지는 사용 시간은 폴링 주기에 정확히 나누어떨어집니다.
- 모든 입력값은 정수입니다.

## 2. Input example

### Example 1

```text
3
125 1000
500 2000
1000 500
```

### Example 2

```text
4
250 4000
1000 3000
2000 1500
8000 500
```

## 3. Output example

### 3.1. Example 1

```text
125
1000
500
```

### 3.2. Example 2

```text
1000
3000
3000
4000
```

## 4. Explanation

### 4.1. Example 1

첫 번째 테스트 케이스에서는 폴링 레이트가 `125Hz`이고 사용 시간은 `1000ms`입니다.

```text
125 × 1000 / 1000 = 125
```

따라서 총 `125`번의 신호가 전달됩니다.

두 번째 테스트 케이스에서는:

```text
500 × 2000 / 1000 = 1000
```

이므로 총 `1000`번의 신호가 전달됩니다.

세 번째 테스트 케이스에서는:

```text
1000 × 500 / 1000 = 500
```

이므로 총 `500`번의 신호가 전달됩니다.

### 4.2. Example 2

첫 번째 테스트 케이스에서는:

```text
250 × 4000 / 1000 = 1000
```

두 번째 테스트 케이스에서는:

```text
1000 × 3000 / 1000 = 3000
```

세 번째 테스트 케이스에서는:

```text
2000 × 1500 / 1000 = 3000
```

마지막 테스트 케이스에서는:

```text
8000 × 500 / 1000 = 4000
```

따라서 각각 `1000`, `3000`, `3000`, `4000`번의 신호가 전달됩니다.

## 5. Answer

```python
import sys

input = sys.stdin.readline

test_case_count = int(input())

for _ in range(test_case_count):
    polling_rate, usage_time = map(int, input().split())

    signal_count = polling_rate * usage_time // 1000

    print(signal_count)
```
