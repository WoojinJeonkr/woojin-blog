---
external : false
title : "Skill tree"
tag : [Programmers, Java]
date : 2024-09-02
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/49993#fn1)에서 확인하실 수 있습니다.

## 2. Problem solving process

주어진 문제는 특정 순서로 스킬을 배워야 하는 게임 시스템에서, 가능한 스킬트리의 개수를 구하는 것입니다. 각 스킬트리는 주어진 선행 스킬 순서를 따라야 하며, 그 순서를 따르지 않는 스킬트리는 불가능한 스킬트리로 간주됩니다.

이 문제를 해결하기 위해 먼저 각 스킬트리에서 선행 스킬 순서에 포함된 스킬들만 추출하여 새로운 문자열을 만듭니다. 이 단계에서는 스킬트리에서 주어진 선행 스킬에 해당하는 부분만 선택하여, 그 순서가 정확하게 지켜지는지를 판단하기 위한 기초를 마련합니다.

그런 다음, 이 추출된 문자열이 주어진 선행 스킬 순서의 처음부터 시작하는지 확인합니다. 만약 그렇다면 해당 스킬트리는 올바른 순서를 따르는 것이므로 가능한 스킬트리로 간주하고, 그렇지 않다면 불가능한 스킬트리로 간주합니다.

마지막으로, 모든 스킬트리에 대해 이러한 검사를 마친 후 가능한 스킬트리의 개수를 반환하게 됩니다.

## 3. Answer

```java
class Solution {
  public int solution(String skill, String[] skill_trees) {
    int answer = 0; // 가능한 스킬트리의 개수를 저장할 변수
    
    // 각 스킬트리에 대해 검사
    for (String skill_tree : skill_trees) {
      StringBuilder skillOrder = new StringBuilder(); // 선행 스킬 순서만을 담을 StringBuilder
      
      // 스킬트리에서 선행 스킬 순서에 해당하는 스킬만 추출
      for (int i = 0; i < skill_tree.length(); i++) {
        char c = skill_tree.charAt(i);
        if (skill.indexOf(c) != -1) { // 스킬이 선행 스킬에 포함되어 있는지 확인
          skillOrder.append(c); // 포함되어 있다면 skillOrder에 추가
        }
      }
      
      // 추출된 스킬이 선행 스킬 순서를 따르는지 확인
      if (skill.indexOf(skillOrder.toString()) == 0) {
        answer++; // 올바른 순서를 따를 경우 가능한 스킬트리로 간주하고 개수 증가
      }
    }
    
    return answer; // 가능한 스킬트리의 총 개수를 반환
  }
}
```
