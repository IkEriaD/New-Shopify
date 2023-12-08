      // ::::::::::::: Dropdown menu Javascript ::::::::::::::::::
      let subMenu = document.getElementById("subMenu");

      function toggleMenu() {
        subMenu.classList.toggle("open-menu");
      }

      // :::::::::::::::: Dropdown Bell Javascript ::::::::::::::::::::::::
      let subBell = document.getElementById("subBell");

      function toggleBell() {
        subBell.classList.toggle("open-bell");
      }


// ::::::::::::::::::::::: Select a plan Dismissal button ::::::::::::::::::::: 
const subPlan = document.querySelector('.sub-plan');
const dismissBtn = document.querySelector('.dismiss-btn');

dismissBtn.onclick = () => {
  subPlan.style.display = 'none';
}


// ::::::::::::::::::::: Dropdown Options ::::::::::::::::::::: 
function show(anything) {
    document.querySelector('.textBox').value = anything
  }
  
  let dropdown = document.querySelector('.dropdown');
  dropdown.onclick = function() {
    dropdown.classList.toggle('active');
  }



// ::::::::::::::: Accordion Options ::::::::::::::::: 

var lastOpenedStep = null;

function toggleAccordion(step, element) {
  var content = document.getElementById(step);
  var checkbox = element.querySelector('.checkbox');

  // If the clicked step is already open, do nothing
  if (lastOpenedStep === step) {
    return;
  }

  // Close the previously opened step
  if (lastOpenedStep !== null) {
    document.getElementById(lastOpenedStep).style.display = 'none';
  }

  // Toggle the selected step
  if (content.style.display === 'block') {
    content.style.display = 'none';
    checkbox.checked = false;
  } else {
    content.style.display = 'block';
    checkbox.checked = true;
    lastOpenedStep = step;

    // Trigger the updateProgress function with the current step
    updateProgress(step);
  }
}

function updateProgress() {
  var checkboxes = document.querySelectorAll('.checkbox');
  var progressBar = document.getElementById('progressBar');
  var completedSteps = 0;

  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      completedSteps++;
    }
  });

  var progressPercentage = (completedSteps / checkboxes.length) * 100;
  progressBar.style.width = progressPercentage + '%';
}

