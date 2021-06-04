using System;
namespace AngularRestAPI.Models
{
    public class ColorData
    {
        public int Red { get; set; }
        public int Green { get; set; }
        public int Blue { get; set; }
        public string Hex { get; set; }
        public string Name { get; set; }
        public int Distance { get; set; }
        public string Style => "backgroundColor: #" + Hex;
    }
}
