import React from "react";

export default function Homepage() {
  return (
    <div className="container my-5">
      <header className="text-center mb-4">
        <h1>Welcome to Text Utils</h1>
        <p>Your one-stop solution for all text-related operations</p>
      </header>

      <div className="row text-center">
        <div className="col-md-4">
          <h3>Text Conversion</h3>
          <p>Convert your text to Uppercase or Lowercase with just one click!</p>
        </div>
        <div className="col-md-4">
          <h3>Clear and Copy Text</h3>
          <p>Easily clear or copy your text for quick operations.</p>
        </div>
        <div className="col-md-4">
          <h3>Remove Extra Spaces</h3>
          <p>Remove unnecessary spaces from your text efficiently.</p>
        </div>
      </div>

      <div className="text-center mt-4">
        <Link to="/TextForm" className="btn btn-primary">
          Start Using Text Utils
        </Link>
      </div>
    </div>
  );
}
