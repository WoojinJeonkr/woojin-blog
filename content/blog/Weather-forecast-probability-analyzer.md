---
external: false
title: "Weather forecast probability analyzer"
tag: [Python]
date: 2026-11-10
---

## 1. Problem

기상 정보 서비스에서는 여러 지역의 강수 확률을 분석하여 우산을 준비해야 하는 지역을 안내한다.

각 지역의 강수 확률이 주어졌을 때, 강수 가능성에 따라 날씨 상태를 분류하는 프로그램을 작성하시오.

날씨 상태는 다음 기준에 따라 결정한다.

- 강수 확률이 0% 이상 30% 미만이면 `CLEAR`
- 강수 확률이 30% 이상 60% 미만이면 `CLOUDY`
- 강수 확률이 60% 이상 80% 미만이면 `RAIN`
- 강수 확률이 80% 이상이면 `HEAVY_RAIN`

추가로 우산이 필요한 지역은 강수 확률이 60% 이상인 지역으로 판단한다.

### 입력

첫째 줄에 지역의 개수 \(N\)이 주어진다.

다음 \(N\)개의 줄에는 지역 이름과 강수 확률이 공백으로 구분되어 주어진다.

### 출력

각 지역의 이름과 날씨 상태를 입력 순서대로 출력한다.

마지막 줄에는 우산이 필요한 지역의 이름을 입력 순서대로 출력한다.

우산이 필요한 지역이 없다면 `NONE`을 출력한다.

### 제한사항

- \(1 \leq N \leq 100\)
- 지역 이름은 영문 소문자로 구성된다.
- 지역 이름의 길이는 1 이상 20 이하이다.
- 강수 확률은 0 이상 100 이하의 정수이다.
- 지역 이름은 중복되지 않는다.

## 2. Input example

### Example 1

```text
4
seoul 20
busan 65
incheon 85
daegu 45
```

### Example 2

```text
5
gangneung 10
jeju 30
suwon 60
ulsan 79
gwangju 80
```

## 3. Output example

### 3.1. Example 1

```text
seoul CLEAR
busan RAIN
incheon HEAVY_RAIN
daegu CLOUDY
busan incheon
```

### 3.2. Example 2

```text
gangneung CLEAR
jeju CLOUDY
suwon RAIN
ulsan RAIN
gwangju HEAVY_RAIN
suwon ulsan gwangju
```

## 4. Explanation

### 4.1. Example 1

각 지역의 강수 확률을 기준으로 날씨 상태를 분류한다.

- `seoul`: 20%이므로 `CLEAR`
- `busan`: 65%이므로 `RAIN`
- `incheon`: 85%이므로 `HEAVY_RAIN`
- `daegu`: 45%이므로 `CLOUDY`

강수 확률이 60% 이상인 지역은 `busan`, `incheon`이므로 마지막 줄에 출력한다.

### 4.2. Example 2

- `gangneung`: 10%이므로 `CLEAR`
- `jeju`: 30%이므로 `CLOUDY`
- `suwon`: 60%이므로 `RAIN`
- `ulsan`: 79%이므로 `RAIN`
- `gwangju`: 80%이므로 `HEAVY_RAIN`

강수 확률이 60% 이상인 지역은 `suwon`, `ulsan`, `gwangju`이다.

## 5. Answer

```python
n = int(input())

results = []
umbrella_regions = []

for _ in range(n):
    region, probability = input().split()
    probability = int(probability)

    if probability < 30:
        status = "CLEAR"
    elif probability < 60:
        status = "CLOUDY"
    elif probability < 80:
        status = "RAIN"
    else:
        status = "HEAVY_RAIN"

    results.append(f"{region} {status}")

    if probability >= 60:
        umbrella_regions.append(region)

if umbrella_regions:
    results.append(" ".join(umbrella_regions))
else:
    results.append("NONE")

print("\n".join(results))
```
