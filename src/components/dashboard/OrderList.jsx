import { DataTable } from '../DataTable';
import { orderData } from '../../data/mockData';
import { useAuthStore } from '../../store/authStore';

export const OrderList = () => {
  const user = useAuthStore((state) => state.user);

  const columns = [
    { header: 'Order Number', accessor: 'orderNumber' },
    { header: 'Customer', accessor: 'customer' },
    { header: 'Status', accessor: 'status' },
    { header: 'Total', accessor: 'total' },
  ];

  const handleEdit = (item) => {
    console.log('Edit order:', item);
  };

  const handleDelete = (item) => {
    console.log('Delete order:', item);
  };

  return (
    <div>
      <h2>Orders</h2>
      <DataTable
        data={orderData}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};
