---
external : False
title : "Ponkemon"
tag : [Programmers, Python]
date : 2025-09-11
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/1845?language=java)에서 확인하실 수 있습니다.

## 2. Answer

```java
import java.util.*;

class Solution {
    public int solution(int[] nums) {
        // 고유한 폰켓몬 종류 수를 세기 위해 Set 사용
        Set<Integer> uniqueTypes = new HashSet<>();
        for (int num : nums) {
            uniqueTypes.add(num);
        }

        // N은 배열의 길이, 선택할 수 있는 최대 수는 N / 2
        int maxSelectable = nums.length / 2;

        // 최종 결과는 고유 종류 수와 N/2 중 작은 값
        return Math.min(uniqueTypes.size(), maxSelectable);
    }
}
```
