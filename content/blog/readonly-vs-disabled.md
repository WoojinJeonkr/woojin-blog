---
external : false
title : "readonly vs disabled"
tag : [HTML]
date : 2024-06-12
---

HTML의 `<input>` 요소에는 `readonly`와 `disabled` 속성이 있습니다. 두 가지 모두 입력 필드를 비활성화할 때 사용되지만, 그들 간에는 몇 가지 중요한 차이가 있습니다.

## 1. readonly 속성

`readonly` 속성은 사용자가 입력 필드를 편집할 수 없도록 만듭니다. 하지만, 입력 필드는 여전히 사용자에게 읽기 전용으로 제공됩니다. 이것은 사용자가 입력 내용을 선택하고 복사하는 것은 가능하지만, 수정하거나 새로운 내용을 입력하는 것은 불가능하게 합니다. 따라서, `readonly` 필드는 읽기 전용 데이터를 표시하거나 사용자가 입력을 변경하지 않도록 할 때 사용됩니다. 이 속성을 가진 필드의 값은 서버로 전송됩니다.

```html
<input type="text" readonly>
```

## 2. disabled 속성

`disabled` 속성은 입력 필드를 완전히 비활성화하여 사용자가 입력 필드에 어떠한 상호 작용도 할 수 없도록 만듭니다. 이것은 입력 필드가 시각적으로 회색으로 표시되고, 사용자가 해당 필드를 클릭하거나 포커스를 이동할 수 없게 합니다. 따라서, `disabled` 필드는 사용자가 입력하지 않아야 하는 데이터 또는 특정 조건에 따라 입력을 비활성화할 때 사용됩니다. 이 속성을 가진 필드의 값은 서버로 전송되지 않습니다.

```html
<input type="text" disabled>
```

## 3. 요약

- readonly: 사용자가 입력을 편집할 수 없지만 읽기 전용으로 제공되며 값이 전송됩니다.
- disabled: 사용자가 입력할 수 없고 시각적으로 비활성화되며 값은 전송되지 않습니다.

## 4. Reference

- [HTML attribute: readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly)
- [HTML attribute: disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled)
