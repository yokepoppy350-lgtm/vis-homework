(function(){
  if(typeof d3==='undefined'){
    document.querySelectorAll('.viz').forEach(el=>el.innerHTML='<div class="empty-state">D3.js 加载失败，请检查网络后刷新页面。</div>');
    return;
  }

  const tooltip = d3.select('#global-tooltip');
  window.VIS = {
    tooltip,
    showTip(event, html){
      tooltip.html(html).classed('show', true);
      this.moveTip(event);
    },
    moveTip(event){
      const pad=14, node=tooltip.node();
      const w=node.offsetWidth||160, h=node.offsetHeight||80;
      let x=event.clientX+14, y=event.clientY+14;
      if(x+w+pad>window.innerWidth) x=event.clientX-w-14;
      if(y+h+pad>window.innerHeight) y=event.clientY-h-14;
      tooltip.style('left',`${x}px`).style('top',`${y}px`);
    },
    hideTip(){ tooltip.classed('show', false); },
    fmt1:d3.format('.1f')
  };

  document.querySelectorAll('.tabs').forEach(tabs=>{
    tabs.addEventListener('click',e=>{
      const btn=e.target.closest('.tab'); if(!btn) return;
      const section=tabs.closest('.lesson-section');
      section.querySelectorAll('.tab').forEach(b=>b.classList.toggle('active',b===btn));
      section.querySelectorAll('.tab-panel').forEach(p=>p.classList.toggle('active',p.dataset.panel===btn.dataset.tab));
    });
  });

  const links=[...document.querySelectorAll('.side-link')];
  const observer=new IntersectionObserver(entries=>{
    const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
    if(!visible) return;
    links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')===`#${visible.target.id}`));
  },{rootMargin:'-22% 0px -62% 0px',threshold:[0,.2,.5]});
  document.querySelectorAll('.lesson-section').forEach(s=>observer.observe(s));

  d3.csv('./data/students.csv', d=>({
    ...d,
    study_hours:+d.study_hours,sleep_hours:+d.sleep_hours,game_hours:+d.game_hours,
    exercise_hours:+d.exercise_hours,score:+d.score,stress:+d.stress
  })).then(data=>{
    window.Demo1?.render(data);
    window.Demo2?.render(data);
    window.Demo3?.render(data);
    window.Demo4?.render();
    window.Demo5?.render(data);
  }).catch(err=>{
    console.error(err);
    document.querySelectorAll('.viz').forEach(el=>el.innerHTML='<div class="empty-state">数据加载失败。若直接双击 index.html，请改用本地服务器或 GitHub Pages 打开。</div>');
  });
})();
