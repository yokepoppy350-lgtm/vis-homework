window.Demo1={render(data){
  const host=d3.select('#demo-tooltip'); host.selectAll('*').remove();
  const W=900,H=410,M={t:24,r:28,b:56,l:62},iw=W-M.l-M.r,ih=H-M.t-M.b;
  const svg=host.append('svg').attr('viewBox',`0 0 ${W} ${H}`),g=svg.append('g').attr('transform',`translate(${M.l},${M.t})`);
  const x=d3.scaleLinear().domain(d3.extent(data,d=>d.study_hours)).nice().range([0,iw]);
  const y=d3.scaleLinear().domain([50,100]).range([ih,0]);
  const color=d3.scaleOrdinal(['人工智能','计算机科学','数据科学','软件工程'],['#4f6ef7','#15a58d','#ef8b45','#8a63d2']);
  g.append('g').attr('class','grid').call(d3.axisLeft(y).ticks(5).tickSize(-iw).tickFormat(''));
  g.append('g').attr('class','axis').attr('transform',`translate(0,${ih})`).call(d3.axisBottom(x).ticks(8));
  g.append('g').attr('class','axis').call(d3.axisLeft(y).ticks(5));
  g.append('text').attr('class','axis-label').attr('x',iw/2).attr('y',ih+43).attr('text-anchor','middle').text('每周学习时间（小时）');
  g.append('text').attr('class','axis-label').attr('transform','rotate(-90)').attr('x',-ih/2).attr('y',-45).attr('text-anchor','middle').text('课程成绩');
  const p=g.append('g').selectAll('circle').data(data).join('circle').attr('cx',d=>x(d.study_hours)).attr('cy',d=>y(d.score)).attr('r',4.5).attr('fill',d=>color(d.major)).attr('fill-opacity',.72).attr('stroke','white').attr('stroke-width',1.2).style('cursor','crosshair');
  p.on('pointerenter',function(event,d){d3.select(this).raise().transition().duration(120).attr('r',7).attr('fill-opacity',1);VIS.showTip(event,`<b>${d.id}</b> · ${d.major}<br>年级：${d.grade}<br>学习：${d.study_hours} h / 周<br>睡眠：${d.sleep_hours} h / 天<br>成绩：${d.score}`)}).on('pointermove',e=>VIS.moveTip(e)).on('pointerleave',function(){d3.select(this).transition().duration(120).attr('r',4.5).attr('fill-opacity',.72);VIS.hideTip()});
}};
