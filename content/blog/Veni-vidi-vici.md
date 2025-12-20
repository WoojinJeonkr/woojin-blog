---
external : false
title : "Veni vidi vici"
tag : [Baekjoon, Python]
date : 2025-12-20
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/10914)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 카이사르 키 n 입력
n = int(input().strip())

# 암호화된 단어들 입력 (공백 기준으로 분리)
encrypted_words = input().split()

def decrypt_word(word, n):
    result = []

    # 문자열을 앞에서부터 2글자씩 처리
    # 마지막에 1글자가 남으면 더미 문자이므로 자동으로 제외됨
    for i in range(0, len(word) - 1, 2):
        # 문자 y, z를 0~25 범위의 숫자로 변환
        y = ord(word[i]) - ord('a')
        z = ord(word[i + 1]) - ord('a')

        # 원철 암호 복호화 공식 적용
        x = (y + z - n) % 26

        # 숫자를 다시 문자로 변환하여 결과에 추가
        result.append(chr(x + ord('a')))

    # 복호화된 단어 반환
    return ''.join(result)

# 모든 단어를 복호화
decrypted = [decrypt_word(word, n) for word in encrypted_words]

# 공백으로 구분하여 출력
print(' '.join(decrypted))
```
