
 $.ajax({
    url: 'https://ga-cat-rescue.herokuapp.com/api/cats',
    method: 'get',
    dataType: 'json',
    success: (function (data) {
    	data.forEach(function(el) {
    		$('#cats').append("<li>" + el.name + " - " + el.note + "</li>");
    	});
    })
 });

$("form").on("submit", function(event){
	event.preventDefault();
});

//var newCat = 
 //  }).done(function(data){
 //  });
 // });

 // $("li").each(function() {

 // })
 

  // $.ajax({
  //   url: 'https://ga-cat-rescue.herokuapp.com/api/cats/2',
  //   method: 'PUT',
  //   dataType: 'json',
  //   contentType: 'application/json',
  //   data: '{"id": 1, "name": "Captain Meowington", "note": "This cat gets stuff done."}',
  // }).done(function(data){
  //   console.log(data);
  // });

  // Add a new cat to the list with name and note
  // var cat = {
  //   "name": "Caturnalia",
  //   "note": "Like Christmas but better!"
  // };

  // $.post('https://ga-cat-rescue.herokuapp.com/api/cats', JSON.stringify(cat))
  //   .done(function(data){
  //     console.log("Kitty was added");
  //   });
// 
// var listCats= $.get('https://ga-cat-rescue.herokuapp.com/api/cats')
// 	.done(function(data) {
// 		$("#cats").append("<li>",data);
// 	});

// $.ajax({url:'https://ga-cat-rescue.herokuapp.com/api/cats', success: function(results){
//     $("#li").html(results);
// }});


