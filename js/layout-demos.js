(function(){
  function byId(id){return document.getElementById(id)}

  function initStructure(){
    const demo=byId('structure-demo'),layout=byId('structure-layout'),wire=byId('structure-wireframe');
    if(!demo||!layout||!wire) return;
    const update=()=>{
      demo.classList.remove('sidebar-left','sidebar-right','no-sidebar');
      demo.classList.add(layout.value);
      demo.classList.toggle('wireframe',wire.checked);
    };
    layout.addEventListener('change',update); wire.addEventListener('change',update); update();
  }

  function initBox(){
    const content=byId('box-content'),padding=byId('box-padding'),border=byId('box-border'),margin=byId('box-margin');
    const contentLayer=byId('box-content-layer'),paddingLayer=byId('box-padding-layer'),borderLayer=byId('box-border-layer'),marginShell=byId('box-margin-shell');
    if(!content||!contentLayer) return;
    const update=()=>{
      const c=+content.value,p=+padding.value,b=+border.value,m=+margin.value;
      contentLayer.style.width=`${c}px`;
      paddingLayer.style.padding=`${p}px`;
      borderLayer.style.borderWidth=`${b}px`;
      marginShell.style.padding=`${m}px`;
      byId('box-content-value').textContent=`${c}px`;
      byId('box-padding-value').textContent=`${p}px`;
      byId('box-border-value').textContent=`${b}px`;
      byId('box-margin-value').textContent=`${m}px`;
      const total=c+2*p+2*b+2*m;
      byId('box-total').textContent=`总宽度 ${total}px`;
      byId('box-formula').textContent=`${c} + ${p}×2 + ${b}×2 + ${m}×2 = ${total}px`;
    };
    [content,padding,border,margin].forEach(el=>el.addEventListener('input',update)); update();
  }

  function initFlex(){
    const stage=byId('flex-stage'),direction=byId('flex-direction'),justify=byId('flex-justify'),align=byId('flex-align'),wrap=byId('flex-wrap'),gap=byId('flex-gap');
    if(!stage) return;
    const update=()=>{
      stage.style.flexDirection=direction.value;
      stage.style.justifyContent=justify.value;
      stage.style.alignItems=align.value;
      stage.style.flexWrap=wrap.value;
      stage.style.gap=`${gap.value}px`;
      byId('flex-gap-value').textContent=`${gap.value}px`;
      byId('flex-css-output').textContent=`display:flex; flex-direction:${direction.value}; justify-content:${justify.value}; align-items:${align.value}; flex-wrap:${wrap.value}; gap:${gap.value}px;`;
    };
    [direction,justify,align,wrap].forEach(el=>el.addEventListener('change',update)); gap.addEventListener('input',update); update();
  }

  function initGrid(){
    const stage=byId('grid-stage'),preset=byId('grid-preset'),gap=byId('grid-gap');
    if(!stage) return;
    const code={
      equal:'grid-template-columns: repeat(3, 1fr);',
      sidebar:'grid-template-columns: minmax(120px, .7fr) 1fr 1fr;',
      dashboard:'grid-template-columns: repeat(4, 1fr);'
    };
    const update=()=>{
      stage.className=`grid-stage preset-${preset.value}`;
      stage.style.gap=`${gap.value}px`;
      byId('grid-gap-value').textContent=`${gap.value}px`;
      byId('grid-css-output').textContent=`${code[preset.value]} gap: ${gap.value}px;`;
    };
    preset.addEventListener('change',update); gap.addEventListener('input',update); update();
  }

  function initResponsive(){
    const input=byId('responsive-width'),frame=byId('responsive-frame'),badge=byId('responsive-mode');
    if(!input||!frame) return;
    const update=()=>{
      const w=+input.value;
      frame.style.width=`${w}px`;
      frame.classList.remove('mode-mobile','mode-tablet','mode-desktop');
      const mode=w<520?'mobile':w<760?'tablet':'desktop';
      frame.classList.add(`mode-${mode}`);
      badge.textContent=`${mode.toUpperCase()} · ${w}px`;
    };
    input.addEventListener('input',update); update();
  }

  function initDashboard(){
    const proto=byId('dashboard-prototype'),toggle=byId('dashboard-grid-toggle');
    if(!proto||!toggle) return;
    const buttons=[...document.querySelectorAll('[data-dashboard-size]')];
    buttons.forEach(btn=>btn.addEventListener('click',()=>{
      buttons.forEach(b=>b.classList.toggle('active',b===btn));
      proto.classList.remove('desktop','tablet','mobile');
      proto.classList.add(btn.dataset.dashboardSize);
    }));
    toggle.addEventListener('change',()=>proto.classList.toggle('show-grid',toggle.checked));
  }

  window.LayoutDemos={init(){initStructure();initBox();initFlex();initGrid();initResponsive();initDashboard();}};
})();
