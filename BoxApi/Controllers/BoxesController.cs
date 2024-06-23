using Microsoft.AspNetCore.Mvc;
using BoxApi.Data;
using BoxApi.Models;
using System.Collections.Generic;
using System.Linq;

namespace BoxApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BoxesController : ControllerBase
    {
        private readonly BoxContext _context;

        public BoxesController(BoxContext context)
        {
            _context = context;
        }

        // GET: api/boxes
        [HttpGet]
        public ActionResult<IEnumerable<Box>> GetBoxes()
        {
            return _context.Boxes.ToList();
        }

        // POST: api/boxes
        [HttpPost]
        public ActionResult<Box> PostBox(Box box)
        {
            _context.Boxes.Add(box);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetBoxes), new { id = box.Id }, box);
        }

        // DELETE: api/boxes/{id}
        [HttpDelete("{id}")]
        public IActionResult DeleteBox(int id)
        {
            var box = _context.Boxes.Find(id);
            if (box == null)
            {
                return NotFound();
            }

            _context.Boxes.Remove(box);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
