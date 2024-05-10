---
external : false
title : "Boxes through a Tunnel"
tag : [Hackerrank, C]
date : 2024-05-10
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/too-high-boxes/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Problem interpretation

문제에서는 터널을 통해 상자를 운송하는 상황에서, 각 상자의 길이, 너비, 높이에 따라 상자의 부피를 찾는 것을 요구합니다. 터널의 높이가 주어지고, 상자의 높이가 해당 터널의 높이보다 작을 때만 상자를 운송할 수 있다고 가정합니다.
입력 형식은 첫 번째 줄에는 상자의 수를 나타내는 정수가 주어지고, 이후 각 줄마다 각 상자의 길이, 너비, 높이를 나타내는 세 개의 정수가 공백으로 구분되어 주어집니다.
출력 형식은 입력에서 주어진 각 상자에 대해 터널의 높이보다 낮은 높이를 가진 상자의 부피를 각각 다른 줄에 출력하는 것입니다.
따라서 주어진 상자의 높이가 터널의 높이보다 작은 경우에 대해 각 상자의 부피를 찾아 출력하는 문제라고 볼 수 있습니다.

## 3. Answer

```cpp
struct box
{
  /**
   * int형으로 세 개의 필드를 정의합니다: length, width, height
   */
  int length, width, height;
};

typedef struct box box;

int get_volume(box b) {
  /**
   * 상자의 부피를 반환합니다
   */
  return b.length * b.width * b.height;
}

int is_lower_than_max_height(box b) {
  /**
   * 상자의 높이가 MAX_HEIGHT보다 낮으면 1을 반환하고 그렇지 않으면 0을 반환합니다
   */
  return b.height < MAX_HEIGHT ? 1 : 0;
}
```
