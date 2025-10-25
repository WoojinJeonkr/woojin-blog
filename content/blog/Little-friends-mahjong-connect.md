---
external : false
title : "Little friends mahjong connect"
tag : [Programmers, Java]
date : 2025-10-25
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/1836)에서 확인하실 수 있습니다.

## 2. Answer

```java
import java.util.*;

class Solution {
    // 보드 크기 및 상태 저장용 전역 변수
    static int m, n;
    static char[][] map;
    static Map<Character, List<int[]>> tiles;

    public String solution(int m, int n, String[] board) {
        Solution.m = m;
        Solution.n = n;
        map = new char[m][n];
        // TreeMap 사용 → 알파벳 순 정렬 자동 처리
        tiles = new TreeMap<>();

        // 보드 초기화 및 타일 좌표 저장
        for (int i = 0; i < m; i++) {
            map[i] = board[i].toCharArray();
            for (int j = 0; j < n; j++) {
                char c = map[i][j];
                if (c >= 'A' && c <= 'Z') { // 알파벳 타일일 경우
                    tiles.putIfAbsent(c, new ArrayList<>());
                    tiles.get(c).add(new int[]{i, j});
                }
            }
        }

        StringBuilder answer = new StringBuilder();
        boolean progress = true;

        // 더 이상 제거할 타일이 없을 때까지 반복
        while (progress && !tiles.isEmpty()) {
            progress = false;

            // 알파벳 순으로 탐색
            for (char key : new ArrayList<>(tiles.keySet())) {
                List<int[]> pos = tiles.get(key);
                int[] a = pos.get(0), b = pos.get(1);

                // 두 타일이 연결 가능한 경우
                if (canConnect(a, b)) {
                    // 타일 제거 후 '.'으로 변경
                    map[a[0]][a[1]] = '.';
                    map[b[0]][b[1]] = '.';

                    // 제거된 타일 목록에서 삭제
                    tiles.remove(key);

                    // 결과 문자열에 추가
                    answer.append(key);

                    // 제거가 발생했음을 표시
                    progress = true;
                    break; // 다시 처음부터 탐색 (알파벳 순서 유지)
                }
            }
        }

        // 모든 타일을 제거하지 못한 경우
        if (!tiles.isEmpty()) return "IMPOSSIBLE";

        // 제거 순서 문자열 반환
        return answer.toString();
    }

    // 두 타일이 규칙에 맞게 연결 가능한지 확인하는 함수
    static boolean canConnect(int[] a, int[] b) {
        int ax = a[0], ay = a[1];
        int bx = b[0], by = b[1];
        char target = map[ax][ay]; // 현재 타일 문자

        // ① 같은 행에 존재 → 직선으로 연결 가능 여부 확인
        if (ax == bx && clearRow(ax, ay, by)) return true;

        // ② 같은 열에 존재 → 직선으로 연결 가능 여부 확인
        if (ay == by && clearCol(ay, ax, bx)) return true;

        // ③ 가로 → 세로 순으로 꺾이는 경우
        if (clearRow(ax, ay, by) && clearCol(by, ax, bx)) {
            // 꺾이는 지점이 비어있거나 같은 문자일 경우만 가능
            if (map[ax][by] == '.' || map[ax][by] == target) return true;
        }

        // ④ 세로 → 가로 순으로 꺾이는 경우
        if (clearCol(ay, ax, bx) && clearRow(bx, ay, by)) {
            if (map[bx][ay] == '.' || map[bx][ay] == target) return true;
        }

        // 어떤 경우에도 연결 불가능
        return false;
    }

    // 가로 방향으로 두 위치 사이가 모두 비어있는지 확인
    static boolean clearRow(int x, int y1, int y2) {
        int min = Math.min(y1, y2), max = Math.max(y1, y2);
        for (int y = min + 1; y < max; y++) {
            if (map[x][y] != '.') return false;
        }
        return true;
    }

    // 세로 방향으로 두 위치 사이가 모두 비어있는지 확인
    static boolean clearCol(int y, int x1, int x2) {
        int min = Math.min(x1, x2), max = Math.max(x1, x2);
        for (int x = min + 1; x < max; x++) {
            if (map[x][y] != '.') return false;
        }
        return true;
    }
}
```
