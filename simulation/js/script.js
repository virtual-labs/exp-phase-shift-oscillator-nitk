let hvoltage = 0;
let blurr;
let ibtable;
let ibrow;
let ibXarray = [];
let magcount = -1;
let tfreq;
let pfreq;
let cap;
let res;
let err;
let pcheck;
let Rf;

function blurring() {
    if (blurr == true) {
        document.getElementById("simoptions").style.filter = 'blur(2px)';
        document.getElementById("mainsimulation").style.filter = 'blur(2px)';
        document.getElementById("buttondown").style.filter = 'blur(2px)';
    } else if (blurr == false) {
        document.getElementById("simoptions").style.filter = 'blur(0px)';
        document.getElementById("mainsimulation").style.filter = 'blur(0px)';
        document.getElementById("buttondown").style.filter = 'blur(0px)';
    }
}

// Next button
let a = 1;

function up() {
    a += 1;
    next()
}

function down() {
    a -= 1;
    next()
}

function next() {
    if (a == 1) {
        document.getElementById("buttondown").style.display = 'none';
        document.getElementById("buttonup").style.display = 'block';
        document.getElementById("content").style.display = 'block';
        document.getElementById("content2").style.display = 'none';
    } else if (a == 2) {
        document.getElementById("buttondown").style.display = 'block';
        document.getElementById("content").style.display = 'none';
        document.getElementById("content2").style.display = 'block';
        document.getElementById("content3").style.display = 'none';
        document.getElementById("buttonup").style.display = 'none';
        document.getElementById("observation").style.display = 'none';
    } else if (a == 3) {
        document.getElementById("buttonup").style.display = 'none';
        document.getElementById("content2").style.display = 'none';
        document.getElementById("content3").style.display = 'block';
        closeobservation();
        plotting();
    }
}

// procedure selection
function update() {
    let select = document.getElementById('exp');
    let option = select.options[select.selectedIndex].value;

    if (option == 'bjt') {
        document.getElementById("insert").innerHTML = 'Turn on';
        document.getElementById("remove").innerHTML = 'Turn off';

        document.getElementById("ibjt").style.display = 'block';
        document.getElementById("ibjt1").style.display = 'none';
        document.getElementById("iopamp").style.display = 'none';
        document.getElementById("iopamp1").style.display = 'none';
        document.getElementById("resvalue").disabled = false;
        document.getElementById("capvalue").disabled = false;
        document.getElementById("insert").disabled = true;

        pcheck= true;
        clearing();
        remove();

    } else if (option == 'opamp') {
       // document.getElementById("Rfvalue").style.display="none";
        document.getElementById("insert").innerHTML = 'Turn on';
        document.getElementById("remove").innerHTML = 'Turn off';
        document.getElementById("observationbutton").disabled = true;

        document.getElementById("iopamp").style.display = 'block';
        document.getElementById("ibjt").style.display = 'none';
        document.getElementById("ibjt1").style.display = 'none';
        document.getElementById("iopamp1").style.display = 'none';

        document.getElementById("resvalue").disabled = false;
        document.getElementById("capvalue").disabled = false;
        document.getElementById("insert").disabled = true;

        pcheck=false;
        clearing();
        remove()
    }
}


// sensor/probe button
function insert() {
    document.getElementById("insert").style.display = 'none';
    document.getElementById("remove").style.display = 'block';
    document.getElementById("view").style.display='block';
    document.getElementById("addbutton").disabled = false;
    document.getElementById("observationbutton").disabled = false;
    document.getElementById("resvalue").disabled = true;
    document.getElementById("capvalue").disabled = true;

   // document.getElementById("Rfvalue").style.display="block";
   // document.getElementById("Rfvalue").innerHTML="Rf="+Rf+"kΩ";

    if (pcheck==true) {
        document.getElementById("ibjt1").style.display = 'block';
        document.getElementById("ibjt").style.display = 'none';
        document.getElementById("iopamp").style.display = 'none';
        document.getElementById("iopamp1").style.display = 'none';

        document.getElementById("view").style.display = 'block';

    } else if (pcheck==false) {
        document.getElementById("ibjt").style.display = 'none';
        document.getElementById("ibjt1").style.display = 'none';
        document.getElementById("iopamp").style.display = 'none';
        document.getElementById("iopamp1").style.display = 'block';

        document.getElementById("view").style.display='block';
    }
}

function remove() {
    document.getElementById("remove").style.display = 'none';
    document.getElementById("insert").style.display = 'block';

    document.getElementById("view").style.display='none';

   // document.getElementById("observationbutton").disabled = true;
    document.getElementById("addbutton").disabled = true;

    document.getElementById("resvalue").disabled = false;
    document.getElementById("capvalue").disabled = false;
    //document.getElementById("Rfvalue").style.display="block";
   // document.getElementById("Rfvalue").innerHTML=Rf+" kΩ";

    if (pcheck==true) {
        document.getElementById("ibjt").style.display = 'block';
        document.getElementById("ibjt1").style.display = 'none';
        document.getElementById("iopamp").style.display = 'none';
        document.getElementById("iopamp1").style.display = 'none';

    } else if (pcheck==false) {
        document.getElementById("ibjt").style.display = 'none';
        document.getElementById("ibjt1").style.display = 'none';
        document.getElementById("iopamp").style.display = 'block';
        document.getElementById("iopamp1").style.display = 'none';
    }
}



function calculate() {
    if(option = "opamp")
    {
        tfreq= 1/((2*Math.PI*res*cap)*(Math.pow(6,0.5)));
        tfreq= parseFloat( tfreq.toFixed(4));
        let val= tfreq*0.1;
        pfreq= practfreq(tfreq-val, tfreq+val);
        pfreq = parseFloat(pfreq.toFixed(4));
        err = (pfreq-tfreq)*100/pfreq;
        err = err.toFixed(2)
        document.getElementById("finalresult").disabled = false;
    }
    else if(option = "bjt")
    {
        tfreq= 1/((2*Math.PI*res*cap)*(Math.pow(6,0.5)));
        tfreq= parseFloat( tfreq.toFixed(4));
        let val= tfreq*0.1;
        pfreq= practfreq(tfreq-val, tfreq+val);
        pfreq = parseFloat(pfreq.toFixed(4));
        err = (pfreq-tfreq)*100/pfreq;
        err = err.toFixed(2)
        document.getElementById("finalresult").disabled = false;
    }
}

function Refresh() {
    window.location = window.location.href;
};

function openobservation() {
    document.getElementById("IBobservation").style.display = 'block';
    document.getElementById('blocker').style.display = 'block';
    blurr = true;
    blurring();
}

function closeobservation() {
    document.getElementById("IBobservation").style.display = 'none';
    blurr = false;
    blurring();
    document.getElementById('IBgraph').style.display = 'none';
    document.getElementById('blocker').style.display = 'none';
    document.getElementById('myChart').style.display = 'none';
    document.getElementById('instructions').style.display = 'none';
}

function AddingToArray() {
        ibXarray.push(parseFloat(cap));
        ibXarray.push(parseFloat(res));
        ibXarray.push(pfreq);
        ibXarray.push(tfreq);
        ibXarray.push(err);
        document.getElementById('add').style.display = 'block';
        setTimeout(timer, 2000);
        addobservation();
}


function addobservation() {
        magcount += 1;
        ibtable = document.getElementById("IBobservationTable");
        ibrow = ibtable.insertRow(magcount + 1);
        let cell1 = ibrow.insertCell(0);
        let cell2 = ibrow.insertCell(1);
        let cell3 = ibrow.insertCell(2);
        let cell4 = ibrow.insertCell(3);
        let cell5 = ibrow.insertCell(4);
        cell1.innerHTML = ibXarray[ibXarray.length - 5];
        cell2.innerHTML = ibXarray[ibXarray.length - 4];
        cell3.innerHTML = ibXarray[ibXarray.length - 3];
        cell4.innerHTML = ibXarray[ibXarray.length - 2];
        cell5.innerHTML = ibXarray[ibXarray.length - 1];
}


function clearing() {
        for (var i = 1; i < ibtable.rows.length;) {
            ibtable.deleteRow(i);
        }
        magcount = -1;
        ibXarray.length = 0;
        document.getElementById("finalresult").disabled = true;
        document.getElementById('tfreq').innerHTML = null;
        document.getElementById('pfreq').innerHTML = null;

}


function timer() {
    document.getElementById('add').style.display = 'none';
}
function timeres() {
    document.getElementById('addres').style.display = 'none';
}
function timecap() {
    document.getElementById('addcap').style.display = 'none';
}

function disres(){
    document.getElementById('addres').style.display = 'block';
    setTimeout(timeres, 1000);
}
function discap(){
    document.getElementById('addcap').style.display = 'block';
    setTimeout(timecap, 1000);
}

// Function to generate practical frequency
function practfreq(min, max) {
    return Math.random() * (max - min) + min;
}
  
function IBgraph() {
    document.getElementById('IBobservation').style.display = 'none'
    document.getElementById('IBgraph').style.display = 'block'
    document.getElementById('myChart').style.display = 'block'
    document.getElementById('blocker').style.display = 'block';

    var from = -1000; // starting value
    var to = 1000; // ending value
    var step = 0.01; // step size

    var xValues = [];
    for (var i = from; i <= to; i += step) {
      xValues.push(i);
    }
    var yValues = xValues.map(x => equation(x));

    // Define Data
    var data = [{
        x:xValues,
        y:yValues,
        type: 'scatter',
    }];

    // Define Layout
    var layout = {
        width: 700,
        height: 400,
        xaxis: {
            title: "time period(in ms)",
            range: [-0.5,0.5]
        },
        yaxis: {
            title: "Voltage(V)"
        },
        title: "Oscillation"
    };

    // Display using Plotly
    Plotly.newPlot("myChart", data, layout, { displayModeBar: false });
    
}
      
function help() {
    document.getElementById('instructions').style.display = 'block';
    document.getElementById('blocker').style.display = 'block';
}


function fresult() {
    document.getElementById('tfreq').innerHTML = tfreq + " kHz";
    document.getElementById('pfreq').innerHTML = pfreq + " kHz";
}

function storeNumber() {
   res= document.getElementById("resvalue").value;
   Rf=29*res;
   Rf= Rf.toFixed(2);
   cap= document.getElementById("capvalue").value;
   document.getElementById("insert").disabled = false;
   calculate(); 
}

function equation(x) {
    return 5* Math.sin(2 * Math.PI * pfreq * x);
}