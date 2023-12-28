---
external: false
title: "Serializable"
date: 2023-03-10
---

## 1. 직렬화란?

```textile
자바 시스템 내부에서 사용되는 객체 또는 데이터를 외부의 자바 시스템에서도 사용할 수 있도록 바이트(byte) 형태로 데이터 변환하는 기술과 바이트로 변환된 데이터를 다시 객체로 변환하는 기술
```

### 1-1. 사용 방법

```java
public calss Member implements Serializable{
  private String name;
  private String email;

  public Member(String name, String email, int age){
    this.name = name;
    this.email = email;
  }

  @Override
  public String toString(){
    return String.format("Member{name='%s', email='%s'}", name, email)
  }
}
```

### 1-2. 직렬화(Serialize) 방법 - java.io.ObjectOutputStream

```java
public static void main(String[] args){
    Member member = new Memer("developer", "developer@develop.com");
  byte[] serializeMember;
  try(ByeArrayOutputStream baos= new ByteArrayOutputStream()){
    try(ObjectOutputStream oos= new ObjectOutputStream(baos)){
      oos.writeObject(member);
      // serializedMember -> 직렬화된 member 객체
      serializedMember = baos.toByteArray();
    }
  }
  //바이트 배열로 생성된 직렬화 데이터를 base64로 변환
  System.out.println(Base64.getEncoder().encodeToString(serializedMember));
}
```

### 1-3. 역직렬화(Deserialize) 방법 - java.io.ObjectInputStream 사용하기

```java
public static void main(String[] args){
  //직렬화 예제에서 생성된 base64 데이터
  String base64Member="...생략";
  byte[] serializedMember = Base64.getDecoder().decode(base64Member);
  try(ByteArrayInputStream bais = new ByteArrayInputStream(serializedMember)){
    try(ObjecInputStream ois = new ObjectInputStream(bais)){
      //역직렬화된 member객체를 읽어온다.
      Object objectMember = ois.readObject();
      Member member = (Member)objectMember;
      System.out.println(member);
    }
  }
}
```

## 2. 직렬화를 사용하는 이유

### 2-1. Why?

복잡한 데이터 구조의 클래스의 객체라도 직렬화 기본 조건만 지키면 큰 작업 없이 바로 직렬화, 역직렬화가 가능하며 데이터 타입이 자동으로 맞춰지기 때문에 관련 부분을 큰 신경을 쓰지 않아도 된다.

### 2-2. Where?

- 서블릿 세션(Servlet Session): 세션을 서블릿 메모리 위에서 운용한다면 직렬화를 필요로 하지 않지만, 파일로 저장하거나 세션 클러스터링, DB를 저장하는 옵션 등을 선택하게 되면 세션 자체가 직렬화가 되어 저장되어 전달된다.
- 캐시(Cache)
- 자바 RMI(Remote Method Invocation): 원격 시스템 간의 메시지 교환을 위해서 사용하는 자바에서 지원하는 기술

## 3. Reference

- [interface Serializable](https://docs.oracle.com/javase/7/docs/api/java/io/Serializable.html)
- [Java의 직렬화(Serialize)란?](https://go-coding.tistory.com/101)
