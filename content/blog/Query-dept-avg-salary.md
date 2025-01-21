---
external : false
title : "Query dept avg salary"
tag : [Programmers, SQL]
date : 2025-01-21
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/284529)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 문제 이해 시간: 7분
2. 문제 해결 시간: 10분
3. 디버깅 시간: 3분
4. 코드 시도 횟수: 2회

## 3. Problem solving process

주어진 문제는 두 테이블을 연결하여 부서별 평균 연봉을 계산하는 것이 핵심입니다. HR_DEPARTMENT와 HR_EMPLOYEES 테이블의 구조를 살펴보면, DEPT_ID를 기준으로 두 테이블을 연결할 수 있음을 파악할 수 있습니다.

테이블 조인을 위해 DEPT_ID를 기준으로 JOIN을 사용하되, 모든 부서의 정보가 필요하므로 일반 INNER JOIN이 적합합니다. 평균 연봉 계산을 위해서는 GROUP BY와 AVG 함수를 조합해야 하며, 소수점 처리를 위해 ROUND 함수가 필요합니다.

결과는 부서 ID, 영문 부서명, 평균 연봉 순으로 표시되어야 하며, 평균 연봉을 기준으로 내림차순 정렬이 필요합니다. 이를 위해 ORDER BY 절에서 계산된 평균 연봉 컬럼을 기준으로 DESC 옵션을 적용합니다. 또한 평균 연봉 컬럼명은 AVG_SAL로 지정해야 합니다.

## 4. Answer

```sql
SELECT  -- 1. 최종적으로 출력할 컬럼들을 선택
    d.DEPT_ID,
    d.DEPT_NAME_EN,
    ROUND(AVG(e.SAL)) AS AVG_SAL
  FROM  -- 2. 부서 테이블과 직원 테이블을 조인
    HR_DEPARTMENT d
    JOIN HR_EMPLOYEES e 
      ON d.DEPT_ID = e.DEPT_ID
  GROUP BY  -- 3. 부서 ID와 부서명으로 그룹화
    d.DEPT_ID, 
    d.DEPT_NAME_EN
  ORDER BY  -- 4. 평균 연봉을 기준으로 내림차순 정렬
    AVG_SAL DESC
```
