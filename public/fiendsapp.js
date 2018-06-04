

$.get('/hello/elma/thing2').then(function(res) { 
    console.log(res) 
});

$.ajax({
    method: 'POST',
    url: '/api/test',
    contentType: 'application/json',
    data: JSON.stringify({
        name:'Kim'
    })
  }).done(function(res) { 
      console.log(res) 
    });