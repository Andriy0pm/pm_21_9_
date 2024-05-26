$(document).ready(function(){
    $.getJSON("data.json", function (data){
        let data_v = '';
        $.each(data, function (key, value){
            data_v += '<div class="nav__bottom_point ">';
            data_v += '<div class="nav_circle '+value.class+'">';
            data_v += '</div>';
            data_v += '<div class="nav__bottom_point_text">'+value.text+'</div>';
            data_v += '</div>';
        });
        $('#nav__bottom_points_wrap').append(data_v);
    });
});


// Елементи за їх id
var votePercentageElement = document.getElementById("votePercentage1");
var votePercentage1Element = document.getElementById("votePercentage2");
var votePercentage2Element = document.getElementById("votePercentage3");
var votePercentage3Element = document.getElementById("votePercentage4");
var voteButtonElement = document.getElementById("voteButton");

// Початкове значення голосів
var votesInt = 75;
var votesInt2 = 25;
var votes = 9832;

// Діаграма
var ctx = document.getElementById('myPieChart').getContext('2d');
var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        datasets: [{
            data: [votesInt, votesInt2], // Початкові дані для секторів
            backgroundColor: ['#803ce2', '#373555'], // Колір секторів
            borderWidth: 0,
        }]
    },
    options: {

    }
});

// Зміна довжин ліній
var lineElemento = document.getElementById('dynamicLine_orange');
    function setLineoLength(newLength) {
        lineElemento.style.width = newLength;
    }

var lineElementp = document.getElementById('dynamicLine_purple');
function setLinepLength(newlength){
    lineElementp.style.width = newlength;
}

// Функція яка викликається при натисканні на кнопку "Vote"

function vote() {
    
        var imageElement = document.getElementById('image1');
        
        
        if (imageElement && imageElement.src.endsWith('img/line-chart-check.svg')) {
            if (votesInt < 100) {
                votesInt++;
            }
        }else{
                if(votesInt>0){
                    votesInt--;
                }
            }
               
    votes++
    votesInt2 = 100 - votesInt;

    if(votesInt>votesInt2){
        voted=votesInt;
    }else{
        voted=votesInt2;
    }

    // Оновлюємо даних в діаграмі
    myPieChart.data.datasets[0].data = [votesInt, votesInt2];

    // Оновлення текстових значень відсотків та голосів
    votePercentageElement.textContent = votesInt + "%";
    votePercentage1Element.textContent = voted + "%";
    votePercentage3Element.textContent = votesInt2 + "%";
    votePercentage2Element.textContent = votes + " Votes";

    setLineoLength(votePercentageElement.textContent);
    setLinepLength(votePercentage3Element.textContent);

    // Оновленя діаграми
    myPieChart.update();
}





