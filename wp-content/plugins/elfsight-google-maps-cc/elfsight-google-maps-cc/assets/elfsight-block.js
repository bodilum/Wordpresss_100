/*
    Google Maps
    Version: 2.4.2
    Release date: Fri Mar 26 2021

    https://elfsight.com

    Copyright (c) 2021 Elfsight, LLC. ALL RIGHTS RESERVED
*/

!function(wp,$){"use strict";let IconBlock=function(e){return wp.element.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"dashicon"},[wp.element.createElement("path",{d:"M4.403 17.907L9.16 13.15l5.443 5.443A8.424 8.424 0 0 1 9.938 20a8.37 8.37 0 0 1-5.535-2.093zm9.571-5.964s1.914-2.136 3.229-4.543a8.302 8.302 0 0 1 1.128 4.2 8.33 8.33 0 0 1-1.771 5.157l-5.507-5.507 1.321-1.307c.872 1.193 1.6 2 1.6 2zM9.446 3.52c0 1.258.635 2.75 1.428 4.115l-8.193 8.193A8.257 8.257 0 0 1 1.538 11.6c0-4.479 3.508-8.136 7.915-8.4 0 .114-.007.214-.007.321zm-3.779 6.2c.671.229 1.514.065 1.936-.5.335-.407.4-.95.371-1.457H6.238v.615c.336.007.693 0 1.036.007-.086.307-.293.578-.593.693-.435.192-.957.05-1.278-.293a.892.892 0 0 1-.229-.4c-.228-.586.136-1.3.736-1.472.371-.135.757.007 1.078.207.172-.15.329-.314.472-.478a1.817 1.817 0 0 0-1.3-.443c-.879.007-1.664.764-1.722 1.636v.171c0 .093 0 .186.015.286A1.865 1.865 0 0 0 5.667 9.72zM13.974 0a3.496 3.496 0 0 1 3.529 3.529c0 2.607-3.529 6.55-3.529 6.55s-3.528-3.929-3.528-6.55A3.5 3.5 0 0 1 13.974 0zm0 4.793c.707 0 1.264-.557 1.264-1.264 0-.715-.557-1.265-1.264-1.265-.714 0-1.264.557-1.264 1.265 0 .714.557 1.264 1.264 1.264z",id:"a"})])};if(void 0===wp.components||void 0===wp.blocks||void 0===wp.element||void 0===wp.i18n)return!1;const{Component:Component}=window.React,{__:__}=wp.i18n,el=wp.element.createElement,registerBlockType=wp.blocks.registerBlockType,ServerSideRender=wp.components.ServerSideRender,restApiUrl=window.wpApiSettings.root+"/elfsight-google-maps/admin",restApiNonce=window.wpApiSettings.nonce;let initTimeout;function initWidget(){clearTimeout(initTimeout),initTimeout=setTimeout(function(){const widgets=document.querySelectorAll("[data-elfsight-google-maps-options]");Array.prototype.slice.call(widgets).forEach(function(widget){const options=widget.getAttribute("data-elfsight-google-maps-options"),data=JSON.parse(decodeURIComponent(options));eval("eappsGoogleMaps(widget, data)"),widget.removeAttribute("data-elfsight-google-maps-options"),widget.removeAttribute("data-elfsight-google-maps-version"),widget.closest(".elfsight-block-widget-container").classList.add("elfsight-block-widget-initialized")})},1500)}async function getWidgets(){const e=await $.ajax({type:"GET",url:restApiUrl+"/widgets/list/",beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",restApiNonce)}});return e.status?[e.data,e.data.reduce(function(e,t){return e[t.id]=t,e},{})]:[]}function getWidgetId(e){let t;return e.some(function(e){return"1"===e.active&&(t=parseInt(e.id),!0)}),t}class Widget extends Component{componentDidMount(){initWidget()}componentDidUpdate(){initWidget()}render(){const{id:e}=this.props;return e?el("div",{className:"elfsight-block-widget-container"},el(ServerSideRender,{block:"elfsight-google-maps/block",attributes:{id:e}}),el("div",{className:"elfsight-block-widget-placeholder"},el(IconBlock,{}),el("span",{},"Google Maps"))):null}}class Button extends Component{render(){const{href:e,className:t,text:i}=this.props,o=document.location.origin+document.location.pathname.replace("post.php","admin.php")+"?page=elfsight-google-maps#";return el("a",{href:o+e,target:"_blank",className:t},i)}}class WidgetSelect extends Component{constructor(){super(),this.state={widgets:[]}}setWidget(e){e.preventDefault();const{setAttributes:t}=this.props,i=e.target.querySelector("option:checked");t({id:parseInt(i.value)})}componentDidMount(){const{id:e,setAttributes:t}=this.props;getWidgets().then(i=>{const[o,s]=i;this.setState({widgets:o});const n=!(!s[e]||"1"!==s[e].active);t(!n&&s?{id:getWidgetId(o),exist:!0}:{id:e,exist:n})})}render(){const{widgets:e}=this.state,{id:t}=this.props;return e.length>0?el("div",{className:"components-base-control"},el("div",{className:"components-base-control__field"},el("select",{className:"components-select-control__input",id:"elfsight-google-maps-block-control-id",value:t,onChange:this.setWidget.bind(this)},e.map(({id:e,name:t})=>el("option",{value:e},t))))):null}}registerBlockType("elfsight-google-maps/block",{title:"Google Maps",description:"Start creating Google Maps on your website with the incredible Elfsight map builder",icon:{src:IconBlock},category:"widgets",keywords:["Google Maps","Elfsight"],supports:{html:!1},attributes:{id:{type:"number"},exist:{type:"bool",default:!1}},edit:function(e){const{attributes:{id:t,exist:i},setAttributes:o}=e;return getWidgets().then(e=>{const[s,n]=e;o(!i&&s?{id:getWidgetId(s),exist:!0}:{id:t,exist:i})}),el(wp.element.Fragment,{},el(wp.editor.InspectorControls,{},el(wp.components.PanelBody,{className:"elfsight-block-panel",title:"Select widget"},el(WidgetSelect,{id:t,setAttributes:function(t){e.setAttributes(t)}}),i?el("div",{className:"elfsight-block-panel-group"},el(Button,{href:"/edit-widget/"+t,className:"components-button is-button is-default is-large elfsight-block-panel-button",text:__("Edit Widget")}),el(Button,{href:"/add-widget/",className:"elfsight-block-panel-link",text:__("Create new widget")})):el("div",{className:"elfsight-block-panel-group"},el("span",{},__("No widgets yet")),el(Button,{href:"/add-widget/",className:"components-button is-button is-default is-primary is-large elfsight-block-panel-button",text:__("Create Widget")})))),i?el(Widget,{id:t,exist:i}):null,i?null:el("div",{className:"elfsight-block-form"},el("div",{className:"elfsight-block-form-header"},el(IconBlock,{}),el("span",{},"Google Maps")),el("div",{className:"elfsight-block-form-text"},__("Start creating Google Maps on your website with the incredible Elfsight map builder"),el("br"),el("strong",{},__("Let's create your first widget!"))),el(Button,{href:"/add-widget/",className:"components-button is-button is-default is-primary is-large elfsight-block-form-button",text:__("Create Widget")})))},save:function(){return null}})}(wp,jQuery);