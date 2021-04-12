using Gifter.Models;
using System.Collections.Generic;

namespace Gifter.Repositories
{
    public interface IUserProfileRepository
    {
        void Add(UserProfile userProfile);
        void Delete(int id);
        List<UserProfile> GetAll();
        UserProfile GetUserProfileById(int id);
        UPWithPosts GetUserProfileWithPosts(int id);
        void Update(UserProfile userProfile);
    }
}