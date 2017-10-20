import{moduleLoader}from '/lib/core.static.js'
export default async blog=>{
    let module=await moduleLoader()
    let s=await module.getByPath('plugins/althea-anlitings-style-blog/blog.css')
    blog._style(document.createTextNode(s))
}
