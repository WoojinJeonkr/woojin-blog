---
external : false
title : "Reconstructing an orthogonal polygon"
tag : [Baekjoon, Java]
date : 2025-10-29
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/2103)에서 확인하실 수 있습니다.

## 2. Answer

```java
import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());

        // x좌표별로 y좌표 목록을 저장할 맵
        Map<Integer, List<Integer>> xMap = new HashMap<>();
        // y좌표별로 x좌표 목록을 저장할 맵
        Map<Integer, List<Integer>> yMap = new HashMap<>();

        // 점 좌표 입력받기
        for (int i = 0; i < N; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int x = Integer.parseInt(st.nextToken());
            int y = Integer.parseInt(st.nextToken());

            // 같은 x좌표를 가진 점들의 y좌표를 모음
            if (!xMap.containsKey(x)) {
                xMap.put(x, new ArrayList<>());
            }
            xMap.get(x).add(y);

            // 같은 y좌표를 가진 점들의 x좌표를 모음
            if (!yMap.containsKey(y)) {
                yMap.put(y, new ArrayList<>());
            }
            yMap.get(y).add(x);
        }

        long perimeter = 0; // 다각형의 둘레 길이

        // 세로 변 계산: x좌표가 같은 점들끼리 y좌표 차이를 더함
        for (List<Integer> ys : xMap.values()) {
            Collections.sort(ys);
            for (int i = 0; i < ys.size() - 1; i += 2) {
                perimeter += ys.get(i + 1) - ys.get(i);
            }
        }

        // 가로 변 계산: y좌표가 같은 점들끼리 x좌표 차이를 더함
        for (List<Integer> xs : yMap.values()) {
            Collections.sort(xs);
            for (int i = 0; i < xs.size() - 1; i += 2) {
                perimeter += xs.get(i + 1) - xs.get(i);
            }
        }

        // 최종 둘레 출력
        System.out.println(perimeter);
    }
}
```
