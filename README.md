## koco-dialog-header

Koco component for a header element in dialog-type ui context. A rectangle and a title!

## Installation

```bash
bower install koco-dialog-header
```

## Usage with KOCO

This is a shared module that is used in many other modules. The convention is to configure an alias in the `require.configs.js` with the name `dialog-header` like so:

```javascript
paths: {
  ...
  'dialog-header': 'bower_components/koco-dialog-header/src/dialog-header'
  ...
}
```

Don't forget to include the packaged less file...

```less
@import "../components/dialog-header/dialog-header.less";
```

You can then use it like this...

```html
<dialog-header params="{ title: 'my dialog\'s title' }"></dialog-header>
```