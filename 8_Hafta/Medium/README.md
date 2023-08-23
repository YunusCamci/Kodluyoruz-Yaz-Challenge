# Dizide ki Medyanı Bulma
Bu projemizde Kodluyoruz Yaz Challenge'da 8. challenge'ın medium görevini yerine getirdik. (ChatGPT Katkıları ile.)



## Kullanılan Teknolojiler

**İstemci:** Javascript, HTML


  
## Dizide ki Medyanı Bulan Algoritma

```javascript
        function hesaplaMedyan(veriler) {
            // Verileri sırala
            const siraliVeriler = veriler.slice().sort((a, b) => a - b);

            const n = siraliVeriler.length;

            if (n % 2 === 1) {
                // Veri sayısı tek ise
                const ortaIndeks = Math.floor(n / 2);
                return siraliVeriler[ortaIndeks];
            } else {
                // Veri sayısı çift ise
                const ustOrtaIndeks = n / 2;
                const altOrtaIndeks = ustOrtaIndeks - 1;
                return (siraliVeriler[altOrtaIndeks] + siraliVeriler[ustOrtaIndeks]) / 2;
            }
        }

        const veriDizisi = [9, 3, 7, 11, 5]; // Örnek veri dizisi
        const medyan = hesaplaMedyan(veriDizisi);
        console.log("Medyan:", medyan);
```

