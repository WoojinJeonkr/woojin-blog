---
external : false
title : "Sort strings by custom criteria"
tag : [Programmers, Java]
date : 2024-12-13
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/12915)에서 확인하실 수 있습니다.

## 2. Problem soving process

문제를 해결하기 위해서 가장 먼저 해야 할 일은 문자열 배열을 정렬할 기준을 설정하는 것입니다. 주어진 조건에 따르면, 배열을 n번째 문자를 기준으로 정렬해야 합니다. 즉, 각 문자열에서 n번째 문자를 추출하여 이를 기준으로 오름차순 정렬해야 합니다.

하지만 n번째 문자가 같은 경우도 있을 수 있습니다. 이 경우에는 그 이후의 문자열들을 사전순으로 정렬해야 한다는 점을 고려해야 합니다. 이를 해결하기 위해 첫 번째로 n번째 문자가 다르면 해당 문자를 기준으로 정렬하고, 두 번째로 n번째 문자가 같을 경우 전체 문자열을 사전순으로 비교하여 정렬해야 합니다.

## 3. Answer

```java
import java.util.Arrays;

class Solution {
  public String[] solution(String[] strings, int n) {
    // 문자열 배열을 n번째 문자를 기준으로 정렬
    Arrays.sort(strings, (a, b) -> {
      // n번째 문자가 다르면 해당 문자를 기준으로 오름차순 정렬
      if (a.charAt(n) != b.charAt(n)) {
        return a.charAt(n) - b.charAt(n);
      } else {
        // n번째 문자가 같으면 사전순으로 정렬
        return a.compareTo(b);
      }
    });
    // 정렬된 문자열 배열 반환
    return strings;
  }
}
```
