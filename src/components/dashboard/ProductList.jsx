import { useState } from 'react';
import { DataTable } from '../DataTable';
import { Dialog } from '../ui/Dialog';
import { EditProductForm } from '../forms/EditProductForm';
import { useProductStore } from '../../store/productStore';
import { useAuthStore } from '../../store/authStore';

export const ProductList = () => {
  const [editingProduct, setEditingProduct] = useState(null);
  const { products, updateProduct, deleteProduct } = useProductStore();
  const user = useAuthStore((state) => state.user);

  const columns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Category', accessor: 'category' },
    { 
      header: 'Price', 
      accessor: 'price',
      render: (value) => `$${value.toFixed(2)}`
    },
    { header: 'Stock', accessor: 'stock' },
  ];

  const handleEdit = (item) => {
    setEditingProduct(item);
  };

  const handleSave = (updatedProduct) => {
    updateProduct(updatedProduct);
    setEditingProduct(null);
  };

  const handleDelete = (item) => {
    deleteProduct(item.id);
  };

  return (
    <div>
      <h2>Products</h2>
      <DataTable
        data={products}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Dialog
        isOpen={!!editingProduct}
        onClose={() => setEditingProduct(null)}
        title="Edit Product"
      >
        {editingProduct && (
          <EditProductForm
            product={editingProduct}
            onSave={handleSave}
            onCancel={() => setEditingProduct(null)}
          />
        )}
      </Dialog>
    </div>
  );
};
