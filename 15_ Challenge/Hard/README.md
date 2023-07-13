
# Tam Sayı Listesi ile Hedef Sayıya Ulaşma
Bu projemizde Kodluyoruz Yaz Challenge'da 15. challenge'ın hard görevini tamamladık. Bu görev de kullanıcıdan alınan hedef sayı doğrultusunda tam sayı listesinden farklı kombinasyonları toplama işlemi yaparak hedef sayımıza ulaşmaya çalışıyoruz, bu görevi oyunlaştırma tarzında bir UI ile destekledik. Bu kdou yazarken desteklerinden dolayı yapay zekaya teşekkürlerimi borç bilirim. 🥹😅 



## Kullanılan Teknolojiler

**İstemci:** Javascript, Bootstrap, HTML/CSS


  
## Sayı listesini oluşturan algoritma

```javascript
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
```
