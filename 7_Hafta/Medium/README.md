# Sayı Basamkaları Toplamı Hesaplama
Bu projemizde Kodluyoruz Yaz Challenge'da 7. challenge'ın medium görevini yerine getirdik.



## Kullanılan Teknolojiler

**İstemci:** Javascript, Bootstrap, HTML/CSS


  
## Basamakları Toplamını Bulan Fonksiyon

```javascript
        function hesapla() {
            // Kullanıcıdan sayıyı al
            var sayi = document.getElementById('kullaniciSayi').value;

            // Sayının basamaklarını toplamak için değişkeni tanımla
            var toplam = 0;

            // Sayının her basamağını toplama ekle
            for (var i = 0; i < sayi.length; i++) {
                toplam += parseInt(sayi[i]);
            }

            // Sonucu ekrana yazdır
            document.getElementById('sonuc').innerHTML = "Sayının basamaklarının toplamı: <b>" + toplam + "</b>";

        }
```

