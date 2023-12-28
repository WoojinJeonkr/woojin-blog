---
external: false
title: "Re split()"
date: 2023-09-15
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/re-split/problem?isFullScreen=true)

## 2. 정답 코드 (Python)

```python
regex_pattern = r"[\s, .]"

import re
print("\n".join(re.split(regex_pattern, input())))
```
