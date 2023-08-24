# Kelime Uzunluk Hesaplama
Bu projemizde Kodluyoruz Yaz Challenge'da 7. challenge'ın easy görevini yerine getirdik.



## Kullanılan Teknolojiler

**İstemci:** Javascript, Bootstrap, HTML/CSS


  
## Kelimenin Uzunluğunu Bulan Fonksiyon

```javascript
        function bul() {
            // Kullanıcıdan kelimeyi al
            var kelime = document.getElementById('kullaniciKelime').value;

            // Kelimenin uzunluğunu hesapla
            var uzunluk = kelime.length;

            // Sonucu ekrana yazdır
            document.getElementById('sonuc').innerHTML = "<b>"+ uzunluk + "</b> Karakterden Oluşan Bir Kelime";
        }
```

