using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;

namespace MiProyecto.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DatosController : ControllerBase
    {
        private readonly string _archivoDatos = "datos.json";

        [HttpGet]
        public IActionResult ObtenerDatos()
        {
            var datos = ObtenerDatosDesdeArchivo();
            return Ok(datos);
        }

        [HttpPost]
        public IActionResult AgregarDato([FromBody] Dato dato)
        {
            var datos = ObtenerDatosDesdeArchivo();
            dato.Id = datos.Count + 1; // Asigna un nuevo Id al dato
            datos.Add(dato);
            GuardarDatosEnArchivo(datos);
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult ActualizarDato(int id, [FromBody] Dato dato)
        {
            var datos = ObtenerDatosDesdeArchivo();
            var datoExistente = datos.Find(d => d.Id == id);
            if (datoExistente == null)
            {
                return NotFound();
            }
            datoExistente.Nombre = dato.Nombre;
            datoExistente.Apellido1 = dato.Apellido1;
            datoExistente.Apellido2 = dato.Apellido2;
            GuardarDatosEnArchivo(datos);
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult EliminarDato(int id)
        {
            var datos = ObtenerDatosDesdeArchivo();
            var datoExistente = datos.Find(d => d.Id == id);
            if (datoExistente == null)
            {
                return NotFound();
            }
            datos.Remove(datoExistente);
            GuardarDatosEnArchivo(datos);
            return Ok();
        }

        private List<Dato> ObtenerDatosDesdeArchivo()
        {
            if (!System.IO.File.Exists(_archivoDatos))
            {
                return new List<Dato>();
            }
            var json = System.IO.File.ReadAllText(_archivoDatos);
            var datos = JsonConvert.DeserializeObject<List<Dato>>(json);
            return datos;
        }

        private void GuardarDatosEnArchivo(List<Dato> datos)
        {
            var json = JsonConvert.SerializeObject(datos);
            System.IO.File.WriteAllText(_archivoDatos, json);
        }
    }

    //Fomato de la base de datos
    public class Dato
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido1 { get; set; }
        public string Apellido2 { get; set; }
    }
}