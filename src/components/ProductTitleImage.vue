<template>
    <div class="carousel-wrapper">
        <div class="carousel-title">
            <span class="Sour_Gummyn_font">{{ pageProductId }}</span>
        </div>
        <el-image class="titleImage" :src="ImageUrl" :fit="fit" />
    </div>
</template>

<script>
export default {
    props: {
        pageProductId: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            fit: 'cover',
            ImageUrl: '',
            ProductList: [
                { name: 'Bathroom Vanities', url: require('@/assets/BathroomVanitiesMenu.jpeg') },
                { name: 'Bathtubs', url: require('@/assets/BathtubsMenu.jpeg') },
                { name: 'DeckTiles', url: require('@/assets/DeckTilesMenu.jpeg') },
                { name: 'Figurines', url: require('@/assets/DecorationMenu.jpg') },
                { name: 'Doors', url: require('@/assets/DoorsMenu.jpg') },
                { name: 'Flooring', url: require('@/assets/FlooringMenu.jpeg') },
                { name: 'Deck Tiles', url: require('@/assets/DeckTilesMenu.jpeg') },
                { name: 'Painting', url: require('@/assets/PaintingMenu.jpg') },
                { name: 'Rugs', url: require('@/assets/RumaRugs.png') },
                { name: 'Staircase and Railings', url: require('@/assets/StaircaseRailingsMenu.jpg') },
                { name: 'Wall Panels', url: require('@/assets/WallPanelsMenu.jpg') },
                { name: 'Lighting', url: require('@/assets/LightingMenu.png') },
                {name:'Garage Doors',url:require('@/assets/overhead_door_courtyard_collection.jpg')},
                {name:'Interior Doors',url:require('@/assets/door-doorway-wall-interior-design.jpg')},
                {name:'Main Doors',url:require('@/assets/360_F_300087471_2ADuosSGeCz4sIamHRDW4E9FYK54zbDr.jpg'),},
                {name:'Main Gates',url:require('@/assets/Luxury-Beautiful-Residential-High-Quality-Main-Gates-Designs-High-Quality-Aluminum-Gate.jpg'),},
                { name: 'Fireplace', url: require('@/assets/FireplaceMenu.jpg') },
            ],
        };
    },
    created() {
        this.updateImageUrl();
    },
    watch: {
        pageProductId(newValue) {
            if (newValue) {
                this.updateImageUrl();
            }
        }
    },
    methods: {
        opendata() {
            console.log('ProductId:', this.pageProductId);
        },
        updateImageUrl() {
            const DataList = this.ProductList;
            this.ImageUrl = require('@/assets/background.png');
            for (let key in DataList) {
                let item = DataList[key];
                if(item.name==this.pageProductId){
                    this.ImageUrl = item.url;
                }
            }
        }
    }
}

/*
ImageUrl:require('@/assets/DecorationMenu.jpg'),console.log('ProductId:', this.pageProductId);

*/
</script>

<style scoped>
.carousel-wrapper {
    position: relative;
    width: 100%;
    height: 35vh;
}

.carousel-title {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    font-size: 3.2vw;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    font-family: Josefin Sans, sans-serif;
}

.titleImage {
    width: 100%;
    height: 35vh;
}

.Sour_Gummyn_font {
    font-family: Sour_Gummy, sans-serif;
}

@media(max-width:768px) {
    .carousel-wrapper {
        position: relative;
        width: 100%;
        height: 25vh;
    }

    .titleImage {
        width: 100%;
        height: 25vh;
    }

    .carousel-title {
        font-size: 8vw;
    }
}
</style>