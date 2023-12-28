---
external: false
title: "Databases Keys"
date: 2023-10-21
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/databases-keys/problem?isFullScreen=true)

## 2. 정답

```textile
bookname
```

## 3. 풀이

| bookname                  | author                  | language |
|---------------------------|-------------------------|----------|
| A Tale of Two Cities      | Charles Dickens         | English  |
| Oliver Twist              | Charles Dickens         | English  |
| Godaan                    | Premchand               | Hindi    |
| Chandrakanta              | Devaki Nandan Khatri    | Hindi    |
| Hamlet                    | William Shakespeare      | English  |
| The Merchant of Venice    | William Shakespeare      | English  |

주어진 데이터셋에서 bookname 필드는 각 레코드를 고유하게 식별하는데 사용될 수 있다.  
primary key는 테이블 내에서 각 레코드를 유일하게 식별할 수 있는 필드를 말하므로 주어진 데이터셋에서 bookname은 중복되지 않으며, 다른 도서들과 구별되는 유일한 값으로 사용될 수 있다. 따라서 bookname 필드가 이 데이터셋에서의 primary key로 선택될 수 있음을 알 수 있다.
