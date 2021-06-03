using System;
namespace AngularRestAPI.Repository
{
    public interface IRepository<T>
    {
        T GetDataSource();
    }
}
