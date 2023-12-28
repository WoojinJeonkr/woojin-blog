---
external: false
title: "Baekjoon 17173"
date: 2023-06-26
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/17173)

## 2. Solution (Python, memory: 31256KB, time: 52ms)

```python
N, M = map(int, input().split())
lst = list(map(int, input().split()))
result = 0
for i in range(1, N+1):
    for n in lst:
        if i%n == 0:
            result += i
            break
print(result)
```

## 3. Solution (C++17, memory: 2020KB, time: 0ms)

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
    int N, M;
    cin >> N >> M;
    
    vector<int> lst(M);
    for (int i = 0; i < M; ++i) {
        cin >> lst[i];
    }
    
    int result = 0;
    for (int i = 1; i <= N; ++i) {
        for (int n : lst) {
            if (i % n == 0) {
                result += i;
                break;
            }
        }
    }
    
    cout << result;   
    return 0;
}
```
