---
external : false
title : "bash tr"
tag : [Hackerrank, Linux]
date : 2024-02-24
---

## 1. tr

Linux 문법에서 "tr"은 Linux 및 다른 유닉스 기반 시스템에서 사용되는 텍스트 변환 유틸리티입니다.  
"tr"은 "translate"의 약자이며, 주어진 텍스트의 문자를 다른 문자로 변환하거나 제거하는 데 사용됩니다. 기본적으로 "tr"은 표준 입력에서 텍스트를 읽어들여 변환하고, 그 결과를 표준 출력으로 보냅니다.

```bash
tr [OPTIONS] SET1 [SET2]
```

여기서 OPTIONS는 변환 동작을 지정하거나 추가 기능을 활성화하는 데 사용되며 SET1은 변환할 문자 집합이며, SET2는 해당 문자 집합으로 변환될 대상입니다.  
예를 들어, 다음은 "hello"라는 문자열에서 'h'를 'H'로 변환하고 싶다면 다음과 같이 작성할 수 있습니다.

```bash
echo "hello" | tr 'h' 'H'
```

위의 명령은 "hello"를 입력으로 받아들여 'h'를 'H'로 변환하고, 결과로 "Hello"를 출력합니다.  
다음은 제거하는 경우를 살펴보겠습니다.  
만약 아래와 같이 작성된다면

```bash
echo "remove all spaces" | tr -d ' '
```

"remove all spaces"를 입력으로 받아들여 공백을 제거하고 "removeallspaces"를 출력합니다.

## 2. Problem

tr과 관련된 문제를 살펴보겠습니다.

- [다른 문자로 변환하는 경우](https://www.hackerrank.com/challenges/text-processing-tr-1/problem?isFullScreen=true)
- [특정 문자를 제거하는 경우](https://www.hackerrank.com/challenges/text-processing-tr-2/problem?isFullScreen=true)

## 3. Solve

위에서 소개한 문제들의 해답은 다음과 같습니다.

```bash
# 다른 문자로 변환하는 경우
tr '()' '[]'
```

```bash
# 특정 문자로 제거하는 경우
# 모든 소문자를 제거해야 한다
tr -d '[:lower:]'
```
