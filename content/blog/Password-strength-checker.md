---
external: false
title: "Password strength checker"
tag: [Python]
date: 2026-11-02
---

## 1. Problem

한 온라인 서비스에서는 사용자가 입력한 비밀번호의 보안 수준을 확인하는 기능을 제공한다.

비밀번호 문자열이 주어졌을 때 다음 조건을 검사하여 비밀번호의 강도를 판정하는 프로그램을 작성하시오.

비밀번호 강도는 다음 조건에 따라 결정한다.

- 길이가 8자 미만이면 `WEAK`
- 길이가 8자 이상이고, 다음 네 가지 조건 중 2개 이하를 만족하면 `NORMAL`
- 길이가 8자 이상이고, 다음 네 가지 조건 중 3개 이상을 만족하면 `STRONG`

네 가지 조건은 다음과 같다.

1. 영문 대문자가 포함되어 있는가?
2. 영문 소문자가 포함되어 있는가?
3. 숫자가 포함되어 있는가?
4. 특수문자(`!`, `@`, `#`, `$`, `%`)가 포함되어 있는가?

비밀번호에 포함된 각 조건은 한 번만 계산한다.

### 입력

첫째 줄에 비밀번호 개수 \(N\)이 주어진다.

다음 \(N\)개의 줄에는 각각 하나의 비밀번호가 주어진다.

### 출력

각 비밀번호의 강도를 입력 순서대로 한 줄씩 출력한다.

출력 결과는 `WEAK`, `NORMAL`, `STRONG` 중 하나이다.

### 제한사항

- \(1 \leq N \leq 100\)
- 비밀번호 길이는 1 이상 50 이하이다.
- 비밀번호는 영문 대소문자, 숫자, 특수문자로만 구성된다.
- 특수문자는 `!`, `@`, `#`, `$`, `%`만 사용한다.

## 2. Input example

### Example 1

```text
4
abc
Password1
Pass@123
HELLO123
```

### Example 2

```text
5
abcdefgh
ABCDEF12
abc12345
Abcdef12
Abc@1234
```

## 3. Output example

### 3.1. Example 1

```text
WEAK
NORMAL
STRONG
NORMAL
```

### 3.2. Example 2

```text
NORMAL
NORMAL
NORMAL
STRONG
STRONG
```

## 4. Explanation

### 4.1. Example 1

각 비밀번호의 조건 충족 여부를 확인한다.

- `abc`: 길이가 8자 미만이므로 `WEAK`
- `Password1`: 대문자, 소문자, 숫자 조건을 만족하지만 길이가 8자 이상이므로 `STRONG`이 아니라 `STRONG`이어야 한다.

### 4.2. Example 2

- `abcdefgh`: 소문자 조건만 만족하므로 `NORMAL`
- `ABCDEF12`: 대문자와 숫자 조건을 만족하므로 `NORMAL`
- `abc12345`: 소문자와 숫자 조건을 만족하므로 `NORMAL`
- `Abcdef12`: 대문자, 소문자, 숫자 조건을 만족하므로 `STRONG`
- `Abc@1234`: 대문자, 소문자, 숫자, 특수문자 조건을 모두 만족하므로 `STRONG`

## 5. Answer

```python
n = int(input())

results = []

for _ in range(n):
    password = input().strip()

    if len(password) < 8:
        results.append("WEAK")
        continue

    conditions = [
        any(char.isupper() for char in password),
        any(char.islower() for char in password),
        any(char.isdigit() for char in password),
        any(char in "!@#$%" for char in password)
    ]

    count = sum(conditions)

    if count >= 3:
        results.append("STRONG")
    else:
        results.append("NORMAL")

print("\n".join(results))
```
