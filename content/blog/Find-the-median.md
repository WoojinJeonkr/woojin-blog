---
external : false
title : "Find the median"
tag : [Hackerrank, PHP]
date : 2025-10-16
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/find-the-median/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Answer

```php
<?php

/**
 * 배열의 중앙값(median)을 찾는 함수.
 * 배열의 크기(n)는 항상 홀수입니다.
 *
 * @param array $arr 정수 배열
 * @return int 중앙값
 */
function findMedian(array $arr): int {
    // 1. 배열의 크기를 구합니다.
    $n = count($arr);
    
    // 2. 중앙값의 인덱스를 계산합니다.
    // n이 홀수일 때, 중앙값은 (n - 1) / 2 인덱스에 위치합니다.
    $median_index = floor(($n - 1) / 2);

    // 3. 배열을 오름차순으로 정렬합니다.
    sort($arr);

    // 4. 중앙 인덱스에 해당하는 원소를 반환합니다.
    return $arr[$median_index];
}

// 파일 포인터를 환경 변수 "OUTPUT_PATH"로 지정된 경로에 쓰기 모드("w")로 엽니다.
$fptr = fopen(getenv("OUTPUT_PATH"), "w");

// 첫 번째 줄에서 배열의 크기(n)를 읽어 정수형으로 변환합니다.
$n = intval(trim(fgets(STDIN)));

// 두 번째 줄에서 배열 원소들을 문자열로 읽어옵니다.
$arr_temp = rtrim(fgets(STDIN));

// 읽어온 문자열을 공백(' ') 기준으로 분리하고, 각 요소를 정수형으로 변환하여 배열 $arr을 생성합니다.
$arr = array_map('intval', preg_split('/ /', $arr_temp, -1, PREG_SPLIT_NO_EMPTY));

// findMedian 함수를 호출하여 중앙값을 계산합니다.
$result = findMedian($arr);

// 계산된 중앙값($result)을 파일에 쓰고 줄바꿈 문자를 추가합니다.
fwrite($fptr, $result . "\n");

// 파일 포인터를 닫습니다.
fclose($fptr);
```
