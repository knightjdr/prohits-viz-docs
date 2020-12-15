import React from 'react';

const FileFormat = () => (
  <article>
    <p>
      ProHits-viz requires tabular input files in either tab-delimited or csv format.
      At a minimum, the file must contain four columns specifying the bait/condition,
      prey/readout, abundance measure (spectral count, intensity, etc) and a
      confidence metric (e.g. FDR). Explicity support is provided for files output
      from SAINT and CRAPome/Reprint. If you are the maintainer of another tool
      and would like us to support your ouput, please let us know. Datasets from
      unsupported tools can still be used provided they meet the tabular format
      criteria mentioned above, however, you will have to specifiy the columns
      to use as they cannot be automatically recognized.
    </p>
    <h3>Sample files</h3>
    <p>
      For detailed information on tools that generate compatible input for ProHits-viz,
      see the references and links below:
    </p>
    <p><strong>Publications</strong></p>
    <ul>
      <li><a href="http://www.ncbi.nlm.nih.gov/pubmed/21131968" rel="noopener noreferrer" target="_blank">SAINT</a></li>
      <li><a href="http://www.ncbi.nlm.nih.gov/pubmed/24513533" rel="noopener noreferrer" target="_blank">SAINTexpress</a></li>
      <li><a href="http://www.ncbi.nlm.nih.gov/pubmed/22352807" rel="noopener noreferrer" target="_blank">SAINT-MS1</a></li>
      <li><a href="http://www.ncbi.nlm.nih.gov/pubmed/20944583" rel="noopener noreferrer" target="_blank">ProHits</a></li>
      <li><a href="http://www.ncbi.nlm.nih.gov/pubmed/22948730" rel="noopener noreferrer" target="_blank">ProHits Protocol</a></li>
      <li><a href="http://www.ncbi.nlm.nih.gov/pubmed/27132685" rel="noopener noreferrer" target="_blank">ProHits 4.0</a></li>
      <li><a href="http://www.ncbi.nlm.nih.gov/pubmed/23921808" rel="noopener noreferrer" target="_blank">CRAPome</a></li>
    </ul>
    <p><strong>Sites</strong></p>
    <ul>
      <li><a href="http://saint-apms.sourceforge.net/Main.html" rel="noopener noreferrer" target="_blank">SAINT</a></li>
      <li><a href="http://prohitsms.com" rel="noopener noreferrer" target="_blank">ProHits</a></li>
      <li><a href="http://www.crapome.org" rel="noopener noreferrer" target="_blank">CRAPome</a></li>
      <li><a href="https://usegalaxyp.org/" rel="noopener noreferrer" target="_blank">GalaxyP</a></li>
    </ul>
  </article>
);

export default FileFormat;
