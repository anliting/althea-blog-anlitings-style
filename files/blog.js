import style from'./style.js'
import blogStyle from'./blog/style.js'
export default blog=>{
    blog._style(
        document.createTextNode(blogStyle),
        document.createTextNode(style)
    )
}
