---
external : false
title : "COALESCE and CASE WHEN"
tag : [SQL]
date : 2025-03-31
---

SQL을 사용하다 보면 NULL 값 처리는 피할 수 없는 과제입니다. 데이터가 누락되었거나 비어 있는 경우를 처리하지 않으면, 잘못된 결과를 초래하거나 쿼리가 실패할 수 있습니다.  
이때 가장 유용한 함수 중 두 가지가 바로 COALESCE와 CASE WHEN입니다.  
이번 글에서는 COALESCE와 CASE WHEN의 차이점, 사용 시 주의사항, 그리고 데이터 정합성을 유지하는 방법에 대해 알아보겠습니다.

## 1. COALESCE와 CASE WHEN의 차이점

### 1. COALESCE란?

COALESCE는 NULL 값을 대체하기 위한 SQL 함수로, 주어진 값들 중 첫 번째로 NULL이 아닌 값을 반환합니다. 간결하고 직관적인 구문 덕분에 NULL 처리에 자주 사용됩니다.

#### 1-1. 구문

```sql
COALESCE(expression1, expression2, ...)
```

#### 1-2. 작동 방식

- 왼쪽에서 오른쪽으로 값을 평가하며, 첫 번째로 NULL이 아닌 값을 반환합니다.
- 모든 값이 NULL이면 NULL을 반환합니다.

#### 1-3. 예제

```sql
SELECT COALESCE(NULL, '', 'Default Value'); -- 결과: ''
SELECT COALESCE(NULL, NULL, 'Default Value'); -- 결과: 'Default Value'
```

### 2. CASE WHEN이란?

CASE WHEN은 조건부 로직을 구현할 때 사용하는 SQL 구문으로, if-then-else와 비슷한 역할을 합니다. COALESCE보다 더 복잡한 조건을 처리할 수 있습니다.

#### 2-1. 구문

```sql
CASE WHEN 조건1 THEN 결과1
     WHEN 조건2 THEN 결과2
     ...
     ELSE 결과N
END
```

#### 2-2. 작동 방식

- 위에서 아래로 조건을 평가하며, 첫 번째로 참(TRUE)인 조건의 결과를 반환합니다.
- 모든 조건이 거짓(FALSE)이면 ELSE 절의 결과를 반환합니다.
- ELSE 절이 생략되면 NULL을 반환합니다.

```sql
SELECT CASE WHEN column IS NULL THEN 'No Value'
            WHEN column = '' THEN 'Empty String'
            ELSE column END AS processed_column
FROM table;
```

## 3. COALESCE와 CASE WHEN의 사용 사례

### 3-1. COALESCE의 활용

- NULL 값 대체

```sql
SELECT COALESCE(phone_number, 'No phone number') AS contact_phone
FROM contacts;
```

- 여러 열에서 첫 번째 유효값 찾기

```sql
SELECT COALESCE(email, alternate_email, 'No email') AS contact_email
FROM users;
```

- 기본값 설정: 계산 과정에서 NULL 값으로 인해 오류가 발생하지 않도록 기본값을 설정합니다.

```sql
SELECT price * COALESCE(discount_rate, 1) AS final_price
FROM products;
```

### 3-2. CASE WHEN의 활용

- 데이터 분류

```sql
SELECT CASE WHEN age < 18 THEN 'Minor'
            WHEN age BETWEEN 18 AND 64 THEN 'Adult'
            ELSE 'Senior' END AS age_group
FROM users;
```

- 조건부 계산

```sql
SELECT CASE WHEN salary > 50000 THEN salary * 0.9 -- 세금 적용
            ELSE salary END AS adjusted_salary
FROM employees;
```

- 복잡한 비즈니스 로직 적용: 여러 조건을 결합하여 데이터를 처리할 때 유용합니다.

## 4. 두 구문 사용 시 주의사항

### 4-1. 데이터 타입 일관성 유지

COALESCE와 CASE WHEN 모두 반환되는 값들의 데이터 타입이 일관되도록 작성해야 합니다. 서로 다른 데이터 타입이 혼합되면 암시적 변환이 발생해 성능 저하나 오류가 발생할 수 있습니다.

```sql
-- 잘못된 예 (타입 불일치)
SELECT COALESCE(numeric_column, 'No Value') FROM table;

-- 올바른 예 (타입 일치)
SELECT COALESCE(numeric_column, 0) FROM table;
```

### 4-2. NULL 비교 방식 주의

CASE WHEN에서 NULL 값을 비교할 때는 반드시 IS NULL 조건을 사용해야 합니다. `=` 연산자는 NULL 값을 정확히 처리하지 못합니다.

```sql
-- 잘못된 예 (NULL 비교 불가)
CASE column WHEN NULL THEN 'No Value' ELSE 'Has Value' END

-- 올바른 예 (IS NULL 사용)
CASE WHEN column IS NULL THEN 'No Value' ELSE 'Has Value' END
```

### 4-3. ELSE 절 명시적으로 작성하기

CASE WHEN에서 ELSE를 생략하면 자동으로 ELSE NULL로 처리됩니다. 의도치 않은 NULL 값 반환을 방지하려면 항상 명시적으로 ELSE 절을 작성하는 것이 좋습니다.

```sql
-- 명시적 ELSE 사용으로 NULL 방지
CASE WHEN condition THEN value1
     ELSE value2 END
```

### 4-4. 복잡한 중첩 구조 피하기

COALESCE와 CASE WHEN을 중첩하여 사용할 때는 가독성과 디버깅 가능성을 고려해야 합니다. 너무 복잡한 구조는 유지보수를 어렵게 만들 수수 있습니다.

## 5. 데이터 정합성을 유지하는 방법

데이터 정합성(Data Consistency)​​은 어떤 데이터들이 값이 서로 일치하는 상태를 뜻합니다. COALESCE와 CASE WHEN을 사용하여 데이터 정합성을 유지하려면 다음 사항들을 고려해야 합니다.

### 5-1. 적절한 기본값 설정

NULL 값을 대체할 기본값은 데이터 컨텍스트에 맞아야 합니다. 기본값이 실제 데이터와 혼동되지 않도록 신중하게 선택해야 합니다.

```sql
SELECT COALESCE(status, 'Unknown') AS order_status
FROM orders;
```

### 5-2. JOIN 연산 시 NULL 처리 주의

JOIN 조건에서 NULL 값은 예상치 못한 결과를 초래할 수 있습니다. JOIN 전에 COALESCE를 사용하여 NULL 값을 적절히 대체하면 안전합니다.

```sql
SELECT A.*, B.*
FROM TableA A
JOIN TableB B
ON COALESCE(a.key, 'default') = COALESCE(b.key, 'default');
```

### 5-3. 반복 평가 방지하기

COALESCE나 CASE WHEN 내부에 하위 쿼리나 비결정적 함수(GETDATE() 등)를 포함하면 같은 쿼리 내에서도 다른 결과가 반환될 수 있습니다. 이를 방지하려면 하위 쿼리를 외부로 분리해야 합니다.

```sql
-- 비권장: 하위 쿼리가 두 번 평가될 수 있음
SELECT COALESCE((subquery), default_value);

-- 권장: 하위 쿼리를 외부로 분리하여 재사용성 향상
WITH CTE AS (
  SELECT (subquery) AS value FROM table_name
)
SELECT COALESCE(value, default_value) FROM CTE;
```

## 결론

COALESCE와 CASE WHEN은 SQL에서 데이터를 처리하고 정제하는 데 없어서는 안 될 함수입니다. 각각의 기능과 한계를 이해하고 적절히 활용하면 더 안전하고 효율적인 쿼리를 작성할 수 있습니다.

- 단순한 NULL 값 대체에는 COALESCE를,
- 복잡한 조건부 로직에는 CASE WHEN을 사용하는 것이 일반적입니다.
