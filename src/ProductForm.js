import React, { useState } from 'react';

function ProductForm() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    quantity: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // could use the formData to send to a API or handle it

    window.alert('Form submitted successfully!');
};

  return (
    <div>
      <h2>New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
        <label>Name</label>
    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
</div>
<div>
    <label>Description</label>
    <input type="text" name="description" value={formData.description} onChange={handleChange} />
</div>
<div>
    <label>Category</label>
    <input type="text" name="category" value={formData.category} onChange={handleChange} required />
</div>
<div>
    <label>Quantity</label>
    <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} required />
</div>
<div>
    <label>Price</label>
    <input type="text" name="price" value={formData.price} onChange={handleChange} required />
</div>
        <div>
          <button type="submit">SUBMIT</button>
          <button type="button" onClick={() => setFormData({
            name: '',
            description: '',
            category: '',
            quantity: '',
            price: ''
          })}>Clear</button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
