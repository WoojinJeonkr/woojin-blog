---
external : false
title : "Hello World Beginners"
tag : [Python]
date : 2026-09-01
---

## 1. Problem

프로그래밍을 처음 시작한 초보자들이 온라인 강의에서 첫 번째 프로그램을 작성하고 있다.

대부분의 초보자는 가장 먼저 다음과 같은 문장을 출력하는 프로그램을 작성한다.

```text
Hello World
```

강사는 초보자들의 실습 결과를 확인하기 위해 여러 줄의 출력 기록을 하나의 로그로 수집했다.

각 로그는 초보자가 작성한 프로그램에서 출력된 문자열을 나타낸다.

각 로그는 다음 세 종류 중 하나이다.

```text
HELLO
WORLD
OTHER
```

`HELLO`는 `Hello`를 출력한 기록이고, `WORLD`는 `World`를 출력한 기록이며, `OTHER`는 그 외의 문자열을 의미한다.

초보자가 `Hello World`를 완성하기 위해서는 다음 두 단계를 순서대로 완료해야 한다.

```text
HELLO → WORLD
```

로그를 처음부터 순서대로 확인하면서 다음 규칙을 적용한다.

1. 아직 `HELLO`를 찾지 못했다면 `HELLO`가 등장하는 로그를 찾는다.
2. `HELLO`를 찾은 이후에는 `WORLD`가 등장하는 로그를 찾는다.
3. 현재 필요한 문자열과 다른 문자열은 무시한다.
4. `HELLO`를 여러 번 출력하더라도 첫 번째 `HELLO`를 찾은 이후에는 추가 효과가 없다.
5. `WORLD`를 찾는 순간 `Hello World`를 완성한 것으로 판단한다.

주어진 로그에서 `Hello World`를 완성할 수 있다면, **두 번째 단계인 `WORLD`를 처음 발견한 로그의 위치**를 출력한다.

모든 로그를 확인해도 `WORLD`를 찾지 못한다면 `-1`을 출력한다.

### 입력

첫째 줄에 정수 `N`이 주어진다.

둘째 줄에 `N`개의 문자열 `Log`가 공백으로 구분되어 주어진다.

각 `Log`는 다음 중 하나이다.

```text
HELLO
WORLD
OTHER
```

### 출력

`Hello World`를 완성할 수 있다면 `WORLD`를 발견한 로그의 위치를 출력한다.

완성할 수 없다면 `-1`을 출력한다.

### 제한사항

- `1 ≤ N ≤ 300,000`
- 각 `Log`는 `HELLO`, `WORLD`, `OTHER` 중 하나이다.
- 로그의 순서는 변경할 수 없다.

## 2. Input Example

### Example 1

```text
7
OTHER HELLO OTHER HELLO OTHER WORLD OTHER
```

### Example 2

```text
8
OTHER OTHER HELLO OTHER HELLO OTHER OTHER WORLD
```

## 3. Output Example

### 3.1. Example 1

```text
6
```

### 3.2. Example 2

```text
8
```

## 4. Explanation

### 4.1. Example 1

로그는 다음과 같다.

```text
1 : OTHER
2 : HELLO
3 : OTHER
4 : HELLO
5 : OTHER
6 : WORLD
7 : OTHER
```

처음에는 `HELLO`가 필요하다.

두 번째 로그에서

```text
HELLO
```

가 등장하므로 첫 번째 단계를 완료한다.

이후에는 `WORLD`를 찾아야 한다.

네 번째 로그의 `HELLO`는 이미 첫 번째 단계를 완료했기 때문에 무시한다.

여섯 번째 로그에서

```text
WORLD
```

가 등장하면서 두 번째 단계까지 완료된다.

따라서 정답은

```text
6
```

이다.

### 4.2. Example 2

로그는 다음과 같다.

```text
1 : OTHER
2 : OTHER
3 : HELLO
4 : OTHER
5 : HELLO
6 : OTHER
7 : OTHER
8 : WORLD
```

세 번째 로그에서 첫 번째 단계인 `HELLO`를 완료한다.

다섯 번째 로그의 `HELLO`는 이미 첫 번째 단계를 완료했으므로 무시한다.

여덟 번째 로그에서 `WORLD`가 등장하면서 두 번째 단계가 완료된다.

따라서 정답은

```text
8
```

이다.

이 문제는 로그를 처음부터 순서대로 확인하면서 현재 필요한 문자열이 등장했는지를 판단하면 해결할 수 있다.

처음에는 `HELLO`를 찾고, `HELLO`를 찾은 이후에는 `WORLD`를 찾는다.

`WORLD`를 발견하는 순간의 로그 위치가 정답이다.

모든 로그를 확인했지만 `WORLD`를 발견하지 못했다면 `Hello World`를 완성할 수 없으므로 `-1`을 출력한다.

각 로그를 최대 한 번씩만 확인하므로 전체 시간 복잡도는 `O(N)`이다.

## 5. Answer

```python
import sys

input = sys.stdin.readline

N = int(input())
Log = input().split()

stage = 0
answer = -1

for position in range(N):
    if stage == 0 and Log[position] == "HELLO":
        stage = 1

    elif stage == 1 and Log[position] == "WORLD":
        stage = 2
        answer = position + 1
        break

print(answer)
```
