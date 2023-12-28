---
external: false
title: "Database Differences"
date: 2023-10-26
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/databases-differences/problem?isFullScreen=true)

## 2. 정답

```textile
2
3
```

## 3. 풀이

문제에서 주어진 튜플은 다음과 같다.

### 3-1. R의 튜플

```textile
1 2 3
4 2 3
4 5 6
2 5 3
1 2 6
```

### 3-2. S의 튜플

```textile
2 5 3
2 5 4
4 5 6
1 2 3
```

여기에서 우리가 찾는 튜플은 R에는 속하지만 S에는 속하지 않아야 합니다.

R의 세 번째 튜플 (4,5,6)은 R에 속하지만 S에도 속해 있습니다. 그러나 R의 나머지 두 번째 튜플 (4,2,3)은 R에 속하면서도 S에는 속해 있지 않습니다.  따라서 차집합 (R−S)에는 (4,2,3)이 포함되어 있습니다.
따라서 튜플 (4,b,c)에서 b = 2이고 c = 3이므로 정답이 위와 같이 나오게 됩니다.
