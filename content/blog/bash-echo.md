---
external : false
title : "bash echo"
tag : [Linux, Hackerrank]
date : 2024-02-21
---

## 1. echo

echo는 터미널에서 문자열을 출력하는 명령어입니다. 주로 스크립트 파일이나 쉘에서 메시지를 표시하고 변수 값을 확인하는 데 사용됩니다.

echo 명령어는 다음과 같은 형식을 가집니다.

```bash
echo [옵션] [문자열]
```

echo 명령어로 변수를 출력할 때 문자열인 경우 변수 이름 앞에 $를 붙이고, 문자열이 아닌 경우 변수명을 사용합니다.

```bash
name="John"
echo "My name is $name"
```

이 명령은 터미널에 "My name is John"이라는 문자열을 출력합니다.

일반적으로, echo 명령어는 줄 바꿈 없이 문자열을 출력하는 데 사용됩니다. 만약 줄 바꿈을 원한다면 -e 옵션을 사용할 수 있습니다.

```bash
echo -e "Hello\nWorld"
```

이 명령은 "Hello"와 "World" 사이에 줄 바꿈을 추가하여 두 줄에 걸쳐 출력합니다.

## 2. Problem

아래는 linux Echo 문법과 관련된 문제들입니다.

- [Let's Echo](https://www.hackerrank.com/challenges/bash-tutorials-lets-echo/problem?isFullScreen=true)
- [A Personalized Echo](https://www.hackerrank.com/challenges/bash-tutorials---a-personalized-echo/problem?isFullScreen=true)

## 3. Solve

각 문제에 대한 해답은 다음과 같습니다.

```bash
# Let's Echo
echo 'HELLO'
```

```bash
# A Personalized Echo
read name
echo 'Welcome '$name
```
