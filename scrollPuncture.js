var nowScrollTop = 0//初始化
//禁止滚轮
function touchStart_js_scroll_puncture() {
    event.preventDefault();
}
export function clickPop(type) {
    var _type = type || "1"
    switch (_type) {
        case "1":
            document.addEventListener('touchmove', touchStart_js_scroll_puncture, { passive: false });
            //适配pc滚动事件
            document.addEventListener('wheel', touchStart_js_scroll_puncture, { passive: false });
            break;
        case "2":
            nowScrollTop = document.body.scrollTop || document.documentElement.scrollTop //将页面的scroolTop赋值给变量
            document.body.style.position = "fixed"
            document.body.style.top = -nowScrollTop + 'px'
            break;
        case '3':
            //仅禁止pc滚动事件
            document.addEventListener('wheel', touchStart_js_scroll_puncture, { passive: false });
            break;
        default:
            break;
    }

}
//激活滚轮
export function closePop(type) {
    var _type = type || "1"
    switch (_type) {
        case "1":
            document.removeEventListener('touchmove', touchStart_js_scroll_puncture, { passive: false });
            //适配pc滚动事件
            document.removeEventListener('wheel', touchStart_js_scroll_puncture, { passive: false });
            break;
        case "2":
            document.body.style.position = "static"
            document.body.scrollTop = document.documentElement.scrollTop = nowScrollTop
            break;
        case '3':
            //仅禁止pc滚动事件
            document.removeEventListener('wheel', touchStart_js_scroll_puncture, { passive: false });
            break;
        default:
            break;
    }

}
