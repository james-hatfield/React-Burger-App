using System.Collections.Generic;
using API.Models;

namespace API.Models
{
    public interface IOrderRepo
    {
        bool SaveChanges();

        IEnumerable<Order> GetAllOrders();

        void CreateOrder(Order order);
        Order GetOrderById(int id);

        // Implement further REST routes
        // void UpdateOrder(Order order);
        // void DeleteOrder(Order order);
    }
}