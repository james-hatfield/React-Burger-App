using System.Collections.Generic;
using System.Linq;

namespace API.Models
{
    public class SqlBurgerAppRepo : IBurgerRepo
    {
        private readonly BurgerAppContext _context;

        public SqlBurgerAppRepo(BurgerAppContext context)
        {
            _context = context;
        }

        public IEnumerable<Burger> GetAllBurgers()
        {
            return _context.Burgers.ToList();
        }

        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }
    }
}