using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using System.Security.Cryptography;
using System.Text;

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
            pacienteExistente.Password = paciente.Password;
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
            DesencriptarPassword(datos);
            return datos;
        }

        private void GuardarDatosEnArchivo(Dictionary<string, List<Paciente>> datos)
        {
            EncriptarPassword(datos);
            var json = JsonConvert.SerializeObject(datos);
            System.IO.File.WriteAllText(_archivoDatos, json);
        }

        private static readonly byte[] clave = new byte[] { 0x42, 0x72, 0x65, 0x6e, 0x74, 0x6f, 0x20, 0x4d, 0x65, 0x64, 0x69, 0x63, 0x6f, 0x20, 0x32, 0x30 };


        private static void EncriptarPassword(Dictionary<string, List<Paciente>> datos)
        {
            foreach (var pacienteList in datos.Values)
            {
                foreach (var paciente in pacienteList)
                {
                    if (!string.IsNullOrEmpty(paciente.Password))
                    {
                        byte[] passwordPlano = Encoding.UTF8.GetBytes(paciente.Password);
                        using var aes = Aes.Create();
                        aes.Key = clave;
                        aes.IV = new byte[16];
                        using var encryptor = aes.CreateEncryptor();
                        byte[] passwordEncriptado = encryptor.TransformFinalBlock(passwordPlano, 0, passwordPlano.Length);
                        paciente.Password = Convert.ToBase64String(passwordEncriptado);
                    }
                }
            }
        }

        private static void DesencriptarPassword(Dictionary<string, List<Paciente>> datos)
        {
            foreach (var pacienteList in datos.Values)
            {
                foreach (var paciente in pacienteList)
                {
                    if (!string.IsNullOrEmpty(paciente.Password))
                    {
                        byte[] passwordEncriptadoBytes = Convert.FromBase64String(paciente.Password);
                        using var aes = Aes.Create();
                        aes.Key = clave;
                        aes.IV = new byte[16];
                        using var decryptor = aes.CreateDecryptor();
                        byte[] passwordDesencriptadoBytes = decryptor.TransformFinalBlock(passwordEncriptadoBytes, 0, passwordEncriptadoBytes.Length);
                        paciente.Password = Encoding.UTF8.GetString(passwordDesencriptadoBytes);
                    }
                }
            }
        }
    }

    
}
