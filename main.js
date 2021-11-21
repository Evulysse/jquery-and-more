$("body").append("<div id ='div'></div>");
const div = $("div");
 div.text("hello world!");
 div.click(
     function() {
         alert("Hello, world!");
     }
 );
 