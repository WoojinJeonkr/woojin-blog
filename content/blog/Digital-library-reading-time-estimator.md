---
external: false
title: "Digital library reading time estimator"
tag: [Python]
date: 2026-11-12
---

## 1. Problem

전자책 서비스에서는 사용자가 읽은 페이지 수와 평균 독서 속도를 이용하여 남은 독서 시간을 예측합니다.

전체 페이지 수와 현재까지 읽은 페이지 수, 분당 읽을 수 있는 페이지 수가 주어졌을 때 독서 진행률과 예상 남은 시간을 계산하는 프로그램을 작성하세요.

남은 독서 시간은 다음 기준으로 계산합니다.

- 남은 페이지 수를 분당 독서 페이지 수로 나눕니다.
- 계산 결과에 소수점이 있다면 올림하여 정수로 만듭니다.
- 전체 페이지를 모두 읽었다면 남은 시간은 0분입니다.

### 입력

- 첫 번째 줄에 전체 페이지 수 N이 주어집니다.
- 두 번째 줄에 현재까지 읽은 페이지 수 R이 주어집니다.
- 세 번째 줄에 분당 독서 페이지 수 P가 주어집니다.

### 출력

다음 항목을 순서대로 출력합니다.

- 독서 진행률: 소수점 둘째 자리까지 표시
- 남은 페이지 수
- 예상 남은 독서 시간: 분 단위

### 제한사항

- 1 ≤ N ≤ 10,000
- 0 ≤ R ≤ N
- 1 ≤ P ≤ 100

## 2. Input example

### Example 1

```text
320
120
3
```

### Example 2

```text
250
250
5
```

## 3. Output example

### 3.1. Example 1

```text
독서 진행률: 37.50%
남은 페이지: 200페이지
예상 남은 시간: 67분
```

### 3.2. Example 2

```text
독서 진행률: 100.00%
남은 페이지: 0페이지
예상 남은 시간: 0분
```

## 4. Explanation

### 4.1. Example 1

전체 페이지는 320페이지이고, 현재까지 120페이지를 읽었습니다.

- 독서 진행률: 120 ÷ 320 × 100 = 37.50%
- 남은 페이지: 320 - 120 = 200페이지
- 예상 남은 시간: 200 ÷ 3 = 약 66.67분

소수점이 있는 시간은 올림하므로 최종 예상 시간은 67분입니다.

### 4.2. Example 2

전체 250페이지를 모두 읽었으므로 독서 진행률은 100%입니다.

- 독서 진행률: 250 ÷ 250 × 100 = 100.00%
- 남은 페이지: 250 - 250 = 0페이지
- 예상 남은 시간: 0분

## 5. Answer

```python
import math

total_pages = int(input())
read_pages = int(input())
pages_per_minute = int(input())

progress = read_pages / total_pages * 100
remaining_pages = total_pages - read_pages
remaining_time = math.ceil(remaining_pages / pages_per_minute)

results = [
    f"독서 진행률: {progress:.2f}%",
    f"남은 페이지: {remaining_pages}페이지",
    f"예상 남은 시간: {remaining_time}분"
]

print("\n".join(results))
```
