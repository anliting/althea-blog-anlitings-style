export default`
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
    font-family:font_sansserif;
    src:
        local('Ubuntu'),
        local('Roboto'),
        local('LiHei Pro'),
        local('Microsoft JhengHei'),
        local('微軟正黑體'),
    ;
}
@font-face{
    font-family:font_serif;
    src:
        local('AR PL UKai CN'),
        local('MingLiU'),
        local('PMingLiU')
    ;
}
@font-face{
    font-family:font_serif;
    src:
        local('AR PL UKai CN'),
        local('MingLiU'),
        local('PMingLiU')
    ;
}
@font-face{
    font-family:font_sansserif;
    unicode-range:U+00-024F;
    src:
        local('Arial'),
        local('Sans-Serif')
    ;
}
@font-face{
    font-family:font_serif;
    unicode-range:U+00-024F;
    src:
        local('Times New Roman'),
        local('Latin Modern Roman'),
        local('Georgia'),
        local('Serif')
    ;
}
@font-face{
    font-family:font_serif;
    font-style:italic;
    unicode-range:U+00-024F;
    src:
        local('Times New Roman'),
        local('Latin Modern Roman'),
        local('Georgia'),
        local('Serif')
    ;
}
div.center_align_variable_length_element_outer{
    overflow:hidden;
}
div.center_align_variable_length_element_middle{
    position:relative;
    float:left;
    left:50%;
}
div.center_align_variable_length_element_inner{
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
span.tag_selected{
    border:1px solid lightgray;
    padding:4px;
    font-family:font_sansserif;
}
div.comments{
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
div.blog{
    position:relative;
    margin:0 auto;
    max-width:calc(100%);
    width:600px;
}
div.blog>div.header{
    margin:64px 0px;
}
div.blog>div.header>div.title{
    text-align:center;
    font-family:font_serif;
}
div.blog>div.header>div.title>a{
    text-decoration:none;
    color:black;
}
@media(max-width:640px){
    div.blog>div.header>div.title>a{
        font-size:36px;
    }
}
@media(min-width:640px){
    div.blog>div.header>div.title>a{
        font-size:48px;
    }
}
div.blog>div.header>div.tagline{
    font-family:font_serif;
    margin-bottom:48px;
    text-align:center;
}
@media(max-width:640px){
    div.blog>div.header>div.tagline{
        font-size:18px;
    }
}
@media(min-width:640px){
    div.blog>div.header>div.tagline{
        font-size:24px;
    }
}
div.blog>div.header>div.navigationBar{
    margin:24px;
    text-align:center;
}
div.blog>div.header>div.navigationBar a{
    color:black;
    margin:8px;
    text-transform:uppercase;
    text-decoration:none;
}
div.blog>div.header>div.searchForTags{
    text-align:center;
}
div.blog>div.header>div.searchForTags>div.selectedTags{
    display:inline-block;
}
div.blog>div.header>div.searchForTags>div.selectedTags a{
    text-decoration:none;
}
div.blog>div.header>div.searchForTags>input{
    padding:4px;
    border:1px solid lightgray;
}
div.blog>div.header>div.tags{
    font-family:font_sansserif;
}
div.blog>div.header>div.index{
    line-height:1.2;
}
div.blog>div.contents{
    text-align:justify;
}
div.blog>div.contents h1{
    font-family:font_serif;
}
div.blog>div.contents h2{
    font-family:font_serif;
}
div.blog>div.contents h3{
    font-family:font_serif;
}
div.blog>div.contents h4{
    font-family:font_serif;
}
div.blog>div.contents h5{
    font-family:font_serif;
}
div.blog>div.contents h6{
    font-family:font_serif;
}
@media(max-width:480px){
    div.blog>div.contents h1{
        font-size:1.52em;
    }
    div.blog>div.contents h2{
        font-size:1.32em;
    }
    div.blog>div.contents h3{
        font-size:1.15em;
    }
}
@media(min-width:480px){
}
div.blog>div.contents h4+div{
    margin-left:32px;
}
div.blog>div.contents h5+div{
    margin-left:32px;
}
div.blog>div.contents h6+div{
    margin-left:32px;
}
div.blog>div.footer{
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
`
