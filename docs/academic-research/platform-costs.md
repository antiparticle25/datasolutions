---
title: Roche Sequencing by Extension (SBX)
sidebar_position: 3
hide_title: true
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Roche Sequencing by Extension (SBX) Technology
---

<div style={{textAlign:'justify'}}>
*Note: These comparisons are based on preliminary information and vendor estimates. Specifications for SBX are still emerging, and figures presented here may be revised as more validated performance and pricing data become available.*

**Roche** has recently launched a new sequencing platform with the potential not only to position itself as a competitor in the genomics space, but to define a new category on its own. It is a nanopore-based method that leverages a novel sequencing chemistry (Xpandomer-based SBX) and a high-throughput CMOS sensor module, **enabling single-molecule electrical detection with short-read-like accuracy**.

To contextualise its cost-efficiency, I compared Roche’s estimated **€2.00 per Gb** reagent cost (2024, run-level only) against all major current sequencing platforms using curated ENA metadata and updated vendor pricing assumptions.

</div>

Cost per Gigabase Across Sequencing Platforms (2024)  
<p align="center">
  <img src={useBaseUrl('/files/cost_per_gb_2024.png')} alt="Cost per Gb by Instrument Model" width="80%" />
</p>

Time to Generate ≈ 200 Gbp: SBX vs Existing Instruments  
<p align="center">
  <img src={useBaseUrl('/files/time_gb.png')} alt="Time Comparison for 200 Gbp" width="85%" />
</p>

<div style={{textAlign:'justify'}}>

Projected instrument-level throughput for a 200 Gbp target. SBX would outperform even NovaSeq X in raw speed, assuming Roche’s **200 Gbp / hour** claim is met. This positions SBX among the fastest short-read-compatible platforms currently envisioned, with implications for turnaround time and batch processing.

</div>

## Revenue Scenarios by Market Share and Reagent Overhead
---

<div style={{textAlign:'justify'}}>

I also modelled potential revenue that Roche could generate from SBX if it captures between **5 % and 25 %** of the 2024 sequencing market currently served by major competitors. Each subplot represents a competing platform class:

* **Illumina NovaSeq** (6000, X, X Plus)  
* **BGI / MGI** (BGISEQ, DNBSEQ-G400, DNBSEQ-G50, DNBSEQ-T7, MGISEQ-2000RS)  
* **PacBio** (RS II, Sequel, Sequel II, Revio)  
* **Oxford Nanopore** (MinION, GridION, PromethION)

</div>

<p align="center">
  <img src={useBaseUrl('/files/sbx_market_opportunity_2024.png')} alt="SBX Market Displacement Revenue Scenarios" width="70%" />
</p>
