(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[0],{226:function(e,n,o){},337:function(e,n,o){},341:function(e,n,o){"use strict";o.r(n);var t=o(0),r=o.n(t),a=o(21),i=o.n(a),l=(o(226),function(){return l=Object.assign||function(e){for(var n,o=1,t=arguments.length;o<t;o++)for(var r in n=arguments[o])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},l.apply(this,arguments)}),c=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(o[t[r]]=e[t[r]])}return o},d=Symbol("NiceModalId"),s={},u=r.a.createContext(s),m=r.a.createContext(null),p={},h={},f=0,b=function(){throw new Error("No dispatch method detected, did you embed your app with NiceModal.Provider?")},j=function(){return"_nice_modal_"+f++},v=function(e,n){var o,t,r;switch(void 0===e&&(e=s),n.type){case"nice-modal/show":var a=n.payload,i=a.modalId,c=a.args;return l(l({},e),((o={})[i]=l(l({},e[i]),{id:i,args:c,visible:!!h[i],delayVisible:!h[i]}),o));case"nice-modal/hide":return e[i=n.payload.modalId]?l(l({},e),((t={})[i]=l(l({},e[i]),{visible:!1}),t)):e;case"nice-modal/remove":i=n.payload.modalId;var d=l({},e);return delete d[i],d;case"nice-modal/set-flags":var u=n.payload,m=(i=u.modalId,u.flags);return l(l({},e),((r={})[i]=l(l({},e[i]),m),r));default:return e}};var M={},x={},O=function(e){return"string"===typeof e?e:(e[d]||(e[d]=j()),e[d])};function g(e,n){var o=O(e);if("string"===typeof e||p[o]||k(o,e),b(function(e,n){return{type:"nice-modal/show",payload:{modalId:e,args:n}}}(o,n)),!M[o]){var t,r,a=new Promise((function(e,n){t=e,r=n}));M[o]={resolve:t,reject:r,promise:a}}return M[o].promise}function y(e){var n=O(e);if(b(function(e){return{type:"nice-modal/hide",payload:{modalId:e}}}(n)),delete M[n],!x[n]){var o,t,r=new Promise((function(e,n){o=e,t=n}));x[n]={resolve:o,reject:t,promise:r}}return x[n].promise}var w=function(e){var n=O(e);b(function(e){return{type:"nice-modal/remove",payload:{modalId:e}}}(n)),delete M[n],delete x[n]};function C(e,n){var o=Object(t.useContext)(u),r=Object(t.useContext)(m),a=null,i=e&&"string"!==typeof e;if(!(a=e?O(e):r))throw new Error("No modal id found in NiceModal.useModal.");var l=a;Object(t.useEffect)((function(){i&&!p[l]&&k(l,e,n)}),[i,l,e,n]);var c=o[l],d=Object(t.useCallback)((function(e){return g(l,e)}),[l]),s=Object(t.useCallback)((function(){return y(l)}),[l]),h=Object(t.useCallback)((function(){return w(l)}),[l]),f=Object(t.useCallback)((function(e){var n;null===(n=M[l])||void 0===n||n.resolve(e),delete M[l]}),[l]),b=Object(t.useCallback)((function(e){var n;null===(n=M[l])||void 0===n||n.reject(e),delete M[l]}),[l]),j=Object(t.useCallback)((function(e){var n;null===(n=x[l])||void 0===n||n.resolve(e),delete x[l]}),[l]);return Object(t.useMemo)((function(){return{id:l,args:null===c||void 0===c?void 0:c.args,visible:!!(null===c||void 0===c?void 0:c.visible),keepMounted:!!(null===c||void 0===c?void 0:c.keepMounted),show:d,hide:s,remove:h,resolve:f,reject:b,resolveHide:j}}),[l,null===c||void 0===c?void 0:c.args,null===c||void 0===c?void 0:c.visible,null===c||void 0===c?void 0:c.keepMounted,d,s,h,f,b,j])}var k=function(e,n,o){p[e]?p[e].props=o:p[e]={comp:n,props:o}},B=function(){var e=Object(t.useContext)(u),n=Object.keys(e).filter((function(n){return!!e[n]}));n.forEach((function(e){p[e]||h[e]||console.warn("No modal found for id: "+e+". Please check the id or if it is registered or declared via JSX.")}));var o=n.filter((function(e){return p[e]})).map((function(e){return l({id:e},p[e])}));return r.a.createElement(r.a.Fragment,null,o.map((function(e){return r.a.createElement(e.comp,l({key:e.id,id:e.id},e.props))})))},N=function(e){var n=e.children,o=Object(t.useReducer)(v,s),a=o[0];return b=o[1],r.a.createElement(u.Provider,{value:a},n,r.a.createElement(B,null))},S=function(e){var n,o=e.modal,a=e.handler,i=void 0===a?{}:a,d=c(e,["modal","handler"]),s=Object(t.useMemo)((function(){return j()}),[]),u="string"===typeof o?null===(n=p[o])||void 0===n?void 0:n.comp:o;if(!i)throw new Error("No handler found in NiceModal.ModalHolder.");if(!u)throw new Error("No modal found for id: "+o+" in NiceModal.ModalHolder.");return i.show=Object(t.useCallback)((function(e){return g(s,e)}),[s]),i.hide=Object(t.useCallback)((function(){return y(s)}),[s]),r.a.createElement(u,l({id:s},d))},E=function(e){return{visible:e.visible,onOk:function(){return e.hide()},onCancel:function(){return e.hide()},afterClose:function(){e.resolveHide(),e.keepMounted||e.remove()}}},D=function(e){return{visible:e.visible,onClose:function(){return e.hide()},afterVisibleChange:function(n){n||e.resolveHide(),!n&&!e.keepMounted&&e.remove()}}},P=function(e){return{show:e.visible,onHide:function(){return e.hide()},onExited:function(){e.resolveHide(),!e.keepMounted&&e.remove()}}},T={Provider:function(e){var n=e.children,o=e.dispatch,t=e.modals;return o&&t?(b=o,r.a.createElement(u.Provider,{value:t},n,r.a.createElement(B,null))):r.a.createElement(N,null,n)},ModalDef:function(e){var n=e.id,o=e.component;return Object(t.useEffect)((function(){return k(n,o),function(){!function(e){delete p[e]}(n)}}),[n,o]),null},ModalHolder:S,NiceModalContext:u,create:function(e){return function(n){var o,a=n.defaultVisible,i=n.keepMounted,d=n.id,s=c(n,["defaultVisible","keepMounted","id"]),p=C(d),f=p.args,j=p.show,v=Object(t.useContext)(u),M=!!v[d];Object(t.useEffect)((function(){return a&&j(),h[d]=!0,function(){delete h[d]}}),[d,j,a]),Object(t.useEffect)((function(){i&&b(function(e,n){return{type:"nice-modal/set-flags",payload:{modalId:e,flags:n}}}(d,{keepMounted:!0}))}),[d,i]);var x=null===(o=v[d])||void 0===o?void 0:o.delayVisible;return Object(t.useEffect)((function(){x&&j(f)}),[x,f,j]),M?r.a.createElement(m.Provider,{value:d},r.a.createElement(e,l({},s,f))):null}},register:k,getModal:function(e){var n;return null===(n=p[e])||void 0===n?void 0:n.comp},show:g,hide:y,remove:w,useModal:C,reducer:v,antdModal:E,antdDrawer:D,muiDialog:function(e){return{open:e.visible,onClose:function(){return e.hide()},onExited:function(){e.resolveHide(),!e.keepMounted&&e.remove()}}},bootstrapDialog:P},R=o(73),U=function(){return document.location.hash.replace("#","")},I=function(){var e=Object(t.useState)(U()),n=Object(R.a)(e,2),o=n[0],r=n[1];return Object(t.useEffect)((function(){function e(){var e=U()||"basic";r(e),window.scrollTo({top:0})}return window.addEventListener("hashchange",e),function(){window.removeEventListener("hashchange",e)}}),[r]),o},A=o(6),_={"MyAntdModal.tsx":"import { Modal, Button, Drawer, Space } from 'antd';\nimport NiceModal, { useModal } from '@ebay/nice-modal-react';\n\nexport const MyAntdModal = NiceModal.create(({ name }: { name: string }) => {\n  const modal = useModal();\n  return (\n    <Modal title=\"Hello Antd\" visible={modal.visible} onOk={modal.hide} onCancel={modal.hide} afterClose={modal.remove}>\n      Greetings: {name}!\n    </Modal>\n  );\n});\n\nconst MyAntdDrawer = NiceModal.create(({ name }: { name: string }) => {\n  const modal = useModal();\n  return (\n    <Drawer\n      title=\"Hello Antd\"\n      visible={modal.visible}\n      onClose={modal.hide}\n      afterVisibleChange={(visible) => {\n        if (!visible) modal.remove();\n      }}\n    >\n      Greetings: {name}!\n    </Drawer>\n  );\n});\n\nexport default function AntdSample() {\n  return (\n    <Space>\n      <Button type=\"primary\" onClick={() => NiceModal.show(MyAntdModal, { name: 'Nate' })}>\n        Show Modal\n      </Button>\n      <Button type=\"primary\" onClick={() => NiceModal.show(MyAntdDrawer, { name: 'Bood' })}>\n        Show Drawer\n      </Button>\n    </Space>\n  );\n}\n","UserInfoModal.jsx":"import { useCallback } from 'react';\nimport { Form, Modal } from 'antd';\nimport FormBuilder from 'antd-form-builder';\nimport NiceModal, { useModal, antdModal } from '@ebay/nice-modal-react';\n\nexport default NiceModal.create(({ user }) => {\n  const modal = useModal();\n  const [form] = Form.useForm();\n  const meta = {\n    initialValues: user,\n    fields: [\n      { key: 'name', label: 'Name', required: true },\n      { key: 'job', label: 'Job Title', required: true },\n    ],\n  };\n\n  const handleSubmit = useCallback(() => {\n    form.validateFields().then(() => {\n      const newUser = { ...form.getFieldsValue() };\n      // In real case, you may call API to create user or update user\n      if (!user) {\n        newUser.id = String(Date.now());\n      } else {\n        newUser.id = user.id;\n      }\n      modal.resolve(newUser);\n      modal.hide();\n    });\n  }, [modal, user, form]);\n  return (\n    <Modal\n      {...antdModal(modal)}\n      title={user ? 'Edit User' : 'New User'}\n      okText={user ? 'Update' : 'Create'}\n      onOk={handleSubmit}\n    >\n      <Form form={form}>\n        <FormBuilder meta={meta} form={form} />\n      </Form>\n    </Modal>\n  );\n});\n","UserList.jsx":"import { useMemo, useCallback, useState } from 'react';\nimport { Button, Table } from 'antd';\nimport { EditOutlined } from '@ant-design/icons';\nimport { useModal } from '@ebay/nice-modal-react';\nimport UserInfoModal from './UserInfoModal';\nimport mockData from './mock';\n\nexport default function UserList() {\n  const userModal = useModal(UserInfoModal);\n  const [users, setUsers] = useState(mockData);\n\n  const handleNewUser = useCallback(() => {\n    userModal.show().then((newUser) => {\n      setUsers([newUser, ...users]);\n    });\n  }, [userModal, users]);\n\n  const handleEditUser = useCallback(\n    (user) => {\n      userModal.show({ user }).then((newUser) => {\n        setUsers((users) => {\n          // Modify users immutablly\n          const i = users.findIndex((u) => u.id === newUser.id);\n          const updated = { ...users[i], ...newUser };\n          const arr = [...users];\n          arr.splice(i, 1, updated);\n          return arr;\n        });\n      });\n    },\n    [userModal],\n  );\n\n  const columns = useMemo(\n    () => [\n      {\n        title: 'Name',\n        dataIndex: 'name',\n        width: '150px',\n      },\n      {\n        title: 'Job Title',\n        dataIndex: 'job',\n      },\n      {\n        title: 'Edit',\n        width: '100px',\n        render(value, user) {\n          return (\n            <Button\n              type=\"link\"\n              icon={<EditOutlined />}\n              onClick={() => {\n                handleEditUser(user);\n              }}\n            />\n          );\n        },\n      },\n    ],\n    [handleEditUser],\n  );\n\n  return (\n    <div>\n      <Button type=\"primary\" onClick={handleNewUser}>\n        + New User\n      </Button>\n      <Table\n        size=\"small\"\n        rowKey=\"id\"\n        pagination={false}\n        columns={columns}\n        dataSource={users}\n        style={{ marginTop: '20px' }}\n      />\n    </div>\n  );\n}\n","PromiseSample.jsx":"import { Modal, Button, Space } from 'antd';\nimport NiceModal, { useModal, antdModal } from '@ebay/nice-modal-react';\n\nconst PromiseModal = NiceModal.create(({ name }) => {\n  const modal = useModal();\n  const handleResolve = () => {\n    modal.resolve({ resolved: true });\n  };\n  const handleReject = () => {\n    modal.reject(new Error('Rejected'));\n    modal.hide();\n  };\n  return (\n    <Modal title=\"Promise Example\" {...antdModal(modal)}>\n      <p>Choose the promise action: {name}</p>\n      <Space>\n        <Button onClick={handleResolve}>Resolve</Button>\n        <Button onClick={handleReject} danger>\n          Reject\n        </Button>\n      </Space>\n    </Modal>\n  );\n});\n\nconst ChainingModal = NiceModal.create(({ times }) => {\n  const modal = useModal();\n  return (\n    <Modal title=\"Chaining Same Modal Example\" {...antdModal(modal)}>\n      <Button type=\"primary\" onClick={() => modal.resolve()}>\n        Hide with resolve.\n      </Button>\n      <br />\n      <br />\n      Showed {times}/3 times.\n    </Modal>\n  );\n});\n\nexport default function PromiseSample() {\n  const chainingModal = useModal(ChainingModal);\n  const showPromiseModal = () => {\n    NiceModal.show(PromiseModal, { name: 'nate' })\n      .then((res) => {\n        console.log('Resolved: ', res);\n        NiceModal.show(PromiseModal, { name: 'nate2' });\n      })\n      .catch((err) => {\n        console.log('Rejected: ', err);\n      });\n  };\n  const showChainingModal = async () => {\n    for (let i = 0; i < 3; i++) {\n      await chainingModal.show({ times: i + 1 });\n      await chainingModal.hide();\n    }\n  };\n\n  return (\n    <>\n      <p style={{ color: '#888' }}>NOTE: please open dev console to see the output.</p>\n      <Space>\n        <Button type=\"primary\" onClick={showPromiseModal}>\n          Show Modal\n        </Button>\n\n        <Button type=\"primary\" onClick={showChainingModal}>\n          Chaining Same Modal\n        </Button>\n      </Space>\n    </>\n  );\n}\n","MyMuiDialog.tsx":"import React from 'react';\nimport Button from '@material-ui/core/Button';\nimport Dialog from '@material-ui/core/Dialog';\nimport DialogActions from '@material-ui/core/DialogActions';\nimport DialogContent from '@material-ui/core/DialogContent';\nimport DialogContentText from '@material-ui/core/DialogContentText';\nimport DialogTitle from '@material-ui/core/DialogTitle';\nimport Slide from '@material-ui/core/Slide';\nimport { TransitionProps } from '@material-ui/core/transitions';\nimport NiceModal, { useModal } from '@ebay/nice-modal-react';\n\nconst Transition = React.forwardRef(function Transition(\n  props: TransitionProps & { children?: React.ReactElement<any, any> },\n  ref: React.Ref<unknown>,\n) {\n  return <Slide direction=\"up\" ref={ref} {...props} />;\n});\n\nconst MyMuiDialog = NiceModal.create(() => {\n  const modal = useModal();\n  return (\n    <Dialog\n      TransitionComponent={Transition}\n      open={modal.visible}\n      onClose={() => modal.hide()}\n      TransitionProps={{\n        onExited: () => modal.remove(),\n      }}\n    >\n      <DialogTitle id=\"alert-dialog-slide-title\">{\"Use Google's location service?\"}</DialogTitle>\n      <DialogContent>\n        <DialogContentText id=\"alert-dialog-slide-description\">\n          Let Google help apps determine location. This means sending anonymous location data to Google, even when no\n          apps are running.\n        </DialogContentText>\n      </DialogContent>\n      <DialogActions>\n        <Button onClick={() => modal.hide()} color=\"primary\">\n          Disagree\n        </Button>\n        <Button onClick={() => modal.hide()} color=\"primary\">\n          Agree\n        </Button>\n      </DialogActions>\n    </Dialog>\n  );\n});\n\nexport default function MuiDialogSample() {\n  return (\n    <Button variant=\"contained\" onClick={() => NiceModal.show(MyMuiDialog)} color=\"primary\">\n      Agree\n    </Button>\n  );\n}\n","MyBootstrapDialog.tsx":"import BootstrapModal from 'react-bootstrap/Modal';\nimport Button from 'react-bootstrap/Button';\nimport NiceModal, { useModal, bootstrapDialog } from '@ebay/nice-modal-react';\n\nconst MyBootstrapDialog = NiceModal.create(({ name = 'Bootstrap' }: { name: string }) => {\n  const modal = useModal();\n  return (\n    <BootstrapModal {...bootstrapDialog(modal)} title=\"Nice Modal\">\n      <BootstrapModal.Header closeButton>\n        <BootstrapModal.Title>Modal title</BootstrapModal.Title>\n      </BootstrapModal.Header>\n\n      <BootstrapModal.Body>\n        <p>Modal body text goes here. {name}</p>\n      </BootstrapModal.Body>\n\n      <BootstrapModal.Footer>\n        <Button variant=\"secondary\" onClick={modal.hide}>\n          Close\n        </Button>\n        <Button variant=\"primary\" onClick={modal.hide}>\n          Save changes\n        </Button>\n      </BootstrapModal.Footer>\n    </BootstrapModal>\n  );\n});\nexport default function BootstrapSample() {\n  return (\n    <>\n      <Button variant=\"primary\" onClick={() => NiceModal.show(MyBootstrapDialog, { name: 'Bootstrap' })}>\n        Show Dialog\n      </Button>\n    </>\n  );\n}\n","ReduxIntegration.jsx":"import { createStore, applyMiddleware, compose, combineReducers } from 'redux';\nimport { Provider, useSelector, useDispatch } from 'react-redux';\nimport NiceModal from '@ebay/nice-modal-react';\nimport { Button } from 'antd';\nimport { MyAntdModal } from './MyAntdModal';\nimport logger from 'redux-logger';\n\nconst composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;\nconst enhancer = composeEnhancers(applyMiddleware(logger));\n\nconst store = createStore(\n  combineReducers({\n    __nice_modals: NiceModal.reducer,\n    // other reducers...\n  }),\n  enhancer,\n);\n\nconst ModalsProvider = ({ children }) => {\n  const modals = useSelector((s) => s.__nice_modals);\n  const dispatch = useDispatch();\n  return (\n    <NiceModal.Provider modals={modals} dispatch={dispatch}>\n      <p style={{ color: '#999' }}>NOTE: open dev console or Redux dev tools to see actions log.</p>\n      <Button\n        type=\"primary\"\n        onClick={() => {\n          NiceModal.show(MyAntdModal, { name: 'Redux' });\n        }}\n      >\n        Show Modal\n      </Button>\n    </NiceModal.Provider>\n  );\n};\n\nexport default function ReduxIntegration({ children }) {\n  return (\n    <Provider store={store}>\n      <ModalsProvider>{children}</ModalsProvider>\n    </Provider>\n  );\n}\n","Declarative.jsx":"import { Modal, Button } from 'antd';\nimport NiceModal, { useModal } from '@ebay/nice-modal-react';\n\nexport const MyAntdModal = NiceModal.create(({ name }) => {\n  const modal = useModal();\n  return (\n    <Modal\n      title=\"Hello Antd\"\n      visible={modal.visible}\n      onOk={modal.hide}\n      onCancel={modal.hide}\n      afterClose={modal.remove}\n    >\n      Greetings: {name}!\n    </Modal>\n  );\n});\n\nexport default function AntdSample() {\n  return (\n    <>\n      <Button type=\"primary\" onClick={() => NiceModal.show('my-antd-modal', { name: 'Nate' })}>\n        Show Modal\n      </Button>\n      <MyAntdModal id=\"my-antd-modal\" />\n    </>\n  );\n}\n","PropsBinding.jsx":"import { useEffect, useState } from 'react';\nimport { Modal, Button } from 'antd';\nimport NiceModal, { useModal, ModalHolder } from '@ebay/nice-modal-react';\n\nexport const MyAntdModal = NiceModal.create(({ time }) => {\n  const modal = useModal();\n  return (\n    <Modal\n      title=\"Props Binding\"\n      visible={modal.visible}\n      onOk={modal.hide}\n      onCancel={modal.hide}\n      afterClose={modal.remove}\n    >\n      Time: {time}\n    </Modal>\n  );\n});\n\nexport default function Example() {\n  const [time, setTime] = useState(0);\n  useEffect(() => {\n    const p = setInterval(() => setTime((t) => t + 1), 1000);\n    return () => clearInterval(p);\n  }, []);\n\n  // modalHandler will be assign show/hide method.\n  const modalHandler = {};\n\n  return (\n    <>\n      <Button type=\"primary\" onClick={() => modalHandler.show()}>\n        Show Modal\n      </Button>\n      <ModalHolder modal={MyAntdModal} handler={modalHandler} time={time} />\n    </>\n  );\n}\n"};function H(e){var n=e.filename;return Object(t.useEffect)((function(){window.Prism.highlightAll()}),[n]),Object(A.jsxs)("div",{className:"code-viewer",children:[Object(A.jsx)("h5",{children:n}),Object(A.jsx)("pre",{children:Object(A.jsx)("code",{className:"language-jsx line-numbers",children:_[n]||'// Error: code of "'.concat(n,'" not found')})})]})}var F=o(34),L=o(178),G=o(37),V=o(374),J=o(375),K=o(376),X=o(379),q=o(208),z=T.create((function(e){var n=e.user,o=C(),r=K.a.useForm(),a=Object(R.a)(r,1)[0],i={initialValues:n,fields:[{key:"name",label:"Name",required:!0},{key:"job",label:"Job Title",required:!0}]},l=Object(t.useCallback)((function(){a.validateFields().then((function(){var e=Object(F.a)({},a.getFieldsValue());e.id=n?n.id:String(Date.now()),o.resolve(e),o.hide()}))}),[o,n,a]);return Object(A.jsx)(X.a,Object(F.a)(Object(F.a)({},E(o)),{},{title:n?"Edit User":"New User",okText:n?"Update":"Create",onOk:l,children:Object(A.jsx)(K.a,{form:a,children:Object(A.jsx)(q.a,{meta:i,form:a})})}))})),Q=[{id:"1",name:"Kennedy",job:"Chief Mobility Orchestrator",city:"North Alec"},{id:"2",name:"Lucius",job:"Internal Research Manager",city:"Littleland"},{id:"3",name:"Carlos",job:"Lead Configuration Analyst",city:"South Lillian"},{id:"4",name:"Urban",job:"Chief Operations Agent",city:"Shieldshaven"},{id:"5",name:"Katrine",job:"Legacy Solutions Orchestrator",city:"South Kyleigh"}];o(337);var W=o(177),Y=o.n(W),Z=o(206),$=o(381),ee=T.create((function(e){var n=e.name,o=C();return Object(A.jsxs)(X.a,Object(F.a)(Object(F.a)({title:"Promise Example"},E(o)),{},{children:[Object(A.jsxs)("p",{children:["Choose the promise action: ",n]}),Object(A.jsxs)($.b,{children:[Object(A.jsx)(G.a,{onClick:function(){o.resolve({resolved:!0})},children:"Resolve"}),Object(A.jsx)(G.a,{onClick:function(){o.reject(new Error("Rejected")),o.hide()},danger:!0,children:"Reject"})]})]}))})),ne=T.create((function(e){var n=e.times,o=C();return Object(A.jsxs)(X.a,Object(F.a)(Object(F.a)({title:"Chaining Same Modal Example"},E(o)),{},{children:[Object(A.jsx)(G.a,{type:"primary",onClick:function(){return o.resolve()},children:"Hide with resolve."}),Object(A.jsx)("br",{}),Object(A.jsx)("br",{}),"Showed ",n,"/3 times."]}))}));var oe=T.create((function(e){var n=e.name,o=C();return Object(A.jsxs)(X.a,{title:"Hello Antd",visible:o.visible,onOk:o.hide,onCancel:o.hide,afterClose:o.remove,children:["Greetings: ",n,"!"]})}));var te=o(378),re=o(377),ae=o(373),ie=o(371),le=o(372),ce=o(370),de=o(382),se=r.a.forwardRef((function(e,n){return Object(A.jsx)(de.a,Object(F.a)({direction:"up",ref:n},e))})),ue=T.create((function(){var e=C();return Object(A.jsxs)(re.a,{TransitionComponent:se,open:e.visible,onClose:function(){return e.hide()},TransitionProps:{onExited:function(){return e.remove()}},children:[Object(A.jsx)(ce.a,{id:"alert-dialog-slide-title",children:"Use Google's location service?"}),Object(A.jsx)(ie.a,{children:Object(A.jsx)(le.a,{id:"alert-dialog-slide-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),Object(A.jsxs)(ae.a,{children:[Object(A.jsx)(te.a,{onClick:function(){return e.hide()},color:"primary",children:"Disagree"}),Object(A.jsx)(te.a,{onClick:function(){return e.hide()},color:"primary",children:"Agree"})]})]})}));var me=o(380),pe=T.create((function(e){var n=e.name,o=C();return Object(A.jsxs)(X.a,{title:"Hello Antd",visible:o.visible,onOk:o.hide,onCancel:o.hide,afterClose:o.remove,children:["Greetings: ",n,"!"]})})),he=T.create((function(e){var n=e.name,o=C();return Object(A.jsxs)(me.a,{title:"Hello Antd",visible:o.visible,onClose:o.hide,afterVisibleChange:function(e){e||o.remove()},children:["Greetings: ",n,"!"]})}));var fe=o(98),be=o(157),je=T.create((function(e){var n=e.name,o=void 0===n?"Bootstrap":n,t=C();return Object(A.jsxs)(fe.a,Object(F.a)(Object(F.a)({},P(t)),{},{title:"Nice Modal",children:[Object(A.jsx)(fe.a.Header,{closeButton:!0,children:Object(A.jsx)(fe.a.Title,{children:"Modal title"})}),Object(A.jsx)(fe.a.Body,{children:Object(A.jsxs)("p",{children:["Modal body text goes here. ",o]})}),Object(A.jsxs)(fe.a.Footer,{children:[Object(A.jsx)(be.a,{variant:"secondary",onClick:t.hide,children:"Close"}),Object(A.jsx)(be.a,{variant:"primary",onClick:t.hide,children:"Save changes"})]})]}))}));var ve=o(112),Me=o(156),xe=o(207),Oe=o.n(xe),ge=("undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ve.c)(Object(ve.a)(Oe.a)),ye=Object(ve.d)(Object(ve.b)({__nice_modals:T.reducer}),ge),we=function(e){e.children;var n=Object(Me.c)((function(e){return e.__nice_modals})),o=Object(Me.b)();return Object(A.jsxs)(T.Provider,{modals:n,dispatch:o,children:[Object(A.jsx)("p",{style:{color:"#999"},children:"NOTE: open dev console or Redux dev tools to see actions log."}),Object(A.jsx)(G.a,{type:"primary",onClick:function(){T.show(pe,{name:"Redux"})},children:"Show Modal"})]})};var Ce=T.create((function(e){var n=e.time,o=C();return Object(A.jsxs)(X.a,{title:"Props Binding",visible:o.visible,onOk:o.hide,onCancel:o.hide,afterClose:o.remove,children:["Time: ",n]})}));var ke={real:{name:"Real Case",component:function(){var e=C(z),n=Object(t.useState)(Q),o=Object(R.a)(n,2),r=o[0],a=o[1],i=Object(t.useCallback)((function(){e.show().then((function(e){a([e].concat(Object(L.a)(r)))}))}),[e,r]),l=Object(t.useCallback)((function(n){e.show({user:n}).then((function(e){a((function(n){var o=n.findIndex((function(n){return n.id===e.id})),t=Object(F.a)(Object(F.a)({},n[o]),e),r=Object(L.a)(n);return r.splice(o,1,t),r}))}))}),[e]),c=Object(t.useMemo)((function(){return[{title:"Name",dataIndex:"name",width:"150px"},{title:"Job Title",dataIndex:"job"},{title:"Edit",width:"100px",render:function(e,n){return Object(A.jsx)(G.a,{type:"link",icon:Object(A.jsx)(J.a,{}),onClick:function(){l(n)}})}}]}),[l]);return Object(A.jsxs)("div",{children:[Object(A.jsx)(G.a,{type:"primary",onClick:i,children:"+ New User"}),Object(A.jsx)(V.a,{size:"small",rowKey:"id",pagination:!1,columns:c,dataSource:r,style:{marginTop:"20px"}})]})},description:"Show a dialog to create a new user or edit user info.",code:["UserList.jsx","UserInfoModal.jsx"]},mui:{name:"Material UI",description:"Show material UI dialog",component:function(){return Object(A.jsx)(te.a,{variant:"contained",onClick:function(){return T.show(ue)},color:"primary",children:"Agree"})},code:["MyMuiDialog.tsx"]},antd:{name:"Ant Design",description:"Show/hide antd modal or drawer.",component:function(){return Object(A.jsxs)($.b,{children:[Object(A.jsx)(G.a,{type:"primary",onClick:function(){return T.show(pe,{name:"Nate"})},children:"Show Modal"}),Object(A.jsx)(G.a,{type:"primary",onClick:function(){return T.show(he,{name:"Bood"})},children:"Show Drawer"})]})},code:["MyAntdModal.tsx"]},bootstrap:{name:"Bootstrap React",descript:"Show/hide bootstrap dialog.",component:function(){return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(be.a,{variant:"primary",onClick:function(){return T.show(je,{name:"Bootstrap"})},children:"Show Dialog"})})},code:["MyBootstrapDialog.tsx"]},promise:{name:"Promise",description:"Use promise to interact with the dialog.",component:function(){var e=C(ne),n=function(){var n=Object(Z.a)(Y.a.mark((function n(){var o;return Y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:o=0;case 1:if(!(o<3)){n.next=9;break}return n.next=4,e.show({times:o+1});case 4:return n.next=6,e.hide();case 6:o++,n.next=1;break;case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("p",{style:{color:"#888"},children:"NOTE: please open dev console to see the output."}),Object(A.jsxs)($.b,{children:[Object(A.jsx)(G.a,{type:"primary",onClick:function(){T.show(ee,{name:"nate"}).then((function(e){console.log("Resolved: ",e),T.show(ee,{name:"nate2"})})).catch((function(e){console.log("Rejected: ",e)}))},children:"Show Modal"}),Object(A.jsx)(G.a,{type:"primary",onClick:n,children:"Chaining Same Modal"})]})]})},code:["PromiseSample.jsx"]},declarative:{name:"Declarative",description:"Declarative way to register a modal with id.",component:function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(G.a,{type:"primary",onClick:function(){return T.show("my-antd-modal",{name:"Nate"})},children:"Show Modal"}),Object(A.jsx)(oe,{id:"my-antd-modal"})]})},code:["Declarative.jsx"]},propsBinding:{name:"Props Binding",description:"To bind props to modal, need to declare the modal using <ModalHolder />.",component:function(){var e=Object(t.useState)(0),n=Object(R.a)(e,2),o=n[0],r=n[1];Object(t.useEffect)((function(){var e=setInterval((function(){return r((function(e){return e+1}))}),1e3);return function(){return clearInterval(e)}}),[]);var a={};return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(G.a,{type:"primary",onClick:function(){return a.show()},children:"Show Modal"}),Object(A.jsx)(S,{modal:Ce,handler:a,time:o})]})},code:["PropsBinding.jsx"]},redux:{name:"Redux Integration",description:"Use Redux to manage modals state so that you can use Redux dev tools to debug nice modals.",component:function(e){var n=e.children;return Object(A.jsx)(Me.a,{store:ye,children:Object(A.jsx)(we,{children:n})})},code:["ReduxIntegration.jsx"]}};var Be=function(){var e,n=I()||"real",o=ke[n]||{},t=Object(A.jsxs)("div",{className:"app",children:[Object(A.jsxs)("div",{className:"sider",children:[Object(A.jsxs)("h1",{children:[Object(A.jsx)("span",{className:"header-name",children:"@ebay/nice-modal-react"}),Object(A.jsx)("span",{className:"example-title",children:"Examples"})]}),Object(A.jsx)("div",{className:"scroll-container",children:Object(A.jsx)("ul",{children:Object.keys(ke).map((function(e){return Object(A.jsx)("li",{children:Object(A.jsx)("a",{href:"#".concat(e),className:n===e?"active":"",children:ke[e].name})},e)}))})}),Object(A.jsxs)("div",{className:"social",children:[Object(A.jsx)("a",{href:"https://github.com/ebay/nice-modal-react",children:Object(A.jsx)("img",{src:"https://img.shields.io/github/stars/eBay/nice-modal-react?style=social",alt:"Github Repo"})}),Object(A.jsx)("br",{}),Object(A.jsx)("a",{href:"https://ebay.github.io/nice-modal-react/api",children:Object(A.jsx)("img",{src:"https://img.shields.io/badge/API-Reference-green",alt:"api reference"})}),Object(A.jsx)("br",{}),Object(A.jsx)("a",{href:"https://codesandbox.io/s/github/ebay/nice-modal-react/tree/main/example",children:Object(A.jsx)("img",{width:"150px",src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"codesandbox"})})]})]}),Object(A.jsxs)("div",{children:[Object(A.jsx)("div",{className:"example-container",children:function(){var e=ke[n];if(!e||!e.component)return Object(A.jsxs)("span",{style:{color:"red"},children:['Error: example "',n,'" not found.']});var o=e.component;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)("h1",{children:[e.name,Object(A.jsx)("p",{className:"example-description",children:e.description})]}),Object(A.jsx)(o,{})]})}()}),Object(A.jsx)("div",{className:"code-container",children:null===(e=o.code)||void 0===e?void 0:e.map((function(e){return Object(A.jsx)(H,{filename:e},e)}))})]})]});return"redux"===n?t:Object(A.jsx)(T.Provider,{children:t})},Ne=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,383)).then((function(n){var o=n.getCLS,t=n.getFID,r=n.getFCP,a=n.getLCP,i=n.getTTFB;o(e),t(e),r(e),a(e),i(e)}))};o(339),o(340);i.a.render(Object(A.jsx)(Be,{}),document.getElementById("root")),Ne()}},[[341,1,2]]]);
//# sourceMappingURL=main.3fb50e3b.chunk.js.map