function calculateAge(birthMonth, birthDay, birthYear) {
    todayDate = new Date();
    todayYear = todayDate.getFullYear();
    todayMonth = todayDate.getMonth();
    todayDay = todayDate.getDate();
    age = todayYear - birthYear;

    if (todayMonth < birthMonth - 1) {
        age--;
    }

    if (birthMonth - 1 == todayMonth && todayDay < birthDay) {
        age--;
    }


    return age;
}

function yasTablosu(Gelenyas) {

    var Icon;

    //Yaş a göre ekrana bastırılacak icon u (emoji) belirliyoruz
    if (Gelenyas >= 0 && Gelenyas <= 17) {
        Icon = "🌱";
    } else if (Gelenyas >= 18 && Gelenyas <= 65) {
        Icon = "🌳";
    } else if (Gelenyas >= 66 && Gelenyas <= 99) {
        Icon = "👴";
    } else {
        Icon = "";
    }

    return Icon;
}



function hesapla() {
    //inputtan gelen veriyi yakaladık
    var date = document.getElementById("date").value;

    // date inputundan gelen veriyi parçaladık
    var dateYear = date.split("/");

    // calculateAge fonksiyonu ile parçakadıgımız veri ile yaş hesaplaması yaptık
    // calculateAge(ay, gün, yıl)
    yas = calculateAge(dateYear[0], dateYear[1], dateYear[2]);

    // yasTablosu fonksiyonuna yas verisini ilettik 
    Icongoster = yasTablosu(yas);




    //Gelen yaş degerinin geçerli olup olmamasını kontrol ediyoruz
    if (Math.sign(yas) === -1) {
        document.getElementById("yasSonuc").innerHTML = "Doğmamış Olmalısın!";
    } else if (isNaN(yas)) {
        document.getElementById("yasSonuc").innerHTML = "Hata!";
    } else {
        // yasSonuc id degerinde ki elemente hesaplama sonucumuzu yazdırdık
        document.getElementById("yasSonuc").innerHTML = yas + " Yaşındasın";
    }

    // yasTablosu dan gelen duruma göre icon u ekrana bastırdık
    document.getElementById("yasIcon").innerHTML = Icongoster;
}
