import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import bub from '@site/static/data/bubble_expenditure.json';

const colorMap = {
  Illumina: '#6FA8DC',
  'Oxford Nanopore': '#50E3C2',
  PacBio: '#D0021B',
  'MGI / BGI': '#F5A623',
  ThermoFisher: '#B8E986',
};

const legendVendors = [...new Set(bub.map(r => r.platform_vendor))];

export default function BubbleExpenditurePlot() {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <BrowserOnly fallback={<div>Loading chart…</div>}>
        {() => {
          const Plot = require('react-plotly.js').default;

          const xData = bub.map(r => r.total_Gb);
          const yData = bub.map(r => r.cost_per_gb_2024);
          const sizeData = bub.map(r => r.total_cost_million);

          const nova = bub.find(r => r.instrument_model === 'Illumina NovaSeq 6000');

          return (
            <Plot
              data={[
                {
                  type: 'scatter',
                  mode: 'markers+text',
                  x: xData,
                  y: yData,
                  text: bub.map(r => r.short_name),
                  textposition: 'middle right',
                  cliponaxis: false,
                  textfont: { size: 10 },
                  marker: {
                    size: sizeData,
                    sizemode: 'area',
                    sizeref: 2.0 * Math.max(...sizeData) / 60 ** 2,
                    color: bub.map(r => colorMap[r.platform_vendor] || '#9B9B9B'),
                    opacity: 0.85,
                  },
                  hovertemplate:
                    '<b>%{text}</b><br>Total Gb: %{x:.1f}<br>Cost/Gb: €%{y:.2f}<br>Total spend: €%{marker.size:.1f} M<extra></extra>',
                  showlegend: false,
                },
                ...legendVendors.map(vendor => ({
                  x: [null],
                  y: [null],
                  type: 'scatter',
                  mode: 'markers',
                  name: vendor,
                  marker: {
                    size: 10,
                    color: colorMap[vendor] || '#9B9B9B',
                  },
                  showlegend: true,
                  hoverinfo: 'skip',
                })),
              ]}
              layout={{
                title: 'Cost per Gb vs Total Output (bubble size = spend)',
                autosize: true,
                height: 650,
                margin: { t: 80, l: 70, r: 120, b: 70 }, // increased right margin
                xaxis: {
                  type: 'log',
                  title: { text: 'Total Bases Sequenced (Gb)' },
                  tickvals: [1e5, 1e6, 1e7, 1e8],
                  ticktext: ['100 K', '1 M', '10 M', '100 M'],
                  range: [5, Math.log10(Math.max(...xData) * 1.3)],
                },
                yaxis: {
                  type: 'log',
                  title: { text: 'Cost (€/ Gb) — log scale' },
                  tickvals: [2, 5, 10, 20, 50, 100, 200],
                  ticktext: ['2', '5', '10', '20', '50', '100', '200'],
                  range: [
                    Math.log10(Math.min(...yData) * 0.8),
                    Math.log10(200),
                  ],
                },
                legend: {
                  orientation: 'v',
                  x: 0.88,          // moved left into plot
                  y: 0.85,          // moved lower
                  xanchor: 'left',
                  yanchor: 'top',
                  bgcolor: 'rgba(255,255,255,0.85)',
                  borderwidth: 0,
                  itemwidth: 90,
                  font: { size: 10 },  // reduced font size
                },
                ...(nova && {
                  annotations: [
                    {
                      x: nova.total_Gb,
                      y: nova.cost_per_gb_2024,
                      text: 'NovaSeq 6000',
                      showarrow: false,
                      xshift: 40,
                      yshift: 10,
                      font: {
                        size: 10,
                        color: colorMap[nova.platform_vendor],
                      },
                    },
                  ],
                }),
              }}
              config={{ responsive: true }}
              style={{ width: '100%' }}
            />
          );
        }}
      </BrowserOnly>
    </div>
  );
}
