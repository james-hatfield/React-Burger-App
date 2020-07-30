using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Models
{
    public class BurgerAppContext : DbContext
    {
        public BurgerAppContext(DbContextOptions<BurgerAppContext> opt) : base(opt)
        {

        }

        public DbSet<Burger> Burgers { get; set; }

    }
}