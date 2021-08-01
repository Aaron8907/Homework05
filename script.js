var timeDisplayEl = $('#currentDay');
var containerEL = $('.container');

function displayTime() {
    var rightNow = moment().format('dddd, MMMM Do');
    timeDisplayEl.text(rightNow);
  }

function hourlyScheduleAm(){
  for (var i= 8; i< 12; i++) {
    var hourEL=$('<div>');
    hourEL.addClass('input-group');
    hourEL.addClass('mb-3');
    containerEL.append(hourEL);
    var hourLabelEl=$('<label>');
    hourLabelEl.attr('for','inputEmail3');
    hourLabelEl.addClass('col-sm-2');
    hourLabelEl.addClass('col-form-label');
    hourLabelEl.text( i + ' AM');
    hourEL.append(hourLabelEl);
    var inputEL=$('<input>');
    inputEL.attr('type','text');
    inputEL.css('background','#7FFF00');
    inputEL.addClass('form-control');
    inputEL.addClass('input'+i);
    inputEL.attr('placeholder',"Recipient's");
    inputEL.attr('placeholder',"Activity");
    inputEL.attr('aria-label',"Recipient's");
    inputEL.attr('aria-label',"Activity");
    inputEL.attr('aria-describedby',"button-addon2");
    inputEL.attr('id','input'+i);
    hourEL.append(inputEL);
    var buttonEL=$('<button>');
    buttonEL.addClass('btn');
    buttonEL.addClass('btn-outline-secondary');
    buttonEL.attr('type','button');
    buttonEL.attr('id','button-addon2');
    buttonEL.attr('id','button'+i);
    buttonEL.text("💾");
    hourEL.append(buttonEL);
    }

  };

function hourlySchedule(){
  for (var i= 12; i< 13; i++) {
    var hourEL=$('<div>');
    hourEL.addClass('input-group');
    hourEL.addClass('mb-3');
    containerEL.append(hourEL);
    var hourLabelEl=$('<label>');
    hourLabelEl.attr('for','inputEmail3');
    hourLabelEl.addClass('col-sm-2');
    hourLabelEl.addClass('col-form-label');
    hourLabelEl.text( i + ' PM');
    hourEL.append(hourLabelEl);
    var inputEL=$('<input>');
    inputEL.attr('type','text');
    inputEL.css('background','#7FFF00');
    inputEL.addClass('form-control');
    inputEL.addClass('input'+i);
    inputEL.attr('placeholder',"Recipient's");
    inputEL.attr('placeholder',"Activity");
    inputEL.attr('aria-label',"Recipient's");
    inputEL.attr('aria-label',"Activity");
    inputEL.attr('aria-describedby',"button-addon2");
    inputEL.attr('id','input'+i);
    hourEL.append(inputEL);
    var buttonEL=$('<button>');
    buttonEL.addClass('btn');
    buttonEL.addClass('btn-outline-secondary');
    buttonEL.attr('type','button');
    buttonEL.attr('id','button-addon2');
    buttonEL.attr('id','button'+i);
    buttonEL.text("💾");
    hourEL.append(buttonEL);
  }
}

function hourlySchedulePm(){
  for (var i= 1; i<5 ; i++) {
    var hourEL=$('<div>');
    hourEL.addClass('input-group');
    hourEL.addClass('mb-3');
    containerEL.append(hourEL);
    var hourLabelEl=$('<label>');
    hourLabelEl.attr('for','inputEmail3');
    hourLabelEl.addClass('col-sm-2');
    hourLabelEl.addClass('col-form-label');
    hourLabelEl.text( i + ' PM');
    hourEL.append(hourLabelEl);
    var inputEL=$('<input>');
    inputEL.attr('type','text');
    inputEL.css('background','#7FFF00');
    inputEL.addClass('form-control');
    inputEL.addClass('input'+i);
    inputEL.attr('placeholder',"Recipient's");
    inputEL.attr('placeholder',"Activity");
    inputEL.attr('aria-label',"Recipient's");
    inputEL.attr('aria-label',"Activity");
    inputEL.attr('aria-describedby',"button-addon2");
    inputEL.attr('id','input'+i);
    hourEL.append(inputEL);
    var buttonEL=$('<button>');
    buttonEL.addClass('btn');
    buttonEL.addClass('btn-outline-secondary');
    buttonEL.attr('type','button');
    buttonEL.attr('id','button-addon2');
    buttonEL.attr('id','button'+i);
    buttonEL.text("💾");
    hourEL.append(buttonEL);
  }
}

function hourlyBlock(){
     var hour=12
     var pmAM="pm"
    //  var hour=moment().format('h');
    //  var pmAM=moment().format('a');

  console.log(pmAM)
  for (var i = 8; i < 13; i++) {
    if(hour>i-1 && pmAM==="am"){
      var inputI=$('.input'+i)
      inputI.css('background','grey')
    }
    if(hour===i && pmAM==="am"){
      var inputI=$('.input'+i)
      inputI.css('background','red')
    }
  }

  for (var i = 1; i < 5; i++) {
    if(hour>i-1 && pmAM==="pm"){
      var input12=$('.input12')
      input12.css('background','grey')
      var inputI=$('.input'+i)
      inputI.css('background','grey')
      var inputI8=$('.input8')
      inputI8.css('background','grey')
      var inputI9=$('.input9')
      inputI9.css('background','grey')
      var inputI10=$('.input10')
      inputI10.css('background','grey')
      var inputI11=$('.input11')
      inputI11.css('background','grey')
    }
    if(hour===i && pmAM==="pm"){
      var inputI=$('.input'+i)
      inputI.css('background','red')
    }
    if(hour===12 && pmAM!="am"){
      var inputI12=$('.input12')
      inputI12.css('background','red')
      var inputI1=$('.input1')
      inputI1.css('background','#7FFF00')
      var inputI2=$('.input2')
      inputI2.css('background','#7FFF00')
      var inputI3=$('.input3')
      inputI3.css('background','#7FFF00')
      var inputI4=$('.input4')
      inputI4.css('background','#7FFF00')
    }
    
  }

}


  


function saveBlock(){
  var saveButton =$('#button8')
  saveButton.on('click',function(){
   var inputInfo=$('.input8').val();
   localStorage.setItem("activity8",inputInfo)})

   var saveButton =$('#button9')
  saveButton.on('click',function(){
   var inputInfo=$('.input9').val();
   localStorage.setItem("activity9",inputInfo)})

   var saveButton =$('#button10')
  saveButton.on('click',function(){
   var inputInfo=$('.input10').val();
   localStorage.setItem("activity10",inputInfo)})

   var saveButton =$('#button11')
  saveButton.on('click',function(){
   var inputInfo=$('.input11').val();
   localStorage.setItem("activity11",inputInfo)})

   var saveButton =$('#button12')
  saveButton.on('click',function(){
   var inputInfo=$('.input12').val();
   localStorage.setItem("activity12",inputInfo)})

   var saveButton =$('#button1')
  saveButton.on('click',function(){
   var inputInfo=$('.input1').val();
   localStorage.setItem("activity1",inputInfo)})

   var saveButton =$('#button2')
  saveButton.on('click',function(){
   var inputInfo=$('.input2').val();
   localStorage.setItem("activity2",inputInfo)})

   var saveButton =$('#button3')
  saveButton.on('click',function(){
   var inputInfo=$('.input3').val();
   localStorage.setItem("activity3",inputInfo)})

   var saveButton =$('#button4')
  saveButton.on('click',function(){
   var inputInfo=$('.input4').val();
   localStorage.setItem("activity4",inputInfo)})
  }

  function renderLastRegistered(){
    var activity1=localStorage.getItem("activity1");
    console.log(activity1);
    var inputTT=$("#input1");
    inputTT.textcontent = activity1;
    console.log(inputTT);
  }
    



hourlyScheduleAm()
hourlySchedule()
hourlySchedulePm()
hourlyBlock()
saveBlock()
renderLastRegistered();





  setInterval(displayTime, 1000);

