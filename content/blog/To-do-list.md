---
external : false
title : "To do list"
tag : [Programmers, Java]
date : 2024-08-27
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181885)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제를 해결하기 위해서는 우선 todo_list에서 아직 완료되지 않은 작업을 추출해야 합니다. 이를 위해 먼저 finished 배열을 순회하며 false로 표시된 작업의 개수를 셉니다. 이 값은 최종적으로 반환할 배열의 크기를 결정하는 데 사용됩니다.

그런 다음, false인 요소의 인덱스에 해당하는 todo_list의 항목을 새로운 배열에 저장합니다. 이 과정을 통해 todo_list에서 완료되지 않은 작업만을 포함한 배열을 생성할 수 있습니다.

## 3. Answer

```java
class Solution {
  public String[] solution(String[] todo_list, boolean[] finished) {
    int count = 0;
    // 완료되지 않은 일의 개수를 셉니다.
    for (int i = 0; i < finished.length; i++) {
      if (!finished[i]) {
        count++;
      }
    }
    
    // 완료되지 않은 일의 개수만큼 배열을 생성합니다.
    String[] answer = new String[count];
    int index = 0;
    // 완료되지 않은 일을 answer 배열에 추가합니다.
    for (int i = 0; i < finished.length; i++) {
      if (!finished[i]) {
        answer[index++] = todo_list[i];
      }
    }
    
    return answer;
  }
}
```
