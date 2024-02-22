document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('text-div');
    const textToType = 'Password Generator';

    function typeText() {
        textElement.textContent = '';

        function type(index) {
            if (index < textToType.length) {
                textElement.textContent += textToType[index];
                setTimeout(function () {
                    type(index + 1);
                }, 100);
            } else {
                startBlinkingCursor();
            }
        }

        type(0);
    }

    function startBlinkingCursor() {
        const blinkingCursor = document.createElement('span');
        blinkingCursor.textContent = ' | ';
        blinkingCursor.style.animation = 'blinkingCursor 1.5s infinite';
        textElement.appendChild(blinkingCursor);
    }

    typeText();
});

var slider = document.getElementById('slider');
var sliderValue = document.getElementById('sliderValue');

slider.addEventListener('input', function() {
    sliderValue.textContent = slider.value;
});

document.addEventListener('DOMContentLoaded', function () {
    const customCheckboxes = document.querySelectorAll('.custom-checkbox');

    customCheckboxes.forEach(function (checkbox) {
        const parentInputGroupText = checkbox.closest('.input-group-text');
        if (checkbox.checked) {
            parentInputGroupText.style.borderColor = 'rgb(73, 0, 207)';
        }
        
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                parentInputGroupText.style.borderColor = 'rgb(73, 0, 207)';
            } else {
                parentInputGroupText.style.borderColor = '';
            }
        });
    });
});

function copy() {
    var inputElement = document.getElementById('pGenerated');
    inputElement.select();
    inputElement.setSelectionRange(0, 99999);

    document.execCommand('copy');

    inputElement.setSelectionRange(0, 0);

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Copied",
        showConfirmButton: false,
        timer: 1500
      });
}

function pGenerated() {
    const pGenerated = password();

    showPassword(pGenerated);
}

function password() {
    const numbers = document.getElementById('numbers');
    const pNumbers = "0123456789";
    const symbols = document.getElementById('symbols');
    const pSymbols = "!@#$%^&*()_-+=<>?";
    const uppercase = document.getElementById('uppercase');
    const pUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = document.getElementById('lowercase');
    const pLowercase = "abcdefghijklmnopqrstuvwxyz";
    const slider = document.getElementById('slider');
    const pGenerated = document.getElementById('pGenerated');
    
      let characters = '';
      if (numbers.checked) characters += pNumbers;
      if (symbols.checked) characters += pSymbols;
      if (uppercase.checked) characters += pUppercase;
      if (lowercase.checked) characters += pLowercase;
    
      const length = slider.value;
    
      let password = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
      }
    
      pGenerated.value = password;
      
    numbers.addEventListener('change', generatePassword);
    symbols.addEventListener('change', generatePassword);
    uppercase.addEventListener('change', generatePassword);
    lowercase.addEventListener('change', generatePassword);
    slider.addEventListener('input', generatePassword);
}
function showPassword(password) {
    const inputPassword = document.getElementById('pGenerated');
    inputPassword.value = password;
}

var slider = document.getElementById('slider');
var sliderValue = document.getElementById('sliderValue');
var progressBar = document.getElementById('progressBar');
var labelSecurity = document.getElementById('labelSecurity');

slider.addEventListener('input', function () {
    sliderValue.textContent = slider.value;

    updateSecurityLabel();
    updateProgressBar();
});

function updateSecurityLabel() {
    const value = parseInt(slider.value);

    if (value >= 4 && value <= 6) {
        labelSecurity.textContent = 'Weak';
    } else if (value >= 7 && value <= 10) {
        labelSecurity.textContent = 'Good';
    } else if (value >= 11 && value <= 30) {
        labelSecurity.textContent = 'Strong';
    }
}

function updateProgressBar() {
    const value = parseInt(slider.value);

    if (value >= 4 && value <= 6) {
        setProgressBarStyle(25, 'bg-danger');
    } else if (value >= 7 && value <= 10) {
        setProgressBarStyle(50, 'bg-warning');
    } else if (value >= 11 && value <= 30) {
        setProgressBarStyle(100, 'bg-success');
    }
}

function setProgressBarStyle(width, colorClass) {
    progressBar.querySelector('.progress-bar').style.width = `${width}%`;
    progressBar.querySelector('.progress-bar').classList.remove('bg-danger', 'bg-warning', 'bg-success');
    progressBar.querySelector('.progress-bar').classList.add(colorClass);
}