---
external : false
title : "Encrypted log pattern validator"
tag : [Python]
date : 2026-05-21
---

## 1. Problem

한 보안 기업에서는 서버 접근 로그를 정규식 기반으로 검사한다.

로그 문자열은 다음 규칙을 만족해야 정상 로그로 인정된다.

- 로그는 반드시 `ID-숫자:코드` 형식이어야 한다.
- ID는 영문 대문자 2~5글자이다.
- 숫자는 정확히 4자리이다.
- 코드는 영문 소문자와 숫자로 이루어지며 길이는 6~12이다.
- 코드 안에는 반드시 숫자가 최소 1개 포함되어야 한다.

정상 로그인지 판별하는 프로그램을 작성하시오.

## 3. Input

- 첫째 줄에 로그 문자열 S가 주어진다.

## 5. Limit

- 1 ≤ |S| ≤ 100
- 문자열은 공백 없이 주어진다.

## 6. Output

- 로그가 규칙에 맞으면 `VALID`
- 그렇지 않으면 `INVALID` 를 출력한다.

## 7. Input Example

```text
AUTH-4821:ab12cd9
```

## 8. Output Example

```text
VALID
```

## 9. Example Explanation

입력 문자열을 확인하면:

- `AUTH` → 대문자 4글자
- `4821` → 숫자 4자리
- `ab12cd9` → 소문자와 숫자로 구성
- 코드 내부에 숫자 포함

따라서 정상 로그이다.

## 10. Answer

```python
import re
import sys

input = sys.stdin.readline

s = input().strip()

pattern = r'^[A-Z]{2,5}-\d{4}:(?=.*\d)[a-z0-9]{6,12}$'

if re.match(pattern, s):
    print("VALID")
else:
    print("INVALID")
```
