---
external: false
title: "Temperature conversion analyzer"
tag: [Python]
date: 2026-11-01
---

## 1. Problem

해외 기상 관측소에서는 섭씨(℃)가 아닌 화씨(℉) 단위로 온도를 기록하기도 한다.

여러 지역의 화씨 온도가 주어졌을 때, 섭씨 온도로 변환하고 각 지역의 기온 상태를 분류하는 프로그램을 작성하시오.

화씨를 섭씨로 변환하는 공식은 다음과 같다.

\[
C = (F - 32) \times \frac{5}{9}
\]

온도 상태는 다음 기준에 따라 분류한다.

- 섭씨 0도 미만: `FREEZING`
- 섭씨 0도 이상 20도 미만: `COLD`
- 섭씨 20도 이상 30도 미만: `WARM`
- 섭씨 30도 이상: `HOT`

각 온도는 소수점 첫째 자리까지 출력한다.

### 입력

첫째 줄에 온도 측정 횟수 \(N\)이 주어진다.

다음 \(N\)개의 줄에는 화씨 온도가 하나씩 주어진다.

### 출력

각 측정 결과마다 다음 형식으로 출력한다.

`섭씨온도 온도상태`

섭씨 온도는 소수점 첫째 자리까지 출력한다.

### 제한사항

- \(1 \leq N \leq 100\)
- 화씨 온도는 -40 이상 212 이하의 정수이다.

## 2. Input example

### Example 1

```text
4
32
68
86
104
```

### Example 2

```text
5
-4
50
77
95
122
```

## 3. Output example

### 3.1. Example 1

```text
0.0 COLD
20.0 WARM
30.0 HOT
40.0 HOT
```

### 3.2. Example 2

```text
-20.0 FREEZING
10.0 COLD
25.0 WARM
35.0 HOT
50.0 HOT
```

## 4. Explanation

### 4.1. Example 1

화씨 온도를 섭씨 온도로 변환한다.

- 32℉ → 0.0℃: `COLD`
- 68℉ → 20.0℃: `WARM`
- 86℉ → 30.0℃: `HOT`
- 104℉ → 40.0℃: `HOT`

### 4.2. Example 2

각 화씨 온도를 섭씨 온도로 변환하면 다음과 같다.

- -4℉ → -20.0℃: `FREEZING`
- 50℉ → 10.0℃: `COLD`
- 77℉ → 25.0℃: `WARM`
- 95℉ → 35.0℃: `HOT`
- 122℉ → 50.0℃: `HOT`

## 5. Answer

```python
n = int(input())

results = []

for _ in range(n):
    fahrenheit = int(input())

    celsius = (fahrenheit - 32) * 5 / 9

    if celsius < 0:
        status = "FREEZING"
    elif celsius < 20:
        status = "COLD"
    elif celsius < 30:
        status = "WARM"
    else:
        status = "HOT"

    results.append(f"{celsius:.1f} {status}")

print("\n".join(results))
```
