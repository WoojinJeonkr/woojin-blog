---
external : false
title : "Why input tags behave differently in radio type and submit type"
tag : [HTML]
date : 2025-03-22
---

커뮤니티를 돌아다니다가 아래의 질문을 발견하게 되었다.  

![input 태그 value 질문](https://github.com/WoojinJeonkr/woojin-blog/blob/main/public/images/html_question.jpg?raw=true)

왜 HTML에서 input 태그의 type에 따라 value 속성의 동작이 달라지는 건지 알아보자.

## 1. `input type="radio"`의 value 속성

`<input type="radio">`에서 value 속성은 폼 제출 시 서버로 전송되는 값을 정의한다.  
이 값은 화면에 표시되지 않으며, 사용자가 선택한 옵션을 서버가 식별할 수 있도록 도와주는 역할을 한다.  

```html
<form>
  <input type="radio" name="option" value="A"> Option A<br>
  <input type="radio" name="option" value="B"> Option B<br>
  <button type="submit">Submit</button>
</form>
```

위의 코드와 같이 사용했을 때 사용자가 "Option A"를 선택하고 폼을 제출하면 서버에는 option=A라는 데이터가 전송된다.  
여기서 value="A"는 서버로 전달되는 값이며, 사용자는 이를 직접 확인하지는 못한다.

## 2. `<input type="submit">`에서 value 속성

`<input type="submit">`에서 value 속성은 버튼에 표시되는 텍스트를 정의하게 된다.  
사용자 인터페이스(UI)의 일부로 작동하며, 폼 제출 시 서버로 별도의 데이터로 전송되지 않는다.

```html
<form>
  <input type="submit" value="Send Request">
</form>
```

위 코드와 같이 작성한다면 사용자는 "Send Request"라는 텍스트가 적힌 버튼을 화면 상에서 확인할 수 있다.  
이 경우 value는 시각적으로 표시될 텍스트로만 사용된다.

## 3. HTML 명세와 DOM 속성의 차이에 따른 동작

HTML 명세에 따르면, `<input>` 요소의 value 속성은 두 가지 방식으로 동작한다.

1. `HTML 속성`(attribute): **HTML 마크업에 작성된 초기값**을 나타낸다.
2. `DOM 속성`(property): DOM 객체에서 **현재 입력 필드의 상태**를 나타내며, 사용자 입력이나 스크립트를 통해 변경될 수 있다.  

| **구분**              | **라디오 버튼 (type="radio")**                                   | **제출 버튼 (type="submit")**                              |
|-----------------------|-----------------------------------------------------------------|----------------------------------------------------------|
| **HTML 속성의 역할**  | 폼 제출 시 서버로 전송되는 데이터를 나타냄                        | 사용자에게 보여질 텍스트를 설정                           |
| **DOM 속성의 역할**   | 현재 상태를 확인하거나 조작 가능, 서버와의 데이터 교환에 초점       | 텍스트를 동적으로 변경 가능, UI 요소로서의 역할에 초점    |

## 4. `type="radio"`와 `type="submit"`의 value 동작

`<input>` 태그의 `type="radio"`와 `type="submit"`의 value 동작에 관해 `console.log()`를 활용한 코드로 다시 한 번 알아보자.  

```html
<form>
  <input type="radio" name="example" value="RadioValue">
  <input type="submit" value="SubmitValue">
</form>

<script>
  const radio = document.querySelector('input[type="radio"]');
  const submit = document.querySelector('input[type="submit"]');

  // HTML 속성과 DOM 속성 확인
  console.log(radio.getAttribute('value')); // "RadioValue" (HTML 속성)
  console.log(radio.value);                 // "RadioValue" (DOM 속성)

  console.log(submit.getAttribute('value')); // "SubmitValue" (HTML 속성)
  console.log(submit.value);                 // "SubmitValue" (DOM 속성)

  // DOM 속성을 변경
  radio.value = "NewRadioValue";
  submit.value = "NewSubmitValue";

  // 변경 후 상태 확인
  console.log(radio.getAttribute('value')); // 여전히 "RadioValue"
  console.log(radio.value);                 // "NewRadioValue"

  console.log(submit.getAttribute('value')); // 여전히 "SubmitValue"
  console.log(submit.value);                 // "NewSubmitValue"
</script>
```

처음 태그에서 `.getAttribute`를 통해 HTML 속성값을 가져오면 "RadioValue", "SubmitValue"로 나오고, `.value`를 통해 DOM 속성값을 가져오면 "RadioValue", "SubmitValue"로 나오는 것을 확인할 수 있다.  

그 다음, 각각의 DOM 속성값을 "NewRadioValue", "NewSubmitValue"로 변경하면 HTML 속성값은 여전히 "RadioValue", "SubmitValue"이지만 DOM 속성값은 "NewRadioValue", "NewSubmitValue"로 바뀌는 것을 확인할 수 있다.

## 5. 요약

`type="radio"`와 `type="submit"`의 value 속성은 각 요소의 목적과 사용 사례에 따라 최적화된 결과이다.

- `type="radio"`
  - 사용자의 선택 데이터를 서버로 전달해야 하므로, value가 **전송 데이터**를 정의한다.
  - 사용자에게는 선택 항목(예: 레이블)만 표시되고, 실제 전달 값은 숨겨진 형태로 동작한다.

- `type="submit"`
  - 제출이라는 동작을 수행하는 UI 요소이므로, 사용자에게 명확한 안내를 제공하기 위해 value가 **텍스트 레이블**로 사용된다.
  - 데이터 전송보다는 시각적 피드백과 상호작용에 초점이 맞춰져 있다.
