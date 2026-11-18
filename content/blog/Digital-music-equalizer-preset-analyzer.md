---
external: false
title: "Digital music equalizer preset analyzer"
tag: [Python]
date: 2026-11-18
---

## 1. Problem

음악 플레이어에서는 사용자의 취향에 따라 저음, 중음, 고음의 음량을 조절하는 이퀄라이저(Equalizer)를 사용합니다.

저음(Bass), 중음(Mid), 고음(Treble)의 설정값이 주어졌을 때, 각 설정값을 분석하여 음향 프리셋을 결정하는 프로그램을 작성하세요.

프리셋 판정 규칙은 다음과 같습니다.

- 저음이 중음과 고음보다 모두 높으면 `BASS BOOST`
- 고음이 저음과 중음보다 모두 높으면 `TREBLE BOOST`
- 저음, 중음, 고음이 모두 동일하면 `FLAT`
- 저음, 중음, 고음 중 두 값이 동일하게 가장 높으면 `BALANCED`
- 그 외에는 `CUSTOM`

추가로 세 영역의 설정값 합계와 평균을 계산합니다.

평균은 소수점 둘째 자리까지 출력합니다.

### 입력

- 첫 번째 줄에 저음(Bass) 설정값이 주어집니다.
- 두 번째 줄에 중음(Mid) 설정값이 주어집니다.
- 세 번째 줄에 고음(Treble) 설정값이 주어집니다.

### 출력

- 첫 번째 줄에 판정된 음향 프리셋을 출력합니다.
- 두 번째 줄에 세 설정값의 합을 출력합니다.
- 세 번째 줄에 세 설정값의 평균을 출력합니다.

### 제한사항

- -10 ≤ Bass, Mid, Treble ≤ 10
- 모든 설정값은 정수입니다.

## 2. Input example

### Example 1

```text
8
2
-3
```

### Example 2

```text
5
5
5
```

## 3. Output example

### 3.1. Example 1

```text
Preset: BASS BOOST
Total: 7
Average: 2.33
```

### 3.2. Example 2

```text
Preset: FLAT
Total: 15
Average: 5.00
```

## 4. Explanation

### 4.1. Example 1

저음은 8, 중음은 2, 고음은 -3입니다.

저음 설정값이 중음과 고음보다 모두 높으므로 `BASS BOOST` 프리셋으로 판정합니다.

- 합계: 8 + 2 + (-3) = 7
- 평균: 7 ÷ 3 = 2.33

### 4.2. Example 2

저음, 중음, 고음이 모두 5로 동일합니다.

세 영역의 설정값이 동일하므로 `FLAT` 프리셋으로 판정합니다.

- 합계: 5 + 5 + 5 = 15
- 평균: 15 ÷ 3 = 5.00

## 5. Answer

```python
bass = int(input())
mid = int(input())
treble = int(input())

total = bass + mid + treble
average = total / 3

if bass == mid == treble:
    preset = "FLAT"
elif bass > mid and bass > treble:
    preset = "BASS BOOST"
elif treble > bass and treble > mid:
    preset = "TREBLE BOOST"
elif (bass == mid and bass > treble) or \
     (bass == treble and bass > mid) or \
     (mid == treble and mid > bass):
    preset = "BALANCED"
else:
    preset = "CUSTOM"

results = [
    f"Preset: {preset}",
    f"Total: {total}",
    f"Average: {average:.2f}"
]

print("\n".join(results))
```
