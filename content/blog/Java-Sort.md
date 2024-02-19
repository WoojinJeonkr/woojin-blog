---
external: false
title: "Java Sort"
tag: [Hackerrank, Java]
date: 2024-02-19
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/java-sort/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```java
import java.util.*;

class Student implements Comparable<Student>{ // 학생 클래스 정의 및 Comparable 인터페이스 구현
  private int id; // 학생 ID
  private String fname; // 학생 이름
  private double cgpa; // 학점
  public Student(int id, String fname, double cgpa) { // 생성자
    super();
    this.id = id;
    this.fname = fname;
    this.cgpa = cgpa;
  }
  public int getId() { // 학생 ID 반환
    return id;
  }
  public String getFname() { // 학생 이름 반환
    return fname;
  }
  public double getCgpa() { // 학점 반환
    return cgpa;
  }
  public int compareTo(Student o){ // Comparable 인터페이스의 compareTo 메서드 구현
    int c=Double.valueOf(cgpa).compareTo(o.cgpa); // 학점을 기준으로 비교
    if(c!=0)return -c; // 학점이 다르면 내림차순으로 정렬
    c=fname.compareTo(o.fname); // 학점이 같으면 이름을 기준으로 비교
    if(c!=0)return c; // 이름이 다르면 이름의 사전 순으로 정렬
    c=Integer.valueOf(id).compareTo(o.id); // 이름도 같으면 ID를 기준으로 비교
    return c; // ID의 오름차순으로 정렬
  }
}

class Solution{ // 해결 방법 클래스
  public static void main(String[] args){ // 메인 메서드
    Scanner in = new Scanner(System.in); // Scanner 객체 생성
    int testCases = Integer.parseInt(in.nextLine()); // 테스트 케이스 수 입력
    
    List<Student> studentList = new ArrayList<Student>(); // 학생 객체를 저장할 리스트 생성
    while(testCases>0){ // 테스트 케이스 수만큼 반복
      int id = in.nextInt(); // 학생 ID 입력
      String fname = in.next(); // 학생 이름 입력
      double cgpa = in.nextDouble(); // 학점 입력
      
      Student st = new Student(id, fname, cgpa); // 입력된 정보로 학생 객체 생성
      studentList.add(st); // 리스트에 학생 객체 추가
      
      testCases--; // 테스트 케이스 감소
    }
    Collections.sort(studentList); // 학생 객체를 정렬
    for(Student st: studentList){ // 정렬된 학생 객체 리스트 순회
      System.out.println(st.getFname()); // 학생 이름 출력
    }
  }
}
```
