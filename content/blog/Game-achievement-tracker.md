---
external: false
title: "Game achievement tracker"
tag: [Python]
date: 2026-11-08
---

## 1. Problem

온라인 게임에서는 플레이어가 특정 조건을 달성하면 업적을 획득할 수 있다.

플레이어의 업적 달성 기록이 주어졌을 때, 업적별 달성 여부와 전체 진행률을 계산하는 프로그램을 작성하시오.

게임에는 총 5개의 업적이 있으며, 각 업적에는 고유한 번호가 부여되어 있다.

- 1번: 몬스터 10마리 처치
- 2번: 아이템 5개 수집
- 3번: 퀘스트 3개 완료
- 4번: 던전 2회 클리어
- 5번: 보스 1회 처치

각 업적의 진행 횟수가 목표 횟수에 도달하면 업적을 달성한 것으로 판단한다.

### 입력

첫째 줄에 업적 기록 횟수 \(N\)이 주어진다.

다음 \(N\)개의 줄에는 업적 번호와 해당 업적의 진행 횟수가 공백으로 구분되어 주어진다.

같은 업적 번호가 여러 번 입력되면 진행 횟수를 누적한다.

### 출력

첫째 줄부터 5개의 줄에 업적 번호와 달성 여부를 출력한다.

달성한 경우 `ACHIEVED`, 달성하지 못한 경우 `INCOMPLETE`를 출력한다.

마지막 줄에는 달성한 업적의 개수와 전체 업적 대비 달성률을 출력한다.

달성률은 백분율로 계산하며 소수점 첫째 자리까지 출력한다.

### 제한사항

- \(1 \leq N \leq 100\)
- 업적 번호는 1 이상 5 이하의 정수이다.
- 진행 횟수는 1 이상 100 이하의 정수이다.
- 업적 진행 횟수는 누적하여 계산한다.

## 2. Input example

### Example 1

```text
6
1 4
2 3
1 6
3 3
4 1
5 1
```

### Example 2

```text
5
1 10
2 5
3 1
4 2
5 1
```

## 3. Output example

### 3.1. Example 1

```text
1 ACHIEVED
2 INCOMPLETE
3 ACHIEVED
4 INCOMPLETE
5 ACHIEVED
3 60.0%
```

### 3.2. Example 2

```text
1 ACHIEVED
2 ACHIEVED
3 INCOMPLETE
4 ACHIEVED
5 ACHIEVED
4 80.0%
```

## 4. Explanation

### 4.1. Example 1

업적별 진행 횟수를 누적하면 다음과 같다.

- 1번: 4 + 6 = 10회로 달성
- 2번: 3회로 미달성
- 3번: 3회로 달성
- 4번: 1회로 미달성
- 5번: 1회로 달성

총 5개 업적 중 3개를 달성했다.

달성률은 다음과 같다.

\[
\frac{3}{5} \times 100 = 60.0\%
\]

### 4.2. Example 2

업적별 진행 횟수를 확인하면 다음과 같다.

- 1번: 10회로 달성
- 2번: 5회로 달성
- 3번: 1회로 미달성
- 4번: 2회로 달성
- 5번: 1회로 달성

총 5개 업적 중 4개를 달성했다.

달성률은 다음과 같다.

\[
\frac{4}{5} \times 100 = 80.0\%
\]

## 5. Answer

```python
n = int(input())

targets = [10, 5, 3, 2, 1]
progress = [0, 0, 0, 0, 0]

for _ in range(n):
    achievement, count = map(int, input().split())
    progress[achievement - 1] += count

results = []
achieved_count = 0

for i in range(5):
    if progress[i] >= targets[i]:
        status = "ACHIEVED"
        achieved_count += 1
    else:
        status = "INCOMPLETE"

    results.append(f"{i + 1} {status}")

rate = achieved_count / 5 * 100

results.append(f"{achieved_count} {rate:.1f}%")

print("\n".join(results))
```
