---
external: false
title: "Baekjoon 2435"
date: 2023-07-02
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2435)

## 2. 문제 접근 방법

- 연속적인 날짜의 온도 합을 구하는 문제입니다.
- 초기에 K일 동안의 합으로 최댓값을 설정한 후, 새로운 날의 온도를 추가하고 이전 K일 전 날의 온도를 제거하여 합을 갱신하며 최댓값을 찾아 연속적인 며칠 동안의 온도 합 중 가장 큰 값을 구하고자 합니다.  

### 2-1. 💡 슬라이딩 윈도우(Sliding Window) 기법  

슬라이딩 윈도우 기법은 배열 또는 리스트와 같은 데이터 구조에서 고정된 크기의 윈도우(창문)를 이용하여 구간을 이동하면서 연산을 수행하는 기법입니다. 이 윈도우를 일정한 간격으로 이동시켜가며 구간 내의 연산을 수행하고, 각 구간의 결과를 얻을 수 있습니다. [시간 복잡도](2022-10-19-Time-complexity-and-Space-complexity.markdown)를 줄이기 위해 중첩된 반복문을 어떻게 단일 반복문으로 바꿀 수 있는지 보여줍니다.  

슬라이딩 윈도우 기법은 다음과 같은 상황에서 유용하게 사용될 수 있습니다.  

- 연속적인 구간의 합이나 평균 등을 계산하는 경우
- 고정된 크기의 윈도우 내에서 최솟값, 최댓값 또는 특정 조건을 만족하는 값을 찾아야 하는 경우
- 구간 내의 데이터를 추가하거나 제거하는 등의 연산이 필요한 경우

슬라이딩 윈도우를 사용하면 전체 구간을 다시 계산하지 않고도 구간의 변화에 따라 연산을 업데이트할 수 있기 때문에 효율적인 알고리즘을 설계할 수 있습니다.  

![슬라이딩 윈도우 기법](/images/sliding-window-technique.jpg)

[이미지 출처: geeksforgeeks - Window Sliding Technique](https://www.geeksforgeeks.org/window-sliding-technique/)

## 3. Solution 1 (Python, memory: 31256KB, time: 40ms)

```python
N, K = map(int, input().split())  # N과 K를 입력 받음
temperatures = list(map(int, input().split()))  # 온도를 입력 받아 리스트로 저장

max_sum = sum(temperatures[:K])  # 초기 K일간의 합으로 최댓값 설정
current_sum = max_sum

for i in range(K, N):  # K부터 N까지 반복
    current_sum += temperatures[i] - temperatures[i-K]  # 새로운 날의 온도를 추가하고 이전 날의 온도를 제거하여 합 갱신
    max_sum = max(max_sum, current_sum)  # 최댓값 갱신

print(max_sum)  # 최댓값 출력
```

## 4. Solution 2 (C++17, memory: 2020KB, time: 0ms)

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    int N, K;
    cin >> N >> K;  // N과 K를 입력 받음
    vector<int> temperatures(N);  // N개의 요소를 가진 벡터 생성
    for (int i = 0; i < N; i++) {
        cin >> temperatures[i];  // 온도를 입력 받음
    }

    int max_sum = 0;  // 최댓값 변수 초기화
    int current_sum = 0;  // 현재 합 변수 초기화

    for (int i = 0; i < K; i++) {
        current_sum += temperatures[i];  // 초기 K일간의 합 계산
    }
    max_sum = current_sum;

    for (int i = K; i < N; i++) {
        current_sum += temperatures[i] - temperatures[i - K];  // 새로운 날의 온도를 추가하고 이전 날의 온도를 제거하여 합 갱신
        max_sum = max(max_sum, current_sum);  // 최댓값 갱신
    }

    cout << max_sum << endl;  // 최댓값 출력

    return 0;
}
```

## 5. Solution 3 (Java 11, memory: 17596KB, time: 208ms)

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int N = scanner.nextInt();  // N을 입력 받음
        int K = scanner.nextInt();  // K를 입력 받음
        int[] temperatures = new int[N];  // N개의 요소를 가진 배열 생성
        for (int i = 0; i < N; i++) {
            temperatures[i] = scanner.nextInt();  // 온도를 입력 받음
        }

        int maxSum = 0;  // 최댓값 변수 초기화
        int currentSum = 0;  // 현재 합 변수 초기화

        for (int i = 0; i < K; i++) {
            currentSum += temperatures[i];  // 초기 K일간의 합 계산
        }
        maxSum = currentSum;

        for (int i = K; i < N; i++) {
            currentSum += temperatures[i] - temperatures[i - K];  // 새로운 날의 온도를 추가하고 이전 날의 온도를 제거하여 합 갱신
            maxSum = Math.max(maxSum, currentSum);  // 최댓값 갱신
        }

        System.out.println(maxSum);  // 최댓값 출력
    }
}
```

## 5. Solution 4 (Ruby, memory: 98420KB, time: 176ms)

```Ruby
N, K = gets.chomp.split.map(&:to_i)
temperatures = gets.chomp.split.map(&:to_i)

max_sum = temperatures[0, K].sum  # 초기 K일간의 합으로 최댓값 설정
current_sum = max_sum

(K...N).each do |i|
  current_sum += temperatures[i] - temperatures[i - K]  # 새로운 날의 온도를 추가하고 이전 날의 온도를 제거하여 합 갱신
  max_sum = [max_sum, current_sum].max  # 최댓값 갱신
end

puts max_sum  # 최댓값 출력
```
