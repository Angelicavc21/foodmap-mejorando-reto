

// Obteniendo información
var container = $('.row');
var modal = $('.modal');
// Función que muestra todos los restaurantes
function allFood() {
  for (i = 0; i < data.length; i++) {
    container.append('<div class="col-xs-5 col-md-2 box-restaurant collection" ><p class="name-restaurant">' + data[i].name + '</p><img class="img-restaurant"  src=' + data[i].image + '><div class="opacity"></div> </div>');
  }
}
// Ejecutando la función al iniciar
allFood();

// Filtrando por Nombre 
$('.search').keyup(function() {
  var name = $(this).val();
  $('.collection').hide();
  $('.collection').each(function() {
    var search = $(this).text();
    if (search.indexOf(name) !== -1) {
      $(this).show();
    }
  });
});

/* Filtrando por tipo */

$('#food').change(function() {
  var selectedOption = $('#food option:selected');
  $('.collection').remove();
  if (selectedOption.val() === 'fish') {
    create('fish');
  }

  if (selectedOption.val() === 'chicken') {
    create('chicken');
  }

  if (selectedOption.val() === 'china') {
    create('china');
  }

  if (selectedOption.val() === 'italiana') {
    create('italiana');
  }

  if (selectedOption.val() === 'all') {
    allFood();
  }
});

/* Función que filtra por tipo de comida */
function create(food) {
  var type = [];
  for (j = 0; j < data.length; j++) {
    if (data[j].type === food) {
      type.push(data[j]);
    }
  }
  for (k = 0; k < type.length; k++) {
    container.append('<div class="col-xs-5 col-md-2 box-restaurant collection" ><p class="name-restaurant">' + type[k].name + '</p><img class="img-restaurant"  src=' + type[k].image + '><div class="opacity"></div> </div>');
  }
}

