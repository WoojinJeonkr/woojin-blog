---
external : false
title : "Escape room puzzle tracker"
tag : [Python]
date : 2026-10-22
---

## 1. Problem

방 탈출 게임에서는 참가자가 여러 퍼즐을 해결하고, 해결한 순서와 소요 시간을 기록한다.

참가자가 해결한 퍼즐의 수와 각 퍼즐을 해결하는 데 걸린 시간이 주어졌을 때, 다음 정보를 계산하는 프로그램을 작성하시오.

- 전체 퍼즐 해결 시간
- 퍼즐 하나당 평균 해결 시간(초 단위, 소수점 이하 버림)
- 5분 이상 걸린 퍼즐의 수
- 가장 짧은 시간에 해결한 퍼즐의 번호

해결 시간이 가장 짧은 퍼즐이 여러 개라면 가장 먼저 입력된 퍼즐의 번호를 출력한다. 퍼즐 번호는 입력 순서대로 1번부터 시작한다.

### 입력

첫째 줄에 해결한 퍼즐의 수 \(N\)이 주어진다.

둘째 줄에 각 퍼즐의 해결 시간 \(T\)가 초 단위 정수로 주어진다. 각 값은 공백으로 구분된다.

### 출력

첫째 줄에 전체 해결 시간을 출력한다.

둘째 줄에 평균 해결 시간을 출력한다.

셋째 줄에 해결 시간이 300초 이상인 퍼즐의 수를 출력한다.

넷째 줄에 가장 짧은 시간에 해결한 퍼즐의 번호를 출력한다.

### 제한사항

- \(1 \leq N \leq 100\)
- \(1 \leq T \leq 3600\)
- \(T\)는 퍼즐 하나를 해결하는 데 걸린 시간(초)이다.

## 2. Input example

### Example 1

```text
5
240 180 420 300 180
```

### Example 2

```text
4
600 450 720 540
```

## 3. Output example

### 3.1. Example 1

```text
1320
264
2
2
```

### 3.2. Example 2

```text
2310
577
4
2
```

## 4. Explanation

### 4.1. Example 1

전체 퍼즐 해결 시간은 \(240 + 180 + 420 + 300 + 180 = 1320\)초이다.

평균 해결 시간은 \(1320 \div 5 = 264\)초이다.

300초 이상 걸린 퍼즐은 3번과 4번으로 총 2개이다.

가장 짧은 해결 시간은 180초이며, 2번과 5번 퍼즐이 해당한다. 가장 먼저 등장한 2번을 출력한다.

### 4.2. Example 2

전체 퍼즐 해결 시간은 \(600 + 450 + 720 + 540 = 2310\)초이다.

평균 해결 시간은 \(2310 \div 4 = 577.5\)초이며, 소수점 이하를 버리면 577초이다.

모든 퍼즐이 300초 이상 걸렸으므로 해당 퍼즐의 수는 4개이다.

가장 짧은 해결 시간은 450초이며, 2번 퍼즐이다.

## 5. Answer

```python
n = int(input())
times = list(map(int, input().split()))

total_time = sum(times)
average_time = total_time // n
long_puzzles = sum(1 for t in times if t >= 300)
shortest_puzzle = times.index(min(times)) + 1

print(total_time)
print(average_time)
print(long_puzzles)
print(shortest_puzzle)
```
