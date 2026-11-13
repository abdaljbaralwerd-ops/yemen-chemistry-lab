const units = [
 {id:1,title:"علم الكيمياء",icon:"🧪",desc:"مدخل إلى علم الكيمياء ومجالاته",intro:"الكيمياء علم يدرس المادة وخواصها وتركيبها والتغيرات التي تطرأ عليها.",points:["المادة هي كل ما له كتلة ويشغل حيزًا من الفراغ.","تساعد الكيمياء على فهم المواد والتغيرات من حولنا.","تدخل الكيمياء في مجالات مثل الطب والزراعة والصناعة والبيئة."],question:"ما الموضوع الأساسي الذي يدرسه علم الكيمياء؟",answers:["المادة والتغيرات التي تطرأ عليها","حركة الكواكب فقط","تضاريس الأرض"],correct:0},
 {id:2,title:"مفهوم الذرة",icon:"⚛️",desc:"التعرف على الذرة والمادة",intro:"الذرة وحدة بنائية أساسية للعنصر، وتختلف العناصر باختلاف نوع ذراتها.",points:["تتكون المادة من جسيمات صغيرة.","ترتبط الذرات بطرق مختلفة لتكوين المواد.","الجزيء يتكون من ذرتين أو أكثر مرتبطتين كيميائيًا."],question:"ما الذرة؟",answers:["وحدة بنائية للعنصر","نوع من الطاقة","جهاز مخبري"],correct:0},
 {id:3,title:"تركيب الذرة",icon:"🔬",desc:"النواة والإلكترونات",intro:"تتكون الذرة من نواة صغيرة في مركزها، وتوجد الإلكترونات في المنطقة المحيطة بها.",points:["تحتوي النواة على البروتونات والنيوترونات.","شحنة البروتون موجبة.","شحنة الإلكترون سالبة، والنيوترون متعادل."],question:"أي الجسيمات يحمل شحنة سالبة؟",answers:["البروتون","الإلكترون","النيوترون"],correct:1},
 {id:4,title:"الجدول الدوري",icon:"▦",desc:"تنظيم العناصر وخصائصها",intro:"يرتب الجدول الدوري العناصر الكيميائية وفق أعدادها الذرية، ويُظهر تكرارًا دوريًا في خصائصها.",points:["الصفوف الأفقية تسمى دورات.","الأعمدة الرأسية تسمى مجموعات.","تتشابه عناصر المجموعة الواحدة في بعض خواصها الكيميائية."],question:"ماذا تسمى الأعمدة الرأسية في الجدول الدوري؟",answers:["الدورات","المجموعات","النظائر"],correct:1},
 {id:5,title:"المجموعة الأولى",icon:"🧫",desc:"التعرف على الفلزات القلوية",intro:"تضم المجموعة الأولى عناصر تعرف بالفلزات القلوية، ويُستثنى الهيدروجين من تصنيفها كفلز قلوي.",points:["للعناصر القلوية إلكترون تكافؤ واحد.","تتميز بنشاط كيميائي مرتفع.","تُدرس تفاعلاتها الخطرة من خلال الرسوم والمحاكاة التعليمية فقط."],question:"كم إلكترون تكافؤ تمتلكه عناصر المجموعة الأولى؟",answers:["إلكترون واحد","إلكترونان","ثمانية إلكترونات"],correct:0,simulation:true},
 {id:6,title:"المجموعة الثانية",icon:"🧬",desc:"الفلزات القلوية الأرضية",intro:"تسمى عناصر المجموعة الثانية بالفلزات القلوية الأرضية، ولها خصائص مشتركة ترتبط بتركيبها الإلكتروني.",points:["تمتلك ذرتُها إلكتروني تكافؤ في المستوى الخارجي.","من أمثلتها المغنيسيوم والكالسيوم.","تختلف درجة نشاط عناصرها من عنصر إلى آخر."],question:"كم إلكترون تكافؤ لعناصر المجموعة الثانية؟",answers:["إلكترون واحد","إلكترونان","ثلاثة إلكترونات"],correct:1},
 {id:7,title:"التفاعلات الكيميائية",icon:"⚗️",desc:"فهم المتفاعلات والنواتج",intro:"التفاعل الكيميائي عملية تتحول فيها مواد تسمى متفاعلات إلى مواد جديدة تسمى نواتج.",points:["المتفاعلات توجد قبل حدوث التفاعل.","النواتج تتكون نتيجة إعادة ترتيب الذرات.","يجب أن تكون المعادلة الكيميائية موزونة وفق حفظ عدد ذرات كل عنصر."],question:"ماذا تسمى المواد الناتجة عن التفاعل؟",answers:["المتفاعلات","النواتج","المذيبات"],correct:1},
 {id:8,title:"الكيمياء العضوية",icon:"🧩",desc:"مقدمة إلى مركبات الكربون",intro:"تهتم الكيمياء العضوية بدراسة عدد كبير من مركبات الكربون وخواصها وتفاعلاتها.",points:["يدخل الكربون في تركيب مركبات عضوية كثيرة.","توجد مركبات عضوية في الكائنات الحية والمواد اليومية.","تختلف المركبات في بنيتها وخواصها."],question:"ما العنصر المحوري في معظم المركبات العضوية؟",answers:["الكربون","الحديد","الهيليوم"],correct:0}
];

const grid = document.getElementById("unitGrid");
const panel = document.getElementById("lessonPanel");
const content = document.getElementById("lessonContent");
let deferredInstall = null;

function renderUnits(){
 grid.innerHTML = units.map(u=>`<button class="unit-card" data-id="${u.id}"><span class="unit-icon">${u.icon}</span><h3>الوحدة ${u.id}: ${u.title}</h3><p>${u.desc}</p></button>`).join("");
 grid.querySelectorAll("button").forEach(btn=>btn.addEventListener("click",()=>openUnit(Number(btn.dataset.id))));
}
function openUnit(id){
 const u=units.find(x=>x.id===id); if(!u)return;
 const saved=JSON.parse(localStorage.getItem("chemistry-progress")||"{}");
 content.innerHTML=`<p class="eyebrow">الوحدة ${u.id}</p><h2>${u.title}</h2><p>${u.intro}</p>
 <div class="concept-box"><strong>أهم النقاط</strong><ul>${u.points.map(p=>`<li>${p}</li>`).join("")}</ul></div>
 ${u.simulation?`<div class="simulation"><strong>محاكاة تعليمية افتراضية</strong><p>شاهد تمثيلًا بصريًا مبسطًا لفكرة تفاعل فلز قلوي مع الماء دون إجراء تجربة حقيقية.</p><button id="simulateBtn">تشغيل المحاكاة</button><div id="simStage" class="sim-stage">المحاكاة متوقفة</div><small>هذه المحاكاة توضيحية وليست نموذجًا علميًا كميًا، ولا تمثل تعليمات لتنفيذ التجربة.</small></div>`:""}
 <div class="quiz"><h3>اختبر فهمك</h3><p>${u.question}</p><div id="answers">${u.answers.map((a,i)=>`<button data-answer="${i}">${a}</button>`).join("")}</div><p id="quizResult" class="quiz-result" aria-live="polite"></p></div>`;
 panel.hidden=false; panel.scrollIntoView({behavior:"smooth",block:"start"});
 document.getElementById("answers").querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>{
   const ok=Number(b.dataset.answer)===u.correct;
   document.getElementById("quizResult").textContent=ok?"إجابة صحيحة! أحسنت.":"ليست الإجابة الصحيحة. حاول مرة أخرى.";
   if(ok){saved[id]=true;localStorage.setItem("chemistry-progress",JSON.stringify(saved));}
 }));
 const sim=document.getElementById("simulateBtn");
 if(sim)sim.addEventListener("click",()=>{document.getElementById("simStage").innerHTML="<div>💧 + ⚛️<br><strong>تمثيل رمزي للتفاعل</strong><br>تتغير المواد وتنتج مواد جديدة — دون عرض خطوات تنفيذية.</div>";});
}
document.getElementById("backBtn").addEventListener("click",()=>{panel.hidden=true;document.getElementById("units").scrollIntoView({behavior:"smooth"});});
renderUnits();

window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredInstall=e;const b=document.getElementById("installBtn");b.hidden=false;b.addEventListener("click",async()=>{if(!deferredInstall)return;deferredInstall.prompt();await deferredInstall.userChoice;deferredInstall=null;b.hidden=true;},{once:true});});
if("serviceWorker" in navigator && location.protocol.startsWith("http")){window.addEventListener("load",()=>navigator.serviceWorker.register("./service-worker.js").catch(err=>console.warn("تعذر تسجيل التخزين دون اتصال",err)));}
