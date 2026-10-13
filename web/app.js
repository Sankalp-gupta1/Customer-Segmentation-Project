const COLORS=["#c9ff66","#62d9ff","#a98bff","#ffad66","#ff72b6","#6e8cff","#ff6f6f","#66ffc2"];
const $=s=>document.querySelector(s);
let rows=[],result=null;

function parseCSV(text){
  const lines=text.trim().split(/\r?\n/);
  return lines.slice(1).map(line=>{
    const p=line.split(",");
    return {id:+p[0],gender:p[1],age:+p[2],income:+p[3],spend:+p[4]};
  });
}
function mean(a){return a.reduce((s,x)=>s+x,0)/a.length}
function std(a,m){const v=a.reduce((s,x)=>s+(x-m)*(x-m),0)/a.length;return Math.sqrt(v)||1}
function features(data){
  const raw=data.map(r=>[r.gender==="Female"?1:0,r.age,r.income,r.spend]);
  const cols=[0,1,2,3].map(j=>raw.map(r=>r[j]));
  const ms=cols.map(mean),ss=cols.map((c,i)=>std(c,ms[i]));
  return raw.map(r=>r.map((v,j)=>(v-ms[j])/ss[j]));
}
function dist(a,b){let s=0;for(let i=0;i<a.length;i++){const d=a[i]-b[i];s+=d*d}return s}
function initCentroids(points,k){
  const sorted=points.map((p,i)=>({p,i,score:p[2]+p[3]})).sort((a,b)=>a.score-b.score);
  const out=[];
  for(let n=0;n<k;n++){const idx=Math.round((n+.5)*sorted.length/k-.5);out.push([...sorted[Math.max(0,Math.min(sorted.length-1,idx))].p])}
  return out;
}
function kmeans(data,k){
  const pts=features(data);let cent=initCentroids(pts,k),labels=new Array(pts.length).fill(-1);
  for(let iter=0;iter<80;iter++){
    let changed=false;
    for(let i=0;i<pts.length;i++){
      let best=0,bestD=Infinity;
      for(let c=0;c<k;c++){const d=dist(pts[i],cent[c]);if(d<bestD){bestD=d;best=c}}
      if(labels[i]!==best){labels[i]=best;changed=true}
    }
    const sums=Array.from({length:k},()=>Array(4).fill(0)),counts=Array(k).fill(0);
    pts.forEach((p,i)=>{const c=labels[i];counts[c]++;p.forEach((v,j)=>sums[c][j]+=v)});
    for(let c=0;c<k;c++){if(counts[c])cent[c]=sums[c].map(v=>v/counts[c])}
    if(!changed&&iter>0)break;
  }
  return {labels,centroids:cent};
}
function profileName(p,overall){
  const hiI=p.income>overall.income+8,loI=p.income<overall.income-8,hiS=p.spend>overall.spend+10,loS=p.spend<overall.spend-10;
  if(hiI&&hiS)return["Premium Loyalists","High income and high engagement. Strong fit for premium offers and loyalty experiences."];
  if(hiI&&loS)return["High-Potential Observers","Strong purchasing power but low spending score. Focus on trust, relevance and conversion."];
  if(loI&&hiS)return["Value Enthusiasts","Lower income with strong spending engagement. Offers and rewards may resonate well."];
  if(loI&&loS)return["Budget-Conscious","Lower income and lower engagement. Prioritize useful, price-sensitive communication."];
  if(p.age<32&&p.spend>=overall.spend)return["Young Trend Seekers","Younger customers with healthy engagement. Social and trend-led campaigns may fit."];
  return["Mainstream Core","Balanced income and spending behavior. Useful baseline segment for broad campaigns."];
}
function profiles(data,labels,k){
  const overall={income:mean(data.map(r=>r.income)),spend:mean(data.map(r=>r.spend))};
  return Array.from({length:k},(_,c)=>{
    const m=data.filter((_,i)=>labels[i]===c);
    const p={cluster:c,count:m.length,age:mean(m.map(r=>r.age)),income:mean(m.map(r=>r.income)),spend:mean(m.map(r=>r.spend))};
    const label=profileName(p,overall);p.name=label[0];p.focus=label[1];return p;
  }).sort((a,b)=>b.count-a.count);
}
function setMetrics(){
  $("#mCustomers").textContent=rows.length;
  $("#mAge").textContent=mean(rows.map(r=>r.age)).toFixed(1);
  $("#mIncome").textContent=mean(rows.map(r=>r.income)).toFixed(1);
  $("#mSpend").textContent=mean(rows.map(r=>r.spend)).toFixed(1);
}
function renderSegments(ps){
  $("#segmentList").innerHTML=ps.map(p=>'<div class="segment-item"><div class="segment-top"><div class="segment-name"><span class="dot" style="background:'+COLORS[p.cluster%COLORS.length]+'"></span>'+p.name+'</div><span class="segment-count">'+p.count+' customers</span></div><p>'+p.focus+'</p></div>').join("");
  $("#profileBody").innerHTML=ps.map(p=>'<tr><td><div class="cluster-cell"><span class="dot" style="background:'+COLORS[p.cluster%COLORS.length]+'"></span>Cluster '+(p.cluster+1)+'</div></td><td>'+p.count+'</td><td>'+p.age.toFixed(1)+'</td><td>$'+p.income.toFixed(1)+'k</td><td>'+p.spend.toFixed(1)+'</td><td>'+p.name+'</td></tr>').join("");
}
function renderChart(data,labels){
  const svg=$("#scatter"),W=760,H=500,pad={l:55,r:24,t:24,b:48};
  const minX=10,maxX=145,minY=0,maxY=100;
  const x=v=>pad.l+(v-minX)/(maxX-minX)*(W-pad.l-pad.r);
  const y=v=>H-pad.b-(v-minY)/(maxY-minY)*(H-pad.t-pad.b);
  let out="";
  [20,40,60,80,100,120,140].forEach(v=>{out+='<line class="grid-line" x1="'+x(v)+'" y1="'+pad.t+'" x2="'+x(v)+'" y2="'+(H-pad.b)+'"/><text class="axis-label" x="'+x(v)+'" y="'+(H-20)+'" text-anchor="middle">'+v+'</text>'});
  [0,20,40,60,80,100].forEach(v=>{out+='<line class="grid-line" x1="'+pad.l+'" y1="'+y(v)+'" x2="'+(W-pad.r)+'" y2="'+y(v)+'"/><text class="axis-label" x="38" y="'+(y(v)+3)+'" text-anchor="end">'+v+'</text>'});
  out+='<text class="axis-label" x="'+(W/2)+'" y="'+(H-3)+'" text-anchor="middle">Annual income (k$)</text><text class="axis-label" x="12" y="'+(H/2)+'" text-anchor="middle" transform="rotate(-90 12 '+(H/2)+')">Spending score</text>';
  data.forEach((r,i)=>{out+='<circle class="point" data-i="'+i+'" cx="'+x(r.income)+'" cy="'+y(r.spend)+'" r="5" fill="'+COLORS[labels[i]%COLORS.length]+'" opacity=".86"/>'});
  svg.innerHTML=out;
  const tip=$("#tooltip"),wrap=svg.parentElement;
  svg.querySelectorAll(".point").forEach(el=>{
    el.addEventListener("mouseenter",e=>{const r=data[+el.dataset.i],c=labels[+el.dataset.i];tip.innerHTML='<strong>Customer '+r.id+'</strong><br>'+r.gender+' · '+r.age+' yrs<br>Income: $'+r.income+'k<br>Spend score: '+r.spend+'<br>Cluster '+(c+1);tip.classList.remove("hidden")});
    el.addEventListener("mousemove",e=>{const rect=wrap.getBoundingClientRect();tip.style.left=(e.clientX-rect.left+12)+"px";tip.style.top=(e.clientY-rect.top+12)+"px"});
    el.addEventListener("mouseleave",()=>tip.classList.add("hidden"));
  });
}
function run(){
  const k=+$("#kRange").value;$("#status").textContent="Running K-Means with K = "+k+"…";
  requestAnimationFrame(()=>{result=kmeans(rows,k);const ps=profiles(rows,result.labels,k);renderChart(rows,result.labels);renderSegments(ps);$("#status").textContent="Model ready · "+k+" clusters · standardized age, gender, income and spending features";});
}
$("#kRange").addEventListener("input",e=>$("#kValue").textContent=e.target.value);
$("#runButton").addEventListener("click",run);
fetch("Mall_Customers.csv").then(r=>{if(!r.ok)throw new Error("Dataset could not be loaded");return r.text()}).then(text=>{rows=parseCSV(text);setMetrics();run()}).catch(err=>{$("#status").textContent=err.message});
