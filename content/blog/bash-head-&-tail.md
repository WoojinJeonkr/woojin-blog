---
external : false
title : "bash head & tail"
tag : [Hackerrank, Linux]
date : 2024-03-01
---

## 1. head & tail 명령어

head와 tail은 리눅스 및 유닉스 시스템에서 파일의 앞부분(head)이나 뒷부분(tail)을 보여주는 명령어입니다. 이들은 주로 텍스트 파일이나 다른 종류의 파일에서 처음 몇 줄(head)이나 마지막 몇 줄(tail)을 읽어서 화면에 출력하는 데 사용됩니다.

### 1-1. head 명령어

head 명령어는 주로 파일의 처음 몇 줄을 보여줍니다. 기본적으로 head 명령어는 파일의 처음 10줄을 출력하지만, -n 옵션을 사용하여 출력할 줄 수를 지정하거나 -c 옵션을 사용하여 출력할 글자 수를 지정할 수 있습니다.

### 1-2. tail 명령어

tail 명령어는 파일의 끝부분을 보여줍니다. 기본적으로 tail 명령어는 파일의 마지막 10줄을 출력하지만, -n 옵션을 사용하여 출력할 줄 수를 지정하거나 -c 옵션을 사용하여 출력할 글자 수를 지정할 수 있습니다.

### 1-3. 파일의 중간 부분 출력하기

head와 tail 명령어를 이용하여 파일의 중간 부분만 출력되도록 작성할 수도 있습니다. 해당 내용은 아래의 문제를 통해 정확히 학습하실 수 있습니다.

## 2. Problem

head 명령어와 tail 명령어에 관련된 문제를 살펴보겠습니다.

- [Head of a Text File #1](https://www.hackerrank.com/challenges/text-processing-head-1/problem?isFullScreen=true)
- [Head of a Text File #2](https://www.hackerrank.com/challenges/text-processing-head-2/problem?isFullScreen=true)
- [Middle of a Text File](https://www.hackerrank.com/challenges/text-processing-in-linux---the-middle-of-a-text-file/problem?isFullScreen=true)
- [Tail of a Text File #1](https://www.hackerrank.com/challenges/text-processing-tail-1/problem?isFullScreen=true)
- [Tail of a Text File #2](https://www.hackerrank.com/challenges/text-processing-tail-2/problem?isFullScreen=true)

## 3. Solve

위에서 소개한 문제들의 해답은 다음과 같습니다.

```bash
# Head of a Text File #1
head -20
```

```bash
# Head of a Text File #2
head -c 20
```

```bash
# Middle of a Text File
head -22 | tail -11
```

```bash
# Tail of a Text File #1
tail -20
```

```bash
# Tail of a Text File #2
tail -c 20
```
