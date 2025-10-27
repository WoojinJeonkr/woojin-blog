---
external : false
title : "Steel rods"
tag : [Beakjoon, Java]
date : 2025-10-27
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/10799)에서 확인하실 수 있습니다.

## 2. Answer

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String input = sc.nextLine();
        sc.close();

        Stack<Character> stack = new Stack<>();
        int pieces = 0; // 잘려진 쇠막대기 조각의 총 개수

        for (int i = 0; i < input.length(); i++) {
            char c = input.charAt(i);

            if (c == '(') {
                // 여는 괄호는 쇠막대기의 시작이거나 레이저의 일부
                stack.push(c);
            } else {
                // 닫는 괄호를 만났을 때
                stack.pop();
                if (input.charAt(i - 1) == '(') {
                    // 이전 문자가 '('이면 레이저
                    // 현재 쌓여 있는 막대기의 개수만큼 조각이 생김
                    pieces += stack.size();
                } else {
                    // 막대기의 끝을 의미하므로 조각 하나 추가
                    pieces += 1;
                }
            }
        }

        // 최종적으로 잘려진 쇠막대기 조각 개수 출력
        System.out.println(pieces);
    }
}
```
