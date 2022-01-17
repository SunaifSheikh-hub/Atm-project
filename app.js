// default funtion for whole ATM Task
const atmFunc = () => {
    // for getting the input and preference values 
    reqAmountINPUT = document.getElementById("reqAmount").value;
    reqAmountINPUT = Number(reqAmountINPUT);
    prefer = document.getElementById("ReqPrefer").value;
    prefer = Number(prefer);
    noOfPrefer = null

//  declaring the types of notes 
    let notesarray = [500, 100, 50, 20, 10, 5, 1];

    for (let i = 200; i > 0; i--) {
        if (reqAmountINPUT / prefer >= i) {
            reqAmountINPUT -= prefer * i;
            noOfPrefer = i
            break
        }
    }
// for limiting the number of prefer notes 
    for (var i = 0; i < notesarray.length; i++) {
            if (notesarray[i] === prefer) {
            let fordiv = document.getElementById("context")
            let newin = document.createElement("p")
            newin.innerHTML = `${notesarray[i]}  No. Of Notes : ${noOfPrefer} <br>  Balance Amount :   ${reqAmountINPUT}`
            fordiv.appendChild(newin);
        }
        else{
            qty = Math.floor(reqAmountINPUT / notesarray[i]);
            reqAmountINPUT -= qty * notesarray[i];
            let fordiv = document.getElementById("context")
            let newin = document.createElement("p")
            newin.innerHTML = `${notesarray[i]}  No. Of Notes : ${qty} <br>  Balance Amount :   ${reqAmountINPUT}`
            fordiv.appendChild(newin);
        }
    }
}
