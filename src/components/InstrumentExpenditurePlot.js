import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import cost from '@site/static/data/instrument_cost.json';

export default function InstrumentExpenditurePlot() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <BrowserOnly fallback={<div>Loading chart…</div>}>
        {() => {
          const Plot = require('react-plotly.js').default;

          return (
            <Plot
              data={[
                {
                  type: 'bar',
                  orientation: 'h',
                  x: cost.values,
                  y: cost.labels,
                  hovertemplate:
                    'Total (€ Million)=%{x}<br>Instrument=%{y}<extra></extra>',
                  // hide single-trace legend entry entirely
                  showlegend: false,
                },
              ]}
              layout={{
                title: 'Instrument expenditure (all runs)',
                autosize: true,
                height: 600,
                margin: { t: 40, l: 200, r: 40, b: 100 }, // room for the caption
                yaxis: { autorange: 'reversed', title: 'Instrument Model' },
                xaxis: { title: 'Total (€ Million)', tickformat: '.1f' },
                annotations: [
                  {
                    text: 'Total € (Million)',   // ← caption text
                    showarrow: false,
                    xref: 'paper',
                    yref: 'paper',
                    x: 0.5,                     // centred horizontally
                    y: -0.18,                   // just below the plot
                    xanchor: 'center',
                    yanchor: 'top',
                    font: { size: 14 },
                  },
                ],
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
