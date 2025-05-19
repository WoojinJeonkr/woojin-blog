---
external : false
title : "Zero or one 1"
tag : [Programmers, Python]
date : 2025-05-19
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/11/lessons/540)에서 확인하실 수 있습니다.

## 2. Answer

```python
# 전화번호 패턴을 찾는 정규표현식입니다.
# 예: 02-123-4567, 070-9999-9999, 010-2454-3457
regex = r'\d+-?\d+-?\d+'

# 검색 대상 문자열입니다. 이름, 전화번호, 이메일 주소 형식을 포함하고 있습니다.
search_target = '''
Luke Skywarker 02-123-4567 luke@daum.net
다스베이더 070-9999-9999 darth_vader@gmail.com
princess leia 010 2454 3457 leia@gmail.com
'''

# 정규표현식 모듈을 가져옵니다.
import re
# search_target에서 regex 패턴과 일치하는 모든 부분을 찾아 리스트로 반환합니다.
result = re.findall(regex, search_target)
# 찾은 결과를 출력합니다.
print(result)
```

## 3. RegExp Explanation

`\d+` : 하나 이상의 숫자를 매칭합니다. 전화번호의 각 부분(지역번호, 중간 번호, 끝 번호)을 나타냅니다.

`-?` : 하이픈(-)이 0번 또는 1번 나타나는 것을 매칭합니다. 전화번호에서 하이픈이 있을 수도 있고 없을 수도 있는 경우를 처리합니다.

그러므로 `\d+-?\d+-?\d+` 패턴은 다음과 같은 형태의 문자열을 찾습니다.

* `숫자-숫자-숫자` (예: 02-123-4567)
* `숫자숫자-숫자` (예: 0102454-3457)
* `숫자-숫자숫자` (예: 070-99999999)
* `숫자숫자숫자` (예: 01024543457)
