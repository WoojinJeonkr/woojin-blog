---
external : false
title : "Fearless Draft Validation"
tag : [Python]
date : 2026-06-04
---

## 1. Problem

리그 오브 레전드(LoL)의 Bo5 경기에서 피어리스 밴(Fearless Draft) 규칙이 적용된다.

피어리스 밴 규칙은 다음과 같다.

1. 한 번이라도 선택된 챔피언은 이후 세트에서 다시 선택할 수 없다.
2. 같은 세트 내에서도 동일 챔피언을 두 번 선택할 수 없다.
3. 각 세트는 정확히 10개의 챔피언 선택으로 구성된다.

Bo5 경기 기록이 주어질 때, 피어리스 밴 규칙을 처음으로 위반한 세트 번호를 출력하시오.

모든 세트가 규칙을 만족하면

```text
VALID
```

를 출력한다.

## 2. Input

첫째 줄에 진행된 세트 수 K가 주어진다.

```text
K
```

이후 K개의 줄에 각 세트의 챔피언 선택 정보가 주어진다.

각 줄에는 공백으로 구분된 10개의 챔피언 이름이 주어진다.

```text
champion1 champion2 ... champion10
```

## 3. Limit

- 1 ≤ K ≤ 5
- 각 세트는 정확히 10개의 챔피언 이름으로 구성
- 챔피언 이름 길이: 1 ~ 20
- 챔피언 이름은 영문 대소문자로 구성

## 4. Output

규칙을 처음 위반한 세트 번호를 출력한다.

모든 세트가 유효하면

```text
VALID
```

를 출력한다.

## 5. Input Example

```text
3
Aatrox Ahri Jax LeeSin Gnar Azir Rell Vi KaiSa Alistar
Renekton Orianna Poppy Sejuani Jhin Nautilus Corki Ashe Leona Gragas
Ahri Syndra Wukong Rakan Xayah Ornn Viktor Braum Nocturne Gwen
```

## 6. Output Example

```text
3
```

## 7. Example Explanation

1세트에서

```text
Ahri
```

가 사용되었다.

3세트에서 다시

```text
Ahri
```

가 선택되었으므로 피어리스 밴 규칙을 위반한다.

최초 위반 세트는

```text
3
```

이므로 정답은

```text
3
```

이다.

이 문제는 시리즈 전체에서 사용된 챔피언 집합을 관리하며 중복 여부를 판정하는 구현(Implementation) 및 해시(Set) 문제이다.

## 8. Answer

```py
import sys

input = sys.stdin.readline

k = int(input())

used = set()

for set_no in range(1, k + 1):
    champions = input().split()

    current = set()

    invalid = False

    for champion in champions:
        if champion in current:
            invalid = True
            break

        if champion in used:
            invalid = True
            break

        current.add(champion)

    if invalid:
        print(set_no)
        sys.exit(0)

    used.update(current)

print("VALID")
```
