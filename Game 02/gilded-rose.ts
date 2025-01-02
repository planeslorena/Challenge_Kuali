export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        this.items.forEach(item => {
            //Primero actualizo sellIn
            if (item.name != 'Sulfuras, Hand of Ragnaros') {
                item.sellIn = item.sellIn - 1;
            }

            //Luego actualizo Queality segun el caso
            switch (item.name) {
                case 'Aged Brie':
                    if (item.sellIn < 0 && item.quality < 49) {
                        item.quality = item.quality + 2;
                    } else if (item.quality < 50) {
                        item.quality = item.quality + 1;
                    };
                    break;
                case 'Backstage passes to a TAFKAL80ETC concert':
                    if (item.sellIn < 0) {
                        item.quality = 0
                    } else if (item.sellIn < 6 && item.quality < 48) {
                        item.quality = item.quality + 3;
                    } else if (item.sellIn < 11 && item.quality < 49) {
                        item.quality = item.quality + 2;
                    } else if (item.sellIn > 10 && item.quality < 50) {
                        item.quality = item.quality + 1;
                    };
                    break;
                case 'Sulfuras, Hand of Ragnaros':
                    item.quality = item.quality;
                    item.sellIn = item.sellIn;
                    break;
                case 'Conjured':
                    if (item.sellIn < 0 && item.quality > 3 ) {
                        item.quality = item.quality - 4;
                    }else if (item.sellIn < 0 && item.quality == 3){
                        item.quality = 0;
                    } else if (item.quality > 1) {
                        item.quality = item.quality - 2;
                    } else {
                        item.quality = 0;
                    };
                    break;
                default:
                    if (item.sellIn < 0 && item.quality > 1) {
                        item.quality = item.quality - 2;
                    } else if (item.quality > 0) {
                        item.quality = item.quality - 1;
                    };
            }
        });

        return this.items;
    }
}