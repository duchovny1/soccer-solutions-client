using System;
using System.Collections.Generic;
using System.Text;

namespace soccer_solutions.domain.Entities
{
    public class Prediction
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Content { get; set; }

        public string GamePrediction { get; set; }
    }
}
