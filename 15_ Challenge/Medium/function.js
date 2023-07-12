function harfBul() {
    var metin = document.getElementById("metinInput").value;
    var charCount = {};


    for (var i = 0; i < metin.length; i++) {
        var letter = metin[i].toLowerCase();

        // Harfleri kontrol yapıyoruz
        if (/[a-z]/.test(letter)) {
            // Harf zaten charCount nesnesinde mevcutsa, sayısını artırıyoruz
            if (charCount[letter]) {
                charCount[letter]++;
            } else {
                // Harf charCount nesnesinde yoksa, 1 olarak başlatıyoruz
                charCount[letter] = 1;
            }
        }
    }

    var mostRepeatedLetter = "";
    var highestCount = 0;

    // charCount nesnesini döngüye alarak en çok tekrar eden harfi buluyoruz
    for (var letter in charCount) {
        if (charCount[letter] > highestCount) {
            mostRepeatedLetter = letter;
            highestCount = charCount[letter];
        }
    }

    // Harf ve tekrar sayısı sonuc id li alana yazdırımı sağlıyoruz
    document.getElementById("sonuc").innerHTML = "Metinde <b>"+ mostRepeatedLetter +"</b> harfi <b>" + highestCount + "</b> kez tekrar ediyor.";
}