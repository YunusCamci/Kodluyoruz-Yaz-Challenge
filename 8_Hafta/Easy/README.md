# Sayının Karesini Hesaplama
Bu projemizde Kodluyoruz Yaz Challenge'da 8. challenge'ın easy görevini yerine getirdik.



## Kullanılan Teknolojiler

**İstemci:** Javascript, Bootstrap, HTML/CSS


  
## Sayının Karesini Hesaplayan Algoritma

```javascript
        function hesapla(){
            // Kullanıcıdan gelen sayı verisi
            const sayi = document.getElementById('kullaniciSayi').value;

            //karesini bulmak için sayıyı kendisi ile çarpıyyoruz
            kare = sayi * sayi;

            //karesini buldugumuz sayıyı ekrana yazdırdık
            document.getElementById('sonuc').innerHTML = sayi + " sayısının karesi " + kare + " 'dir";
        }
```

