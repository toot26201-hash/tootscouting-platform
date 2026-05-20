import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default function TacticalPitch({ player, mode, filters }) {
  const svgRef = useRef();

  useEffect(() => {
    // أبعاد الملعب المعتمدة عالمياً في الـ Data المرفوعة (120 × 80)
    const width = 600;
    const height = 400;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove(); // تنظيف الملعب قبل إعادة الرسم عند تغيير الفلاتر

    // 1. رسم أرضية الملعب السوداء تماماً (Pure Black Pitch)
    svg.append('rect')
      .attr('width', width)
      .attr('height', height)
      .attr('fill', '#000000')
      .attr('rx', 12);

    // دالة مساعدة لتحويل الإحداثيات من مقاس الـ Data (120x80) لمقاس الـ SVG (600x400)
    const xScale = d3.scaleLinear().domain([0, 120]).range([0, width]);
    const yScale = d3.scaleLinear().domain([0, 80]).range([height, 0]); // مقلوبة لتناسب خطوط الملعب

    // 2. رسم خطوط الملعب باللون الأبيض الصافي والشفافية التكتيكية
    const drawLine = (x1, y1, x2, y2) => {
      svg.append('line')
        .attr('x1', xScale(x1)).attr('y1', yScale(y1))
        .attr('x2', xScale(x2)).attr('y2', yScale(y2))
        .attr('stroke', 'rgba(255, 255, 255, 0.6)')
        .attr('stroke-width', 1.5);
    };

    // خطوط الأوت والمنتصف ودائرة السنتر
    drawLine(0, 0, 120, 0); drawLine(0, 80, 120, 80);
    drawLine(0, 0, 0, 80); drawLine(120, 0, 120, 80);
    drawLine(60, 0, 60, 80);

    svg.append('circle')
      .attr('cx', xScale(60)).attr('cy', yScale(40)).attr('r', xScale(9.15) - xScale(0))
      .attr('fill', 'none').attr('stroke', 'rgba(255, 255, 255, 0.6)').attr('stroke-width', 1.5);

    // منطقة الجزاء اليمين والشمال (Penalty Areas)
    // الشمال
    drawLine(0, 18, 16.5, 18); drawLine(0, 62, 16.5, 62); drawLine(16.5, 18, 16.5, 62);
    // اليمين
    drawLine(120, 18, 103.5, 18); drawLine(120, 62, 103.5, 62); drawLine(103.5, 18, 103.5, 62);


    // 3. طباعة اسم اللاعب كـ Watermark تكتيكية فخمة جوة العشب الأسود
    svg.append('text')
      .attr('x', width / 2)
      .attr('y', height / 2 + 10)
      .attr('text-anchor', 'middle')
      .attr('fill', '#ffffff')
      .attr('opacity', 0.06)
      .attr('font-size', '4rem')
      .attr('font-weight', '900')
      .text(player.split(' ')[1] || player);

    // 4. رسم الأحداث (الداتا والأسهم) بناءً على الـ Mode الفعال
    if (mode === 'actions') {
      // سهم تمريرة مفتاحية كمثال توضيحي "ملعلع" (Key Pass Glow Effect)
      if (filters.keyPasses) {
        // رسم السهم الذهبي المضيء
        svg.append('line')
          .attr('x1', xScale(40)).attr('y1', yScale(30))
          .attr('x2', xScale(85)).attr('y2', yScale(65))
          .attr('stroke', '#fbbf24')
          .attr('stroke-width', 3)
          .attr('filter', 'drop-shadow(0px 0px 8px rgba(251, 191, 36, 0.8))'); // تأثير التوهج النيون

        // رأس السهم (Arrow head)
        svg.append('circle')
          .attr('cx', xScale(85)).attr('cy', yScale(65)).attr('r', 4).attr('fill', '#fbbf24');
      }

      // رسم تسجيل هدف (Goal Star)
      if (filters.shots) {
        svg.append('path')
          .attr('d', d3.symbol().type(d3.symbolStar).size(250))
          .attr('transform', `translate(${xScale(112)},${yScale(42)})`)
          .attr('fill', '#fbbf24')
          .attr('stroke', '#ffffff')
          .attr('stroke-width', 1);
      }
    } else if (mode === 'heatmap') {
      // محاكاة الـ Heatmap التكتيكية باستخدام دوائر متدرجة التوهج (Blurry Gradients)
      const gradient = svg.append('defs')
        .append('radialGradient')
        .attr('id', 'heat-glow');
      
      gradient.append('stop').attr('offset', '0%').attr('stop-color', '#ef4444').attr('stop-opacity', 0.7);
      gradient.append('stop').attr('offset', '50%').attr('stop-color', '#fbbf24').attr('stop-opacity', 0.4);
      gradient.append('stop').attr('offset', '100%').attr('stop-color', '#10b981').attr('stop-opacity', 0);

      svg.append('circle')
        .attr('cx', xScale(35)).attr('cy', yScale(55))
        .attr('r', 70)
        .attr('fill', 'url(#heat-glow)');
    }

  }, [player, mode, filters]);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col items-center shadow-2xl relative">
      <div className="absolute top-4 left-6 text-xs font-bold uppercase tracking-widest text-slate-400">
        Tactical Pitch Matrix View
      </div>
      <svg ref={svgRef} width="600" height="400" className="mt-6 max-w-full drop-shadow-xl" />
    </div>
  );
}