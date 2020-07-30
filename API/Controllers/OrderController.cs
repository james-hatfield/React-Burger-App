using Microsoft.AspNetCore.Mvc;
using API.Models;
using System.Collections.Generic;
using AutoMapper;

namespace API.Controllers
{
    [Route("/order")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private IOrderRepo _repo;
        private IMapper _mapper;

        public OrderController(IOrderRepo repository, IMapper mapper)
        {
            _repo = repository;
            _mapper = mapper;
        }

        //Get /Orders
        [HttpGet]
        public ActionResult<IEnumerable<Order>> GetAllOrders()
        {
            var orders = _repo.GetAllOrders();

            return Ok(orders);
        }

        [HttpGet("{id}", Name = "GetOrderById")]
        public ActionResult<IEnumerable<Order>> GetOrderById(int id)
        {
            var order = _repo.GetOrderById(id);

            if (order == null)
            {
                return NotFound();
            }

            return Ok(order);
        }

        [HttpPost]
        public ActionResult<Order> CreateOrder(MutOrder order)
        {

            var orderModel = _mapper.Map<Order>(order);
            _repo.CreateOrder(orderModel);
            _repo.SaveChanges();


            return CreatedAtRoute(nameof(GetOrderById), new { ID = orderModel.Id }, orderModel);
        }
    }
}
