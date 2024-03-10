---
external : false
title : "bash sort"
tag: [Hackerrank, Linux]
date : 2024-02-25
---

## 1. sort 명령어

sort 명령어는 리눅스와 유닉스 시스템에서 사용되는 텍스트 데이터를 정렬하는 데 사용되는 명령어입니다. 주로 파일이나 표준 입력으로부터 데이터를 읽어들여 정렬한 후에 표준 출력으로 결과를 출력합니다.  
기본적으로 텍스트 기반으로 동작하며, 필요에 따라 숫자, 날짜 등을 정렬할 수 있습니다. 정렬 기준은 각 줄의 첫 번째 열부터 시작합니다. 필요에 따라 -k 옵션을 사용하여 정렬할 열을 지정할 수 있습니다.  
입력이 표준 입력으로부터 주어진 경우 Ctrl+D를 눌러 입력을 종료할 수 있습니다.  
sort 명령어는 다음과 같이 작성하여 사용합니다.

```bash
sort [옵션] [입력 파일]
```

- 옵션 : sort 명령어에는 다양한 옵션이 있으며, 데이터 정렬을 제어하는 데 사용됩니다
  - -r 또는 --reverse: 역순으로 정렬합니다

    ```bash
    sort -r file.txt
    ```

  - -n 또는 --numeric-sort: 숫자로 간주하여 정렬합니다

    ```bash
    sort -n numbers.txt
    ```

  - -f 또는 --ignore-case: 대소문자를 구분하지 않고 정렬합니다

    ```bash
    sort -f data.txt
    ```

  - -u 또는 --unique: 중복된 행을 하나로 축소합니다

    ```bash
    sort -u data.txt
    ```

- 입력 파일 : 정렬할 데이터를 포함한 파일의 경로를 지정합니다. 입력 파일을 지정하지 않으면 표준 입력에서 데이터를 읽어들입니다

## 2. Problem

- [Sort Command #1](https://www.hackerrank.com/challenges/text-processing-sort-1/problem?isFullScreen=true)
- [Sort Command #2](https://www.hackerrank.com/challenges/text-processing-sort-2/problem?isFullScreen=true)
- [Sort Command #3](https://www.hackerrank.com/challenges/text-processing-sort-3/problem?isFullScreen=true)
- [Sort Command #4](https://www.hackerrank.com/challenges/text-processing-sort-4/problem?isFullScreen=true)
- [Sort Command #5](https://www.hackerrank.com/challenges/text-processing-sort-5/problem?isFullScreen=true)

## 3. Solve

```bash
# Sort Command #1
sort
```

```bash
# Sort Command #2
sort -r
```

```bash
# Sort Command #3
sort -n
```

```bash
# Sort Command #4
sort -nr
```

```bash
# Sort Command #5
sort -nr -t$'\t' -k2
```
