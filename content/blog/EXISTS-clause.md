---
external: false
title: "EXISTS clause"
date: 2023-11-13
---

## 1. EXISTS절

EXISTS는 SQL에서 사용되는 조건절 중 하나로, 서브쿼리의 결과가 존재하는지 여부를 검사하는 데 사용됩니다. 주로 외부 쿼리와 서브쿼리 간의 관계를 확인하고자 할 때 활용됩니다.

## 2. 문법

```sql
SELECT column1, column2, ...
FROM table_name
WHERE EXISTS (subquery);
```

여기서 subquery는 서브쿼리로, EXISTS 절은 이 서브쿼리의 결과가 존재하는지 여부에 따라 외부 쿼리의 결과를 반환합니다.
만약 서브쿼리의 결과가 하나 이상의 행이면 EXISTS는 참(TRUE)을 반환하고, 결과가 없으면 거짓(FALSE)을 반환합니다.

## 3. 예제

### 3-1. CUSTOMERS 테이블

| customer_id | customer_name |
|-------------|---------------|
| 1           | John          |
| 2           | Alice         |
| 3           | Bob           |
| 4           | Charlie       |

### 3-2. ORDERS 테이블

| order_id | customer_id | order_amount |
|----------|-------------|--------------|
| 101      | 1           | 50.00        |
| 102      | 3           | 30.00        |
| 103      | 2           | 25.00        |
| 104      | 1           | 40.00        |
| 105      | 4           | 60.00        |

### 3-3. 주문이 있는 고객의 목록 검색 쿼리

예를 들어, 다음은 주문이 있는 고객의 목록을 검색하는 쿼리입니다.

```sql
SELECT customer_name
FROM customers
WHERE EXISTS (
    SELECT 1
    FROM orders
    WHERE orders.customer_id = customers.customer_id
);
```

이 쿼리는 customers 테이블에서 주문이 있는 고객의 이름을 반환합니다.
서브쿼리는 각 고객의 customer_id를 orders 테이블에서 찾고, 만약 주문이 존재하면 EXISTS는 참을 반환하고 해당 고객이 결과에 포함됩니다. SELECT 1은 실제로 어떤 값을 선택하는 것이 아니라, 서브쿼리의 결과가 비어있는지 여부만을 확인하기 위한 편의상의 표현입니다.
따라서 WHERE EXISTS 구문을 해석할 때, 주로 서브쿼리 내의 WHERE 절의 조건이 참인지 여부에 주목하는 것이 중요합니다. 만약 서브쿼리의 결과가 비어있지 않다면, EXISTS는 참(TRUE)을 반환하고, 그에 따라 외부 쿼리의 결과에 해당 조건이 적용됩니다.

각각의 customers 행에 대해서 다음과 같이 서브쿼리를 적용해봅시다.

1. John (customer_id = 1): 주문이 2개 있음 (order_id 101, 104)
2. Alice (customer_id = 2): 주문이 1개 있음 (order_id 103)
3. Bob (customer_id = 3): 주문이 1개 있음 (order_id 102)
4. Charlie (customer_id = 4): 주문이 없음

결과적으로, EXISTS 절은 각각의 행에 대해 주문이 존재하는 경우에 참(TRUE)을 반환하게 됩니다. 그래서 위의 쿼리의 결과는 다음과 같습니다.

| customer_name |
|---------------|
| John          |
| Alice         |
| Bob           |

### 3-4. WHERE절에 EXISTS가 아닌 NOT EXISTS라면?

```sql
SELECT customer_name
FROM customers
WHERE NOT EXISTS (
    SELECT 1
    FROM orders
    WHERE orders.customer_id = customers.customer_id
);
```

이 쿼리는 주문이 없는 고객의 이름을 반환합니다. 각각의 customers 행에 대해 서브쿼리를 적용하면

1. John (customer_id = 1): 주문이 있음
2. Alice (customer_id = 2): 주문이 있음
3. Bob (customer_id = 3): 주문이 있음
4. Charlie (customer_id = 4): 주문이 없음

따라서 NOT EXISTS는 주문이 없는 경우에 참(TRUE)을 반환하게 되므로 결과는 다음과 같습니다.

| customer_name |
|---------------|
| Charlie       |
