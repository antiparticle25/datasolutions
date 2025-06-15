---
title: Case Study - Max Planck Society
sidebar_position: 2
hide_title: true
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Case Study - Max Planck Society
---

<div style={{ textAlign: 'justify' }}>

All the previous plots provide top-down perspectives, but we can then start making more directed questions, for instance at the institute level. Take the example of the Max Planck Society, composed of 84 institutes, of which some are present in my database:

</div>

<details style={{ backgroundColor: 'transparent', border: 'none', boxShadow: 'none', padding: '0' }}>
  <summary><b>List of Max Planck Institutes</b></summary>

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

<div style={{ textAlign: 'justify' }}>

What sequencing patterns can be observed across institutes? Which platforms are they predominantly using, and what library preparation strategies are being employed? Given the distinct research focuses of each institute, some differences in these choices are to be expected.

</div>

<p align="center">
  <img src={useBaseUrl('/files/institutes_read_length (2).png')} alt="Institutes Read Length" width="70%" />
</p>

<div style={{ textAlign: 'justify' }}>

Different sequencing platforms compared in terms of total output and read characteristics. Each bubble corresponds to a platform-institute combination, with its size indicating the number of experiments conducted. A few institutes, among these <strong>MPI Tübingen</strong>, clearly dominate both in terms of data volume and experiment count.

</div>

<br />

<details style={{ backgroundColor: 'transparent', border: 'none', boxShadow: 'none', padding: '0' }}>
  <summary><b>Library Strategies</b></summary>
  <p align="center">
    <img src={useBaseUrl('/files/sunburst_institutes_strategies.png')} alt="Library Strategies" width="70%" />
  </p>
</details>

<details style={{ backgroundColor: 'transparent', border: 'none', boxShadow: 'none', padding: '0' }}>
  <summary><b>Platform Usage per Institute</b></summary>
  <p align="center">
    <img src={useBaseUrl('/files/sunburst_institutes_platforms.png')} alt="Platform Usage per Institute" width="70%" />
  </p>
</details>

<details style={{ backgroundColor: 'transparent', border: 'none', boxShadow: 'none', padding: '0' }}>
  <summary><b>Main Institutes per Platform</b></summary>
  <p align="center">
    <img src={useBaseUrl('/files/sunburst_platforms_institutes.png')} alt="Main Institutes per Platform" width="70%" />
  </p>
</details>
