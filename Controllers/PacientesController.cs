using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;

namespace MiProyecto.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PacientesController : ControllerBase
    {
        private readonly string _archivoDatos = "datos.json";

        [HttpGet]
        public IActionResult ObtenerPacientes()
        {
            var datos = ObtenerDatosDesdeArchivo();
            var pacientes = datos["Pacientes"];
            return Ok(pacientes);
        }

        [HttpPost]
        public IActionResult AgregarPaciente([FromBody] Paciente paciente)
        {
            var datos = ObtenerDatosDesdeArchivo();
            var pacientes = datos["Pacientes"];
            paciente.Id = pacientes.Count + 1; // Asigna un nuevo Id al paciente
            pacientes.Add(paciente);
            GuardarDatosEnArchivo(datos);
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult ActualizarPaciente(int id, [FromBody] Paciente paciente)
        {
            var datos = ObtenerDatosDesdeArchivo();
            var pacientes = datos["Pacientes"];
            var pacienteExistente = pacientes.Find(p => p.Id == id);
            if (pacienteExistente == null)
            {
                return NotFound();
            }
            pacienteExistente.Nombre = paciente.Nombre;
            pacienteExistente.Apellido1 = paciente.Apellido1;
            pacienteExistente.Apellido2 = paciente.Apellido2;
            pacienteExistente.Cedula = paciente.Cedula;
            pacienteExistente.Telefono = paciente.Telefono;
            pacienteExistente.FechaNacimiento = paciente.FechaNacimiento;
            pacienteExistente.Direccion = paciente.Direccion;
            pacienteExistente.Patologias = paciente.Patologias;
            pacienteExistente.Tratamiento = paciente.Tratamiento;
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

        private Dictionary<string, List<Paciente>> ObtenerDatosDesdeArchivo()
        {
            if (!System.IO.File.Exists(_archivoDatos))
            {
                return new Dictionary<string, List<Paciente>>();
            }
            var json = System.IO.File.ReadAllText(_archivoDatos);
            var datos = JsonConvert.DeserializeObject<Dictionary<string, List<Paciente>>>(json);
            return datos;
        }

        private void GuardarDatosEnArchivo(Dictionary<string, List<Paciente>> datos)
        {
            var json = JsonConvert.SerializeObject(datos);
            System.IO.File.WriteAllText(_archivoDatos, json);
        }
    }

    // Formato de un paciente
    public class Paciente
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido1 { get; set; }
        public string Apellido2 { get; set; }
        public int Cedula { get; set; }
        public int Telefono { get; set; }
        public string Direccion { get; set; }
        public string FechaNacimiento { get; set; }
        public string Patologias { get; set; }
        public string Tratamiento { get; set; }
    }
}
