---
external : false
title : "Database Normalization 10"
tag : [Hackerrank, Database]
date : 2024-05-04
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/database-normalization-10/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

문제에서는 피자 배달에 관련된 정보를 저장하는 테이블이 주어졌고, 이를 Fourth Normal Form(4NF)으로 변환하여 두 개의 테이블로 나누었다고 합니다. 새로운 테이블은 두 개의 열과 N개의 행을 갖고 있다고 합니다. 두 테이블은 동일한 수의 행을 가지고 있습니다.
우선, 주어진 정보를 이용하여 피자 가게와 해당 가게의 피자 크러스트 종류를 나타내는 테이블을 만들 수 있습니다. 이 테이블은 다음과 같이 나타낼 수 있습니다.

```textile
Restaurant  Crust
-------------------
X Pizza     Thick
X Pizza     Stuffed
Papa Pizza  Thin
Papa Pizza  Stuffed
F1 Pizza    Thick
F1 Pizza    Thin
```

그 다음, 두 번째 테이블은 피자 가게와 해당 가게의 배달 지역을 나타내며 이 테이블은 다음과 같이 나타낼 수 있습니다.

```textile
Restaurant  Delivery Area
---------------------------
X Pizza     Whitefield
X Pizza     Greenville
X Pizza     Capital
Papa Pizza  Capital
F1 Pizza    Whitefield
F1 Pizza    Greenville
```

두 테이블은 모두 N개의 행을 가지고 있으며, 여기서 N은 각 테이블의 행 수입니다. 따라서 테이블 1과 테이블 2의 행 수가 동일하다고 했으므로, N은 6이 됩니다.

## 3. Answer

```textile
6
```
