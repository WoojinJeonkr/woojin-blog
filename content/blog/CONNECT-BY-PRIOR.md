---
external: false
title: "CONNECT BY PRIOR"
date: 2023-11-14
---

## 1. CONNECT BY PRIOR

 Oracle 데이터베이스에서 사용되는 특별한 구문으로, 계층적인 데이터를 조회할 때 사용됩니다.
CONNECT BY PRIOR 구문을 사용하면 부모-자식 간의 관계를 기반으로 계층적인 쿼리를 작성할 수 있으며 트리 구조를 가진 데이터를 다룰 때 유용합니다.

## 2. 구문

```sql
SELECT * 
FROM table_name
START WITH condition
CONNECT BY PRIOR column_name = column_name;
```

1. table_name: 조회할 테이블의 이름
2. condition: 계층적인 조회를 시작할 때의 조건
3. column_name: 부모와 자식 간의 관계를 나타내는 열의 이름

## 3. 순방향과 역방향

CONNECT BY PRIOR는 주로 순방향으로 계층적인 데이터를 조회하는 데 사용됩니다.
순방향 계층적 쿼리는 부모에서 시작하여 자식으로 계속 진행하며 계층 구조를 탐색합니다.
예를 들어, 다음과 같은 부서 테이블이 있다고 가정해봅니다.

```sql
CREATE TABLE departments (
    department_id NUMBER PRIMARY KEY,
    department_name VARCHAR2(50),
    manager_id NUMBER,  -- 부서 관리자의 ID
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employees(employee_id)
);

INSERT INTO departments VALUES (1, 'IT', 101);
INSERT INTO departments VALUES (2, 'Finance', 102);
INSERT INTO departments VALUES (3, 'HR', 103);
INSERT INTO departments VALUES (4, 'Development', 104);
INSERT INTO departments VALUES (5, 'Testing', 105);
```

이 테이블에서 department_id는 부서를 고유하게 식별하고, manager_id는 각 부서의 관리자를 나타냅니다
이제 CONNECT BY PRIOR를 사용하여 부서 간의 계층적인 관계를 조회해보겠습니다.

```sql
SELECT department_id, department_name, manager_id
FROM departments
START WITH department_id = 1
CONNECT BY PRIOR department_id = manager_id;
```

이 쿼리는 IT 부서로 시작해서 CONNECT BY PRIOR를 사용하여 계층적인 구조를 조회합니다.
결과는 다음과 같이 나오게 됩니다. 여기서 CONNECT BY PRIOR department_id = manager_id 부분은 각 부서의 department_id와 그 부서의 관리자를 나타내는 manager_id를 비교하여 계층적인 관계를 설정하는데 사용됩니다.

| DEPARTMENT_ID | DEPARTMENT_NAME | MANAGER_ID |
|---------------|------------------|------------|
| 1             | IT               | 101        |
| 4             | Development      | 104        |
| 5             | Testing          | 105        |

위 결과로 IT 부서에서 시작하여 Development과 Testing 부서까지의 계층적인 관계를 보여준다는 것을 알 수 있습니다.

이제 역방향 계층적 쿼리를 보기 위해 Testing 부서에서 역방향으로 계층적인 관계를 조회해보겠습니다.

```sql
SELECT department_id, department_name, manager_id
FROM departments
START WITH department_id = 5
CONNECT BY PRIOR manager_id = department_id;
```

이 쿼리는 Testing 부서로 시작해서 CONNECT BY PRIOR를 사용하여 역방향으로 계층적인 구조를 조회합니다. 해당 SQL문을 실행해보면 결과는 다음과 같이 나오게 됩니다.

| DEPARTMENT_ID | DEPARTMENT_NAME | MANAGER_ID |
|---------------|------------------|------------|
| 5             | Testing          | 105        |
| 4             | Development      | 104        |
| 1             | IT               | 101        |

이 결과는 Testing 부서에서 시작하여 Development과 IT 부서까지의 계층적인 관계를 보여줍니다.

## 4. 결론

CONNECT BY 구문은 복잡한 계층적인 데이터를 조회하는 데 사용되며, PRIOR는 이전 행의 값을 참조하여 계층적인 관계를 설정하는 데에 중요한 역할을 합니다.
PRIOR 절에서 자식 열이 부모 열과 비교되면 순방향 계층적 쿼리, 부모 열이 자식 열과 비교되면 역방향 계층적 쿼리라고 할 수 있습니다.
