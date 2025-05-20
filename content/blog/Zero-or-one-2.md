---
external : false
title : "Zero or one 2"
tag : [Programmers, Python]
date : 2025-05-20
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/11/lessons/918)에서 확인하실 수 있습니다.

## 2. Answer

```python
# 전화번호 형식의 문자열을 찾기 위한 정규표현식입니다.
regex = r'\d+[- ]?\d+[- ]?\d+'

# 전화번호를 찾을 대상 문자열입니다.
search_target = '''
Luke Skywarker 02-123-4567 luke@daum.net
다스베이더 070-9999-9999 darth_vader@gmail.com
princess leia 010 2454 3457 leia@gmail.com
'''

# 정규표현식 사용을 위한 re 모듈을 임포트합니다.
import re
# 대상 문자열에서 정규표현식과 일치하는 모든 부분을 찾아 리스트로 반환합니다.
result=re.findall(regex,search_target)
# 찾은 전화번호 리스트를 출력합니다.
print(result)
```

## 3. RegExp Explanation

```regex
\d+[- ]?\d+[- ]?\d+
```

- \d+: 하나 이상의 숫자를 의미합니다. (예: 02, 123, 4567)
- [- ]?: 하이픈 (-) 또는 공백 ()이 0번 또는 1번 나타날 수 있음을 의미합니다. 즉, 하이픈이나 공백이 있을 수도 있고 없을 수도 있습니다.

이 패턴이 세 번 반복되어, 숫자 다음에 하이픈 또는 공백(선택사항), 다시 숫자 다음에 하이픈 또는 공백(선택사항), 그리고 마지막으로 숫자가 오는 형태를 찾습니다.  
결과적으로 이 정규표현식은 02-123-4567 또는 010 2454 3457과 같이 하이픈이나 공백으로 구분되거나 구분되지 않은 세 덩어리의 숫자로 이루어진 전화번호 형식을 찾아냅니다.
