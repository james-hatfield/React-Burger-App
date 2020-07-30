using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class Order
    {
        [Key]
        public int Id { get; set; }

        public Ingredients ingredients { get; set; }

        public Customer customer { get; set; }

        [Required]
        public int price { get; set; }

    }


    public class MutOrder
    {

        public MutIngredients ingredients { get; set; }

        public MutCustomer customer { get; set; }

        [Required]
        public int price { get; set; }


    }
}
