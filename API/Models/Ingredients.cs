using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class Ingredients
    {
        [Key]
        public int ID { get; set; }
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

    }

    public class MutIngredients
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

    }

}