using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class Burger
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int Meat { get; set; }

        [Required]
        public int Cheese { get; set; }

        [Required]
        public int Salad { get; set; }

        [Required]
        public int Bacon { get; set; }

        [Required]
        public int BreadTop { get; set; }

        [Required]
        public int BreadBottom { get; set; }

        [Required]
        public int TotalPrice { get; set; }

    }


    public class MutBurger
    {
        [Required]
        public int Meat { get; set; }

        [Required]
        public int Cheese { get; set; }

        [Required]
        public int Salad { get; set; }

        [Required]
        public int Bacon { get; set; }

        [Required]
        public int BreadTop { get; set; }

        [Required]
        public int BreadBottom { get; set; }

        [Required]
        public int TotalPrice { get; set; }

    }
}
