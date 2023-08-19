# Kullanıcıdan Alınan İki Sayının Toplama İşlemi

## Kullanılan Teknolojiler

**İstemci:** Javascript, Bootstrap, HTML/CSS


  
## Toplama İşleminin Yapılmasını Sağlayan Fonksiyon

```javascript
         //Toplama fonksiyonu
        function topla() {

            var sayi1 = Number(document.getElementById("kullaniciSayi1").value);
            var sayi2 = Number(document.getElementById("kullaniciSayi2").value);

            var toplam = sayi1 + sayi2;

            document.getElementById("sonuc").innerHTML = toplam;

        }
```
