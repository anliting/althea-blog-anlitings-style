var style = `
/*
/setting Plugins would need this.
*/
table.bordered{
    border-collapse:collapse;
}
table.bordered th{
    border:1px solid black;
}
table.bordered td{
    border:1px solid black;
}
table.padding4px th{
    padding:4px;
}
table.padding4px td{
    padding:4px;
}
a:active,a:link,a:hover,a:visited{
    color:blue;
}
`;

var blogStyle = `
.post table.bordered{
    border-collapse:collapse;
}
.post table.bordered th{
    border:1px solid black;
}
.post table.bordered td{
    border:1px solid black;
}
.post table.padding4px th{
    padding:4px;
}
.post table.padding4px td{
    padding:4px;
}
::-webkit-scrollbar{
    width:12px;
}
::-webkit-scrollbar-track{
    background:#DDD;
}
::-webkit-scrollbar-thumb{
    border-radius:6px;
    background:#BBB;
}
body{
    font-family:font_serif;
}
@font-face{
    font-family:font_serif;
    unicode-range:U+00-024F;
    src:
        local('CMU Serif'),
        local('Times New Roman'),
        local('Latin Modern Roman'),
        local('Georgia'),
        local('Serif')
    ;
}
@font-face{
    font-family:font_serif;
    unicode-range:U+4E00-9FFF,U+3400-4DBF,U+20000-2A6DF,U+2A700-2B73F,U+2B740-2B81F,U+2B820-2CEAF,U+2CEB0-2EBE0,U+F900-FAFF,U+2F800-2FA1F,U+2F00-2FDF,U+2E80-2EFF,U+31C0-31EF,U+2FF0-2FFF,U+3000-303F,U+16FE0-16FFF,U+FE30-FE4F,U+FF00-FFEF,U+FE50-FE6F,U+FE10-FE1F;
    src:
        local('AR PL UKai CN Book'),
        local('MingLiU'),
        local('PMingLiU')
    ;
}
@font-face{
    font-family:font_sansserif;
    unicode-range:U+00-024F;
    src:
        local('CMU Sans Serif'),
        local('Arial'),
        local('Sans-Serif')
    ;
}
@font-face{
    font-family:font_sansserif;
    unicode-range:U+4E00-9FFF,U+3400-4DBF,U+20000-2A6DF,U+2A700-2B73F,U+2B740-2B81F,U+2B820-2CEAF,U+2CEB0-2EBE0,U+F900-FAFF,U+2F800-2FA1F,U+2F00-2FDF,U+2E80-2EFF,U+31C0-31EF,U+2FF0-2FFF,U+3000-303F,U+16FE0-16FFF,U+FE30-FE4F,U+FF00-FFEF,U+FE50-FE6F,U+FE10-FE1F;
    src:
        local('Noto Sans CJK TC'),
        local('Ubuntu'),
        local('Roboto'),
        local('LiHei Pro'),
        local('Microsoft JhengHei'),
        local('微軟正黑體'),
    ;
}
.center_align_variable_length_element_outer{
    overflow:hidden;
}
.center_align_variable_length_element_middle{
    position:relative;
    float:left;
    left:50%;
}
.center_align_variable_length_element_inner{
    position:relative;
    float:left;
    left:-50%;
}
.post{
    word-wrap:break-word;
}
.post a.functionbutton{
    text-decoration:none;
    color:darkgray;
}
.post a.functionbutton:hover{
    color:black;
}
textarea.textarea_comment{
    width:61%;
    border:1px solid lightgray;
    padding:4px;
    background:none;
}
.post a.title{
    text-decoration:none;
    font-weight:normal;
    font-family:font_serif;
    color:black;
}
.tag_selected{
    border:1px solid lightgray;
    padding:4px;
    font-family:font_sansserif;
}
.comments{
    width:61%;
    margin-bottom:8px;
    border:1px solid lightgray;
    padding:4px;
}
/* start 2015-10-04 */
::selection{
    background:gray;
    color:white;
    text-decoration-color:white;
}
::-moz-selection{
    background:gray;
    color:white;
    text-decoration-color:white;
}
/* end 2015-10-04 */
/* start 2016-09-20 */
a:active,a:link,a:hover,a:visited{
    color:blue;
}
.blog{
    position:relative;
    margin:0 auto;
    max-width:calc(100%);
    width:600px;
}
.blog>.header{
    margin:64px 0px;
}
.blog>.header>.title{
    text-align:center;
    font-family:font_serif;
}
.blog>.header>.title>a{
    text-decoration:none;
    color:black;
}
@media(max-width:640px){
    .blog>.header>.title>a{
        font-size:36px;
    }
}
@media(min-width:640px){
    .blog>.header>.title>a{
        font-size:48px;
    }
}
.blog>.header>.tagline{
    font-family:font_serif;
    margin-bottom:48px;
    text-align:center;
}
@media(max-width:640px){
    .blog>.header>.tagline{
        font-size:18px;
    }
}
@media(min-width:640px){
    .blog>.header>.tagline{
        font-size:24px;
    }
}
.blog>.header>.navigationBar{
    margin:24px;
    text-align:center;
}
.blog>.header>.navigationBar a{
    color:black;
    margin:8px;
    text-transform:uppercase;
    text-decoration:none;
}
.blog>.header>.searchForTags{
    text-align:center;
}
.blog>.header>.searchForTags>.selectedTags{
    display:inline-block;
}
.blog>.header>.searchForTags>.selectedTags a{
    text-decoration:none;
}
.blog>.header>.searchForTags>input{
    padding:4px;
    border:1px solid lightgray;
}
.blog>.header>.tags{
    font-family:font_sansserif;
}
.blog>.header>.index{
    line-height:1.2;
}
.blog>.contents h1{
    font-family:font_serif;
}
.blog>.contents h2{
    font-family:font_serif;
}
.blog>.contents h3{
    font-family:font_serif;
}
.blog>.contents h4{
    font-family:font_serif;
}
.blog>.contents h5{
    font-family:font_serif;
}
.blog>.contents h6{
    font-family:font_serif;
}
@media(max-width:480px){
    .blog>.contents h1{
        font-size:1.52em;
    }
    .blog>.contents h2{
        font-size:1.32em;
    }
    .blog>.contents h3{
        font-size:1.15em;
    }
}
@media(min-width:480px){
}
.blog>.footer{
    margin:32px;
    text-align:center;
}
/* end 2016-09-20 */
/* start 2017-06-29 */
body{
    overflow-y:scroll;
}
.post{
    overflow:hidden;
    background-color:white;
    padding:16px;
    margin-top:32px;
    /* ambient light */
    box-shadow:0 1px 3px rgba(0,0,0,.4);
    transition:all .4s cubic-bezier(.2,.8,.2,1);
}
.post:hover{
    /* weakened ambient light and key light */
    box-shadow:0 1px 2px rgba(0,0,0,.4),0 8px 16px rgba(0,0,0,.2);
}
/* end 2017-06-29 */
/* start 2018-11-29 */
.blog>.contents>.post>.content{
    margin:1em 0;
}
/* end 2018-11-29 */
`;

var blog = blog=>{
    blog._style(
        document.createTextNode(blogStyle),
        document.createTextNode(style)
    );
};

export default blog;
