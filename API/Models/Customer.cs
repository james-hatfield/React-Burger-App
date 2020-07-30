using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class Customer
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string name { get; set; }
        [Required]
        public Address address { get; set; }
        [Required]
        public string email { get; set; }
    }

    public class Address
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string street { get; set; }
        [Required]
        public string zipCode { get; set; }
        [Required]
        public string country { get; set; }
    }

    public class MutCustomer
    {
        [Required]
        public string name { get; set; }
        [Required]
        public MutAddress address { get; set; }
        [Required]
        public string email { get; set; }
    }

    public class MutAddress
    {
        [Required]
        public string street { get; set; }
        [Required]
        public string zipCode { get; set; }
        [Required]
        public string country { get; set; }
    }

}


