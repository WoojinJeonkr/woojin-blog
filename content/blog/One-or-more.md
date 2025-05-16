---
external : false
title : "One or more"
tag : [Programmers, Python]
date : 2025-05-16
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/11/lessons/518)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 정규 표현식(regular expression) 모듈을 가져옵니다.
import re
# 전화번호 형태(02-123-4567, 070-9999-9999, 010 2454 3457 등)를 정의하는 정규표현식입니다.
regex = r'\d{2,3}[-\s]?\d{3,4}[-\s]?\d{4}'
# 검색 대상 문자열입니다.
search_target = '''Luke Skywarker 02-123-4567 luke@daum.net
다스베이더 070-9999-9999 darth_vader@gmail.com
princess leia 010 2454 3457 leia@gmail.com'''
# 정규표현식과 일치하는 모든 부분을 찾아 리스트로 반환합니다.
result = re.findall(regex, search_target)
# 찾은 결과를 출력합니다.
print(result)
```

## 3. RegExp Explanation

```text
`r'\d{2,3}[-\s]?\d{3,4}[-\s]?\d{4}'`
```

- `\d{2,3}`: 2자리 또는 3자리의 숫자를 매칭합니다.
- `[-\s]?`: 하이픈(`-`) 또는 공백 문자(`\s`)가 0번 또는 1번 나타나는 것을 허용합니다. (선택적인 구분자)
- `\d{3,4}`: 3자리 또는 4자리의 숫자를 매칭합니다.
- `[-\s]?`: 하이픈(`-`) 또는 공백 문자(`\s`)가 0번 또는 1번 나타나는 것을 허용합니다. (선택적인 구분자)
- `\d{4}`: 4자리의 숫자를 매칭합니다.
