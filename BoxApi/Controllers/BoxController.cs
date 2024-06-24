// Controllers/BoxController.cs
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BoxApi.Data;
using BoxApi.Models;

namespace BoxApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BoxController : ControllerBase
    {
        private readonly BoxContext _context;

        public BoxController(BoxContext context)
        {
            _context = context;
        }

        // GET: api/box
        [HttpGet]
        public ActionResult<IEnumerable<Box>> GetBoxes()
        {
            return _context.Boxes.ToList();
        }

        // GET: api/box/5
        [HttpGet("{id}")]
        public ActionResult<Box> GetBox(int id)
        {
            var box = _context.Boxes.Find(id);

            if (box == null)
            {
                return NotFound();
            }

            return box;
        }

        // POST: api/box
        [HttpPost]
        public ActionResult<Box> PostBox(Box box)
        {
            _context.Boxes.Add(box);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetBox), new { id = box.Id }, box);
        }

        // DELETE: api/box/5
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
