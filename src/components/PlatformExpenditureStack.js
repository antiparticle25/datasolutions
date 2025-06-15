import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import exp from '@site/static/data/platform_expenditure.json';

const colorMap = {
  Illumina: '#6FA8DC',
  'Oxford Nanopore': '#50E3C2',
  PacBio: '#D0021B',
  'MGI / BGI': '#F5A623',
  ThermoFisher: '#B8E986',
};

export default function PlatformExpenditureStack() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <BrowserOnly fallback={<div>Loading chart…</div>}>
        {() => {
          const Plot = require('react-plotly.js').default;

          // Reorder legend using platform_order and set square markers
          const traces = exp.platform_order.map((plat, i) => ({
            type: 'bar',
            name: plat,
            x: exp.years,
            y: exp.platform_values[plat],
            marker: {
              color: colorMap[plat] || '#9B9B9B',
              line: { width: 0 },
              symbol: 'square',
            },
            hovertemplate:
              '%{x}<br>Platform: ' +
              plat +
              '<br>Expenditure: €%{y:.1f} M<extra></extra>',
            legendrank: i,
          }));

          // Overlay text for annual totals
          traces.push({
            type: 'scatter',
            mode: 'text',
            showlegend: false,
            x: exp.years,
            y: exp.totals.map((v) => v + 5),
            text: exp.totals.map((v) => `€${v.toFixed(1)} M`),
            textposition: 'top center',
          });

          return (
            <Plot
              data={traces}
              layout={{
                title: 'Annual Sequencing Expenditure by Platform',
                barmode: 'stack',
                autosize: true,
                height: 500,
                margin: { t: 60, l: 70, r: 30, b: 60 },
                yaxis: {
                  title: 'Total (€ Million)',
                  tickprefix: '€',
                  separatethousands: true,
                },
                legend: {
                  x: 1.02,
                  y: 1,
                  xanchor: 'left',
                  yanchor: 'top',
                  traceorder: 'normal',
                  itemsizing: 'constant',
                  entrywidthmode: 'fixed',
                  entrywidth: 90,
                  bgcolor: 'rgba(255,255,255,0.85)',
                  borderwidth: 0,
                  font: { size: 12 },
                },
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
