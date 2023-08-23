# Cümlede Kullanılan İkilemleri Bulma
Bu projemizde Kodluyoruz Yaz Challenge'da 11. challenge'ın hard görevini yerine getirdik.

    ör;
         Kullanıcı metin: at ağır ağır ilerliyordu.
         Cevap: ikilime kullandınız.
         Kullanıcı metin: Yürüyerek gidiyorduk.
         Cevap: İkileme bulunamadı.


## Kullanılan Teknolojiler

**İstemci:** Javascript, Bootstrap, HTML/CSS


  
## İkileme Kontrol Algoritması

```javascript
         function bul() {
            // Kullanıcıdan gelen veri
            const cumle = document.getElementById('kullaniciMetin').value;

            // Cümleyi küçük harflere dönüştürün ve kelimelere ayırın
            var kelimeler = cumle.toLowerCase().split(" ");

            // İkileme kontrolü için bir döngü oluşturun
            var ikilemeVar = false;
            for (var i = 0; i < kelimeler.length - 1; i++) {
                if (kelimeler[i] === kelimeler[i + 1]) {
                    ikilemeVar = true;
                    break;
                }
            }

            // Sonucu ekrana yazdırın
            if (ikilemeVar) {
                document.getElementById('sonuc').innerHTML = "İkileme kullandınız.";
            } else {
                document.getElementById('sonuc').innerHTML = "İkileme bulunamadı.";
            }
        }
```

