---
external : false
title : "PriorityQueue"
tag : [Java]
date : 2024-08-01
---

## 1. Introduction

PriorityQueue는 Java에서 제공하는 자료구조로, 우선순위가 있는 항목들을 관리하는데 유용합니다. 힙(Heap)을 기반으로 구현되어 있으며, 기본적으로 최소 힙(Min-Heap) 구조를 따릅니다. 이를 통해 가장 작은(또는 큰) 요소를 빠르게 접근할 수 있습니다.
다음은 PriorityQueue에 대한 주요 특성과 동작 방식을 설명합니다.

## 2. Basic Logic

1. 힙 구조: PriorityQueue는 내부적으로 힙을 사용하여 요소를 저장합니다. 기본적으로는 최소 힙(Min-Heap)으로 구현되어 있으며, 이는 힙의 최상단에 항상 가장 작은 값이 위치함을 의미합니다.
2. 자동 정렬: PriorityQueue는 요소를 삽입할 때 자동으로 힙 속성을 유지합니다. 즉, 새로운 요소가 삽입되면 힙의 특성이 유지되도록 내부 구조가 조정됩니다.

## 3. Key Methods

1. add(E e) / offer(E e): 큐에 요소를 추가합니다. offer는 삽입 성공 여부를 반환하며, add는 예외를 던질 수 있습니다.
2. peek(): 큐의 최상단(우선순위가 가장 높은) 요소를 반환합니다. 큐가 비어 있으면 null을 반환합니다.
3. poll(): 큐의 최상단 요소를 반환하고 큐에서 제거합니다. 큐가 비어 있으면 null을 반환합니다.
4. size(): 큐에 있는 요소의 개수를 반환합니다.
5. clear(): 큐의 모든 요소를 제거합니다.

## 4. Usage Example

아래는 PriorityQueue의 사용 예를 보여주는 코드입니다. 이 코드는 정수들을 저장하는 최소 힙을 사용하여 가장 작은 요소부터 차례로 출력합니다.

```java
import java.util.PriorityQueue;

public class Main {
  public static void main(String[] args) {
    // PriorityQueue 생성
    PriorityQueue<Integer> pq = new PriorityQueue<>();

    // 요소 추가
    pq.add(3);
    pq.add(1);
    pq.add(4);
    pq.add(1);
    pq.add(5);
    pq.add(9);

    // 요소 출력
    while (!pq.isEmpty()) {
      System.out.println(pq.poll()); // 가장 작은 요소부터 출력
    }
  }
}
```

코드의 출력 결과는 다음과 같습니다.

```md
1
1
3
4
5
9
```

## 5. Custom Priority

PriorityQueue는 사용자 정의 클래스와 함께 사용할 수도 있습니다. 이를 위해 해당 클래스는 Comparable 인터페이스를 구현하거나, Comparator를 제공하여 우선순위를 정의할 수 있습니다. 예를 들어, PriorityQueue에 커스텀 객체를 추가하고 정렬하려면 다음과 같은 코드를 사용할 수 있습니다.

```java
import java.util.PriorityQueue;
import java.util.Comparator;

class Person {
  String name;
  int age;

  Person(String name, int age) {
    this.name = name;
    this.age = age;
  }

  @Override
  public String toString() {
    return name + ": " + age;
  }
}

public class Main {
  public static void main(String[] args) {
    // Comparator를 사용하여 나이순으로 정렬
    PriorityQueue<Person> pq = new PriorityQueue<>(Comparator.comparingInt(p -> p.age));

    // Person 객체 추가
    pq.add(new Person("Alice", 30));
    pq.add(new Person("Bob", 25));
    pq.add(new Person("Charlie", 35));

    // 요소 출력
    while (!pq.isEmpty()) {
      System.out.println(pq.poll()); // 나이순으로 출력
    }
  }
}
```

위 코드는 다음과 같이 출력됩니다.

```md
Bob: 25
Alice: 30
Charlie: 35
```

## 6. Summary

PriorityQueue는 우선순위가 있는 항목들을 자동으로 정렬하고 빠르게 접근할 수 있는 데이터 구조입니다. 힙을 사용하여 가장 높은 우선순위를 가진 항목을 쉽게 찾고 처리할 수 있으며, 사용자 정의 우선순위를 설정할 수도 있습니다. 이는 작업 스케줄링이나 알고리즘 구현 등 다양한 상황에서 유용합니다.
