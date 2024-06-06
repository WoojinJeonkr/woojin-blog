---
external : false
title : "bash unique"
tag : [Hackerrank, Linux]
date : 2024-02-26
---

## 1. uniq 명령어

uniq 명령어는 주로 텍스트 파일에서 중복된 라인을 제거하거나 인접한 중복 라인을 하나로 압축하는 데 사용됩니다.  
uniq 명령어의 기본적인 구문은 다음과 같습니다.

```bash
uniq [옵션] [파일명]
```

몇 가지 주요 옵션은 다음과 같습니다.

- `-c` 또는 `--count`: 각 라인이 몇 번 반복되는지 세어 출력합니다.
- `-d` 또는 `--repeated`: 중복된 라인만 출력합니다.
- `-i` 또는 `--ignore-case`: 대소문자를 구분하지 않습니다.
- `-s <N>` 또는 `--skip-fields=<N>`: 첫 번째 N 개의 필드를 무시합니다.
- `-u` 또는 `--unique`: 중복되지 않는 라인만 출력합니다.

만약 example.txt라는 파일에 다음과 같이 저장되어 있다고 가정해보겠습니다.

```textile
apple
banana
apple
orange
banana
orange
```

중복된 라인 제거하여 출력하려면 다음과 같이 작성합니다.

```bash
uniq example.txt
```

실행해보면 다음과 같은 결과를 얻을 수 있습니다.

```bash
apple
banana
apple
orange
banana
orange
```

중복되지 않는 라인만 출력하려면 다음과 같이 작성합니다.

```bash
uniq -u example.txt
```

실행해보면 다음과 같은 결과를 얻을 수 있습니다.

```bash
apple
```

중복된 라인의 개수와 함께 출력하려면 다음과 같이 작성합니다.

```bash
uniq -c example.txt
```

실행해보면 다음과 같은 결과를 얻을 수 있습니다.

```bash
2 apple
2 banana
2 orange
```

대소문자를 구분하지 않고 중복된 라인 제거하여 출력하려면 다음과 같이 작성합니다.

```bash
uniq -i example.txt
```

실행해보면 다음과 같은 결과를 얻을 수 있습니다.

```bash
apple
banana
orange
```

모든 라인의 첫 번째 단어가 같은 경우, 첫 번째 필드를 무시하고 중복된 라인을 제거하여 출력하려면 다음과 같이 작성합니다.

```bash
uniq -s 1 example.txt
```

실행해보면 다음과 같은 결과를 얻을 수 있습니다.

```bash
apple
orange
```

## 2. Problem

- ['Uniq' Command #1](https://www.hackerrank.com/challenges/text-processing-in-linux-the-uniq-command-1/problem?isFullScreen=true)
- ['Uniq' Command #2](https://www.hackerrank.com/challenges/text-processing-in-linux-the-uniq-command-2/problem?isFullScreen=true)
- ['Uniq' Command #3](https://www.hackerrank.com/challenges/text-processing-in-linux-the-uniq-command-3/problem?isFullScreen=true)
- ['Uniq' Command #4](https://www.hackerrank.com/challenges/text-processing-in-linux-the-uniq-command-4/problem?isFullScreen=true)

## 3. Solve

```bash
# 'Uniq' Command #1
uniq
```

```bash
# 'Uniq' Command #1
uniq -c | cut -c7- 
```

```bash
# 'Uniq' Command #1
uniq -i -c | cut -c7-
```

```bash
# 'Uniq' Command #1
uniq -u
```
