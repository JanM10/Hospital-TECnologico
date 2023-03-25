using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;

namespace MiProyecto.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReservacionesController : ControllerBase
    {
        private readonly string _archivoDatos = "datos.json";

        [HttpGet]
        public IActionResult ObtenerReservaciones()
        {
            var datos = ObtenerDatosDesdeArchivo();
            var reservaciones = datos["Reservaciones"];
            return Ok(reservaciones);
        }

        [HttpPost]
        public IActionResult AgregarReservacion([FromBody] Reservacion reservacion)
        {
            var datos = ObtenerDatosDesdeArchivo();
            var reservaciones = datos["Reservaciones"];
            reservacion.Id = reservaciones.Count + 1; // Asigna un nuevo Id a la reservación
            reservacion.FechaSalida = reservacion.FechaIngreso.AddDays(reservacion.DuracionProcedimientos);
            reservaciones.Add(reservacion);
            GuardarDatosEnArchivo(datos);
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult ActualizarReservacion(int id, [FromBody] Reservacion reservacion)
        {
            var datos = ObtenerDatosDesdeArchivo();
            var reservaciones = datos["Reservaciones"];
            var reservacionExistente = reservaciones.Find(r => r.Id == id);
            if (reservacionExistente == null)
            {
                return NotFound();
            }
            reservacionExistente.Paciente = reservacion.Paciente;
            reservacionExistente.FechaIngreso = reservacion.FechaIngreso;
            reservacionExistente.DuracionProcedimientos = reservacion.DuracionProcedimientos;
            reservacionExistente.FechaSalida = reservacion.FechaIngreso.AddDays(reservacion.DuracionProcedimientos);
            GuardarDatosEnArchivo(datos);
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult EliminarReservacion(int id)
        {
            var datos = ObtenerDatosDesdeArchivo();
            var reservaciones = datos["Reservaciones"];
            var reservacionExistente = reservaciones.Find(r => r.Id == id);
            if (reservacionExistente == null)
            {
                return NotFound();
            }
            reservaciones.Remove(reservacionExistente);
            GuardarDatosEnArchivo(datos);
            return Ok();
        }

        private Dictionary<string, List<Reservacion>> ObtenerDatosDesdeArchivo()
        {
            if (!System.IO.File.Exists(_archivoDatos))
            {
                return new Dictionary<string, List<Reservacion>>();
            }
            var json = System.IO.File.ReadAllText(_archivoDatos);
            var datos = JsonConvert.DeserializeObject<Dictionary<string, List<Reservacion>>>(json);
            return datos;
        }

        private void GuardarDatosEnArchivo(Dictionary<string, List<Reservacion>> datos)
        {
            var json = JsonConvert.SerializeObject(datos);
            System.IO.File.WriteAllText(_archivoDatos, json);
        }
    }

    
}

