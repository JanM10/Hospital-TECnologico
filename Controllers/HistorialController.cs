using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Data.SqlTypes;
using System.IO;
using System.Runtime.CompilerServices;

namespace MiProyecto.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HistorialController : ControllerBase
    {
        private readonly string _archivoDatos = "datos.json";

        [HttpGet]
        public IActionResult ObtenerPacientes()
        {
            var datos = ObtenerDatosDesdeArchivo();
            var historiales = datos["Historial"];
            return Ok(historiales);
        }

        [HttpPost]
        public IActionResult AgregarPaciente([FromBody] HistorialMedico historial)
        {
            var datos = ObtenerDatosDesdeArchivo();
            var historiales = datos["Historial"];
            historial.Id = historiales.Count + 1; // Asigna un nuevo Id al paciente
            historiales.Add(historial);
            GuardarDatosEnArchivo(datos);
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult ActualizarPaciente(int id, [FromBody] HistorialMedico historial)
        {
            var datos = ObtenerDatosDesdeArchivo();
            var historiales = datos["Historial"];
            var historialExistente = historiales.Find(p => p.Id == id);
            if (historialExistente == null)
            {
                return NotFound();
            }
            historialExistente.Procedimiento = historial.Procedimiento;
            historialExistente.FechaProcedimiento = historial.FechaProcedimiento;
            historialExistente.Tratamiento = historial.Tratamiento;
            GuardarDatosEnArchivo(datos);
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult EliminarPaciente(int id)
        {
            var datos = ObtenerDatosDesdeArchivo();
            var pacientes = datos["Pacientes"];
            var pacienteExistente = pacientes.Find(p => p.Id == id);
            if (pacienteExistente == null)
            {
                return NotFound();
            }
            pacientes.Remove(pacienteExistente);
            GuardarDatosEnArchivo(datos);
            return Ok();
        }

        private Dictionary<string, List<HistorialMedico>> ObtenerDatosDesdeArchivo()
        {
            if (!System.IO.File.Exists(_archivoDatos))
            {
                return new Dictionary<string, List<HistorialMedico>>();
            }
            var json = System.IO.File.ReadAllText(_archivoDatos);
            var datos = JsonConvert.DeserializeObject<Dictionary<string, List<HistorialMedico>>>(json);
            return datos;
        }

        private void GuardarDatosEnArchivo(Dictionary<string, List<HistorialMedico>> datos)
        {
            var json = JsonConvert.SerializeObject(datos);
            System.IO.File.WriteAllText(_archivoDatos, json);
        }
    }

    // Formato de un paciente
    public class HistorialMedico
    {
        public int Id { get; set; }
        public string Procedimiento { get; set; }
        public DateOnly FechaProcedimiento { get; set; }
        public string Tratamiento { get; set; }


    }
}
