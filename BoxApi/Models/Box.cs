// Models/Box.cs
using System.ComponentModel.DataAnnotations;

namespace BoxApi.Models
{
    public class Box
    {
        [Key]
        public int Id { get; set; }
        public float Length { get; set; }
        public float Width { get; set; }
        public float Height { get; set; }
        
        [Required]
        public string Color { get; set; } = "#ffffff"; // Default color (white)
    }
}
