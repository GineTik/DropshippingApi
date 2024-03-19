using System.Security.Claims;
using System.Security.Principal;

namespace backend.Extensions;

public static class IdentityExtension
{
    public static int GetId(this IIdentity identity)
    {
        var claimsIdentity = identity as ClaimsIdentity;
        var claim = claimsIdentity!.FindFirst(ClaimTypes.NameIdentifier);
        return int.Parse(claim!.Value);
    }
}