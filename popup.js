// JavaScript source code
document.addEventListener('DOMContentLoaded', documentEvents, false);

//asdfghjklkjhgfdsasdfghjklkjhgfdsdfghjkjhgfdsasdfghjklkjhgfdsdfghjkl


    var a = 0;
    var l = 0;
    function Randomizer() {
    }
    function Randomizer(amount) {
        a = amount;
        l = Math.floor(Math.random() * 7 + 2);
        console.log(a+" 1 "+l);
        Assemble();
    }
    /*function Randomizer(length, amount) {
        a = amount;
        l = length - 1;
        console.log(a + " 2 " + l);
        Assemble();
    }*/
    function Assemble(){
        for (var cnt = 0; cnt < a; cnt++){
        l = Math.floor(Math.random() * 7 + 2);
        var result = firstLetter(50);
        //System.out.println("Fir "+result);
        for (var i = 0; i < l; i++){
            result += nextLetters(20);
            //System.out.println("Next "+result);
        }
        console.log(result);
        document.getElementById("list").innerHtml += "\n"+result+"";
    }
}
	function firstLetter(per){
    var r = Math.floor(Math.random() * 101);
    var sum = "";
    do {
        var let = Math.floor(Math.random() * 26 + 65);
        if (r < per) {
            //System.out.print(sum.length);
            if ((let == 65) || (let == 69) || (let == 73) || (let == 79) || (let == 85)) {
                sum = String.fromCharCode(let);

                //System.out.print("how");
            }
        }
        else if (r >= per) {
            //System.out.println("retarted "+ let);
            sum = String.fromCharCode(let);
        }
    } while (sum.length == 0);
    return sum;
}
	function nextLetters(per){
    var r = Math.floor(Math.random() * 101);
    var sum = "";
    do {
        var let = Math.floor(Math.random() * 26 + 97);
        if (r < per) {
            if ((let == 97) || (let == 101) || (let == 105) || (let == 111) || (let == 117)) {
                sum = String.fromCharCode(let);
            }
        }
        else if (r >= per) {
            sum = String.fromCharCode(let);
        }
    } while (sum.length == 0);
    return sum;
}











//asdfghjklkjhgfdsasdfghjklkjhgfdsadfghjklkjhgtfrdsdfghjkl;

function documentEvents() {
    document.getElementById('button').addEventListener('click',
        function () {
            console.log("inside");
            Randomizer(document.getElementById('amt').value);

        });
    
}

