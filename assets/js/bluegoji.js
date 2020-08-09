/* BlueGoji API handles */


var spider = document.getElementById("spider");

var a = new Chart(spider, {
  	type: 'radar',
  	data: {
    	labels: [ 'Attention & Focus', 'Executive Function', 'Processing Speed & Reaction Time', 
                  'Language & Symbols', 'Memory & Learning', 'Motor Control & Patterns', 
                  'Sensory & Perception', 'Social & Emotional', 'Creativity' ],
    	datasets:
    	[{ 
    		data: [25, 29, 28, 34, 22, 28, 30, 20, 31]
    	}]
    },
    options: {
        legend: {
            display: false
        },
        scale: {
            ticks: {
                suggestedMin: 0,
                suggestedMax: 35
            }
        }
    }
});

spider.onclick = function(e) {

    window.open('elements.html', "_self")
};