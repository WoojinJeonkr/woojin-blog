---
external : false
title : "Read in an Array"
tag : [Hackerrank, Linux]
date : 2024-03-31
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/bash-tutorials-read-in-an-array/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```bash
arr=()  # 빈 배열을 생성합니다.
while read -r line; do  # 한 줄씩 읽어들입니다.
  arr+=("$line")  # 배열에 각 줄을 추가합니다.
done
echo "${arr[@]}"  # 배열의 모든 요소를 출력합니다.
```
