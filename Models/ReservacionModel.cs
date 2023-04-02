using System;

// Formato de una reservación
public class Reservacion
{
    public int Id { get; set; }
    public string nombrePaciente { get; set; }
    public DateTime FechaIngreso { get; set; }
    public int DuracionProcedimientos { get; set; }
    public DateTime FechaSalida { get; set; }
}