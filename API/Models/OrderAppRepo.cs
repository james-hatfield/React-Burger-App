using System;
using System.Collections.Generic;
using System.Linq;

namespace API.Models
{
    public class SqlOrderAppRepo : IOrderRepo
    {
        private readonly OrderAppContext _context;

        public SqlOrderAppRepo(OrderAppContext context)
        {
            _context = context;
        }

        public IEnumerable<Order> GetAllOrders()
        {
            var orders = _context.Orders.ToList();
            // var orders = _context.Orders

            return orders;
        }

        public Order GetOrderById(int id)
        {
            return _context.Orders.FirstOrDefault(o => o.Id == id);
        }

        public void CreateOrder(Order order)
        {
            if (order == null)
            {
                throw new ArgumentNullException(null);
            }

            _context.Orders.Add(order);
        }


        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }
    }
}