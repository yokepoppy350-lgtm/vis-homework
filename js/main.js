(function(){
  const sections=[...document.querySelectorAll('.lesson-section')];
  const links=[...document.querySelectorAll('.side-link')];
  const prevBtn=document.querySelector('#lesson-prev');
  const nextBtn=document.querySelector('#lesson-next');
  const progressCurrent=document.querySelector('#progress-current');
  const progressBar=document.querySelector('#progress-bar');
  const readerPosition=document.querySelector('#reader-position');
  const titles={
    '61':'Tooltip 信息提示',
    '62':'筛选与动态更新',
    '63':'Brush 区域选择',
    '64':'Zoom 缩放与平移',
    '65':'多视图联动 Dashboard'
  };
  const order=['61','62','63','64','65'];
  let current='61';

  function switchSection(id,{updateHash=true,scroll=true}={}){
    if(!order.includes(id)) id='61';
    current=id;
    const index=order.indexOf(id);
    sections.forEach(s=>s.classList.toggle('active-section',s.dataset.section===id));
    links.forEach(a=>a.classList.toggle('active',a.dataset.section===id));
    if(progressCurrent) progressCurrent.textContent=String(index+1).padStart(2,'0');
    if(progressBar) progressBar.style.width=`${(index+1)/order.length*100}%`;
    if(readerPosition) readerPosition.textContent=`${String(index+1).padStart(2,'0')} / 05`;

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

  const hashMatch=location.hash.match(/section-(6[1-5])/);
  switchSection(hashMatch?hashMatch[1]:'61',{updateHash:false,scroll:false});

  if(typeof d3==='undefined'){
    document.querySelectorAll('.viz').forEach(el=>el.innerHTML='<div class="empty-state">D3.js 加载失败，请检查网络后刷新页面。</div>');
    return;
  }

  const tooltip=d3.select('#global-tooltip');
  window.VIS={
    tooltip,
    showTip(event,html){tooltip.html(html).classed('show',true);this.moveTip(event);},
    moveTip(event){
      const pad=14,node=tooltip.node();
      const w=node.offsetWidth||160,h=node.offsetHeight||80;
      let x=event.clientX+14,y=event.clientY+14;
      if(x+w+pad>window.innerWidth) x=event.clientX-w-14;
      if(y+h+pad>window.innerHeight) y=event.clientY-h-14;
      tooltip.style('left',`${x}px`).style('top',`${y}px`);
    },
    hideTip(){tooltip.classed('show',false);},
    fmt1:d3.format('.1f')
  };

  d3.csv('./data/students.csv',d=>({
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
    document.querySelectorAll('.viz').forEach(el=>el.innerHTML='<div class="empty-state">数据加载失败。请通过 GitHub Pages 或本地服务器打开页面。</div>');
  });
})();
