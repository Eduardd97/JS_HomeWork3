// document.addEventListener("DOMContentLoaded", function(){}это действие срабатывает когда весь HTML-документ был полностью загружен и обработан браузером
// aункцbя что передается в addEventListener для действия DOMContentLoaded, 
// выполняется после того как браузер загрузил HTML но до того как загрузились внешние ресурсы такие как катинки або стили 
document.addEventListener("DOMContentLoaded", function(){
    const NumberUserText = document.querySelector(".number_text")
    const SendButton = document.querySelector(".send")
    const SumNumberUserSendLine = document.querySelector(".sum_number_line")
    
    SendButton.addEventListener("click", function () {
        const userEnteredtext = NumberUserText.value;
    
        // функция что производит расчет суммы каждой цифры в веденной строке пользователем
        function CalculateSumDigits(text) {
            let sum = 0;
            for (let i = 0; i < text.length; i++) {
                const digit = parseInt(text.charAt(i)); 
                if (!isNaN(digit)) {    // isNaN - проводим проверку является ли digit числом если да то добавляем его к sum и если же 
                    sum += digit;       // digit не является числом то просто его игнорируем.
                }
            }
            return sum;
    
        }
        const sumofDigits = CalculateSumDigits(userEnteredtext);
        console.log (sumofDigits)
        
        //возвращаем true когда сума больше за длинну строки
        const SumGreaterThanLength = sumofDigits > userEnteredtext.length;
        console.log(SumGreaterThanLength);

        // функция что возвращает шнвертированое значение Boolean
        function invertBoolean () {
            return !SumGreaterThanLength;    
        }
        console.log(invertBoolean())

        // возвращаем true когда сума больше за длинну строки с текстом и возвращаем folse когда сумма числе меньше или равна длинне строки
        // if (sumofDigits > userEnteredtext.length) {
        //     SumNumberUserSendLine.textContent = `Сума цифр більша за довжину тексту: ${sumofDigits} > ${userEnteredtext.length}`;
        // } else {
        //     SumNumberUserSendLine.textContent = `Сума цифр не більша за довжину тексту: ${sumofDigits} <= ${userEnteredtext.length}`;
        // }
        
        // NumberUserText.value = "";
    });   

})

// parseInt
const str1 = "123456";
const num1 = parseInt(str1); 
console.log (num1)

const str2 = "4abcdef";
const num2 = parseInt(str2); 
console.log (num2)

const str3 = "ab4cdef";
const num3 = parseInt(str3); // num3 містить NaN, не число
console.log (num3)
