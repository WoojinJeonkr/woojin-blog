---
external : false
title : "Java Abstract Class"
tag : [Hackerrank, Java]
date : 2024-03-30
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/java-abstract-class/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Answer

```java
class MyBook extends Book {
  @Override
  void setTitle(String s) {
    title = s;
  }
}
```

## 3. Total Code

```java
import java.util.*;

java
Copy code
// Book 클래스는 추상 클래스로, 책의 제목을 나타내는 title 필드와 이를 설정하는 abstract setTitle 메서드를 가지고 있습니다.
abstract class Book{
  String title; // 책 제목을 나타내는 문자열

  abstract void setTitle(String s); // 제목을 설정하는 추상 메서드
  String getTitle(){ // 제목을 반환하는 메서드
    return title;
  }
}

// MyBook 클래스는 Book 클래스를 상속받아 구현된 클래스입니다.
// MyBook 클래스는 setTitle 메서드를 구현하여 책의 제목을 설정할 수 있습니다.
class MyBook extends Book {
  @Override
  void setTitle(String s) { // Book 클래스의 추상 메서드를 구현하여 제목을 설정합니다.
    title = s;
  }
}
public class Main{
    
  public static void main(String []args){
    // Book new_novel=new Book(); 이 줄은 오류를 발생시킵니다. Book은 추상 클래스이므로 인스턴스화할 수 없습니다.
    Scanner sc=new Scanner(System.in);
    String title=sc.nextLine(); // 사용자로부터 제목을 입력받습니다.
    MyBook new_novel=new MyBook(); // MyBook 객체를 생성합니다.
    new_novel.setTitle(title); // 입력받은 제목을 설정합니다.
    System.out.println("The title is: "+new_novel.getTitle()); // 제목을 출력합니다.
    sc.close();
    
  }
}

```
