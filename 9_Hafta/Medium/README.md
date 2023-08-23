# Dizide ki Çift Sayıların Toplamını Bulma
Bu projemizde Kodluyoruz Yaz Challenge'da 9. challenge'ın easy görevini yerine getirdik.



## Kullanılan Teknolojiler

**İstemci:** Javascript, HTML


  
## Çift Sayıların Toplamasını Yapan Algoritma

```javascript
         // Bir dizi oluşturuyoruz
        const sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        // Çift sayıların toplamını tutacak değişkeni başlatıyoruz
        let ciftToplam = 0;

        // Dizi içinde dolaşarak çift sayıları bulup toplama ekliyoruz
        for (let i = 0; i < sayilar.length; i++) {
            if (sayilar[i] % 2 === 0) {
                ciftToplam += sayilar[i];
            }
        }

        // Sonuçları görüntülüyoruz
        console.log("Çift sayıların toplamı:", ciftToplam);
```

