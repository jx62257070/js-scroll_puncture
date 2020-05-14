# js-scroll_puncture

## Installation

```
cnpm install js-scroll_puncture
```

## Usage

/**
 * 方法说明
 * @method openModal
 * 
 * @param {string} type 判断使用何种类型解决方案  "1":全局禁止默认点击事件(适用于弹框内无滚动要求)  "2".设置body.position和body.scrollTop(适用于弹框有滚轮要求)
 * 
 */

```javascript
import {clickPop,closePop} from 'js-scroll_puncture'

function openModal(type){
  clickPop()
  //do something
}

function closeModal(type){
  closePop()
  //do something
}

```


