# Kullanıcıdan Alınan Cümlede ki Kelime Sayısını Bulma

## Kullanılan Teknolojiler

**İstemci:** Javascript, Bootstrap, HTML/CSS


  
## Kelime Sayısını Bulan Fonksiyon

```javascript
         //Kelime Sayısı fonksiyonu
        function bul() {

            var metin = document.getElementById("cumleTextArea").value;

            // Metni boşluk karakterine göre böler ve boşluk karakteri sayısı + 1 kadar kelime olduğunu hesaplar
            var kelimeSayisi = metin.split(" ").length;

            document.getElementById("sonuc").innerHTML = "Toplam Kelime Sayısı: " + kelimeSayisi;

        }
```