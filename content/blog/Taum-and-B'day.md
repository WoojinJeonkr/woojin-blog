---
external : false
title : "Taum and B'day"
tag : [Hackerrank, Java]
date : 2024-04-24
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/taum-and-bday/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Answer

```java
public static long taumBday(int b, int w, int bc, int wc, int z) {
  long minBlackPrice = Math.min(bc, wc + z);
  long minWhitePrice = Math.min(wc, bc + z);
  
  return (minBlackPrice * b) + (minWhitePrice * w);
}
```
