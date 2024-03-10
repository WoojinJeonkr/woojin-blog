---
external: false
title: "Baekjoon 1913"
tag: [Baekjoon, Java]
date : 2024-02-09
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/1913)에서 확인하실 수 있습니다.

## 2. Solve (memory: 86796KB, time: 688ms)

```java
import java.util.*;
import java.io.*;

public class Main {
  static int N, A; // 배열 크기와 찾을 숫자를 저장하는 변수 선언
  static int[][] arr; // 숫자를 담을 배열
  
  static int[] dx = {1, 0, -1, 0}; // 오른쪽, 아래쪽, 왼쪽, 위쪽 순서로 이동하는데 사용할 x 좌표 변화량
  static int[] dy = {0, 1, 0, -1}; // 오른쪽, 아래쪽, 왼쪽, 위쪽 순서로 이동하는데 사용할 y 좌표 변화량
  
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); // 입력을 받기 위한 BufferedReader 선언
    StringBuilder sb = new StringBuilder(); // 출력을 위한 StringBuilder 선언
    
    N = Integer.parseInt(br.readLine()); // 배열의 크기 입력
    A = Integer.parseInt(br.readLine()); // 찾을 숫자 입력
    
    arr = new int[N][N]; // 입력받은 크기로 배열 생성
    
    int idx = 0; // 이동 방향을 나타내는 인덱스
    
    int curX = 0; // 현재 x 좌표
    int curY = 0; // 현재 y 좌표
    
    arr[curX][curY] = N * N; // 배열의 오른쪽 아래 모서리부터 시작하여 큰 수부터 차례로 넣기
    
    // 배열 안을 순회하면서 찾고자 하는 숫자 A를 찾을 때까지 반복
    while (idx < 4) {
      int nx = curX + dx[idx]; // 다음 x 좌표
      int ny = curY + dy[idx]; // 다음 y 좌표
      
      // 다음 좌표가 배열 범위 내에 있고, 아직 값이 할당되지 않은 경우
      if (nx >= 0 && ny >= 0 && nx < N && ny < N && arr[nx][ny] == 0) {
        arr[nx][ny] = arr[curX][curY] - 1; // 이동할 위치에 숫자 할당
        
        // 만약 이동한 위치에 1이 들어간다면 탐색 종료
        if (arr[nx][ny] == 1) break; 
        
        curX = nx; // 현재 x 좌표 업데이트
        curY = ny; // 현재 y 좌표 업데이트
      } else {
        idx++; // 다음 방향 탐색을 위해 인덱스 증가
      }
      
      // 인덱스가 4를 초과하면 다시 처음 방향으로 되돌아가기
      if (idx >= 4) {
        idx = 0;
      }
    }
    
    int ansX = 0, ansY = 0; // 찾은 숫자의 위치를 저장할 변수 초기화
    // 배열을 순회하며 출력 및 찾은 숫자의 위치 저장
    for (int i = 0; i < N; i++) {
      for (int j = 0; j < N; j++) {
        if (arr[i][j] == A) {
          ansX = i + 1; // x 좌표는 1부터 시작하므로 1을 더해줌
          ansY = j + 1; // y 좌표는 1부터 시작하므로 1을 더해줌
        }
        sb.append(arr[i][j] + " "); // 배열의 값을 StringBuilder에 추가
      }
      sb.append("\n"); // 한 행이 끝날 때마다 개행
    }
    sb.append(ansX + " " + ansY); // 찾은 숫자의 위치를 StringBuilder에 추가

    System.out.println(sb); // 결과 출력
  }
}
```
