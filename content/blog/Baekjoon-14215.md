---
external: false
title: "Baekjoon 14215"
date: 2023-07-04
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/14215)

## 2. Solution 1 (Python, memory: 31256KB, time: 44ms)

```python
# 사용자로부터 세 개의 정수를 입력받아 변수 a, b, c에 저장합니다.
a, b, c = map(int, input().split())

# 세 변의 길이를 오름차순으로 정렬하여 리스트 sorted_lengths에 저장합니다.
sorted_lengths = sorted([a, b, c])

# 세 변 중 가장 작은 두 변의 길이와, 가장 긴 변의 길이를 계산합니다.
# 만약 가장 작은 두 변의 길이의 합보다 가장 긴 변의 길이가 더 크다면,
# 가장 작은 두 변의 길이의 합에 1을 빼서 최종 결과값을 계산합니다.
# 그렇지 않으면 가장 작은 두 변의 길이와 가장 긴 변의 길이를 모두 더하여 최종 결과값을 계산합니다.
result = sorted_lengths[0] + sorted_lengths[1] + min(sorted_lengths[2], sorted_lengths[0] + sorted_lengths[1] - 1)

# 최종 결과값을 출력합니다.
print(result)
```

## 3. Solution 2 (Java 11, memory: 14536KB, time: 132ms)

```java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        // 입력을 위한 BufferedReader 객체를 생성합니다.
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        // 공백을 기준으로 입력된 정수들을 받아와서 배열로 변환합니다.
        int[] input = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).sorted().toArray();

        // 세 수가 삼각형을 만들 수 있는지 확인합니다.
        if (input[0] + input[1] > input[2]) {
            // 만약 세 수가 삼각형을 만들 수 있다면, 세 수의 합을 출력합니다.
            System.out.println(input[0] + input[1] + input[2]);
        } else {
            // 세 수가 삼각형을 만들 수 없다면, 가장 작은 두 수의 합에 1을 빼고 2를 곱한 값을 출력합니다.
            System.out.println((input[0] + input[1]) * 2 - 1);
        }
    }
}
```

### 3-1. 가장 작은 두 수의 합에 1을 빼고 2를 곱하는 이유

- 가장 작은 두 수의 합은 가장 큰 수보다 작기 때문에 세 수를 모두 더한 값으로 삼각형을 만들 수 없습니다.
- 따라서, 가장 작은 두 수의 합에 1을 빼고 2를 곱함으로써, 가장 작은 두 수와 가장 큰 수의 합보다 1 작은 값을 얻을 수 있습니다.
- 이렇게 계산한 값은 가장 작은 두 수를 더한 뒤, 나머지 하나의 수에도 더할 수 있기 때문에 삼각형의 둘레의 근사치가 됩니다.

### 3-2. 해당 코드에서 사용된 클래스에 대해 알아보기

- [java.io.BufferedReader](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/io/BufferedReader.html): 입력 스트림에서 텍스트를 읽기 위한 기능을 제공하는 클래스입니다. BufferedReader는 입력 스트림으로부터 데이터를 효율적으로 읽어오기 위해 버퍼링된 기능을 제공합니다. 버퍼링은 입출력 작업의 성능을 향상시키는 데 도움이 되며, 한 번에 여러 문자를 읽어오는 등의 최적화를 수행합니다.
- [java.io.InputStreamReader](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/io/InputStreamReader.html): 입력 스트림으로부터 바이트를 읽어 문자로 변환하는 역할을 수행하는 클래스입니다. InputStreamReader는 바이트 스트림으로부터 문자로 변환하는 데 사용됩니다. 주로 System.in과 같은 바이트 기반 입력 스트림을 문자 기반 스트림으로 변환하여 텍스트를 읽을 수 있도록 합니다.
- 두 클래스 모두 java.io 패키지의 일부이며, 입력 처리와 관련된 작업을 수행하는 데 사용됩니다.

## 4. Solution 3 (C++17, memory: 2020KB, time: 0ms)

```cpp
#include <iostream>
#include <algorithm>

using namespace std;

int main() {
    int a[3];
    // 사용자로부터 세 개의 정수를 입력받는다.
    cin >> a[0] >> a[1] >> a[2];
    
    // 입력받은 정수를 정렬한다.
    sort(a, a + 3);
    
    if (a[0] + a[1] > a[2])
        // 삼각형의 성립 조건을 만족하는 경우, 세 변의 길이의 합을 출력한다.
        cout << a[0] + a[1] + a[2] << endl;
    else
        // 삼각형의 성립 조건을 만족하지 않는 경우, 가장 작은 두 변의 합에 2를 곱하고 1을 뺀 값을 출력한다.
        cout << (a[0] + a[1]) * 2 - 1 << endl;
    
    return 0;
}
```
