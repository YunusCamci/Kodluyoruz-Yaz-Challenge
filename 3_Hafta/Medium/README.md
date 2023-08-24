# Ödenmesi Gereken Fiyatı Hesaplama

## Kullanılan Teknolojiler

**İstemci:** Javascript, Bootstrap, HTML/CSS


  
## Toplam Ödenmesi Gereken Fiyatı Bulan Fonksiyon

```javascript
         //Pencere açıldığında çalışmaya başlamasını sağlayan tanımlama
         window.onload = function () {

            //Fiyatların Tanımlaması
            const kitapFiyati = 80;
            const defterFiyati = 20;
            const kalemFiyati = 5;

            //Alınan Ürünlerin Tanımlaması
            const alinanKitap = 2;
            const alinanDefter = 3;
            const alinanKalem = 4;

            //Toplam Kitap Fiyatı
            kitapToplamFiyat = alinanKitap * kitapFiyati;

            //Toplam Defter Fiyatı
            defterToplamFiyat = alinanDefter * defterFiyati;

            //Toplam Kalem Fiyatı
            kalemToplamFiyat = alinanKalem * kalemFiyati;

            //Toplam Ürünlerin Fiyatı
            toplamFiyat = kitapToplamFiyat + defterToplamFiyat + kalemToplamFiyat;

            //Toplam Kitap Fiyatı UI da yazılma işlemi
            document.getElementById("kitapToplamFiyat").innerHTML = alinanKitap + " x " + kitapFiyati + " = <b>" + kitapToplamFiyat + " ₺</b>";

            //Toplam Defter Fiyatı UI da yazılma işlemi
            document.getElementById("defterToplamFiyat").innerHTML = alinanDefter + " x " + defterFiyati + " = <b>" + defterToplamFiyat + " ₺</b>";

            //Toplam Kalem Fiyatı UI da yazılma işlemi
            document.getElementById("kalemToplamFiyat").innerHTML = alinanKalem + " x " + kalemFiyati + " = <b>" + kalemToplamFiyat + " ₺</b>";

            //Toplam Fiyat UI da yazılma işlemi
            document.getElementById("toplamFiyat").innerHTML = kitapToplamFiyat + "₺ x " + defterToplamFiyat + "₺ x " + kalemToplamFiyat + "₺ = <b><u>" + toplamFiyat + "₺</u></b> Toplam ödenmesi gereken tutar.";

        };
```
