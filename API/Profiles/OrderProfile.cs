using API.Models;
using AutoMapper;

namespace API.Profiles
{
    public class OrdersProfile : Profile
    {

        public OrdersProfile()
        {
            CreateMap<Order, MutOrder>();
            CreateMap<MutOrder, Order>();
            CreateMap<MutIngredients, Ingredients>();
            CreateMap<MutCustomer, Customer>();
            CreateMap<MutAddress, Address>();
            // CreateMap<MutOrder, Order>();
            // CreateMap<MutOrder, Order>();
        }
    }
}