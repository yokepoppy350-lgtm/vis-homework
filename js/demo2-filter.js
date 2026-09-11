window.Demo2={render(data){
  const majors=['人工智能','计算机科学','数据科学','软件工程'];
  const labels={score:'平均成绩',study_hours:'学习时长',sleep_hours:'睡眠时长'};
  const units={score:'分',study_hours:'h/周',sleep_hours:'h/天'};
  const host=d3.select('#demo-filter'),W=900,H=400,M={t:24,r:24,b:64,l:64},iw=W-M.l-M.r,ih=H-M.t-M.b;
  const svg=host.append('svg').attr('viewBox',`0 0 ${W} ${H}`),g=svg.append('g').attr('transform',`translate(${M.l},${M.t})`);
  const x=d3.scaleBand().domain(majors).range([0,iw]).padding(.34),y=d3.scaleLinear().range([ih,0]);
  const color=d3.scaleOrdinal(majors,['#4f6ef7','#15a58d','#ef8b45','#8a63d2']);
  const grid=g.append('g').attr('class','grid'),yAxis=g.append('g').attr('class','axis'),xAxis=g.append('g').attr('class','axis').attr('transform',`translate(0,${ih})`).call(d3.axisBottom(x));
  const yLabel=g.append('text').attr('class','axis-label').attr('transform','rotate(-90)').attr('x',-ih/2).attr('y',-47).attr('text-anchor','middle');
  const bars=g.append('g'); const values=g.append('g');
  function update(){
    const grade=document.querySelector('#filter-grade').value, metric=document.querySelector('#filter-metric').value;
    const f=grade==='全部'?data:data.filter(d=>d.grade===grade);
    const summary=majors.map(major=>{const a=f.filter(d=>d.major===major);return{major,avg:d3.mean(a,d=>d[metric])||0}});
    const ext=d3.extent(summary,d=>d.avg); const pad=Math.max(1,(ext[1]-ext[0])*.8);
    y.domain(metric==='score'?[Math.max(0,ext[0]-pad),Math.min(100,ext[1]+pad)]:[0,ext[1]*1.18]).nice();
    grid.transition().duration(450).call(d3.axisLeft(y).ticks(5).tickSize(-iw).tickFormat(''));
    yAxis.transition().duration(450).call(d3.axisLeft(y).ticks(5));
    yLabel.text(`${labels[metric]}（${units[metric]}）`);
    bars.selectAll('rect').data(summary,d=>d.major).join(enter=>enter.append('rect').attr('x',d=>x(d.major)).attr('width',x.bandwidth()).attr('y',ih).attr('height',0).attr('rx',6).attr('fill',d=>color(d.major))).transition().duration(550).attr('x',d=>x(d.major)).attr('y',d=>y(d.avg)).attr('height',d=>ih-y(d.avg));
    values.selectAll('text').data(summary,d=>d.major).join('text').attr('text-anchor','middle').attr('font-size',12).attr('font-weight',800).attr('fill','#536078').attr('x',d=>x(d.major)+x.bandwidth()/2).transition().duration(550).attr('y',d=>y(d.avg)-9).text(d=>`${d.avg.toFixed(1)}`);
    d3.select('#filter-count').text(`${f.length} 条数据 · ${grade}`);
  }
  document.querySelector('#filter-grade').addEventListener('change',update);document.querySelector('#filter-metric').addEventListener('change',update);update();
}};
