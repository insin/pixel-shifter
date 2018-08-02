# `PixelShifter`

**[By Josh Comeau](https://twitter.com/JoshWComeau/status/1024993522070511616)**

Text elements tend to have a bit of "built-in" side padding. This is especially noticeable with large headings. If you want things to align, it helps to offset things by a few pixels.

This component makes it easy to add slight pixel tweaks.

Because `reason` is a mandatory prop, it forces you to explain what it's doing, so that when you revisit this code in 4 months you'll know why you shifted it slightly.

## Usage

```js
<PixelShifter
  x={-5}
  reason="Optically align title with paragraphs below"
>
  <h1>Hello World</h1>
</PixelShifter>
```

## Props

- `x`: `Number` - number of pixels to horizontally tweak by
- `y`: `Number` - number of pixels to vertically tweak by
- `reason`: `String` *(required)* - explanation for using `PixelShifter`, for the benefit of future maintainers
