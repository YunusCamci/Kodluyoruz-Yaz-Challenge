# Çif Tek Sayı Bulma
Bu projemizde Kodluyoruz Yaz Challenge'da 9. challenge'ın easy görevini yerine getirdik.



## Kullanılan Teknolojiler

**İstemci:** Javascript, Bootstrap, HTML/CSS


  
## Sayı Çift mi Tek mi Kontrolü Yapan Algoritma

```javascript
         function hesapla() {
            // Kullanıcıdan gelen sayı verisi
            const sayi = document.getElementById('kullaniciSayi').value;

            // Sayının tek mi çift mi olduğunu kontrol edin
            if (sayi % 2 === 0) {
                document.getElementById('sonuc').innerHTML = sayi + " sayısı çift bir sayıdır.";
            } else {
                document.getElementById('sonuc').innerHTML = sayi + " sayısı tek bir sayıdır.";
            }
        }
```

