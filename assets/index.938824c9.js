(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();let a=document.getElementById("form"),d=document.getElementById("name"),c=document.getElementById("number"),m=document.getElementById("month"),u=document.getElementById("year"),f=document.getElementById("CVC"),L=document.getElementById("continue"),E=document.getElementsByClassName("complete-state")[0];a.addEventListener("submit",n=>{if(n.preventDefault(),document.getElementById("cardholder-name").value===""){alert("Field(s) are empty");return}a.style.display="none",E.style.display="flex",n.target.reset()});L.addEventListener("click",()=>{a.style.display="flex",E.style.display="none",d.innerText="JANE APPLESEED",c.innerText="0000 0000 0000 0000",m.innerText="00",u.innerText="00",f.innerText="123"});a.addEventListener("input",n=>{let r=n.target.value,t=n.target,o=n.target.nextElementSibling;switch(n.target.name){case"name":d.innerText=r.toUpperCase(),r===""?(o.classList.add("error"),t.classList.add("error-border"),d.innerText="JANE APPLESEED"):(o.classList.remove("error"),t.classList.remove("error-border"));break;case"number":let s=n.target.nextElementSibling.nextElementSibling;var e=n.target.value.split(" ").join("");e.length>0&&(e=e.match(new RegExp(".{1,4}","g")).join(" ")),n.target.value=e,c.innerText=e,i(r,s,t),e===""?(o.classList.add("error"),t.classList.add("error-border"),c.innerText="0000 0000 0000 0000"):(o.classList.remove("error"),t.classList.remove("error-border"));break;case"expiration-month":let l=n.target.nextElementSibling.nextElementSibling;m.innerText=r,i(r,l,t),r===""?(o.classList.add("error"),t.classList.add("error-border"),m.innerText="00"):(o.classList.remove("error"),t.classList.remove("error-border"));break;case"expiration-year":u.innerText=r;let g=document.getElementById("blankError"),b=document.getElementById("error-format");i(r,b,t),r===""?(g.classList.add("error"),t.classList.add("error-border"),u.innerText="00"):(g.classList.remove("error"),t.classList.remove("error-border"));break;case"cvc":f.innerText=r;let y=n.target.nextElementSibling.nextElementSibling;i(r,y,t),r===""?(o.classList.add("error"),t.classList.add("error-border"),f.innerText="123"):(o.classList.remove("error"),t.classList.remove("error-border"));break}});function i(n,r,t){var o=/[^ 0-9]/g;n.match(o)?(r.classList.add("error"),t.classList.add("format-error-border")):(r.classList.remove("error"),t.classList.remove("format-error-border"))}
