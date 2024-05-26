import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null);
  const [extractedText, setExtractedText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    setError('');
    setLoading(true);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setExtractedText(response.data.extracted_text);
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Image Text Extractor</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit} disabled={!file || loading} style={{ marginLeft: '10px' }}>
        {loading ? 'Extracting...' : 'Extract Text'}
      </button>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {extractedText && (
        <div>
          <h2>Extracted Text</h2>
          <pre>{extractedText}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
