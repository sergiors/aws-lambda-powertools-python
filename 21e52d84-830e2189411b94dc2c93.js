(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{if7T:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));n("E9XD");var a=n("RTdS"),o=n("Enk7"),r=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o;return Object(a.d)(this,(function(a){return n={"Content-Type":"application/x-amz-json-1.1","X-Amz-Target":"Kinesis_20131202.PutRecords"},o=JSON.stringify(g(e,t)),[2,C(t,n,"/",void 0,o)]}))}))},i=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o,r;return Object(a.d)(this,(function(i){switch(i.label){case 0:return e.statusCode>=300?[2,c(e,t)]:[4,I(e.body,t)];case 1:return n=i.sent(),{},o=M(n,t),r=Object(a.a)({$metadata:N(e)},o),[2,Promise.resolve(r)]}}))}))},c=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o,r,i,c,g,y,O,h,E,j,S,x,$,K,M,w;return Object(a.d)(this,(function(R){switch(R.label){case 0:return o=[Object(a.a)({},e)],w={},[4,I(e.body,t)];case 1:switch(n=a.a.apply(void 0,o.concat([(w.body=R.sent(),w)])),i="UnknownError",c=n.body.__type.split("#"),i=void 0===c[1]?c[0]:c[1],i){case"InvalidArgumentException":case"com.amazonaws.kinesis#InvalidArgumentException":return[3,2];case"KMSAccessDeniedException":case"com.amazonaws.kinesis#KMSAccessDeniedException":return[3,4];case"KMSDisabledException":case"com.amazonaws.kinesis#KMSDisabledException":return[3,6];case"KMSInvalidStateException":case"com.amazonaws.kinesis#KMSInvalidStateException":return[3,8];case"KMSNotFoundException":case"com.amazonaws.kinesis#KMSNotFoundException":return[3,10];case"KMSOptInRequired":case"com.amazonaws.kinesis#KMSOptInRequired":return[3,12];case"KMSThrottlingException":case"com.amazonaws.kinesis#KMSThrottlingException":return[3,14];case"ProvisionedThroughputExceededException":case"com.amazonaws.kinesis#ProvisionedThroughputExceededException":return[3,16];case"ResourceNotFoundException":case"com.amazonaws.kinesis#ResourceNotFoundException":return[3,18]}return[3,20];case 2:return g=[{}],[4,s(n,t)];case 3:return r=a.a.apply(void 0,[a.a.apply(void 0,g.concat([R.sent()])),{name:i,$metadata:N(e)}]),[3,21];case 4:return y=[{}],[4,d(n,t)];case 5:return r=a.a.apply(void 0,[a.a.apply(void 0,y.concat([R.sent()])),{name:i,$metadata:N(e)}]),[3,21];case 6:return O=[{}],[4,u(n,t)];case 7:return r=a.a.apply(void 0,[a.a.apply(void 0,O.concat([R.sent()])),{name:i,$metadata:N(e)}]),[3,21];case 8:return h=[{}],[4,v(n,t)];case 9:return r=a.a.apply(void 0,[a.a.apply(void 0,h.concat([R.sent()])),{name:i,$metadata:N(e)}]),[3,21];case 10:return E=[{}],[4,m(n,t)];case 11:return r=a.a.apply(void 0,[a.a.apply(void 0,E.concat([R.sent()])),{name:i,$metadata:N(e)}]),[3,21];case 12:return j=[{}],[4,l(n,t)];case 13:return r=a.a.apply(void 0,[a.a.apply(void 0,j.concat([R.sent()])),{name:i,$metadata:N(e)}]),[3,21];case 14:return S=[{}],[4,p(n,t)];case 15:return r=a.a.apply(void 0,[a.a.apply(void 0,S.concat([R.sent()])),{name:i,$metadata:N(e)}]),[3,21];case 16:return x=[{}],[4,b(n,t)];case 17:return r=a.a.apply(void 0,[a.a.apply(void 0,x.concat([R.sent()])),{name:i,$metadata:N(e)}]),[3,21];case 18:return $=[{}],[4,f(n,t)];case 19:return r=a.a.apply(void 0,[a.a.apply(void 0,$.concat([R.sent()])),{name:i,$metadata:N(e)}]),[3,21];case 20:K=n.body,i=K.code||K.Code||i,r=Object(a.a)(Object(a.a)({},K),{name:""+i,message:K.message||K.Message||i,$fault:"client",$metadata:N(e)}),R.label=21;case 21:return M=r.message||r.Message||i,r.message=M,delete r.Message,[2,Promise.reject(Object.assign(new Error(M),r))]}}))}))},s=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o;return Object(a.d)(this,(function(r){return n=e.body,o=O(n,t),[2,Object(a.a)({name:"InvalidArgumentException",$fault:"client",$metadata:N(e)},o)]}))}))},d=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o;return Object(a.d)(this,(function(r){return n=e.body,o=h(n,t),[2,Object(a.a)({name:"KMSAccessDeniedException",$fault:"client",$metadata:N(e)},o)]}))}))},u=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o;return Object(a.d)(this,(function(r){return n=e.body,o=E(n,t),[2,Object(a.a)({name:"KMSDisabledException",$fault:"client",$metadata:N(e)},o)]}))}))},v=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o;return Object(a.d)(this,(function(r){return n=e.body,o=j(n,t),[2,Object(a.a)({name:"KMSInvalidStateException",$fault:"client",$metadata:N(e)},o)]}))}))},m=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o;return Object(a.d)(this,(function(r){return n=e.body,o=S(n,t),[2,Object(a.a)({name:"KMSNotFoundException",$fault:"client",$metadata:N(e)},o)]}))}))},l=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o;return Object(a.d)(this,(function(r){return n=e.body,o=x(n,t),[2,Object(a.a)({name:"KMSOptInRequired",$fault:"client",$metadata:N(e)},o)]}))}))},p=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o;return Object(a.d)(this,(function(r){return n=e.body,o=$(n,t),[2,Object(a.a)({name:"KMSThrottlingException",$fault:"client",$metadata:N(e)},o)]}))}))},b=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o;return Object(a.d)(this,(function(r){return n=e.body,o=K(n,t),[2,Object(a.a)({name:"ProvisionedThroughputExceededException",$fault:"client",$metadata:N(e)},o)]}))}))},f=function(e,t){return Object(a.b)(void 0,void 0,void 0,(function(){var n,o;return Object(a.d)(this,(function(r){return n=e.body,o=R(n,t),[2,Object(a.a)({name:"ResourceNotFoundException",$fault:"client",$metadata:N(e)},o)]}))}))},g=function(e,t){return Object(a.a)(Object(a.a)({},void 0!==e.Records&&{Records:y(e.Records,t)}),void 0!==e.StreamName&&{StreamName:e.StreamName})},y=function(e,t){return e.map((function(e){return function(e,t){return Object(a.a)(Object(a.a)(Object(a.a)({},void 0!==e.Data&&{Data:t.base64Encoder(e.Data)}),void 0!==e.ExplicitHashKey&&{ExplicitHashKey:e.ExplicitHashKey}),void 0!==e.PartitionKey&&{PartitionKey:e.PartitionKey})}(e,t)}))},O=function(e,t){return{message:void 0!==e.message&&null!==e.message?e.message:void 0}},h=function(e,t){return{message:void 0!==e.message&&null!==e.message?e.message:void 0}},E=function(e,t){return{message:void 0!==e.message&&null!==e.message?e.message:void 0}},j=function(e,t){return{message:void 0!==e.message&&null!==e.message?e.message:void 0}},S=function(e,t){return{message:void 0!==e.message&&null!==e.message?e.message:void 0}},x=function(e,t){return{message:void 0!==e.message&&null!==e.message?e.message:void 0}},$=function(e,t){return{message:void 0!==e.message&&null!==e.message?e.message:void 0}},K=function(e,t){return{message:void 0!==e.message&&null!==e.message?e.message:void 0}},M=function(e,t){return{EncryptionType:void 0!==e.EncryptionType&&null!==e.EncryptionType?e.EncryptionType:void 0,FailedRecordCount:void 0!==e.FailedRecordCount&&null!==e.FailedRecordCount?e.FailedRecordCount:void 0,Records:void 0!==e.Records&&null!==e.Records?w(e.Records,t):void 0}},w=function(e,t){return(e||[]).map((function(e){return function(e,t){return{ErrorCode:void 0!==e.ErrorCode&&null!==e.ErrorCode?e.ErrorCode:void 0,ErrorMessage:void 0!==e.ErrorMessage&&null!==e.ErrorMessage?e.ErrorMessage:void 0,SequenceNumber:void 0!==e.SequenceNumber&&null!==e.SequenceNumber?e.SequenceNumber:void 0,ShardId:void 0!==e.ShardId&&null!==e.ShardId?e.ShardId:void 0}}(e)}))},R=function(e,t){return{message:void 0!==e.message&&null!==e.message?e.message:void 0}},N=function(e){return{httpStatusCode:e.statusCode,httpHeaders:e.headers,requestId:e.headers["x-amzn-requestid"]}},T=function(e,t){return void 0===e&&(e=new Uint8Array),e instanceof Uint8Array?Promise.resolve(e):t.streamCollector(e)||Promise.resolve(new Uint8Array)},C=function(e,t,n,r,i){return Object(a.b)(void 0,void 0,void 0,(function(){var c,s,d,u,v,m;return Object(a.d)(this,(function(a){switch(a.label){case 0:return[4,e.endpoint()];case 1:return c=a.sent(),s=c.hostname,d=c.protocol,u=void 0===d?"https":d,v=c.port,m={protocol:u,hostname:s,port:v,method:"POST",path:n,headers:t},void 0!==r&&(m.hostname=r),void 0!==i&&(m.body=i),[2,new o.a(m)]}}))}))},I=function(e,t){return function(e,t){return T(e,t).then((function(e){return t.utf8Encoder(e)}))}(e,t).then((function(e){return e.length?JSON.parse(e):{}}))}}}]);
//# sourceMappingURL=21e52d84-830e2189411b94dc2c93.js.map