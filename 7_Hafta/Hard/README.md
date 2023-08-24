# Metinde ki Sesli Harf Sayısını Bulma
Bu projemizde Kodluyoruz Yaz Challenge'da 7. challenge'ın hard görevini yerine getirdik.



## Kullanılan Teknolojiler

**İstemci:** Javascript, Bootstrap, HTML/CSS


  
## Metinde ki Sesli Harfleri Bulan Fonksiyon

```javascript
        function bul() {
            // Kullanıcıdan metni al
            var metin = document.getElementById('kullaniciMetin').value;

            // Metindeki sesli harfleri belirle
            var sesliHarfler = "aeıioöuüAEIİOÖUÜ";

            // Sesli harf sayısını tutan değişken
            var sesliHarfSayisi = 0;

            // Metindeki her karakteri kontrol et
            for (var i = 0; i < metin.length; i++) {
                if (sesliHarfler.includes(metin[i])) {
                    sesliHarfSayisi++;
                }
            }

            // Sonucu ekrana yazdır
            document.getElementById('sonuc').innerHTML = "Metindeki sesli harf sayısı: <b>" + sesliHarfSayisi + "</b>";
        
        }
```

