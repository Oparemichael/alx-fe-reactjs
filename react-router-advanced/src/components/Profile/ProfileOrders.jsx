function ProfileOrders() {
  const orders = [
    { id: 1, date: '2024-01-15', total: 99.99, status: 'Delivered' },
    { id: 2, date: '2024-01-20', total: 149.99, status: 'Processing' },
    { id: 3, date: '2024-01-25', total: 79.99, status: 'Shipped' }
  ]

  return (
    <div>
      <h2>Order History</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #eee' }}>
            <th style={{ textAlign: 'left', padding: '1rem' }}>Order ID</th>
            <th style={{ textAlign: 'left', padding: '1rem' }}>Date</th>
            <th style={{ textAlign: 'left', padding: '1rem' }}>Total</th>
            <th style={{ textAlign: 'left', padding: '1rem' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '1rem' }}>#{order.id}</td>
              <td style={{ padding: '1rem' }}>{order.date}</td>
              <td style={{ padding: '1rem' }}>${order.total}</td>
              <td style={{ padding: '1rem' }}>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProfileOrders