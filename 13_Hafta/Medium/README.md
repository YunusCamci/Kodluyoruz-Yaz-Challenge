# Kullanıcıdan Gelen Kelimenin Tüm Harflerini Büyük Yapma
Bu projemizde Kodluyoruz Yaz Challenge'da 13. challenge'ın medium görevini yerine getirdik.
JavaScriptin bize sağlamış oldugu toUpperCase() fonksiyonu ile basit bir şekilde işlemi gerçekleşitirebiliyoruz.


## Kullanılan Teknolojiler

**İstemci:** Javascript, Bootstrap, HTML/CSS


  
## Kelime Büyütme İşlemi ve Ekrana Yazdırımı

```javascript
         // Kelime büyütme fonksiyonu
        function buyut() {
            var kelime = document.getElementById("kelimeInput").value;
            document.getElementById("buyukKelime").innerHTML = kelime.toUpperCase();
        }
```
