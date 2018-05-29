
function idcard() {
    let Firstname = document.getElementById('Firstname').value;
    let Lastname = document.getElementById('Lastname').value;
    document.getElementById('postFullname').innerHTML = Firstname + ' ' + Lastname;
    
    let postAddress = document.getElementById('Address').value;
    document.getElementById('postAddress').innerHTML = postAddress;

    let age = document.getElementById('Age').value;
    document.getElementById('age').innerHTML = age;
    
    let phoneNumber = document.getElementById('number').value;
    document.getElementById('phoneNumber').innerHTML = phoneNumber;

let numberArray= [age, phoneNumber];  
    numberArray.push(age);
    numberArray.push(phoneNumber);

    for (let i = 0;i < numberArray.length; i++) 
    
        if (numberArray[i] <=100)
            document.getElementById('postAge').innerHTML = 'Age: '+age;
        if (numberArray[i] >100)
            document.getElementById('postPhoneNumber').innerHTML = 'Phone Number: '+phoneNumber;

}


