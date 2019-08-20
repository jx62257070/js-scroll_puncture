var nowScrollTop=0//初始化
//禁止滚轮
export function clickPop(){
    nowScrollTop=document.body.scrollTop || document.documentElement.scrollTop //将页面的scroolTop赋值给变量
    document.body.style.position="fixed"
    document.body.style.top = -nowScrollTop + 'px'
}
//激活滚轮
export function closePop(){
    document.body.style.position="static"
    document.body.scrollTop = document.documentElement.scrollTop = nowScrollTop
}
