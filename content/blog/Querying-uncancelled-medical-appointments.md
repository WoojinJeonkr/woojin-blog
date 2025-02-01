---
external : false
title : "Querying uncancelled medical appointments"
tag : [Programmers, SQL]
date : 2025-02-01
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/132204)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 문제 이해 시간: 5분
2. 문제 해결 시간: 8분
3. 코드 시도 횟수: 2회

## 3. Problem solving process

주어진 문제는 환자, 의사, 예약 정보가 각각 다른 테이블에 분산되어 있는 구조입니다. 예약 테이블이 환자번호와 의사ID를 통해 다른 두 테이블과 연결되어 있으므로, 이를 기준으로 데이터를 통합해야 합니다.

출력해야 할 정보인 예약번호, 환자이름, 환자번호, 진료과코드, 의사이름, 진료예약일시는 세 테이블에 걸쳐 있으며, 이 중 예약 테이블이 가장 중심이 됩니다. 데이터 추출 시 2022년 4월 13일이라는 날짜 조건, 흉부외과라는 진료과 조건, 그리고 취소되지 않은 예약이라는 상태 조건을 고려해야 하며, NULL 값 처리도 필요합니다.

최종적으로 시간 데이터는 마이크로초까지 표시되어야 하고, 이를 기준으로 오름차순 정렬이 필요하다는 점을 고려하여 쿼리를 설계해야 합니다.

## 4. Answer

```sql
-- 1. APPOINTMENT, PATIENT, DOCTOR 테이블 조인 후 조건에 맞는 데이터 조회
-- 2. WHERE 절로 흉부외과, 날짜, 취소되지 않은 예약 필터링
-- 3. 진료예약일시 기준 오름차순 정렬
SELECT 
  A.APNT_NO,                   -- 진료예약번호
  P.PT_NAME,                   -- 환자이름
  A.PT_NO,                     -- 환자번호
  A.MCDP_CD,                   -- 진료과코드
  D.DR_NAME,                   -- 의사이름
  A.APNT_YMD AS "APNT_YMD"    -- 진료예약일시
FROM 
  APPOINTMENT A
  JOIN PATIENT P ON A.PT_NO = P.PT_NO            -- 환자 정보 조인
  JOIN DOCTOR D ON A.MDDR_ID = D.DR_ID           -- 의사 정보 조인
WHERE 
  A.MCDP_CD = 'CS'                               -- 흉부외과 진료만 선택
  AND DATE(A.APNT_YMD) = '2022-04-13'           -- 2022년 4월 13일 예약만 선택
  AND (A.APNT_CNCL_YN = 'N' 
    OR A.APNT_CNCL_YN IS NULL)                   -- 취소되지 않은 예약만 선택
ORDER BY 
  A.APNT_YMD ASC                                 -- 진료예약일시 오름차순 정렬
```
