import React, { useState } from 'react';

const Search = () => {
  const [kalkisHavaalani, setKalkisHavaalani] = useState('');
  const [varisHavaalani, setVarisHavaalani] = useState('');
  const [kalkisTarihi, setKalkisTarihi] = useState('');
  const [donusTarihi, setDonusTarihi] = useState('');
  const [tekYonlu, setTekYonlu] = useState(false);

  return (
    <div>
      <label>Kalkış Havaalanı:</label>
      <input type="text" value={kalkisHavaalani} onChange={(e) => setKalkisHavaalani(e.target.value)} />

      <label>Varış Havaalanı:</label>
      <input type="text" value={varisHavaalani} onChange={(e) => setVarisHavaalani(e.target.value)} />

      <label>Kalkış Tarihi:</label>
      <input type="date" value={kalkisTarihi} onChange={(e) => setKalkisTarihi(e.target.value)} />

      <label>Dönüş Tarihi:</label>
      <input type="date" value={donusTarihi} onChange={(e) => setDonusTarihi(e.target.value)} disabled={tekYonlu} />

      <label>Tek Yönlü Uçuş:</label>
      <input type="checkbox" checked={tekYonlu} onChange={(e) => setTekYonlu(e.target.checked)} />

    </div>
  );
};

export default Search;
