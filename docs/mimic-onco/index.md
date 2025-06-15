---
id: index
title: Overview
sidebar_position: 1
hide_title: true
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Oncology-focused relational dataset derived from MIMIC
---

<div align="justify">

This project comprises a **curated, oncology-focused relational dataset** derived from the [MIMIC-IV v3.1 clinical database](https://mimic.physionet.org/), one of the largest publicly available medical datasets that encompass detailed patient-level information at the Beth Israel Deaconess Medical Center. It isolates and structures information relevant to **cancer patients** to support downstream analysis, visualization, or machine learning workflows, and serves as a foundation for bridging clinical data (MIMIC-IV) with molecular profiles (e.g., TCGA).

- Extracted key tables from MIMIC-IV (`patients`, `admissions`, `diagnoses_icd`, `icustays`, `prescriptions`, `labevents`) in a local **PostgreSQL** setup  
- Filtered all data to focus on oncology-relevant fields:
  - **Diagnoses** using cancer-related ICD-9 (140–239) and ICD-10 (C00–D49) codes
  - **Lab values** including blood counts, liver enzymes, and tumor markers
  - **Medications** relevant to chemotherapy, immunotherapy, or hormonal therapy  
- Defined a **derived oncology cohort** for efficient filtering based on ICD logic  
- Built supporting views for treatment timelines and labeled lab test values  
- Optimized for efficient querying via indexes and materialized views

</div>

## Metadata
---

<div align="justify">

- **Source**: [MIMIC-IV v3.1](https://doi.org/10.13026/kpb9-mt58)  
- **Institution**: Beth Israel Deaconess Medical Center (2008–2022)  
- **Modules Used**: `hosp`, `icu`  
- **Programming**: PostgreSQL, Python (ETL), SQL (views/indexes)  
- **Focus**: Oncology-relevant EHR subset  
- **Derived From**: Diagnoses, labs, prescriptions, ICU stays  
- **Primary Cohort Definition**: Patients with ICD-9/10 neoplasm codes  
- **Compliance**: PhysioNet DUA 1.5.0, HIPAA-deidentified, time-shifted  

</div>

## Core Schema Structure
---

<div align="justify">

The dataset is structured using 3 broad types of tables:

</div>

| Category              | Description                                                                 | Examples |
|----------------------|-----------------------------------------------------------------------------|----------|
| **Main Tables**       | Core entities: patient demographics, admissions, ICU stays, cohort flag     | `oncology_patients`, `oncology_admissions`, `oncology_icustays`, `oncology_cohort` |
| **Fact Tables**       | Event-level records: diagnoses, labs, prescriptions, EMAR (med admin records) | `oncology_diagnoses`, `oncology_labs`, `oncology_prescriptions`, `oncology_emar_detail` |
| **Reference Tables**  | Dictionaries or derived views for enrichment or summarization                | `oncology_icd_dict`, `oncology_labs_with_labels`, `oncology_emar_detail_with_times`, `oncology_treatment_windows` |

---

<div align="center">
  <img src={useBaseUrl('/files/oncology_mimic_schema_updated.png')} alt="Oncology-Focused MIMIC-IV Schema" />
</div>

## Use Cases
---

<div align="justify">

- Track cancer patients longitudinally (lab values, medications, ICU stays)  
- Model treatment response or outcomes  
- Build dashboards or visualizations for clinical metrics  
- Practice clinical data engineering and SQL workflows  
- Integrate with genomics registries (e.g. TCGA) for multimodal analysis  

</div>
