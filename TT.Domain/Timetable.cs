using System;

namespace TT.Domain
{
    public class Timetable
    {
        public DateTime Date
        {
            get;
            set;
        }
        public TimeSpan Time
        {
            get;
            set;
        }
        public LineEnum Line
        {
            get;
            set;
        }
        public ServiceEnum Service
        {
            get;
            set;
        }

    }
}
