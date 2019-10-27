




//$("#cmd").click(function(){alert("pressed")});
//$(document).ready(function(){var specialElementHandlers = {
//      "#editor":function(element,renderer){
//          return true;
//                                          }
//      
//                                } }); 
   
    
//    
   $("#cmd").click(function(){
    
var doc = new jspdf();
       doc.fromHTML($("#target").get(0),15,15,{"width":170});
//       doc.fromHTML($("#target").html(),15,15,{"width":170, "elementHandlers":specialElementHandlers});
//       
     doc.save("sample-file.pdf");
    
                          });


