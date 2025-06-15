---
id: genomics-portfolio
title: Genomics Data Solutions for Research, Diagnostics & Industry
slug: /
sidebar_position: 1
---

# Genomics Data Solutions for Research, Diagnostics & Industry

## Background
The landscape of genomics and its applications is immensely vast, spanning **basic research, clinical diagnostics, and pharma/biotech innovation**. As such, keeping track of technological advancements and emerging research directions — and by extension, accurately mapping market trends with granularity — **has become increasingly complex**.

While several platforms (e.g., **PubGrade, BiotechGate**) offer a wealth of structured information, they are fundamentally **static** in nature. Given the state of recent computational advancements, there are several tools that can provide a layer of **'dynamic intelligence'**, facilitating real-time database querying and summarization, automation of several processes, forecasting, and ultimately, **actionable insights (e.g., strategic planning, investment guidance, competitive intelligence).**

This project aims to briefly showcase my interest in addressing such limitations across three core market segments — **Academic Research**, **Cancer Diagnostics across Europe**, and **Pharma/Biotech** — under three pillars:

- **Generation of high-quality databases**  
- **Direct, traditional extraction of insight via data querying, extraction, visualization**  
- **Development of LLM and agentic-based tools for easy querying and enhanced insights (under development)**

<details>
<summary><strong>Overview</strong></summary>

- [Sequencing Trends & Expenditure in Academic Research](#sequencing-trends--expenditure-in-academic-research)
- [Roche Sequencing by Extension (SBX) Technology](#roche-sequencing-by-extension-sbx-technology)
- [Sequencing in Oncology – Mapping Genomic Sequencing Expenditures Across Hospitals and Clinics in Europe](#sequencing-in-oncology--mapping-genomic-sequencing-expenditures-across-hospitals-and-clinics-in-europe)
- [Mapping Researchers, Methodologies, Institutes in a Graph Database (Neo4j)](#mapping-researchers-methodologies-institutes-in-a-graph-database-neo4j)
- [Integration with LLM Tools](#integration-with-llm-tools)

</details>

---

## **Sequencing Trends & Expenditure in Academic Research** 

### Repository Metadata Database – Overview

**Note:** 
**More important than absolute numbers, emphasis should be put on understanding trends and rates of change. Some fundamental approximates were made, given the lack of information (e.g. flowcell utilization, academic discount packages, ...)**  
<br><br>

Taking advantage of public datasets, I have collected **sequencing metadata** estimated to cover approximately 95% of all experiments present in major repositories from 2016 to 2025. This accounts for **~3 × 10¹⁴ reads**, **~30 million runs**, **~30 million experiments**.

**Cost estimations** were derived using custom formulas tailored to each sequencing platform and, where possible, **adjusted for sample preparation methods and price changes throughout the years**.

Below are some key plots highlighting important trends, expenditures, and potential areas of potential technological disruption:

### **Annual Sequencing Expenditure and Instrument Breakdown**

<p align="center">
  <img src="files/platform_expenditure.png" alt="Annual Sequencing Expenditure by Platform" width="80%" style="display:inline-block;">
  <img src="files/instrument_expenditure.png" alt="Instrument Expenditure" width="48%" style="display:inline-block;">
</p>

**Top:** Annual growth in sequencing expenditures, peaking in recent years. Illumina remains the leading platform, but there's a steady rise in MGI / BGI, PacBio, and Oxford Nanopore.

**Bottom:** Breakdown of total sequencing expenditure by instrument model (cumulative from 2016 until 2024), underscoring the market dominance of Illumina.

<details>
<summary><strong>2023–2024 % expenditure changes per platform and model</strong></summary>

![2023–2024 % expenditure changes per platform and model](files/instruments_percentage_year.png)

</details>

### Experiment Cost and Read Length Across Platforms

<p align="center">
  <img src="files/bubble_expenditure_bases.png" alt="Bubble plot: Cost per Gb vs Total Bases Sequenced" width="95%">
</p>

Bubble plot summarizing cost-efficiency across sequencing platforms. Each bubble represents an instrument model, positioned by its average cost per gigabase (y-axis, log scale) and total bases sequenced (x-axis). Bubble size reflects usage volume.  
High-throughput platforms (e.g., NovaSeq, HiSeq X) appear in the bottom-right quadrant, showing strong cost-efficiency. Older or low-throughput systems (e.g., MiSeq, Genome Analyzer II) show higher per-Gb costs, while long-read platforms (e.g., PacBio Sequel II) occupy distinct mid-throughput, higher-cost territory.

<p align="center">
  <img src="files/cost_vs_readlen_scatter_clean.png" alt="Experiment Cost vs Average Read Length" width="80%">
</p>

Scatterplot showing the relationship between average read length and experiment-level sequencing cost, across platforms.  
Short-read technologies (Illumina, MGI, Thermo Fisher) dominate the low-read-length region (~100–300 bp), covering a broad range of costs. Long-read technologies (PacBio, Oxford Nanopore) cluster at longer read lengths and higher cost variability, reflecting their niche in complex or structure-resolving sequencing.  
<br><br>

### At the Institutional Level – Max Planck Society as an Example

All the previous plots provide top-down perspectives, but we can then start making more directed questions, for instance at the institute level. Take the example of the Max Planck Society, composed of 84 institutes, of which some are present in my database:

<details>
  <summary>List of Max Planck Institutes</summary>

  - Max Planck Institute for Evolutionary Anthropology  
  - Max Planck Institute for Chemical Ecology  
  - Max Planck Institute of Immunobiology and Epigenetics  
  - Max Planck Institute for Plant Breeding Research  
  - Max Planck Institute for Marine Microbiology  
  - Max Planck Institute for Evolutionary Biology  
  - Max Planck Institute for Molecular Genetics  
  - Max Planck Institute for Biology Tuebingen  
  - Max Planck Institute for Biology of Ageing  
  - Max Planck Institute for Biogeochemistry  
  - Max Planck Institute for Ornithology  
  - Max Planck Institute for Molecular Biomedicine  
  - Max Planck Institute for Biophysical Chemistry  
  - Max Planck Unit for the Science of Pathogens  
  - Max Planck Institute for Terrestrial Microbiology  
  - Max Planck Institute for Chemistry  
  - Max Planck Institute for Heart and Lung Research  
  - Max Planck Institute for the Science of Human History  
  - Max Planck Institute for Infection Biology  
  - Max Planck Institute of Molecular Plant Physiology  
  - Max Planck Institute of Molecular Cell Biology and Genetics  

</details>

What sequencing patterns can be observed across institutes? Which platforms are they predominantly using, and what library preparation strategies are being employed? Given the distinct research focuses of each institute, some differences in these choices are to be expected.

<p align="center">
  <img src="files/institutes_read_length (2).png" alt="Institutes Read Length" width="70%">
</p>

Different sequencing platforms compared in terms of total output and read characteristics. Each bubble corresponds to a platform-institute combination, with its size indicating the number of experiments conducted. A few institutes, among these **MPI Tübingen**, clearly dominate both in terms of data volume and experiment count.

<details>
  <summary><b>Library Strategies</b></summary>
  <p align="center">
    <img src="files/sunburst_institutes_strategies.png" alt="Library Strategies" width="70%">
  </p>
</details>

<details>
  <summary><b>Platform Usage per Institute</b></summary>
  <p align="center">
    <img src="files/sunburst_institutes_platforms.png" alt="Platform Usage per Institute" width="70%">
  </p>
</details>

<details>
  <summary><b>Main Institutes per Platform</b></summary>
  <p align="center">
    <img src="files/sunburst_platforms_institutes.png" alt="Main Institutes per Platform" width="70%">
  </p>
</details>

---

## Roche Sequencing by Extension (SBX) Technology

**Roche** has recently launched a new sequencing platform with the potential not only to position itself as a competitor in the genomics space, but to define a new category on its own. It is a nanopore-based method that leverages a novel sequencing chemistry (Xpandomer-based SBX) and a high-throughput CMOS sensor module, **enabling single-molecule electrical detection with short-read-like accuracy**.

To contextualize its cost-efficiency, I compared Roche’s estimated €2.00/Gb reagent cost (2024, run-level only) against all major current sequencing platforms using curated ENA metadata and updated vendor pricing assumptions.

Cost per Gigabase Across Sequencing Platforms (2024):

<p align="center">
  <img src="files/cost_per_gb_2024.png" alt="Cost per Gb by Instrument Model" width="80%">
</p>

Time to Generate ~200 Gbp: SBX vs Existing Instruments:

<p align="center">
  <img src="files/time_gb.png" alt="Time Comparison for 200 Gbp" width="85%">
</p>

Projected instrument-level throughput for a 200 Gbp target. SBX would outperform even NovaSeq X in raw speed, assuming Roche’s 200 Gbp/hour claim is met. This makes SBX one of the fastest short-read-compatible platforms currently envisioned — with implications for turnaround time and batch processing.

### Roche SBX Revenue Scenarios by Market Share and Reagent Overhead

I have also looked at potential revenue that Roche could generate from its SBX platform considering if it captures between 5 % and 25 % of the 2024 sequencing market currently served by major competitors. Each subplot represents a competing platform class:

- **Illumina NovaSeq (6000, X, X Plus)**
- **BGI/MGI (BGISEQ, DNBSEQ-G400, DNBSEQ-G50, DNBSEQ-T7, MGISEQ-2000RS)**
- **PacBio (RS II, Sequel, Sequel II, Revio)**
- **Oxford Nanopore (MinION, GridION, PromethION)**

<p align="center">
  <img src="files/sbx_market_opportunity_2024.png" alt="SBX Market Displacement Revenue Scenarios" width="70%">
</p>

---

## Sequencing in Oncology – Mapping Genomic Sequencing Expenditures Across Hospitals and Clinics in Europe

Cancer incidence is rising globally, with the number of new cases projected to nearly double by 2050 compared to 2025 ([WHO International Agency for Research on Cancer](https://www.iarc.who.int/)). In this context, I have explored the financial landscape of genomic sequencing in oncology, with a particular emphasis on Europe. 

While sequencing may not always be pivotal for initial diagnosis, it plays a critical role in guiding therapeutic decision-making and treatment stratification. I have a strong personal interest in colorectal and lung cancer subtypes, due to their incidence on the maternal side of my family, which [originates from Goa](https://en.wikipedia.org/wiki/Portuguese_India).

<br><br>

<p align="center">
  <img src="files/cancer_new_cases.png" alt="Projected Global Cancer Cases" width="100%">
  <img src="files/heatmap_common_world.png" alt="Cancer Subtype Distribution" width="100%">
</p>

<br><br>

In order to have a **high-level and initial estimation of genomic sequencing expenditure**, based on current (2022) and future (2050) cancer incidence, I have decided to explore a very basic scenario. Europe and North America are aggregated here as regions where **some adoption of sequencing is already underway**.

This approach assumes one sample per case, and explores a range of **uptake levels**, defined here as the proportion of newly diagnosed cancer cases that would undergo genomic sequencing. Different cost scenarios are tested, ranging from €200 to €1000 per sample. The analysis reflects the use of **targeted panel sequencing**, which is currently the most common approach in oncology for identifying actionable mutations.

<br><br>

![Projected sequencing costs heatmap](files/europa_america_oncology_initial.png)

<br><br>

Within the European Union, [**cancer continues to pose a significant public health burden**](https://www.oecd.org/en/publications/eu-country-cancer-profiles-synthesis-report-2025_20ef03e1-en.html): **every minute, approximately five people are diagnosed with the disease**, while **more than two lose their lives to it**. In 2022, over 2.7 million new cancer cases were estimated across member countries; by 2021, it had become the **second leading cause of death** after cardiovascular disease with **1.15 million deaths** recorded that year.

My aim is to better understand how much is being spent on genomic sequencing at both the **national and regional levels** across Europe, starting with Germany as a case study. For this, I have gathered [cancer incidence data from 2020](https://www.dkr.de/), covering major cancer types including lung, colorectal, ovarian, breast, prostate, pancreatic, melanoma, leukemia, uterine, and non-Hodgkin lymphoma.

To get a sense of where these cases are most likely diagnosed or treated, I [compiled a list of hospitals in each region](https://www.german-hospital-directory.com).

Below is a snapshot showing the **top five hospitals by number of cancer-related cases** (including both diagnoses and ongoing treatments) in three federal states: Berlin, Bavaria, and North Rhine-Westphalia (NRW):

<br><br>

<p align="center">
  <img src="files/samplecities_hospitals.png" alt="Top 5 Hospitals by Cancer Case Volume in Berlin, Bavaria, NRW" width="150%">
</p>

<br><br>

It is noticeable that in Berlin, which is a city-state, urban and densely populated, the majority of cases are concentrated in a few large hospitals, most prominently Charité (Europe’s largest university hospital). Meanwhile, in Bavaria and North Rhine-Westphalia, cancer-related care is spread out over numerous hospitals, reflecting the fact that these regions contain many spread-out prominent cities.

<details>
  <summary>Full distribution of hospital data across all of Germany’s federal states</summary>
  <br>
  <img src="files/states_hospitals_percentage.png" alt="Full State Hospital Distribution">
</details>

---

## Mapping Researchers, Methodologies, Institutes in a Graph Database (Neo4j)

I have also developed a **graph database** that aggregates and organizes scientific studies focusing on prominent sequencing techniques (e.g., **RNA-seq, scRNA-seq, WGS, WES, ATAC-seq**). This flexible design can be transferred to **SQL-like** frameworks.

### Core Database Structure
<img src="files/core_database.png" width="1100" alt="Core Database Structure">

### Visualization of Data Query Capabilities
Flexibility in querying detailed information about studies and researchers:

<div>
  <img src="files/general_to_study.gif" alt="Studies from Journals" style="width: 70%; float: left;">
  <img src="files/country_to_study.gif" alt="Researchers by Location" style="width: 70%; float: right;">
</div>

### 📽️ Additional Media
Check **[here](https://drive.google.com/file/d/14Qx4DzydU5uWo9ttAsMsMSX_Tsiq3b6x/view?usp=drive_link)** and **[here](https://drive.google.com/file/d/1OgZKWGWOV03JPGYA-DNNbyjW1ZKa6eBg/view?usp=drive_link)** for videos.

---

### Graph Database – Further Observations
- **Identification** of researchers working with specific sequencing methods, grouped by subject.  
- **Pinpointing** institutions/countries where these researchers are located.  
- **Finding** studies based on **MeSH terms** or keywords.  
- **Analyzing** trends across journals, subjects, and time frames.  

<details>
  <summary><b>Sequencing Platforms Overview</b></summary>
  <p align="center">
    <img src="files/fig_bgi.png" alt="BGI Platform" width="20%">
    <img src="files/fig_illumina.png" alt="Illumina Platform" width="20%">
    <img src="files/fig_nanopore.png" alt="Nanopore Platform" width="20%">
    <img src="files/fig_pacbio.png" alt="PacBio Platform" width="20%">
    <img src="files/fig_thermofisher.png" alt="ThermoFisher Platform" width="20%">
  </p>
</details>

<details>
  <summary><b>Single-read vs Paired-end &amp; WGS vs WES (Example: Germany)</b></summary>
  <p align="center">
    <img src="files/combined_bp.png" alt="Combined BasePair Analysis" width="30%">
    <img src="files/wgs_vs_wes_germany.png" alt="WGS vs WES in Germany" width="30%">
  </p>
</details>

<details>
  <summary><b>Single-cell and Spatial Transcriptomics Analysis</b></summary>
  <p align="center">
    <img src="files/scRNA_seq_plot.png" alt="scRNA-seq Analysis" width="40%">
    <img src="files/spatial_transcriptomics_plot.png" alt="Spatial Transcriptomics Analysis" width="40%">
  </p>
</details>

---

## Integration with LLM Tools
By leveraging appropriate **embedding models**, each study can be projected into a **high-dimensional space** to enable content-based similarity assessments. This capability helps identify **collaborators, competitors,** and research overlaps.

### Visualization
Dimensionality reduction (UMAP) on a **subset of scRNA-seq studies in Europe** reveals clustering (e.g., COVID-19–focused research vs other topics):

<img src="files/scRNA_covid.png" width="600" alt="UMAP Visualization of scRNA-seq Studies">

### Automated Messaging
Using **prompt engineering**, we can generate automated, topic-specific messages. It is possible to include a substantial amount of scientific context, but here is a simpler, **zero-shot** example:

> **Subject: Enhancing Your Research on Intestinal Treg Functions**  
>  
> Dear Dr. Researcher,  
>  
> I recently had the opportunity to delve into your compelling research on immune microniches shaping intestinal Treg function. Your innovative approach using in vivo live imaging alongside **photo-activation-guided single-cell RNA sequencing and spatial transcriptomics** offers a remarkable view into the interaction dynamics within the intestinal lamina propria.  
>  
> At Genomics, we specialize in **advanced sequencing capabilities and comprehensive bioinformatics solutions**. We would be thrilled to discuss how our services can support and expand the capabilities of your research.  
>  
> Best regards,  
> **John Polymerase**  
> *Genomics*  

---

## Data-Driven Insights for Research and Innovation
By linking **structured data** and **similarity analysis** with **LLMs**, this system enables:

- **Expenditure Insights and Forecasting** – Identify trends across fields, regions, and institutions.  
- **Network & Collaboration Mapping** – Analyze researcher networks to support collaboration.  
- **Global Research & Innovation Trends** – Track emerging technologies and funding shifts.  
- **Resource Optimization & Strategic Planning** – Guide decisions on funding, infrastructure, and talent.  

---

## Future Enhancements
- **Natural Language Interface** – Query the database using everyday language.  
- **Equipment and Reagent Cataloging** – A **fine-tuned NER** to list instruments/kits for deeper usage insights.  
- **Chatbot Development** – AI to advise on **sequencing services** and propose best-fit techniques.  
- **Expansion** – SynBio and Sanger Sequencing integration.  

---

## Ongoing Work
**AI Agents in Biotech/Pharma Sequencing Market Trends**
