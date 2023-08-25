# Kodluyoruz Yaz Challenge Son Görev
Harika bir yaz mevsiminin sonuna geldik. Birlikte tamamladığımız challenge'larla dolu bu zaman dilimi içinde harika anılar biriktirdik. Bu deneyimi paylaşmanın mutluluğunu yaşıyorum. Başka challenge'lar da görüşmek üzere. 👋🏻🥲


# Aylık Kitap Okuma Hedefi Hesaplama
Bir yarış pistinde iki yarışmacı aynı anda start alıyor. İlk yarışmacı saatte 15 km hızla, ikinci yarışmacı ise saatte 20 km hızla koşuyor. İkinci yarışmacı kaç saat sonra ilk yarışmacıyı yakalar?


Problemi'nin çözümü.


## Kullanılan Teknolojiler

**İstemci:** Javascript, Bootstrap, HTML/CSS


  
## Aylık Okunması Gereken Kitap Sayısını Hesaplayan Fonksiyon

```javascript
         window.onload = function () {

            //Hedeflenen kitap sayısı
            hedefKitapSayisi = 36;

            //Yılda dedeği için 12 ay olarak aldık
            hedefSure = 12;

            // Hesaplama işlemi
            okumasiGerekenKitap = hedefKitapSayisi / hedefSure;

            // Ekrana yazdırma işlemi
            document.getElementById("sonuc").innerHTML = hedefKitapSayisi + " Kitap / " + hedefSure + " Ay = <b><u>" + okumasiGerekenKitap + " Kitap</u></b> okuması gerekli (aylık).";
  
        };
```
