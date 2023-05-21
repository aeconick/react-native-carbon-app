const categories = [
    {
        category: 'Meal',
        types: [
            /* Unit: kgCO2eq (kilograms of carbon dioxide equivalent) per meal */

            /* https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4372775/ */
            /* Mean greenhouse gas emissions per 2,000 kcal */
            /* https://globalnews.ca/news/3615212/this-is-what-your-breakfast-lunch-and-dinner-calories-actually-look-like/ */
            /* Human eats around 600 calories per meal */
            {
                type: 'High Meat',
                emissions: (7.19 * 600) / 2000
            },
            {
                type: 'Medium Meat',
                emissions: (5.63 * 600) / 2000
            },
            {
                type: 'Low Meat',
                emissions: (4.67 * 600) / 2000
            },
            {
                type: 'Pescetarian',
                emissions: (3.91 * 600) / 2000
            },
            {
                type: 'Vegetarian',
                emissions: (3.81 * 600) / 2000
            },
            {
                type: 'Vegan',
                emissions: (2.89 * 600) / 2000
            },

        ]
    },
    {
        category: 'Transport',
        types: [
            /* https://static.ducky.eco/calculator_documentation.pdf */

            /* Unit: kgCO2eq/m (kilograms of carbon dioxide equivalent) per ?meter? */

            {
                type: 'Train',
                emissions: 0.000042
            },
            {
                type: 'Car',
                emissions: 0.000257
            },
            {
                type: 'Bus',
                emissions: 0.000103
            },
            {
                type: 'Plane',
                emissions: 0.000288
            },
            {
                type: 'Boat',
                emissions: 0.000803
            },
            {
                type: 'Motorbike',
                emissions: 0.000108
            },
        ]
    }, {
        category: 'Streaming',
        types: [
            /* TODO: Unit: bits/s, use getInternetUsageCarbonImpact to get kgCO₂eq */

            /* MP3 song at 192 kbps (kilobytes per second) / 3.8 MB */

            {
                type: 'Audio - Mp3',
                emissions: (3.8 * Math.pow(10, 6) * 8) / 154
            },

            /* 
            Star Wars The Rise Of Skywalker - 2h22
            HD / 720p : 1.21 GB
            Full HD / 1080p : 7.02 GB
            Ultra HD / 2160p : 35.73 Gb
            */

            {
                type: 'Video - Hd',
                emissions: (1.21 * Math.pow(10, 9) * 8) / ((2 * 60 + 22) * 60)
            },
            {
                type: 'Video - FullHd/1080p',
                emissions: (7.02 * Math.pow(10, 9) * 8) / ((2 * 60 + 22) * 60)
            },
            {
                type: 'Video - UltraHd/4K',
                emissions: (35.73 * Math.pow(10, 9) * 8) / ((2 * 60 + 22) * 60)
            },
        ]
    },
    {
        category: 'Purchase',
        types: [
            /* Unit: kgCO2eq (kilograms of carbon dioxide equivalent) per product / transaction */

            {
                type: 'Smartphone',
                emissions: 80
            },
            {
                type: 'Laptop',
                emissions: 210
            },
            {
                type: 'Tablet',
                emissions: 87
            },
            {
                type: 'Computer',
                emissions: 588
            },
            {
                type: 'Television',
                emissions: 500
            },
            {
                type: 'Electric Car',
                emissions: 8800
            },
            {
                type: 'Fossil Fuel Car',
                emissions: 5600
            },
            {
                type: 'Hybrid Car',
                emissions: 6500
            },
            {
                type: 'Crypto Currency Transaction',
                emissions: 20
            },
            {
                type: 'Single Edition Nft',
                emissions: 211
            },
        ]
    },
    {
        category: 'Fashion',
        types: [
            /* Unit: kgCO2eq per product */

            /* Clothing
            https://www.ademe.fr/sites/default/files/assets/documents/poids_carbone-biens-equipement-201809-rapport.pdf
            */

            {
                type: 'Coat',
                emissions: (89 + 39 + 25) / 3
            },
            {
                type: 'Dress',
                emissions: (56 + 56 + 51) / 3
            },
            {
                type: 'Jeans',
                emissions: 25
            },
            {
                type: 'Shirt',
                emissions: (13 + 12) / 2
            },
            {
                type: 'Shoes',
                emissions: (15 + 19 + 20) / 3
            },
            {
                type: 'Sweater',
                emissions: (28 + 26 + 31 + 56 + 12) / 5
            },
            {
                type: 'T-Shirt',
                emissions: (7 + 10 + 6) / 3
            },
        ]
    },
    {
        category: 'Food',
        types: [
            /* Unit: kgCO2eq */

            /* http://www.greeneatz.com/foods-carbon-footprint.html */

            {
                type: 'Red Meat',
                emissions: (39.2 + 27.0) / 2
            }, // (lamb + beef) / 2
            {
                type: 'White Meat',
                emissions: (12.1 + 10.9 + 6.9) / 3
            }, // (pork + turkey + chicken) / 3
            {
                type: 'Fish',
                emissions: 6.1
            },
            {
                type: 'Lamb',
                emissions: 39.2
            },
            {
                type: 'Beef',
                emissions: 27.0
            },
            {
                type: 'Cheese',
                emissions: 13.5
            },
            {
                type: 'Pork',
                emissions: 12.1
            },
            {
                type: 'Turkey',
                emissions: 10.9
            },
            {
                type: 'Chicken',
                emissions: 6.9
            },
            {
                type: 'Tuna',
                emissions: 6.1
            },
            {
                type: 'Eggs',
                emissions: 4.8
            },
            {
                type: 'Potatoes',
                emissions: 2.9
            },
            {
                type: 'Rice',
                emissions: 2.7
            },
            {
                type: 'Nuts',
                emissions: 2.3
            },
            {
                type: 'Beans',
                emissions: 2.0
            },
            {
                type: 'Tofu',
                emissions: 2.0
            },
            {
                type: 'Vegetables',
                emissions: 2.0
            },
            {
                type: 'Milk',
                emissions: 1.9
            },
            {
                type: 'Fruit',
                emissions: 1.1
            },
            {
                type: 'Lentils',
                emissions: 0.9
            },

            /* https://www.bilans-ges.ademe.fr/ */

            {
                type: 'Coffee',
                emissions: 3.14
            },
            {
                type: 'Chocolate',
                emissions: 4.87
            },
        ]
    },
    {
        category: 'Electricity',
        types: [
            /* Unit: kgCO₂eq/J (kilograms of carbon dioxide equivalent) per Joule */

            /* source : https://github.com/carbonalyser/Carbonalyser - kgCO₂eq/kWh */

            {
                type: 'Europe',
                emissions: (0.276 / 3.6) * Math.pow(10, -6)
            }, // - 0.276 [kgCO₂eq/kWh]
            {
                type: 'USA',
                emissions: (0.493 / 3.6) * Math.pow(10, -6)
            }, // - 0.493 [kgCO₂eq/kWh]
            {
                type: 'China',
                emissions: (0.681 / 3.6) * Math.pow(10, -6)
            }, // - 0.681 [kgCO₂eq/kWh]
            {
                type: 'World',
                emissions: (0.681 / 3.6) * Math.pow(10, -6)
            }, // - 0.681 [kgCO₂eq/kWh]   
        ]
    },
    {
        category: 'Custom',
        types: [
            /* Unit: kgCO2eq (kilograms of carbon dioxide equivalent) */

            {
                type: 'Custom',
                emissions: 1
            },
        ]
    },
];

export default categories;