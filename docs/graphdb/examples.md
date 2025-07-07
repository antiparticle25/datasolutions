---
title: Examples & AI Integration
sidebar_position: 2
hide_title: true
---

## Examples
---
<div style={{ textAlign: 'justify' }}>
We can then start asking some questions to the dataset. For instance:
<br />
*'Which compounds exhibit sub-micromolar IC50 activity against kinase targets such as SRC, BTK, MAPK1, ABL1, AKT1, and PIK3CA?'*


<details style={{ backgroundColor: 'transparent', border: 'none', boxShadow: 'none', padding: '0' }}>
  <summary><b>SPARQL query</b></summary>

```sparql
PREFIX ex: <http://example.org/schema/>
PREFIX chemblm: <https://identifiers.org/chembl.compound/>
PREFIX chemblt: <https://identifiers.org/chembl.target/>

SELECT DISTINCT ?compound ?target ?uniprot ?value ?type
WHERE {
  GRAPH <http://example.org/graph/chembl-kinase-slice> {
    ?activity a ex:Activity ;
              ex:ofCompound ?compound ;
              ex:onTarget ?target ;
              ex:value ?value ;
              ex:activityType ?type .

    ?target a ex:Protein ;
            ex:uniprotAcc ?uniprot .

    FILTER(?uniprot IN (
      "P12931",  # SRC
      "P06239",  # SRC-family
      "P42680",  # BTK
      "P28482",  # MAPK1
      "P00519",  # ABL1
      "P31749",  # AKT1
      "P42336"   # PIK3CA
    ))
    FILTER(?type = "IC50")
    FILTER(xsd:double(?value) < 1000)
  }
}
LIMIT 10
```

</details>

![SPARQL Example 1](/files/sparql_example_1.png)


<br />
*'Which ChEMBL kinase targets are expressed in normal kidney cortex with TPM > 1?'*

<details style={{ backgroundColor: 'transparent', border: 'none', boxShadow: 'none', padding: '0' }}>
  <summary>**SPARQL query**</summary>

```sparql
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX chemblt: <https://identifiers.org/chembl.target/>
PREFIX chemblm: <https://identifiers.org/chembl.compound/>
PREFIX ex: <http://example.org/schema/>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX sio: <http://semanticscience.org/resource/>

SELECT DISTINCT ?target ?uniprot ?ensembl ?sample ?tpm
WHERE {
  GRAPH <http://example.org/graph/chembl-kinase-slice> {
    ?target a ex:Protein ;
            ex:uniprotAcc ?uniprot .
  }
  BIND(IRI(CONCAT("http://purl.uniprot.org/uniprot/", ?uniprot)) AS ?uniprotIRI)

  GRAPH <http://example.org/graph/linkset-idmap> {
    ?uniprotIRI owl:sameAs ?ensembl .
  }
  GRAPH <http://example.org/graph/gtex-expr-v9> {
    ?expr sio:isAbout ?ensembl ;
          sio:isPartOf ?sample ;
          sio:has_value ?tpm ;
          sio:has_unit <http://purl.gtex/TPM> .

    ?sample sio:isAbout <http://purl.obolibrary.org/obo/UBERON_0002113>  # Kidney cortex
  }

  FILTER(xsd:float(?tpm) > 1)
}
ORDER BY DESC(xsd:float(?tpm))
LIMIT 10

```

</details>
![SPARQL Example 2](/files/sparql_example_2.png)
<br />
I am working on providing more examples as I move the project to AWS/GCP that would bypassing my current hardware limitations.

## AI Integration
---

I am also working on integrating the project with an LLM/AI Agent in order to generate an output out of natural language by providing context about the database. Here's a tentative prompt:

<details style={{ backgroundColor: 'transparent', border: 'none', boxShadow: 'none', padding: '0' }}>
  <summary>**Prompt Template**</summary>

```text
You are a biomedical assistant that translates natural language into SPARQL queries.

Your knowledge base is a RDF GraphDB instance using named graphs and biomedical ontologies.
Use Turtle prefixes where applicable. Only generate valid SPARQL.

You know the following named graphs:

- Gene expression (GTEx): <http://example.org/graph/gtex-expr-v9>
- Kinase compound bioactivity (ChEMBL): <http://example.org/graph/chembl-kinase-slice>
- Protein mappings (UniProt ↔ Ensembl): <http://example.org/graph/protein-mapping>
- Disease annotations: <http://example.org/graph/disease-ontology>

Common prefixes:

PREFIX chembl: http://rdf.ebi.ac.uk/resource/chembl/molecule/
PREFIX up: http://purl.uniprot.org/uniprot/
PREFIX ensg: http://identifiers.org/ensembl/
PREFIX sio: http://semanticscience.org/resource/
PREFIX dct: http://purl.org/dc/terms/
PREFIX rdfs: http://www.w3.org/2000/01/rdf-schema#
PREFIX owl: http://www.w3.org/2002/07/owl#
PREFIX gtex: http://example.org/vocab/gtex#

You should only return SPARQL inside triple quotes. Do not explain anything.

**Q1:** What are the targets of imatinib?

SELECT DISTINCT ?target ?targetLabel
FROM http://example.org/graph/chembl-kinase-slice
WHERE {
  ?activity a sio:Activity ;
            sio:hasParticipant chembl:CHEMBL941 ; # imatinib
            sio:hasTarget ?target .
  ?target rdfs:label ?targetLabel .
}

**Q2:** Which tissues express the gene BRCA1?

SELECT ?tissue ?expressionLevel
FROM http://example.org/graph/gtex-expr-v9
WHERE {
  ?obs gtex:gene ensg:ENSG00000012048 ; # BRCA1
       gtex:tissue ?tissue ;
       gtex:expression ?expressionLevel .
}

**Q3:** Get all kinase targets that are mapped to UniProt IDs

SELECT DISTINCT ?ensemblGene ?uniprot
FROM http://example.org/graph/protein-mapping
WHERE {
  ?ensembl owl:sameAs ?uniprot .
  FILTER(STRSTARTS(STR(?uniprot), "http://purl.uniprot.org/uniprot/"))
}

When ready, answer the following question with a valid SPARQL query only. Do not explain.

**QUESTION:**
{{ user_query }}

```

</details>
</div>