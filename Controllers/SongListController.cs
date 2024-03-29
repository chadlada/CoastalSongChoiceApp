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
    // All of these routes will be at the base URL:     /api/SongList
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case SongListController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class SongListController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public SongListController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/SongList
        //
        // Returns a list of all your SongsList
        //
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SongList>>> GetSongsList()
        {
            // Uses the database context in `_context` to request all of the SongsList, sort
            // them by row id and return them as a JSON array.
            return await _context.SongsList.OrderBy(row => row.Id).ToListAsync();
        }

        // GET: api/SongList/5
        //
        // Fetches and returns a specific songList by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<SongList>> GetSongList(int id)
        {
            // Find the songList in the database using `FindAsync` to look it up by id
            var songList = await _context.SongsList.FindAsync(id);

            // If we didn't find anything, we receive a `null` in return
            if (songList == null)
            {
                // Return a `404` response to the client indicating we could not find a songList with this id
                return NotFound();
            }

            //  Return the songList as a JSON object.
            return songList;
        }

        // PUT: api/SongList/5
        //
        // Update an individual songList with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a SongList
        // variable named songList. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our SongList POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSongList(int id, SongList songList)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != songList.Id)
            {
                return BadRequest();
            }

            // Tell the database to consider everything in songList to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from songList
            _context.Entry(songList).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!SongListExists(id))
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
            return Ok(songList);
        }

        // POST: api/SongList
        //
        // Creates a new songList in the database.
        //
        // The `body` of the request is parsed and then made available to us as a SongList
        // variable named songList. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our SongList POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        public async Task<ActionResult<SongList>> PostSongList(SongList songList)
        {
            // Indicate to the database context we want to add this new record
            _context.SongsList.Add(songList);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetSongList", new { id = songList.Id }, songList);
        }

        // DELETE: api/SongList/5
        //
        // Deletes an individual songList with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSongList(int id)
        {
            // Find this songList by looking for the specific id
            var songList = await _context.SongsList.FindAsync(id);
            if (songList == null)
            {
                // There wasn't a songList with that id so return a `404` not found
                return NotFound();
            }

            // Tell the database we want to remove this record
            _context.SongsList.Remove(songList);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // Return a copy of the deleted data
            return Ok(songList);
        }

        // Private helper method that looks up an existing songList by the supplied id
        private bool SongListExists(int id)
        {
            return _context.SongsList.Any(songList => songList.Id == id);
        }
    }
}
