---
external : false
title : "The largest number"
tag : [Programmers, Java]
date : 2024-08-23
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/42746)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 주어진 정수 배열을 재배치하여 가장 큰 수를 만드는 문제입니다. 접근 방법은 간단한 정렬 문제로 볼 수 있지만, 정렬 기준을 어떻게 설정하느냐가 핵심입니다. 일반적인 숫자 정렬 방식으로는 원하는 결과를 얻기 어렵기 때문에, 각 숫자를 문자열로 변환하여 특정한 규칙에 따라 정렬하는 방법을 사용해야 합니다.

먼저, 주어진 정수 배열의 각 요소를 문자열로 변환합니다. 문자열로 변환한 후에는 각 문자열을 조합하여 가장 큰 수를 만들 수 있는 순서를 찾아야 합니다. 두 문자열이 있을 때, 이들을 결합하여 두 가지 가능한 조합을 만들 수 있습니다. 예를 들어, 문자열 "9"와 "34"가 있을 때, "934"와 "349"를 비교하여 더 큰 값을 선택합니다. 이 비교 과정을 모든 문자열에 대해 수행하여 내림차순으로 정렬합니다.

정렬된 결과를 하나의 문자열로 결합하여 최종 결과를 만듭니다. 이때, 결합된 문자열의 첫 번째 문자가 '0'인 경우, 이는 모든 숫자가 0인 경우이므로 결과는 "0"이 되어야 합니다. 이를 처리한 후, 최종적으로 가장 큰 수를 나타내는 문자열을 반환합니다.

## 3. Answer

```java
import java.util.Arrays;
import java.util.Comparator;

class Solution {
  public String solution(int[] numbers) {
    // numbers 배열을 문자열 배열로 변환
    String[] numStrs = new String[numbers.length];
    for (int i = 0; i < numbers.length; i++) {
      numStrs[i] = String.valueOf(numbers[i]);
    }

    // 문자열 배열을 커스텀 Comparator를 사용하여 정렬
    Arrays.sort(numStrs, new Comparator<String>() {
      public int compare(String o1, String o2) {
        String order1 = o1 + o2;
        String order2 = o2 + o1;
        return order2.compareTo(order1); // 내림차순 정렬
      }
    });

    // 정렬된 문자열들을 합쳐서 결과를 만듦
    StringBuilder answer = new StringBuilder();
    for (String num : numStrs) {
      answer.append(num);
    }

    // 모든 숫자가 "0"인 경우, 결과는 "0"이어야 함
    if (answer.charAt(0) == '0') {
      return "0";
    }

    return answer.toString();
  }
}
```
