using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CoastalSongChoiceApp.Models;

namespace CoastalSongChoiceApp.Controllers
{
    // All of these routes will be at the base URL:     /api/Songs
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case SongsController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class SongsController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public SongsController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Songs
        //
        // Returns a list of all your Songs
        //
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Song>>> GetSongs(string filter)
        {
            // Uses the database context in `_context` to request all of the Songs, sort
            // them by row id and return them as a JSON array.
            if (filter == null)
            {
                return await _context.Songs.OrderBy(row => row.Id).ToListAsync();

            }
            else
            {
                return await _context.Songs
                .OrderBy(row => row.Id)
                .Where(song => song.Title.ToLower()
                .Contains(filter.ToLower())).ToListAsync();
            }
        }

        // GET: api/Songs/5
        //
        // Fetches and returns a specific song by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<Song>> GetSong(int id)
        {
            // Find the song in the database using `FindAsync` to look it up by id
            var song = await _context.Songs.FindAsync(id);

            // If we didn't find anything, we receive a `null` in return
            if (song == null)
            {
                // Return a `404` response to the client indicating we could not find a song with this id
                return NotFound();
            }

            //  Return the song as a JSON object.
            return song;
        }

        // PUT: api/Songs/5
        //
        // Update an individual song with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a Song
        // variable named song. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Song POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSong(int id, Song song)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != song.Id)
            {
                return BadRequest();
            }

            // Tell the database to consider everything in song to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from song
            _context.Entry(song).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!SongExists(id))
                {
                    // If the record we tried to update was already deleted by someone else,
                    // return a `404` not found
                    return NotFound();
                }
                else
                {
                    // Otherwise throw the error back, which will cause the request to fail
                    // and generate an error to the client.
                    throw;
                }
            }

            // Return a copy of the updated data
            return Ok(song);
        }

        // POST: api/Songs
        //
        // Creates a new song in the database.
        //
        // The `body` of the request is parsed and then made available to us as a Song
        // variable named song. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Song POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        public async Task<ActionResult<Song>> PostSong(Song song)
        {
            // Indicate to the database context we want to add this new record
            _context.Songs.Add(song);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetSong", new { id = song.Id }, song);
        }

        // DELETE: api/Songs/5
        //
        // Deletes an individual song with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSong(int id)
        {
            // Find this song by looking for the specific id
            var song = await _context.Songs.FindAsync(id);
            if (song == null)
            {
                // There wasn't a song with that id so return a `404` not found
                return NotFound();
            }

            // Tell the database we want to remove this record
            _context.Songs.Remove(song);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // Return a copy of the deleted data
            return Ok(song);
        }

        // Private helper method that looks up an existing song by the supplied id
        private bool SongExists(int id)
        {
            return _context.Songs.Any(song => song.Id == id);
        }
    }
}
