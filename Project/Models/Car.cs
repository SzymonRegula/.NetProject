﻿using System.ComponentModel.DataAnnotations;

namespace Project.Models
{
    public class Car
    {
        public int Id { get; set; }
        public string? Brand { get; set; }
        public string? Model { get; set; }
        [Display(Name = "Price Per Day")]
        public decimal PricePerDay { get; set; }
    }
}

