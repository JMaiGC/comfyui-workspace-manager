import{r as l}from"./input.js";import{W as S,a5 as r,ah as w,w as p,E as f,ai as _,aj as C}from"./App-q19TRUSx.js";import{u as b}from"./useDebounceFn-ld478fd0.js";function R(){const{isDirty:d,setIsDirty:h,setRoute:g,saveCurWorkflow:v,setCurFlowIDAndName:k}=l.useContext(S),E=l.useRef(d);l.useEffect(()=>{E.current=d},[d]),l.useEffect(()=>{const c=e=>{var n;if(document.visibilityState==="hidden")return;const t=C(e);if(t)switch(t===f.openSpotlightSearch&&e.preventDefault(),window.dispatchEvent(new CustomEvent(_,{detail:{shortcutType:t}})),t){case f.SAVE:v();break;case f.SAVE_AS:g("saveAsModal");break;case f.openSpotlightSearch:g("spotlightSearch");break}else(n=e.target)!=null&&n.matches("input, textarea")&&Object.keys(r.canvas.selected_nodes??{}).length&&m()},u=async()=>{var t,n,a,i;if(!((t=r)!=null&&t.graph)){console.error("🦄 Error in workspace manager! app.graph is not available in restoreCurWorkflow()");return}const e=(a=(n=r.graph.extra)==null?void 0:n[w])==null?void 0:a.id;if(e){const s=await((i=p)==null?void 0:i.get(e));s&&k(s),!(s!=null&&s.saveLock)&&s&&s.json!==JSON.stringify(r.graph.serialize())&&h(!0)}},o=r.graph.onConfigure;return r.graph.onConfigure=function(){o==null||o.apply(this,arguments),setTimeout(()=>{var t,n,a,i;const e=(n=(t=r.graph.extra)==null?void 0:t[w])==null?void 0:n.id;(e==null||e!=((i=(a=p)==null?void 0:a.curWorkflow)==null?void 0:i.id))&&k(null)},500)},document.addEventListener("click",e=>{Object.keys(r.canvas.selected_nodes??{}).length&&(r.canvas.node_over!=null||r.canvas.node_capturing_input!=null||r.canvas.node_widget!=null)&&m()}),document.addEventListener("keydown",c),u(),()=>{document.removeEventListener("keydown",c)}},[]);const y=async()=>{var u,o,e,t;if((o=(u=p)==null?void 0:u.curWorkflow)!=null&&o.saveLock||E.current)return;const c=r.graph.serialize();JSON.stringify(c)!==((t=(e=p)==null?void 0:e.curWorkflow)==null?void 0:t.json)&&h(!0)},[m,D]=b(y,900);return null}export{R as default};