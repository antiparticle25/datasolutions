---
id: index
title: Overview
sidebar_position: 1
hide_title: true
---

## Integrating Kinase Bioactivity with Expression Profiles
---
<div style={{ textAlign: 'justify' }}>

This project involves integration of reference data and modeling using semantic web technologies. As a proof of concept, it combines **kinase-targeted bioactivity data (ChEMBL)** with **normal (GTEx)** and **tumor (TCGA)** gene expression profiles, harmonized via **UniProt ID mappings** and exposed through a **GraphDB triple store**.

</div>


## Pipeline Overview
---
<div style={{ textAlign: 'center' }}>
  <img 
    src={require('@site/static/files/kinase-integration.png').default} 
    alt="Integration Pipeline"
    style={{ 
      width: '130%', 
      maxWidth: '1300px',
      marginLeft: '-10%'  // Shift image left
    }} 
  />
</div>


<div style={{ textAlign: 'justify' }}>
 <br /><br />

Diagram illustrating the modular RDF-based data integration pipeline. Each dataset (ChEMBL, GTEx, TCGA, and UniProt) is processed independently and exported to Turtle (TTL) format, then loaded into GraphDB as named graphs. These datasets are harmonized through ontology-aligned identifiers (e.g., UniProt ↔ Ensembl ↔ UBERON) to enable semantic joins across:

<div style={{ textAlign: 'center', fontWeight: 'bold' }}>
  Compound → Kinase → Gene → Expression
</div>
<br />

The pipeline supports cross-dataset querying, allowing questions such as: *"Which compounds target kinases that are overexpressed in kidney tumors but not in healthy tissue?"*

The **Human Protein Atlas** is indicated as a future enhancement, to bring in protein-level validation of expression findings.

By combining multiple curated biomedical datasets into a unified semantic framework, this project explores methods that support scalable data reuse, integration, and interpretability in research settings.

</div>


## Use Cases
---
<div style={{ textAlign: 'justify' }}>

This integrated knowledge graph enables semantic exploration across compounds, kinase targets, gene identifiers, and expression profiles in normal and tumor tissues. Example use cases include:

- Prioritize kinase targets based on tumor-specific overexpression  
- Identify kinases with low expression in healthy tissues to reduce off-target toxicity  
- Rank compounds by target gene expression in selected cancer types  
- Filter targets by expression contrast across multiple tissues (e.g. GTEx vs. TCGA)    
- Explore compound-target coverage across tumor types for combination strategies

</div>
