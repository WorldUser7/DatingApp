namespace API.Entities;

public class AppUser
{
    public int Id { get; set; } // if we want to call it something other than id, we have to specify that this is a key like this: [Key] above the ppublic int name that we want to use
    public required string UserName { get; set; } //the string? is because the username is optional, the required string, tells us that we can't create a user without a name

}
