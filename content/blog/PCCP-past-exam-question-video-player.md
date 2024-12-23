---
external : false
title : "PCCP past exam question video player"
tag : [Programmers, Python]
date : 2024-12-23
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/340213)에서 확인하실 수 있습니다.

## 2. Problem solving process

문제를 해결하기 위해서는 입력으로 주어진 시간을 처리해야 합니다. 각 시간 정보는 "mm:ss" 형식의 문자열로 제공되므로 이를 초 단위로 변환하는 함수가 필요합니다. time_to_sec 함수는 "mm:ss" 형식의 문자열을 받아서 분과 초를 분리한 후, 이를 초로 변환하여 반환합니다. 이를 통해 모든 시간 정보를 초 단위로 바꿔 계산할 수 있습니다.

그 다음, 주어진 명령을 처리하는 단계입니다. 명령은 "prev"와 "next"로 주어지며, 각각 현재 위치에서 10초 전으로 이동하거나 10초 후로 이동하는 동작입니다. 이러한 이동은 current_pos_sec 변수를 통해 처리됩니다. 이동 후에는 현재 위치가 비디오의 범위 내에 있도록 보장해야 하며, 만약 0초 미만으로 이동할 경우 0초로, 비디오 길이를 초과하는 경우 비디오의 끝으로 이동합니다.

또한, 오프닝 구간이 설정되어 있으므로, 현재 위치가 오프닝 구간 내에 있을 때는 오프닝이 끝나는 시점으로 자동으로 이동해야 합니다. 이를 위해 오프닝 시작 시간과 종료 시간을 초 단위로 변환하고, 현재 위치가 이 구간에 있을 때는 current_pos_sec를 오프닝 종료 시간으로 설정합니다.

마지막으로, 결과는 "mm:ss" 형식으로 반환해야 하므로, 계산된 초 값을 다시 분과 초로 나누어 포맷팅합니다. 이때 초가 10초 미만일 경우, 두 자릿수로 표현되도록 처리합니다.

## 3. Answer

```python
def solution(video_len, pos, op_start, op_end, commands):
  # 시간을 "mm:ss" 형식에서 초로 변환하는 함수
  def time_to_sec(time_str):
    minutes, seconds = map(int, time_str.split(":"))
    return minutes * 60 + seconds

  # 입력 받은 시간을 초로 변환
  current_pos_sec = time_to_sec(pos)
  video_len_sec = time_to_sec(video_len)
  opening_start_sec = time_to_sec(op_start)
  opening_end_sec = time_to_sec(op_end)
  
  # 현재 위치가 오프닝 구간에 있을 경우 오프닝 끝으로 이동
  if opening_start_sec <= current_pos_sec <= opening_end_sec:
    current_pos_sec = opening_end_sec

  # 사용자가 입력한 명령 처리
  for cmd in commands:
    if cmd == "prev":  # 10초 전으로 이동
      current_pos_sec -= 10
    else:  # "next"일 경우 10초 후로 이동
      current_pos_sec += 10
    
    # 현재 위치가 0초보다 작은 경우, 0초로 설정
    if current_pos_sec < 0:
      current_pos_sec = 0
    # 현재 위치가 동영상의 길이를 초과한 경우, 동영상 끝으로 설정
    elif current_pos_sec > video_len_sec:
      current_pos_sec = video_len_sec
    
    # 현재 위치가 오프닝 구간에 있을 경우, 오프닝 끝으로 이동
    if opening_start_sec <= current_pos_sec <= opening_end_sec:
      current_pos_sec = opening_end_sec
  
  # 결과를 "mm:ss" 형식으로 변환
  final_minutes = current_pos_sec // 60
  final_seconds = current_pos_sec % 60
  result = ':'.join(map(lambda x: str(x) if x >= 10 else '0' + str(x), [final_minutes, final_seconds]))
  
  return result
```
