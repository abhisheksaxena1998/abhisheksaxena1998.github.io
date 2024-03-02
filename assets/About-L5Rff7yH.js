import{j as e}from"./index-BZrrX7dv.js";import{T as x}from"./index-FWT3jULg.js";import{m as o,s as i}from"./styles-qhtXoaZg.js";import{s as d}from"./index-zrPh9aRe.js";import{S as p,t as m,f as n}from"./SectionWrapper-tLewD5Ea.js";const h=({index:s,title:l,icon:r,links:a})=>e.jsx(x,{className:"xs:w-[250px] w-full",children:e.jsx(o.div,{variants:n("right","spring",s*.5,.75),className:"w-full blue-purple-gradient p-[1px] rounded-[20px] shadow-card",whileHover:{scale:1.05},whileTap:{scale:.8,borderRadius:"100%"},children:e.jsxs("div",{options:{max:45,scale:1,speed:450},className:"bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col",children:[a.map(t=>e.jsxs("div",{className:"flex flex-row",children:[e.jsx("img",{loading:"lazy",src:t.technology_icon,alt:"web-development",className:"w-16 h-16 object-contain"}),e.jsx("p",{className:"text-white w-16 h-16 py-5 px-8 object-contain",children:t.technology})]},t.technology)),e.jsx("h3",{className:"text-white text-[20px] font-bold text-center",children:l})]})})}),f=()=>{let s=new Date("2021-02-01"),l=new Date,r=l.getFullYear()-s.getFullYear(),a=l.getMonth()-s.getMonth();return a<0&&(r--,a+=12),e.jsxs(e.Fragment,{children:[e.jsxs(o.div,{variants:m(),children:[e.jsx("p",{className:i.sectionSubText,children:"Introduction"}),e.jsx("h2",{className:i.sectionHeadText,children:"Overview."})]}),e.jsxs(o.p,{variants:n("","",.1,1),className:"mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify",children:["I'm a skilled Full-Stack software developer with ",r," years ",a," ","months product development experience in Python/Django, AWS, TypeScript, JavaScript, and expertise in frameworks like React. I'm a quick learner and collaborate closely to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring up ideas to life!"]}),e.jsx("div",{className:"mt-20 flex flex-wrap gap-10",children:d.map((t,c)=>e.jsx(h,{index:c,...t},t.title))})]})},y=p(f,"about");export{y as default};