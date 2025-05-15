---
external : false
title : "Character placeholder regular expression"
tag : [Programmers, Python]
date : 2025-05-15
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/11/lessons/526)에서 확인하실 수 있습니다.

## 2. Answer

```py
import re

regex = r'\w'  # 알파벳, 숫자, 밑줄(_)과 매칭되는 모든 문자를 찾습니다.

search_target = '''Luke Skywarker 02-123-4567 luke@daum.net
다스베이더 070-9999-9999 darth_vader@gmail.com
princess leia 010 2454 3457 leia@gmail.com
'''

# 대상 문자열에서 정규 표현식과 일치하는 모든 부분을 리스트 형태로 반환합니다.
result = re.findall(regex, search_target)
# 찾은 각 문자를 줄 단위로 출력합니다.
print("\n".join(result))
```

## 3. RegExp Explanation

정규표현식: `\w`

`\w`는 정규표현식에서 사용되는 특수 문자 시퀀스입니다.
이는 다음의 모든 "단어 문자(word character)"와 일치합니다.

- 영문 알파벳 (대소문자 모두: a-z, A-Z)
- 숫자 (0-9)
- 밑줄 문자 (_)

따라서 위 코드에서 `re.findall(r'\w', search_target)`는 `search_target` 문자열 내의 모든 알파벳, 숫자, 밑줄 문자를 개별적으로 찾아 리스트에 저장합니다.
