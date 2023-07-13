let kullaniciSayi; // Kullanıcı tarafından girilen sayıyı tutan değişken
const tamSayiListe = []; // Oluşturulan tam sayıların listesini tutan dizi
const kullanilmisNumara = []; // Kullanılmış sayıların listesini tutan dizi
let sum = 0; // Toplamı tutan değişken


document.getElementById('formAlan').style.display = 'block';

// Oyunu başlatan fonksiyon
function startGame() {

    //Kullanıcıdan gelen sayı
    kullaniciSayi = document.getElementById('kullaniciSayi').value;

    // Boş bir input geldiyse hata göster
    if (kullaniciSayi === '') {
        document.getElementById('error').innerText = 'Lütfen bir sayı girin. 🙁';
        document.getElementById('error').style.display = 'block';
        return;
    }

    // Girilen sayıyı tamsayıya çevir
    kullaniciSayi = parseInt(kullaniciSayi);

    // Geçersiz bir değer gönderilmiş ise hata göster
    if (isNaN(kullaniciSayi)) {
        document.getElementById('error').innerText = 'Geçerli bir sayı girin. 🙁';
        document.getElementById('error').style.display = 'block';
        return;
    }

    // Tek haneli bir sayı girilmesi halinde hata gösterir
    if (kullaniciSayi < 10) {
        document.getElementById('error').innerText = 'Daha eğlenceli bir el için çift haneli bir sayı deneyin! 😏';
        document.getElementById('error').style.display = 'block';
        return;
    }

    // Hataları gizle, oyun alanını göster
    document.getElementById('error').style.display = 'none';
    document.getElementById('formAlan').style.display = 'none';
    document.getElementById('gameContainer').style.display = 'block';
    document.getElementById('numberList').innerHTML = '';
    document.getElementById('result').innerText = 'Toplam: 0 - Hedef: ' + kullaniciSayi;

    // Sayı listesini ve sonucu gösteren elementleri göster
    document.getElementById('numberList').style.display = 'flex';
    document.getElementById('result').style.display = 'block';

    createNumberList();
}

// Sayı listesini oluşturan algoritma
function createNumberList() {
    const numberListElement = document.getElementById('numberList');
    const allNumbers = [];

    for (let i = 1; i <= kullaniciSayi; i++) {

        // Liste deki sayı, kullanıcı tarafından girilen sayıdan farklı ve aralarında en az 5 fark varsa göster 
        // (Kullanıcıdn gelen hedef sayı liste de gözümemesi için)
        if (i !== kullaniciSayi && Math.abs(i - kullaniciSayi) >= 5) {
            // Sayıyı ekle
            allNumbers.push(i);
        }
    }

    // Tüm sayılar tükenmediği sürece ve tamSayiListe'nin boyutu 10'dan küçük olduğu sürece
    while (allNumbers.length > 0 && tamSayiListe.length < 10) {
        const randomIndex = Math.floor(Math.random() * allNumbers.length); // Rastgele bir index seç
        const randomNumber = allNumbers[randomIndex]; // Seçilen indexe karşılık gelen sayıyı al

        tamSayiListe.push(randomNumber); // Sayıyı tamSayiListe'ye ekle
        allNumbers.splice(randomIndex, 1); // Kullanılan sayıyı allNumbers dizisinden çıkar

        const numberElement = document.createElement('div'); // Sayıyı göstermek için bir HTML elementi oluştur
        numberElement.innerText = randomNumber; // Elementin içeriğini sayı yap
        numberElement.classList.add('number'); // Elemente 'number' sınıfını ekle
        numberElement.onclick = function () { // Tıklama olayı tanımla
            addNumber(numberElement, randomNumber); // Sayıyı ekleyen fonksiyonu çağır
        };

        numberListElement.appendChild(numberElement); // Elementi sayı listesine ekle
    }

    // tamSayiListe'yi küçükten büyüğe sırala
    tamSayiListe.sort(function (a, b) {
        return a - b;
    });
}

// Sayı ekleyen algoritma
function addNumber(element, number) {

    //Sayı kullanılmış ise çıkar
    if (kullanilmisNumara.includes(number)) {
        return;
    }

    kullanilmisNumara.push(number);
    sum += number;
    document.getElementById('result').innerText = 'Toplam: ' + sum + ' - Hedef: ' + kullaniciSayi;

    // Toplam, kullanıcı tarafından girilen sayıya eşitse oyunu tamamla
    if (sum === kullaniciSayi) { 
        document.getElementById('result').innerText = 'Tebrikler! Hedef sayıya ulaştınız. 🎉';

        // Oyun bittigi zaman sayı elementlerinin tıklama olaylarını kaldır
        document.querySelectorAll('.number').forEach(function (element) { 
            element.onclick = null;
        });
        document.getElementById('restartButton').style.display = 'inline-block';

        // Toplam sayı kullanıcı shedef sayısını geçmiş ise oyunu durdur
    } else if (sum > kullaniciSayi) { 
        document.getElementById('result').innerText = 'Toplam Sayıyı Aştınız. 🙁 Toplam: ' + sum;

        // Oyun bittigi zaman sayı elementlerinin tıklama olaylarını kaldır
        document.querySelectorAll('.number').forEach(function (element) {
            element.onclick = null;
        });
        document.getElementById('restartButton').style.display = 'inline-block';
    }

    element.style.display = 'none';
}

// Oyunu yeniden başlatma fonksiyonu
function restartGame() {

    // Oyun tekrar başlatma işleminde oyun alanını gizleme, input alanını gösterime alma ve sayı işlemlerini sıfırlama
    document.getElementById('numberList').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById('formAlan').style.display = 'block';
    document.getElementById('kullaniciSayi').value = '';
    tamSayiListe.length = 0; 
    kullanilmisNumara.length = 0;
    sum = 0;
    document.getElementById('restartButton').style.display = 'none';
}
