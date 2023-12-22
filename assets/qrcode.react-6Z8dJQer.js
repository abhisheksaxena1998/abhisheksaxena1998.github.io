import{r as y,a as A}from"./react-jw9l9ZC3.js";var J=Object.defineProperty,S=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,T=(h,s,c)=>s in h?J(h,s,{enumerable:!0,configurable:!0,writable:!0,value:c}):h[s]=c,L=(h,s)=>{for(var c in s||(s={}))z.call(s,c)&&T(h,c,s[c]);if(S)for(var c of S(s))D.call(s,c)&&T(h,c,s[c]);return h},U=(h,s)=>{var c={};for(var i in h)z.call(h,i)&&s.indexOf(i)<0&&(c[i]=h[i]);if(h!=null&&S)for(var i of S(h))s.indexOf(i)<0&&D.call(h,i)&&(c[i]=h[i]);return c};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var P;(h=>{const s=class{constructor(t,e,n,r){if(this.version=t,this.errorCorrectionLevel=e,this.modules=[],this.isFunction=[],t<s.MIN_VERSION||t>s.MAX_VERSION)throw new RangeError("Version value out of range");if(r<-1||r>7)throw new RangeError("Mask value out of range");this.size=t*4+17;let o=[];for(let l=0;l<this.size;l++)o.push(!1);for(let l=0;l<this.size;l++)this.modules.push(o.slice()),this.isFunction.push(o.slice());this.drawFunctionPatterns();const a=this.addEccAndInterleave(n);if(this.drawCodewords(a),r==-1){let l=1e9;for(let m=0;m<8;m++){this.applyMask(m),this.drawFormatBits(m);const f=this.getPenaltyScore();f<l&&(r=m,l=f),this.applyMask(m)}}u(0<=r&&r<=7),this.mask=r,this.applyMask(r),this.drawFormatBits(r),this.isFunction=[]}static encodeText(t,e){const n=h.QrSegment.makeSegments(t);return s.encodeSegments(n,e)}static encodeBinary(t,e){const n=h.QrSegment.makeBytes(t);return s.encodeSegments([n],e)}static encodeSegments(t,e,n=1,r=40,o=-1,a=!0){if(!(s.MIN_VERSION<=n&&n<=r&&r<=s.MAX_VERSION)||o<-1||o>7)throw new RangeError("Invalid value");let l,m;for(l=n;;l++){const E=s.getNumDataCodewords(l,e)*8,M=C.getTotalBits(t,l);if(M<=E){m=M;break}if(l>=r)throw new RangeError("Data too long")}for(const E of[s.Ecc.MEDIUM,s.Ecc.QUARTILE,s.Ecc.HIGH])a&&m<=s.getNumDataCodewords(l,E)*8&&(e=E);let f=[];for(const E of t){i(E.mode.modeBits,4,f),i(E.numChars,E.mode.numCharCountBits(l),f);for(const M of E.getData())f.push(M)}u(f.length==m);const p=s.getNumDataCodewords(l,e)*8;u(f.length<=p),i(0,Math.min(4,p-f.length),f),i(0,(8-f.length%8)%8,f),u(f.length%8==0);for(let E=236;f.length<p;E^=253)i(E,8,f);let R=[];for(;R.length*8<f.length;)R.push(0);return f.forEach((E,M)=>R[M>>>3]|=E<<7-(M&7)),new s(l,e,R,o)}getModule(t,e){return 0<=t&&t<this.size&&0<=e&&e<this.size&&this.modules[e][t]}getModules(){return this.modules}drawFunctionPatterns(){for(let n=0;n<this.size;n++)this.setFunctionModule(6,n,n%2==0),this.setFunctionModule(n,6,n%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const t=this.getAlignmentPatternPositions(),e=t.length;for(let n=0;n<e;n++)for(let r=0;r<e;r++)n==0&&r==0||n==0&&r==e-1||n==e-1&&r==0||this.drawAlignmentPattern(t[n],t[r]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(t){const e=this.errorCorrectionLevel.formatBits<<3|t;let n=e;for(let o=0;o<10;o++)n=n<<1^(n>>>9)*1335;const r=(e<<10|n)^21522;u(r>>>15==0);for(let o=0;o<=5;o++)this.setFunctionModule(8,o,g(r,o));this.setFunctionModule(8,7,g(r,6)),this.setFunctionModule(8,8,g(r,7)),this.setFunctionModule(7,8,g(r,8));for(let o=9;o<15;o++)this.setFunctionModule(14-o,8,g(r,o));for(let o=0;o<8;o++)this.setFunctionModule(this.size-1-o,8,g(r,o));for(let o=8;o<15;o++)this.setFunctionModule(8,this.size-15+o,g(r,o));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let t=this.version;for(let n=0;n<12;n++)t=t<<1^(t>>>11)*7973;const e=this.version<<12|t;u(e>>>18==0);for(let n=0;n<18;n++){const r=g(e,n),o=this.size-11+n%3,a=Math.floor(n/3);this.setFunctionModule(o,a,r),this.setFunctionModule(a,o,r)}}drawFinderPattern(t,e){for(let n=-4;n<=4;n++)for(let r=-4;r<=4;r++){const o=Math.max(Math.abs(r),Math.abs(n)),a=t+r,l=e+n;0<=a&&a<this.size&&0<=l&&l<this.size&&this.setFunctionModule(a,l,o!=2&&o!=4)}}drawAlignmentPattern(t,e){for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)this.setFunctionModule(t+r,e+n,Math.max(Math.abs(r),Math.abs(n))!=1)}setFunctionModule(t,e,n){this.modules[e][t]=n,this.isFunction[e][t]=!0}addEccAndInterleave(t){const e=this.version,n=this.errorCorrectionLevel;if(t.length!=s.getNumDataCodewords(e,n))throw new RangeError("Invalid argument");const r=s.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][e],o=s.ECC_CODEWORDS_PER_BLOCK[n.ordinal][e],a=Math.floor(s.getNumRawDataModules(e)/8),l=r-a%r,m=Math.floor(a/r);let f=[];const p=s.reedSolomonComputeDivisor(o);for(let E=0,M=0;E<r;E++){let w=t.slice(M,M+m-o+(E<l?0:1));M+=w.length;const I=s.reedSolomonComputeRemainder(w,p);E<l&&w.push(0),f.push(w.concat(I))}let R=[];for(let E=0;E<f[0].length;E++)f.forEach((M,w)=>{(E!=m-o||w>=l)&&R.push(M[E])});return u(R.length==a),R}drawCodewords(t){if(t.length!=Math.floor(s.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let e=0;for(let n=this.size-1;n>=1;n-=2){n==6&&(n=5);for(let r=0;r<this.size;r++)for(let o=0;o<2;o++){const a=n-o,m=(n+1&2)==0?this.size-1-r:r;!this.isFunction[m][a]&&e<t.length*8&&(this.modules[m][a]=g(t[e>>>3],7-(e&7)),e++)}}u(e==t.length*8)}applyMask(t){if(t<0||t>7)throw new RangeError("Mask value out of range");for(let e=0;e<this.size;e++)for(let n=0;n<this.size;n++){let r;switch(t){case 0:r=(n+e)%2==0;break;case 1:r=e%2==0;break;case 2:r=n%3==0;break;case 3:r=(n+e)%3==0;break;case 4:r=(Math.floor(n/3)+Math.floor(e/2))%2==0;break;case 5:r=n*e%2+n*e%3==0;break;case 6:r=(n*e%2+n*e%3)%2==0;break;case 7:r=((n+e)%2+n*e%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[e][n]&&r&&(this.modules[e][n]=!this.modules[e][n])}}getPenaltyScore(){let t=0;for(let o=0;o<this.size;o++){let a=!1,l=0,m=[0,0,0,0,0,0,0];for(let f=0;f<this.size;f++)this.modules[o][f]==a?(l++,l==5?t+=s.PENALTY_N1:l>5&&t++):(this.finderPenaltyAddHistory(l,m),a||(t+=this.finderPenaltyCountPatterns(m)*s.PENALTY_N3),a=this.modules[o][f],l=1);t+=this.finderPenaltyTerminateAndCount(a,l,m)*s.PENALTY_N3}for(let o=0;o<this.size;o++){let a=!1,l=0,m=[0,0,0,0,0,0,0];for(let f=0;f<this.size;f++)this.modules[f][o]==a?(l++,l==5?t+=s.PENALTY_N1:l>5&&t++):(this.finderPenaltyAddHistory(l,m),a||(t+=this.finderPenaltyCountPatterns(m)*s.PENALTY_N3),a=this.modules[f][o],l=1);t+=this.finderPenaltyTerminateAndCount(a,l,m)*s.PENALTY_N3}for(let o=0;o<this.size-1;o++)for(let a=0;a<this.size-1;a++){const l=this.modules[o][a];l==this.modules[o][a+1]&&l==this.modules[o+1][a]&&l==this.modules[o+1][a+1]&&(t+=s.PENALTY_N2)}let e=0;for(const o of this.modules)e=o.reduce((a,l)=>a+(l?1:0),e);const n=this.size*this.size,r=Math.ceil(Math.abs(e*20-n*10)/n)-1;return u(0<=r&&r<=9),t+=r*s.PENALTY_N4,u(0<=t&&t<=2568888),t}getAlignmentPatternPositions(){if(this.version==1)return[];{const t=Math.floor(this.version/7)+2,e=this.version==32?26:Math.ceil((this.version*4+4)/(t*2-2))*2;let n=[6];for(let r=this.size-7;n.length<t;r-=e)n.splice(1,0,r);return n}}static getNumRawDataModules(t){if(t<s.MIN_VERSION||t>s.MAX_VERSION)throw new RangeError("Version number out of range");let e=(16*t+128)*t+64;if(t>=2){const n=Math.floor(t/7)+2;e-=(25*n-10)*n-55,t>=7&&(e-=36)}return u(208<=e&&e<=29648),e}static getNumDataCodewords(t,e){return Math.floor(s.getNumRawDataModules(t)/8)-s.ECC_CODEWORDS_PER_BLOCK[e.ordinal][t]*s.NUM_ERROR_CORRECTION_BLOCKS[e.ordinal][t]}static reedSolomonComputeDivisor(t){if(t<1||t>255)throw new RangeError("Degree out of range");let e=[];for(let r=0;r<t-1;r++)e.push(0);e.push(1);let n=1;for(let r=0;r<t;r++){for(let o=0;o<e.length;o++)e[o]=s.reedSolomonMultiply(e[o],n),o+1<e.length&&(e[o]^=e[o+1]);n=s.reedSolomonMultiply(n,2)}return e}static reedSolomonComputeRemainder(t,e){let n=e.map(r=>0);for(const r of t){const o=r^n.shift();n.push(0),e.forEach((a,l)=>n[l]^=s.reedSolomonMultiply(a,o))}return n}static reedSolomonMultiply(t,e){if(t>>>8||e>>>8)throw new RangeError("Byte out of range");let n=0;for(let r=7;r>=0;r--)n=n<<1^(n>>>7)*285,n^=(e>>>r&1)*t;return u(n>>>8==0),n}finderPenaltyCountPatterns(t){const e=t[1];u(e<=this.size*3);const n=e>0&&t[2]==e&&t[3]==e*3&&t[4]==e&&t[5]==e;return(n&&t[0]>=e*4&&t[6]>=e?1:0)+(n&&t[6]>=e*4&&t[0]>=e?1:0)}finderPenaltyTerminateAndCount(t,e,n){return t&&(this.finderPenaltyAddHistory(e,n),e=0),e+=this.size,this.finderPenaltyAddHistory(e,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(t,e){e[0]==0&&(t+=this.size),e.pop(),e.unshift(t)}};let c=s;c.MIN_VERSION=1,c.MAX_VERSION=40,c.PENALTY_N1=3,c.PENALTY_N2=3,c.PENALTY_N3=40,c.PENALTY_N4=10,c.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],c.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],h.QrCode=c;function i(t,e,n){if(e<0||e>31||t>>>e)throw new RangeError("Value out of range");for(let r=e-1;r>=0;r--)n.push(t>>>r&1)}function g(t,e){return(t>>>e&1)!=0}function u(t){if(!t)throw new Error("Assertion error")}const d=class{constructor(t,e,n){if(this.mode=t,this.numChars=e,this.bitData=n,e<0)throw new RangeError("Invalid argument");this.bitData=n.slice()}static makeBytes(t){let e=[];for(const n of t)i(n,8,e);return new d(d.Mode.BYTE,t.length,e)}static makeNumeric(t){if(!d.isNumeric(t))throw new RangeError("String contains non-numeric characters");let e=[];for(let n=0;n<t.length;){const r=Math.min(t.length-n,3);i(parseInt(t.substr(n,r),10),r*3+1,e),n+=r}return new d(d.Mode.NUMERIC,t.length,e)}static makeAlphanumeric(t){if(!d.isAlphanumeric(t))throw new RangeError("String contains unencodable characters in alphanumeric mode");let e=[],n;for(n=0;n+2<=t.length;n+=2){let r=d.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n))*45;r+=d.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n+1)),i(r,11,e)}return n<t.length&&i(d.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n)),6,e),new d(d.Mode.ALPHANUMERIC,t.length,e)}static makeSegments(t){return t==""?[]:d.isNumeric(t)?[d.makeNumeric(t)]:d.isAlphanumeric(t)?[d.makeAlphanumeric(t)]:[d.makeBytes(d.toUtf8ByteArray(t))]}static makeEci(t){let e=[];if(t<0)throw new RangeError("ECI assignment value out of range");if(t<128)i(t,8,e);else if(t<16384)i(2,2,e),i(t,14,e);else if(t<1e6)i(6,3,e),i(t,21,e);else throw new RangeError("ECI assignment value out of range");return new d(d.Mode.ECI,0,e)}static isNumeric(t){return d.NUMERIC_REGEX.test(t)}static isAlphanumeric(t){return d.ALPHANUMERIC_REGEX.test(t)}getData(){return this.bitData.slice()}static getTotalBits(t,e){let n=0;for(const r of t){const o=r.mode.numCharCountBits(e);if(r.numChars>=1<<o)return 1/0;n+=4+o+r.bitData.length}return n}static toUtf8ByteArray(t){t=encodeURI(t);let e=[];for(let n=0;n<t.length;n++)t.charAt(n)!="%"?e.push(t.charCodeAt(n)):(e.push(parseInt(t.substr(n+1,2),16)),n+=2);return e}};let C=d;C.NUMERIC_REGEX=/^[0-9]*$/,C.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,C.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",h.QrSegment=C})(P||(P={}));(h=>{(s=>{const c=class{constructor(g,u){this.ordinal=g,this.formatBits=u}};let i=c;i.LOW=new c(0,1),i.MEDIUM=new c(1,0),i.QUARTILE=new c(2,3),i.HIGH=new c(3,2),s.Ecc=i})(h.QrCode||(h.QrCode={}))})(P||(P={}));(h=>{(s=>{const c=class{constructor(g,u){this.modeBits=g,this.numBitsCharCount=u}numCharCountBits(g){return this.numBitsCharCount[Math.floor((g+7)/17)]}};let i=c;i.NUMERIC=new c(1,[10,12,14]),i.ALPHANUMERIC=new c(2,[9,11,13]),i.BYTE=new c(4,[8,16,16]),i.KANJI=new c(8,[8,10,12]),i.ECI=new c(7,[0,0,0]),s.Mode=i})(h.QrSegment||(h.QrSegment={}))})(P||(P={}));var N=P;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var Q={L:N.QrCode.Ecc.LOW,M:N.QrCode.Ecc.MEDIUM,Q:N.QrCode.Ecc.QUARTILE,H:N.QrCode.Ecc.HIGH},H=128,k="L",$="#FFFFFF",Y="#000000",x=!1,O=4,q=.1;function G(h,s=0){const c=[];return h.forEach(function(i,g){let u=null;i.forEach(function(d,C){if(!d&&u!==null){c.push(`M${u+s} ${g+s}h${C-u}v1H${u+s}z`),u=null;return}if(C===i.length-1){if(!d)return;u===null?c.push(`M${C+s},${g+s} h1v1H${C+s}z`):c.push(`M${u+s},${g+s} h${C+1-u}v1H${u+s}z`);return}d&&u===null&&(u=C)})}),c.join("")}function X(h,s){return h.slice().map((c,i)=>i<s.y||i>=s.y+s.h?c:c.map((g,u)=>u<s.x||u>=s.x+s.w?g:!1))}function K(h,s,c,i){if(i==null)return null;const g=c?O:0,u=h.length+g*2,d=Math.floor(s*q),C=u/s,t=(i.width||d)*C,e=(i.height||d)*C,n=i.x==null?h.length/2-t/2:i.x*C,r=i.y==null?h.length/2-e/2:i.y*C;let o=null;if(i.excavate){let a=Math.floor(n),l=Math.floor(r),m=Math.ceil(t+n-a),f=Math.ceil(e+r-l);o={x:a,y:l,w:m,h:f}}return{x:n,y:r,h:e,w:t,excavation:o}}var tt=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function nt(h){const s=h,{value:c,size:i=H,level:g=k,bgColor:u=$,fgColor:d=Y,includeMargin:C=x,style:t,imageSettings:e}=s,n=U(s,["value","size","level","bgColor","fgColor","includeMargin","style","imageSettings"]),r=e==null?void 0:e.src,o=y.useRef(null),a=y.useRef(null),[l,m]=y.useState(!1);y.useEffect(()=>{if(o.current!=null){const R=o.current,E=R.getContext("2d");if(!E)return;let M=N.QrCode.encodeText(c,Q[g]).getModules();const w=C?O:0,I=M.length+w*2,_=K(M,i,C,e),v=a.current,b=_!=null&&v!==null&&v.complete&&v.naturalHeight!==0&&v.naturalWidth!==0;b&&_.excavation!=null&&(M=X(M,_.excavation));const F=window.devicePixelRatio||1;R.height=R.width=i*F;const B=i/I*F;E.scale(B,B),E.fillStyle=u,E.fillRect(0,0,I,I),E.fillStyle=d,tt?E.fill(new Path2D(G(M,w))):M.forEach(function(V,W){V.forEach(function(j,Z){j&&E.fillRect(Z+w,W+w,1,1)})}),b&&E.drawImage(v,_.x+w,_.y+w,_.w,_.h)}}),y.useEffect(()=>{m(!1)},[r]);const f=L({height:i,width:i},t);let p=null;return r!=null&&(p=A.createElement("img",{src:r,key:r,style:{display:"none"},onLoad:()=>{m(!0)},ref:a})),A.createElement(A.Fragment,null,A.createElement("canvas",L({style:f,height:i,width:i,ref:o},n)),p)}function rt(h){const s=h,{value:c,size:i=H,level:g=k,bgColor:u=$,fgColor:d=Y,includeMargin:C=x,imageSettings:t}=s,e=U(s,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let n=N.QrCode.encodeText(c,Q[g]).getModules();const r=C?O:0,o=n.length+r*2,a=K(n,i,C,t);let l=null;t!=null&&a!=null&&(a.excavation!=null&&(n=X(n,a.excavation)),l=A.createElement("image",{xlinkHref:t.src,height:a.h,width:a.w,x:a.x+r,y:a.y+r,preserveAspectRatio:"none"}));const m=G(n,r);return A.createElement("svg",L({height:i,width:i,viewBox:`0 0 ${o} ${o}`},e),A.createElement("path",{fill:u,d:`M0,0 h${o}v${o}H0z`,shapeRendering:"crispEdges"}),A.createElement("path",{fill:d,d:m,shapeRendering:"crispEdges"}),l)}export{nt as Q,rt as a};
