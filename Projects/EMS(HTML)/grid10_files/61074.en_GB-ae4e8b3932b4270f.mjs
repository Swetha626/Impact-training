(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[61074],{823493:(e,o,t)=>{var r=t(23279),i=t(513218);e.exports=function(e,o,t){var s=!0,n=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return i(t)&&(s="leading"in t?!!t.leading:s,n="trailing"in t?!!t.trailing:n),r(e,o,{leading:s,maxWait:o,trailing:n})}},328369:(e,o,t)=>{t.d(o,{j:()=>s});const r={"á":"a","à":"a","â":"a","ä":"a","ã":"a","å":"a","æ":"a","ç":"c","é":"e","è":"e","ê":"e","ë":"e","í":"i","ì":"i","î":"i","ï":"i","ñ":"n","ó":"o","ò":"o","ô":"o","ö":"o","õ":"o","ø":"o","œ":"o","ß":"s","ú":"u","ù":"u","û":"u","ü":"u"},i=e=>{if(!e)return"";let o="";for(let t=0;t<e.length;t+=1)o+=r[e.charAt(t)]||e.charAt(t);return o},s=(e,o,t="name")=>{const r=o.toLowerCase();return e.filter((e=>((e,o)=>{const t=o.split(" "),r=e.split(" ");let s=0;for(let n=0;n<r.length;n+=1)(i(r[n]).includes(t[s])||r[n].includes(t[s]))&&(s+=1);return s===t.length})(e[t].toLowerCase(),r)))}},169158:(e,o,t)=>{t.d(o,{Z:()=>c});var r=t(667294),i=t(823493),s=t.n(i);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}class c extends r.PureComponent{constructor(...e){super(...e),n(this,"setContainerRef",(e=>{this.containerRef=e})),n(this,"fetchMoreIfNecessary",s()((()=>{const{fetchMore:e,scrollBuffer:o}=this.props;e&&this.containerRef&&(({scrollTop:e,clientHeight:o,scrollHeight:t},r)=>e+o+(r?r(o):2*o)>t)(this.containerRef,o)&&e()}),200))}componentDidMount(){setTimeout(this.fetchMoreIfNecessary)}componentDidUpdate(){this.fetchMoreIfNecessary()}render(){const{children:e}=this.props;return e({onScroll:this.fetchMoreIfNecessary,setRef:this.setContainerRef})}}},463490:(e,o,t)=>{t.d(o,{Z:()=>a});var r=t(537336),i=t(89061),s=t(883119),n=t(785893);const c=({collaborator_count:e,useLegoLayout:o,type:t})=>o?(0,n.jsx)(s.xu,{marginEnd:e?2:0,children:(0,n.jsx)(r.Z,{type:t})}):(0,n.jsx)(r.Z,{type:t}),a=({board:e,showCollaborativeIcon:o,showPrivateIcon:t,showProtectedIcon:a,showSectionsIcon:d,useLegoLayout:l})=>{var u;const _=(null==e||null===(u=e.collaborating_users)||void 0===u?void 0:u.length)||0;return o||t||a||d?(0,n.jsxs)(s.xu,{display:"flex",direction:"row",marginEnd:l?0:5,dangerouslySetInlineStyle:{__style:{paddingLeft:8}},alignItems:"center",children:[t&&(0,n.jsx)(c,{collaborator_count:_,useLegoLayout:l,type:"secret"}),a&&(0,n.jsx)(c,{collaborator_count:_,useLegoLayout:l,type:"protected"}),o&&(l?(0,n.jsx)(i.Z,{board:e,isCompact:!0,ownerOnly:!1}):(0,n.jsx)(r.Z,{type:"group"})),d&&(0,n.jsx)(r.Z,{type:"sections"})]}):null}},421816:(e,o,t)=>{t.d(o,{Z:()=>s});var r=t(883119),i=t(785893);const s=({image_url:e,naturalHeight:o,naturalWidth:t})=>(0,i.jsx)(r.xu,{"aria-hidden":"true",marginBottom:1,marginEnd:2,marginTop:1,overflow:"hidden",width:48,height:48,children:(0,i.jsx)(r.zd,{wash:!0,width:48,height:48,rounding:2,children:(0,i.jsx)(r.Ee,{src:e,alt:"",naturalHeight:o,naturalWidth:t})})})},89061:(e,o,t)=>{t.d(o,{Z:()=>u});var r=t(189734),i=t.n(r),s=t(898781),n=t(19121),c=t(883119),a=t(349700),d=t(785893);function l(e){var o,t,r,i;const s=null!==(o=null!==(t=null==e?void 0:e.imageMediumUrl)&&void 0!==t?t:null==e?void 0:e.image_medium_url)&&void 0!==o?o:"";return{name:null!==(r=null!==(i=null==e?void 0:e.fullName)&&void 0!==i?i:null==e?void 0:e.full_name)&&void 0!==r?r:"",src:"https://s.pinimg.com/images/user/default_75.png"===s?void 0:s}}function u({board:e,forceViewer:o,isCompact:t,ownerOnly:r}){var u,_,b,p,I;const h=(0,s.ZP)(),f=(0,n.Z)(),m=r?[l(null==e?void 0:e.owner)]:function(e,o,t){const{collaborated_by_me:r,collaborating_users:s,owner:n}=null!=e?e:{},c=null!=s?s:[],a=[n];if(r||t){const e=c.findIndex((e=>o.isAuth&&e.id===o.id));if(-1!==e){const o=c.splice(e,1)[0];a.push(o)}else a.push(o)}const d=i()(c,"full_name");return[...a,...d]}(e,f,o).map(l),v=m.slice(0,3).map((e=>e.name));let y="";switch(m.length){case 3:y=(0,a.Wc)(`${h.bt("{{ first }}, {{ second }} and {{ last }}", "{{ first }}, {{ second }}, and {{ last }}", "CollaboratorsFacePile.AvatarGroup.accessibilityLabel.usernames.ThreeAvatars", undefined, true)}`,{first:`${null!==(u=v[0])&&void 0!==u?u:""}`,second:`${null!==(_=v[1])&&void 0!==_?_:""}`,last:`${null!==(b=v[2])&&void 0!==b?b:""}`});break;case 2:y=(0,a.Wc)(`${h.bt("{{ first }} and {{ second }}", "{{ first }} and {{ second }}", "CollaboratorsFacePile.AvatarGroup.accessibilityLabel.usernames.TwoAvatars", undefined, true)}`,{first:`${null!==(p=v[0])&&void 0!==p?p:""}`,second:`${null!==(I=v[1])&&void 0!==I?I:""}`});break;default:y=v.join(", ")}const g=m.length>3?(0,a.Wc)(`, ${h.nbt(["Collaborators: {{ userNames }} and {{ leftCount }} more.", "Collaborators: {{ userNames }} and {{ leftCount }} more."], m.length - 3, "CollaboratorsFacePile.AvatarGroup.accessibilityLabel.aboveThree", true)}`,{userNames:y,leftCount:""+(m.length-3)}):(0,a.Wc)(`, ${h.bt("Collaborators: {{ userNames }}.", "Collaborators: {{ userNames }}.", "CollaboratorsFacePile.AvatarGroup.accessibilityLabel.notAboveThree", undefined, true)}`,{userNames:y});return(0,d.jsx)(c.HE,{accessibilityLabel:g,collaborators:m,size:t?"xs":"sm"})}},537336:(e,o,t)=>{t.d(o,{Z:()=>n});var r=t(898781),i=t(883119),s=t(785893);const n=function({type:e}){const o=(0,r.ZP)(),t={group:{accessibilityLabel:o.bt("group board", "group board", "Board picker group board icon", undefined, true),icon:"people"},protected:{accessibilityLabel:o.bt("protected board", "protected board", "Board picker protected board icon", undefined, true),icon:"protect"},secret:{accessibilityLabel:o.bt("Secret board", "secret board", "Board picker secret board icon", undefined, true),icon:"lock"},sections:{accessibilityLabel:o.bt("board with sections", "board with sections", "Board picker board with sections icon", undefined, true),icon:"arrow-forward"},sectionsInline:{accessibilityLabel:o.bt("board with sections", "board with sections", "Board picker board with sections icon", undefined, true),icon:"arrow-down"}}[e];return(0,s.jsx)(i.xu,{marginStart:1,children:(0,s.jsx)(i.xu,{marginStart:2,children:"sections"===e||"sectionsInline"===e?(0,s.jsx)(i.JO,{accessibilityLabel:t.accessibilityLabel,icon:t.icon,size:"12",color:"default"}):(0,s.jsx)(i.JO,{accessibilityLabel:t.accessibilityLabel,icon:t.icon,size:16,color:"default"})})})}},223123:(e,o,t)=>{t.d(o,{Z:()=>l});var r=t(702664),i=t(6637),s=t(332611),n=t(886858),c=t(379725),a=t(414327),d=t(782677);function l(){const e=(0,r.useDispatch)(),o=(0,r.useSelector)((e=>e.resources));return async function({boardCreateOptions:t,deprecatedSchemaForNormalization:r}){var l,u;const _=await i.Z.create("BoardResource",t).callCreate(),b=null===(l=_.resource_response)||void 0===l?void 0:l.data,p=r?(0,d.Fv)(b,r):void 0;e((0,a.XM)("BoardResource",t,_,p)),e((0,s.fO)({event_type:20})),null!==(u=b.owner)&&void 0!==u&&u.id&&e((0,c.bi)("UserResource",{options:{user_id:b.owner.id,field_set_key:"save_behavior"}}));const I=o.BoardsResource||{},h=o.BoardsFeedResource||{};return Object.keys(I).forEach((o=>{var t;(0,n.k)(o).username===(null===(t=b.owner)||void 0===t?void 0:t.username)&&e((0,a.jB)("BoardsResource",o))})),Object.keys(h).forEach((o=>{var t;(0,n.k)(o).username===(null===(t=b.owner)||void 0===t?void 0:t.username)&&e((0,a.jB)("BoardsFeedResource",o))})),b}}},677324:(e,o,t)=>{t.d(o,{$n:()=>h,CE:()=>u,F$:()=>I,d9:()=>f,e1:()=>l,vB:()=>b});var r=t(647316),i=t(6637),s=t(935409),n=t(778821),c=t(379725),a=t(414327),d=t(875495);function l(e){return o=>{const{boardId:t,sectionIdBefore:r,sectionIdAfter:s,sourceSectionId:c,targetSectionId:a}=e;o((0,d._f)({feedType:n.DV.BOARD_SECTIONS,feedId:t,itemType:"board_section",sourceItemId:c,targetItemId:a}));const l={section_id:c,section_before:r||void 0,section_after:s||void 0};return i.Z.create("BoardSectionsReorderResource",l).callUpdate({showError:!1})}}function u(e,o){return t=>t((0,c.U2)("BoardSectionResource",{options:{field_set_key:o||"board_page",section_id:e}}))}function _(e,o){return{type:"SECTION_ADDED",payload:{boardId:e,section:o}}}function b({boardId:e,name:o,nameSource:t,pinImport:c,initialPinIds:l=[]},u,b){let p=0;"RECOMMENDATION"===t?p=1:"EDITED_RECOMMENDATION"===t&&(p=2);const I={board_id:e,initial_pins:c&&!c.all?c.pinIds:l,name:o,name_source:p,...b?{orbac_subject_id:b}:Object.freeze({})};return o=>i.Z.create("BoardSectionResource",I).callCreate({showError:!1}).then((({resource_response:{data:t}})=>{o(_(e,t)),o((0,d.vX)({feedId:e,feedType:n.DV.BOARD_SECTIONS,itemIds:[t.id],itemType:"board_section"})),o((0,s.Tq)(e,"pin_count")),o((0,a.jB)("BoardSectionsRepinResource",{board_id:e}));const{all:i,pinIds:l}=c||{all:!1,pinIds:[]};return i?new Promise(((i,s)=>o((0,r.Z)({inverseSelection:!0,selectedPinIds:l,source:{boardId:e,sectionId:null},target:{boardId:e,sectionId:t.id}},u)).then((()=>i(t))).catch(s))):(l.length>0&&o((0,d.N8)(n.DV.BOARD_PINS,e)),t)}))}function p(e,o){return{type:"SECTION_DELETED",payload:{boardId:e,sectionId:o}}}function I(e,o,t){return r=>i.Z.create("BoardSectionEditResource",{section_id:o,...t?{orbac_subject_id:t}:Object.freeze({})}).callDelete({showError:!1}).then((()=>Promise.all([r(p(e,o)),r((0,d.EX)({feedId:e,feedType:n.DV.BOARD_SECTIONS,itemIds:[o],itemType:"board_section"})),r((0,s.Tq)(e,"pin_count")),r((0,a.jB)("BoardSectionsRepinResource",{board_id:e}))])))}function h(e,o,t,r){return c=>i.Z.create("BoardSectionEditResource",{section_id:o,title:t,...r?{orbac_subject_id:r}:Object.freeze({})}).callCreate({showError:!1}).then((o=>{const t=o.resource_response.data;return c(function(e,o){return t=>{const r=o.board;var i,c,a,l,u;r&&r.id!==e?(t(p(e,null!==(i=o.id)&&void 0!==i?i:"")),t((0,d.EX)({feedId:e,feedType:n.DV.BOARD_SECTIONS,itemIds:[null!==(c=o.id)&&void 0!==c?c:""],itemType:"board_section"})),t((0,s.Tq)(e,"pin_count")),t(_(null!==(a=r.id)&&void 0!==a?a:"",o)),t((0,d.vX)({feedId:null!==(l=r.id)&&void 0!==l?l:"",feedType:n.DV.BOARD_SECTIONS,itemIds:[null!==(u=o.id)&&void 0!==u?u:""],itemType:"board_section"})),t((0,s.Tq)(e,"pin_count"))):t({type:"SECTION_UPDATED",payload:{boardId:e,section:o}})}}(e,t)),c((0,a.jB)("BoardSectionsRepinResource",{board_id:e})),t}))}function f(e,o,t){return r=>i.Z.create("BoardSectionsMergeResource",{source_section_id:o,target_section_id:t}).callUpdate({showError:!1}).then((i=>Promise.all([r(p(e,o)),r((0,a.jB)("BoardSectionsRepinResource",{board_id:e})),r(u(t)),r((0,d.N8)(n.DV.SECTION_PINS,t))]).then((()=>i))))}},647316:(e,o,t)=>{t.d(o,{Z:()=>b,S:()=>_});var r=t(6637),i=t(935409),s=t(778821),n=t(677324),c=t(124237);const a=e=>o=>{c.Z.showError(function(e,o){switch(e.api_error_code){case 2171:case 2172:case 2173:return o.bt("Please wait until the previous board action finishes.", "Please wait until the previous board action finishes.", " - ", undefined, true);default:return e.message}}(o,e))};var d=t(875495);const l=e=>(0,d.N8)(e.sectionId?s.DV.SECTION_PINS:s.DV.BOARD_PINS,e.sectionId||e.boardId);function u(e,o){const{source:t,target:r}=e;r.boardId!==t.boardId?(o((0,i.Tq)(t.boardId,"pin_count")),o((0,i.Tq)(r.boardId,"pin_count"))):t.sectionId&&r.sectionId||o((0,i.Tq)(r.boardId,"pin_count")),t.sectionId&&o((0,n.CE)(t.sectionId)),r.sectionId&&o((0,n.CE)(r.sectionId))}function _(e){return o=>{const{selectedPinIds:t,source:r,target:i}=e;o((0,d.EX)({feedId:r.sectionId||r.boardId,feedType:r.sectionId?s.DV.SECTION_PINS:s.DV.BOARD_PINS,itemIds:t,itemType:"pin"})),o((0,d.vX)({feedId:i.sectionId||i.boardId,feedType:i.sectionId?s.DV.SECTION_PINS:s.DV.BOARD_PINS,itemIds:t,itemType:"pin"})),u(e,o)}}function b(e,o){return t=>function(e,o,t){const{inverseSelection:i,selectedPinIds:n,source:c,target:u,orbacSubjectId:_}=e;if(c.boardId===u.boardId&&(c.sectionId||null)===(u.sectionId||null))return Promise.reject();if(i){const e={board_id:c.boardId,new_board_id:u.boardId,old_section_id:c.sectionId||void 0,new_section_id:u.sectionId||void 0,pin_ids:n,orbac_subject_id:_};return r.Z.create("BulkEditSelectAllResource",e).callUpdate({showError:!1}).then((()=>Promise.all([o(l(c)),o(l(u))]))).catch(a(t))}{const e=(e,t)=>{o((0,d.EX)({feedId:e.sectionId||e.boardId,feedType:e.sectionId?s.DV.SECTION_PINS:s.DV.BOARD_PINS,itemIds:n,itemType:"pin"})),o((0,d.vX)({feedId:t.sectionId||t.boardId,feedType:t.sectionId?s.DV.SECTION_PINS:s.DV.BOARD_PINS,itemIds:n,itemType:"pin"}))};e(c,u);const i=()=>e(u,c);if(u.boardId===c.boardId){if(u.sectionId){const e={section_id:u.sectionId,pins:n,orbac_subject_id:_};return r.Z.create("BoardSectionEditResource",e).callUpdate({showError:!1}).catch((e=>{i(),a(t)(e)}))}{const e={section_id:c.sectionId,pins:n,orbac_subject_id:_};return r.Z.create("BoardSectionPinsResource",e).callDelete({showError:!1}).catch((e=>{i(),a(t)(e)}))}}{const e={board_id:u.boardId,section_id:u.sectionId||void 0,pin_ids:n,orbac_subject_id:_};return r.Z.create("BulkEditResource",e).callUpdate({showError:!1}).catch((e=>{i(),a(t)(e)}))}}}(e,t,o).then((()=>u(e,t)))}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/61074.en_GB-ae4e8b3932b4270f.mjs.map