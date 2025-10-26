---
external : false
title : "Brian dilemma"
tag : [Programmers, Java]
date : 2025-10-26
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/1830)에서 확인하실 수 있습니다.

## 2. Answer

```java
import java.util.*;

public class Solution {

    public String solution(String sentence) {
        StringBuilder resultBuilder = new StringBuilder(); // 최종 결과를 저장할 StringBuilder
        LinkedHashMap<Character, ArrayList<Integer>> symbolPositions = new LinkedHashMap<>(); // 소문자(기호)의 위치 저장
        String INVALID = "invalid";

        try {
            int sentenceLength = sentence.length();

            // 1. 문장 내 소문자 위치 수집
            for (int i = 0; i < sentenceLength; i++) {
                char ch = sentence.charAt(i);
                if (Character.isLowerCase(ch)) {
                    symbolPositions.computeIfAbsent(ch, k -> new ArrayList<>()).add(i);
                }
            }

            int currentIndex = 0; // 현재 처리할 위치
            int symbolStartIndex, symbolEndIndex;
            int lastSymbolStart = -1, lastSymbolEnd = -1; // 이전 기호 구간
            int wordStartIndex = 0, wordEndIndex = 0;
            int lastWordStart = -1, lastWordEnd = -1; // 이전 단어 구간
            int symbolCount, distance;
            int ruleType = 0;

            ArrayList<Integer> positions;
            // 2. 각 기호(소문자)별 규칙 적용
            for (char symbol : symbolPositions.keySet()) {
                positions = symbolPositions.get(symbol);
                symbolCount = positions.size();
                symbolStartIndex = positions.get(0);
                symbolEndIndex = positions.get(symbolCount - 1);

                // 2-1. 규칙 판별
                if (symbolCount == 1 || symbolCount >= 3) { // 규칙 1: 글자 사이마다 기호
                    for (int i = 1; i < symbolCount; i++) {
                        if (positions.get(i) - positions.get(i - 1) != 2) return INVALID;
                    }
                    ruleType = 1;
                } else if (symbolCount == 2) { // 규칙 2: 단어 앞뒤에 기호
                    distance = symbolEndIndex - symbolStartIndex;
                    if (distance == 2 && (symbolEndIndex < lastSymbolEnd && symbolStartIndex > lastSymbolStart)) {
                        ruleType = 1;
                    } else if (distance >= 2) {
                        ruleType = 2;
                    } else return INVALID;
                }

                // 2-2. 규칙에 따라 단어 범위 계산
                if (ruleType == 1) { // 규칙 1
                    wordStartIndex = symbolStartIndex - 1;
                    wordEndIndex = symbolEndIndex + 1;

                    // 이전 단어 구간에 포함될 경우 예외 처리
                    if (lastWordStart < wordStartIndex && lastWordEnd > wordEndIndex) {
                        if (symbolStartIndex - lastSymbolStart == 2 && lastSymbolEnd - symbolEndIndex == 2) {
                            continue;
                        } else return INVALID;
                    }
                } else if (ruleType == 2) { // 규칙 2
                    wordStartIndex = symbolStartIndex;
                    wordEndIndex = symbolEndIndex;
                    if (lastWordStart < wordStartIndex && lastWordEnd > wordEndIndex) return INVALID;
                }

                if (lastWordEnd >= wordStartIndex) return INVALID;

                // 2-3. 현재 단어 전의 순수 대문자 단어 추가
                if (currentIndex < wordStartIndex) {
                    resultBuilder.append(extractWord(sentence, currentIndex, wordStartIndex - 1));
                    resultBuilder.append(" ");
                }

                // 2-4. 현재 단어 추가
                resultBuilder.append(extractWord(sentence, wordStartIndex, wordEndIndex));
                resultBuilder.append(" ");

                // 2-5. 이전 단어/기호 상태 갱신
                lastWordStart = wordStartIndex;
                lastWordEnd = wordEndIndex;
                lastSymbolStart = symbolStartIndex;
                lastSymbolEnd = symbolEndIndex;
                currentIndex = wordEndIndex + 1;
            }

            // 3. 남은 단어 처리
            if (currentIndex < sentenceLength) {
                resultBuilder.append(extractWord(sentence, currentIndex, sentenceLength - 1));
            }

        } catch (Exception e) {
            return INVALID;
        }

        return resultBuilder.toString().trim();
    }

    // 지정 구간 단어에서 소문자 제거 후 반환
    public String extractWord(String sentence, int start, int end) {
        String word = sentence.substring(start, end + 1);
        return word.replaceAll("[a-z]", "");
    }
}
```
