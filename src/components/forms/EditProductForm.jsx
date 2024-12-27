import { useState } from 'react';
import { Button } from '../ui/Button';

export const EditProductForm = ({ product, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    price: product.price,
    stock: product.stock,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...product, ...formData });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Price</label>
        <input
          type="number"
          step="0.01"
          value={formData.price}
          onChange={(e) => setFormData(prev => ({ ...prev, price: parseFloat(e.target.value) }))}
        />
      </div>
      <div>
        <label>Stock</label>
        <input
          type="number"
          value={formData.stock}
          onChange={(e) => setFormData(prev => ({ ...prev, stock: parseInt(e.target.value, 10) }))}
        />
      </div>
      <div>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          Save Changes
        </Button>
      </div>
    </form>
  );
};
