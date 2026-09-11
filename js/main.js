(function(){
  const sections=[...document.querySelectorAll('.lesson-section')];
  const links=[...document.querySelectorAll('.side-link')];
  const roadmapSteps=[...document.querySelectorAll('.roadmap-step')];
  const prevBtn=document.querySelector('#lesson-prev');
  const nextBtn=document.querySelector('#lesson-next');
  const progressCurrent=document.querySelector('#progress-current');
  const progressBar=document.querySelector('#progress-bar');
  const readerPosition=document.querySelector('#reader-position');
  const titles={
    '61':'页面骨架与视觉层级',
    '62':'盒模型与间距系统',
    '63':'Flexbox：一维弹性布局',
    '64':'CSS Grid：二维网格布局',
    '65':'响应式布局',
    '66':'综合案例：Dashboard 布局'
  };
  const order=['61','62','63','64','65','66'];

  function switchSection(id,{updateHash=true,scroll=true}={}){
    if(!order.includes(id)) id='61';
    const index=order.indexOf(id);
    sections.forEach(s=>{
      const active=s.dataset.section===id;
      s.classList.toggle('active-section',active);
      s.hidden=!active;
    });
    links.forEach(a=>a.classList.toggle('active',a.dataset.section===id));
    roadmapSteps.forEach(a=>a.classList.toggle('active',a.dataset.goSection===id));
    if(progressCurrent) progressCurrent.textContent=String(index+1).padStart(2,'0');
    if(progressBar) progressBar.style.width=`${(index+1)/order.length*100}%`;
    if(readerPosition) readerPosition.textContent=`${String(index+1).padStart(2,'0')} / 06`;

    const prevId=order[index-1],nextId=order[index+1];
    if(prevBtn){
      prevBtn.disabled=!prevId;
      prevBtn.dataset.target=prevId||'';
      prevBtn.querySelector('strong').textContent=prevId?titles[prevId]:'已经是第一节';
    }
    if(nextBtn){
      nextBtn.disabled=!nextId;
      nextBtn.dataset.target=nextId||'';
      nextBtn.querySelector('strong').textContent=nextId?titles[nextId]:'本章已完成';
    }
    if(updateHash) history.replaceState(null,'',`#section-${id}`);
    if(scroll){
      const reader=document.querySelector('.lesson-reader');
      const y=reader.getBoundingClientRect().top+window.scrollY-78;
      window.scrollTo({top:Math.max(0,y),behavior:'smooth'});
    }
  }

  document.addEventListener('click',e=>{
    const side=e.target.closest('.side-link');
    if(side){e.preventDefault();switchSection(side.dataset.section);return;}
    const top=e.target.closest('[data-go-section]');
    if(top){e.preventDefault();switchSection(top.dataset.goSection);return;}
    const turn=e.target.closest('.page-turn');
    if(turn && !turn.disabled && turn.dataset.target){switchSection(turn.dataset.target);return;}
    const tab=e.target.closest('.tab');
    if(tab){
      const section=tab.closest('.lesson-section');
      section.querySelectorAll('.tab').forEach(b=>b.classList.toggle('active',b===tab));
      section.querySelectorAll('.tab-panel').forEach(p=>p.classList.toggle('active',p.dataset.panel===tab.dataset.tab));
    }
  });

  const hashMatch=location.hash.match(/section-(6[1-6])/);
  switchSection(hashMatch?hashMatch[1]:'61',{updateHash:false,scroll:false});
  window.LayoutDemos?.init();
})();
