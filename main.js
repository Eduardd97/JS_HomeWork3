
document.addEventListener("DOMContentLoaded", function(){
    const NumberUserText = document.querySelector(".number_text")
    const SendButton = document.querySelector(".send")
    const SumNumberUserSendLine = document.querySelector(".sum_number_line")
    
    SendButton.addEventListener("click", function () {
        const userEnteredtext = NumberUserText.value;
    
        function CalculateSumDigits(text) {
            let sum = 0;
            for (let i = 0; i < text.length; i++) {
                const digit = parseInt(text.charAt(i));
                if (!isNaN(digit)) {
                    sum += digit;
                }
            }
            return sum;
    
        }
        const sumofDigits = CalculateSumDigits(userEnteredtext);
        console.log (sumofDigits)
        
        const SumGreaterThanLength = sumofDigits > userEnteredtext.length;
        console.log(SumGreaterThanLength);

        if (sumofDigits > userEnteredtext.length) {
            SumNumberUserSendLine.textContent = `Сума цифр більша за довжину тексту: ${sumofDigits} > ${userEnteredtext.length}`;
        } else {
            SumNumberUserSendLine.textContent = `Сума цифр не більша за довжину тексту: ${sumofDigits} <= ${userEnteredtext.length}`;
        }
        
        NumberUserText.value = "";
    });   
})


