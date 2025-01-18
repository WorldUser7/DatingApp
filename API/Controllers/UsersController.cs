using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;
[ApiController]
[Route("api/[controller]")] // /api/users
 
public class UsersController(DataContext context) : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
    {
        var users = await context.Users.ToListAsync(); // with that way using async and actionResult as a task and also using the await keyword, we are basically setting up the database to be able to receive more requests while this request is being served, not waiting for it to finish first..

        return users; //other returns(they are called Http responses): return NotFound, return BadRequest
    }

// HttpGet("{id:int}") this is telling us that the method is HttpGet and because we already have one we cannot have another one the same, so we specify that we want a type of id, and we also add a constrain for the type to be int
    [HttpGet("{id:int}")]  // /api/users/3
    public async Task<ActionResult<AppUser>> GetUser(int id) // we are returning an AppUser object
    {
        var user = await context.Users.FindAsync(id);

        if(user == null) return NotFound();

        return user; //other returns(they are called Http responses): return Ok, return NotFound, return BadRequest
    }
}
