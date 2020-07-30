using Microsoft.AspNetCore.Mvc;
using API.Models;
using System.Collections.Generic;

namespace API.Controllers
{
    [Route("/burger")]
    [ApiController]
    public class BurgerController : ControllerBase
    {
        private IBurgerRepo _repo;

        public BurgerController(IBurgerRepo repository)
        {
            _repo = repository;
        }

        //Get api/commands
        [HttpGet]
        public ActionResult<IEnumerable<Burger>> GetAllBurgers()
        {
            var burgers = _repo.GetAllBurgers();

            return Ok(burgers);
        }
    }
}
