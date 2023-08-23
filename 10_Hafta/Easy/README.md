# Dizide ki En Büyük Sayı Bulma
Bu projemizde Kodluyoruz Yaz Challenge'da 10. challenge'ın easy görevini yerine getirdik.



## Kullanılan Teknolojiler

**İstemci:** Javascript, Bootstrap, HTML/CSS


  
## En Büyük Sayıyı Bulan Algoritma

```javascript
         //dizi de ki en büyük sayıyı bulan fonksiyon
        function enBuyukSayiyiBul(dizi) {
            if (dizi.length === 0) {
                return "Dizi boş.";
            }


            //dizi de ki sayıları döngüye alıp en büyük sayıyı enBuyuk degerine atıyoruz
            let enBuyuk = dizi[0];
            for (let i = 1; i < dizi.length; i++) {
                if (dizi[i] > enBuyuk) {
                    enBuyuk = dizi[i];
                }
            }

            return enBuyuk;
        }

        //tanımlamalar
        const sayilar = [10, 5, 20, 8, 15];
        const enBuyukSayi = enBuyukSayiyiBul(sayilar);

        //ekrana yazdırma
        document.getElementById('sonuc').innerHTML = sayilar + " Dizisinde ki En Büyük Sayı: " + enBuyukSayi;

```

