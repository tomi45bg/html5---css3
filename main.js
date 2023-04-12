const phm = ["Pretty", "Hate", "Machine", "Pretty Hate", "Hate Machine",
 "Pretty Hate Machine", "pretty", "machine"];

const broken = ["broken", "Broken"];

const downwardSpiral = ["The Downward", "Downward", "Spiral", "The Downward Spiral",
"downward", "spiral"]

const theFragile = ["The Fragile", "the Fragile", "fragile", "Fragile",
"the", "the fragile"]

const withTeeth = ["With Teeth", "With", "with", "teeth"]

const yearZero = ["Year Zero", "year", "zero", "year zero"]

const ghosts14 = ["ghosts", "ghosts1", "1-4"]

const theSlip = ["The Slip", "Slip", "slip"]

const hesitationMarks = ["hesitation", "hesitation marks", "marks",
"Hesitation", "Marks", "Hesitation Marks"]

const actualEvents = ["not", "actual", "events", "Not the Actual Events"]

const violence = ["add", "violence", "Add Violence"]

const badWitch = ["bad", "witch", "Bad Witch"]

const ghost5 = ["ghost5", "together"]

const ghost6 = ["ghost6", "locusts"]


let inputVa

function getInputValue() {
     inputVa = document.getElementsByClassName("center-textbar")[0].value;
     console.log(inputVa);


     for(let i = 0; i < phm.length; i++){
          if (inputVa == phm[i]){
               window.location.href = "phm.html";
          }

          if (inputVa == broken[i]){
               window.location.href = "broken.html";
          }

          if (inputVa == downwardSpiral[i]){
               window.location.href = "downwardSpiral.html";
          }

          if (inputVa == theFragile[i]){
               window.location.href = "fragile.html";
          }

          if (inputVa == withTeeth[i]){
               window.location.href = "withTeeth.html";
          }

          if (inputVa == yearZero[i]){
               window.location.href = "year_zero.html";
          }

          if (inputVa == ghosts14[i]){
               window.location.href = "ghosts.html";
          }

          if (inputVa == theSlip[i]){
               window.location.href = "the_slip.html";
          }

          if (inputVa == hesitationMarks[i]){
               window.location.href = "hesitation.html";
          }

          if (inputVa == actualEvents[i]){
               window.location.href = "events.html";
          }

          if (inputVa == violence[i]){
               window.location.href = "violence.html";
          }

          if (inputVa == badWitch[i]){
               window.location.href = "witch.html";
          }

          if (inputVa == ghost5[i]){
               window.location.href = "together.html";
          }

          if (inputVa == ghost6[i]){
               window.location.href = "locusts.html";
          }
     }

}