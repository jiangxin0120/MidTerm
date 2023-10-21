import React, { useState } from 'react';

// Create a ProductForm component
function ProductForm() {
  // Create a formData state to store the form data
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    quantity: '',
    price: ''
  });

  // Create a handleChange function to update the formData state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Create a handleSubmit function to handle the form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // could use the formData to send to a API or handle it

    //Post request example using axios
    // try {
    //     // Simulating a POST request to your server-side endpoint that saves data to MongoDB
    //     const response = await axios.post('https://exampleapi/products', formData);

    //     if (response.status === 200) {
    //         setIsModalVisible(true);  // Displaying the success modal
    //     } else {
    //         console.error('Failed to save the product.');
    //     }
    // } catch (error) {
    //     console.error('There was an error uploading the data:', error);
    // }
    window.alert('Form submitted successfully!');
};


// Form
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