using Backend.Core.EF;
using Microsoft.EntityFrameworkCore;

namespace Backend.Core.Services.User;

public class UserService
{
    private readonly DataContext _dataContext;

    public UserService(DataContext dataContext)
    {
        _dataContext = dataContext;
    }

    public async Task<int> GetMaxLengthOfAllows(int userId)
    {
        var settings = await _dataContext.DropshipperSettings.FirstOrDefaultAsync(s => s.UserId == userId);
        // TODO: create exception
        if (settings == null) throw new Exception();
        return settings.MaxLengthOfAllows;
    }
}