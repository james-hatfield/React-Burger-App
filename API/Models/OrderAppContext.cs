using Microsoft.EntityFrameworkCore;

namespace API.Models
{
    public class OrderAppContext : DbContext
    {
        public OrderAppContext(DbContextOptions<OrderAppContext> opt) : base(opt)
        {

        }

        public DbSet<Order> Orders { get; set; }

    }
}