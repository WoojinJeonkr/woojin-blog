---
external : false
title : "Java Instanceof keyword"
tag : [Hackerrank, Java]
date : 2024-04-02
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/java-instanceof-keyword/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```java
import java.util.*;

class Student{}  // 학생 클래스 정의
class Rockstar{}  // 록스타 클래스 정의
class Hacker{}   // 해커 클래스 정의

public class InstanceOFTutorial{
   
  static String count(ArrayList mylist){
    int a = 0, b = 0, c = 0;
    for(int i = 0; i < mylist.size(); i++){
      Object element = mylist.get(i);
      if(element instanceof Student)  // 만약 요소가 학생이면
        a++;  // 학생 카운트 증가
      if(element instanceof Rockstar)  // 만약 요소가 록스타이면
        b++;  // 록스타 카운트 증가
      if(element instanceof Hacker)  // 만약 요소가 해커이면
        c++;  // 해커 카운트 증가
    }
    String ret = Integer.toString(a) + " " + Integer.toString(b) + " " + Integer.toString(c);  // 결과 문자열 생성
    return ret;  // 결과 반환
  }

  public static void main(String []args){
    ArrayList mylist = new ArrayList();  // 배열 리스트 생성
    Scanner sc = new Scanner(System.in);  // 스캐너 생성
    int t = sc.nextInt();  // 정수 입력
    for(int i=0; i<t; i++){
      String s = sc.next();  // 문자열 입력
      if(s.equals("Student"))  // 입력이 학생이면 학생 객체 추가
        mylist.add(new Student());
      if(s.equals("Rockstar"))  // 입력이 록스타이면 록스타 객체 추가
        mylist.add(new Rockstar());
      if(s.equals("Hacker"))  // 입력이 해커이면 해커 객체 추가
        mylist.add(new Hacker());
    }
    System.out.println(count(mylist));  // 카운트 출력
  }
}
```
