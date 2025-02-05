---
external : false
title : "Query max views files"
tag : [Programmers, SQL]
date : 2025-02-05
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/164671)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 이해 시간(문제 확인 ~ 첫 쿼리 작성 시점): 5분
2. 해결 시간(첫 쿼리 시도 ~ 문제 정답 확인): 10분
3. 코드 시도 횟수: 3회

## 3. Problem solving process

문제는 조회수가 가장 높은 게시물의 첨부파일 경로를 찾는 것입니다. 이를 위해서는 먼저 게시판 테이블에서 최대 조회수를 가진 게시물을 찾아야 합니다. 이는 서브쿼리를 통해 MAX 함수를 사용하여 구할 수 있습니다.

게시판과 파일 테이블은 BOARD_ID로 연결되어 있으므로, 두 테이블을 JOIN하여 필요한 정보를 가져올 수 있습니다. 파일 경로는 기본 경로인 '/home/grep/src/'에 게시글 ID로 된 디렉토리, 그리고 파일 정보(파일 ID, 이름, 확장자)를 순서대로 연결하여 구성합니다. 이는 CONCAT 함수를 사용하여 구현할 수 있습니다.

마지막으로 FILE_ID를 기준으로 내림차순 정렬을 적용하여 요구사항에 맞는 결과를 출력합니다.

## 4. Answer

```sql
-- 1. 파일 경로를 생성하여 조회
SELECT
  CONCAT('/home/grep/src/', f.BOARD_ID, '/', f.FILE_ID, f.FILE_NAME, f.FILE_EXT) AS FILE_PATH
FROM
  USED_GOODS_FILE f
  -- 2. 게시판과 파일 테이블을 BOARD_ID로 연결
  JOIN USED_GOODS_BOARD b
    ON f.BOARD_ID = b.BOARD_ID
WHERE
  -- 3. 조회수가 가장 높은 게시물 필터링
  b.VIEWS = (
    -- 3-1. 전체 게시물 중 최대 조회수 값을 찾음
    SELECT
      MAX(VIEWS)
    FROM
      USED_GOODS_BOARD
  )
-- 4. 파일 ID 기준으로 내림차순 정렬
ORDER BY
  f.FILE_ID DESC
```
