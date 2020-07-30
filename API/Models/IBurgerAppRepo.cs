using System.Collections.Generic;
using API.Models;

namespace API.Models
{
    public interface IBurgerRepo
    {
        bool SaveChanges();

        IEnumerable<Burger> GetAllBurgers();

        // Implement further REST routes

        // Burger GetBurgerById(int id);
        // void CreateBurger(Burger cmd);
        // void UpdateBurger(Burger cmd);
        // void DeleteBurger(Burger cmd);
    }
}