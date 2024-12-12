import{r as b,j as r,m as p,u as R,v as T,w as F}from"./index-CUYmeXJl.js";class h{constructor(t=0,s="Network Error"){this.status=t,this.text=s}}const H=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},i={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:H()},x=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},E=(e,t="https://api.emailjs.com")=>{if(!e)return;const s=x(e);i.publicKey=s.publicKey,i.blockHeadless=s.blockHeadless,i.storageProvider=s.storageProvider,i.blockList=s.blockList,i.limitRate=s.limitRate,i.origin=s.origin||t},w=async(e,t,s={})=>{const o=await fetch(i.origin+e,{method:"POST",headers:s,body:t}),a=await o.text(),n=new h(o.status,a);if(o.ok)return n;throw n},j=(e,t,s)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s||typeof s!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},V=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},v=e=>e.webdriver||!e.languages||e.languages.length===0,k=()=>new h(451,"Unavailable For Headless Browser"),_=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},M=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},q=(e,t)=>e instanceof FormData?e.get(t):e[t],N=(e,t)=>{if(M(e))return!1;_(e.list,e.watchVariable);const s=q(t,e.watchVariable);return typeof s!="string"?!1:e.list.includes(s)},P=()=>new h(403,"Forbidden"),K=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},I=async(e,t,s)=>{const o=Number(await s.get(e)||0);return t-Date.now()+o},L=async(e,t,s)=>{if(!t.throttle||!s)return!1;K(t.throttle,t.id);const o=t.id||e;return await I(o,t.throttle,s)>0?!0:(await s.set(o,Date.now().toString()),!1)},S=()=>new h(429,"Too Many Requests"),B=async(e,t,s,o)=>{const a=x(o),n=a.publicKey||i.publicKey,l=a.blockHeadless||i.blockHeadless,d=a.storageProvider||i.storageProvider,m={...i.blockList,...a.blockList},u={...i.limitRate,...a.limitRate};return l&&v(navigator)?Promise.reject(k()):(j(n,e,t),V(s),s&&N(m,s)?Promise.reject(P()):await L(location.pathname,u,d)?Promise.reject(S()):w("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:n,service_id:e,template_id:t,template_params:s}),{"Content-type":"application/json"}))},O=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},D=e=>typeof e=="string"?document.querySelector(e):e,C=async(e,t,s,o)=>{const a=x(o),n=a.publicKey||i.publicKey,l=a.blockHeadless||i.blockHeadless,d=i.storageProvider||a.storageProvider,m={...i.blockList,...a.blockList},u={...i.limitRate,...a.limitRate};if(l&&v(navigator))return Promise.reject(k());const g=D(s);j(n,e,t),O(g);const c=new FormData(g);return N(m,c)?Promise.reject(P()):await L(location.pathname,u,d)?Promise.reject(S()):(c.append("lib_version","4.4.1"),c.append("service_id",e),c.append("template_id",t),c.append("user_id",n),w("/api/v1.0/email/send-form",c))},A={init:E,send:B,sendForm:C,EmailJSResponseStatus:h},W=()=>{const e=b.useRef(),[t,s]=b.useState(!1),[o,a]=b.useState(!1),[n,l]=b.useState(!1),d=async m=>{m.preventDefault(),s(!0),l(!1);try{await A.sendForm("service_05yuc79","template_w9klutf",e.current,"W0xvhhaN2bwsc4ILf"),a(!0),e.current.reset()}catch(u){l(!0),console.error("Error sending email:",u)}finally{s(!1)}};return r.jsx("section",{id:"contact",className:"py-20 text-gray-300 backdrop-blur-0",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[r.jsxs(p.div,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:1.5},className:"text-center mb-16",children:[r.jsx("h2",{className:"text-4xl font-extrabold text-white mb-4",children:"Get in Touch"}),r.jsx("p",{className:"text-gray-400 text-lg max-w-3xl mx-auto",children:"Have a project in mind or want to collaborate? Feel free to reach out!"})]}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12",children:[r.jsx(p.div,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:.5},children:r.jsxs("div",{className:"space-y-8 bg-gray-800/50 p-6 rounded-lg shadow-lg backdrop-blur-md",children:[r.jsx(f,{icon:r.jsx(R,{}),title:"Email",text:"celestius@gmail.com"}),r.jsx(f,{icon:r.jsx(T,{}),title:"Phone",text:"9342484483"}),r.jsx(f,{icon:r.jsx(F,{}),title:"Location",text:"Chennai, India"})]})}),r.jsx(p.div,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.5},children:r.jsxs("form",{ref:e,onSubmit:d,className:"space-y-6 bg-gray-800/50 p-6 rounded-lg shadow-lg backdrop-blur-md",children:[r.jsx(y,{id:"name",label:"Your Name",type:"text",name:"name",required:!0}),r.jsx(y,{id:"email",label:"Your Email",type:"email",name:"email",required:!0}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"message",className:"block text-gray-300 mb-2",children:"Message"}),r.jsx("textarea",{id:"message",name:"message",required:!0,rows:"4",className:"w-full bg-gray-700 text-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),r.jsx("button",{type:"submit",disabled:t,className:"w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg transition-colors disabled:opacity-50",children:t?r.jsx("div",{className:"animate-spin w-6 h-6 border-4 border-t-4 border-blue-500 rounded-full mx-auto"}):"Send Message"}),o&&r.jsx("p",{className:"text-green-400 text-center mt-2",children:"Message sent successfully!"}),n&&r.jsx("p",{className:"text-red-400 text-center mt-2",children:"Something went wrong, please try again."})]})})]})]})})},f=({icon:e,title:t,text:s})=>r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx("div",{className:"w-12 h-12 bg-blue-600/50 rounded-full flex items-center justify-center text-white text-xl",children:e}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-white font-semibold",children:t}),r.jsx("p",{className:"text-gray-400",children:s})]})]}),y=({id:e,label:t,type:s,name:o,required:a})=>r.jsxs("div",{children:[r.jsx("label",{htmlFor:e,className:"block text-gray-300 mb-2",children:t}),r.jsx("input",{type:s,id:e,name:o,required:a,className:"w-full bg-gray-700 text-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"})]});export{W as default};
