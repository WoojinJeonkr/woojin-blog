---
external : false
title : "Single player Tic Tac Toe"
tag : [Programmers, Java]
date : 2024-07-16
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/160585)에서 확인하실 수 있습니다.

## 2. Answer

```java
class Solution {
  public int solution(String[] board) {
    int Ocnt = 0;
    int Xcnt = 0;

    // O와 X의 개수를 센다.
    for (String row : board) {
      Ocnt += countChar(row, 'O');
      Xcnt += countChar(row, 'X');
    }

    // 'X'가 'O'보다 많으면 규칙 위반
    if (Xcnt > Ocnt || Ocnt > Xcnt + 1) {
      return 0;
    }

    boolean Owin = hasWin(board, 'O');
    boolean Xwin = hasWin(board, 'X');

    // O가 완성되었을 때 X가 O의 개수와 같으면 규칙 위반
    if (Owin && Ocnt == Xcnt) {
      return 0;
    }
    // X가 완성되었을 때 O가 X보다 1개 많으면 규칙 위반
    if (Xwin && Ocnt > Xcnt) {
      return 0;
    }

    return 1;
  }

  private static int countChar(String str, char ch) {
      return (int) str.chars().filter(c -> c == ch).count();
  }

  private static boolean hasWin(String[] board, char ch) {
    // 가로 검사
    for (int i = 0; i < 3; i++) {
      if ((board[i].charAt(0) == ch && board[i].charAt(1) == ch && board[i].charAt(2) == ch) ||
        (board[0].charAt(i) == ch && board[1].charAt(i) == ch && board[2].charAt(i) == ch)) {
        return true;
      }
    }
    
    // 대각선 검사
    if ((board[0].charAt(0) == ch && board[1].charAt(1) == ch && board[2].charAt(2) == ch) ||
      (board[0].charAt(2) == ch && board[1].charAt(1) == ch && board[2].charAt(0) == ch)) {
      return true;
    }
    return false;
  }
}
```
