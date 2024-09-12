---
external : false
title : "Target number"
tag : [Programmers, Java]
date : 2024-09-12
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/43165)에서 확인하실 수 있습니다.

## 2. Problem solving process

주어진 문제는 숫자 배열에서 각 숫자를 더하거나 빼는 방법으로 목표 값(target)을 만들 수 있는 모든 경우의 수를 구하는 문제입니다. 이 문제는 **깊이 우선 탐색(DFS)**이라는 알고리즘을 사용하여 해결할 수 있습니다. DFS는 문제의 모든 가능한 경우를 탐색하는 방법으로, 이 문제에서는 숫자를 더하거나 빼는 두 가지 선택을 반복적으로 탐색해야 하기 때문에 적합한 방법입니다.

문제를 해결하는 과정은 다음과 같습니다. 먼저 숫자 배열의 첫 번째 숫자부터 시작하여, 해당 숫자를 더하거나 빼는 두 가지 연산을 선택합니다. 그런 다음 다음 숫자로 넘어가서, 또다시 더하거나 빼는 연산을 수행합니다. 이런 방식으로 배열의 끝까지 탐색을 계속합니다. 배열의 마지막 숫자까지 처리한 후에는, 지금까지 계산된 합계가 우리가 찾고자 하는 목표 값과 일치하는지 확인합니다. 만약 합계가 목표 값과 일치하면, 이는 목표 값을 만든 하나의 경우이므로 이를 카운트합니다.

이 과정은 재귀적으로 이루어집니다. 즉, 배열의 한 요소에 대해 더하거나 빼는 선택을 하고, 그 다음 요소에 대해 또다시 더하거나 뺄지를 선택하는 방식입니다. 배열의 모든 요소를 처리한 후, 계산된 결과가 목표 값과 일치하는지를 확인하고, 그에 따라 가능한 경우의 수를 반환합니다.

이러한 방식으로 배열의 모든 숫자에 대해 더하거나 빼는 모든 경우의 수를 탐색할 수 있습니다. DFS는 모든 경로를 탐색하므로 목표 값을 만들 수 있는 모든 경우를 빠짐없이 찾을 수 있습니다. 이 접근 방식을 통해 우리는 주어진 숫자들로 목표 값을 만들 수 있는 모든 방법을 정확하게 계산할 수 있습니다.

## 3. Answer

```java
class Solution {
  public int solution(int[] numbers, int target) {
    // DFS 탐색을 시작하는 함수 호출
    return dfs(numbers, target, 0, 0);
  }
  
  private int dfs(int[] numbers, int target, int depth, int sum) {
    // 모든 숫자를 다 사용한 경우
    if (depth == numbers.length) {
      // 합계가 타겟과 일치하면 1을 반환, 그렇지 않으면 0을 반환
      if (sum == target) {
        return 1;
      } else {
        return 0;
      }
    }
    
    // 현재 숫자를 더하거나 빼는 두 가지 선택지
    int add = dfs(numbers, target, depth + 1, sum + numbers[depth]);
    int subtract = dfs(numbers, target, depth + 1, sum - numbers[depth]);
    
    // 두 경우의 수를 더한 값을 반환
    return add + subtract;
  }
}
```
