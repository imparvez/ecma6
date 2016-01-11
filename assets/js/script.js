function getStudentNameAndTheirMarks(studentInfo) {
  var studentGrandTotal = [];

  studentInfo.forEach(function(info){
    studentGrandTotal.push(info.name+' has a total of '+info.marks);
  });
  
  return studentGrandTotal;
}

var studentTotal = getStudentNameAndTheirMarks([
  {name: 'HHH', marks: 90},
  {name: 'XXX', marks: 190},
  {name: 'UUU', marks: 900}
]);

//alert(studentTotal);

document.write("<ul><li>"+studentTotal[0]+"</li><li>"+studentTotal[1]+"</li><li>"+studentTotal[2]+"</li></ul>")