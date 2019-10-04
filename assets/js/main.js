var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            data: [],
            borderWidth: 1,
            borderColor:'#00c0ef',
            label: 'Total Amount',
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


$(document).ready(function(){
    
    $('#myRangeInvestmentRange').on('input', function() {
        $("#investmentAmount").val($(this).val());
        $("#investmentAmount").next('label').hide();
    });
    $('#myRangeInterestRate').on('input', function() {        
        $("#interestrate").val($(this).val());
        $("#interestrate").next('label').hide();
    });
    $('#myRangeYear').on('input', function() {
        $("#year").val($(this).val());
        $("#year").next('label').hide();
    });

    $("#calculate").click(function(){
        var investmentAmount = $("#investmentAmount").val();
        var interestrate = $("#interestrate").val();
        var year = $("#year").val();

        if($("#investmentAmount").val() == ''){
            alert('Enter Investment Amount');
            return false;
        }
        if($("#interestrate").val() == ''){
            alert('Enter Interest Rate');
            return false;
        }
        if($("#year").val() == ''){
            alert('Enter Year');
            return false;
        }
        for(y = 1; y <= year; y++){            
            var investmentTotalByYear = investmentAmount * (1 + interestrate/100) * y;            
            $('#generate').append('<tr><td scope="row">'+y+'</td><td>'+investmentTotalByYear+'</td></tr>');
        }

        myChart.data.datasets[0].data.push(investmentTotalByYear);      
        myChart.update();

    });
});