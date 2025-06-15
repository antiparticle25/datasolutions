---
id: index
title: Sequencing Expenditure & Trends
sidebar_position: 1
hide_title: true
---

import InstrumentExpenditurePlot   from '@site/src/components/InstrumentExpenditurePlot';
import PlatformExpenditureStack    from '@site/src/components/PlatformExpenditureStack';
import BasesReadsByPlatform        from '@site/src/components/BasesReadsByPlatform';
import BubbleExpenditurePlot       from '@site/src/components/BubbleExpenditurePlot';

import useBaseUrl from '@docusaurus/useBaseUrl';

## Repository Metadata Database
---

<div style={{ textAlign: 'justify' }}>

*Note: more important than absolute numbers, emphasis should be put on understanding trends and rates of change. Some fundamental approximates were made, given the lack of information (e.g. flow-cell utilization, academic discount packages, ...)*

Taking advantage of public datasets (with particular emphasis on ENA), I have collected **sequencing metadata** estimated to cover ~95 % of all experiments present in major repositories from 2016 – 2025.  
This accounts for **~3 × 10¹⁴ reads**, **~30 million runs**, **~30 million experiments**.

</div>

<!-- ──────────────────────────────────────────────────────────────── -->
<!--  Bases & Reads per Platform  (side-by-side bar component)       -->
<!-- ──────────────────────────────────────────────────────────────── -->
<BasesReadsByPlatform />
<div style={{ height: '2rem' }} />

For every accession level—sample, run, experiment, and study—the dataset captures the sequencing platform and model, total read/base counts, detailed library metadata (strategy, source, selection), and the originating center name.

## **Annual Sequencing Expenditure and Instrument Breakdown**
---

**Cost estimations** were derived using custom formulas tailored to each sequencing platform and model, combining vendor reagent lists and, wherever possible, **adjusted for run-throughput differences and historical price changes**.  
Below are the key trends and potential areas of technological disruption.

<!-- ──────────────────────────────────────────────────────────────── -->
<!--  Stacked annual expenditure by platform                         -->
<!-- ──────────────────────────────────────────────────────────────── -->
<PlatformExpenditureStack />

<!-- ──────────────────────────────────────────────────────────────── -->
<!--  Instrument-level bar chart (interactive)                       -->
<!-- ──────────────────────────────────────────────────────────────── -->
<InstrumentExpenditurePlot />
<div style={{ height: '2rem' }} />
<div style={{ textAlign: 'justify' }}>

**Top:** Annual growth in sequencing expenditures, peaking in recent years. Illumina remains the leading platform, but there is a steady rise in MGI / BGI, PacBio, and Oxford Nanopore.  

**Bottom:** Breakdown of total sequencing expenditure by instrument model (cumulative 2016 – 2024), underscoring Illumina’s market dominance.

</div>

<details>
<summary><strong>2023 – 2024 % expenditure changes per platform and model</strong></summary>

<img
  src={useBaseUrl('/files/instruments_percentage_year.png')}
  alt="2023–2024 % expenditure changes per platform and model"
  style={{ maxWidth: '100%', display: 'block', margin: '1rem auto' }}
/>

</details>

## Experiment Cost and Read Length Across Platforms
---

<!-- ──────────────────────────────────────────────────────────────── -->
<!--  Bubble cost-vs-bases scatter                                   -->
<!-- ──────────────────────────────────────────────────────────────── -->
<BubbleExpenditurePlot />

<div style={{ textAlign: 'justify' }}>
&nbsp;<br />
Bubble plot summarizing cost-efficiency across sequencing platforms. Each bubble represents an instrument model, positioned by its average cost per gigabase (y-axis, log scale) and total bases sequenced (x-axis). Bubble size reflects usage volume.  
High-throughput platforms (e.g., NovaSeq, HiSeq X) appear in the bottom-right quadrant, showing strong cost-efficiency. Older or low-throughput systems (e.g., MiSeq, Genome Analyzer II) show higher per-Gb costs, while long-read platforms (e.g., PacBio Sequel II, PromethION) occupy distinct mid-throughput, higher-cost territory.
&nbsp;<br />
</div>

<p align="center">
  <img
    src={useBaseUrl('/files/cost_vs_readlen_scatter_clean.png')}
    alt="Experiment Cost vs Average Read Length"
    width="80%"
  />
</p>

<div style={{ textAlign: 'justify' }}>

Scatterplot showing the relationship between average read length and experiment-level sequencing cost across platforms.  
Short-read technologies (Illumina, MGI, ThermoFisher) dominate the low-read-length region (~100 – 300 bp), covering a broad range of costs. Long-read technologies (PacBio, Oxford Nanopore) cluster at longer read lengths and higher cost variability, reflecting their niche in complex or structure-resolving sequencing.

</div>
