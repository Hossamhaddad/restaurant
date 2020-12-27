var stars=prompt('What star rating would you give our menu, 1-5?');

 function userTime(star_rate){
  for(i=1; i<=star_rate; i++){
        document.write('<p>' + i +  '</p>' + '<img src="menu-3.jpg" alt="" width="200" height="200">')
            }
 }  
 userTime(stars);
       