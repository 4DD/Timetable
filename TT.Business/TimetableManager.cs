using System;
using System.Collections.Generic;
using TT.Domain;

namespace TT.Business
{

    public interface ITimetableManger
    {
       void Save(Timetable timetable);
       void Update(Timetable timetable);
       void  Delete(long id);
       Timetable Get(long id);List<Timetable> GetAll();


    }

    public class TimetableManger : ITimetableManger
    {
        public void Delete(long id)
        {
            throw new NotImplementedException();
        }

        public Timetable Get(long id)
        {
            throw new NotImplementedException();
        }

        public List<Timetable> GetAll()
        {
            throw new NotImplementedException();
        }

        public void Save(Timetable timetable)
        {
            throw new NotImplementedException();
        }

        public void Update(Timetable timetable)
        {
            throw new NotImplementedException();
        }
    }

}
