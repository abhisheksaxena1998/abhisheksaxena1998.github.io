function u(r,e){I(r)&&(r="100%");const t=E(r);return r=e===360?r:Math.min(e,Math.max(0,parseFloat(r))),t&&(r=parseInt(String(r*e),10)/100),Math.abs(r-e)<1e-6?1:(e===360?r=(r<0?r%e+e:r%e)/parseFloat(String(e)):r=r%e/parseFloat(String(e)),r)}function m(r){return Math.min(1,Math.max(0,r))}function I(r){return typeof r=="string"&&r.indexOf(".")!==-1&&parseFloat(r)===1}function E(r){return typeof r=="string"&&r.indexOf("%")!==-1}function v(r){return r=parseFloat(r),(isNaN(r)||r<0||r>1)&&(r=1),r}function p(r){return Number(r)<=1?`${Number(r)*100}%`:r}function l(r){return r.length===1?"0"+r:String(r)}function N(r,e,t){return{r:u(r,255)*255,g:u(e,255)*255,b:u(t,255)*255}}function k(r,e,t){r=u(r,255),e=u(e,255),t=u(t,255);const s=Math.max(r,e,t),n=Math.min(r,e,t);let a=0,i=0;const h=(s+n)/2;if(s===n)i=0,a=0;else{const g=s-n;switch(i=h>.5?g/(2-s-n):g/(s+n),s){case r:a=(e-t)/g+(e<t?6:0);break;case e:a=(t-r)/g+2;break;case t:a=(r-e)/g+4;break}a/=6}return{h:a,s:i,l:h}}function x(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*(6*t):t<1/2?e:t<2/3?r+(e-r)*(2/3-t)*6:r}function B(r,e,t){let s,n,a;if(r=u(r,360),e=u(e,100),t=u(t,100),e===0)n=t,a=t,s=t;else{const i=t<.5?t*(1+e):t+e-t*e,h=2*t-i;s=x(h,i,r+1/3),n=x(h,i,r),a=x(h,i,r-1/3)}return{r:s*255,g:n*255,b:a*255}}function $(r,e,t){r=u(r,255),e=u(e,255),t=u(t,255);const s=Math.max(r,e,t),n=Math.min(r,e,t);let a=0;const i=s,h=s-n,g=s===0?0:h/s;if(s===n)a=0;else{switch(s){case r:a=(e-t)/h+(e<t?6:0);break;case e:a=(t-r)/h+2;break;case t:a=(r-e)/h+4;break}a/=6}return{h:a,s:g,v:i}}function q(r,e,t){r=u(r,360)*6,e=u(e,100),t=u(t,100);const s=Math.floor(r),n=r-s,a=t*(1-e),i=t*(1-n*e),h=t*(1-(1-n)*e),g=s%6,R=[t,i,a,a,h,t][g],y=[h,t,t,i,a,a][g],F=[a,a,h,t,t,i][g];return{r:R*255,g:y*255,b:F*255}}function A(r,e,t,s){const n=[l(Math.round(r).toString(16)),l(Math.round(e).toString(16)),l(Math.round(t).toString(16))];return s&&n[0].startsWith(n[0].charAt(1))&&n[1].startsWith(n[1].charAt(1))&&n[2].startsWith(n[2].charAt(1))?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function P(r,e,t,s,n){const a=[l(Math.round(r).toString(16)),l(Math.round(e).toString(16)),l(Math.round(t).toString(16)),l(j(s))];return n&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))&&a[3].startsWith(a[3].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}function j(r){return Math.round(parseFloat(r)*255).toString(16)}function H(r){return o(r)/255}function o(r){return parseInt(r,16)}function O(r){return{r:r>>16,g:(r&65280)>>8,b:r&255}}const S={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function W(r){let e={r:0,g:0,b:0},t=1,s=null,n=null,a=null,i=!1,h=!1;return typeof r=="string"&&(r=D(r)),typeof r=="object"&&(d(r.r)&&d(r.g)&&d(r.b)?(e=N(r.r,r.g,r.b),i=!0,h=String(r.r).substr(-1)==="%"?"prgb":"rgb"):d(r.h)&&d(r.s)&&d(r.v)?(s=p(r.s),n=p(r.v),e=q(r.h,s,n),i=!0,h="hsv"):d(r.h)&&d(r.s)&&d(r.l)&&(s=p(r.s),a=p(r.l),e=B(r.h,s,a),i=!0,h="hsl"),Object.prototype.hasOwnProperty.call(r,"a")&&(t=r.a)),t=v(t),{ok:i,format:r.format||h,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:t}}const G="[-\\+]?\\d+%?",U="[-\\+]?\\d*\\.\\d+%?",b=`(?:${U})|(?:${G})`,M=`[\\s|\\(]+(${b})[,|\\s]+(${b})[,|\\s]+(${b})\\s*\\)?`,w=`[\\s|\\(]+(${b})[,|\\s]+(${b})[,|\\s]+(${b})[,|\\s]+(${b})\\s*\\)?`,c={CSS_UNIT:new RegExp(b),rgb:new RegExp("rgb"+M),rgba:new RegExp("rgba"+w),hsl:new RegExp("hsl"+M),hsla:new RegExp("hsla"+w),hsv:new RegExp("hsv"+M),hsva:new RegExp("hsva"+w),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function D(r){if(r=r.trim().toLowerCase(),r.length===0)return!1;let e=!1;if(S[r])r=S[r],e=!0;else if(r==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let t=c.rgb.exec(r);return t?{r:t[1],g:t[2],b:t[3]}:(t=c.rgba.exec(r),t?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=c.hsl.exec(r),t?{h:t[1],s:t[2],l:t[3]}:(t=c.hsla.exec(r),t?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=c.hsv.exec(r),t?{h:t[1],s:t[2],v:t[3]}:(t=c.hsva.exec(r),t?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=c.hex8.exec(r),t?{r:o(t[1]),g:o(t[2]),b:o(t[3]),a:H(t[4]),format:e?"name":"hex8"}:(t=c.hex6.exec(r),t?{r:o(t[1]),g:o(t[2]),b:o(t[3]),format:e?"name":"hex"}:(t=c.hex4.exec(r),t?{r:o(t[1]+t[1]),g:o(t[2]+t[2]),b:o(t[3]+t[3]),a:H(t[4]+t[4]),format:e?"name":"hex8"}:(t=c.hex3.exec(r),t?{r:o(t[1]+t[1]),g:o(t[2]+t[2]),b:o(t[3]+t[3]),format:e?"name":"hex"}:!1)))))))))}function d(r){return!!c.CSS_UNIT.exec(String(r))}class f{constructor(e="",t={}){if(e instanceof f)return e;typeof e=="number"&&(e=O(e)),this.originalInput=e;const s=W(e);this.originalInput=e,this.r=s.r,this.g=s.g,this.b=s.b,this.a=s.a,this.roundA=Math.round(100*this.a)/100,this.format=t.format??s.format,this.gradientType=t.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=s.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){const e=this.toRgb();let t,s,n;const a=e.r/255,i=e.g/255,h=e.b/255;return a<=.03928?t=a/12.92:t=Math.pow((a+.055)/1.055,2.4),i<=.03928?s=i/12.92:s=Math.pow((i+.055)/1.055,2.4),h<=.03928?n=h/12.92:n=Math.pow((h+.055)/1.055,2.4),.2126*t+.7152*s+.0722*n}getAlpha(){return this.a}setAlpha(e){return this.a=v(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:e}=this.toHsl();return e===0}toHsv(){const e=$(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){const e=$(this.r,this.g,this.b),t=Math.round(e.h*360),s=Math.round(e.s*100),n=Math.round(e.v*100);return this.a===1?`hsv(${t}, ${s}%, ${n}%)`:`hsva(${t}, ${s}%, ${n}%, ${this.roundA})`}toHsl(){const e=k(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){const e=k(this.r,this.g,this.b),t=Math.round(e.h*360),s=Math.round(e.s*100),n=Math.round(e.l*100);return this.a===1?`hsl(${t}, ${s}%, ${n}%)`:`hsla(${t}, ${s}%, ${n}%, ${this.roundA})`}toHex(e=!1){return A(this.r,this.g,this.b,e)}toHexString(e=!1){return"#"+this.toHex(e)}toHex8(e=!1){return P(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return"#"+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const e=Math.round(this.r),t=Math.round(this.g),s=Math.round(this.b);return this.a===1?`rgb(${e}, ${t}, ${s})`:`rgba(${e}, ${t}, ${s}, ${this.roundA})`}toPercentageRgb(){const e=t=>`${Math.round(u(t,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){const e=t=>Math.round(u(t,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const e="#"+A(this.r,this.g,this.b,!1);for(const[t,s]of Object.entries(S))if(e===s)return t;return!1}toString(e){const t=!!e;e=e??this.format;let s=!1;const n=this.a<1&&this.a>=0;return!t&&n&&(e.startsWith("hex")||e==="name")?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(s=this.toRgbString()),e==="prgb"&&(s=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(s=this.toHexString()),e==="hex3"&&(s=this.toHexString(!0)),e==="hex4"&&(s=this.toHex8String(!0)),e==="hex8"&&(s=this.toHex8String()),e==="name"&&(s=this.toName()),e==="hsl"&&(s=this.toHslString()),e==="hsv"&&(s=this.toHsvString()),s||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new f(this.toString())}lighten(e=10){const t=this.toHsl();return t.l+=e/100,t.l=m(t.l),new f(t)}brighten(e=10){const t=this.toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(e/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(e/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(e/100)))),new f(t)}darken(e=10){const t=this.toHsl();return t.l-=e/100,t.l=m(t.l),new f(t)}tint(e=10){return this.mix("white",e)}shade(e=10){return this.mix("black",e)}desaturate(e=10){const t=this.toHsl();return t.s-=e/100,t.s=m(t.s),new f(t)}saturate(e=10){const t=this.toHsl();return t.s+=e/100,t.s=m(t.s),new f(t)}greyscale(){return this.desaturate(100)}spin(e){const t=this.toHsl(),s=(t.h+e)%360;return t.h=s<0?360+s:s,new f(t)}mix(e,t=50){const s=this.toRgb(),n=new f(e).toRgb(),a=t/100,i={r:(n.r-s.r)*a+s.r,g:(n.g-s.g)*a+s.g,b:(n.b-s.b)*a+s.b,a:(n.a-s.a)*a+s.a};return new f(i)}analogous(e=6,t=30){const s=this.toHsl(),n=360/t,a=[this];for(s.h=(s.h-(n*e>>1)+720)%360;--e;)s.h=(s.h+n)%360,a.push(new f(s));return a}complement(){const e=this.toHsl();return e.h=(e.h+180)%360,new f(e)}monochromatic(e=6){const t=this.toHsv(),{h:s}=t,{s:n}=t;let{v:a}=t;const i=[],h=1/e;for(;e--;)i.push(new f({h:s,s:n,v:a})),a=(a+h)%1;return i}splitcomplement(){const e=this.toHsl(),{h:t}=e;return[this,new f({h:(t+72)%360,s:e.s,l:e.l}),new f({h:(t+216)%360,s:e.s,l:e.l})]}onBackground(e){const t=this.toRgb(),s=new f(e).toRgb(),n=t.a+s.a*(1-t.a);return new f({r:(t.r*t.a+s.r*s.a*(1-t.a))/n,g:(t.g*t.a+s.g*s.a*(1-t.a))/n,b:(t.b*t.a+s.b*s.a*(1-t.a))/n,a:n})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(e){const t=this.toHsl(),{h:s}=t,n=[this],a=360/e;for(let i=1;i<e;i++)n.push(new f({h:(s+i*a)%360,s:t.s,l:t.l}));return n}equals(e){return this.toRgbString()===new f(e).toRgbString()}}export{f as T,A as a,W as i,$ as r};
