---
external: false
title: "Java 1D Array (Part 2)"
tag: [Hackerrank, Java]
date: 2024-02-06
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/java-1d-array/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solution

```java
import java.util.*;

public class Solution {

  public static boolean canWin(int leap, int[] game, int pos) {
    // 게임을 이길 수 있는지 여부를 반환합니다.
    if (pos < 0 || game[pos] == 1) return false; // 현재 위치가 음수이거나 이미 방문한 위치인 경우 false를 반환합니다.
    if (pos+leap >= game.length || pos+1 >= game.length) return true; // 게임의 끝에 도달하면서 이기는 경우 true를 반환합니다.
    game[pos] = 1; // 현재 위치를 방문했다고 표시합니다.
    // 이전 위치, 앞으로 한 칸 이동한 위치, 혹은 leap만큼 이동한 위치로 재귀 호출하여 게임을 진행합니다.
    return canWin(leap, game, pos+1)
      || canWin(leap, game, pos+leap)
      || canWin(leap, game, pos-1);
  }

  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    int q = scan.nextInt(); // 테스트 케이스의 개수를 입력받습니다.
    while (q-- > 0) {
      int n = scan.nextInt(); // 게임의 크기를 입력받습니다.
      int leap = scan.nextInt(); // 한 번에 뛸 수 있는 최대 칸 수를 입력받습니다.

      int[] game = new int[n]; // 게임의 상태를 저장할 배열을 생성합니다.
      for (int i = 0; i < n; i++) {
        game[i] = scan.nextInt(); // 각 칸의 상태를 입력받습니다. (0: 빈 칸, 1: 장애물)
      }

      // canWin 메서드를 호출하여 게임의 결과를 출력합니다.
      System.out.println( (canWin(leap, game, 0)) ? "YES" : "NO" );
    }
    scan.close();
  }
}
```
