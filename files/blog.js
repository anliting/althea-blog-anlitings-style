import{dom}from '/lib/core.static.js'
import style from'./style.js'
import blogStyle from'./blog/style.js'
export default blog=>{
    blog._style(dom.tn(blogStyle),dom.tn(style))
}
