---
external: false
title: "LPAD & RPAD"
date: 2023-11-17
---

## 1. LPAD

### 1-1. 정의

LPAD는 SQL(Structured Query Language)에서 사용되는 함수 중 하나로, 문자열을 왼쪽으로 특정 길이만큼 패딩(채우기)하는 데에 쓰입니다.
주로 문자열을 일정한 길이로 맞추거나 출력 형식을 정리하는 데에 유용합니다.

### 1-2. 구문

```sql
LPAD(string, length, pad_string)
```

- string: 패딩이 적용될 대상 문자열입니다.
- length: 최종적으로 만들어질 문자열의 전체 길이입니다.
- pad_string: string을 패딩하기 위해 사용할 문자열입니다. 이 문자열이 string의 왼쪽에 반복적으로 추가됩니다.

### 1-3. 예제

```sql
SELECT LPAD('Hello', 10, '*') AS padded_string;
```

위와 같은 SQL의 경우 다음과 같이 출력됩니다.

| padded_string |
|---------------|
| ********Hello |

여기서 string의 length가 두번째 인수인 length와 동일할 경우 pad_string이 왼쪽에 추가되지 않고 그냥 string이 출력되므로 이러한 점을 주의해야 합니다.

## 2. RPAD

### 2-1. 정의

RPAD는 LPAD와 유사하지만 문자열을 오른쪽으로 패딩(채우기)합니다.

### 2-2. 구문

```sql
RPAD(string, length, pad_string)
```

- string: 패딩이 적용될 대상 문자열입니다.
- length: 최종적으로 만들어질 문자열의 전체 길이입니다.
- pad_string: string을 패딩하기 위해 사용할 문자열입니다. 이 문자열이 string의 오른쪽에 반복적으로 추가됩니다.

### 2-3. 예제

```sql
SELECT RPAD('Hello', 10, '*') AS padded_string;
```

위와 같은 SQL의 경우 다음과 같이 출력됩니다.

| padded_string |
|---------------|
| Hello*****    |
