---
external: false
title: "Baekjoon 9251"
date: 2023-08-28
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/9251)

## 2. 정답 코드 (Python, memory: 55712KB, time: 348ms)

```python
def longest_common_subsequence_length(str1, str2):
    len_str1 = len(str1)
    len_str2 = len(str2)
    
    # 2차원 DP 테이블 초기화
    dp = [[0] * (len_str2 + 1) for _ in range(len_str1 + 1)]
    
    for i in range(1, len_str1 + 1):
        for j in range(1, len_str2 + 1):
            if str1[i - 1] == str2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    
    return dp[len_str1][len_str2]

# 입력 예제
str1 = input()
str2 = input()

# LCS의 길이 계산 및 출력
result = longest_common_subsequence_length(str1, str2)
print(result)
```
