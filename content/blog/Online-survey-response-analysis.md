---
external: false
title: "Online survey response analysis"
tag: [Python]
date: 2026-10-29
---

## 1. Problem

한 회사에서 새로운 서비스에 대한 만족도 설문조사를 진행했다. 응답자는 서비스 만족도를 1점부터 5점까지의 정수로 평가했다.

설문 결과를 분석하기 위해 다음 정보를 계산하는 프로그램을 작성하시오.

- 전체 응답자 수
- 만족도 점수별 응답자 수
- 평균 만족도
- 만족도 4점 이상인 응답자의 비율

만족도 점수별 응답자 수는 1점부터 5점까지 순서대로 출력한다.

평균 만족도는 소수점 둘째 자리에서 반올림하여 소수점 첫째 자리까지 출력한다. 만족도 4점 이상인 응답자의 비율은 백분율로 계산하고 소수점 첫째 자리까지 출력한다.

### 입력

첫째 줄에 응답자 수 \(N\)이 주어진다.

둘째 줄에 각 응답자의 만족도 점수가 공백으로 구분되어 주어진다.

### 출력

첫째 줄에 전체 응답자 수를 출력한다.

둘째 줄에 만족도 1점부터 5점까지의 응답자 수를 공백으로 구분하여 출력한다.

셋째 줄에 평균 만족도를 출력한다.

넷째 줄에 만족도 4점 이상인 응답자의 비율을 백분율로 출력한다. 숫자 뒤에 `%` 기호를 붙인다.

### 제한사항

- \(1 \leq N \leq 1000\)
- 만족도 점수는 1 이상 5 이하의 정수이다.
- 입력된 점수의 개수는 \(N\)개이다.

## 2. Input example

### Example 1

```text
8
5 4 3 4 2 5 4 3
```

### Example 2

```text
5
1 2 2 3 4
```

## 3. Output example

### 3.1. Example 1

```text
8
0 1 2 3 2
3.8
62.5%
```

### 3.2. Example 2

```text
5
1 2 1 1 0
2.4
20.0%
```

## 4. Explanation

### 4.1. Example 1

응답 점수는 `5, 4, 3, 4, 2, 5, 4, 3`이다.

- 전체 응답자 수: 8명
- 점수별 응답자 수: 1점 0명, 2점 1명, 3점 2명, 4점 3명, 5점 2명
- 평균 만족도: 30 / 8 = 3.75이므로 `3.8`
- 4점 이상 응답자: 5명
- 만족도 4점 이상 비율: 5 / 8 × 100 = `62.5%`

### 4.2. Example 2

응답 점수는 `1, 2, 2, 3, 4`이다.

- 전체 응답자 수: 5명
- 점수별 응답자 수: 1점 1명, 2점 2명, 3점 1명, 4점 1명, 5점 0명
- 평균 만족도: 12 / 5 = `2.4`
- 4점 이상 응답자: 1명
- 만족도 4점 이상 비율: 1 / 5 × 100 = `20.0%`

## 5. Answer

```python
n = int(input())
scores = list(map(int, input().split()))

counts = [0, 0, 0, 0, 0]
total_score = 0
high_score_count = 0

for score in scores:
    counts[score - 1] += 1
    total_score += score

    if score >= 4:
        high_score_count += 1

average = total_score / n
high_score_rate = high_score_count / n * 100

print(n)
print(*counts)
print(f"{average:.1f}")
print(f"{high_score_rate:.1f}%")
```
