"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[888],{2783:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=r(5893),t=r(1151);const i={sidebar_position:2},a="Cable Payment",o={id:"Cable-Service/cable",title:"Cable Payment",description:"- network: Network Provider int",source:"@site/docs/Cable-Service/cable.md",sourceDirName:"Cable-Service",slug:"/Cable-Service/cable",permalink:"/subpadi-docs/docs/Cable-Service/cable",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Cable- API Service",permalink:"/subpadi-docs/docs/category/cable--api-service"},next:{title:"Validate IUC",permalink:"/subpadi-docs/docs/Cable-Service/validateiuc"}},d={},c=[{value:"Send a post request with the payload",id:"send-a-post-request-with-the-payload",level:3},{value:"Response",id:"response",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"cable-payment",children:"Cable Payment"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"network"}),": Network Provider ",(0,s.jsx)(n.code,{children:"int"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"1: 'MTN'"}),"\n",(0,s.jsx)(n.li,{children:"2: 'GLO'"}),"\n",(0,s.jsx)(n.li,{children:"3: '9MOBILE'"}),"\n",(0,s.jsx)(n.li,{children:"4: 'AIRTEL'"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"amount"}),": Your password ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"mobile_number"}),": Recipient number ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"airtime_type"}),": Airtime type ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Port_number"}),": Port number default to ",(0,s.jsx)(n.strong,{children:"true"})," ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests\nimport json\npayload = {\n"network": 1,\n"amount" :"200",\n"mobile_number": "07062198688",\n"Ported_number":true,\n"airtime_type":"VTU"\n}\nuser_token = \'eacf1ab727d134b254361d834c28a2bf6ab0a111\'\nheaders = {\n      "Content-Type": "application/json",\n      "Authorization": f\'Token {user_token}\'\n} \n# jsonify the payload\ndata = json.dumps(payload)\n\n'})}),"\n",(0,s.jsx)(n.h3,{id:"send-a-post-request-with-the-payload",children:"Send a post request with the payload"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'url = "https://subpadi.com/api/topup/"\nres = requests.post(url, data=data, headers=headers)\n'})}),"\n",(0,s.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'{\n    "id": 76,\n    "airtime_type": "VTU",\n    "network": 1,\n    "tran_id": "Airtime-SVKjDfker7634",\n    "paid_amount": "200.0",\n    "mobile_number": "08011111111",\n    "amount": "200",\n    "plan_amount": "N200",\n    "plan_network": "MTN",\n    "balance_before": "535585.0",\n    "balance_after": "535385.0",\n    "Status": "successful",\n    "create_date": "2023-12-13T16:20:26.041472",\n    "Ported_number": true,\n    "api_response": "TRANSACTION SUCCESSFUL",\n    "ident": "20231213162024337872761638e639b6b7-814d-4d3a-9da0-dabdee3b8de9"\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["View code in other programming languages ",(0,s.jsx)(n.a,{href:"https://documenter.getpostman.com/view/18149105/2s93CRJqgM#b9b1e802-d90a-4c4e-a96f-61aae9dbcd99",children:"here"})]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>a});var s=r(7294);const t={},i=s.createContext(t);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);