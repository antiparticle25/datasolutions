import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import br from '@site/static/data/bases_reads_by_platform.json';

/* Same colours you used in Python */
const colorMap = {
  Illumina: '#6FA8DC',
  'Oxford Nanopore': '#50E3C2',
  PacBio: '#D0021B',
  'MGI / BGI': '#F5A623',
  ThermoFisher: '#B8E986',
};

export default function BasesReadsByPlatform() {
  return (
    /* ↓ narrower wrapper keeps proportions but reduces size */
    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
      <BrowserOnly fallback={<div>Loading chart…</div>}>
        {() => {
          const Plot = require('react-plotly.js').default;

          /* one Gb bar + one Reads bar per vendor, on independent sub-plots */
          const traces = [];

          br.platforms.forEach((plat, i) => {
            traces.push({
              type: 'bar',
              x: [plat],
              y: [br.gb[i]],                                // million Gb
              marker: { color: colorMap[plat] || '#9B9B9B' },
              text: [`${br.gb[i].toFixed(1)} M Gb`],
              textposition: 'outside',
              showlegend: false,
              xaxis: 'x1',
              yaxis: 'y1',
            });

            traces.push({
              type: 'bar',
              x: [plat],
              y: [br.reads[i]],                             // million reads
              marker: {
                color: colorMap[plat] || '#9B9B9B',
                opacity: 0.65,
              },
              text: [`${br.reads[i].toFixed(1)} M reads`],
              textposition: 'outside',
              showlegend: false,
              xaxis: 'x2',
              yaxis: 'y2',
            });
          });

          return (
            <Plot
              data={traces}
              layout={{
                title: 'Total Output per Platform',
                autosize: true,
                height: 400,                                // ↓ shorter
                margin: { t: 80, l: 70, r: 60, b: 80 },
                grid: { rows: 1, columns: 2, pattern: 'independent' },
                /* left panel (Gb) */
                yaxis: {
                  title: 'Gb Sequenced',
                  tickformat: '.2s',
                },
                /* right panel (reads) */
                yaxis2: {
                  title: 'Reads (M)',
                  tickformat: '.2s',
                },
              }}
              config={{ responsive: true }}
              style={{ width: '100%' }}                      // fills wrapper
            />
          );
        }}
      </BrowserOnly>
    </div>
  );
}
