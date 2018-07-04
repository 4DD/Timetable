using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TT.Domain;
using TT.Business;

namespace TrainTime.Controllers
{
    [Route("api/[controller]")]
    public class TimetableController : Controller
    {
        private ITimetableManger _timetableManager;
        public TimetableController(ITimetableManger timetableManager){
            _timetableManager = timetableManager;
        }
        [HttpPost]
        public IActionResult Create(Timetable timeTable)
        {
            _timetableManager.Save(timeTable);

            return Ok();
        }

        [HttpGet]
        public ActionResult<List<Timetable>> GetAll()
        {
            _timetableManager.GetAll();
        }

        [HttpGet("{id}", Name = "GetTimetable")]
        public ActionResult<Timetable> GetById(long id)
        {
            Timetable timetable = _timetableManager.Get(id);
            if (timetable == null)
            {
                return NotFound();
            }
            return timettable;
        }

        [HttpPut("{id}")]
        public IActionResult Update(long id, Timetable timetable)
        {    
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            return Ok();
        }


    }
}
