---
external : false
title : "Number placeholder regular expression"
tag : [Programmers, Python]
date : 2025-05-14
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/11/lessons/133)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 정규표현식 패턴을 지정합니다.
# \d는 숫자(0~9) 한 글자를 의미합니다.
regex = r'\d'

# 검색 대상 문자열(주소록)입니다.
search_target = '''Luke Skywarker 02-123-4567 luke@daum.net
다스베이더 070-9999-9999 darth_vader@gmail.com
princess leia 010 2454 3457 leia@gmail.com'''

# re.findall() 함수는 정규표현식과 일치하는 모든 부분을 리스트로 반환합니다.
import re
result = re.findall(regex, search_target)

# 결과를 한 줄씩 출력합니다.
print("\n".join(result))
```

## 3. RegExp Explanation

해당 코드에서 사용된 정규표현식은 다음과 같습니다.

* **패턴:** `r'\d'`

이 패턴은 다음과 같은 의미를 가집니다.

* `\d`: **숫자(digit)**를 나타내는 특수 문자(메타 문자)입니다. 이는 0부터 9까지의 숫자 중 **하나**와 일치합니다.

따라서 `re.findall(r'\d', search_target)`는 `search_target` 문자열에서 **각각의 숫자**를 모두 찾아 리스트 형태로 반환합니다. 코드 실행 결과는 각 전화번호와 이메일 주소에서 개별적인 숫자들이 한 줄에 하나씩 출력되는 형태가 됩니다.
