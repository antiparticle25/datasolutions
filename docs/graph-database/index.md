---
id: index
title: Overview
sidebar_position: 1
hide_title: true
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Mapping Researchers, Methodologies, Institutes in a Graph Database
---

<div style={{ textAlign: 'justify' }}>

I have developed a **graph database** that aggregates and organizes scientific studies focusing on prominent sequencing techniques (e.g., **RNA-seq, scRNA-seq, WGS, WES, ATAC-seq**). This flexible design can be transferred to **SQL-like** framework.

</div>

## Core Database Structure
---
<img src={useBaseUrl('/files/core_database.png')} width="1100" alt="Core Database Structure" />

## Visualization of Data Query Capabilities
---
<div style={{ textAlign: 'justify' }}>
Flexibility in querying detailed information about studies and researchers:
</div>

<div align="center">
  <img src={useBaseUrl('/files/general_to_study.gif')} alt="Studies from Journals" width="70%" />
  <img src={useBaseUrl('/files/country_to_study.gif')} alt="Researchers by Location" width="70%" />
</div>

## 📽️ Additional Media
---
<div style={{ textAlign: 'justify' }}>
Check **[here](https://drive.google.com/file/d/14Qx4DzydU5uWo9ttAsMsMSX_Tsiq3b6x/view?usp=drive_link)** and **[here](https://drive.google.com/file/d/1OgZKWGWOV03JPGYA-DNNbyjW1ZKa6eBg/view?usp=drive_link)** for videos.
</div>

## Querying Platforms, Techniques, Methodologies
---
<div style={{ textAlign: 'justify' }}>
Below a few plots showing occurence of terms in papers:
</div>

<details style={{ backgroundColor: 'transparent', border: 'none', boxShadow: 'none', padding: '0' }}>
  <summary><b>Sequencing Platforms Overview</b></summary>
  <div align="center">
    <img src={useBaseUrl('/files/fig_bgi.png')} alt="BGI Platform" width="20%" />
    <img src={useBaseUrl('/files/fig_illumina.png')} alt="Illumina Platform" width="20%" />
    <img src={useBaseUrl('/files/fig_nanopore.png')} alt="Nanopore Platform" width="20%" />
    <img src={useBaseUrl('/files/fig_pacbio.png')} alt="PacBio Platform" width="20%" />
    <img src={useBaseUrl('/files/fig_thermofisher.png')} alt="ThermoFisher Platform" width="20%" />
  </div>
</details>

<details style={{ backgroundColor: 'transparent', border: 'none', boxShadow: 'none', padding: '0' }}>
  <summary><b>Single-read vs Paired-end &amp; WGS vs WES (Example: Germany)</b></summary>
  <div align="center">
    <img src={useBaseUrl('/files/combined_bp.png')} alt="Combined BasePair Analysis" width="30%" />
    <img src={useBaseUrl('/files/wgs_vs_wes_germany.png')} alt="WGS vs WES in Germany" width="30%" />
  </div>
</details>

<details style={{ backgroundColor: 'transparent', border: 'none', boxShadow: 'none', padding: '0' }}>
  <summary><b>Single-cell and Spatial Transcriptomics Analysis</b></summary>
  <div align="center">
    <img src={useBaseUrl('/files/scRNA_seq_plot.png')} alt="scRNA-seq Analysis" width="40%" />
    <img src={useBaseUrl('/files/spatial_transcriptomics_plot.png')} alt="Spatial Transcriptomics Analysis" width="40%" />
  </div>
</details>
