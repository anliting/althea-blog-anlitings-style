import{load}from '/lib/core.static.js'
export default async blog=>{
    let module=await load.module()
    let s=await module.getByPath('plugins/anlitings-style-blog/blog.css')
    blog._style(document.createTextNode(s))
}
