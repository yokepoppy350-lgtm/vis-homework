window.Demo4={render(){
  const host=d3.select('#demo-zoom'),W=900,H=410,M={t:24,r:28,b:56,l:62},iw=W-M.l-M.r,ih=H-M.t-M.b;
  const start=new Date(2025,0,6); const series=d3.range(104).map(i=>({date:d3.timeWeek.offset(start,i),value:Math.round(64+10*Math.sin(i/6)+5*Math.sin(i/2.1)+(i%17===0?-12:0)+(i%23===0?9:0))}));
  const svg=host.append('svg').attr('viewBox',`0 0 ${W} ${H}`),defs=svg.append('defs');defs.append('clipPath').attr('id','zoom-clip').append('rect').attr('width',iw).attr('height',ih);
  const g=svg.append('g').attr('transform',`translate(${M.l},${M.t})`),x0=d3.scaleTime().domain(d3.extent(series,d=>d.date)).range([0,iw]),y=d3.scaleLinear().domain([35,90]).range([ih,0]);
  const xAxis=g.append('g').attr('class','axis').attr('transform',`translate(0,${ih})`).call(d3.axisBottom(x0).ticks(8));g.append('g').attr('class','axis').call(d3.axisLeft(y));g.append('g').attr('class','grid').call(d3.axisLeft(y).ticks(5).tickSize(-iw).tickFormat(''));
  const area=d3.area().x(d=>x0(d.date)).y0(ih).y1(d=>y(d.value)).curve(d3.curveMonotoneX),line=d3.line().x(d=>x0(d.date)).y(d=>y(d.value)).curve(d3.curveMonotoneX);
  const chart=g.append('g').attr('clip-path','url(#zoom-clip)');const areaPath=chart.append('path').datum(series).attr('fill','#e8ecff').attr('d',area),linePath=chart.append('path').datum(series).attr('fill','none').attr('stroke','#4f6ef7').attr('stroke-width',2.2).attr('d',line);
  g.append('text').attr('class','axis-label').attr('x',iw/2).attr('y',ih+43).attr('text-anchor','middle').text('周');g.append('text').attr('class','axis-label').attr('transform','rotate(-90)').attr('x',-ih/2).attr('y',-45).attr('text-anchor','middle').text('学习投入指数');
  const overlay=g.append('rect').attr('width',iw).attr('height',ih).attr('fill','transparent').style('cursor','grab');
  const zoom=d3.zoom().scaleExtent([1,12]).translateExtent([[0,0],[iw,ih]]).extent([[0,0],[iw,ih]]).filter(e=>e.type!=='wheel'||e.ctrlKey).on('zoom',event=>{const zx=event.transform.rescaleX(x0);xAxis.call(d3.axisBottom(zx).ticks(8));areaPath.attr('d',d3.area().x(d=>zx(d.date)).y0(ih).y1(d=>y(d.value)).curve(d3.curveMonotoneX)(series));linePath.attr('d',d3.line().x(d=>zx(d.date)).y(d=>y(d.value)).curve(d3.curveMonotoneX)(series));});
  overlay.call(zoom).on('dblclick.zoom',()=>overlay.transition().duration(500).call(zoom.transform,d3.zoomIdentity));
  document.querySelector('#zoom-reset').addEventListener('click',()=>overlay.transition().duration(500).call(zoom.transform,d3.zoomIdentity));
}};
