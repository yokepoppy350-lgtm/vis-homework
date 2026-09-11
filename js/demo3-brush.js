window.Demo3={render(data){
  const host=d3.select('#demo-brush'),W=900,H=410,M={t:24,r:30,b:56,l:62},iw=W-M.l-M.r,ih=H-M.t-M.b;
  const svg=host.append('svg').attr('viewBox',`0 0 ${W} ${H}`),g=svg.append('g').attr('transform',`translate(${M.l},${M.t})`);
  const x=d3.scaleLinear().domain(d3.extent(data,d=>d.study_hours)).nice().range([0,iw]),y=d3.scaleLinear().domain([5,9]).range([ih,0]);
  g.append('g').attr('class','grid').call(d3.axisLeft(y).ticks(5).tickSize(-iw).tickFormat(''));
  g.append('g').attr('class','axis').attr('transform',`translate(0,${ih})`).call(d3.axisBottom(x));g.append('g').attr('class','axis').call(d3.axisLeft(y));
  g.append('text').attr('class','axis-label').attr('x',iw/2).attr('y',ih+43).attr('text-anchor','middle').text('每周学习时间（小时）');
  g.append('text').attr('class','axis-label').attr('transform','rotate(-90)').attr('x',-ih/2).attr('y',-45).attr('text-anchor','middle').text('日均睡眠（小时）');
  const dots=g.append('g').selectAll('circle').data(data).join('circle').attr('cx',d=>x(d.study_hours)).attr('cy',d=>y(d.sleep_hours)).attr('r',4.2).attr('fill','#4f6ef7').attr('fill-opacity',.62);
  const summary=d3.select('#brush-summary');
  function brushed({selection}){
    if(!selection){dots.attr('fill-opacity',.62).attr('r',4.2);summary.text('等待框选');return;}
    const [[x0,y0],[x1,y1]]=selection;let selected=[];
    dots.attr('fill-opacity',d=>{const ok=x0<=x(d.study_hours)&&x(d.study_hours)<=x1&&y0<=y(d.sleep_hours)&&y(d.sleep_hours)<=y1;if(ok)selected.push(d);return ok?1:.12}).attr('r',d=>x0<=x(d.study_hours)&&x(d.study_hours)<=x1&&y0<=y(d.sleep_hours)&&y(d.sleep_hours)<=y1?5:3.5);
    const avg=selected.length?d3.mean(selected,d=>d.score):0;summary.text(`${selected.length} 人 · 平均成绩 ${avg?avg.toFixed(1):'—'}`);
  }
  const brush=d3.brush().extent([[0,0],[iw,ih]]).on('brush end',brushed);g.append('g').attr('class','brush').call(brush);
}};
