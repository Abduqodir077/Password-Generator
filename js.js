let password = document.getElementById("password");

function getPassword(){
    let chars = "03S12#3gWEFyf1@212%vg32FDShgv3@2h&WERGWR23chg3*23D23!";
    let passwordLength = 8;
    let password = "";

    for (let i = 0; i <= passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
    }

    //now apply it

    document.getElementById("password").value = password;

    // copy button

    function copyPassword(){
        let copyText = document.getElementById("password");
        copyText.select();
        copyText.setSelectionRange(0,999);
        document.execCommand("copy");
    }
}

