---
external: false
title: "Music playlist duration analyzer"
tag: [Python]
date: 2026-10-16
---

## 1. Problem

음악 앱에서는 재생 목록에 포함된 곡들의 재생 시간을 관리한다.

재생 목록에 포함된 곡의 수와 각 곡의 재생 시간이 주어졌을 때, 다음 정보를 계산하는 프로그램을 작성하시오.

- 전체 재생 시간
- 전체 곡의 평균 재생 시간(초 단위, 소수점 이하 버림)
- 3분 이상인 곡의 수
- 재생 시간이 가장 긴 곡의 번호

곡의 재생 시간은 초 단위로 입력된다. 재생 시간이 가장 긴 곡이 여러 개라면 가장 먼저 등장하는 곡의 번호를 출력한다. 곡 번호는 재생 목록의 첫 번째 곡을 1번으로 시작한다.

### 입력

첫째 줄에 곡의 개수 \(N\)이 주어진다.

둘째 줄에 각 곡의 재생 시간 \(T\)가 초 단위 정수로 주어진다. 각 값은 공백으로 구분된다.

### 출력

첫째 줄에 전체 재생 시간을 `분:초` 형식으로 출력한다. 초가 10보다 작으면 앞에 `0`을 붙인다.

둘째 줄에 평균 재생 시간을 초 단위 정수로 출력한다.

셋째 줄에 재생 시간이 180초 이상인 곡의 수를 출력한다.

넷째 줄에 재생 시간이 가장 긴 곡의 번호를 출력한다.

### 제한사항

- \(1 \leq N \leq 100\)
- \(1 \leq T \leq 1000\)
- \(T\)는 곡 하나의 재생 시간(초)이다.

## 2. Input example

### Example 1

```text
5
120 200 180 150 240
```

### Example 2

```text
4
90 100 110 80
```

## 3. Output example

### 3.1. Example 1

```text
14:50
178
3
5
```

### 3.2. Example 2

```text
6:20
95
0
3
```

## 4. Explanation

### 4.1. Example 1

전체 재생 시간은 \(120 + 200 + 180 + 150 + 240 = 890\)초이다. 이를 분과 초로 변환하면 14분 50초이므로 `14:50`으로 출력한다.

평균 재생 시간은 \(890 \div 5 = 178\)초이다.

180초 이상인 곡은 200초, 180초, 240초로 총 3곡이다.

가장 긴 곡은 240초인 5번 곡이다.

### 4.2. Example 2

전체 재생 시간은 \(90 + 100 + 110 + 80 = 380\)초이다. 이를 분과 초로 변환하면 6분 20초이므로 `6:20`으로 출력한다.

평균 재생 시간은 \(380 \div 4 = 95\)초이다.

180초 이상인 곡은 없으므로 0을 출력한다.

가장 긴 곡은 110초인 3번 곡이다.

## 5. Answer

```python
n = int(input())
times = list(map(int, input().split()))

total = sum(times)
minutes = total // 60
seconds = total % 60

average = total // n
long_songs = sum(1 for t in times if t >= 180)
longest_song = times.index(max(times)) + 1

print(f"{minutes}:{seconds:02d}")
print(average)
print(long_songs)
print(longest_song)
```
