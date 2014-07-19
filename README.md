# derby-hammer

> Add touch gestures event handlers ([Hammer.js](http://eightmedia.github.io/hammer.js/)) support to Derby.js


## Usage

```js
// app/index.js

app.use('derby-hammer');
```

```html
<index:>
  <view name='sidebar'>
  <main on-swiperight='showSidebar()'>

<sidebar:>
  <aside on-swipeleft='hideSidebar()'>  
```


## Gesture Events

The following events are triggered;

- hold
- tap
- doubletap
- drag, dragstart, dragend, dragup, dragdown, dragleft, dragright
- swipe, swipeup, swipedown, swipeleft, swiperight
- transform, transformstart, transformend
- rotate
- pinch, pinchin, pinchout
- touch
- release
- gesture


## licence

MIT