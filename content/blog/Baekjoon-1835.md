---
external: false
title: "Baekjoon 1835"
tag: [Baekjoon, Java]
date: 2024-02-14
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/1835)에서 확인하실 수 있습니다.

## 2. Solve (memory: 26080KB, time: 316ms)

```java
import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Iterator;
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    Deque<Integer> deck = new ArrayDeque<>();  // 카드 덱 생성

    int numCards = scanner.nextInt();  // 카드의 개수 입력
    int remainingCards = numCards;  // 남은 카드 수

    deck.addFirst(numCards);  // 첫 번째 카드 추가

    // 입력 값이 1인 경우 처리
    if (numCards == 1) {
      System.out.println("1");
      return;
    } else {
      deck.addFirst(numCards - 1);
      while (true) {
        remainingCards--;  // 남은 카드 수 감소
        // 남은 카드 수만큼 반복하여 덱을 조작
        for (int i = remainingCards; i > 0; i--) {
          int last = deck.peekLast();
          deck.addFirst(last);
          deck.pollLast();
        }
        // 남은 카드 수가 1인 경우 반복 종료
        if (remainingCards == 1) break;
        deck.addFirst(remainingCards - 1);
      }
    }

    // 덱의 내용을 출력
    Iterator<Integer> iterator = deck.iterator(); 
    while (iterator.hasNext()) {
      System.out.print(iterator.next() + " ");
    }
    return;
  }
}
```
