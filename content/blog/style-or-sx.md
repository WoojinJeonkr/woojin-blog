---
external: false
title: "style or sx"
date: 2023-02-14
---

## 1. inline style

순수한 html에서는 스타일 속성에 문자열을 할당하여 인라인 스타일을 설정할 수 있다.

```html
<p style="padding:2px">Start editing to see some magic happen :)</p>
```

React/tsx에서의 style 속성은 html의 style 속성과 다르게 React.CSSProperties 유형이다.

```ts
<div style={{padding: 2}}>This is div element</div>
```

이 때 html을 반환하는 tsx문법은 react가 변환할 때 모든 속성이 props 객체의 일부가 된다.  
따라서 렌더링때마다 style 객체가 계산되기 때문에 성능적인 면과 재사용 부분에서 추천되지 않는다.

## 2. sx

mui(material)에서 객체에 대한 style을 정의할 때 sx를 사용하게 된다.

```ts
import { Box, ThemeProvider, createTheme } from '@mui/system';

const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      dark: '#009688',
    },
  },
});

export default function Example() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
        }}
      >
        <Box sx={{ color: "text.secondary" }}>Sessions</Box>
        <Box sx={{ color: "text.primary", fontSize: 34, fontWeight: 'medium' }}>
          98.3 K
        </Box>
        <Box
          sx={{
            color: 'success.dark',
            display: 'inline',
            fontWeight: 'bold',
            mx: 0.5,
            fontSize: 14,
          }}
        >
          +18.77%
        </Box>
        <Box sx={{ color: "text.secondary", display: 'inline', fontSize: 14 }}>
          vs. last week
        </Box>
      </Box>
    </ThemeProvider>
  );
}
```

sx를 사용하면 노출된 모든 스타일 기능을 패키징하는 CSS 상위 집합으로 작업할 수 있다. 이는 styled-component가 과도한 상황에서 sx는 수십 줄의 코드를 대체할 수 있다는 장점을 갖는다.

## 2-1. sx Properties 별칭

```textile
m: margin
mt: margin-top
mr: margin-right
mb: margin-bottom
ml: margin-left
mx: margin-left,margin-right
my: margin-top,margin-bottom
p: padding
pt: padding-top
pr: padding-right
pb: padding-bottom
pl: padding-left
px: padding-left,padding-right
py: padding-top,padding-bottom
```

## 3. Reference

- [How to set inline styles in react (Typescript)](https://reacthustle.com/blog/how-to-set-inline-styles-in-react-typescript)
- [Mui - The sx prop](https://mui.com/system/getting-started/the-sx-prop/)
