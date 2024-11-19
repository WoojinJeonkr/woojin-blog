---
external : false
title : "Best album"
tag : [Programmers, Java]
date : 2024-11-19
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/42579)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제를 해결하기 위해 먼저 각 장르의 총 재생 횟수를 계산하고, 각 장르에 속한 노래들을 정리할 방법을 설계합니다. 이를 위해 두 가지 데이터를 저장합니다. 첫 번째로, 장르별 총 재생 횟수를 저장하는 Map을 만들어, 주어진 데이터를 순회하면서 장르별로 재생 횟수를 누적합니다. 두 번째로, 각 장르에 속한 노래들의 고유 번호와 재생 횟수를 함께 저장할 Map을 만듭니다. 이 두 데이터를 기반으로, 장르를 총 재생 횟수에 따라 정렬합니다.

그다음, 각 장르에 대해 해당 장르의 노래들을 재생 횟수 내림차순으로 정렬합니다. 만약 재생 횟수가 같다면, 고유 번호를 기준으로 오름차순 정렬합니다. 이렇게 정렬된 리스트에서 상위 두 곡의 고유 번호를 베스트 앨범 리스트에 추가합니다. 만약 해당 장르에 속한 곡이 하나뿐이라면, 하나의 곡만 추가됩니다.

마지막으로, 이렇게 만들어진 베스트 앨범 리스트를 배열 형태로 변환하여 반환합니다.

## 3. Answer

```java
import java.util.*;

class Solution {
  public int[] solution(String[] genres, int[] plays) {
    // 장르별 총 재생 횟수를 저장할 Map
    Map<String, Integer> genrePlayCount = new HashMap<>();
    // 장르별 노래 리스트를 저장할 Map
    Map<String, List<int[]>> genreToSongs = new HashMap<>();
    
    // 각 노래의 장르와 재생 횟수를 기반으로 데이터를 Map에 저장
    for (int i = 0; i < genres.length; i++) {
      genrePlayCount.put(genres[i], genrePlayCount.getOrDefault(genres[i], 0) + plays[i]);
      genreToSongs.putIfAbsent(genres[i], new ArrayList<>());
      genreToSongs.get(genres[i]).add(new int[] {i, plays[i]}); // 고유 번호와 재생 횟수를 저장
    }
    
    // 장르를 총 재생 횟수 기준으로 내림차순 정렬
    List<String> sortedGenres = new ArrayList<>(genrePlayCount.keySet());
    sortedGenres.sort((g1, g2) -> genrePlayCount.get(g2) - genrePlayCount.get(g1));
    
    // 베스트 앨범을 저장할 리스트
    List<Integer> bestAlbum = new ArrayList<>();
    
    // 각 장르에 대해 노래를 정렬하고 최대 두 곡을 선택
    for (String genre : sortedGenres) {
      List<int[]> songs = genreToSongs.get(genre);
      // 재생 횟수 내림차순으로 정렬, 동일하면 고유 번호 오름차순
      songs.sort((s1, s2) -> s2[1] != s1[1] ? s2[1] - s1[1] : s1[0] - s2[0]);
      for (int i = 0; i < Math.min(2, songs.size()); i++) {
        bestAlbum.add(songs.get(i)[0]); // 고유 번호를 베스트 앨범에 추가
      }
    }
    
    // 베스트 앨범 리스트를 배열로 변환하여 반환
    return bestAlbum.stream().mapToInt(i -> i).toArray();
  }
}
```
