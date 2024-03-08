---
external : false
title : "Java Method Overriding"
tag : [Hackerrank, Java]
date : 2024-03-08
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/java-method-overriding/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```java
import java.util.*;

class Sports {

  // 스포츠의 이름을 반환하는 메서드
  String getName() {
    return "Generic Sports";
  }

  // 팀 멤버의 수를 가져오는 메서드
  void getNumberOfTeamMembers() {
    System.out.println("Each team has n players in " + getName());
  }
}

class Soccer extends Sports {
  @Override
  // 슈퍼 클래스의 getName 메서드를 오버라이드하여 축구 클래스의 이름을 반환하는 메서드
  String getName() {
    return "Soccer Class";
  }

  // 팀 멤버의 수를 가져오는 메서드를 오버라이드하여 축구의 선수 수를 지정
  @Override
  void getNumberOfTeamMembers() {
    System.out.println("Each team has 11 players in " + getName());
  }
}

public class Solution {

  public static void main(String[] args) {
    Sports c1 = new Sports();
    Soccer c2 = new Soccer();
    System.out.println(c1.getName());
    c1.getNumberOfTeamMembers();
    System.out.println(c2.getName());
    c2.getNumberOfTeamMembers();
  }
}
```
