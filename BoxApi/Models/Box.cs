using System.ComponentModel.DataAnnotations;

namespace BoxApi.Models
{
    public class Box
    {
        public int Id { get; set; }
        
        [Required(ErrorMessage = "BoxId is required.")]
        public string? BoxId { get; set; }

        [Required(ErrorMessage = "Width is required.")]
        [Range(0, double.MaxValue, ErrorMessage = "Width must be greater than zero.")]
        public double Width { get; set; }

        [Required(ErrorMessage = "Length is required.")]
        [Range(0, double.MaxValue, ErrorMessage = "Length must be greater than zero.")]
        public double Length { get; set; }

        [Required(ErrorMessage = "Height is required.")]
        [Range(0, double.MaxValue, ErrorMessage = "Height must be greater than zero.")]
        public double Height { get; set; }

        [Required(ErrorMessage = "Color is required.")]
        public string? Color { get; set; }
    }
}
