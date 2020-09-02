var variabilityData = [{ value: 70,
                      color: "#0DB5FE" },
                    { value: 30,
    				  color: "#FFFFFF" }
                    ];
                    
var variabilityChart = new Chart(document.getElementById("variability01").getContext("2d")).Pie(variabilityData);

var symmetryData = [{ value: 70,
                      color: "#0DB5FE" },
                    { value: 30,
    				  color: "#FFFFFF" }
                    ];
                    
var symmetryChart = new Chart(document.getElementById("symmetry01").getContext("2d")).Pie(symmetryData);

var balanceData = [{ value: 70,
                      color: "#0DB5FE" },
                    { value: 30,
    				  color: "#FFFFFF" }
                    ];
                    
var variabilityChart = new Chart(document.getElementById("balance01").getContext("2d")).Pie(balanceData);