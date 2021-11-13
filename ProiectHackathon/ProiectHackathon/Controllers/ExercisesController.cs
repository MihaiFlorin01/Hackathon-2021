using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProiectHackathon.Context;
using ProiectHackathon.Model;

namespace ProiectHackathon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExercisesController : ControllerBase
    {
        private readonly MainContext _context;

        public ExercisesController(MainContext context)
        {
            _context = context;
        }

        // GET: api/Exercises
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Exercises>>> GetExercises()
        {
            return await _context.Exercises.ToListAsync();
        }

        // GET: api/Exercises/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Exercises>> GetExercises(int id)
        {
            var exercises = await _context.Exercises.FindAsync(id);

            if (exercises == null)
            {
                return NotFound();
            }

            return exercises;
        }

        // PUT: api/Exercises/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutExercises(int id, Exercises exercises)
        {
            if (id != exercises.ExerciseId)
            {
                return BadRequest();
            }

            _context.Entry(exercises).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExercisesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Exercises
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Exercises>> PostExercises(Exercises exercises)
        {
            _context.Exercises.Add(exercises);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetExercises", new { id = exercises.ExerciseId }, exercises);
        }

        // DELETE: api/Exercises/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteExercises(int id)
        {
            var exercises = await _context.Exercises.FindAsync(id);
            if (exercises == null)
            {
                return NotFound();
            }

            _context.Exercises.Remove(exercises);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ExercisesExists(int id)
        {
            return _context.Exercises.Any(e => e.ExerciseId == id);
        }
    }
}
